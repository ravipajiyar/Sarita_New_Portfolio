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
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
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
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  // Helper function to filter experiences by date range
  const filterExperiencesByDate = (experiences, startDate, endDate) => {
    return experiences.filter(exp => {
      const expDate = new Date(exp.date.split(" - ")[0]);
      return expDate >= startDate && expDate <= endDate;
    });
  };

  // Get current date for filtering
  const currentDate = new Date();
  const researchExperiences = experiences.filter(exp => exp.title.includes("Researcher"));
  const industrialExperiences = experiences.filter(exp => exp.title.includes("Internship"));
  const clubExperiences = experiences.filter(exp => 
    !exp.title.includes("Researcher") && !exp.title.includes("Internship")
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {/* Research Experience Section */}
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className="mb-10"
        >
          <h3 className="text-white text-[24px] font-bold text-center mb-10">
            Research Experience
          </h3>
          <VerticalTimeline>
            {researchExperiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </motion.div>

        {/* Industrial Experience Section */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="mb-10"
        >
          <h3 className="text-white text-[24px] font-bold text-center mb-10">
            Industrial Experience
          </h3>
          <VerticalTimeline>
            {industrialExperiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </motion.div>

        {/* Club Experience Section */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="mb-10"
        >
          <h3 className="text-white text-[24px] font-bold text-center mb-10">
            Club Experience
          </h3>
          <VerticalTimeline>
            {clubExperiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
