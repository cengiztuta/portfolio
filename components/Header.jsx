import { useState, useRef } from "react";
import styles from "../styles/Header.module.css";
import { headerNavigations } from "@/helpers";
import { Icon } from "@iconify-icon/react";
import { useRouter } from "next/router";
import MobileHeader from "./MobileHeader";
import scrollToHideHeader from "@/hooks/scrollToHideHeader";
import { handleNavigation } from "@/hooks/routeToPage";

const Header = () => {
  // const [lng, setLng] = useState(false);
  const [theme, setTheme] = useState(false);
  const router = useRouter();
  const headerRef = scrollToHideHeader();

  return (
    <div className={styles.container} ref={headerRef}>
      <div
        onClick={() => {
          router.push("#/"), handleNavigation("MySelf");
        }}
      >
        <p className={styles.cengiz}>Cengiz TUTA</p>
      </div>
      <div className={styles.navigationsContainer}>
        {headerNavigations.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              handleNavigation(item), router.push(`#/${item}`);
            }}
            className={styles.navigations}
          >
            <p>{item}</p>
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

        {/* <div className={styles.toggleContainer} onClick={() => setLng(!lng)}>
          <div className={lng ? styles.toggled : styles.unToggled}>
            {lng ? "TR" : "EN"}
          </div>
        </div> */}
      </div>
      <MobileHeader
        // lng={lng}
        // setLng={setLng}
        setTheme={setTheme}
        theme={theme}
      />
    </div>
  );
};

export default Header;
