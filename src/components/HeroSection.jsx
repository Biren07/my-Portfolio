import { ArrowDown, Sparkles, Code, Rocket } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Creative Coder",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const speed = isDeleting ? 60 : 100;

    const typing = setTimeout(() => {
      setText((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1200); // pause before deleting
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(typing);
  }, [text, isDeleting, index]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-16 overflow-hidden bg-gradient-to-br from-background via-background/90 to-primary/5"
    >
 
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full"
            style={{
              width: Math.random() * 100 + 40 + "px",
              height: Math.random() * 100 + 40 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 80],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

     
      <div className="container max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 mt-20 sm:mt-0">
      
        <motion.div
          className="flex-1 text-center lg:text-left max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="h-4 w-4" /> Welcome to my portfolio
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-foreground">Code. Create.</span>
            <motion.span
              className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{ backgroundSize: "200% 100%" }}
            >
              Innovate.
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-lg sm:text-xl text-muted-foreground mt-6 leading-relaxed flex flex-col items-center lg:items-start"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span>
              I'm <span className="text-primary font-semibold">Birendra</span> — a passionate
            </span>
            <div className="text-xl sm:text-2xl font-bold text-primary mt-2 mb-2 h-8 flex items-center justify-center lg:justify-start">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">{text}</span>
              <motion.span
                className="inline-block w-1 h-6 bg-primary ml-1.5"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>
            <span>
              crafting sleek, fast, and scalable digital experiences.
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code className="h-5 w-5" /> <span>View My Work</span>{" "}
              <Rocket className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact"
              className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold border border-primary/50 text-foreground hover:border-primary transition-all duration-300 bg-background/80 backdrop-blur-sm text-sm flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Talk</span>{" "}
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Floating Badge 1 - Top Left */}
          <motion.div
            className="absolute -top-4 -left-2 sm:-top-6 sm:left-2 md:-top-8 md:left-4 bg-background/80 dark:bg-black/70 backdrop-blur-xl border border-primary/20 shadow-2xl p-3 rounded-2xl flex items-center gap-3 z-20 hover:border-primary/50 transition-colors"
            animate={{
              y: [0, -8, 0],
              x: [0, 4, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400 text-sm font-bold shadow-inner">🚀</div>
            <div className="text-left">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Experience</p>
              <p className="text-xs font-bold text-foreground">2+ Years Coding</p>
            </div>
          </motion.div>

          {/* Floating Badge 2 - Bottom Right */}
          <motion.div
            className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:right-2 md:-bottom-8 md:right-4 bg-background/80 dark:bg-black/70 backdrop-blur-xl border border-primary/20 shadow-2xl p-3 rounded-2xl flex items-center gap-3 z-20 hover:border-primary/50 transition-colors"
            animate={{
              y: [0, 8, 0],
              x: [0, -4, 0]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 rounded-xl bg-purple-500/15 text-purple-400 text-sm font-bold shadow-inner">🏢</div>
            <div className="text-left">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Full Stack Developer</p>
              <p className="text-xs font-bold text-foreground flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                JavTech Infosys • Sanepa
              </p>
            </div>
          </motion.div>

          {/* Main Professional Avatar Container */}
          <motion.div
            className="relative p-[3px] rounded-full sm:rounded-[2.5rem] bg-gradient-to-tr from-primary via-purple-500 to-pink-500 shadow-[0_0_50px_-8px_rgba(168,85,247,0.45)] z-10 group"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full sm:rounded-[2.35rem] overflow-hidden bg-muted/30 backdrop-blur-sm border border-white/10 shadow-2xl">
              <img
                src="/Birendra Dhami.png"
                alt="Birendra Singh Dhami"
                className="w-full h-full object-cover object-top filter contrast-[1.04] saturate-[1.04] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle gradient vignette to blend bottom seamlessly */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Dynamic Ambient Background Glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/30 via-purple-600/25 to-pink-500/20 rounded-full sm:rounded-[2.5rem] blur-3xl -z-10"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};
