"use client";
import React, { useState } from "react";
import Steady from "./Steady";
import MySlider from "./MySlider";
import { sliderData } from "@/data/sliderData";
export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlider = sliderData[activeIndex];
  return (
    <header
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${activeSlider.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Steady />
      <MySlider activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </header>
  );
}
