import styles from "./ListSkills.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { dataSkills } from "@/data/dataSkills";
import { dataCareers2 } from "@/data/dataCareers";
import CategoryFilter from "@/components/categoryFilter/CategoryFilter";
import HoverLabel from "@/components/hoverLabel/HoverLabel";

const ListSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState(1); // Categoría por defecto: UX/UI

  const filteredProjects = dataSkills.filter(
    (project) => project.id === selectedCategory
  );

  return (
    <>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.25,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          viewport={{ once: true, amount: 0.1 }}
          className={styles.itemTitle}
        >
          <p>
            Mi experiencia abarca una variedad de{" "}
            <strong>habilidades técnicas y de diseño.</strong> He trabajado en{" "}
            {""}
            <strong>
              proyectos que van desde el desarrollo front-end
            </strong>{" "}
            hasta la creación de interfaces de usuario intuitivas y atractivas.{" "}
            <strong>Aquí hay un resumen de mis habilidades</strong>
            <strong className={styles.buttonContainer}>
              <HoverLabel label="Leer mas" position="bottom">
                <button className={styles.button}>
                  ...{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M15 12h-5" />
                    <path d="M15 8h-5" />
                    <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                    <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
                  </svg>
                </button>
              </HoverLabel>
            </strong>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.15,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          viewport={{ once: true, amount: 1 }}
          className={styles.itemDetails}
        >
          {/* Filtro de categorías */}
          <CategoryFilter
            controls={dataCareers2}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            ifExists={true}
          />
        </motion.div>
        {filteredProjects.map((item) => (
          <div key={item.id} className={styles.containerSkills}>
            <h2 className={styles.subtitle}>{item.subtitle}</h2>

            <ul className={styles.responsabilities}>
              {item.skills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.25,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListSkills;
