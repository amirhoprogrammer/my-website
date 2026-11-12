import Hero from "@/components/Hero";
import { sliderData } from "@/data/sliderData";
import React from "react";
import TechStack from "../TechStack/page";
import About from "@/components/About";

function HomePage() {
  return (
    <>
      <Hero slides={sliderData} />;
      <About />
      {/*<TechStack />*/}
    </>
  );
}

export default HomePage;
