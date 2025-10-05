import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import sarita_sapkota from '../assets/sarita_resume.pdf';

// ServiceCard component remains the same
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Main Content Container with flex layout */}
      <div className="mt-4 flex xl:flex-row flex-col justify-between gap-8">
        {/* Left Content Container for text and buttons */}
        <div className="flex flex-col w-full xl:w-[50%]">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[17px] leading-[30px]"
          >
            A recent Civil Engineering graduate from Kathmandu University passionate about structural engineering and technology-driven structural health monitoring. Experienced in hydropower design, hydraulic modeling, and geospatial analysis, with hands-on fieldwork and deep learning research for crack detection. Committed to advancing resilient and sustainable infrastructure solutions.
          </motion.p>

          {/* Buttons Section */}
          <div className="mt-20 flex justify-start gap-8">
            <motion.a
              href={sarita_sapkota}
              download
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#915EFF] text-white py-3 px-6 rounded-md shadow-md text-lg font-bold hover:bg-[#7d4fe3] transition"
            >
              Download Resume
            </motion.a>
            <motion.a
              href="https://saritadigitalresume.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(100, 255, 218, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#64ffda] text-[#64ffda] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 text-center backdrop-blur-sm text-sm sm:text-base flex items-center justify-center gap-2"
            >
              Digital Resume
              <svg 
                className="w-4 h-4 inline-block" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Education and Core Competencies Section */}
        <div className="flex flex-col gap-4 w-full xl:w-[48%]">
         <motion.div
                variants={fadeIn("up", "spring",  0.5, 0.75)}
                className="bg-black-100/80 backdrop-blur-sm p-8 rounded-2xl w-full"
          >
            <h3 className="text-white text-[24px] font-bold mb-4">Education</h3>
            <div className="text-secondary text-[16px]">
              <p><span className="text-white font-bold">Kathmandu University</span></p>
              <p>B.E. Civil Engineering</p>
              <p>2021 - 2025</p>
            </div>
         </motion.div>

           <motion.div
                variants={fadeIn("up", "spring",  0.5, 0.75)}
                className="bg-black-100/80 backdrop-blur-sm p-8 rounded-2xl w-full"
              >
                <h3 className="text-white text-[24px] font-bold mb-4">Core Competencies</h3>
                <ul className="list-disc text-secondary text-[16px] pl-5">
                  <li>AutoCAD Design</li>
                  <li>Project Management</li>
                  <li>Structural Analysis</li>
                  <li>Hydraulic Engineering</li>
                </ul>
          </motion.div>
         </div>
      </div>

      {/* Services Cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");