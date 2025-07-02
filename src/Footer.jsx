import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHeart } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub className="text-lg" />, url: "https://github.com/milotverbani", name: "GitHub" },
    { icon: <FaLinkedin className="text-lg" />, url: "https://www.linkedin.com/in/milot-verbani-4371232b1/", name: "LinkedIn" },
    { icon: <FaEnvelope className="text-lg" />, url: "mailto:milot.verbani233@gmail.com", name: "Email" }
  ];

  return (
    <footer className="w-full relative overflow-hidden bg-gray-50">
     
      <div className="absolute inset-0 overflow-hidden">
      
        <motion.div
          className="absolute rounded-full bg-red-500 opacity-10"
          initial={{
            x: -100,
            y: -100,
            width: 500,
            height: 500,
          }}
          animate={{
            x: [-100, -50, -100],
            y: [-100, -150, -100],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
       
        <motion.div
          className="absolute rounded-full bg-blue-500 opacity-10"
          initial={{
            right: -150,
            bottom: -100,
            width: 600,
            height: 600,
          }}
          animate={{
            right: [-150, -100, -150],
            bottom: [-100, -150, -100],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />

  
        <motion.div
          className="absolute rounded-full bg-red-400 opacity-5"
          initial={{
            left: '40%',
            top: '30%',
            width: 300,
            height: 300,
          }}
          animate={{
            left: ['40%', '45%', '40%'],
            top: ['30%', '35%', '30%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />

       
        <motion.div
          className="absolute rounded-full bg-blue-400 opacity-5"
          initial={{
            right: '30%',
            bottom: '20%',
            width: 250,
            height: 250,
          }}
          animate={{
            right: ['30%', '35%', '30%'],
            bottom: ['20%', '25%', '20%'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />

       
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center">
        
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Milot Verbani
              </h2>
              <motion.p 
                className="text-center text-gray-600 mt-3 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Crafting Digital Excellence
              </motion.p>
            </motion.div>
          </motion.div>

      
          <motion.div 
            className="flex space-x-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <div className="absolute inset-0 bg-white rounded-xl shadow-lg group-hover:shadow-xl transform group-hover:-rotate-3 transition-all duration-300"></div>
                <div className="relative z-10 w-14 h-14 flex items-center justify-center bg-white border border-gray-100 rounded-xl group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-indigo-50 transition-all duration-300">
                  <span className="text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">
                    {link.icon}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>


          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                whileHover={{ y: -2 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 text-lg"
                >
                  {item}
                </a>
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-indigo-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

        
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="text-gray-500 text-sm mb-4">
              © {currentYear} Milot Verbani. All rights reserved.
            </div>
            
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;