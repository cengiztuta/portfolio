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
const ProjectsSection = {
  title: "projects i've worked on",
  projects: [
    {
      id: getID(),
      name: "Integra",
      description: "An AI-Powered Leads Generation Platform.",
      tasks:
        "I strategically planned project milestones, led a cross-functional team, established a design system, developed the website, and integrated Stripe payments with secure authentication.",
      url: "https://www.integraleads.xyz/",
      img: "https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg",
      tags: ["AI/ML", "NextJs", "TypeScript", "TailwindCSS", "Express"],
    },
    {
      id: getID(),
      name: "uProposalGpt",
      description: "The AI-powered platform that simplifies proposal creation.",
      tasks:
        "Implemented NextAuth authentication, integrated Mailchimp for newsletter subscription, developed a custom hook for dark mode, created UI components in the Dashboard, and used Notion as a CMS for the blogs page.",
      url: "https://www.uproposalgpt.com/",
      img: "https://user-images.githubusercontent.com/68834718/279469731-be163482-20cd-4cb3-8bcb-bbb2c1a345b8.png",
      tags: ["Open AI", "NextJs", "TypeScript", "TailwindCSS", "Prisma"],
    },
  ],
};

export default ProjectsSection;
