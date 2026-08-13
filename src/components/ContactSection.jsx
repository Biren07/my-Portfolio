import {
  Linkedin,
  Github,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
  Copy,
  Check,
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
        title: "Message could not be sent",
        description:
          "Please try again or email directly at dhamib610@gmail.com",
        variant: "destructive",
      });
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
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-foreground text-xs font-mono mb-3.5">
            <Mail className="h-3.5 w-3.5 text-primary" /> get_in_touch.sh
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Let's Connect &amp;{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Collaborate
            </span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Have an interesting project, full-stack opportunity, or want to discuss technical architecture? Send me a note and I'll get back to you promptly.
          </p>
        </motion.div>

        {/* Contact Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          {/* Left Column: Direct Info & Communication Channels (5 cols on desktop) */}
          <motion.div
            className="lg:col-span-5 flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-6">
              <div>
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1.5 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" /> Contact Channels
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Feel free to reach out directly through any of the channels below.
                  </p>
                </div>

                {/* Direct Info Cards: 1-col on mobile, 2-col on tablet, 1-col on desktop for maximum breathing room */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                  {/* Email Card with Copy button */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-muted/50 border border-border/70 hover:border-primary/40 transition-colors flex items-center justify-between gap-3 group/item">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
                          Email Address
                        </p>
                        <a
                          href="mailto:dhamib610@gmail.com"
                          className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block"
                        >
                          dhamib610@gmail.com
                        </a>
                      </div>
                    </div>

                    <motion.button
                      onClick={handleCopyEmail}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-xl bg-background hover:bg-primary hover:text-primary-foreground border border-border text-muted-foreground transition-colors cursor-pointer shrink-0"
                      title="Copy Email"
                    >
                      {copiedEmail ? (
                        <Check className="h-4 w-4 text-emerald-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </motion.button>
                  </div>

                  {/* Phone Card */}
                  <a
                    href="tel:+9779841355789"
                    className="p-3.5 sm:p-4 rounded-2xl bg-muted/50 border border-border/70 hover:border-primary/40 transition-colors flex items-center gap-3 group/phone block"
                  >
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
                        Phone &amp; WhatsApp
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-foreground group-hover/phone:text-primary transition-colors">
                        +977 9841355789
                      </p>
                    </div>
                  </a>

                  {/* Location Card */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-muted/50 border border-border/70 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 shrink-0">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-foreground truncate">
                        Sanepa, Lalitpur • Nepal
                      </p>
                    </div>
                  </div>

                  {/* Response Speed Guarantee */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0 ml-1" />
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-[11px] text-emerald-500 dark:text-emerald-400 font-mono uppercase tracking-wider">
                        Response Time
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-emerald-500 dark:text-emerald-400">
                        Prompt reply within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-border/60">
                <p className="text-xs text-muted-foreground font-semibold mb-3">
                  Find Me Online:
                </p>
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  <a
                    href="https://www.linkedin.com/in/birendra-c-ingh-dhami-6264b7279"
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label="Visit Birendra Singh Dhami on LinkedIn"
                    className="inline-flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-muted/60 hover:bg-primary hover:text-primary-foreground border border-border text-xs font-semibold text-foreground transition-colors"
                  >
                    <Linkedin className="h-4 w-4 shrink-0" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/Biren07"
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label="Visit Birendra Singh Dhami on GitHub"
                    className="inline-flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-muted/60 hover:bg-primary hover:text-primary-foreground border border-border text-xs font-semibold text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4 shrink-0" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.facebook.com/share/1B9EAuN8Wx/"
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label="Visit Birendra Singh Dhami on Facebook"
                    className="inline-flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-muted/60 hover:bg-primary hover:text-primary-foreground border border-border text-xs font-semibold text-foreground transition-colors"
                  >
                    <Facebook className="h-4 w-4 shrink-0" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Form (7 cols on desktop) */}
          <motion.div
            className="lg:col-span-7 flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full bg-card border border-border rounded-3xl p-6 sm:p-8 md:p-9 shadow-md flex flex-col justify-between">
              {/* Form Title */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1.5">
                  Send a Direct Message
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Fill out your details below and it will be delivered directly to my inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
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
                      placeholder="e.g. Birendar......"
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
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
                      placeholder="e.g. biren@example.com"
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
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
                    placeholder="e.g. Full-Stack Web App / Freelance Project"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5 text-left">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold text-foreground"
                  >
                    Message Content <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project goals, timeline, or any questions..."
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 rounded-xl bg-primary text-primary-foreground font-semibold shadow-sm hover:bg-primary/90 text-sm cursor-pointer transition-colors",
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