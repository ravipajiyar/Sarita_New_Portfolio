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
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1a1430", // Darker purple background
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
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
  const researchExperiences = experiences.filter(exp => exp.title.includes("Researcher"));
  const industrialExperiences = experiences.filter(exp => exp.title.includes("Internship") || exp.title.includes("Officer") || exp.title.includes("Analyst"));
  const clubExperiences = experiences.filter(exp => 
    !exp.title.includes("Researcher") && !exp.title.includes("Internship") && !exp.title.includes("Officer") && !exp.title.includes("Analyst")
  );

  // Create section divider component
  const SectionDivider = ({ title }) => (
    <div className="w-full text-center py-8">
      <h3 className="text-white text-[24px] font-bold mb-4">{title}</h3>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
    </div>
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
        <VerticalTimeline>
          {/* Research Experience Section */}
          {researchExperiences.length > 0 && (
            <>
              <VerticalTimelineElement
                className="vertical-timeline-element--section"
                contentStyle={{
                  background: 'transparent',
                  boxShadow: 'none',
                  border: 'none',
                }}
                contentArrowStyle={{ display: 'none' }}
                iconStyle={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                }}
                icon={<div className="text-2xl">🔬</div>}
              >
                <SectionDivider title="Research Experience" />
              </VerticalTimelineElement>
              {researchExperiences.map((experience, index) => (
                <ExperienceCard
                  key={`research-${index}`}
                  experience={experience}
                />
              ))}
            </>
          )}

          {/* Industrial Experience Section */}
          {industrialExperiences.length > 0 && (
            <>
              <VerticalTimelineElement
                className="vertical-timeline-element--section"
                contentStyle={{
                  background: 'transparent',
                  boxShadow: 'none',
                  border: 'none',
                }}
                contentArrowStyle={{ display: 'none' }}
                iconStyle={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  color: '#fff',
                }}
                icon={<div className="text-2xl">🏢</div>}
              >
                <SectionDivider title="Industrial Experience" />
              </VerticalTimelineElement>
              {industrialExperiences.map((experience, index) => (
                <ExperienceCard
                  key={`industrial-${index}`}
                  experience={experience}
                />
              ))}
            </>
          )}

          {/* Club Experience Section */}
          {clubExperiences.length > 0 && (
            <>
              <VerticalTimelineElement
                className="vertical-timeline-element--section"
                contentStyle={{
                  background: 'transparent',
                  boxShadow: 'none',
                  border: 'none',
                }}
                contentArrowStyle={{ display: 'none' }}
                iconStyle={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  color: '#fff',
                }}
                icon={<div className="text-2xl">🎯</div>}
              >
                <SectionDivider title="Club Experience" />
              </VerticalTimelineElement>
              {clubExperiences.map((experience, index) => (
                <ExperienceCard
                  key={`club-${index}`}
                  experience={experience}
                />
              ))}
            </>
          )}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");