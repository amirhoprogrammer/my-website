import Hero from "@/components/Homepage/Hero";
import { sliderData } from "@/data/sliderData";
import TechStack from "../TechStack/page";
import About from "@/components/Homepage/About";
import Certificate from "@/components/Homepage/certificate/Certificate";
import ResumeSection from "@/components/Homepage/resume/ResumeSection";


function HomePage() {
  return (
    <>
      <Hero slides={sliderData} />
      <About />
      <Certificate />
      <ResumeSection />

      {/*<TechStack />*/}
    </>
  );
}

export default HomePage;
