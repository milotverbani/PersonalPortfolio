import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import onlineshop from '/images/onlineshop.png';
import lp from '/images/lp.jpg';
import reactshop from '/images/reactonlineshop.webp';
import phpfotball from '/images/phpfotball.png';
import onlinerent from '/images/onlinerent.jpg';
import laravel from '/images/laravel.png';
import js from '/images/js.webp';
import Reactt from '/images/React.webp';
import php from '/images/php.png';
import mysql from '/images/mysql.png';
import html from '/images/html5.png';
import tailwindcss from '/images/tailwindcss.webp';
import bootstrap from '/images/bootstrap.webp';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const sliderRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(360);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  const projectData = [
    {
      id: 1,
      title: 'Online Shop JavaScript',
      image: onlineshop,
      description: 'A comprehensive online shop built with HTML, Tailwind CSS, and JavaScript. Features user authentication and shopping cart with local storage persistence.',
      technologies: [html, tailwindcss, js],
      link: null,
    },
    {
      id: 2,
      title: 'Learti Park',
      image: lp,
      description: 'Modern website for Learti Park developed using HTML, Bootstrap, and JavaScript. Showcases responsive design and interactive elements.',
      technologies: [html, bootstrap, js],
      link: 'https://leartipark.com/',
    },
    {
      id: 3,
      title: 'Online Shop ReactJS',
      image: reactshop,
      description: 'Advanced e-commerce platform with ReactJS featuring user authentication, shopping cart, and admin panel with local storage management.',
      technologies: [html, tailwindcss, Reactt],
      link: 'https://github.com/milotverbani/ReactJs-OnlineShop',
    },
    {
      id: 4,
      title: 'Rent a Car Laravel',
      image: onlinerent,
      description: 'Full-stack car rental system built with Laravel, featuring vehicle management, booking system, and admin dashboard with MySQL database.',
      technologies: [html, tailwindcss, laravel, mysql],
      link: null,
    },
    {
      id: 5,
      title: 'Football Reservation PHP',
      image: phpfotball,
      description: 'Football pitch reservation system with PHP backend allowing users to book pitches and manage reservations through an intuitive interface.',
      technologies: [html, tailwindcss, php, mysql],
      link: 'https://github.com/milotverbani/PHP-Project',
    },
  ];

  const getTechName = (techPath) => {
    const techMap = {
      'laravel.png': 'Laravel',
      'js.webp': 'JavaScript',
      'React.webp': 'React',
      'php.png': 'PHP',
      'mysql.png': 'MySQL',
      'html5.png': 'HTML5',
      'tailwindcss.webp': 'Tailwind CSS',
      'bootstrap.webp': 'Bootstrap'
    };
    const filename = techPath.split('/').pop();
    return techMap[filename] || filename.split('.')[0];
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
        setCardWidth(window.innerWidth - 40);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
        setCardWidth(320);
      } else {
        setVisibleCards(3);
        setCardWidth(360);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => 
      prev >= projectData.length - visibleCards ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => 
      prev <= 0 ? projectData.length - visibleCards : prev - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const sliderVariants = {
    enter: (direction) => ({
      x: direction > 0 ? cardWidth + 20 : -cardWidth - 20,
      opacity: 0.5,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? cardWidth + 20 : -cardWidth - 20,
      opacity: 0.5,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
     
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing technical skills and design approach
          </p>
        </motion.div>

        <div 
          className="relative overflow-hidden" 
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.button 
            onClick={prevSlide}
            className="absolute lg:left-7 left-0 cursor-pointer top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white shadow-md hover:shadow-lg group"
            aria-label="Previous projects"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0.7,
              x: isHovered ? 0 : -10
            }}
            whileHover={{ 
              backgroundColor: "#ffffff",
              boxShadow: "0 5px 15px -3px rgba(0,0,0,0.1)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <svg className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button 
            onClick={nextSlide}
            className="absolute lg:right-7 right-0 cursor-pointer top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white shadow-md hover:shadow-lg group"
            aria-label="Next projects"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0.7,
              x: isHovered ? 0 : 10
            }}
            whileHover={{ 
              backgroundColor: "#ffffff",
              boxShadow: "0 5px 15px -3px rgba(0,0,0,0.1)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <svg className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          <div className="relative h-[580px] flex items-center">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={sliderVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full flex justify-center gap-6 px-10"
              >
                {projectData.slice(currentIndex, currentIndex + visibleCards).map((project) => (
                  <motion.div 
                    key={project.id}
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-100"
                    style={{ 
                      width: `${cardWidth}px`,
                      height: '520px'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                    
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className="flex space-x-2">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <div 
                              key={index}
                              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100"
                              title={getTechName(tech)}
                            >
                              <img 
                                src={tech} 
                                className="w-5 h-5 object-contain" 
                                alt={getTechName(tech)} 
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                   
                    <div className="p-6 flex flex-col h-[calc(520px-12rem)]">

                     
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <motion.div 
                          className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>

                  
                      <div className="text-gray-600 mb-4 leading-relaxed text-sm h-[80px] overflow-y-auto pr-2">
                        <p>{project.description}</p>
                      </div>

                     
                      <div className="mt-auto">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="group relative p-1.5 bg-white rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-xs border border-gray-100"
                              title={getTechName(tech)}
                            >
                              <img 
                                src={tech} 
                                className="w-6 h-6 object-contain" 
                                alt={getTechName(tech)} 
                              />
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-gray-800 text-white text-xs font-medium rounded whitespace-nowrap shadow-sm">
                                {getTechName(tech)}
                                <div className="absolute top-full left-1/2 w-2 h-2 bg-gray-800 transform -translate-x-1/2 rotate-45"></div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                     
                      <div className="mt-6">
                        {project.link ? (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full"
                          >
                            <motion.button 
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full py-2.5 cursor-pointer px-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 relative overflow-hidden text-sm"
                            >
                              <span className="relative z-10 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span>View Project</span>
                              </span>
                              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </motion.button>
                          </a>
                        ) : (
                          <motion.button
                            disabled
                            whileHover={{ y: -2 }}
                            className="w-full py-2.5 px-5 bg-gray-100 text-gray-600 font-medium rounded-lg cursor-not-allowed flex items-center justify-center gap-2 shadow-xs text-sm"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <span>Not Available</span>
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        
        <motion.div 
          className="flex justify-center mt-8 gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {Array.from({ length: projectData.length - visibleCards + 1 }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 relative`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.3 }}
            >
              {index === currentIndex ? (
                <>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    layoutId="activeDot"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </>
              ) : (
                <span className="absolute inset-0 bg-gray-300 rounded-full hover:bg-gray-400"></span>
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;