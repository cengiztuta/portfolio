import React from "react";
import styles from "../styles/FeedBack.module.css"; 

const FeedBack = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.nameInputContent}>
          <input placeholder="NAME" type="text" />
          <input placeholder="SURNAME" type="text" />
        </div>
        <input type="email" placeholder="EMAİL" />
        <h2>Message</h2>
        <textarea rows={5} />
      </div>
    </div>
  );
};

export default FeedBack;
