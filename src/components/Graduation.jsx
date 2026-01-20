import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import graduationImage from '../assets/graduation.jpeg';

const Graduation = () => {
  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Personal Milestone</p>
        <h2 className={styles.sectionHeadText}>Graduation Journey.</h2>
      </motion.div>

      {/* Main Content Container */}
      <div className="mt-12 bg-black-100/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#915EFF] border-opacity-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Image Section */}
          <motion.div
            variants={fadeIn("right", "spring", 0.2, 0.75)}
            className="h-full min-h-[400px] lg:min-h-[500px] relative overflow-hidden rounded-3xl"
          >
            <img
              src={graduationImage}
              alt="Graduation"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF] via-transparent to-[#64ffda] opacity-20"></div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            variants={fadeIn("left", "spring", 0.4, 0.75)}
            className="flex flex-col justify-center p-6 sm:p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-gradient-to-r from-[#915EFF] to-[#64ffda]"></div>
              <p className="text-[#915EFF] font-bold text-sm uppercase tracking-widest">
                A Memorable Achievement
              </p>
            </div>

            <h3 className="text-white text-[32px] sm:text-[40px] font-bold mb-6 leading-tight">
              Grateful for My Journey
            </h3>

            <p className="text-secondary text-[16px] sm:text-[18px] leading-[30px] mb-8">
              Grateful for my journey as a Civil Engineering graduate—filled with challenges, growth, and unforgettable lessons. Heartfelt thanks to my parents for their endless support, my teachers for their guidance, and Kathmandu University for shaping both my knowledge and character. Proud to carry these memories and lessons forward.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#1a1a2e] border border-[#915EFF] border-opacity-30 rounded-xl p-4"
              >
                <p className="text-[#915EFF] font-bold text-lg mb-2">🎓</p>
                <p className="text-white font-semibold">B.E. Civil Engineering</p>
                <p className="text-secondary text-sm">Kathmandu University</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#1a1a2e] border border-[#64ffda] border-opacity-30 rounded-xl p-4"
              >
                <p className="text-[#64ffda] font-bold text-lg mb-2">📅</p>
                <p className="text-white font-semibold">2021 - 2025</p>
                <p className="text-secondary text-sm">Graduation Year</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#1a1a2e] border border-[#915EFF] border-opacity-30 rounded-xl p-4"
              >
                <p className="text-[#915EFF] font-bold text-lg mb-2">🏆</p>
                <p className="text-white font-semibold">Specialized in</p>
                <p className="text-secondary text-sm">Hydropower Engineering</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#1a1a2e] border border-[#64ffda] border-opacity-30 rounded-xl p-4"
              >
                <p className="text-[#64ffda] font-bold text-lg mb-2">⚡</p>
                <p className="text-white font-semibold">Licensed as</p>
                <p className="text-secondary text-sm">Civil Engineer</p>
              </motion.div>
            </div>

            {/* Gratitude Points */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#915EFF] mt-2 flex-shrink-0"></div>
                <p className="text-secondary text-[15px]">
                  <span className="text-white font-semibold">Parents:</span> For their endless love and unwavering support throughout my academic journey
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#64ffda] mt-2 flex-shrink-0"></div>
                <p className="text-secondary text-[15px]">
                  <span className="text-white font-semibold">Teachers:</span> For their invaluable guidance and inspiring me to reach new heights
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#915EFF] mt-2 flex-shrink-0"></div>
                <p className="text-secondary text-[15px]">
                  <span className="text-white font-semibold">University:</span> For providing exceptional education and shaping my professional character
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Inspirational Quote */}
      <motion.div
        variants={fadeIn("up", "spring", 0.6, 0.75)}
        className="mt-12 bg-gradient-to-r from-[#915EFF] to-[#64ffda] rounded-2xl p-8 text-center"
      >
        <p className="text-white text-xl sm:text-2xl font-semibold italic">
          "Carrying forward the lessons learned, the memories cherished, and the determination to build a better future through resilient and sustainable infrastructure."
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Graduation, "graduation");
