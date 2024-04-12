import { useState } from "react";
import styles from "../styles/Header.module.css";
import { headerNavigations } from "@/helpers";
import { Icon } from "@iconify-icon/react";
import { useRouter } from "next/router";
import MobileHeader from "./MobileHeader";
import routeToPage from "@/hooks/routeToPage";
import scrollToHideHeader from "@/hooks/scrollToHideHeader";
const Header = () => {
  const [lng, SetLng] = useState(false);
  const [theme, setTheme] = useState(false);
  const router = useRouter();
  const headerRef = scrollToHideHeader();

  return (
    <div className={styles.container} ref={headerRef}>
      <div
        onClick={() => {
          routeToPage(0), router.push("#/");
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
              routeToPage(item.percentage), router.push(`#/${item.name}`);
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
      </div>{" "}
      <MobileHeader
        lng={lng}
        SetLng={SetLng}
        setTheme={setTheme}
        theme={theme}
      />
    </div>
  );
};

export default Header;
