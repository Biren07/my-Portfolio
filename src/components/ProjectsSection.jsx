import {
  ArrowRight,
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  Globe,
  Radio,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { getProjects } from "../services/api";

const defaultProjects = [
  {
    id: 1,
    title: "New Bishwakarma Sun Chadi Pasal",
    category: "Ecommerce",
    description:
      "A premium Nepali jewelry eCommerce platform featuring real-time 24K gold & silver daily rates, bridal collection showcases, and BIS hallmarked certification.",
    image: "/projects/gold.png",
    tags: ["Next.js", "React", "Tailwind CSS", "MongoDB", "E-Commerce"],
    demoUrl: "https://bishwakarma-sun-chadi-pasal-vzpo-livid.vercel.app/",
    githubUrl: "https://github.com/Biren07",
    featured: true,
    accentColor: "from-amber-500 via-yellow-500 to-amber-600",
  },
  {
    id: 2,
    title: "ShopNest Multi-Vendor",
    category: "Ecommerce",
    description:
      "A scalable multi-vendor marketplace connecting customers with verified vendors, complete with shopping cart, merchant dashboard, and Khalti payment gateway.",
    image: "/projects/Screenshot 2025-10-10 210817.png",
    tags: ["React", "Tailwind", "Node.js", "Khalti", "MongoDB", "Express"],
    demoUrl: "https://shop-nest-kappa.vercel.app/",
    githubUrl: "https://github.com/Biren07/ShopNest.git",
    featured: true,
    accentColor: "from-emerald-500 via-teal-500 to-cyan-600",
  },
  {
    id: 3,
    title: "DreamDock Job Portal",
    category: "Job Portal",
    description:
      "A modern career hub bridging recruiters and top talent with instant job applications, candidate resume screening, and role filtering.",
    image: "/projects/job.png",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "AI"],
    demoUrl: "https://job-portal-website-2025.vercel.app/",
    githubUrl: "https://github.com/Biren07/Job-Portal-Website-2025.git",
    featured: true,
    accentColor: "from-purple-500 via-indigo-500 to-pink-500",
  },
  {
    id: 4,
    title: "Chatify Instant Messenger",
    category: "Communication",
    description:
      "A real-time instant messaging web application powered by Socket.IO for low-latency chat, online presence tracking, and sleek glassmorphism UI.",
    image: "/projects/Screenshot 2025-10-10 211531.png",
    tags: ["Socket.IO", "MongoDB", "Express", "React", "Tailwind"],
    demoUrl: "https://chat-application-iota-black.vercel.app/",
    githubUrl: "https://github.com/Biren07/chat-application.git",
    featured: false,
    accentColor: "from-blue-500 via-cyan-500 to-indigo-600",
  },
  {
    id: 5,
    title: "Agrovet & Agri-Care",
    category: "Management",
    description:
      "An agricultural product and supply management system for tracking inventory, farming fertilizers, seeds, and farmer consultation services.",
    image: "/projects/agrovet.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    demoUrl: "https://agrovet-system.vercel.app/",
    githubUrl: "https://github.com/Biren07",
    featured: false,
    accentColor: "from-emerald-600 via-green-500 to-teal-600",
  },
  {
    id: 6,
    title: "Khabar Hub - News Portal",
    category: "News & Media",
    description:
      "A fast, modern digital news portal featuring breaking news tickers, category-wise feeds, search filtering, and responsive article layouts.",
    image: "/projects/news.png",
    tags: ["React", "Node.js", "Tailwind", "REST API"],
    demoUrl: "https://news-portal-ashy-iota.vercel.app/",
    githubUrl: "https://github.com/Biren07",
    featured: false,
    accentColor: "from-rose-500 via-red-500 to-pink-600",
  },
];

const categoryBadgeStyles = {
  Ecommerce:
    "bg-amber-500/10 text-amber-500 border-amber-500/20 dark:bg-amber-500/15",
  "Job Portal":
    "bg-purple-500/10 text-purple-400 border-purple-500/20 dark:bg-purple-500/15",
  Communication:
    "bg-blue-500/10 text-blue-400 border-blue-500/20 dark:bg-blue-500/15",
  Management:
    "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 dark:bg-emerald-500/15",
  "News & Media":
    "bg-rose-500/10 text-rose-400 border-rose-500/20 dark:bg-rose-500/15",
};

