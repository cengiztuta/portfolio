import { Icon } from "@iconify-icon/react";
import { useState } from "react";
import styles from "../styles/WhatIdo.module.css";
const SkillIcon = ({ src, name }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.skill}>
      <p
        className={
          hovered
            ? `${styles.hoverElement} ${styles.hovered}`
            : styles.hoverElement
        }
      >
        {name}
      </p>
      <Icon
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        icon={src}
        width="70"
        height="70"
      />
    </div>
  );
};

export default SkillIcon;
