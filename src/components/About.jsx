import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

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
        className="bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[240px] sm:min-h-[280px] flex justify-evenly items-center flex-col"
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
        <p className={styles.sectionSubText}>Education & Skills</p>
        <h2 className={styles.sectionHeadText}>Core Competencies.</h2>
      </motion.div>

      {/* Education and Core Competencies in flex layout */}
      <div className="mt-8 flex xl:flex-row flex-col justify-between gap-8">
        {/* Education */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="bg-black-100/80 backdrop-blur-sm p-5 sm:p-8 rounded-2xl w-full xl:w-[48%]"
        >
          <h3 className="text-white text-[20px] sm:text-[24px] font-bold mb-3 sm:mb-4">Education</h3>
          <div className="text-secondary text-[14px] sm:text-[16px]">
            <p><span className="text-white font-bold">Kathmandu University</span></p>
            <p>B.E. Civil Engineering</p>
            <p>2021 - 2025</p>
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="bg-black-100/80 backdrop-blur-sm p-5 sm:p-8 rounded-2xl w-full xl:w-[48%]"
        >
          <h3 className="text-white text-[20px] sm:text-[24px] font-bold mb-3 sm:mb-4">Core Competencies</h3>
          <ul className="list-disc text-secondary text-[14px] sm:text-[16px] pl-5">
            <li>Hydraulic Design</li>
            <li>Concrete Technology & Testing</li>
            <li>Structural Analysis & Design</li>
            <li>Water Resources Engineering</li>
            <li>Project Management</li>
          </ul>
        </motion.div>
      </div>

      {/* Services Cards */}
      <div className="mt-12 sm:mt-20 flex flex-wrap gap-6 sm:gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");