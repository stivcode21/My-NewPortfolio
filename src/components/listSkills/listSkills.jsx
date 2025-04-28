import { motion } from "framer-motion";
import styles from "./listSkills.module.css";
import { dataSkills } from "@/data/dataSkills";
import CategoryFilter from "@/components/categoryFilter/categoryFilter";
import React, { useState } from "react";
import { dataCareers2 } from "@/data/dataCareers";
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
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="48"
                        stroke-dashoffset="48"
                        d="M16 5v-1c0 -0.55 -0.45 -1 -1 -1h-9c-0.55 0 -1 0.45 -1 1v16c0 0.55 0.45 1 1 1h9c0.55 0 1 -0.45 1 -1v-1"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.6s"
                          values="48;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="12"
                        stroke-dashoffset="12"
                        d="M10 12h11"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.7s"
                          dur="0.2s"
                          values="12;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="6"
                        stroke-dashoffset="6"
                        d="M21 12l-3.5 -3.5M21 12l-3.5 3.5"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.9s"
                          dur="0.2s"
                          values="6;0"
                        />
                      </path>
                    </g>
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
