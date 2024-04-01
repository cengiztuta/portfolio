import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { headerNavigations } from "@/helpers";

const Header = () => {
  const [lng, SetLng] = useState(false);
  const [theme, setTheme] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Yukarı kaydırılıyorsa header'ı göster
      if (scrollTop < lastScrollTop) {
        setIsHeaderVisible(true);
      }
      // Aşağı kaydırılıyorsa header'ı gizle
      else if (scrollTop > lastScrollTop) {
        setIsHeaderVisible(false);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className={isHeaderVisible ? styles.container : styles.hideContainer}>
      <div>
        {" "}
        <Link href={"/"} className={styles.cengiz}>
          <p>Cengiz TUTA </p>
        </Link>{" "}
      </div>

      <div className={styles.navigationsContainer}>
        {headerNavigations.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.percentage)}
            className={styles.navigations}
          >
            <p>{item.name}</p>
          </div>
        ))}

        <div
          className={styles.toggleContainer}
          onClick={() => setTheme(!theme)}
        >
          <div
            id={`${theme ? "Light" : "Dark"}`}
            className={theme ? styles.toggled : styles.unToggled}
          >
            {theme ? "Light" : "Dark"}
          </div>
        </div>
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
