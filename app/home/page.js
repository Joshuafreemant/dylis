"use client";
import React, { useRef, useState } from "react";
import SwiperCore, { EffectCoverflow, Autoplay,Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';

SwiperCore.use([EffectCoverflow, Autoplay]);

const slide_img = [
  "/dylis1.jpeg",
  "/dylis2.jpeg",
  "/dylis3.jpg",
  "/dylis4.JPG",
  "/dylis5.JPG",
  // "/dylis6.JPG",
  // "/dylis7.JPG",
  // "/dylis8.JPG",
  // "/dylis9.jpg",
];

export default function Home() {
  return (
    <main className="home bg-image">
      <Swiper
        spaceBetween={0} 
        effect={'slide'} 
        loop={true} 
        grabCursor={true} 
        centeredSlides={true} 
        slidesPerView={1} coverflowEffect={{
          "rotate": 0,
          "stretch": 0,
          "depth": 100,
          "modifier": 1,
          "slideShadows": false
        }}

        autoplay
        modules={[Autoplay, Navigation]}

        pagination={{ clickable: true }}
        className="mySwiper"

      >
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>

  )
}
