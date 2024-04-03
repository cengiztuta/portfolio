export const getID = () => `id : ${Math.random().toString(16).slice(2)}`;
export const skillsSection = {
  title: "What I Do",
  skills: [
    {
      id: getID(),
      title: "Front-end Development",

      lottie: {
        light: "/lotties/frontend.json",
        dark: "/lotties/frontend-dark.json",
      },
      points: [
        "Building responsive static websites using Next.js",
        "Building responsive Single Page Apps in React.js",
        "Building RESTful APIs in Express",
      ],
      softwareSkills: [
        { name: "html-5", icon: "vscode-icons:file-type-html" },
        { name: "CSS-3", icon: "vscode-icons:file-type-css" },
        { name: "javaScript", icon: "vscode-icons:file-type-js-official" },
        { name: "nodejs", icon: "logos:nodejs-icon" },
        { name: "reactjs", icon: "logos:react" },
        { name: "nextjs", icon: "logos:nextjs-icon" },
        { name: "redux", icon: "logos:redux" },
        { name: "express", icon: "skill-icons:expressjs-light" },
        { name: "mongodb", icon: "skill-icons:mongodb" },
        { name: "database", icon: "vscode-icons:file-type-sql" },
      ],
    },
  ],
};
export const headerNavigations = [
  { name: "About", percentage: 25 },
  { name: "Skills", percentage: 47 },
  { name: "Experience", percentage: 72 },
  { name: "Projects", percentage: 98 },
];

export const socialLinks = [
  {
    icon: "tabler:brand-github",
    url: "https://github.com/cengiztuta/",
  },
  {
    icon: "mdi:instagram",
    url: "https://instagram.com/cengiztuta",
  },

  {
    icon: "lucide:linkedin",
    url: "https://www.linkedin.com/in/cengiz-tuta-bbb79a20b/",
  },
  {
    icon: "lucide:facebook",
    url: "https://www.facebook.com/cengiz.tuta07/",
  },
];
export const aboutSection = {
  title: "About Me",
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: "Here are a few technologies I’ve been working with recently:",
    items: ["HTML", "ReactJs", "CSS", "NextJS", "JavaScript", "ExpressJS"],
  },
  img: "/vatsal-singh.jpg",
};
export const experienceSection = {
  title: "Where I've Worked",
  experiences: {
    company: "CeladonSoft",
    companyUrl: "https://celadonsoft.com/  ",
    role: "Full-Stack Developer  ",
    started: "july 2023",
    upto: "December 2023",
    tasks: [
      "Implemented UI components with React , ExpressJs, MongoDB,Firebase",
      "Developed and maintained design systems that separates design logic.",
      "Understanding client needs and proposing effective solutions, which also involves strategising and planning.",
      "Lead a cross-functional team of developers and designers in the creation of a SaaS product.",
    ],
  },
};
import pragueImage from "../public/Prague.jpg";
import tictactoeImage from "../public/tictactoe.jpg";
import bookApp from "../public/bookApp.png";
import bookOrder from "../public/bookOrder.jpg";
import ufuksanMob from "../public/ufuksanMob.jpg";

const ProjectsSection = {
  title: "my projects",
  projects: [
    {
      id: getID(),
      name: "Prague App",
      repo: "https://github.com/cengiztuta/prague-app",
      img: pragueImage, // Resmi doğrudan URL olarak atayın
      year: 2023,
      tags: ["React", "CSS"],
    },
    {
      id: getID(),
      name: "Tictactoe V2",
      repo: "https://github.com/cengiztuta/tictactoev2",
      img: tictactoeImage, // Resmi doğrudan URL olarak atayın
      year: 2023,
      tags: ["React", "CSS", "Firebase"],
    },
    {
      id: getID(),
      name: "bookOrder",
      repo: "https://github.com/cengiztuta/bookOrderApp",
      img: bookOrder, // Resmi doğrudan URL olarak atayın
      year: 2023,
      tags: ["React", "CSS", "Express", "MangoDB"],
    },
    {
      id: getID(),
      name: "Website for Architect",
      repo: "https://github.com/cengiztuta/ufuksanMob",
      img: bookApp, // Resmi doğrudan URL olarak atayın
      year: 2023,
      tags: ["React", "CSS", "Express", "MangoDB"],
    },
    {
      id: getID(),
      name: "Website for Architect",
      repo: "https://github.com/cengiztuta/ufuksanMob",
      img: ufuksanMob, // Resmi doğrudan URL olarak atayın
      year: 2023,
      tags: ["React", "CSS", "Express", "MangoDB"],
    },
  ],
};

export default ProjectsSection;
