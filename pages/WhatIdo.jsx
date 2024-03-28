import React from "react";
import styles from "../styles/WhatIdo.module.css";
import Image from "next/image";
import img from "../public/sulu.jpg";
import { skillsSection } from "@/helpers";
import Skills from "@/components/Skills";

const WhatIdo = () => {
  const { title, skills } = skillsSection;
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.content}>
        <div className={styles.image}></div>

        {skills.map(({ id, softwareSkills, points, title }) => (
          <Skills
            key={id}
            className="odd:lg:flex-row-reverse"
            skills={softwareSkills}
            points={points}
            title={title}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatIdo;
