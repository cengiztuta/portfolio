import React, { useState } from "react";
import styles from "../styles/FeedBack.module.css";
import Button from "@/components/Button";
import { SendFeedBack } from "@/components/sendFeedBack";
const FeedBack = () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });

  return (
    <div id="Feedback" className={styles.container}>
      <div className={styles.content}>
        {" "}
        <h1> I Need Your Feedback</h1>
        <div className={styles.nameInputContent}>
          <input
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            value={user.name}
            placeholder="NAME"
            type="text"
          />
          <input
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            value={user.lastname}
            placeholder="SURNAME"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
          className={styles.email}
          type="email"
          placeholder="EMAİL"
        />
        <h2>Message</h2>
        <textarea
          onChange={(e) => setUser({ ...user, message: e.target.value })}
          value={user.message}
          rows={5}
        />
        <Button
          onClick={() => {
            SendFeedBack(user.name, user.lastname, user.email, user.message);
          }}
          ButtonStyle={"SEND"}
          ButtonText={"SEND FEEDBACK"}
        />
      </div>
    </div>
  );
};

export default FeedBack;
