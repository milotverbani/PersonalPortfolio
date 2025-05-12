import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import onlineshop from '/images/onlineshop.png'
import lp from '/images/lp.jpg'
import reactshop from '/images/reactonlineshop.webp'
import milotfast from '/images/milotfasfood.jpg'
import phpfotball from '/images/phpfotball.png'
import onlinerent from '/images/onlinerent.jpg'
import bus from '/images/onlinebus.jpg'
import cafe from '/images/cafe.jpg'



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
          <img src={onlineshop} className='h-[300px] w-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lp} className='h-[300px] w-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
           <img src={reactshop} className='h-[300px] w-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
           <img src={milotfast} className='h-[300px] w-[300px]' />
        </SwiperSlide>
          <SwiperSlide>
           <img src={phpfotball} className='h-[300px] w-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
           <img src={onlinerent} className='h-[300px] w-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
           <img src={bus} className='h-[300px] w-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cafe} className='h-[300px] w-[300px]' />
        </SwiperSlide>
      
      </Swiper>
      
    </div>
  );
}
