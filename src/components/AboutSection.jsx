import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Code,
  Download,
  Sparkles,
  Zap,
  CheckCircle2,
  Terminal,
  ArrowRight,
  Layers,
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
    { number: "2+", label: "Years Coding Experience" },
    { number: "6+", label: "Full-Stack Production Apps" },
    { number: "100%", label: "Client & Quality Dedication" },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 relative bg-background overflow-hidden"
    >
      {/* Background ambient gradient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-10 w-72 md:w-96 h-72 md:h-96 bg-primary/10 rounded-full filter blur-[120px] opacity-40"></div>
        <div className="absolute bottom-1/4 right-10 w-72 md:w-96 h-72 md:h-96 bg-purple-500/10 rounded-full filter blur-[120px] opacity-40"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-3.5 w-3.5" /> About My Journey
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Turning Ideas into{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Scalable Reality
            </span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            A passionate Full Stack & MERN Developer focused on engineering high-performance web applications, fluid user interfaces, and robust backend APIs.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 md:gap-8 items-stretch">
          {/* Column 1 - Executive Profile Card (5 cols) */}
          <motion.div
            className="lg:col-span-5 flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="h-full flex flex-col justify-between bg-card/60 dark:bg-card/40 border border-border/60 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-500 relative overflow-hidden group">
              {/* Top Accent Gradient */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />

              <div>
                {/* Avatar & Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative p-[2.5px] rounded-2xl bg-gradient-to-tr from-primary via-purple-500 to-pink-500 shadow-md shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[0.9rem] overflow-hidden bg-muted">
                      <img
                        src={profile?.profileImage || "/Birendra Dhami.png"}
                        alt="Birendra Singh Dhami"
                        className="w-full h-full object-cover object-top filter contrast-[1.04] group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "/Birendra Dhami.png";
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Birendra Singh Dhami
                    </h3>
                    <p className="text-primary font-medium text-xs sm:text-sm">
                      Full Stack Developer || MERN Stack Developer
                    </p>
                    <div className="inline-flex items-center gap-1.5 mt-1 text-[11px] font-semibold text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                      Full Stack Developer @ JavTech Infosys, Sanepa
                    </div>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                  Currently working as a <span className="text-foreground font-semibold">Full Stack Developer at JavTech Infosys Pvt. Ltd.</span> (Sanepa, Lalitpur), specializing in scalable web systems. I architect dynamic React/Next.js interfaces, robust Node.js/Express and Laravel backend APIs, secure database schemas, and real-time features.
                </p>

                {/* Core Stack Mini-Cards */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-muted/40 border border-border/50">
                    <div className="flex items-center gap-2 text-primary font-bold text-xs mb-1">
                      <Code className="h-3.5 w-3.5" /> Frontend
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      React 18, Next.js, Tailwind, Framer Motion
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-muted/40 border border-border/50">
                    <div className="flex items-center gap-2 text-purple-400 font-bold text-xs mb-1">
                      <Layers className="h-3.5 w-3.5" /> Backend
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      Node.js, Express, NestJS, MongoDB, PostgreSQL
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/40">
                <motion.a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-primary-foreground font-semibold text-xs shadow-md hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.a>

                <motion.a
                  href={profile?.resume || "/MyResumeCV.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border/80 hover:border-primary/40 bg-background/80 hover:bg-muted font-semibold text-xs text-foreground transition-all duration-300"
                  download={!profile?.resume ? "MyResumeCV.pdf" : undefined}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download CV</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Column 2 - Details & Philosophy Bento Grid (7 cols) */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6 md:gap-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Stats Row Bento Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl bg-card/60 dark:bg-card/40 border border-border/60 backdrop-blur-xl shadow-lg text-center flex flex-col justify-center items-center"
                >
                  <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Current Professional Experience Bento Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-card/90 via-card/60 to-primary/5 dark:bg-card/40 border border-primary/30 backdrop-blur-xl shadow-xl hover:border-primary/60 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      Full Stack Developer @ JavTech Infosys Pvt. Ltd.
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Present
                    </span>
                  </div>
                  <p className="text-xs text-primary font-semibold mb-2">Sanepa, Lalitpur, Nepal</p>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Actively architecting, developing, and deploying full-stack web applications, RESTful APIs, high-performance user interfaces, and database solutions for enterprise clients.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Philosophy Card 1 - Clean Code & Architecture */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 rounded-3xl bg-card/60 dark:bg-card/40 border border-border/60 backdrop-blur-xl shadow-xl hover:border-primary/40 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <Terminal className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    Modern Engineering & Clean Architecture
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    I believe in writing clean, modular, and maintainable code with clear documentation. My development workflow emphasizes performance optimization, robust API design, state management, and reusable UI components.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Philosophy Card 2 - Agile Execution & Problem Solving */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 rounded-3xl bg-card/60 dark:bg-card/40 border border-border/60 backdrop-blur-xl shadow-xl hover:border-primary/40 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    Agile Mindset & Rapid Execution
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Fast prototyping, continuous integration, and creative problem-solving. I thrive in dynamic environments where complex business challenges are converted into seamless, production-ready digital products.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
