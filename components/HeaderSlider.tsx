import React from "react";
import "../app/globals.css";
import { Slider } from "@/utils/types";
import Link from "next/link";
import "../app/globals.css";
export default function HeaderSlider({ items }: { items: Slider }) {
  return (
    <div className="flex-col-reverse items-center justify-between my-3 gap-3">
      <div className="text-black text-center my-5 lg:text-5xl md:text-4xl sm:text-4xl font-bold">
        {items.title}
      </div>
      <div className="text-justify text-black my-5 lg:text-3xl md:text-md sm:text-sm">
        {items.description}
      </div>
      <div className="flex items-center justify-center my-5">
        <div className="border-2 rounded-2xl text-center border-header-button flex items-center justify-center w-64 lg:text-2xl bg-header-button md:text-md sm:text-sm">
          <Link href={items.link}>{items.buttonName}</Link>
        </div>
      </div>
    </div>
  );
}
