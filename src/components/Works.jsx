import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaHeart, FaRegHeart, FaStar, FaRegStar } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Project-specific highlights mapping
const projectHighlights = {
  ProjectNest: [
    "Implemented role-based authentication system for Admin, Supervisor, and Student access",
    "Developed real-time chat functionality using Socket.io for team communication",
    "Created comprehensive project tracking system with milestone management",
    "Integrated secure REST API endpoints with JWT authentication"
  ],
  CourseCraft: [
    "Integrated generative AI capabilities for automated course content creation",
    "Developed structured module generation system using Lama API",
    "Implemented content validation and quality assurance mechanisms",
    "Created intuitive interface for course creation and management"
  ],
  "Health Lens": [
    "Built cross-platform mobile app using React Native for iOS and Android",
    "Implemented AI-powered food recognition system for nutritional analysis",
    "Developed personalized recommendation engine for dietary guidance",
    "Created secure user profile management system with health data tracking"
  ],
  "Rent and Read": [
    "Developed responsive frontend using pure HTML, CSS, and JavaScript",
    "Implemented secure user authentication and authorization in Django",
    "Created SQL database schema for efficient book management",
    "Built online book reader interface with bookmarking functionality"
  ],
  Agniparikshya: [
    "Implemented Dijkstra's algorithm for optimal emergency route calculation",
    "Integrated OpenStreetMap (OSM) data for accurate navigation",
    "Developed real-time traffic analysis system for route optimization",
    "Created emergency response coordination interface"
  ],
  "Netflix Clone": [
    "Built responsive streaming interface with MERN stack",
    "Implemented user authentication and profile management",
    "Created video streaming functionality with adaptive quality",
    "Developed content recommendation system based on user preferences"
  ]
};

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
    className="cursor-pointer"
  >
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
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

      <div className="mt-5">
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
          The following projects highlight my expertise and experience in computer
          engineering and software skills through practical applications and real-world solutions.
        </motion.p>
      </div>

      <AnimatePresence>
        <div className="mt-20 flex flex-wrap gap-7">
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
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm p-4"
          onClick={() => setOpenProject(null)}
        >
          <div 
            className="bg-gradient-to-br from-[#1a0f2e] via-[#2a1b3d] to-[#1a0f2e] rounded-2xl p-6 sm:p-8 w-full max-w-4xl xl:max-w-5xl relative text-white shadow-2xl max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-2xl sm:text-3xl font-bold cursor-pointer text-gray-300 hover:text-gray-100 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
              onClick={() => setOpenProject(null)}
            >
              &times;
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-4">
              <div className="space-y-4">
                <img
                  src={openProject.image}
                  alt={openProject.name}
                  className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-lg shadow-xl"
                />
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      liked ? "bg-red-700 hover:bg-red-600" : "bg-gray-700 hover:bg-gray-600"
                    }`}
                    onClick={() => setLiked(!liked)}
                  >
                    {liked ? (
                      <FaHeart className="w-5 h-5 text-red-300" />
                    ) : (
                      <FaRegHeart className="w-5 h-5 text-gray-300" />
                    )}
                    {liked ? "Liked" : "Like"}
                  </button>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                    <a
                      href={openProject.report}
                      download
                      className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg text-white shadow-lg transition-colors text-center"
                    >
                      Download Report
                    </a>
                    <button
                      onClick={() => window.open(openProject.source_code_link, "_blank")}
                      className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded-lg text-white shadow-lg transition-colors"
                    >
                      View on GitHub
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">{openProject.name}</h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                    {openProject.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg sm:text-xl font-bold mb-3">Key Features & Highlights</h4>
                  <ul className="space-y-2">
                    {projectHighlights[openProject.name]?.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                        <span className="text-green-400 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-base sm:text-lg font-semibold">Rate this project</h4>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        onClick={() => setRating(star)}
                        className="cursor-pointer transform hover:scale-110 transition-transform"
                      >
                        {star <= rating ? (
                          <FaStar className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                        ) : (
                          <FaRegStar className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {openProject.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="px-3 py-1 bg-gray-800 rounded-full text-xs sm:text-sm"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "works");