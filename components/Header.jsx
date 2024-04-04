import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { headerNavigations } from "@/helpers";
import { Icon } from "@iconify-icon/react";
import { useRouter } from "next/router";
const Header = () => {
  const [lng, SetLng] = useState(false);
  const [theme, setTheme] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const router = useRouter();

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
  const handleClick = (percentage) => {
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;
    const scrollTo = (bodyHeight - windowHeight) * (percentage / 100);
    window.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
  };
  return (
    <div className={isHeaderVisible ? styles.container : styles.hideContainer}>
      <div
        onClick={() => {
          handleClick(0), router.push("#/");
        }}
      >
        {" "}
        <p className={styles.cengiz}>Cengiz TUTA </p>
      </div>

      <div className={styles.navigationsContainer}>
        {headerNavigations.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              handleClick(item.percentage), router.push(`#/${item.name}`);
            }}
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
            {theme ? (
              <Icon
                height={25}
                style={{ color: "#fff" }}
                icon={"solar:moon-linear"}
              />
            ) : (
              <Icon height={25} icon={"ph:sun-bold"} />
            )}
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
