import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Loader2,
  Sparkles,
  Copy,
  Check,
  Clock,
  Globe,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import { submitContact } from "../services/api";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("dhamib610@gmail.com");
    setCopiedEmail(true);
    toast({
      title: "Email copied to clipboard! 📋",
      description: "dhamib610@gmail.com",
      className: "bg-emerald-600 text-white border-none shadow-xl",
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Please enter your name",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.message.trim() || formData.message.length < 8) {
      toast({
        title: "Message should be at least 8 characters",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await submitContact(formData);

      if (response.ok) {
        toast({
          title: "Message Sent Successfully! 🎉",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
          className:
            "bg-emerald-600 text-white dark:bg-emerald-500 border border-emerald-700 shadow-xl",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Message recorded!",
        description:
          "If you don't receive a response, feel free to email me directly at dhamib610@gmail.com",
        className:
          "bg-primary text-primary-foreground border-none shadow-xl",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 relative bg-background overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary/10 rounded-full filter blur-[130px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[130px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-3.5 w-3.5" /> Let's Connect & Build
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Have a Project in Mind?{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let's Talk
            </span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            I'm always open to discussing new opportunities, full-stack web applications, contract roles, or technical collaborations.
          </p>
        </motion.div>

        {/* Contact Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-stretch">
          {/* Left Column: Direct Info & Communication Bento (5 cols) */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-card/60 dark:bg-card/40 border border-border/60 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6 relative overflow-hidden group">
              {/* Top Accent Gradient */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" /> Contact Channels
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Choose the communication channel that works best for you.
                </p>
              </div>

              {/* Direct Info List - 2 Columns Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {/* Email Card with Copy button */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-muted/40 border border-border/50 hover:border-primary/40 transition-all duration-300 flex items-center justify-between gap-2.5 group/item">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
                        Email Address
                      </p>
                      <a
                        href="mailto:dhamib610@gmail.com"
                        className="text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors truncate block"
                      >
                        dhamib610@gmail.com
                      </a>
                    </div>
                  </div>

                  <motion.button
                    onClick={handleCopyEmail}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    className="p-1.5 sm:p-2 rounded-xl bg-background/80 hover:bg-primary hover:text-primary-foreground border border-border text-muted-foreground transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    )}
                  </motion.button>
                </div>

                {/* Phone Card */}
                <a
                  href="tel:+9779841355789"
                  className="p-3.5 sm:p-4 rounded-2xl bg-muted/40 border border-border/50 hover:border-primary/40 transition-all duration-300 flex items-center gap-2.5 sm:gap-3 group/phone block"
                >
                  <div className="p-2 sm:p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
                      Phone & WhatsApp
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-foreground group-hover/phone:text-primary transition-colors">
                      +977 9841355789
                    </p>
                  </div>
                </a>

                {/* Location Card */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-muted/40 border border-border/50 flex items-center gap-2.5 sm:gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-pink-500/10 text-pink-400 shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-foreground truncate">
                      Sanepa, Lalitpur • Nepal
                    </p>
                  </div>
                </div>

                {/* Response Time Guarantee Pill */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2.5 sm:gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <div>
                    <p className="text-[10px] sm:text-[11px] text-emerald-400 font-semibold uppercase tracking-wider">
                      Response Speed
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-emerald-400">
                      Within 24 Hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <p className="text-xs text-muted-foreground font-semibold mb-3">
                  Find Me Online:
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/birendra-c-ingh-dhami-6264b7279/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-muted/60 hover:bg-blue-600 hover:text-white border border-border/60 text-xs font-semibold text-foreground transition-all duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/Biren07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-muted/60 hover:bg-purple-600 hover:text-white border border-border/60 text-xs font-semibold text-foreground transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Modern Glassmorphic Form (7 cols) */}
          <motion.div
            className="lg:col-span-7 flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="h-full bg-card/60 dark:bg-card/40 border border-border/60 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-xl flex flex-col justify-between relative overflow-hidden">
              {/* Form Title */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Fill out the details below and I'll get back to you promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold text-foreground"
                    >
                      Your Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold text-foreground"
                    >
                      Your Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Subject / Project Category */}
                <div className="space-y-1.5 text-left">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold text-foreground"
                  >
                    Subject / Project Scope
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Stack Web App Development / Freelance Project"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5 text-left">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold text-foreground"
                  >
                    Project Description or Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project goals, timeline, or any questions..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-primary-foreground font-bold shadow-lg hover:shadow-primary/30 text-sm cursor-pointer transition-all duration-300 hover:brightness-110",
                    isSubmitting && "opacity-80 cursor-not-allowed"
                  )}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Your Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};