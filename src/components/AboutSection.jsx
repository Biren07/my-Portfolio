import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Code,
  Download,
  Terminal,
  ArrowRight,
  Layers,
  Database,
  Cpu,
  CheckCircle2,
  GitBranch,
} from "lucide-react";
import { motion } from "framer-motion";
import { getProfile } from "../services/api";

export const AboutSection = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        }
      } catch (error) {
        console.error("Error fetching profile details:", error);
      }
    };
    fetchProfile();
  }, []);

  const stats = [
    { number: "2+", label: "Years Hands-on Coding", sub: "Building MERN / Full-Stack" },
    { number: "6+", label: "Production Deployments", sub: "E-comm, Portals, Real-time" },
    { number: "Nepal", label: "Based in Lalitpur", sub: "JavTech Infosys • Sanepa" },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative bg-background overflow-hidden border-t border-border/40"
    >
      <div className="container mx-auto max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-foreground text-xs font-mono mb-3.5">
            <Terminal className="h-3.5 w-3.5 text-primary" /> about_me.md
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Background &{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Engineering Approach
            </span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            A practical look at my daily development work at JavTech Infosys, my technical stack, and how I build dependable web software.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          {/* Left Column - Executive Profile Card (5 cols) */}
          <motion.div
            className="lg:col-span-5 flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full flex flex-col justify-between bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
              <div>
                {/* Avatar & Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-muted border border-border shrink-0 shadow-sm">
                    <img
                      src={profile?.profileImage || "/profile.jpeg"}
                      alt="Birendra Singh Dhami - Full Stack Engineer at JavTech Infosys"
                      loading="lazy"
                      className="w-full h-full object-cover object-top filter contrast-[1.03]"
                      onError={(e) => {
                        e.target.src = "/Birendra Dhami.png";
                      }}
                    />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      Birendra Singh Dhami
                    </h3>
                    <p className="text-primary font-medium text-xs sm:text-sm">
                      Full Stack Engineer
                    </p>
                    <div className="inline-flex items-center gap-1.5 mt-1 text-[11px] font-medium text-emerald-500 dark:text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                      JavTech Infosys • Sanepa, Lalitpur
                    </div>
                  </div>
                </div>

                {/* Honest Dev Bio */}
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                  I specialize in modern JavaScript/TypeScript ecosystems. My day-to-day work involves writing robust React/Next.js interfaces, designing modular RESTful APIs with Node.js/Express, optimizing MongoDB queries, and handling third-party integrations like Khalti payment gateways and real-time WebSockets.
                </p>

                {/* Core Pillars */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-muted/50 border border-border/60">
                    <div className="flex items-center gap-2 text-foreground font-bold text-xs mb-1">
                      <Code className="h-3.5 w-3.5 text-primary" /> Frontend Stack
                    </div>
                    <p className="text-[11px] text-muted-foreground font-mono">
                      React, Next.js, Tailwind, Framer Motion
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-muted/50 border border-border/60">
                    <div className="flex items-center gap-2 text-foreground font-bold text-xs mb-1">
                      <Database className="h-3.5 w-3.5 text-purple-400" /> Backend Stack
                    </div>
                    <p className="text-[11px] text-muted-foreground font-mono">
                      Node.js, Express, MongoDB, REST APIs
                    </p>
                  </div>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/60">
                <motion.a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs shadow-sm hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.a>

                <a
                  href={profile?.resume || "/Final-BirendraCV.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card hover:bg-muted font-semibold text-xs text-foreground transition-colors"
                  download={!profile?.resume ? "Birendra_Dhami_CV.pdf" : undefined}
                >
                  <Download className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Work & Principles (7 cols) */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-5 md:gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Real Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-card border border-border shadow-xs text-left"
                >
                  <div className="text-xl sm:text-2xl font-black text-foreground mb-0.5">
                    {stat.number}
                  </div>
                  <div className="text-xs font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5 font-mono">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Experience Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-card border border-border shadow-xs hover:border-primary/40 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm sm:text-base font-bold text-foreground">
                      Full Stack Developer @ JavTech Infosys Pvt. Ltd.
                    </h3>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active Role
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono mb-2">Sanepa, Lalitpur, Nepal</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Developing and maintaining web applications, integrating secure backend endpoints, building reusable UI components with React/Tailwind, and optimizing database workflows for client projects.
                  </p>
                </div>
              </div>
            </div>

            {/* How I Write Code Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-card border border-border shadow-xs hover:border-primary/40 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                  <GitBranch className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground mb-1.5">
                    Engineering Principles & Code Quality
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    I believe great software is about clear structure, predictable state, and maintainability. I prioritize modular folder architecture, strict API error handling, intuitive error states on the frontend, and fast page loads over unnecessary complexity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
