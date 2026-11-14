import Hero from "@/components/Hero";
import { sliderData } from "@/data/sliderData";
import TechStack from "../TechStack/page";
import About from "@/components/About";
import Certificate from "@/components/Certificate";

function HomePage() {
  return (
    <>
      <Hero slides={sliderData} />
      <About />
      <Certificate />

      {/*<TechStack />*/}
    </>
  );
}

export default HomePage;
