import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Sliderprojects() {
  return (
    <div className='mt-5'>
    <h1 className='text-2xl font-bold text-center'>Projects</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/onlineshop.png" className='h-[300px] w-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/lp.jpg" className='h-[300px] w-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
           <img src="/images/reactonlineshop.webp" className='h-[300px] w-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
           <img src="/images/milotfasfood.jpg" className='h-[300px] w-[300px]' />
        </SwiperSlide>
          <SwiperSlide>
           <img src="/images/phpfotball.png" className='h-[300px] w-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
           <img src="/images/onlinerent.jpg" className='h-[300px] w-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
           <img src="/images/onlinebus.jpg" className='h-[300px] w-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/cafe.jpg" className='h-[300px] w-[300px]' />
        </SwiperSlide>
      
      </Swiper>
      
    </div>
  );
}
