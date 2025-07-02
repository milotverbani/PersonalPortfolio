import React, { useRef, useEffect } from "react";
import { useMotionValue, useTransform, animate, useInView, motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faRocket, faSmile, faCode } from '@fortawesome/free-solid-svg-icons';
import Education from './Education';
import aboutme from '/images/aboutme.jpg'

// Background image would be imported like this (you'll need to add your own image)
// import bgPattern from '/images/abstract-tech-pattern.jpg';

function PercentageCircle({ percent, radius = 80, color = '#3b82f6', name }) {
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-40 w-40 flex items-center justify-center">
        <svg className="absolute h-full w-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={normalizedRadius}
            strokeWidth={strokeWidth}
            fill="transparent"
            stroke="currentColor"
            className="text-gray-800 opacity-40"
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r={normalizedRadius}
            strokeWidth={strokeWidth}
            fill="transparent"
            stroke={color}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 2, ease: "easeInOut" }}
            strokeLinecap="round"
          />
        </svg>
        <div className="text-3xl font-bold" style={{ color }}>
          {percent}%
        </div>
      </div>
      <p className="mt-4 text-lg font-medium text-white">{name}</p>
    </div>
  );
}

function About() {
  // Original counting logic preserved
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  
  const countt = useMotionValue(0);
  const roundedd = useTransform(countt, latest => Math.round(latest));
  
  const countty = useMotionValue(0);
  const roundeddy = useTransform(countty, latest => Math.round(latest));

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls1 = animate(count, 10, { duration: 5 });
      const controls2 = animate(countt, 3, { duration: 5 });
      const controls3 = animate(countty, 2, { duration: 5 });

      return () => {
        controls1.stop();
        controls2.stop();
        controls3.stop();
      };
    }
  }, [isInView]);

  return (
    <section className="mt-15">
     
      <div className="relative overflow-hidden">
      
        <div className="absolute inset-0 bg-[url('/images/abstract-tech-pattern.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
        
        <div ref={ref} className="relative py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Journey</span> in Numbers
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                Quantifying my passion and professional milestones
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg">
                    <FontAwesomeIcon icon={faRocket} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">Projects</h3>
                  <div className="flex items-baseline">
                    <motion.p className="text-5xl font-bold text-white">{rounded}</motion.p>
                    <span className="ml-2 text-2xl font-semibold text-blue-400">+</span>
                  </div>
                </div>
              </motion.div>

             
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-emerald-400/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg">
                    <FontAwesomeIcon icon={faSmile} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">Happy Clients</h3>
                  <div className="flex items-baseline">
                    <motion.p className="text-5xl font-bold text-white">{roundedd}</motion.p>
                    <span className="ml-2 text-2xl font-semibold text-emerald-400">+</span>
                  </div>
                </div>
              </motion.div>

             
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-purple-400/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg">
                    <FontAwesomeIcon icon={faCode} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">Years Experience</h3>
                  <div className="flex items-baseline">
                    <motion.p className="text-5xl font-bold text-white">{roundeddy}</motion.p>
                    <span className="ml-2 text-2xl font-semibold text-purple-400">+</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="relative bg-gray-900 overflow-hidden">
      
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl animate-float1"></div>
          <div className="absolute top-1/2 right-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-float2"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl animate-float3"></div>
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              The creative mind behind the code
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
           
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start relative"
            >
              <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-700/50 group">
                <img 
                  src={aboutme} 
                  alt="Milot Verbani" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
                <div className="absolute inset-0 border-8 border-transparent group-hover:border-blue-500/30 transition-all duration-500 rounded-xl"></div>
              </div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
            </motion.div>

          
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 text-center lg:text-left"
            >
              <h3 className="text-3xl font-bold text-white mb-2">Milot Verbani</h3>
              <div className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-medium mb-8">
                Full-stack Web Developer
              </div>
              
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  I'm a passionate Full Stack Developer with a Computer Science degree and specialized training in modern web technologies.
                </p>
                <p>
                  My expertise spans both frontend and backend development, allowing me to craft complete digital experiences from concept to deployment.
                </p>
                <p>
                  I thrive on solving complex problems with elegant solutions using technologies like <span className="font-semibold text-white">React, Laravel, TailwindCSS</span>, and more.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 text-gray-300">
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                  <span className="block text-blue-400 font-medium">Full Name</span>
                  <span>Milot Verbani</span>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                  <span className="block text-blue-400 font-medium">Age</span>
                  <span>21</span>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 col-span-2">
                  <span className="block text-blue-400 font-medium">Email</span>
                  <span>milot.verbani233@gmail.com</span>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-xl font-semibold text-white mb-6">Connect With Me</h4>
                <div className="flex justify-center lg:justify-start space-x-6">
                  <a 
                    href="https://github.com/milotverbani" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label="GitHub"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
                    <div className="relative bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300">
                      <FontAwesomeIcon icon={faSquareGithub} className="h-6 w-6 text-gray-300 group-hover:text-white" />
                    </div>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/milot-verbani-4371232b1/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label="LinkedIn"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
                    <div className="relative bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300">
                      <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-gray-300 group-hover:text-blue-400" />
                    </div>
                  </a>
                  <a 
                    href="https://www.instagram.com/milotverbanii/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label="Instagram"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
                    <div className="relative bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300">
                      <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-gray-300 group-hover:text-pink-500" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

         
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-8"
            >
              <PercentageCircle percent={100} color="#3b82f6" name="HTML/CSS/Tailwind" />
              <PercentageCircle percent={90} color="#10b981" name="JavaScript/React" />
              <PercentageCircle percent={97} color="#f59e0b" name="PHP/Laravel" />
              <PercentageCircle percent={80} color="#ef4444" name="C#/Python" />
            </motion.div>
          </div>
        </div>
      </div>

      <Education />
    </section>
  );
}

export default About;