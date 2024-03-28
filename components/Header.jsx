import { useState } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [lng, SetLng] = useState(false);
  const navigations = [
    { name: "About", percentage: 13 },
    { name: "Skills", percentage: 27 },
    { name: "Experience", percentage: 60 },
    { name: "Projects", percentage: 80 },
    { name: "Contact", percentage: 100 },
  ];

  const handleClick = (percentage) => {
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;
    const scrollTo = (bodyHeight - windowHeight) * (percentage / 100);
    window.scrollTo({
      top: scrollTo,
      behavior: "smooth", // Animasyonlu kaydırma için
    });
  };

  return (
    <div className={styles.container}>
      <div>
        {" "}
        <Link href={"/"} className={styles.cengiz}>
          Cengiz TUTA
        </Link>{" "}
      </div>

      <div className={styles.navigationsContainer}>
        {navigations.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.percentage)}
            className={styles.navigations}
          >
            {item.name}
          </div>
        ))}

        <div className={styles.toggleContainer} onClick={() => SetLng(!lng)}>
          <div className={lng ? styles.toggled : styles.unToggled}>
            {lng ? "TR" : "EN"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
