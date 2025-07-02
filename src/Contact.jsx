import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import git from '/images/github.png';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pth8e9f", "template_0atkdpr", form.current, {
        publicKey: "_rQMtWpoKQ-sE37bJ",
      })
      .then(
        () => {
          setStatus("Mesazhi u dërgua me sukses!");
          form.current.reset();
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("Gabim gjatë dërgimit të mesazhit.");
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
   
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url(/images/cc.png)] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-900/70 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Touch</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Send me a message and I'll get back to you soon.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 items-center gap-12">
      
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl"
          >
            <motion.div variants={itemVariants} className="flex items-center">
              <div className="bg-pink-600/20 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#fff' viewBox="0 0 479.058 479.058">
                  <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Email</h3>
                <a href="mailto:milot.verbani233@gmail.com" className="text-white hover:text-pink-300 transition-colors">milot.verbani233@gmail.com</a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center">
              <div className="bg-pink-600/20 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#fff' viewBox="0 0 482.6 482.6">
                  <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Phone</h3>
                <a href="tel:+38349329546" className="text-white hover:text-pink-300 transition-colors">(+383) 049-329-546</a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center">
              <div className="bg-pink-600/20 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#fff' viewBox="0 0 368.16 368.16">
                  <path d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z" />
                  <path d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Location</h3>
                <p className="text-white">Kaçanik Kosovo 71000</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <h3 className="text-sm font-medium text-gray-400 mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://github.com/milotverbani" 
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="bg-gradient-to-br from-pink-600 to-purple-600 h-12 w-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <img src={git} className="w-6" alt="GitHub" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/milot-verbani-4371232b1/" 
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="bg-gradient-to-br from-pink-600 to-purple-600 h-12 w-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/milotverbanii/" 
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="bg-gradient-to-br from-pink-600 to-purple-600 h-12 w-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-white text-xl" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

         
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
          
            <motion.div
              animate={{
                x: isHovered ? [0, 100, 0] : 0,
                y: isHovered ? [0, -50, 0] : 0,
                rotate: isHovered ? [0, 10, -5, 0] : 0
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 -top-20 w-40 h-40 bg-pink-200/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                x: isHovered ? [0, -50, 0] : 0,
                y: isHovered ? [0, 30, 0] : 0,
                rotate: isHovered ? [0, -15, 5, 0] : 0
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -left-10 -bottom-10 w-32 h-32 bg-purple-200/10 rounded-full blur-xl"
            />

            <div className="relative z-10">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-pink-500 to-purple-500 mb-8 rounded-full"
              />
              
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Send Me a Message</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-3 text-gray-500 duration-300 transform -translate-y-6 scale-75 z-10 origin-[0] peer-focus:left-4 peer-focus:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9"
                  >
                    First Name
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="lastname"
                    className="absolute left-4 top-3 text-gray-500 duration-300 transform -translate-y-6 scale-75 z-10 origin-[0] peer-focus:left-4 peer-focus:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9"
                  >
                    Last Name
                  </label>
                </div>
                
                <div className="relative md:col-span-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-3 text-gray-500 duration-300 transform -translate-y-6 scale-75 z-10 origin-[0] peer-focus:left-4 peer-focus:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9"
                  >
                    Email Address
                  </label>
                </div>
                
                <div className="relative md:col-span-2">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-4 top-3 text-gray-500 duration-300 transform -translate-y-6 scale-75 z-10 origin-[0] peer-focus:left-4 peer-focus:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9"
                  >
                    Phone Number (Optional)
                  </label>
                </div>
                
                <div className="relative md:col-span-2">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent peer"
                    placeholder=" "
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-3 text-gray-500 duration-300 transform -translate-y-6 scale-75 z-10 origin-[0] peer-focus:left-4 peer-focus:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9"
                  >
                    Your Message
                  </label>
                </div>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 cursor-pointer bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-700 to-purple-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
              
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 text-center text-sm font-medium ${
                    status.includes("sukses") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status}
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;