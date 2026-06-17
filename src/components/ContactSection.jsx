import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import { submitContact } from "../services/api";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const isActive = (fieldName) => focusedField === fieldName || formData[fieldName].length > 0;
  
  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "Email is required",
        variant: "destructive"
      });
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({
        title: "Invalid email format",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.message.trim() || formData.message.length < 10) {
      toast({
        title: "Message must be at least 10 characters",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await submitContact(formData);

      if (response.ok) {
        toast({
          title: "Message sent! 🎉",
          description: "I'll get back to you within 24 hours.",
          variant: "success",
          className: "bg-green-600 text-white dark:bg-green-500 border border-green-700 shadow-lg"
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or email me directly at dhamib610@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Contact Information */}
          <motion.div 
            className="space-y-6 sm:space-y-8 p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-background border border-border flex flex-col justify-between"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary"></span>
                Contact Details
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-accent/30 rounded-lg sm:rounded-xl transition-all duration-300">
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Email</p>
                    <a
                      href="mailto:dhamib610@gmail.com"
                      className="text-sm sm:text-base font-medium hover:text-primary transition-colors"
                    >
                      dhamib610@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-accent/30 rounded-lg sm:rounded-xl transition-all duration-300">
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Phone</p>
                    <a
                      href="tel:+977 9841355789"
                      className="text-sm sm:text-base font-medium hover:text-primary transition-colors"
                    >
                      +977 9841355789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-accent/30 rounded-lg sm:rounded-xl transition-all duration-300">
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Location</p>
                    <span className="text-sm sm:text-base font-medium">
                      NewBaneshwor, Kathmandhu Nepal
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-border/50">
              <h4 className="font-medium mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground text-left">Find me on</h4>
              <div className="flex gap-2 sm:gap-3 items-center">
                {[
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/birendra-c-ingh-dhami-6264b7279/",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    url: "https://github.com/Biren07",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-accent hover:bg-primary/15 text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={social.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border shadow-sm text-left"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary"></span>
              Send Me a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm sm:text-base pt-6 pb-2"
                  placeholder=""
                />
                <motion.label
                  htmlFor="name"
                  className="absolute left-4 pointer-events-none text-muted-foreground text-sm sm:text-base"
                  initial={{ y: 14, scale: 1 }}
                  animate={{ 
                    y: isActive("name") ? 6 : 14,
                    scale: isActive("name") ? 0.85 : 1,
                    color: focusedField === "name" ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"
                  }}
                  transition={{ type: "spring", stiffness: 450, damping: 25 }}
                  style={{ originX: 0, originY: 0 }}
                >
                  Your Name
                </motion.label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm sm:text-base pt-6 pb-2"
                  placeholder=""
                />
                <motion.label
                  htmlFor="email"
                  className="absolute left-4 pointer-events-none text-muted-foreground text-sm sm:text-base"
                  initial={{ y: 14, scale: 1 }}
                  animate={{ 
                    y: isActive("email") ? 6 : 14,
                    scale: isActive("email") ? 0.85 : 1,
                    color: focusedField === "email" ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"
                  }}
                  transition={{ type: "spring", stiffness: 450, damping: 25 }}
                  style={{ originX: 0, originY: 0 }}
                >
                  Your Email
                </motion.label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none text-sm sm:text-base pt-6 pb-2"
                  placeholder=""
                />
                <motion.label
                  htmlFor="message"
                  className="absolute left-4 pointer-events-none text-muted-foreground text-sm sm:text-base"
                  initial={{ y: 14, scale: 1 }}
                  animate={{ 
                    y: isActive("message") ? 6 : 14,
                    scale: isActive("message") ? 0.85 : 1,
                    color: focusedField === "message" ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"
                  }}
                  transition={{ type: "spring", stiffness: 450, damping: 25 }}
                  style={{ originX: 0, originY: 0 }}
                >
                  Your Message
                </motion.label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold shadow-lg shadow-primary/20 text-sm sm:text-base cursor-pointer group",
                  isSubmitting && "opacity-80 cursor-not-allowed"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};