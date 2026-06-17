import {
  ArrowUp,
  Linkedin,
  Github,
  Mail,
  Phone,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/birendra-c-ingh-dhami-6264b7279/", label: "LinkedIn" },
    { icon: <Github size={18} />, href: "https://github.com/Biren07", label: "GitHub" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: "dhamib610@gmail.com", href: "mailto:dhamib610@gmail.com" },
    { icon: <Phone size={16} />, text: "+977 9841355789", href: "tel:+977 9841355789" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <footer className="px-6 py-12 mt-20 relative">
      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="backdrop-blur-md bg-white/40 dark:bg-black/40 rounded-2xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-800/50 shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Branding Column */}
            <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start space-y-4">
              <div className="text-2xl font-black bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-wider">
                BIRENDRA
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left max-w-xs leading-relaxed font-light">
                Crafting modern, fast, and scalable digital experiences using MERN stack & Next.js.
              </p>
              <div className="flex space-x-3 pt-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary border border-gray-200/30 dark:border-gray-700/30 transition-colors duration-300"
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Column */}
            <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
              <h4 className="text-gray-900 dark:text-white font-bold mb-5 text-sm uppercase tracking-widest relative">
                Quick Navigation
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 w-8 h-0.5 bg-primary rounded-full"></span>
              </h4>
              <ul className="space-y-3 text-center md:text-left">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  >
                    <a 
                      href={link.href} 
                      className="hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm text-gray-600 dark:text-gray-400 font-medium"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
              <h4 className="text-gray-900 dark:text-white font-bold mb-5 text-sm uppercase tracking-widest relative">
                Say Hello
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 w-8 h-0.5 bg-primary rounded-full"></span>
              </h4>
              <ul className="space-y-4 w-full flex flex-col items-center md:items-start">
                {contactInfo.map((info, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="p-2 rounded-xl bg-primary/10 text-primary">{info.icon}</span>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="hover:text-primary dark:hover:text-primary transition-colors duration-300 font-medium"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="font-medium">{info.text}</span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="mt-10 pt-8 border-t border-gray-200/50 dark:border-gray-800/50 flex flex-col items-center text-xs text-gray-500 dark:text-gray-400 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-1">
              <span>© {currentYear} Designed with</span>
              <motion.span 
                className="text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={12} className="fill-red-500" />
              </motion.span>
              <span>by Birendra</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-primary transition-colors font-medium">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors font-medium">Terms</a>
              <a href="#" className="hover:text-primary transition-colors font-medium">Cookies</a>
              <motion.a
                href="#hero"
                aria-label="Back to top"
                className="p-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-md shadow-primary/20"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={16} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};