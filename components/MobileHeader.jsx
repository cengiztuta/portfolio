import { useState } from "react";
import styles from "../styles/MobileHeader.module.css";
import { headerNavigations } from "@/helpers";
import { Icon } from "@iconify-icon/react";
import { useRouter } from "next/router";
import { handleNavigation } from "@/hooks/routeToPage";
const MobileHeader = ({ theme, setTheme, lng, SetLng }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <button
        className={styles.mobileMenuButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <div className={styles.menuClose}>X</div>
        ) : (
          <div className={styles.menuOpen}>
            <span className={styles.stick}></span>
            <span className={styles.stick}></span>
            <span className={styles.stick}></span>
          </div>
        )}
      </button>

      {isOpen ? (
        <div className={styles.mobileMenu}>
          <div className={styles.menuItems}>
            {" "}
            {headerNavigations.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  handleNavigation(item), router.push(`#/${item}`);
                  setIsOpen(false);
                }}
                className={styles.navigations}
              >
                <p>{item}</p>
              </button>
            ))}
            <div className={styles.changeButtons}>
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
              <div
                className={styles.toggleContainer}
                onClick={() => SetLng(!lng)}
              >
                <div className={lng ? styles.toggled : styles.unToggled}>
                  {lng ? "TR" : "EN"}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MobileHeader;
