import React from "react";
import styles from "../styles/SideBar.module.css";
import { socialLinks } from "@/helpers";
import { Icon } from "@iconify-icon/react";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      {socialLinks.map((item) => (
        <a target="_blank" href={item.url} className={styles.icon}>
          <Icon className={styles.icon} icon={item.icon} width="25" height="25" />{" "}
        </a>
      ))}
      <span></span>
    </div>
  );
};

export default Sidebar;
