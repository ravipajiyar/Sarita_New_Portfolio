import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaDownload } from "react-icons/fa";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences, projectDetails } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const researchProjectLinks = {
  "Researcher - SHM": "crackformer",
  "Undergraduate Thesis - Researcher": "kabeli-a-hep",
};

const researchTags = {
  "Researcher - SHM": [
    { name: "deep-learning", color: "blue-text-gradient" },
    { name: "structural-health-monitoring", color: "green-text-gradient" },
    { name: "concrete-crack-detection", color: "pink-text-gradient" },
  ],
  "Undergraduate Thesis - Researcher": [
    { name: "hydropower", color: "blue-text-gradient" },
    { name: "hydraulic-design", color: "green-text-gradient" },
    { name: "feasibility-study", color: "pink-text-gradient" },
  ],
};

const researchHighlights = {
  "Researcher - SHM": [
    { label: "IoU", value: "85.4%" },
    { label: "F1-score", value: "92.1%" },
  ],
  "Undergraduate Thesis - Researcher": [
    { label: "Power", value: "49.49 MW" },
    { label: "B/C Ratio", value: "2.27" },
    { label: "IRR", value: "15%" },
  ],
};

/* ─── Research Card (solid bg like industrial, wider) ─── */
const ResearchCard = ({ experience, position, onClick }) => {
  const slug = researchProjectLinks[experience.title];
  const tags = researchTags[experience.title] || [];
  const highlights = researchHighlights[experience.title] || [];
  const detail = projectDetails[slug];

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1a1430",
        color: "#fff",
        borderRadius: "16px",
        padding: "24px 28px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      position={position}
      iconStyle={{ background: "transparent", boxShadow: "none" }}
      icon={<></>}
    >
      <div onClick={onClick} className="cursor-pointer">
        {/* Header: status + date */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${
            detail?.status === "Ongoing"
              ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
              : "bg-green-500/20 text-green-400 border border-green-500/40"
          }`}>
            {detail?.status}
          </span>
          <span className="text-secondary text-[11px] sm:text-[13px]">{experience.date}</span>
        </div>

        {/* Institution */}
        <p className="text-secondary text-[12px] sm:text-[14px] font-semibold mb-1">
          {experience.company_name}
        </p>

        {/* Title */}
        <h3 className="text-white font-bold text-[18px] sm:text-[22px] leading-tight mb-2">
          {experience.title}
        </h3>

        {/* Tagline */}
        <p className="text-secondary text-[12px] sm:text-[14px] leading-relaxed mb-4">
          {detail?.tagline}
        </p>

        {/* Key Highlights */}
        {highlights.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {highlights.map((h, i) => (
              <div key={i} className="bg-[#915EFF]/15 border border-[#915EFF]/25 rounded-lg px-3 py-2">
                <span className="text-[#915EFF] text-sm sm:text-base font-black">{h.value}</span>
                <span className="text-secondary text-[10px] sm:text-[11px] ml-1.5">{h.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px] sm:text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Documents (inline) */}
        {detail?.documents && detail.documents.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {detail.documents.map((doc, i) => (
              <a key={i} href={doc.file} download onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 hover:border-[#915EFF]/30 rounded-lg text-secondary hover:text-[#915EFF] text-[11px] sm:text-xs transition-colors">
                <FaDownload className="w-3 h-3" /> {doc.name}
              </a>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center gap-2 text-[#915EFF] text-xs sm:text-sm font-semibold">
          View Full Details <FaArrowRight className="w-3 h-3" />
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

/* ─── Timeline Experience Card (industrial / club) ─── */
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1a1430", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={experience.icon} alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain' />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[16px] sm:text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[12px] sm:text-[16px] font-semibold' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
      <ul className='mt-3 sm:mt-5 list-disc ml-5 space-y-1.5 sm:space-y-2'>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}
            className='text-white-100 text-[11px] sm:text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

/* ─── Main Experience Component ─── */
const Experience = () => {
  const navigate = useNavigate();

  const researchExperiences = experiences.filter(exp => exp.title.includes("Researcher"));
  const industrialExperiences = experiences.filter(exp =>
    exp.title.includes("Internship") || exp.title.includes("Officer") ||
    exp.title.includes("Analyst") || exp.title.includes("Engineer")
  );
  const clubExperiences = experiences.filter(exp =>
    !exp.title.includes("Researcher") && !exp.title.includes("Internship") &&
    !exp.title.includes("Officer") && !exp.title.includes("Analyst") &&
    !exp.title.includes("Engineer")
  );

  const SectionDivider = ({ title }) => (
    <div className="w-full text-center py-8">
      <h3 className="text-white text-[18px] sm:text-[24px] font-bold mb-4">{title}</h3>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
    </div>
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {/* ── Research Experience ── */}
          {researchExperiences.length > 0 && (
            <>
              <VerticalTimelineElement
                className="vertical-timeline-element--section"
                contentStyle={{ background: 'transparent', boxShadow: 'none', border: 'none' }}
                contentArrowStyle={{ display: 'none' }}
                iconStyle={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff' }}
                icon={<div className="text-2xl">🔬</div>}
              >
                <SectionDivider title="Research Experience" />
              </VerticalTimelineElement>

              {/* SHM card → LEFT */}
              {researchExperiences[0] && (
                <ResearchCard
                  experience={researchExperiences[0]}
                  position="left"
                  onClick={() => navigate(`/projects/${researchProjectLinks[researchExperiences[0].title]}`, { state: { from: "/#work" } })}
                />
              )}

              {/* Thesis card → RIGHT */}
              {researchExperiences[1] && (
                <ResearchCard
                  experience={researchExperiences[1]}
                  position="right"
                  onClick={() => navigate(`/projects/${researchProjectLinks[researchExperiences[1].title]}`, { state: { from: "/#work" } })}
                />
              )}
            </>
          )}

          {/* ── Industrial Experience ── */}
          {industrialExperiences.length > 0 && (
            <>
              <VerticalTimelineElement
                className="vertical-timeline-element--section"
                contentStyle={{ background: 'transparent', boxShadow: 'none', border: 'none' }}
                contentArrowStyle={{ display: 'none' }}
                iconStyle={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: '#fff' }}
                icon={<div className="text-2xl">🏢</div>}
              >
                <SectionDivider title="Industrial Experience" />
              </VerticalTimelineElement>
              {industrialExperiences.map((experience, index) => (
                <ExperienceCard key={`industrial-${index}`} experience={experience} />
              ))}
            </>
          )}

          {/* ── Club Experience ── */}
          {clubExperiences.length > 0 && (
            <>
              <VerticalTimelineElement
                className="vertical-timeline-element--section"
                contentStyle={{ background: 'transparent', boxShadow: 'none', border: 'none' }}
                contentArrowStyle={{ display: 'none' }}
                iconStyle={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: '#fff' }}
                icon={<div className="text-2xl">🎯</div>}
              >
                <SectionDivider title="Club Experience" />
              </VerticalTimelineElement>
              {clubExperiences.map((experience, index) => (
                <ExperienceCard key={`club-${index}`} experience={experience} />
              ))}
            </>
          )}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
