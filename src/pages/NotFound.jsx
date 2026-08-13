import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, AlertCircle } from "lucide-react";
import { SEO } from "../components/SEO";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 relative overflow-hidden select-none">
      <SEO
        title="404 - Page Not Found | Birendra Singh Dhami"
        description="The page you are looking for does not exist."
        canonicalUrl="https://birendrasinghdhami07.com.np/404"
        noindex={true}
      />

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary/30 via-purple-600/20 to-pink-500/10 blur-[120px]" />
      </div>

      {/* Background tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-md w-full text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 404 Visual Monogram Badge */}
        <div className="relative mb-6">
          <div className="p-1 rounded-3xl bg-gradient-to-tr from-primary via-purple-500 to-pink-500 shadow-[0_0_50px_-10px_rgba(168,85,247,0.5)]">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-[1.4rem] bg-card flex flex-col items-center justify-center border border-border backdrop-blur-xl">
              <span className="font-mono text-3xl sm:text-4xl font-black bg-gradient-to-br from-white via-primary to-purple-400 bg-clip-text text-transparent">
                404
              </span>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mt-1">
                NOT FOUND
              </span>
            </div>
          </div>
        </div>

        {/* Heading & Subtext */}
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground mb-2">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6 max-w-xs">
          The requested page could not be located or may have been moved.
        </p>

        {/* Terminal Error Snippet */}
        <div className="w-full bg-card/80 backdrop-blur-xl border border-border/80 rounded-2xl p-4 shadow-lg text-left font-mono text-xs mb-8">
          <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-border/60 text-muted-foreground text-[10px]">
            <span className="w-2 h-2 rounded-full bg-red-500/80" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            <span className="ml-2">system.log</span>
          </div>
          <p className="text-red-400 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>HTTP STATUS 404: ROUTE_NOT_DEFINED</span>
          </p>
          <p className="text-muted-foreground mt-1 text-[11px]">
            <span className="text-primary">&gt;</span> Redirecting back to home page is recommended.
          </p>
        </div>

        {/* Return to Home CTA */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground shadow-md hover:bg-primary/90 text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Home className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
