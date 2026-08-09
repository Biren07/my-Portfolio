import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Terminal, Layers, Sparkles, CheckCircle2 } from "lucide-react";

// Import your images
import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import jsIcon from "@/assets/icons/javascript.png";
import tsIcon from "@/assets/icons/typescript.png";
import reactIcon from "@/assets/icons/react.png";
import nextjsIcon from "@/assets/icons/nextjs.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressIcon from "@/assets/icons/express.png";
import nestjsIcon from "@/assets/icons/nestjs.svg";
import mongodbIcon from "@/assets/icons/mongodb.png";
import javaIcon from "@/assets/icons/java.png";
import pythonIcon from "@/assets/icons/python.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import firebaseIcon from "@/assets/icons/firebase.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import dockerIcon from "@/assets/icons/docker.png";
import postgresqlIcon from "@/assets/icons/postgresql.png";
import SQLIcon from "@/assets/icons/sql.png";

const skills = [
  // Frontend
  { name: "React.js", category: "frontend", icon: "react", role: "Primary Framework", badge: "Production Grade" },
  { name: "Next.js", category: "frontend", icon: "nextjs", role: "SSR / App Router", badge: "Production Grade" },
  { name: "JavaScript (ES6+)", category: "frontend", icon: "javascript", role: "Core Language", badge: "Daily Driver" },
  { name: "TypeScript", category: "frontend", icon: "typescript", role: "Type Safety", badge: "Active Use" },
  { name: "Tailwind CSS", category: "frontend", icon: "css", role: "Styling & UI Systems", badge: "Daily Driver" },
  { name: "HTML5 & CSS3", category: "frontend", icon: "html", role: "Semantic Layouts", badge: "Foundation" },

  // Backend
  { name: "Node.js", category: "backend", icon: "nodejs", role: "Runtime & Microservices", badge: "Production Grade" },
  { name: "Express.js", category: "backend", icon: "express", role: "RESTful Endpoints", badge: "Production Grade" },
  { name: "NestJS", category: "backend", icon: "nestjs", role: "Enterprise Architecture", badge: "Modular Backend" },
  { name: "Python", category: "backend", icon: "python", role: "Scripting & Automation", badge: "Proficient" },
  { name: "Java", category: "backend", icon: "java", role: "OOP Fundamentals", badge: "Academic / Core" },

  // Database
  { name: "MongoDB & Mongoose", category: "database", icon: "mongodb", role: "NoSQL Data Modeling", badge: "Production Grade" },
  { name: "PostgreSQL & SQL", category: "database", icon: "postgresql", role: "Relational Schemas", badge: "Production Grade" },
  { name: "Firebase", category: "database", icon: "firebase", role: "Auth & Realtime DB", badge: "Integration" },

  // Tools & DevOps
  { name: "Git", category: "tools", icon: "git", role: "Version Control", badge: "Daily Driver" },
  { name: "GitHub", category: "tools", icon: "github", role: "CI/CD & Collaboration", badge: "Daily Driver" },
  { name: "Docker", category: "tools", icon: "docker", role: "Containerization", badge: "Deployment" },
  { name: "VS Code", category: "tools", icon: "vscode", role: "IDE & Dev Environment", badge: "Configured" },
];

const categories = [
  { id: "all", label: "Full Matrix" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & APIs" },
  { id: "database", label: "Databases" },
  { id: "tools", label: "DevOps & Tools" },
];

const iconImages = {
  html: htmlIcon,
  css: cssIcon,
  javascript: jsIcon,
  typescript: tsIcon,
  react: reactIcon,
  nextjs: nextjsIcon,
  nodejs: nodejsIcon,
  express: expressIcon,
  nestjs: nestjsIcon,
  postgresql: postgresqlIcon,
  mongodb: mongodbIcon,
  java: javaIcon,
  python: pythonIcon,
  git: gitIcon,
  github: githubIcon,
  docker: dockerIcon,
  firebase: firebaseIcon,
  vscode: vscodeIcon,
  sql: SQLIcon,
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative bg-background border-t border-border/40">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-foreground text-xs font-mono mb-3.5">
            <Layers className="h-3.5 w-3.5 text-primary" /> tech_stack.json
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Technical Stack &amp;{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Tooling Matrix
            </span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Battle-tested technologies and developer tools I rely on daily to ship reliable, high-performance web products.
          </p>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer border",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-muted-foreground border-border hover:text-foreground hover:bg-muted"
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-200 shadow-xs flex items-center gap-3.5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-muted/60 border border-border/80 flex items-center justify-center shrink-0 p-2.5 group-hover:scale-105 transition-transform">
                  <img
                    src={iconImages[skill.icon]}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h3 className="font-bold text-sm text-foreground truncate group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="text-[11px] text-muted-foreground truncate font-mono">
                    {skill.role}
                  </p>
                  <span className="inline-block text-[10px] font-mono font-medium px-2 py-0.5 mt-1.5 rounded-md bg-muted text-muted-foreground border border-border/60">
                    {skill.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};