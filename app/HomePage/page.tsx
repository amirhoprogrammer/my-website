import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { sliderData } from "@/data/sliderData";
import React from "react";

function HomePage() {
  return (
    <>
      <Hero slides={sliderData} />;
    </>
  );
}

export default HomePage;
