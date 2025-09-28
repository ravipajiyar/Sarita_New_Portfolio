import { motion } from "framer-motion";
import { styles } from "../styles";
import { CivilCanvas } from "./canvas";
import sarruImage from '../assets/sarru.jpeg';
import TypewriterEffect from './TypewriterEffect';
import { lazy, Suspense } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background - keeping original styling */}
      <div className="absolute inset-0"></div>

      {/* Main Content Container with proper padding */}
      <div className="relative z-10 h-full px-6 sm:px-12 lg:px-20 xl:px-24 pt-20 pb-8">
        <div className="max-w-7xl mx-auto h-full flex items-center">
          
          {/* Profile Image - Top Right with better positioning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-32 right-6 sm:right-12 lg:right-20 xl:right-24 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-[#915EFF] shadow-2xl z-30 bg-[#181829]"
          >
            <img 
              src={sarruImage} 
              alt="Sarita Sapkota"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Social Icons - Better vertical positioning */}
          <div className="fixed top-1/2 right-4 sm:right-8 lg:right-12 z-30 flex flex-col gap-4 -translate-y-1/2">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.3, 
                  y: -3,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-[#1a1a2e] backdrop-blur-sm bg-opacity-80 rounded-full flex items-center justify-center text-white hover:text-[#915EFF] hover:bg-[#915EFF] hover:bg-opacity-20 transition-all duration-300 border border-[#915EFF] border-opacity-30"
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Main Content Layout */}
          <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-start space-y-6 pr-4 lg:pr-8 pt-0 mt-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {/* Greeting with animated underline */}
                <div className="relative mb-4">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                    Hi, I'm{' '}
                    <span className="relative text-[#915EFF]">
                      Sarita.S
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#915EFF] to-[#7a3ee6] rounded"
                      />
                    </span>
                  </h1>
                </div>

                {/* Professional Title with Typewriter - keeping original colors */}
                <div className="text-[#dfd9ff] font-medium text-xl sm:text-2xl lg:text-3xl leading-tight mb-6">
                  I'm a{' '}
                  <TypewriterEffect textToType="Civil Engineer" />
                </div>

                {/* Description with better spacing - keeping original colors */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-secondary text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl"
                >
                  A recent Civil Engineering graduate from Kathmandu University specialized in Hydropower, passionate about structural engineering and technology-driven health monitoring. Experienced in hydropower design, hydraulic modeling, geospatial analysis, and deep learning research for crack detection, with a commitment to resilient and sustainable infrastructure
                </motion.p>

                {/* Call-to-Action Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a 
                    href="#works" 
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(145, 94, 255, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#915EFF] to-[#7a3ee6] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    View Projects
                  </motion.a>
                  <motion.a 
                    href="/src/assets/sarita_cv.pdf" 
                    download 
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(145, 94, 255, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-[#915EFF] text-[#915EFF] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#915EFF] hover:text-white transition-all duration-300 text-center backdrop-blur-sm"
                  >
                    Download CV
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side - 3D Canvas */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-end justify-center h-full min-h-[400px] lg:min-h-[500px] pt-40"
            >
              <div className="w-full max-w-[500px] h-[400px] lg:h-[500px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF] via-transparent to-[#64ffda] opacity-10 rounded-full blur-3xl"></div>
                <CivilCanvas />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with enhanced design */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] border-opacity-60 flex justify-center items-start p-2 bg-[#1a1a2e] bg-opacity-30 backdrop-blur-sm hover:border-opacity-100 transition-all duration-300">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#915EFF] mb-1 shadow-lg"
            />
          </div>
        </a>
      </motion.div>


    </section>
  );
};

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/saritasapkota123",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sarita-sapkota-80683b332/",
    icon: FaLinkedin,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/sarita.sapkota.35325074",
    icon: FaFacebook,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/Sarita99444",
    icon: FaTwitter,
  },
];

export default Hero;