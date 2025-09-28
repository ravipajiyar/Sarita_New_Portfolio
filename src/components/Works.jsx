import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaHeart, FaRegHeart, FaStar, FaRegStar } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import OptimizedImage from "./OptimizedImage";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  onClick,
  delay
}) => (
  <motion.div
    variants={fadeIn("up", "spring", delay, 0.75)}
    initial="hidden"
    animate="show"
    onClick={onClick}
    className="cursor-pointer w-full sm:w-[360px]"
  >
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl h-full flex flex-col"
    >
      <div className="relative w-full h-[230px]">
        <OptimizedImage
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={(e) => {
              e.stopPropagation();
              window.open(source_code_link, "_blank");
            }}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaGithub className="w-1/2 h-1/2 text-white" />
          </div>
        </div>
      </div>

      <div className="mt-5 flex-grow">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  const [openProject, setOpenProject] = useState(null);
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && openProject) {
        setOpenProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openProject]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects highlight my expertise and experience in civil
          engineering through practical applications and real-world solutions.
        </motion.p>
      </div>

      <AnimatePresence>
        <div className="mt-20 flex flex-wrap justify-center gap-7">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
              onClick={() => setOpenProject(project)}
              delay={index * 0.5}
            />
          ))}
        </div>
      </AnimatePresence>

      {projects.length > 3 && (
        <motion.div 
          className="w-full flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-tertiary hover:bg-tertiary/80 text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </motion.div>
      )}

      {openProject && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setOpenProject(null);
            }
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-700 rounded-2xl w-full max-w-[90%] lg:max-w-[900px] max-h-[85vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button with improved positioning and visibility */}
            <button
              onClick={() => setOpenProject(null)}
              className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              aria-label="Close modal"
            >
              <span className="text-2xl text-white">&times;</span>
            </button>

            <div className="p-6 sm:p-8">
              <OptimizedImage
                src={openProject.image}
                alt={openProject.name}
                className="w-full h-48 sm:h-64 object-cover rounded-lg"
              />

              <div className="space-y-6 mt-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{openProject.name}</h3>
                <p className="text-gray-300 text-base sm:text-lg">{openProject.description}</p>

                <div className="flex flex-wrap gap-4">
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded transition-colors duration-200 ${
                      liked ? "bg-red-600 hover:bg-red-700" : "bg-gray-600 hover:bg-gray-700"
                    }`}
                    onClick={() => setLiked(!liked)}
                  >
                    {liked ? (
                      <FaHeart className="w-5 h-5" />
                    ) : (
                      <FaRegHeart className="w-5 h-5" />
                    )}
                    {liked ? "Liked" : "Like"}
                  </button>

                  <a
                    href={openProject.report}
                    download
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white transition-colors duration-200"
                  >
                    Download Report
                  </a>

                  <button
                    onClick={() => window.open(openProject.source_code_link, "_blank")}
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white transition-colors duration-200"
                  >
                    View on GitHub
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      {star <= rating ? (
                        <FaStar className="w-6 h-6 text-yellow-400" />
                      ) : (
                        <FaRegStar className="w-6 h-6 text-gray-300" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-xl text-white">Project Highlights</h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Implemented advanced AutoCAD designs for precision.</li>
                    <li>Optimized transportation systems for reduced congestion.</li>
                    <li>Developed sustainable hydropower solutions.</li>
                    <li>Integrated innovative methodologies to enhance efficiency.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "works");