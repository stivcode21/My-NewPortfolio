import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import { dataBtnIcons } from "../../../data/dataBtnIcons";
import HoverLabel from "@/components/hoverLabel/HoverLabel";
import { useThemeStore } from "../../../store/ThemeStore";

export default function Navbar() {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  const [listVisible, setListVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const screenWidthCollapsed = 1024;

  const updateCollapsedState = () => {
    setIsCollapsed(
      window.innerWidth <= screenWidthCollapsed || window.scrollY > 0
    );
  };

  const handleHoverNav = (isHover) => {
    if (window.innerWidth > screenWidthCollapsed) {
      setIsCollapsed(!isHover && window.scrollY > 0);
    }
  };

  useEffect(() => {
    updateCollapsedState();

    window.addEventListener("scroll", updateCollapsedState);
    window.addEventListener("resize", updateCollapsedState);

    return () => {
      window.removeEventListener("scroll", updateCollapsedState);
      window.removeEventListener("resize", updateCollapsedState);
    };
  }, []);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    if (innerWidth <= screenWidthCollapsed) {
      setListVisible(false);
    }
  };

  const getIcon = (title) => {
    const icon = dataBtnIcons.find((icon) => icon.title === title);
    return icon ? icon.svg : null;
  };

  return (
    <motion.nav
      className={`${styles.nav} ${listVisible ? styles.open : ""}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
    >
      <div
        className={styles.coverList}
        onClick={() => setListVisible(false)}
      ></div>
      <div
        className={`${styles.navLeft} ${isCollapsed ? styles.collapsed : ""}`}
        onMouseEnter={() => handleHoverNav(true)}
        onMouseLeave={() => handleHoverNav(false)}
        onClick={() => setListVisible((prev) => !prev)}
      >
        <button
          to="#"
          className={styles.menu}
          aria-label={
            !listVisible
              ? "Abrir menú de navegación"
              : "Cerrar menú de navegación"
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={styles.links}>
          <button
            onClick={() => handleScroll("main")}
            className={styles.navLink}
          >
            <span>Inicio</span>
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className={styles.navLink}
          >
            <span>Proyectos</span>
          </button>
          <button
            onClick={() => handleScroll("about")}
            className={styles.navLink}
          >
            <span>Sobre</span>
          </button>

          <button
            onClick={() => handleScroll("education")}
            className={styles.navLink}
          >
            <span>Educación</span>
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className={styles.navLink}
          >
            <span>Contacto</span>
          </button>
        </div>
      </div>
      <div className={styles.navRight}>
        <HoverLabel label={"Idioma"} position="bottom">
          <button className={styles.navSetting}>
            {getIcon("world")}
            <span>EN</span>
          </button>
        </HoverLabel>
        <HoverLabel label={isDarkMode ? "Claro" : "Oscuro"} position="bottom">
          <button
            onClick={toggleDarkMode}
            className={`${styles.navSetting} ${styles.switchSetting}
					${isDarkMode ? styles.dark : styles.light}`}
          >
            <div className={styles.backdrop}>
              <span className={`${styles.icon} ${styles.sun}`}>
                {getIcon("sun")}
              </span>
              <span className={`${styles.icon} ${styles.moon}`}>
                {getIcon("moon")}
              </span>
            </div>
          </button>
        </HoverLabel>
      </div>
      <div className={styles.navList}>
        <button
          className={`${styles.navLink}`}
          onClick={() => handleScroll("main")}
          style={{
            animationDelay: `${0.1}s`,
          }}
        >
          <span>Inicio</span>
        </button>
        <button
          onClick={() => handleScroll("projects")}
          className={styles.navLink}
          style={{
            animationDelay: `${0.1 * 2}s`,
          }}
        >
          <span>Proyectos</span>
        </button>
        <button
          className={styles.navLink}
          style={{
            animationDelay: `${0.1 * 3}s`,
          }}
          onClick={() => handleScroll("about")}
        >
          <span>Sobre</span>
        </button>
        <button
          className={styles.navLink}
          style={{
            animationDelay: `${0.1 * 4}s`,
          }}
          onClick={() => handleScroll("education")}
        >
          <span>Educación</span>
        </button>
        <button
          className={styles.navLink}
          style={{
            animationDelay: `${0.1 * 4}s`,
          }}
          onClick={() => handleScroll("contact")}
        >
          <span>Contacto</span>
        </button>
        <div
          className={styles.settingList}
          style={{
            animationDelay: `${0.1 * 5}s`,
          }}
        >
          <HoverLabel label={"Idioma"} position="top">
            <button className={styles.navSetting}>
              {getIcon("world")}
              <span>EN</span>
            </button>
          </HoverLabel>
          <HoverLabel label={isDarkMode ? "Claro" : "Oscuro"} position="top">
            <button
              onClick={toggleDarkMode}
              className={`${styles.navSetting} ${styles.switchSetting}
					${isDarkMode ? styles.dark : styles.light}`}
            >
              <div className={styles.backdrop}>
                <span className={`${styles.icon} ${styles.sun}`}>
                  {getIcon("sun")}
                </span>
                <span className={`${styles.icon} ${styles.moon}`}>
                  {getIcon("moon")}
                </span>
              </div>
            </button>
          </HoverLabel>
        </div>
      </div>
    </motion.nav>
  );
}
