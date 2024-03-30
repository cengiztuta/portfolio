import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { headerNavigations } from "@/helpers";

const Header = () => {
  const [lng, SetLng] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const isScrolledFromStorage =
      localStorage.getItem("isScrolled") === "true" || false;
    setIsScrolled(isScrolledFromStorage);
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
      localStorage.setItem(
        "isScrolled",
        JSON.stringify(
          prevScrollPos > currentScrollPos || currentScrollPos === 0
        )
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

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
    <div className={isScrolled ? styles.container : styles.hideContainer}>
      <div>
        {" "}
        <Link href={"/"} className={styles.cengiz}>
          Cengiz TUTA
        </Link>{" "}
      </div>

      <div className={styles.navigationsContainer}>
        {headerNavigations.map((item, index) => (
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
