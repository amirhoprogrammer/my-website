import Hero from "@/components/Homepage/Hero";
import { sliderData } from "@/data/sliderData";
import TechStack from "../../components/TechStack/page";
import About from "@/components/Homepage/About";
import Certificate from "@/components/Homepage/certificate/Certificate";
import ResumeSection from "@/components/Homepage/resume/ResumeSection";
import Projectsection from "@/components/projects/Projectsection";
import Skills from "@/components/Homepage/Skills/Skills";
import Footer from "../../components/Footer/page";

function HomePage() {
  return (
    <>
      <Hero slides={sliderData} />
      <About />
      <Certificate />
      <ResumeSection />
      <Projectsection />
      <Skills />
      <TechStack />
      <Footer />
    </>
  );
}

export default HomePage;
