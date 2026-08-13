import {
  ArrowUp,
  Linkedin,
  Github,
  Facebook,
  Mail,
  Phone,
  Heart,
  Sparkles,
  MapPin,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/in/birendra-c-ingh-dhami-6264b7279",
      label: "Visit Birendra Singh Dhami on LinkedIn",
      color: "hover:text-blue-500 hover:border-blue-500/40",
    },
    {
      icon: <Github size={18} />,
      href: "https://github.com/Biren07",
      label: "Visit Birendra Singh Dhami on GitHub",
      color: "hover:text-purple-400 hover:border-purple-500/40",
    },
    {
      icon: <Facebook size={18} />,
      href: "https://www.facebook.com/share/1B9EAuN8Wx/",
      label: "Visit Birendra Singh Dhami on Facebook",
      color: "hover:text-blue-600 hover:border-blue-600/40",
    },
    {
      icon: <Mail size={18} />,
      href: "mailto:dhamib610@gmail.com",
      label: "Send email to Birendra Singh Dhami",
      color: "hover:text-pink-500 hover:border-pink-500/40",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Me", href: "#about" },
    { name: "Tech Skills", href: "#skills" },
    { name: "Featured Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: <Mail size={15} />,
      text: "dhamib610@gmail.com",
      href: "mailto:dhamib610@gmail.com",
    },
    {
      icon: <Phone size={15} />,
      text: "+977 9841355789",
      href: "tel:+9779841355789",
    },
    {
      icon: <MapPin size={15} />,
      text: "Sanepa, Lalitpur, Nepal",
      href: null,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="px-3.5 sm:px-6 lg:px-8 pt-12 pb-28 sm:pb-20 mt-16 sm:mt-24 relative overflow-hidden bg-background">
      {/* Subtle bottom gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-gradient-to-t from-primary/10 via-purple-500/5 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="backdrop-blur-2xl bg-card/60 dark:bg-card/40 rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-14 border border-border/60 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Top subtle gradient accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />

          <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 md:gap-8 pb-8 sm:pb-12 border-b border-border/50">
            {/* Column 1: Branding & Bio (Full width 2-cols on mobile, 5 cols on desktop) */}
            <div className="col-span-2 lg:col-span-5 flex flex-col space-y-3.5 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-2xl bg-gradient-to-tr from-primary via-purple-500 to-pink-500 shadow-md">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-background flex items-center justify-center font-mono font-bold text-xs sm:text-sm text-primary">
                    &lt;BD/&gt;
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-foreground">
                    BIRENDRA SINGH DHAMI
                  </h3>
                  <p className="text-[11px] sm:text-xs text-primary font-medium">
                    Full Stack Developer & MERN Architect
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-sm">
                Full Stack Engineer based in Lalitpur, Nepal. Building dependable web applications with React, Next.js, Node.js, and MongoDB.
              </p>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 text-[11px] sm:text-xs font-mono font-medium w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Select Projects &amp; Roles
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2.5 pt-1">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={social.label}
                    className={cn(
                      "p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-muted/60 text-muted-foreground border border-border/60 transition-all duration-300 shadow-sm",
                      social.color
                    )}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Navigation (Col 1 on mobile 2-col grid, 3 cols on desktop) */}
            <div className="col-span-1 lg:col-span-3 flex flex-col">
              <h4 className="text-foreground font-bold text-xs sm:text-sm uppercase tracking-wider mb-3.5 sm:mb-5 flex items-center gap-1.5 sm:gap-2">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> Navigation
              </h4>

              <ul className="space-y-2.5 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  >
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-1.5"
                    >
                      <span className="text-primary/60 text-xs">›</span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Direct Connect (Col 2 on mobile 2-col grid, 4 cols on desktop) */}
            <div className="col-span-1 lg:col-span-4 flex flex-col">
              <h4 className="text-foreground font-bold text-xs sm:text-sm uppercase tracking-wider mb-3.5 sm:mb-5 flex items-center gap-1.5 sm:gap-2">
                <Send className="h-3.5 w-3.5 text-purple-400" /> Connect
              </h4>

              <ul className="space-y-3 sm:space-y-3.5">
                {contactInfo.map((info, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground"
                    whileHover={{ x: 3 }}
                  >
                    <span className="p-1.5 sm:p-2 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                      {info.icon}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="hover:text-primary transition-colors font-medium truncate text-[11px] sm:text-sm"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="font-medium text-[11px] sm:text-sm">{info.text}</span>
                    )}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-3.5 sm:mt-6 pt-3 sm:pt-4 border-t border-border/40">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 w-full px-3 py-2 sm:py-2.5 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground font-semibold text-[11px] sm:text-xs border border-primary/20 transition-all duration-300"
                >
                  <span>Drop Message</span>
                  <Send className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Back to Top */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 text-center sm:text-left text-[11px] sm:text-xs">
              <span>© {currentYear} Handcrafted with</span>
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={12} className="text-red-500 fill-red-500 inline" />
              </motion.span>
              <span>by <span className="font-bold text-foreground">Birendra Singh Dhami</span></span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-[10px] sm:text-[11px] text-muted-foreground/80 hidden md:inline">
                React 18 • Next.js • Tailwind CSS • Framer Motion
              </span>

              <motion.button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="p-2 sm:p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-md shadow-primary/25 cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Scroll to Top"
              >
                <ArrowUp size={14} />
                <span className="sm:hidden text-[10px]">Top</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};