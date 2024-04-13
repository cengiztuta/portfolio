import React from "react";
import styles from "../styles/FeedBack.module.css";
import Button from "@/components/Button";

const FeedBack = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {" "}
        <h1> I Need Your Feedback</h1>
        <div className={styles.nameInputContent}>
          <input placeholder="NAME" type="text" />
          <input placeholder="SURNAME" type="text" />
        </div>
        <input className={styles.email} type="email" placeholder="EMAİL" />
        <h2>Message</h2>
        <textarea rows={5} />
        <Button ButtonStyle={"SEND"} ButtonText={"SEND FEEDBACK"} />
      </div>
    </div>
  );
};

export default FeedBack;
