"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "./header.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sliderData } from "@/data/sliderData";
import HeaderSlider from "@/components/HeaderSlider";
import { useState } from "react";
export default function MySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlider = sliderData[activeIndex];
  console.log(activeSlider.id);
  return (
    <div>
      <HeaderSlider items={activeSlider} />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="my-swiper justify-center items-center"
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        <SwiperSlide>
          <div className="slide">
            <Image
              src="/podexapp.png"
              alt="podexapp"
              width={300}
              height={100}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <Image src="/authy.png" alt="authy" width={300} height={100} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <Image
              src="/sprit-shop.png"
              alt="sprit-shop"
              width={300}
              height={100}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <Image
              src="/sprit-shop.png"
              alt="sprit-shop"
              width={300}
              height={100}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
