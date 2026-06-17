import React, { useState, useEffect } from "react";
import { Briefcase, Code, Download } from "lucide-react";
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

  return (
    <section
      id="about"
      className="py-12 md:py-20 px-4 sm:px-6 relative bg-background overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary mb-3 sm:mb-4 cursor-default"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
          >
            About Me
          </motion.span>
        </motion.div>

        <motion.div 
          className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Column 1 - Bio Card */}
          <motion.div 
            className="lg:w-1/2"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <motion.div 
              className="h-full bg-muted/20 border border-border rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-colors duration-300"
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.08)",
                borderColor: "rgba(139, 92, 246, 0.3)",
                backgroundColor: "rgba(139, 92, 246, 0.02)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <motion.div 
                  className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 mx-auto sm:mx-0"
                  whileHover={{ scale: 1.1, borderColor: "rgba(139, 92, 246, 0.6)" }}
                >
                  <img
                    src={profile?.profileImage || "/Birendra Dhami.png"}
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold transition-colors duration-300 hover:text-primary">
                    Birendra Singh Dhami
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    MERN Stack Developer || Frontend Developer || Backend Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  I specialize in building modern web applications with a focus
                  on performance, accessibility, and user experience. My
                  approach combines technical expertise with creative
                  problem-solving to deliver impactful digital solutions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <motion.div 
                    className="bg-background p-3 sm:p-4 rounded-lg border border-border"
                    whileHover={{ scale: 1.02, borderColor: "rgba(139, 92, 246, 0.3)" }}
                  >
                    <h4 className="text-sm sm:text-base font-semibold text-primary">
                      Frontend
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      React, Next.js, Tailwind
                    </p>
                  </motion.div>
                  <motion.div 
                    className="bg-background p-3 sm:p-4 rounded-lg border border-border"
                    whileHover={{ scale: 1.02, borderColor: "rgba(139, 92, 246, 0.3)" }}
                  >
                    <h4 className="text-sm sm:text-base font-semibold text-primary">
                      Backend
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Node.js, Express
                    </p>
                  </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <motion.a
                    href="#contact"
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-lg font-medium text-center text-sm sm:text-base shadow-sm"
                    whileHover={{ scale: 1.03, y: -2, boxShadow: "0 10px 20px rgba(139, 92, 246, 0.2)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Me
                  </motion.a>

                  <motion.a
                    href={profile?.resume || "/Final-BirendraCV.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg border border-border font-medium flex items-center justify-center gap-2 text-sm sm:text-base hover:bg-muted/30"
                    download={!profile?.resume ? "Final-BirendraCV.pdf" : undefined}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                    Resume
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Column 2 - Details Cards */}
          <motion.div 
            className="lg:w-1/2 space-y-4 md:space-y-6"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  staggerChildren: 0.15 
                } 
              }
            }}
          >
            {/* Card 1 */}
            <motion.div
              className="bg-muted/20 border border-border rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-colors duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.08)",
                borderColor: "rgba(139, 92, 246, 0.3)",
                backgroundColor: "rgba(139, 92, 246, 0.02)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-lg bg-primary/10 text-primary">
                  <Code className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 transition-colors duration-300 hover:text-primary">
                    Development Philosophy
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    I believe in writing clean, maintainable code with thorough
                    documentation. My development process emphasizes testing,
                    performance optimization, and progressive enhancement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-muted/20 border border-border rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-colors duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.08)",
                borderColor: "rgba(139, 92, 246, 0.3)",
                backgroundColor: "rgba(139, 92, 246, 0.02)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-lg bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 hover:text-primary transition-colors duration-300">
                    Agile Mindset, Startup Spirit
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Fast iterations, open feedback, and creative problem-solving
                    — I thrive in dynamic environments where innovation meets
                    execution.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
