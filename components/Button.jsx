import React from "react";
import styles from "../styles/Buttons.module.css";
const Button = ({ ButtonStyle, ButtonText, onClick }) => {
  return (
    <button onClick={onClick} className={styles[ButtonStyle]}>
      {ButtonText}
    </button>
  );
};

export default Button;
