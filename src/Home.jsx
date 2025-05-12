import React from 'react';
import Typewriter from 'typewriter-effect';
import laravel from '/images/laravel.png';
import js from '/images/js.webp';
import Reactt from '/images/React.webp';
import php from '/images/php.png';
import ghilbi from '/images/mvghilbi.jpg'
import CV from '/CV-Milot Verbani.pdf';


function Home() {
  return (
    <div className="relative flex flex-col md:ml-[100px] mt-[100px] lg:grid lg:grid-cols-2 items-center justify-center px-6 py-20 gap-10">

      <div>
        <h1 className="text-4xl text-white font-bold mb-4">
          <span className="text-blue-800">MILOT</span> VERBANI
        </h1>
        

        <div className="text-indigo-500 text-xl mb-2">
          <Typewriter
            options={{
              strings: [
                'Welcome to MilotV Website',
                'I am Full Stack Developer',
                'BSc. Computer Science',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        
        
        <p className="text-black font-bold max-w-xl mb-6">
          I’m a Full Stack Developer passionate about building modern, functional,
          and beautiful web applications. Scroll down to learn more about me and my projects 👇
        </p>

        <div className="flex flex-wrap gap-4">
        <a href="#projects">
            <button className=" cursor-pointer group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50"><span className="relative z-10">Projects</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
        </a>
    
          <a  href={CV}
            download className="cursor-pointer group relative z-0 h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-3 text-neutral-50"><span className="relative z-10">CV Download</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></a>
        </div>
      </div>

      <div className="flex items-center ml-[-4%] md:ml-0 justify-center gap-6">
        <div className="flex flex-col items-center gap-4">
          <img
            src={laravel}
            alt="Laravel"
            className="w-[50px] h-[50px] animate-bounce"
          />
          <img
            src={Reactt}
            alt="React"
            className="w-[50px] h-[50px] animate-bounce"
          />
          <img
            src={php}
            alt="PHP"
            className="w-[50px] h-[50px] animate-bounce"
          />
          <img
            src={js}
            alt="JavaScript"
            className="w-[50px] h-[50px] animate-bounce"
          />
        </div>

        <img
          src={ghilbi}
          alt="Milot"
          className="rounded-2xl border-zinc-500 border-8 w-[250px] md:w-[350px] h-auto"
        />
      </div>
    </div>
  );
}

export default Home;
