import React, { useState } from 'react'
import Marquee from 'react-fast-marquee';
import onlineshop from '/images/onlineshop.png'
import lp from '/images/lp.jpg'
import reactshop from '/images/reactonlineshop.webp'
import phpfotball from '/images/phpfotball.png'
import onlinerent from '/images/onlinerent.jpg'
import laravel from '/images/laravel.png';
import js from '/images/js.webp';
import Reactt from '/images/React.webp';
import php from '/images/php.png';
import c from '/images/c.png';
import python from '/images/python.png';
import mysql from '/images/mysql.png';
import html from '/images/html5.png';
import tailwindcss from '/images/tailwindcss.webp'
import bootstrap from '/images/bootstrap.webp';


function Projects() {
  const [paused, setPaused] = useState(false); // Për të menaxhuar ndalimin e lëvizjes

  // Funksioni për të aktivizuar dhe ndaluar lëvizjen
 
  const handleMouseEnter = () => {
    setPaused(true); // Ndalon lëvizjen kur maus kalon mbi kartelën
  };

  const handleMouseLeave = () => {
    setPaused(false); // Rinis lëvizjen kur maus largohet nga kartela
  };

  return (
    <>
    <h1 className='text-2xl font-bold text-center mt-10 mb-5'> My Latest Projects</h1>
    <p className='text-center overflow-hidden text-blue-600 font-bold p-5 '>Here I have presented some of my projects which are available online and on GitHub. If you would like to learn more about my other projects, feel free to contact me. Thank you!</p>
    <div className=' mb-2' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Marquee direction="left" speed={40} pauseOnHover={paused}>
    <div className="relative flex flex-col ml-4 w-[350px]   bg-white shadow-sm border border-slate-200 rounded-lg md:w-96">
  <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src={onlineshop} className='h-50' alt="card-image" />
  </div>
  <div className="p-4">
    <div className="flex items-center mb-2">
      <h6 className="text-slate-800 text-xl font-semibold">
        Online Shop JavaScript
      </h6>
 
      <div className="flex items-center gap-0 5 ml-auto">
      </div>
    </div>
    
    <p className="text-slate-600 leading-normal font-light">
      Online Shop- its a project with HTML , TailwindCss , Javascript data save at localstorage login register cart 
      <br />
      <br />
    </p>
  </div>
 
  <div className="group my-3 inline-flex flex-wrap justify-center items-center gap-2">
    <button className="rounded-full pointer-events-none border  border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={html} className='w-5 rounded-4xl' alt="" />
    </button>
     <button className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={tailwindcss} className='w-5 rounded-4xl' alt="" />
    </button>
     <button className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={js} className='w-5 rounded-4xl' alt="" />
    </button>
   
  </div>
  
  <div className="px-4 pb-4 pt-0 mt-2">
    <button disabled={true} className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Not Available
    </button>
  </div>
</div>  
 <div className="relative flex flex-col ml-4 w-[350px] mt-3   bg-white shadow-sm border border-slate-200 rounded-lg md:w-96">
  <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src={lp} className='h-50 w-[400px]' alt="card-image" />
  </div>
  <div className="p-4">
    <div className="flex items-center mb-2">
      <h6 className="text-slate-800 text-xl font-semibold">
        Learti Park
      </h6>
 
      <div className="flex items-center gap-0 5 ml-auto">
      </div>
    </div>
    
    <p className="text-slate-600 leading-normal font-light">
      Learti Park - its a project with HTML , BootStrap , JavaScript. 
      <br />
      Visit:Leartipark.com
    </p>
  </div>
 
  <div className="group my-3 inline-flex flex-wrap justify-center items-center gap-2">
    <button className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={html} className='w-5 rounded-4xl' alt="" />
    </button>
     <button className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={bootstrap} className='w-5 rounded-4xl' alt="" />
    </button>
     <button className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={js} className='w-5 rounded-4xl' alt="" />
    </button>
   
  </div>
  
  <div className="px-4 pb-4 pt-0 mt-2">
   <a href="https://leartipark.com/" target='blank'>
     <button className="w-full cursor-pointer rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Visit
    </button>
   </a>
  </div>
</div>
  <div className="relative flex flex-col ml-4 w-[350px] mt-3   bg-white shadow-sm border border-slate-200 rounded-lg md:w-96">
  <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src={reactshop} className='h-50' alt="card-image" />
  </div>
  <div className="p-4">
    <div className="flex items-center mb-2">
      <h6 className="text-slate-800 text-xl font-semibold">
        Online Shop ReactJs
      </h6>
 
      <div className="flex items-center gap-0 5 ml-auto">
      </div>
    </div>
    
    <p className="text-slate-600 leading-normal font-light">
      Online Shop- its a project with HTML , TailwindCss , React data save at localstorage login register cart and we have admin Panel.
    </p>
  </div>
 
  <div className="group my-3 inline-flex flex-wrap justify-center items-center gap-2">
    <button className="rounded-full pointer-events-none border  border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={html} className='w-5 rounded-4xl' alt="" />
    </button>
     <button className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={tailwindcss} className='w-5 rounded-4xl' alt="" />
    </button>
     <button className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={Reactt} className='w-5 rounded-4xl' alt="" />
    </button>
   
  </div>
  
  <div className="px-4 pb-4 pt-0 mt-2">
   <a href="https://github.com/milotverbani/ReactJs-OnlineShop" target='blank'>
     <button className="w-full cursor-pointer rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Visit
    </button>
   </a>
  </div>
</div>
  <div className="relative flex flex-col ml-4 w-[350px] mt-3   bg-white shadow-sm border border-slate-200 rounded-lg md:w-96">
  <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src={onlinerent} className='h-50' alt="card-image" />
  </div>
  <div className="p-4">
    <div className="flex items-center mb-2">
      <h6 className="text-slate-800 text-xl font-semibold">
        Rent a Car Laravel
      </h6>
 
      <div className="flex items-center gap-0 5 ml-auto">
      </div>
    </div>
    
    <p className="text-slate-600 leading-normal font-light">
      Rent a Car - its project with HTML , TailwindCss , Laravel , Mysql 
      <br />
      <br />
    </p>
  </div>
 
  <div className="group my-3 inline-flex flex-wrap justify-center items-center gap-2">
    <button className="rounded-full pointer-events-none border  border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={html} className='w-5 rounded-4xl' alt="" />
    </button>
     <button className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={tailwindcss} className='w-5 rounded-4xl' alt="" />
    </button>
     <button className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={laravel} className='w-5 rounded-4xl' alt="" />
    </button>
       <button className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={mysql} className='w-5 h-5 rounded-4xl' alt="" />
    </button>
   
  </div>
  
  <div className="px-4 pb-4 pt-0 mt-2">
    <button disabled={true} className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Not Available
    </button>
  </div>
</div>
<div className="relative flex flex-col ml-4 w-[350px] mt-3 mb-4   bg-white shadow-sm border border-slate-200 rounded-lg md:w-96">
  <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src={phpfotball} className='h-50 w-full' alt="card-image" />
  </div>
  <div className="p-4">
    <div className="flex items-center mb-2">
      <h6 className="text-slate-800 text-xl font-semibold">
        Football Reservation PHP
      </h6>
 
      <div className="flex items-center gap-0 5 ml-auto">
      </div>
    </div>
    
    <p className="text-slate-600 leading-normal font-light">
      Football Reservation System - its a project with HTML , TailwindCss , PHP ,Mysql
      <br />
      <br />
    </p>
  </div>
 
  <div className="group my-3 inline-flex flex-wrap justify-center items-center gap-2">
    <button className="rounded-full pointer-events-none border  border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={html} className='w-5 rounded-4xl' alt="" />
    </button>
     <button className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={tailwindcss} className='w-5 rounded-4xl' alt="" />
    </button>
     <button className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={php} className='w-5 h-5 rounded-4xl' alt="" />
    </button>
     <button className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <img src={mysql} className='w-5 h-5 rounded-4xl' alt="" />
    </button>
   
  </div>
  
  <div className="px-4 pb-4 pt-0 mt-2">
   <a href="https://github.com/milotverbani/PHP-Project" target='blank'>
     <button  className="w-full cursor-pointer rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Visit
    </button>
   </a>
  </div>
</div>
    </Marquee>
    </div>
    </>
  )
}

export default Projects