"use client";
import React, { useRef, useState } from "react";
import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';

SwiperCore.use([Autoplay]);
const slide_img = [
  "/dylis1.jpeg",
  "/dylis2.jpeg",
  "/dylis3.jpg",
  "/dylis4.JPG",
  "/dylis5.JPG",
  "/dylis6.JPG",
  "/dylis7.JPG",
  "/dylis8.JPG",
  "/dylis9.jpg",
];

export default function Home() {
  return (
    <main className="home bg-image">
      <Swiper
      //  modules={[Autoplay]}
        // effect="slide"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
         }}
        pagination={false}
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
