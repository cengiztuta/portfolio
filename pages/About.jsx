import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import sulu from "../public/sulu.jpg";

const About = () => {
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.content}>
        <div className={styles.textContent}>
          {" "}
          <h3>About Me</h3>
          <p>
            Hi, my name is Vatsal Singh, an artist as well as crazy full stack
            web developer who wants to explore every tech stack.
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at a
            start-up - Pixelwand.{" "}
          </p>
          <p>
            My main focus these days is learning mobile development and finding
            a decent job.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div className={styles.tech}>
            <ul>
              <li>NextJS</li>
              <li>NextJS</li>
              <li>NextJS</li>
            </ul>
            <ul>
              <li>NextJS</li>
              <li>NextJS</li>
              <li>NextJS</li>
            </ul>
          </div>
        </div>{" "}
        <div className={styles.images}>
          <Image className={styles.sulu} src={sulu} />
        </div>
      </div>
    </div>
  );
};

export default About;
