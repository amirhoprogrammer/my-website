"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "./header.css";
// استایل‌های مورد نیاز
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MySlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="mySwiper justify-center items-center"
    >
      <SwiperSlide>
        <div className="slide">
          <Image src="/podexapp.png" alt="podexapp" width={300} height={100} />
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
  );
}