export const ProjectsSection = () => {
  const [projectsList, setProjectsList] = useState(defaultProjects);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setProjectsList(data);
          }
        }
      } catch (error) {
        console.error("Failed to fetch projects from backend:", error);
      }
    };
    fetchProjects();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacityBg = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.1, 0.15, 0.1]
  );

  const categories = [
    "All",
    ...Array.from(new Set(projectsList.map((p) => p.category))),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projectsList
      : projectsList.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 lg:py-36 overflow-hidden bg-background"
      ref={sectionRef}
    >
      {/* Dynamic ambient radial gradients */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-3.5 w-3.5" /> Featured Works & Systems
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
            Crafted for <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">Scale & Experience</span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Explore full-stack applications with responsive interfaces, robust backend APIs, secure payments, and modern cloud deployment.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-8 pt-6 border-t border-border/50 text-xs font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>100% Live Production Demos</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" />
              <span>Full-Stack Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-purple-400" />
              <span>Modern Cloud Deployments</span>
            </div>
          </div>
        </motion.div>

        {/* Project Filter Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-muted/40 backdrop-blur-lg border border-border/60 shadow-inner">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={cn(
                    "relative px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 z-10",
                    isActive
                      ? "text-primary-foreground shadow-md font-bold"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-xl -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid - 2 columns on mobile & tablets, 3 columns on large screens */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isLive = project.demoUrl && project.demoUrl.startsWith("http");

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-border/60 hover:border-primary/40 transition-all duration-500 shadow-md hover:shadow-2xl hover:shadow-primary/10"
                >
                  {/* Glowing Top Accent Bar */}
                  <div
                    className={cn(
                      "absolute inset-x-0 top-0 h-1 bg-gradient-to-r transition-opacity duration-300 opacity-80 group-hover:opacity-100",
                      project.accentColor
                    )}
                  />

                  {/* Thumbnail / Image Area */}
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted/40 border-b border-border/40">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "/Birendra Dhami.png";
                        }}
                      />

                      {/* Subtle hover gradient vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                      {/* Live Demo Status Pill on Image */}
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                        {isLive ? (
                          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/75 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[9px] sm:text-[10px] font-bold shadow-md">
                            <Radio className="h-2.5 w-2.5 sm:h-3 sm:w-3 animate-pulse text-emerald-400" />
                            <span className="hidden xs:inline sm:inline">Live App</span>
                            <span className="xs:hidden sm:hidden">Live</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-muted-foreground text-[9px] sm:text-[10px] font-medium">
                            <Github className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                            <span>Code</span>
                          </div>
                        )}
                      </div>

                      {/* Category Badge on Image */}
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
                        <span
                          className={cn(
                            "px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border shadow-md",
                            categoryBadgeStyles[project.category] ||
                              "bg-primary/20 text-primary border-primary/30"
                          )}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-3.5 sm:p-5 md:p-6">
                      <h3 className="text-xs sm:text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug mb-1 sm:mb-2 line-clamp-1 sm:line-clamp-none">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-[11px] sm:text-xs md:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 mb-2.5 sm:mb-5">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-1 sm:mb-2">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[9px] sm:text-[11px] font-medium bg-muted/60 text-muted-foreground border border-border/50 group-hover:border-primary/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="hidden sm:inline-block px-2 py-0.5 rounded-lg text-[10px] font-medium bg-muted/40 text-muted-foreground">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons Bar */}
                  <div className="px-3.5 pb-3.5 sm:px-6 sm:pb-6 pt-1 sm:pt-2 border-t border-border/30 flex items-center justify-between gap-2 sm:gap-3 mt-auto">
                    {isLive ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 px-2.5 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-purple-600 text-primary-foreground font-semibold text-[11px] sm:text-xs shadow-md hover:shadow-lg hover:shadow-primary/25 hover:brightness-110 active:scale-[0.98] transition-all duration-300"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </a>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 px-2.5 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-[11px] sm:text-xs border border-primary/20 transition-all duration-300"
                      >
                        <span>Source</span>
                        <Github className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-border/60 hover:border-primary/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors shrink-0"
                      title="View GitHub Code"
                    >
                      <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Collaboration Banner */}
        <motion.div
          className="mt-20 md:mt-24"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-card via-muted/30 to-background border border-primary/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-3">
                Have a project or opportunity?
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Let's collaborate to build fast, scalable web applications with state-of-the-art design and clean code.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-primary-foreground font-semibold text-sm shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                <span>Let's Build Together</span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <motion.a
                href="https://github.com/Biren07"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-background/80 hover:bg-muted border border-border text-foreground font-semibold text-sm transition-colors duration-300"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Profile</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
