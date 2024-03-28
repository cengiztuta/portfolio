export const getID = () => `id : ${Math.random().toString(16).slice(2)}`;
export const skillsSection = {
  title: "What I Do",
  skills: [
    {
      id: getID(),
      title: "Front-end Development",
      // animation lottie file: https://lottiefiles.com/
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
        // iconify icons: https://icon-sets.iconify.design/
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
