import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Projects.module.css";
import CardProject from "@/components/cardProject/cardProject";
import CategoryFilter from "@/components/categoryFilter/categoryFilter";
import { dataProjects } from "@/data/dataProjects";
import { dataCareers1 } from "@/data/dataCareers";
import SectionHead from "@/components/sectionHead/sectionHead";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(1); // Categoría por defecto: UX/UI

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = dataProjects.filter(
    (project) => project.categoryId === selectedCategory
  );

  return (
    <section className={styles.projects} id="projects">
      <SectionHead
        title="Proyectos"
        description="Cada trabajo no solo muestra mis competencias técnicas, sino también mi enfoque creativo y mi dedicación a crear soluciones de diseño que sean usables, accesibles y estéticas."
      />
      {/* Filtro de categorías */}
      <CategoryFilter
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
              <CardProject project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </main>
    </section>
  );
}
