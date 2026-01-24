import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { murcsProject } from "../constants";

// --- Sub-Component: Document Card ---
const DocumentCard = ({ index, title, description, file, fullDescription, isLink, onViewDetails }) => (
  <Tilt className="xs:w-[300px] w-full">
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-black-100 p-6 rounded-2xl shadow-card relative min-h-[300px] border border-[#915EFF] border-opacity-30 hover:border-opacity-100 transition-all duration-300 cursor-pointer group"
      onClick={() => onViewDetails({ title, description, fullDescription, file, isLink })}
    >
      <h3 className="text-white text-[20px] font-bold mb-2">{title}</h3>
      <p className="mt-1 text-secondary text-[14px] line-clamp-4">{description}</p>
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (isLink) {
            window.open(file, '_blank');
          } else {
            const link = document.createElement('a');
            link.href = file;
            link.download = true;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        }}
        className="bg-[#915EFF] text-white py-2 px-4 rounded-md shadow-md text-sm font-bold hover:bg-[#7d4fe3] transition absolute bottom-4 right-4"
      >
        {isLink ? "Open Tool" : "Download"}
      </button>
    </motion.div>
  </Tilt>
);

// --- Sub-Component: Ongoing Task Card ---
const OngoingTaskCard = ({ index, taskNumber, title, description, details, status, onViewDetails }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="bg-black-100 p-6 rounded-2xl border border-[#64ffda] border-opacity-30 hover:border-opacity-100 transition-all duration-300 mb-6 cursor-pointer"
    onClick={() => onViewDetails({ taskNumber, title, description, details, status })}
    whileHover={{ x: 10 }}
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#64ffda] font-bold text-lg">{taskNumber}</span>
          <h3 className="text-white text-[22px] font-bold">{title}</h3>
        </div>
        <p className="text-secondary text-[16px]">{description}</p>
      </div>
      <div className="px-4 py-1 bg-[#64ffda]/10 border border-[#64ffda]/40 rounded-full w-fit">
        <p className="text-[#64ffda] text-xs font-bold uppercase">{status}</p>
      </div>
    </div>
  </motion.div>
);

