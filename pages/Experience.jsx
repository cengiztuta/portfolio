import React from "react";
import styles from "../styles/Experience.module.css";
import { experienceSection, getID } from "@/helpers";
import Link from "next/link";
const Experience = () => {
  const { title, experiences } = experienceSection;
  return (
    <div id="Experience" className={styles.container}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <div className={styles.Experience}>
          <div className={styles.companies}>
            <button>{experiences.company}</button>
          </div>
          <div className={styles.textContainer}>
            <h2>
              {experiences.role}
              <Link
                href={experiences.companyUrl}
                target={"_blank"}
                className={styles.navigations}
              >
                @{experiences.company}
              </Link>
            </h2>
            <p>
              {" "}
              {experiences.started}
              <span> </span>- <span> </span>
              {experiences.upto}
            </p>

            <ul>
              {experiences.tasks.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
