import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Projects.module.css";
import ProjectCard from "@/components/projectCard/ProjectCard";
import FilterCategory from "@/components/filterCategory/FilterCategory";
import BlockHeader from "@/components/blockHeader/BlockHeader";
import { dataProjects } from "@/data/dataProjects";
import { dataCareers1 } from "@/data/dataCareers";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation("projects");
  const [selectedCategory, setSelectedCategory] = useState(1); // Categoría por defecto: UX/UI

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = dataProjects.filter(
    (project) => project.categoryId === selectedCategory
  );

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
          {filteredProjects.map((project) => (
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
    </section>
  );
}
