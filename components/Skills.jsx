import { getID } from "@/helpers";
import SkillIcon from "./SkillIcon";
import styles from "../styles/WhatIdo.module.css";
import "../styles/WhatIdo.module.css";
const Skills = ({ skills, title, points }) => {
  return (
    <div className={styles.textContent}>
      <h3>{title}</h3>
      <div className={styles.skills}>
        {skills.map((item) => (
          <SkillIcon name={item.name} key={getID()} src={item.icon} />
        ))}
      </div>{" "}
      <ul>
        {points.map((point) => (
          <li key={getID()}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
