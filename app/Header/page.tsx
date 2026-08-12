import React from "react";
import Steady from "./Steady";
import MySlider from "./MySlider";
import Slider from "@/components/Slider";
export default function Header() {
  return (
    <header className="relative h-screen overflow-hidden">
      <Steady />
      {/*<div className="py-2 slider-wrapper">
        <MySlider />
      </div>*/}
      <Slider />
      {/*<div>
        <div></div>
        <div className="flex"></div>
      </div>*/}
    </header>
  );
}
