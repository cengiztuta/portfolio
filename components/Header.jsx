import { useState } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const [lng, SetLng] = useState(false);
  const navigations = ["About", "Skills", "Experience", "Projects", "Contact"];
  const handleClick = () => {
    window.scrollBy({
      top: 800,
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
          <Link
            onClick={handleClick}
            href={`/#${item}`}
            className={styles.navigations}
          >
            {item}
          </Link>
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
