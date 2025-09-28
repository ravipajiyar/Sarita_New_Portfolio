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
        padding: "1rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
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
        <h3 className='text-white text-[20px] sm:text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[14px] sm:text-[16px] font-semibold mt-1'>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[12px] sm:text-[14px] pl-1 tracking-wider'
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
    <div className="relative w-full overflow-hidden">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {/* Experience Sections */}
        {[
          { title: "Research Experience", data: researchExperiences, delay: 0.1 },
          { title: "Industrial Experience", data: industrialExperiences, delay: 0.2 },
          { title: "Club Experience", data: clubExperiences, delay: 0.3 }
        ].map((section, idx) => (
          <motion.div
            key={section.title}
            variants={fadeIn("up", "spring", section.delay, 0.75)}
            className="mb-10 px-4 sm:px-0"
          >
            <h3 className="text-white text-[20px] sm:text-[24px] font-bold text-center mb-10">
              {section.title}
            </h3>
            <VerticalTimeline className="vertical-timeline-custom-line">
              {section.data.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </VerticalTimeline>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
