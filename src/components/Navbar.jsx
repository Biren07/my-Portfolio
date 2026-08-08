import { useEffect, useState, useRef } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  Award,
  Mail,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Certificates", href: "#certificates", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState("dark");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    audioRef.current = new Audio("/music.mp3");
    audioRef.current.loop = true;

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "certificates", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Top Header Bar for Desktop & Top Utility for Mobile */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/40 py-3.5 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-white font-bold font-mono text-sm shadow-md group-hover:scale-105 transition-transform">
              &lt;BD/&gt;
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black tracking-tight text-foreground group-hover:text-primary transition-colors leading-none">
                BIRENDRA SINGH DHAMI
              </span>
              <span className="text-[10px] text-muted-foreground font-medium hidden sm:inline">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-muted/50 p-1.5 rounded-full border border-border/50">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-300",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/60"
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons (Music, Theme, Socials) */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleAudio}
              className={cn(
                "p-2 rounded-xl border border-border/60 hover:border-primary/40 text-xs transition-all",
                isPlaying
                  ? "bg-primary/20 text-primary border-primary/50"
                  : "bg-background/80 text-muted-foreground hover:text-foreground"
              )}
              title={isPlaying ? "Mute Background Music" : "Play Background Music"}
            >
              {isPlaying ? <Volume2 className="h-4 w-4 animate-pulse" /> : <VolumeX className="h-4 w-4" />}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-border/60 hover:border-primary/40 bg-background/80 text-muted-foreground hover:text-foreground transition-all"
              title="Toggle Light/Dark Theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <a
              href="https://github.com/Biren07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-border/60 hover:border-primary/40 bg-background/80 text-muted-foreground hover:text-foreground transition-all hidden sm:flex"
              title="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href="https://linkedin.com/in/birendra-singh-dhami"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-border/60 hover:border-primary/40 bg-background/80 text-muted-foreground hover:text-foreground transition-all hidden sm:flex"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Floating Bottom Dock Navbar */}
      <div className="md:hidden fixed bottom-3 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto flex items-center gap-1.5 p-2 rounded-full bg-background/90 dark:bg-[#0E1322]/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-primary/20"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.substring(1);

            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "p-2.5 rounded-full flex flex-col items-center justify-center transition-all duration-300 relative",
                  isActive
                    ? "bg-gradient-to-tr from-primary to-purple-600 text-white shadow-lg shadow-primary/40 scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
                title={item.name}
              >
                <Icon className="h-4 w-4" />
                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute -bottom-1 w-1 h-1 rounded-full bg-white"
                  />
                )}
              </a>
            );
          })}
        </motion.nav>
      </div>
    </>
  );
};

export default Navbar;
