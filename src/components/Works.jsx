import React, { useState } from "react";
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
          The following projects highlight my expertise and experience in civil
          engineering through practical applications and real-world solutions.
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
          <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-700 rounded-2xl p-8 w-4/5 max-w-4xl relative text-white shadow-lg">
            <button
              className="absolute top-4 right-4 text-2xl font-bold cursor-pointer text-gray-300 hover:text-gray-100"
              onClick={() => setOpenProject(null)}
            >
              &times;
            </button>
            <img
              src={openProject.image}
              alt={openProject.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{openProject.name}</h3>
            <p className="text-gray-300 mb-4">{openProject.description}</p>

            <div className="flex justify-between items-center">
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded ${
                  liked ? "bg-red-600 hover:bg-red-500" : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => setLiked(!liked)}
              >
                {liked ? (
                  <FaHeart className="w-5 h-5 text-red-400" />
                ) : (
                  <FaRegHeart className="w-5 h-5 text-gray-300" />
                )}
                {liked ? "Liked" : "Like"}
              </button>

              <div className="flex gap-4">
                <a
                  href={openProject.report}
                  download
                  className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-white shadow-md"
                >
                  Download Report
                </a>
                <button
                  onClick={() => window.open(openProject.source_code_link, "_blank")}
                  className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded text-white shadow-md"
                >
                  View on GitHub
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-4 mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  onClick={() => setRating(star)}
                  className="cursor-pointer"
                >
                  {star <= rating ? (
                    <FaStar className="w-6 h-6 text-yellow-400" />
                  ) : (
                    <FaRegStar className="w-6 h-6 text-gray-300" />
                  )}
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Project Highlights</h4>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Implemented advanced AutoCAD designs for precision.</li>
                <li>Optimized transportation systems for reduced congestion.</li>
                <li>Developed sustainable hydropower solutions.</li>
                <li>Integrated innovative methodologies to enhance efficiency.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "works");