// --- Modal: Details View ---
const DetailModal = ({ isOpen, task, onClose }) => {
  if (!isOpen || !task) return null;
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-black-100 rounded-2xl border border-[#915EFF] border-opacity-50 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-secondary hover:text-white text-2xl">✕</button>
        <h2 className="text-white text-[30px] font-bold mb-4">{task.title}</h2>
        <p className="text-secondary text-[16px] mb-6">{task.description}</p>
        <div className="bg-[#1a1a2e] rounded-lg p-6 mb-8 border border-[#915EFF] border-opacity-30">
          <h3 className="text-white text-[18px] font-bold mb-4">Detailed Description</h3>
          <p className="text-secondary text-[15px] leading-[26px] whitespace-pre-line">{task.fullDescription}</p>
        </div>
        <div className="flex gap-4">
          {task.isLink ? (
            <>
              <a href={task.file} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#915EFF] text-center py-3 rounded-lg font-bold text-white hover:bg-[#7d4fe3] transition">
                Open Tool →
              </a>
              <button onClick={onClose} className="flex-1 border border-[#915EFF] text-white py-3 rounded-lg font-bold hover:bg-[#915EFF]/10 transition">Close</button>
            </>
          ) : (
            <>
              <a href={task.file} download className="flex-1 bg-[#915EFF] text-center py-3 rounded-lg font-bold text-white hover:bg-[#7d4fe3] transition">
                Download PDF
              </a>
              <button onClick={onClose} className="flex-1 border border-[#915EFF] text-white py-3 rounded-lg font-bold hover:bg-[#915EFF]/10 transition">Close</button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

// --- Modal: Ongoing Task Details ---
const OngoingTaskModal = ({ isOpen, task, onClose }) => {
  if (!isOpen || !task) return null;
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-black-100 rounded-2xl border border-[#64ffda] border-opacity-50 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-secondary hover:text-white text-2xl">✕</button>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#64ffda] font-bold text-2xl">{task.taskNumber}</span>
          <h2 className="text-white text-[30px] font-bold">{task.title}</h2>
        </div>
        <p className="text-secondary text-[16px] mb-8">{task.description}</p>
        
        <div className="space-y-6">
          {task.details?.map((detail, idx) => (
            <div key={idx} className="bg-[#1a1a2e] rounded-lg p-6 border border-[#64ffda] border-opacity-20">
              <h3 className="text-white font-bold mb-4 text-[18px] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#64ffda]"></span>
                {detail.subtitle}
              </h3>
              <ul className="space-y-3">
                {detail.points?.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#64ffda] mt-2 flex-shrink-0"></div>
                    <span className="text-secondary text-[15px]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const MUrCS = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOngoingModalOpen, setIsOngoingModalOpen] = useState(false);

  const handleOpenDoc = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleOpenOngoing = (task) => {
    setSelectedTask(task);
    setIsOngoingModalOpen(true);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Research & Development</p>
        <h2 className={styles.sectionHeadText}>MUrCS Project</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {murcsProject?.title}
      </motion.p>

      {/* 1. Completed Tasks Section */}
      <div className="mt-20">
        <h3 className="text-white text-[28px] font-bold mb-10 border-l-4 border-[#915EFF] pl-4">
          ✓ Completed Tasks
        </h3>
        <div className="flex flex-wrap gap-7 justify-center">
          {murcsProject?.completedTasks?.map((task, index) => (
            <DocumentCard 
              key={`comp-${index}`} 
              index={index} 
              {...task} 
              onViewDetails={handleOpenDoc} 
            />
          ))}
        </div>
      </div>

      {/* 2. Ongoing Tasks Section */}
      <div className="mt-32">
        <h3 className="text-white text-[28px] font-bold mb-10 border-l-4 border-[#64ffda] pl-4">
          🔄 Ongoing Work
        </h3>
        <div className="max-w-4xl mx-auto">
          {murcsProject?.ongoingTasks?.map((task, index) => (
            <OngoingTaskCard 
              key={`ong-${index}`} 
              index={index} 
              {...task} 
              onViewDetails={handleOpenOngoing} 
            />
          ))}
        </div>
      </div>

      {/* 3. Preliminary Outputs Section */}
      <div className="mt-32">
        <h3 className="text-white text-[28px] font-bold mb-10 border-l-4 border-white pl-4">
          📦 Preliminary Outputs
        </h3>
        <div className="flex flex-wrap gap-7 justify-center">
          {murcsProject?.preliminaryOutputs?.map((output, index) => (
            <DocumentCard 
              key={`pre-${index}`} 
              index={index} 
              {...output} 
              onViewDetails={handleOpenDoc} 
            />
          ))}
        </div>
      </div>

      {/* Modals Layer */}
      <AnimatePresence>
        {isModalOpen && (
          <DetailModal 
            isOpen={isModalOpen} 
            task={selectedTask} 
            onClose={() => setIsModalOpen(false)} 
          />
        )}
        {isOngoingModalOpen && (
          <OngoingTaskModal 
            isOpen={isOngoingModalOpen} 
            task={selectedTask} 
            onClose={() => setIsOngoingModalOpen(false)} 
          />
        )}
      </AnimatePresence>

      {/* Stats Overview */}
      <div className="mt-20 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] p-10 rounded-3xl border border-white/10 flex flex-wrap justify-around gap-8">
        <div className="text-center">
          <h4 className="text-[#915EFF] text-5xl font-bold">{murcsProject.completedTasks?.length || 0}</h4>
          <p className="text-secondary mt-2">Completed</p>
        </div>
        <div className="text-center">
          <h4 className="text-[#64ffda] text-5xl font-bold">{murcsProject.ongoingTasks?.length || 0}</h4>
          <p className="text-secondary mt-2">In Progress</p>
        </div>
        <div className="text-center">
          <h4 className="text-white text-5xl font-bold">{murcsProject.preliminaryOutputs?.length || 0}</h4>
          <p className="text-secondary mt-2">Outputs</p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(MUrCS, "murcs");