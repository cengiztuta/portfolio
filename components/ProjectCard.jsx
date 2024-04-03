// ProjectCard.js
import React from "react";
import styles from "../styles/Projects.module.css";
import { Icon } from "@iconify-icon/react";
import Image from "next/image";

const ProjectCard = ({ name, repo, img, year, tags }) => {
  // id'i props'tan kaldırın, zaten kullanmıyorsunuz.
  return (
    <div className={styles.project}>
      <div className={styles.projectImage}>
        <div className={styles.img}>
          {/* Resimleri doğrudan img prop'u olarak geçirin */}
          <Image src={img} alt={name} />
        </div>
      </div>
      <div className={styles.projectFooter}>
        <div className={styles.projectTitle}>
          <p className={styles.tags}>{tags.join(" | ")}</p>
          <div className={styles.iconContainer}>
            <a target="_blank" href={repo}>
              <Icon
                className={styles.icon}
                height={25}
                icon={"tabler:brand-github"}
              />
            </a>
            <Icon height={25} icon={"ph:sun-bold"} />
          </div>
        </div>
        <div className={styles.projectTitle}>
          <h3>{name}</h3>
          <p className={styles.date}>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
