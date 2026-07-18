import {
  mobile,
  backend,
  creator,
  web,
  surveying,
  autocad,
  brickwall,
  design,
  analysis,
  survey,
  project,
  construction,
  building,
  bridge,
  infrastructure,
  road,
  git,
  figma,
  gis,
  modelling,
  sunkoshi,
  marsnepal,
  trishuli,
  footings,
  punyamata,
  marsnepalsurvey,
  isolated_footings,
  toda,
  kucec,
  datacamp,
  sourcecad,
  hult,
  asce,
  kuyrcc,
  kugic,
  kabeli,
  hult_certificate,
  kabeli_certificate,
  autocad2d,
  autocad3d,
  remote_certificate,
  municipal_certificate,
  water_supply,
  logo,
  github,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ericgis,
  toda_new_certificate,
  Media_Head,
  asec_certificate,
  tabletennis,
  see_excellence,
  finalcover,
  Finalyear_Report,
  Shyam,
  ramesh,
  sumit,
  trishuli_report,
  rum_report,
  Literature_Review,
  Methodological_Framework,
  Data_Supporting_Material,
  Urban_Hydrological_Nepal_Europe,
  crackImage1,
  crackImage2,
  crackImage3,
  crackImage4,
  crackImage5,
  crackImage6,
  crackAnalysis,
  hairlineCrack,
  crackImages,
  crackAbstract,
  crackRoleSummary,
  crackSiteLocation,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
  },
  // {
  //   id: "murcs",
  //   title: "MUrCS Project",
  // },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "certificate",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
  // {
  //   id: "blog",
  //   title: "Blog",
  //   url: "https://blogsarita.vercel.app/"
  // }
];

const services = [
  {
    title: "CAD Tools",
    icon: autocad,
  },
  {
    title: "Hydraulic & Water Resources",
    icon: infrastructure,
  },
  {
    title: "Surveying & GIS",
    icon: survey,
  },
  {
    title: "Concrete Technology & Testing",
    icon: brickwall,
  },
];

const technologies = [
  {
    name: "AutoCAD 2D",
    icon: autocad,
  },
  {
    name: "Civil 3D",
    icon: modelling,
  },
  {
    name: "SW-Road",
    icon: road,
  },
  {
    name: "SketchUp",
    icon: figma,
  },
  {
    name: "EPANET",
    icon: infrastructure,
  },
  {
    name: "HEC-RAS",
    icon: bridge,
  },
  {
    name: "Total Station",
    icon: surveying,
  },
  {
    name: "GPS",
    icon: surveying,
  },
  {
    name: "QGIS",
    icon: gis,
  },
  {
    name: "Concrete Tech & Testing",
    icon: brickwall,
  },
  {
    name: "MS Office",
    icon: web,
  },
  {
    name: "Concrete Analysis",
    icon: brickwall,
  },
];

// const experiences = [
 
//   {
//     title: "Researcher - SHM",
//     company_name: "Kathmandu University",
//     icon: analysis,
//     iconBg: "#383E56",
//     date: "Apr 2025 - Jul 2025",
//     points: [
//       "Conducted research on Multi Scale Deep Learning for Hairline Crack Detection with Ravi Kumar Pajiyar under Prof. Dr. Sudan Jha's supervision.",
//       "Developed a hybrid CNN-Transformer model for accurate hairline crack detection in concrete structures.",
//       "Collaborated with the Department of Computer Engineering for structural health monitoring applications.",
//       "Research paper submitted for publication, focusing on multiscale feature extraction and global context understanding.",
//     ],
//   },
//   {
//     title: "Junior Officer - Civil Engineer (Level-7)",
//     company_name: "Civil Engineering Organization",
//     icon: building,
//     iconBg: "#E6DEDD",
//     date: "Dec 2025 - Present",
//     points: [
//       "Study, design, and prepare project drawings for feasibility studies and projects under construction.",
//       "Prepare engineering designs, drawings, BOQs, and detailed cost estimations.",
//       "Conduct rate analysis, quantity estimations, and cost-benefit analyses.",
//       "Participate in feasibility studies and site investigations under senior engineers.",
//       "Perform site visits, data collection, and supervision of construction projects.",
//       "Prepare technical reports, site visit reports, and project documentation.",
//       "Execute tasks and assignments as delegated by management.",
//       "Maintain equipment and ensure professional work standards.",
//     ],
//   },
//   {
//     title: "Internship Trainee",
//     company_name: "TODA Corporation, Japan-Oriented Construction",
//     icon: building,
//     iconBg: "#E6DEDD",
//     date: "Jun 2025 - Aug 2025",
//     points: [
//       "Participated in specialized training program for engineers and supervisors.",
//       "Engaged in live-site construction work and drawing analysis.",
//       "Supervised construction sites and learned Japanese construction practices.",
//       "Gained hands-on experience in international construction methodologies.",
//     ],
//   },
  
