import React from "react";
import styles from "../styles/Experience.module.css";
const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Where I worked</h1>
        <div className={styles.Experience}>
          <div className={styles.companies}>
            <button>Celadon Soft</button>
          </div>
          <div className={styles.textContainer}>
            <h2>
              Full-Stack Developer{" "}
              <a
                href="https://celadonsoft.com/"
                target={"_blank"}
                className={styles.navigations}
              >
                @CeladonSoft
              </a>
            </h2>
            <p> July 2023 - December 2023</p>
            <ul>
              <li>
                Implemented UI components with React & Next.js, TypeScript &
                Tailwind CSS.
              </li>
              <li>
                Developed and maintained design systems that separates design
                logic
              </li>
              <li>
                Understanding client needs and proposing effective solutions,
                which also involves strategising and planning.
              </li>
              <li>
                Lead a cross-functional team of developers and designers in the
                creation of a SaaS product.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
