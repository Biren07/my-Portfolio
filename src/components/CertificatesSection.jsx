import React from "react";
import {
  Award,
  Download,
  ShieldCheck,
  Eye,
  Layers,
  Code2,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const CertificatesSection = () => {
  const certificates = [
    {
      id: "mern",
      title: "MERN Stack Professional Certification",
      issuer: "Full Stack Web Development Academy",
      category: "Full Stack / MERN",
      pdfUrl: "/certificate/Mern stack certificate.pdf",
      description:
        "Comprehensive full-stack certification covering MongoDB, Express.js, React 18, Node.js, authentication architecture, and real-time API integrations.",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Socket.IO"],
      accentColor: "from-primary via-purple-500 to-pink-500",
      badgeColor: "bg-primary/15 text-primary border-primary/30",
      icon: Code2,
      date: "Verified Credential",
    },
    {
      id: "laravel",
      title: "Laravel & PHP Backend Certification",
      issuer: "Professional Web Engineering Institute",
      category: "Backend / PHP",
      pdfUrl: "/certificate/Laravel certifiacate.pdf",
      description:
        "Advanced backend engineering certification focused on Laravel MVC architecture, Eloquent ORM, MySQL database schema design, and secure API endpoints.",
      skills: ["PHP", "Laravel", "MySQL", "MVC Architecture", "RESTful APIs", "Authentication"],
      accentColor: "from-rose-500 via-red-500 to-amber-500",
      badgeColor: "bg-rose-500/15 text-rose-400 border-rose-500/30",
      icon: Layers,
      date: "Verified Credential",
    },
    {
      id: "internship",
      title: "Web Developer Internship Certificate",
      issuer: "Anubhabi Technologies Pvt. Ltd. (Koteshwor, Kathmandu)",
      category: "Web Development / Internship",
      pdfUrl: "/certificate/internship certificate.jpg",
      description:
        "Completed hands-on Web Development internship at Anubhabi Technologies Pvt. Ltd. (Koteshwor, Kathmandu), engineering responsive web applications, backend APIs, and collaborative Agile systems.",
      skills: ["Full Stack Dev", "Web Development", "REST APIs", "Git / GitHub", "Agile"],
      accentColor: "from-emerald-500 via-teal-500 to-cyan-500",
      badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      icon: Briefcase,
      date: "Verified Internship",
    },
  ];

  return (
    <section
      id="certificates"
      className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 relative bg-background overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full filter blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[140px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-foreground text-xs font-mono mb-3.5">
            <Award className="h-3.5 w-3.5 text-primary" /> credentials_and_certifications
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Verified formal certifications in Full-Stack MERN Architecture, PHP/Laravel Backend Engineering, and Industry Web Development Internship in Kathmandu.
          </p>
        </motion.div>

        {/* Certificates Grid - Spacious card layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {certificates.map((cert) => {
            const Icon = cert.icon;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-border/60 hover:border-primary/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/15 p-6 sm:p-8"
              >
                {/* Glowing Top Accent Bar */}
                <div
                  className={cn(
                    "absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r transition-opacity duration-300 opacity-90 group-hover:opacity-100",
                    cert.accentColor
                  )}
                />

                <div>
                  {/* Top Badge & Verified status */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border shadow-sm",
                        cert.badgeColor
                      )}
                    >
                      {cert.category}
                    </span>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <ShieldCheck className="h-4 w-4 text-emerald-400" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Icon & Title Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-medium mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-medium bg-muted/60 text-muted-foreground border border-border/50 group-hover:border-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-border/40 flex items-center gap-3">
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-primary-foreground font-semibold text-xs shadow-md hover:shadow-lg hover:shadow-primary/25 hover:brightness-110 active:scale-[0.98] transition-all duration-300"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>View PDF</span>
                  </a>

                  <a
                    href={cert.pdfUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border/80 hover:border-primary/40 bg-background/80 hover:bg-muted font-semibold text-xs text-foreground transition-all duration-300"
                    title="Download Certificate"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
