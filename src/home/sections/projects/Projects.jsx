import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Projects.module.css";
import ProjectCard from "@/components/organisms/projectCard/ProjectCard";
import FilterCategory from "@/components/templates/filterCategory/FilterCategory";
import BlockHeader from "@/components/molecules/blockHeader/BlockHeader";
import HoverTag from "@/components/atoms/hoverTag/HoverTag";
import { dataProjects } from "@/data/dataProjects";
import { dataCareers1 } from "@/data/dataCareers";
import { useTranslation } from "react-i18next";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

export default function Projects() {
  const { t } = useTranslation("projects");
  const [selectedCategory, setSelectedCategory] = useState(1); // Categoría por defecto: UX/UI
  const [seeBtn, setSeeBtn] = useState(false);
  const [page, setPage] = useState(1);

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = dataProjects.filter(
    (project) => project.categoryId === selectedCategory
  );

  useEffect(() => {
    if (filteredProjects.length > 6) {
      setSeeBtn(true);
    } else {
      setSeeBtn(false);
    }

    if (selectedCategory !== 1) {
      setPage(1);
    }
  }, [selectedCategory]);

  // Determinar los proyectos a mostrar según la página actual
  const currentProjects =
    page === 1 ? filteredProjects.slice(0, 6) : filteredProjects.slice(6);

  // Función para alternar entre las páginas de proyectos
  const togglePage = () => {
    setPage((prevPage) => (prevPage === 1 ? 2 : 1));
  };

  return (
    <section className={styles.projects} id="projects">
      <BlockHeader title={t("head.title")} ifExist={true}>
        <span>
          {t("head.text-1")}
          <strong>{t("head.strong-1")}</strong>
          {t("head.text-2")}
          <strong>{t("head.strong-2")}</strong>
          {t("head.text-3")}
          <strong>{t("head.strong-3")}</strong>
        </span>
      </BlockHeader>

      {/* Filtro de categorías */}
      <FilterCategory
        controls={dataCareers1}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Lista de proyectos */}
      <main className={styles.containerProjects}>
        <AnimatePresence>
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
              className={styles.motionCard}
              layout
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </main>
      {seeBtn && (
        <div className={styles.containerButtons}>
          <HoverTag position="bottom" label={t("head.btn1")}>
            <button className={styles.btn} onClick={togglePage}>
              <ArrowBigLeftDash />
            </button>
          </HoverTag>
          <HoverTag position="bottom" label={t("head.btn2")}>
            <button className={styles.btn} onClick={togglePage}>
              <ArrowBigRightDash />
            </button>
          </HoverTag>
        </div>
      )}
    </section>
  );
}
