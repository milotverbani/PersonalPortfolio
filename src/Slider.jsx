import React from 'react';
import Marquee from 'react-fast-marquee';
import laravel from '/images/laravel.png';
import js from '/images/js.webp';
import Reactt from '/images/React.webp';
import php from '/images/php.png';
import c from '/images/c.png';
import python from '/images/python.png';
import mysql from '/images/mysql.png';

function Slider() {
  return (
    <>
      <div className="block md:flex md:justify-evenly overflow-hidden">
        <h1 className="text-2xl text-black pl-8 md:pl-[100px] text-center mb-5">My Technologies</h1>
        <div className="w-full md:w-[1420px] md:ml-[200px] ml-4">
          <Marquee speed={25} gradient={false}>
            <div className="flex gap-[50px] w-full ">
              <img src={laravel} alt="Laravel" className="w-[50px] sm:w-[60px] md:w-[40px] md:h-[40px]" />
              <img src={js} alt="JavaScript" className="w-[50px] sm:w-[60px] md:w-[40px] md:h-[40px]" />
              <img src={php} alt="PHP" className="w-[50px] sm:w-[60px] md:w-[40px] md:h-[40px]" />
              <img src={Reactt} alt="React" className="w-[50px] sm:w-[60px] md:w-[40px] md:h-[40px]" />
              <img src={c} alt="C" className="w-[50px] sm:w-[60px]md:w-[40px] md:h-[40px]" />
              <img src={python} alt="Python" className="w-[50px] sm:w-[60px] md:w-[40px] md:h-[40px]" />
              <img src={mysql} alt="MySQL" className="w-[50px] mr-10 md:mr-0 sm:w-[60px] md:w-[40px] md:h-[40px]" />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default Slider;
