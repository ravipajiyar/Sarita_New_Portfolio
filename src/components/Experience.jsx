import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        padding: "1.5rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        visibility: "visible",
        // Add these properties for better large screen support
        maxWidth: "600px", // Prevent content from being too wide
        minHeight: "auto", // Allow natural height
      }}
      contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg,
        // Ensure icon visibility on all screens
        width: "60px",
        height: "60px",
        visibility: "visible",
      }}
      visible={true}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[20px] sm:text-[24px] lg:text-[26px] font-bold'>
          {experience.title}
        </h3>
        <p className='text-secondary text-[14px] sm:text-[16px] lg:text-[18px] font-semibold mt-1'>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[12px] sm:text-[14px] lg:text-[16px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const researchExperiences = experiences.filter(exp => exp.title.includes("Researcher"));
  const industrialExperiences = experiences.filter(exp => exp.title.includes("Internship"));
  const clubExperiences = experiences.filter(exp => 
    !exp.title.includes("Researcher") && !exp.title.includes("Internship")
  );

  return (
    <div className="relative w-full min-h-screen overflow-visible">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col gap-12 pb-20'>
        {[
          { title: "Research Experience", data: researchExperiences, delay: 0.1 },
          { title: "Industrial Experience", data: industrialExperiences, delay: 0.2 },
          { title: "Club Experience", data: clubExperiences, delay: 0.3 }
        ].map((section) => (
          <motion.div
            key={section.title}
            variants={fadeIn("up", "spring", section.delay, 0.75)}
            className="w-full relative"
          >
            <h3 className="text-white text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-center mb-10">
              {section.title}
            </h3>
            <div className="relative w-full overflow-visible">
              <VerticalTimeline
                layout="2-columns"
                animate={true}
                className="vertical-timeline-custom-line"
              >
                {section.data.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} />
                ))}
              </VerticalTimeline>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        /* Custom styles to fix large screen issues */
        .vertical-timeline::before {
          background: #232631 !important;
        }
        
        .vertical-timeline-element {
          visibility: visible !important;
        }
        
        .vertical-timeline-element-content {
          visibility: visible !important;
          opacity: 1 !important;
        }
        
        /* Ensure proper spacing on large screens */
        @media (min-width: 1170px) {
          .vertical-timeline-element {
            margin: 4rem 0;
          }
          
          .vertical-timeline-element-content {
            margin-left: 0 !important;
            width: calc(50% - 45px) !important;
          }
          
          .vertical-timeline-element-date {
            display: block !important;
            visibility: visible !important;
          }
        }
        
        /* Fix for extra large screens */
        @media (min-width: 1440px) {
          .vertical-timeline {
            max-width: 1200px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Experience, "work");