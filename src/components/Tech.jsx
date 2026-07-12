import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
    const sliderRef = useRef(null);
    const [currentGroup, setCurrentGroup] = useState(0);


    const skillsGroups = [
        [
            { title: "Design & Modeling", skills: [{ name: "AutoCAD", level: 95 }, { name: "Civil 3D", level: 90 }] },
            { title: "Analysis Tools", skills: [{ name: "HEC-RAS", level: 85 }, { name: "EPANET", level: 80 }] },
            { title: "Project Management", skills: [{ name: "MS Project", level: 88 }, { name: "Construction Planning", level: 85 }] },
        ],
        [
            { title: "Surveying", skills: [{ name: "Total Station", level: 92 }, { name: "GPS", level: 88 }] },
            { title: "Geotechnical Analysis", skills: [{ name: "Soil Analysis", level: 87 }, { name: "Foundation Design", level: 82 }] },
            { title: "Hydraulics Engineering", skills: [{ name: "Water Flow Analysis", level: 90 }, { name: "Dam Design", level: 85 }] },
        ],
        [
           { title: "Structural Analysis", skills: [{ name: "SAP2000", level: 80 }, { name: "ETABS", level: 75 }] },
            { title: "Environmental Engineering", skills: [{ name: "Impact Assessment", level: 86 }, { name: "Waste Management", level: 79 }] },
            { title: "Materials Engineering", skills: [{ name: "Material Testing", level: 89 }, { name: "Quality Control", level: 85 }] },
        ]
    ];

     // Automatic Sliding Logic
     useEffect(() => {
      const interval = setInterval(() => {
        setCurrentGroup((prev) => (prev === skillsGroups.length - 1 ? 0 : prev + 1));
      }, 5000); // Change slide every 5 seconds (adjust as needed)

      return () => clearInterval(interval);
    }, [skillsGroups.length]);


    const handleDotClick = (index) => {
      setCurrentGroup(index);
    }


    return (
        <div className="mt-10">
            {/* Technical Expertise Section */}
            <div className="text-center mb-10">
                <h2 className={`${styles.sectionHeadText} text-center mb-2 text-[20px] sm:text-[30px] md:text-[40px]`}>Technical Expertise</h2>
                <p className="text-secondary text-[13px] sm:text-[16px] font-medium">Comprehensive skillset in civil engineering and design</p>
            </div>

            {/* Skills Slider Section */}
            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentGroup * 100}%)` }}>
                {skillsGroups.map((skillGroup, index) => (
                  <div
                    key={index}
                    className="flex justify-center gap-8 px-8 w-full"
                  >
                    {skillGroup.map((group, groupIndex) => (
                      <div
                        key={groupIndex}
                        className="w-full sm:w-[380px] bg-black-100/80 backdrop-blur-sm p-4 sm:p-8 rounded-2xl" // Changed width here to 380px and padding to 8
                      >
                         <h4 className="text-white text-[16px] sm:text-[20px] font-bold mb-3 sm:mb-4">{group.title}</h4>
                         {group.skills.map((skill, skillIndex) => (
                             <div key={skillIndex} className="mb-4">
                                <div className="flex justify-between items-center mb-1">
                                 <p className="text-secondary text-xs sm:text-sm font-medium">{skill.name}</p>
                                </div>
                                 <div className="w-full bg-black-200 h-2 rounded-full">
                                   <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full" style={{ width: `${skill.level}%` }} />
                                  </div>
                             </div>
                       ))}
                    </div>
                 ))}
                 </div>
               ))}
               </div>


                {/* Slider Dots */}
            <div className="flex justify-center mt-4 space-x-2">
               {skillsGroups.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full ${
                      currentGroup === index ? "bg-white" : "bg-gray-500"
                    }`}
                    onClick={() => handleDotClick(index)}
                  ></button>
                ))}
             </div>

            </div>

            {/* Existing Technology Icons */}
            <div className='mt-10 sm:mt-20 flex flex-row flex-wrap justify-center gap-6 sm:gap-10'>
                {technologies.map((technology) => (
                    <div className='w-20 h-20 sm:w-28 sm:h-28' key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Tech, "skills");