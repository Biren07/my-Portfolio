import { ArrowDown, MousePointerClick, Sparkles, Code, Palette, Rocket, Award ,Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background/90 to-primary/5" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full"
            style={{
              width: Math.random() * 100 + 20 + 'px',
              height: Math.random() * 100 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
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
              repeatType: 'reverse',
            }}
          />
        ))}
        <motion.div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 blur-[100px]" animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }} transition={{ duration: 15, repeat: Infinity }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-amber-400/20 to-pink-600/20 blur-[100px]" animate={{ x: [0, -60, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }} transition={{ duration: 18, repeat: Infinity, delay: 5 }} />
      </div>

      <div className="container max-w-7xl mx-auto w-full mt-20 sm:mt-0">
        <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}>
          
         
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <Sparkles className="h-4 w-4" /> Welcome to my portfolio
            </motion.div>

            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <span className="block text-foreground">Code. Create.</span>
              <motion.span className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2" animate={{ backgroundPosition: ['0%', '100%', '0%'] }} transition={{ duration: 6, repeat: Infinity }} style={{ backgroundSize: '200% 100%' }}>Innovate.</motion.span>
            </motion.h1>

            <motion.p className="text-xl sm:text-2xl text-muted-foreground mt-6 leading-relaxed max-w-2xl" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              I'm <span className="text-primary font-semibold">Birendra</span> — a Mern Stack Developer crafting fast, elegant, and scalable digital solutions.
            </motion.p>

     
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />, title: "Frontend Developer", description: "React , Next", color: "from-blue-500 to-cyan-500" },
                { icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />, title: "Backend Developer", description: "Node , express", color: "from-blue-500 to-cyan-500" },
                { icon: <Rocket className="h-4 w-4 sm:h-5 sm:w-5" />, title: "Mern Stack Developer", description: "Modern Framework", color: "from-green-500 to-emerald-500" }
              ].map((service, index) => (
                <motion.div key={service.title} className="group p-4 rounded-xl bg-background/60 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer backdrop-blur-sm" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }} whileHover={{ y: -6, scale: 1.02 }}>
                  <motion.div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`} whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>{service.icon}</motion.div>
                  <div className="text-sm font-semibold text-foreground mb-2">{service.title}</div>
                  <div className="text-xs text-muted-foreground">{service.description}</div>
                </motion.div>
              ))}
            </div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <motion.a href="#projects" className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-3" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Code className="h-5 w-5" /> <span>View My Work</span> <Rocket className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a href="#contact" className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold border border-primary/50 text-foreground hover:border-primary transition-all duration-300 bg-background/80 backdrop-blur-sm text-sm flex items-center justify-center gap-3" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <span>Let's Talk</span> <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};