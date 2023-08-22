"use client";
import React, { useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


export default function Photo() {
    return (
        <main className="  pt-4 pb-48 h-screen px-6 overflow-y-scroll ">

            <div className='flex flex-wrap  gap-12 '>
               
                <div className='w-[250px] h-[250px] overflow-hidden'>   <img src='/dylis3.JPG' className='object-cover' /></div>
                <div className='w-[250px] h-[250px] overflow-hidden'><img src='/dylis4.JPG' className='object-cover' /></div>
                <div className='w-[250px] h-[250px] overflow-hidden'>  <img src='/dylis1.jpeg' className='object-cover' /></div>
                <div className='w-[250px] h-[250px] overflow-hidden'> <img src='/dylis5.JPG' className='object-cover' /></div>
                <div className='w-[250px] h-[250px] overflow-hidden'><img src='/dylis6.JPG' className='object-cover' /></div>
                <div className='w-[250px] h-[250px] overflow-hidden'><img src='/dylis7.JPG' className='object-cover' /></div>
                <div className='w-[250px] h-[250px] overflow-hidden'>  <img src='/dylis8.JPG' className='object-cover' /></div>
                <div className='w-[250px] h-[250px] overflow-hidden'>   <img src='/dylis9.jpg' className='object-cover' /></div>
                <div className='w-[250px] h-[250px] overflow-hidden'><img src='/dylis2.jpeg' className='object-cover' /></div>
                <div className='w-[250px] h-[250px] overflow-hidden'><img src='/dylis10.jpg' className='object-cover' /></div>

            </div>
            <div>











            </div>
          
        </main>

    )
}
