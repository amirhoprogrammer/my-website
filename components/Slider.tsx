"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sliderData } from "@/data/sliderData";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // ایندکسی که باید بک‌گراندش نشون داده بشه (اولویت با هاور)
  const activeIndex = hoverIndex !== null ? hoverIndex : currentIndex;
  const activeItem = sliderData[activeIndex];

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  // فقط ۳ تا کارت نشون بده (از currentIndex شروع کن)
  const visibleSlides = [
    sliderData[currentIndex],
    sliderData[(currentIndex + 1) % sliderData.length],
    sliderData[(currentIndex + 2) % sliderData.length],
  ];

  return (
    <div className="relative w-full h-full">
      {/*بک‌گراند هدر - با تغییر اسلاید یا هاور عوض می‌شه*/}
      <div
        className="absolute inset-0 -z-10 transition-all duration-500"
        style={{
          backgroundImage: `url(${activeItem.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* یک لایه تیره روی عکس برای خوانایی متن */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto pt-10">
        {/* عنوان و توضیحات */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {activeItem.title}
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {activeItem.description}
          </p>

          <Link
            href={activeItem.link}
            className="inline-block mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition"
          >
            go to this page
          </Link>
        </div>

        {/* اسلایدر */}
        <div className="relative flex items-center justify-center gap-4 px-12">
          {/* دکمه چپ */}
          <button
            onClick={goToPrev}
            className="absolute left-0 z-20 w-11 h-11 bg-white/20 hover:bg-white/40 text-white text-2xl rounded-full flex items-center justify-center transition"
          >
            ‹
          </button>

          {/* سه تا کارت */}
          <div className="flex gap-6">
            {visibleSlides.map((item, idx) => {
              const realIndex = (currentIndex + idx) % sliderData.length;

              return (
                <div
                  key={item.id + realIndex}
                  onClick={() => setCurrentIndex(realIndex)}
                  onMouseEnter={() => setHoverIndex(realIndex)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className={`cursor-pointer transition-all duration-300 ${
                    realIndex === currentIndex
                      ? "scale-105 opacity-100"
                      : "scale-95 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 w-56 border border-white/20 shadow-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={320}
                      height={180}
                      className="w-full h-40 object-cover rounded-xl"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* دکمه راست */}
          <button
            onClick={goToNext}
            className="absolute right-0 z-20 w-11 h-11 bg-white/20 hover:bg-white/40 text-white text-2xl rounded-full flex items-center justify-center transition"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
