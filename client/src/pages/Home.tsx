import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Pavan Dasari | Product Manager";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0c16] via-[#121520] to-[#0a0c16] text-foreground">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}
