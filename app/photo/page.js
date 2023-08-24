"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// import SwiperCore, { EffectCoverflow, Autoplay, Pagination } from "swiper";

// SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);

import SwiperCore, { EffectCoverflow, Autoplay,Navigation } from "swiper";
SwiperCore.use([EffectCoverflow, Autoplay]);

// if you want to use array
const slide_img = [
  "/dylis4.JPG",
  "/dylis1.jpeg",
  "/dylis2.jpeg",
  "/dylis3.jpg",
  "/dylis5.JPG",
  "/dylis6.JPG",
  "/dylis7.JPG",
  "/dylis8.JPG",
  "/dylis9.jpg",
  // "/dylis10.jpg",
];
export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <main className="gallery bg-image bg-white py-4">
      <h1 className="text-black text-xl text-center pb-4 ">Photo Gallery</h1>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        // spaceBetween={10}
        // navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        // modules={[FreeMode, Navigation, Thumbs]}

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
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="/dylis1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis4.JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis5.JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis6.JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis7.JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis8.JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        // freeMode={true}
        watchSlidesProgress={true}
        modules={[ Navigation]}
        className="mySwiper thumbs"
      >
        <SwiperSlide>
          <img src="/dylis1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis4.JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis5.JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis6.JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis7.JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis8.JPG" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/dylis10.jpg" />
        </SwiperSlide>
      </Swiper>
    </main>

  )
}
