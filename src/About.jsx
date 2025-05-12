import React from 'react'
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Sliderprojects from './Sliderproject'
import rocket from '/images/rocketlogo.png'
import smile from '/images/smilelogo.png'
import aboutme from '/images/aboutme.jpg'


function PercentageCircle({ percent, radius = 60, color = '#3498db' }) {
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex justify-center items-center">
      <svg className="transform rotate-90" height={radius * 2} width={radius * 2}>
        <circle
          className="text-gray-300"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
          fill="none"
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute text-xl font-bold text-white">{percent}%</div>
    </div>
  );
}

function About() {
   const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))


    useEffect(() => {
        const controls = animate(count, 10, { duration: 5 })
        return () => controls.stop()
    }, [])
    const countt = useMotionValue(0)
    const roundedd = useTransform(() => Math.round(countt.get()))

    useEffect(() => {
        const controls = animate(countt, 3, { duration: 5 })
        return () => controls.stop()
    }, [])
    const countty = useMotionValue(0)
    const roundeddy = useTransform(() => Math.round(countty.get()))

    useEffect(() => {
        const controls = animate(countty, 2, { duration: 5 })
        return () => controls.stop()
    }, [])
  return (
         <>
    <div className='bg-gray-950 mt-20 shadow-gray-800'>
   
<div className="w-full  py-10 px-4 flex  md:flex-row justify-evenly items-center gap-10">
  {/* Projects Counter */}
  <div className="flex items-center text-blue-500 gap-4">
    <img src={rocket} className="md:w-16 md:h-16 w-5 h-5" alt="Rocket Logo" />
    <div className="flex flex-col items-start">
      <span className="md:text-xl  text-sm font-semibold">Projects</span>
      <div className="flex items-baseline">
        <motion.pre className="md:text-4xl  text-2xl font-black leading-none">{rounded}</motion.pre>
        <h1 className="md:text-2xl text-sm font-bold text-blue-600 ml-1">+</h1>
      </div>
    </div>
  </div>

  {/* Happy Clients Counter */}
  <div className="flex items-center  text-blue-500 gap-4">
    <img src={smile} className="md:w-16 md:h-16 w-5 h-5" alt="Smile Logo" />
    <div className="flex flex-col items-start">
      <span className="md:text-xl md:w-[90px] w-[100px] text-sm font-semibold">Happy Clients</span>
      <div className="flex items-baseline">
        <motion.pre className="md:text-4xl  text-2xl font-black leading-none">{roundedd}</motion.pre>
        <h1 className="md:text-2xl text-sm font-bold text-blue-600 ml-1">+</h1>
      </div>
    </div>
  </div>

  {/* Years Counter */}
  <div className="flex items-center text-blue-500 gap-4">
    <div className="w-16 h-16 flex items-center justify-center rounded-full shadow">
      <svg xmlns="http://www.w3.org/2000/svg" className="md:w-10 md:h-10 w-5 h-5 mr-[50px] md:mr-0 text-blue-600" viewBox="0 0 640 512" fill="currentColor">
        <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
      </svg>
    </div>
    <div className="flex flex-col ml-[-40px] md:ml-0 items-start">
      <span className="md:text-xl  text-sm font-semibold">Years</span>
      <div className="flex items-baseline">
        <motion.pre className="md:text-4xl  text-2xl font-black leading-none">{roundeddy}</motion.pre>
        <h1 className="md:text-2xl text-sm font-bold text-blue-600 ml-1">+</h1>
      </div>
    </div>
  </div>
</div>
</div>
<div className='bg-gray-800 shadow-2xl shadow-gray-300 p-4'>
  <h1 className='text-2xl font-bold text-white text-center pt-10 mb-10 md:mb-20'>About me</h1>

  <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center'>
    
    <div className='flex justify-center'>
      <img src={aboutme} className='w-[250px] h-[300px] md:w-[300px] md:h-[350px] mb-6 md:mb-10 rounded-lg shadow-lg' alt="About Milot" />
    </div>

    <div className='text-white text-center md:text-left'>
      <h1 className='text-xl font-semibold'>My name is Milot Verbani</h1>
      <h2 className='text-lg mb-4'>I am a Full-stack Web Developer</h2>
      
      <p className='max-w-full md:w-[700px] mx-auto md:mx-0 px-2'>
        I am a passionate Full Stack Web Developer. I recently graduated with a degree in Computer Science,
        and I have successfully completed a comprehensive Full Stack Web Development course.
        <br /><br />
        Throughout my studies and the course, I gained extensive knowledge and hands-on experience with several web technologies, including: 
        <strong> HTML, CSS/TailwindCSS, JavaScript/React, PHP/Laravel, MySQL.</strong>
      </p>

      <div className='mt-6 space-y-1 text-sm sm:text-base'>
        <p><span className='text-blue-600 font-bold'>Full Name:</span> Milot Verbani</p>
        <p><span className='text-blue-600 font-bold'>Age:</span> 21</p>
        <p><span className='text-blue-600 font-bold'>Email:</span> milot.verbani233@gmail.com</p>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 mt-6 items-center justify-center md:justify-start'>
        <h1 className='text-xl font-semibold'>Social Media</h1>

       <div className='flex gap-5'>
         <a href="https://github.com/milotverbani" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faSquareGithub} className='text-[30px] transition duration-300 hover:text-black hover:scale-110' />
        </a>

        <a href="https://www.linkedin.com/in/milot-verbani-4371232b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} className='text-[30px] transition duration-300 hover:text-blue-600 hover:scale-110' />
        </a>

        <a href="https://www.instagram.com/milotverbanii/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} className='text-[30px] transition duration-300 hover:text-pink-500 hover:scale-110' />
        </a>
       </div>
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-2 gap-10 mt-10 md:mt-[-50px] text-center">
      <div>
        <PercentageCircle percent={100} color="#3498db" radius={80} />
        <p className="text-white mt-2">HTML / CSS / TailwindCSS / Bootstrap</p>
      </div>
      <div>
        <PercentageCircle percent={90} color="#32cd32" radius={80} />
        <p className="text-white mt-2">JavaScript / React</p>
      </div>
      <div>
        <PercentageCircle percent={97} color="#f39c12" radius={80} />
        <p className="text-white mt-2">PHP / Laravel / Mysql</p>
      </div>
      <div>
        <PercentageCircle percent={80} color="#e74c3c" radius={80} />
        <p className="text-white mt-2">C# / Python</p>
      </div>
    </div>
  </div>
</div>


</>
  )
}

export default About