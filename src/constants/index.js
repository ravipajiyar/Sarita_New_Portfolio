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
  certificate_python,
  certificate_python2,
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
  sita, 
  trishuli_report,
  rum_report,
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
  {
    id: "blog",
    title: "Blog",
    url: "https://blogsarita.vercel.app/"
  }
];

const services = [
  {
    title: "Design Tools",
    icon: autocad,
  },
  {
    title: "Analysis Tools",
    icon: analysis,
  },
  {
    title: "Survey Tools",
    icon: survey,
  },
  {
    title: "Project Management",
    icon: project,
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
    name: "EPANET",
    icon: infrastructure,
  },
  {
    name: "HEC-RAS",
    icon: bridge,
  },
  {
    name: "SAP",
    icon: building,
  },
  {
    name: "Total Station",
    icon: surveying,
  },
  {
    name: "QGIS",
    icon: gis,
  },
  {
    name: "Project Libre",
    icon: project,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "ML",
    icon: analysis,
  },
  {
    name: "Construction",
    icon: construction,
  },
];

const experiences = [
 
  {
    title: "Researcher - SHM",
    company_name: "Kathmandu University",
    icon: analysis,
    iconBg: "#383E56",
    date: "Apr 2025 - Jul 2025",
    points: [
      "Conducted research on Multi Scale Deep Learning for Hairline Crack Detection with Ravi Kumar Pajiyar under Prof. Dr. Sudan Jha's supervision.",
      "Developed a hybrid CNN-Transformer model for accurate hairline crack detection in concrete structures.",
      "Collaborated with the Department of Computer Engineering for structural health monitoring applications.",
      "Research paper submitted for publication, focusing on multiscale feature extraction and global context understanding.",
    ],
  },
  {
    title: "Internship Trainee",
    company_name: "TODA Corporation, Japan-Oriented Construction",
    icon: building,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Participated in specialized training program for engineers and supervisors.",
      "Engaged in live-site construction work and drawing analysis.",
      "Supervised construction sites and learned Japanese construction practices.",
      "Gained hands-on experience in international construction methodologies.",
    ],
  },
  {
    title: "Junior Officer - Civil Engineer (Level-7)",
    company_name: "Civil Engineering Organization",
    icon: building,
    iconBg: "#E6DEDD",
    date: "Dec 2025 - Present",
    points: [
      "Study, design, and prepare project drawings for feasibility studies and projects under construction.",
      "Prepare engineering designs, drawings, BOQs, and detailed cost estimations.",
      "Conduct rate analysis, quantity estimations, and cost-benefit analyses.",
      "Participate in feasibility studies and site investigations under senior engineers.",
      "Perform site visits, data collection, and supervision of construction projects.",
      "Prepare technical reports, site visit reports, and project documentation.",
      "Execute tasks and assignments as delegated by management.",
      "Maintain equipment and ensure professional work standards.",
    ],
  },
  {
    title: "Internship Trainee",
    company_name: "Kabeli A Hydropower Project (37.6 MW)",
    icon: project,
    iconBg: "#383E56",
    date: "Feb 2025 - Apr 2025",
    points: [
      "Worked on quality checks and reinforcement work for the run-of-river hydropower project.",
      "Conducted concrete testing and analysis procedures.",
      "Assisted in drawing analysis and BOQ preparation.",
      "Prepared detailed technical reports and documentation.",
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
  {
    title: "Remote Sanitation Volunteer",
    company_name: "EWB Nepal, KU Chapter",
    icon: analysis,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Mar 2024",
    points: [
      "Conducted field data collection and infiltration rate testing using Single Ring Infiltrometer.",
      "Assessed design flaws and sanitation challenges in rural school infrastructure.",
      "Proposed improvement strategies for existing toilet facilities.",
      "Supported septic system planning and implementation.",
    ],
  },
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
    "testimonial": "Sarita's dedication, innovative problem-solving, and multidisciplinary expertise make me incredibly proud as her mother.",
    "name": "Sita Sapkota",
    "designation": "Businesswoman",
    "company": "Self Employed",
     "image": sita,
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
    source_code_link: "https://github.com/saritasapkota123/FINAL-YEAR-MAJOR-PROJECT-",
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
  {
    title: "Python Beginner Certification",
    issuer: "DataCamp",
    year: "2024",
    downloadLink: certificate_python,
    icon: datacamp
  },
  {
    title: "Python Intermediate Certification",
    issuer: "DataCamp",
    year: "2024",
    downloadLink: certificate_python2,
    icon: datacamp
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

export { services, technologies, experiences, testimonials, projects, certificates };