//   {
//     title: "Internship Trainee",
//     company_name: "Kabeli A Hydropower Project (37.6 MW)",
//     icon: project,
//     iconBg: "#383E56",
//     date: "Feb 2025 - Apr 2025",
//     points: [
//       "Worked on quality checks and reinforcement work for the run-of-river hydropower project.",
//       "Conducted concrete testing and analysis procedures.",
//       "Assisted in drawing analysis and BOQ preparation.",
//       "Prepared detailed technical reports and documentation.",
//     ],
//   },
//   {
//     title: "Media Head",
//     company_name: "KU Youth Red Cross Circle",
//     icon: design,
//     iconBg: "#E6DEDD",
//     date: "Nov 2024 - Apr 2025",
//     points: [
//       "Led social media management and content creation campaigns.",
//       "Designed promotional materials and documented events.",
//       "Supported website development at https://yrcc.ku.edu.np/",
//       "Enhanced overall digital presence and engagement strategies.",
//     ],
//   },
//   {
//     title: "Executive Member",
//     company_name: "Indoor Club, Kathmandu University",
//     icon: project,
//     iconBg: "#383E56",
//     date: "Mar 2024 - Oct 2025",
//     points: [
//       "Organized skill-based workshops and inter-departmental tournaments.",
//       "Coordinated table tennis, badminton, and chess events.",
//       "Facilitated leadership initiatives and event management.",
//       "Enhanced student engagement and promoted healthy campus lifestyle.",
//     ],
//   },
//   {
//     title: "Remote Sanitation Volunteer",
//     company_name: "EWB Nepal, KU Chapter",
//     icon: analysis,
//     iconBg: "#E6DEDD",
//     date: "Dec 2023 - Mar 2024",
//     points: [
//       "Conducted field data collection and infiltration rate testing using Single Ring Infiltrometer.",
//       "Assessed design flaws and sanitation challenges in rural school infrastructure.",
//       "Proposed improvement strategies for existing toilet facilities.",
//       "Supported septic system planning and implementation.",
//     ],
//   },
//   {
//     title: "General Member",
//     company_name: "KU Civil Engineering Club",
//     icon: design,
//     iconBg: "#383E56",
//     date: "Mar 2021 - Mar 2024",
//     points: [
//       "Organized technical talk shows, treasure hunts, and table tennis tournaments.",
//       "Actively volunteered in various club events and initiatives.",
//       "Attended workshops on municipal drawing and water supply systems.",
//       "Enhanced practical skills through technical training programs.",
//     ],
//   },
// ];
const experiences = [
  {
    title: "Researcher - SHM",
    company_name: "Kathmandu University",
    icon: analysis,
    iconBg: "#383E56",
    date: "Apr 2025 - Jul 2025",
    points: [
      "Led the civil engineering side of a multi-scale deep learning study for hairline crack detection, ensuring the research addressed real structural inspection and deterioration challenges.",
      "Designed the engineering validation framework, linking model outputs to crack morphology, width, and propagation behavior rather than relying on computational metrics alone.",
      "Directed field data collection across concrete structures in Nepal and conducted the literature review on conventional and AI-based crack detection methods.",
      "Conducted under the mentorship of Prof. Dr. Sudan Jha, in collaboration with Ravi Kumar Pajiyar. Research paper ongoing, focusing on field-validated crack detection for structural health monitoring.",
    ],
  },
  {
    title: "Undergraduate Thesis - Researcher",
    company_name: "Kathmandu University",
    icon: analysis,
    iconBg: "#383E56",
    date: "2024 - 2025",
    points: [
      "Potential Study of Medium Hydropower Project of Nepal: A Case Study of Kabeli-A HEP.",
      "Analyzed the hydrological, hydraulic, and structural components of the Kabeli-A Hydroelectric Project.",
      "Evaluated economic feasibility to optimize power generation potential.",
      "Prepared detailed technical report covering feasibility analysis, design parameters, and project recommendations.",
      "Conducted under the supervision of Dr. Shyam Sundar Khadka.",
    ],
  },
  {
    title: "Construction Analyst",
    company_name: "Cloud Factory",
    icon: construction,
    iconBg: "#383E56",
    date: "May 2026 - Present",
    points: [
      "Verify construction stages against project plans and schedules.",
      "Quality-check construction data by applying standardized practices across global project workflows.",
      "Conduct project-level quality reviews, documenting issues and suggesting improvements.",
      "Collaborate with operations and quality teams to maintain data accuracy.",
    ],
  },
  {
    title: "Civil Engineer",
    company_name: "Sanima Hydro and Engineering Pvt. Ltd",
    icon: building,
    iconBg: "#E6DEDD",
    date: "Dec 2025 - Apr 2026",
    points: [
      "Assisted in project design, feasibility studies, and civil drawings.",
      "Prepared BOQ, cost estimation, and rate analysis.",
      "Supported site investigations and construction supervision.",
      "Prepared technical documentation and reporting.",
    ],
  },
  {
    title: "Internship Trainee",
    company_name: "TODA Corporation – Japan-Oriented Construction Training Program",
    icon: building,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Jul 2025",
    points: [
      "Participated in live-site supervision and drawing analysis under Japanese construction practices.",
      "Gained hands-on experience in international construction methodologies.",
      "Observed and learned quality control processes aligned with Japanese standards.",
    ],
  },
  {
    title: "Internship Trainee",
    company_name: "Kabeli A Hydropower Project",
    icon: project,
    iconBg: "#383E56",
    date: "Feb 2025 - Apr 2025",
    points: [
      "Assisted in quality checks and reinforcement work.",
      "Conducted concrete testing and drawing analysis.",
      "Prepared BOQ and project reporting.",
      "Gained hands-on experience in hydropower construction.",
    ],
  },
  {
    title: "Media Head",
    company_name: "KU Youth Red Cross Circle",
    icon: design,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Apr 2025",
    points: [
      "Led social media management and content creation campaigns.",
      "Designed promotional materials and documented events.",
      "Supported website development at https://yrcc.ku.edu.np/",
      "Enhanced overall digital presence and engagement strategies.",
    ],
  },
  {
    title: "Executive Member",
    company_name: "Indoor Club, Kathmandu University",
    icon: project,
    iconBg: "#383E56",
    date: "Mar 2024 - Oct 2025",
    points: [
      "Organized skill-based workshops and inter-departmental tournaments.",
      "Coordinated table tennis, badminton, and chess events.",
      "Facilitated leadership initiatives and event management.",
      "Enhanced student engagement and promoted healthy campus lifestyle.",
    ],
  },
  // {
  //   title: "Remote Sanitation Volunteer",
  //   company_name: "EWB Nepal, KU Chapter",
  //   icon: analysis,
  //   iconBg: "#E6DEDD",
  //   date: "Dec 2023 - Mar 2024",
  //   points: [
  //     "Conducted field data collection and infiltration rate testing using Single Ring Infiltrometer.",
  //     "Assessed design flaws and sanitation challenges in rural school infrastructure.",
  //     "Proposed improvement strategies for existing toilet facilities.",
  //     "Supported septic system planning and implementation.",
  //   ],
  // },
  {
    title: "General Member",
    company_name: "KU Civil Engineering Club",
    icon: design,
    iconBg: "#383E56",
    date: "Mar 2021 - Mar 2024",
    points: [
      "Organized technical talk shows, treasure hunts, and table tennis tournaments.",
      "Actively volunteered in various club events and initiatives.",
      "Attended workshops on municipal drawing and water supply systems.",
      "Enhanced practical skills through technical training programs.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "Her innovative approach to road alignment design and meticulous attention to detail have been an asset to our project.",
    name: "Prof. Ramesh Kumar Maskey",
    designation: "Professor",
    company: "Kathmandu University",
    image: ramesh,
  },
  {
    testimonial:
      "Sarita's ability to analyze complex hydraulic data and provide actionable insights is remarkable.",
    name: "Shyam Sundar Khadka",
    designation: "Research Supervisor",
    company: "KU Research Labs",
    image: Shyam,
  },
  {
    testimonial: "Sarita demonstrated strong technical skills during her internship at Kabeli-A Hydropower Project, contributing effectively to quality checks, concrete testing, and project documentation.",
    name: "Sumit Thapa",
    designation: "Project Manager",
    company: "Kabeli-A Hydropower",
    image: sumit,
  },
];

const projects = [
  {
    name: "Kabeli-A Hydroelectric Project Analysis",
    description:
      "Conducted hydrological, hydraulic, and structural analysis for the Kabeli-A Hydroelectric Project, along with economic and financial assessments to optimize power generation.",
    tags: [
      {
        name: "hydrology",
        color: "blue-text-gradient",
      },
      {
        name: "hydraulic-analysis",
        color: "green-text-gradient",
      },
      {
        name: "structural-analysis",
        color: "pink-text-gradient",
      },
    ],
    image: finalcover, // replace with actual imported image variable
    report: Finalyear_Report, // update if you have the file path
    source_code_link: "https://github.com/saritasapkota123/THESIS-Kabeli-Hydropower-Project",
  },
  
  {
    name: "Sunkoshi Hydropower RUM Optimization",
    description:
      "Led the RUM project for Sunkoshi Hydropower to enhance water and sediment management, optimizing resources and operational efficiency.",
    tags: [
      {
        name: "hydropower",
        color: "blue-text-gradient",
      },
      {
        name: "water-management",
        color: "green-text-gradient",
      },
      {
        name: "optimization",
        color: "pink-text-gradient",
      },
    ],
    image: sunkoshi,
    report: rum_report,
    source_code_link: "https://github.com/saritasapkota123/Sunkoshi-hydropower-",
  },
  {
    name: "Mars Nepal Road Design",
    description:
      "Designed road alignment for Nepal's Mars region using SW-Road, ensuring safety, efficiency, and minimal ecological impact.",
    tags: [
      {
        name: "road-design",
        color: "blue-text-gradient",
      },
      {
        name: "sw-road",
        color: "green-text-gradient",
      },
      {
        name: "sustainability",
        color: "pink-text-gradient",
      },
    ],
    image: marsnepal,
    report: marsnepalsurvey,
    source_code_link: "https://github.com/saritasapkota123/Mars-Nepal-Road-Design",
  },
  
  {
    name: "Footings Demonstrative Model",
    description:
      "Designed and built a demonstrative model showcasing various types of footings, emphasizing their structural significance and applications.",
    tags: [
      {
        name: "structural-design",
        color: "blue-text-gradient",
      },
      {
        name: "modeling",
        color: "green-text-gradient",
      },
      {
        name: "construction",
        color: "pink-text-gradient",
      },
    ],
    image: footings,
    report: isolated_footings,
    source_code_link: "https://github.com/saritasapkota123/Footings-Demonstrative-Model",
  },
  {
    name: "Trishuli Hydropower Topography Model",
    description:
      "Built a topographic model of Trishuli Hydropower, showcasing natural and manmade features for infrastructure planning.",
    tags: [
      {
        name: "topography",
        color: "blue-text-gradient",
      },
      {
        name: "hydropower",
        color: "green-text-gradient",
      },
      {
        name: "modeling",
        color: "pink-text-gradient",
      },
    ],
    image: trishuli,
    report: trishuli_report,
    source_code_link: "https://github.com/saritasapkota123/Trishuli-Hydropower-Topography-Model",
  },
  // {
  //   name: "Soak Pit Tank for Greywater Management – Engineers Without Borders",
  //   description:
  //     "Conducted soil percolation (infiltration rate) testing and topographic surveys to design and implement a soak pit tank for sustainable greywater management at a landslide-impacted government school in Nepal, under Engineers Without Borders.",
  //   tags: [
  //     {
  //       name: "water-management",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "environmental-engineering",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "fieldwork",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: footings,
  //   source_code_link: "https://github.com/saritasapkota123",
  // },
];
const certificates = [
  // Professional Development Certifications
  {
    title: "TODA Corporation Internship",
    issuer: "TODA Corporation – Japan-Oriented Construction",
    year: "2025",
    downloadLink: toda_new_certificate,
    icon: toda
  },
  {
    title: "Kabeli A Hydropower Project Internship",
    issuer: "Kabeli A Hydropower",
    year: "2025",
    downloadLink: kabeli_certificate,
    icon: kabeli
  },
  {
    title: "Municipal Drawing",
    issuer: "Kathmandu University Civil Engineering Club",
    year: "2025",
    downloadLink: municipal_certificate,
    icon: kucec
  },
  {
    title: "Water Supply Training",
    issuer: "Kathmandu University Civil Engineering Club",
    year: "2025",
    downloadLink: water_supply,
    icon: kucec
  },
  {
    title: "Going Places with Spatial Analysis",
    issuer: "Esri",
    year: "2025",
    downloadLink: ericgis,
    icon: gis
  },
  {
    title: "AutoCAD 2D",
    issuer: "SourceCAD",
    year: "2024",
    downloadLink: autocad2d,
    icon: sourcecad
  },
  {
    title: "AutoCAD 3D",
    issuer: "SourceCAD",
    year: "2024",
    downloadLink: autocad3d,
    icon: sourcecad
  },
  {
    title: "Introduction to Remote Sensing",
    issuer: "Geo University",
    year: "2024",
    downloadLink: remote_certificate,
    icon: gis
  },
  // Additional Certifications
  {
    title: "ASCE Member",
    issuer: "American Society of Civil Engineers",
    year: "2024",
    downloadLink: asec_certificate,
    icon: asce
  },
  {
    title: "Media Head",
    issuer: "Kathmandu University Youth Red Cross Circle",
    year: "2024-2025",
    downloadLink: Media_Head,
    icon: kuyrcc
  },
  {
    title: "Hult Prize Participant",
    issuer: "Hult Prize Foundation",
    year: "2024-2025",
    downloadLink: hult_certificate,
    icon: hult
  },
  {
    title: "Table Tennis Coordinator-KUCEC",
    issuer: "Kathmandu University Civil Engineering Club",
    year: "2023-2024",
    downloadLink: tabletennis,
    icon: kucec
  },
  {
    title: "Outstanding Academic Achievement Award",
    issuer: "SSCOL",
    year: "2018",
    downloadLink: see_excellence,
    icon: creator
  },
 
];

export const murcsProject = {
  title: "MUrCS - Multi-Scale Urban Resilience through Climate-Smart Infrastructure",
  completedTasks: [
    {
      title: "Literature Review",
      description: "Comprehensive review of existing research on urban flood resilience and climate-smart infrastructure solutions.",
      file: Literature_Review,
      fullDescription: "An extensive literature review examining state-of-the-art approaches to urban flood resilience, green infrastructure effectiveness, and climate adaptation strategies. This review synthesizes findings from 50+ peer-reviewed journals and establishes the theoretical foundation for the MUrCS project.",
    },
    {
      title: "Methodological Framework Support",
      description: "Detailed framework supporting the methodological approach for the MUrCS project implementation.",
      file: Methodological_Framework,
      fullDescription: "Comprehensive methodological documentation outlining research design, data collection protocols, analytical approaches, and validation strategies. Includes detailed flowcharts, timelines, and alignment with project objectives.",
    },
  ],
  ongoingTasks: [
    {
      taskNumber: "1.1",
      title: "Literature Review – Ongoing",
      description: "Expanding and deepening the literature base with recent and advanced studies",
      details: [
        {
          subtitle: "Expanding literature base with recent and advanced studies",
          points: [
            "Conducting deeper thematic analysis of selected papers",
            "Refining research questions based on findings",
            "Synthesizing literature to build theoretical grounding",
            "Preparing structured literature review write-up",
          ],
        },
      ],
      status: "ongoing",
    },
    {
      taskNumber: "1.2",
      title: "Methodological Framework – Ongoing",
      description: "Refining selected methodology based on literature insights",
      details: [
        {
          subtitle: "Refining methodology and validation strategy",
          points: [
            "Aligning methods with data availability and project objectives",
            "Developing preliminary validation strategy",
            "Coordinating with team members on methodological alignment",
            "Preparing groundwork for Phase 2 (model development/validation)",
          ],
        },
      ],
      status: "ongoing",
    },
    {
      taskNumber: "2.1",
      title: "Hydrological Simulation Implementation",
      description: "Application of validated parameters into various hydrological calculations",
      details: [
        {
          subtitle: "Key Applications:",
          points: [
            "Runoff calculations",
            "Flood depth estimation",
            "Calibration of Rational Method outputs to urban sub-catchments",
          ],
        },
        {
          subtitle: "Current Stage:",
          points: ["Parameter handover completed; numerical execution ongoing."],
        },
      ],
      status: "ongoing",
    },
    {
      taskNumber: "2.2",
      title: "Computational Modeling (Python / ANSYS Fluent)",
      description: "Integration of rainfall, infiltration, and GI runoff reduction in computational models",
      details: [
        {
          subtitle: "Integration of:",
          points: [
            "Rainfall intensity (140 mm/hr)",
            "Infiltration rates (2.5–4.0 cm/hr)",
            "GI runoff reduction (40%)",
            "Development of pre-GI vs post-GI flood scenarios",
          ],
        },
        {
          subtitle: "Current Stage:",
          points: ["Model scripting and scenario setup underway."],
        },
      ],
      status: "ongoing",
    },
    {
      taskNumber: "2.3",
      title: "Structural Design Development",
      description: "Climate-smart structural design using runoff and flood thresholds",
      details: [
        {
          subtitle: "Use of runoff and flood thresholds for:",
          points: [
            "Hydraulic load estimation",
            "Climate-smart structural design in AutoCAD Civil 3D",
          ],
        },
        {
          subtitle: "Current Stage:",
          points: ["Preliminary structural logic alignment ongoing."],
        },
      ],
      status: "ongoing",
    },
  ],
  preliminaryOutputs: [
    {
      title: "Data and Supporting Material",
      description: "Comprehensive collection of all data, analysis files, and supporting materials for the MUrCS project.",
      file: Data_Supporting_Material,
      fullDescription: "Complete dataset including rainfall records, infiltration measurements, GIS layers, computational model inputs, calibration parameters, sensitivity analysis results, and all supporting documentation. This archive contains the foundational data required for Phase 2 model development and validation.",
    },
    {
      title: "Urban-Hydrological Scenario and Global Comparison",
      description: "Comparative analysis of urban-hydrological scenarios between Nepal and Europe.",
      file: Urban_Hydrological_Nepal_Europe,
      fullDescription: "A detailed comparative analysis of urban-hydrological scenarios between Nepal and Europe, focusing on flood resilience, green infrastructure implementation, and climate adaptation strategies. This report highlights key differences in urban-hydrological characteristics, challenges specific to each region, and best practices for enhancing urban flood resilience in diverse geographical contexts. The comparison includes climate patterns, drainage infrastructure capacity, land use impacts, and adaptation strategies tailored to local conditions.",
    },
    {
      title: "Flood Calculator",
      description: "Interactive tool for estimating urban flood risk in Nepal.",
      isLink: true,
      file: "https://floodcalculator.lovable.app/",
      fullDescription: "Urban Flood Likelihood Calculator is a web-based tool that estimates urban flood risk in Nepal by comparing rainfall-driven runoff with drainage capacity using the Rational Method and Manning's Equation. This interactive tool supports scenario planning and decision-making by allowing users to input various parameters such as rainfall intensity, infiltration rates, land use characteristics, and green infrastructure effectiveness. The calculator provides real-time flood likelihood assessments and helps evaluate the impact of climate-smart infrastructure interventions on urban resilience.",
    },
  ],
};

const projectDetails = {
  crackformer: {
    title: "CrackFormer",
    subtitle: "Multi-Scale CNN-Transformer Hybrid Model for Hairline Crack Detection",
    tagline: "A hybrid deep learning framework for detecting hairline cracks (<0.3mm) in concrete structures for structural health monitoring",
    status: "Ongoing",
    statusDetail: "Manuscript in preparation for journal submission",
    domain: "Structural Health Monitoring / AI in Civil Engineering",
    institution: "Kathmandu University",
    duration: "2025 - Present",
    github: "https://github.com/saritasapkota123/A-Multi-Scale-Deep-Learning-Approach-for-Hairline-Crack-Detection-using-a-Hybrid-CNN-Transformer",
    sections: [
      {
        title: "Overview",
        content: "Detecting hairline cracks, often less than 0.3mm wide, is a critical but difficult task in structural health monitoring. These cracks are faint, easily lost in surface noise, and hard to segment accurately. CrackFormer addresses this by combining a multi-scale CNN, which captures fine local detail, with a Swin Transformer, which models overall crack continuity even when broken or faint. Attention gates help the model focus on crack features while suppressing background noise.",
      },
      {
        title: "My Role",
        content: "Civil Engineering Lead / First Author. Bridged civil engineering principles and AI modeling — ensured the model's design, data, and outputs were grounded in real structural inspection practice rather than computational metrics alone.",
        bullets: [
          "Conceptualized the research problem and scope from a civil engineering standpoint",
          "Directed field data collection of 1,200 crack images across concrete structures in Nepal",
          "Conducted the literature review of traditional and AI-based crack detection methods",
          "Designed the engineering validation framework linking model outputs to crack morphology, width, and propagation behavior",
          "Verified predicted crack widths against field measurements within tolerance",
          "Interpreted results for field-level reliability and real-world deployment potential",
          "Authored Introduction, Literature Review, civil-engineering Methodology sections, and Discussion",
        ],
      },
      {
        title: "Objectives",
        bullets: [
          "Combine local precision (CNN) and global context (Transformer) in one hybrid model",
          "Achieve reliable detection of hairline cracks under 0.3mm",
          "Validate detections against real field crack geometry, not just pixel-level metrics",
          "Demonstrate crack-growth tracking over time for practical infrastructure monitoring",
        ],
      },
      {
        title: "Methodology / Architecture",
        bullets: [
          "Multi-scale CNN branch: extracts fine-grained local crack texture and boundary detail",
          "Swin Transformer branch: models long-range spatial dependencies to reconstruct broken/discontinuous cracks",
          "Attention gates: fuse CNN + Transformer features, suppress background noise (shadows, staining, surface texture)",
        ],
      },
      {
        title: "Dataset",
        bullets: [
          "SDNET2018 (public benchmark)",
          "DeepCrack (public pixel-level segmentation dataset)",
          "1,200 original field images collected from concrete structures in Nepal",
        ],
      },
    ],
    metrics: [
      { label: "IoU", value: "85.4%" },
      { label: "F1-score", value: "92.1%" },
      { label: "Improvement over U-Net / TransUNet", value: "3-5%" },
    ],
    tools: ["Python", "CNN", "Swin Transformer", "Attention Mechanisms", "PyTorch / TensorFlow"],
    team: [
      { name: "Sarita Sapkota", role: "Civil Engineering (First Author)" },
      { name: "Ravi Kumar Pajiyar", role: "Computer Science & Engineering" },
      { name: "Prof. Dr. Sudan Jha", role: "Supervisor, CSE, Kathmandu University" },
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/saritasapkota123/A-Multi-Scale-Deep-Learning-Approach-for-Hairline-Crack-Detection-using-a-Hybrid-CNN-Transformer" },
      { label: "Paper", url: null, note: "Manuscript in preparation (link to be added upon publication)" },
    ],
    images: [
      { src: hairlineCrack, caption: "Hairline crack on concrete surface" },
      { src: crackImage1, caption: "Field crack specimen" },
      { src: crackImage2, caption: "Crack width measurement" },
      { src: crackAnalysis, caption: "Crack analysis visualization" },
      { src: crackImage3, caption: "Concrete structure inspection" },
      { src: crackImage4, caption: "Crack propagation pattern" },
      { src: crackImage5, caption: "Field data collection" },
      { src: crackImage6, caption: "Crack segmentation output" },
      { src: crackImages, caption: "Crack image dataset samples" },
    ],
    documents: [
      { name: "Abstract & Introduction", file: crackAbstract },
      { name: "Role Summary in the Manuscript", file: crackRoleSummary },
      { name: "Site Location", file: crackSiteLocation },
    ],
  },
  "kabeli-a-hep": {
    title: "Potential Study of Medium Hydropower Project of Nepal",
    subtitle: "A Case Study of Kabeli-A HEP",
    tagline: "Field- and desk-based hydrological, hydraulic, and financial feasibility study of a 49.49 MW run-of-river hydropower project",
    status: "Completed",
    statusDetail: "Submitted July 2025",
    domain: "Hydropower Engineering",
    institution: "Kathmandu University, Department of Civil Engineering",
    duration: "Apr 2025 - Jul 2025",
    site: "Panchthar/Taplejung District, Nepal (27°13'41\"-27°17'32\"N, 87°40'55\"-87°45'50\"E)",
    github: null,
    report: true,
    sections: [
      {
        title: "Overview",
        content: "Kabeli-A HEP is a run-of-river development on the Kabeli River, developed by Kabeli Energy Limited (KEL). This project evaluated the plant's potential end-to-end: two headworks layout alternatives were compared on technical, economic, and environmental grounds, and the more viable one was carried through detailed hydrological analysis, hydraulic design, tunnel modelling, and financial feasibility assessment.",
      },
      {
        title: "My Role",
        content: "Team Member, Group 11 (5-member final-year team)",
        bullets: [
          "Contributed to hydrological analysis and design discharge determination",
          "Participated in hydraulic design of civil structures (headworks, tunnel, penstock, powerhouse)",
          "Contributed to stability analysis and quantity/cost estimation",
          "Co-authored the final technical report covering feasibility analysis, design parameters, and recommendations",
        ],
      },
      {
        title: "Objectives",
        content: "Primary: Conduct a potential study of a medium hydropower project in Nepal using Kabeli-A HEP as the case study.",
        bullets: [
          "Identify suitable locations for hydropower components using topographic maps",
          "Conduct hydrological analysis to determine design discharge and design parameters",
          "Design key civil structures: intake, weir, approach canal, settling basin, headrace tunnel, surge shaft, penstock, powerhouse",
          "Perform stability analysis of major civil components",
          "Estimate quantities and costs for construction",
          "Carry out financial analysis using BCR and IRR",
        ],
      },
      {
        title: "Methodology",
        content: "Desk study & consultation → Data collection (DHM, Kabeli Energy Ltd.) → Layout of hydropower components → Hydrological analysis (FDC, Gumbel & Log Pearson Type III flood analysis) → Hydraulic design (per DOED guidelines & IS codes) → Stability analysis → Estimation & costing → Financial analysis (B/C, IRR, NPV, sensitivity)",
      },
    ],
    metrics: [
      { label: "Gross Head", value: "124.45 m" },
      { label: "Net Head", value: "120.14 m" },
      { label: "Power Production", value: "49.49 MW" },
      { label: "Design Discharge (Q40)", value: "48.83 m³/s" },
      { label: "Catchment Area (Intake)", value: "861.87 km²" },
      { label: "Headrace Tunnel", value: "Inverted D, 4.8m dia., 5.09km long" },
      { label: "Penstock", value: "3.65m dia., 301.38m long" },
      { label: "Turbines", value: "3 × Vertical Francis, 16.49 MW each" },
      { label: "Total Project Cost", value: "NRs. 7,25,33,38,034" },
      { label: "B/C Ratio", value: "2.27" },
      { label: "IRR", value: "15%" },
      { label: "Payback Period", value: "6 years" },
    ],
    tools: ["HEC-RAS", "Phase2", "ETABS", "AutoCAD", "DOED Guidelines (2018)", "IS 456:2000", "IS 4880", "IS 6966-1", "IS 800:2007", "IS 12800", "NBC 105:2020"],
    conclusions: [
      "Hydropower potential of Kabeli-A HEP is 49.49 MW, with Q40 of 48.83 m³/s and net head of 120.14 m",
      "Alternative I layout found technically more feasible, economically more viable, and environmentally more sustainable",
      "Optimized headrace tunnel and pressure shaft diameters: 4.8m and 3.65m, with support systems designed across rock classes II-VI",
      "B/C ratio of 2.27 (>1) confirms the project is economically feasible",
    ],
    team: [
      { name: "Bikesh Mainali", role: "028062-20" },
      { name: "Trishna Prajapati", role: "028074-20" },
      { name: "Swapnil Regmi", role: "028078-20" },
      { name: "Sarita Sapkota", role: "028084-20" },
      { name: "Sandesh Shrestha", role: "028090-20" },
    ],
    supervisors: [
      { name: "Associate Prof. Dr. Shyam Sundar Khadka", role: "Project Supervisor" },
      { name: "Assistant Prof. Er. Suman Shrestha", role: "Project Coordinator" },
      { name: "Er. Sumit Thapa", role: "Technical Support, Project Manager, Kabeli-A HEP" },
    ],
    links: [
      { label: "Report", url: null, note: "Final submitted report PDF" },
      { label: "GitHub", url: null, note: "N/A (report-based thesis)" },
    ],
    images: [
      { src: finalcover, caption: "Kabeli-A HEP Report Cover" },
    ],
    documents: [
      { name: "Final Year Report", file: Finalyear_Report },
    ],
  },
};

export { services, technologies, experiences, testimonials, projects, certificates, projectDetails };
