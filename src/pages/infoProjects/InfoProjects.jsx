import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import styles from "./InfoProjects.module.css";
import { dataProjects } from "@/data/dataProjects";
import { handleShare } from "@/hooks/share";
import MyFooter from "@/home/sections/myFooter/MyFooter";
import Tag from "@/components/tag/Tag";
import Slider from "@/components/slider/Slider";
import HoverTag from "@/components/hoverTag/HoverTag";
import ExpandableList from "@/components/expandableList/ExpandableList";
import ProjectOptions from "@/components/projectOptions/ProjectOptions";
import ButtonBack from "@/components/buttonBack/ButtonBack";
import IconTool from "@/components/iconTool/IconTool";
import { Waypoints } from "lucide-react";
import { useTranslation } from "react-i18next";

const InfoProjects = () => {
  const { url } = useParams();
  const { t } = useTranslation("projects");
  const project = dataProjects.find((item) => item.url === url);
  const menuRef = useRef(null);

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [headerLoaded, setHeaderLoaded] = useState(false);

  const heroRef = useRef(null);
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scrollear arriba del todo al cargar un nuevo proyecto
  useEffect(() => {
    scrollTo({ top: 0 });
  }, [url]);

  // Definir cuando animar el header
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHeaderLoaded(true);
    }, 1200);

    return () => clearTimeout(timeout);
  }, [url]);
  // Mostrar navbar completo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom <= 0); // Si el héroe ya no es visible, cambia el estado.
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOptionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOptions = () => {
    setIsOptionsOpen((prev) => !prev);
  };

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <section className={styles.detailProject}>
      <nav
        id="project-nav"
        ref={navRef}
        className={`${styles.nav} ${isScrolled && styles.scrolled}`}
      >
        <div className={styles.coverNav}></div>
        <ButtonBack type="transparent" />
        <HoverTag label="Ir arriba" position="bottom">
          <button
            onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
            className={styles.info}
          >
            {project.images[0]}
            <span>
              <h2>{project.title}</h2>
            </span>
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9L9 1L17 9"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </HoverTag>
        <span className={styles.gap}></span>
      </nav>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Slider
            carouselImages={project.images}
            isHero={true}
            showControls={false}
            showStepbar={false}
            showThumbnail={true}
            motionId={project.url}
          />
        </div>
        <div
          className={`${styles.headerRight} ${headerLoaded && styles.loaded}`}
          data-header-right
        >
          <div ref={heroRef} className={styles.hero}>
            <div>
              <h1 title={project.title}>{project.title}</h1>
              <div className={`${styles.cta} ${isScrolled && styles.fixed}`}>
                <HoverTag label={t("head.option-share")} position="mix">
                  <button
                    className={styles.primaryButton}
                    onClick={handleShare}
                  >
                    <Waypoints />
                  </button>
                </HoverTag>
                <div ref={menuRef}>
                  <HoverTag
                    label={t("head.option-moreOptions")}
                    isDisabled={isOptionsOpen}
                    position="mix"
                  >
                    <button
                      onClick={toggleOptions}
                      className={`${styles.moreOptions} ${
                        isOptionsOpen ? styles.open : ""
                      }`}
                    >
                      <svg
                        width="25"
                        height="6"
                        viewBox="0 0 25 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.points}
                      >
                        <path
                          d="M5.83236 2.99992C5.83236 3.70716 5.55141 4.38544 5.05131 4.88554C4.55121 5.38563 3.87293 5.66659 3.16569 5.66659C2.45845 5.66659 1.78017 5.38563 1.28007 4.88554C0.779975 4.38544 0.499023 3.70716 0.499023 2.99992C0.499023 2.29267 0.779975 1.6144 1.28007 1.1143C1.78017 0.614204 2.45845 0.333252 3.16569 0.333252C3.87293 0.333252 4.55121 0.614204 5.05131 1.1143C5.55141 1.6144 5.83236 2.29267 5.83236 2.99992ZM15.1657 2.99992C15.1657 3.70716 14.8847 4.38544 14.3846 4.88554C13.8845 5.38563 13.2063 5.66659 12.499 5.66659C11.7918 5.66659 11.1135 5.38563 10.6134 4.88554C10.1133 4.38544 9.83236 3.70716 9.83236 2.99992C9.83236 2.29267 10.1133 1.6144 10.6134 1.1143C11.1135 0.614204 11.7918 0.333252 12.499 0.333252C13.2063 0.333252 13.8845 0.614204 14.3846 1.1143C14.8847 1.6144 15.1657 2.29267 15.1657 2.99992ZM24.499 2.99992C24.499 3.70716 24.2181 4.38544 23.718 4.88554C23.2179 5.38563 22.5396 5.66659 21.8324 5.66659C21.1251 5.66659 20.4468 5.38563 19.9467 4.88554C19.4466 4.38544 19.1657 3.70716 19.1657 2.99992C19.1657 2.29267 19.4466 1.6144 19.9467 1.1143C20.4468 0.614204 21.1251 0.333252 21.8324 0.333252C22.5396 0.333252 23.2179 0.614204 23.718 1.1143C24.2181 1.6144 24.499 2.29267 24.499 2.99992Z"
                          fill="#7D8AFF"
                        />
                      </svg>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.x}
                      >
                        <path
                          d="M17 1L1 17M1 1L17 17"
                          stroke="#7D8AFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </HoverTag>
                  <ProjectOptions
                    links={project.links}
                    isOptionsOpen={isOptionsOpen}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className={styles.divisor} />
          <ul className={styles.tags}>
            {project.tags.map((skill, index) => (
              <Tag tag={skill} index={index} key={index} />
            ))}
          </ul>
          <p>{t(project.description)}</p>
          {project.details && (
            <ExpandableList
              descriptions={[
                t(project.details[0]),
                t(project.details[1]),
                t(project.details[2]),
              ]}
            />
          )}
          {project.tools && (
            <div className={styles.tools}>
              <IconTool tools={project.tools} />
            </div>
          )}
        </div>
      </header>

      <MyFooter />
    </section>
  );
};
export default InfoProjects;
