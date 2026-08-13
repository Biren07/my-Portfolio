import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { CertificatesSection } from "../components/CertificatesSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Birendra Singh Dhami | Full Stack Developer & MERN Specialist"
        description="Birendra Singh Dhami is a Full Stack Developer from Nepal specializing in React, Next.js, Node.js, Express.js, MongoDB and modern web applications."
        canonicalUrl="https://birendrasinghdhami07.com.np/"
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
