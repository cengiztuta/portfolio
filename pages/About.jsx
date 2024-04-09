import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import sulu from "../public/sulu.jpg";
import { aboutSection, getID } from "@/helpers";
const About = () => {
  const { title, list } = aboutSection;
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.content}>
        <div className={styles.textContent}>
          {" "}
          <h3>{title}</h3>
          <p>
            Hi, my name is Vatsal Singh, an artist as well as crazy full stack
            web developer who wants to explore every tech stack.
          </p>
          <p>
            My main focus these days is learning mobile development and finding
            a decent job.
          </p>
          <p>{list.title}</p>
          <ul className={styles.deneme}>
            {list.items.map((item) => (
              <li key={getID()}>{item}</li>
            ))}
          </ul>
        </div>{" "}
        <div className={styles.images}>
          <Image className={styles.sulu} src={sulu} />
        </div>
      </div>
    </div>
  );
};

export default About;
