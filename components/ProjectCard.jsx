import React from "react";
import styles from "../styles/Projects.module.css";
import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import img from "../public/bookApp2.jpg";
const ProjectCard = () => {
  return (
    <div className={styles.project}>
      <div className={styles.projectImage}>
        <div className={styles.img}>
          <Image src={img} alt="Resim" />
        </div>{" "}
      </div>
      <div className={styles.projectFooter}>
        <div className={styles.projectTitle}>
          <p> React | CSS</p>
          <div className={styles.iconContainer}>
            <Icon
              className={styles.icon}
              height={25}
              icon={"tabler:brand-github"}
            />
            <Icon height={25} icon={"ph:sun-bold"} />
          </div>
        </div>
        <div className={styles.projectTitle}>
          <h3>Book Order App</h3>
          <p className={styles.date}>2023</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
