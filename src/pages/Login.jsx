import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Lock, User, Loader2, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { adminLogin } from "../services/api";

export const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      return toast({
        title: "All fields are required",
        variant: "destructive"
      });
    }

    setIsSubmitting(true);
    try {
      const response = await adminLogin(username, password);
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("adminUsername", data.username);
        toast({
          title: "Logged in successfully! 🚀",
          description: `Welcome back, ${data.username}`,
          variant: "success",
          className: "bg-green-600 text-white dark:bg-green-500 border border-green-700 shadow-lg"
        });
        navigate("/admin");
      } else {
        toast({
          title: data.message || "Invalid credentials",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Oops! Server connection error",
        description: "Please check if backend is running.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background drifting glow elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Floating Home Link */}
      <motion.button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <ArrowLeft size={16} /> Back to Portfolio
      </motion.button>

      <motion.div
        className="w-full max-w-md bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl p-8 text-left z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center mx-auto mb-4 border border-primary/20">
            <Lock size={22} />
          </div>
          <h2 className="text-2xl font-bold">Admin Portal</h2>
          <p className="text-muted-foreground text-sm mt-1">Please log in to manage your portfolio</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="relative">
            <input
              type="text"
              id="username"
              value={username}
              onFocus={() => setFocusedField("username")}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-3 pl-11 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm sm:text-base pt-6 pb-2"
              placeholder=""
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground pt-2">
              <User size={16} />
            </div>
            <motion.label
              htmlFor="username"
              className="absolute left-11 pointer-events-none text-muted-foreground text-sm sm:text-base"
              initial={{ y: 14, scale: 1 }}
              animate={{ 
                y: (focusedField === "username" || username.length > 0) ? 6 : 14,
                scale: (focusedField === "username" || username.length > 0) ? 0.85 : 1,
                color: focusedField === "username" ? "var(--color-primary)" : "var(--color-muted-foreground)"
              }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              style={{ originX: 0, originY: 0 }}
            >
              Username
            </motion.label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 pl-11 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm sm:text-base pt-6 pb-2"
              placeholder=""
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground pt-2">
              <Lock size={16} />
            </div>
            <motion.label
              htmlFor="password"
              className="absolute left-11 pointer-events-none text-muted-foreground text-sm sm:text-base"
              initial={{ y: 14, scale: 1 }}
              animate={{ 
                y: (focusedField === "password" || password.length > 0) ? 6 : 14,
                scale: (focusedField === "password" || password.length > 0) ? 0.85 : 1,
                color: focusedField === "password" ? "var(--color-primary)" : "var(--color-muted-foreground)"
              }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              style={{ originX: 0, originY: 0 }}
            >
              Password
            </motion.label>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold shadow-lg shadow-primary/20 text-sm sm:text-base cursor-pointer",
              isSubmitting && "opacity-80 cursor-not-allowed"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Signing in...</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};
