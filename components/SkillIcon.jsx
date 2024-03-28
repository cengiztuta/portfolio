import { getID } from "@/helpers";
import { Icon } from "@iconify-icon/react";
import { useState } from "react";
import styles from "../styles/WhatIdo.module.css";
const SkillIcon = ({ src, name }) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        icon={src}
        width="70"
        height="70"
      />
    </div>
  );
};

export default SkillIcon;
