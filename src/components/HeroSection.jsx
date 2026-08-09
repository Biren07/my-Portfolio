import { ArrowDown, Code, FileText, MapPin, Terminal, CheckCircle2, Briefcase, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const roles = [
    "Full Stack Developer",
    "MERN Stack Engineer",
    "React & Next.js Specialist",
    "Node.js & API Builder",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const speed = isDeleting ? 40 : 80;

    const typing = setTimeout(() => {
      setText((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1600);
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
      className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-12 overflow-hidden bg-background pt-28 sm:pt-32 pb-16 lg:pt-36 lg:pb-20"
    >
      {/* Subtle blueprint grid texture */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* Gentle ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[350px] bg-primary/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="container max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text, Roles, Bio & CTAs (7 cols) */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Premium Live Status Badge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group inline-flex items-center gap-2 p-1 pr-3.5 rounded-full bg-card/90 hover:bg-card border border-border/80 hover:border-primary/40 backdrop-blur-md shadow-xs hover:shadow-md transition-all duration-300 mb-6 cursor-default"
            >
              {/* Left Segment: Live Pulse Pill */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 text-[11px] font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Full Stack Dev</span>
              </div>

              {/* Center Segment: Company */}
              <span className="text-xs font-medium text-foreground flex items-center gap-1">
                <span className="text-muted-foreground font-normal">@</span>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  JavTech Infosys
                </span>
              </span>

              {/* Right Segment: Location */}
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground pl-2 border-l border-border/70">
                <MapPin className="w-3 h-3 text-primary shrink-0" />
                <span>Lalitpur, Nepal</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.14] tracking-tight text-foreground">
              Hey, I'm <span className="text-foreground">Birendra Dhami</span>.{" "}
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-primary via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                Full Stack Developer.
              </span>
            </h1>

            {/* Dynamic Role Monospace Ticker */}
            <div className="mt-4 inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-muted-foreground px-3 py-1.5 rounded-lg bg-muted/50 border border-border/70">
              <span className="text-primary font-bold">{">"}</span>
              <span className="text-muted-foreground">Focus:</span>
              <span className="font-semibold text-foreground">
                {text || "Full Stack Web Apps"}
              </span>
              <span className="w-1.5 h-3.5 bg-primary animate-pulse inline-block" />
            </div>

            {/* Bio Description */}
            <p className="text-sm sm:text-base text-muted-foreground mt-5 leading-relaxed max-w-xl">
              Specialized in architecting modern full-stack web applications at <strong className="text-foreground font-semibold">JavTech Infosys</strong>. I engineer high-performance React/Next.js user interfaces, scalable Node.js/Express APIs, and structured MongoDB databases that solve real-world business problems.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 mt-6">
              {["React 18", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-card border border-border text-[11px] font-mono text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5 mt-8 w-full sm:w-auto">
              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground shadow-md hover:bg-primary/90 text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Code className="h-4 w-4" />
                <span>View Projects</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold border border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get in Touch</span>
                <ArrowDown className="h-4 w-4 text-muted-foreground" />
              </motion.a>

              <a
                href="/Final-BirendraCV.pdf"
                download="Birendra_Dhami_CV.pdf"
                className="px-4 py-3 rounded-xl font-medium text-xs text-muted-foreground hover:text-foreground flex items-center justify-center gap-1.5 transition-colors border border-border/60 bg-muted/40 hover:bg-muted"
              >
                <FileText className="h-4 w-4" />
                <span>Resume PDF</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Avatar Container & Floating Dev Badges (5 cols) */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end items-center relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Main Avatar Card Frame */}
            <div className="relative group">
              {/* Floating Badge 1: Role / Company (Top Left) */}
              <motion.div
                className="absolute -top-4 -left-3 sm:-top-5 sm:-left-5 bg-card/95 backdrop-blur-md border border-border shadow-lg p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 z-20"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-muted-foreground font-mono uppercase">Current Role</p>
                  <p className="text-xs font-bold text-foreground">Full Stack Developer</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Shipped Apps (Bottom Right) */}
              <motion.div
                className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-5 bg-card/95 backdrop-blur-md border border-border shadow-lg p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 z-20"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-muted-foreground font-mono uppercase">Production</p>
                  <p className="text-xs font-bold text-foreground">6+ Live Deployments</p>
                </div>
              </motion.div>

              {/* Avatar Frame */}
              <div className="p-2 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-border via-border/60 to-primary/20 shadow-2xl border border-border/40">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[21rem] lg:h-[21rem] rounded-[1.4rem] sm:rounded-[2.2rem] overflow-hidden bg-muted border border-background shadow-inner">
                  <img
                    src="/profile.jpeg"
                    alt="Birendra Singh Dhami"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      e.target.src = "/Birendra Dhami.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
