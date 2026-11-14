import Hero from "@/components/Hero";
import { sliderData } from "@/data/sliderData";
import TechStack from "../TechStack/page";
import About from "@/components/About";
import Certificate from "@/components/Certificate";
import ResumeSection from "@/components/ResumeSection";

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
