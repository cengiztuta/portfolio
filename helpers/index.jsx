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
  { name: "About", percentage: 35 },
  { name: "Skills", percentage: 70 },
  { name: "Experience", percentage: 100 },
  { name: "Projects", percentage: 80 },
  { name: "Contact", percentage: 100 },
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
