import React from "react";
import Steady from "./Steady";
import MySlider from "./MySlider";
import Slider from "@/components/Slider";
import { sliderData } from "@/data/sliderData";
export default function Header() {
  return (
    <header className="relative h-screen overflow-hidden">
      <Steady />
      <div className="slider-wrapper">
        <MySlider />
      </div>
      {/*<Slider />*/}
    </header>
  );
}
