import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaDownload, FaImage } from "react-icons/fa";
import { projectDetails } from "../constants";
import { styles } from "../styles";
import StarsCanvas from "./canvas/Stars";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-[#915EFF] text-white px-6 py-3 rounded-full font-semibold"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-primary min-h-screen">
      <StarsCanvas />
      <div className="relative z-10 max-w-5xl mx-auto sm:px-16 px-6 py-16 sm:py-24">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-secondary hover:text-white transition-colors mb-10 text-sm sm:text-base"
        >
          <FaArrowLeft /> Back
        </motion.button>

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeIn} className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span
                className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                  project.status === "Ongoing"
                    ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
                    : "bg-green-500/20 text-green-400 border border-green-500/40"
                }`}
              >
                {project.status}
              </span>
              <span className="text-secondary text-xs sm:text-sm">{project.statusDetail}</span>
            </div>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-[#915EFF] text-lg sm:text-xl font-semibold mt-2">
                {project.subtitle}
              </p>
            )}
            <p className="text-secondary text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </motion.div>

          {/* Meta Info Bar */}
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap gap-4 sm:gap-6 mb-10 p-4 sm:p-5 bg-black-100/60 backdrop-blur-sm rounded-xl border border-white/5"
          >
            {[
              { label: "Domain", value: project.domain },
              { label: "Institution", value: project.institution },
              { label: "Duration", value: project.duration },
              ...(project.site ? [{ label: "Site", value: project.site }] : []),
            ].map((item) => (
              <div key={item.label} className="min-w-[140px]">
                <p className="text-secondary text-[10px] sm:text-xs uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-white text-xs sm:text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <motion.div variants={fadeIn} className="mb-12">
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#915EFF] rounded-full inline-block" />
                Key Metrics
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {project.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-[#1a0f2e] to-[#0d0a1a] p-4 sm:p-5 rounded-xl border border-white/5 hover:border-[#915EFF]/30 transition-colors"
                  >
                    <p className="text-[#915EFF] text-lg sm:text-2xl font-black">{m.value}</p>
                    <p className="text-secondary text-[10px] sm:text-xs mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Content Sections */}
          <div className="space-y-8 mb-12">
            {project.sections.map((section, i) => (
              <motion.div key={i} variants={fadeIn}>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#915EFF] rounded-full inline-block" />
                  {section.title}
                </h2>
                {section.content && (
                  <p className="text-secondary text-sm sm:text-base leading-relaxed mb-3">
                    {section.content}
                  </p>
                )}
                {section.bullets && (
                  <ul className="space-y-2 ml-4">
                    {section.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-white-100 text-xs sm:text-sm leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[#915EFF] mt-1.5 text-xs">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Conclusions (Kabeli only) */}
          {project.conclusions && (
            <motion.div variants={fadeIn} className="mb-12">
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#915EFF] rounded-full inline-block" />
                Key Conclusions
              </h2>
              <div className="bg-gradient-to-br from-[#1a0f2e] to-[#0d0a1a] p-5 sm:p-6 rounded-xl border border-white/5 space-y-2">
                {project.conclusions.map((c, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1 text-sm">✓</span>
                    <p className="text-secondary text-xs sm:text-sm leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tools & Tech */}
          <motion.div variants={fadeIn} className="mb-12">
            <h2 className="text-white text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#915EFF] rounded-full inline-block" />
              Tools & Standards Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-[#915EFF]/10 border border-[#915EFF]/20 rounded-full text-[#915EFF] text-[11px] sm:text-xs font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div variants={fadeIn} className="mb-12">
            <h2 className="text-white text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#915EFF] rounded-full inline-block" />
              Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.team.map((member, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 sm:p-4 bg-black-100/60 rounded-xl border border-white/5"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#915EFF]/20 flex items-center justify-center text-[#915EFF] font-bold text-sm shrink-0">
                    {member.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-xs sm:text-sm font-semibold truncate">
                      {member.name}
                    </p>
                    <p className="text-secondary text-[10px] sm:text-xs truncate">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Supervisors (Kabeli only) */}
          {project.supervisors && (
            <motion.div variants={fadeIn} className="mb-12">
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#915EFF] rounded-full inline-block" />
                Supervisors & Support
              </h2>
              <div className="space-y-2">
                {project.supervisors.map((s, i) => (
                  <div
                    key={i}
                    className="p-3 sm:p-4 bg-black-100/60 rounded-xl border border-white/5 flex items-center gap-3"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm shrink-0">
                      {s.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white text-xs sm:text-sm font-semibold">{s.name}</p>
                      <p className="text-secondary text-[10px] sm:text-xs">{s.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Links */}
          <motion.div variants={fadeIn}>
            <h2 className="text-white text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#915EFF] rounded-full inline-block" />
              Links
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#238636] hover:bg-[#2ea043] text-white rounded-full font-semibold text-sm transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub Repository
                </a>
              )}
              {project.links.map((link, i) =>
                link.url ? (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#915EFF] hover:bg-[#7d4fe3] text-white rounded-full font-semibold text-sm transition-colors"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    {link.label}
                  </a>
                ) : (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-secondary rounded-full text-sm"
                  >
                    {link.label}: {link.note}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Images Gallery */}
          {project.images && project.images.length > 0 && (
            <motion.div variants={fadeIn} className="mt-12">
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#915EFF] rounded-full inline-block" />
                <FaImage className="w-5 h-5" /> Images & Gallery
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {project.images.map((img, i) => (
                  <div key={i} className="relative group overflow-hidden rounded-xl border border-white/5 bg-black-100/60">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <p className="absolute bottom-0 left-0 right-0 p-2 text-[10px] sm:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Documents */}
          {project.documents && project.documents.length > 0 && (
            <motion.div variants={fadeIn} className="mt-12 mb-4">
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#915EFF] rounded-full inline-block" />
                Documents
              </h2>
              <div className="space-y-3">
                {project.documents.map((doc, i) => (
                  <a
                    key={i}
                    href={doc.file}
                    download
                    className="flex items-center gap-4 p-4 bg-black-100/60 rounded-xl border border-white/5 hover:border-[#915EFF]/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#915EFF]/15 flex items-center justify-center shrink-0">
                      <FaDownload className="w-5 h-5 text-[#915EFF]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm sm:text-base font-semibold group-hover:text-[#915EFF] transition-colors">
                        {doc.name}
                      </p>
                      <p className="text-secondary text-[10px] sm:text-xs">Click to download PDF</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
