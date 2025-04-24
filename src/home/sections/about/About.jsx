import React from "react";
import SectionHead from "@/components/sectionHead/sectionHead";
import ToolsList from "@/components/toolsList/toolsList";
import styles from "./About.module.css";
import ListSkills from "@/components/listSkills/listSkills";
import { button } from "framer-motion/client";

const tools = [
  "figma",
  "miro",
  "asana",
  "notion",
  "html",
  "css",
  "npm",
  "git",
  "sqlLite",
  "firebase",
  "js",
  "vercel",
  "reactjs",
  "nextjs",
  "tailwindcss",
  "bootstrap",
  "typescript",
  "github",
  "sass",
  "zustand",
  "redux",
  "vite",
  "trello",
  "vsCode",
];

const About = () => {
  return (
    <div className={styles.about} id="about">
      <SectionHead
        title="Sobre mi"
        description="En esta sección sabrás un poco de mí, mis skills y algo de mi historia por si la quieres conocer. Combino diseño y código para crear soluciones funcionales y con personalidad. Cada paso en mi camino ha sido una lección. Y si tú estás empezando, recuerda: todos los grandes proyectos comienzan con una sola línea de código."
      />
      <div className={styles.container}>
        <ListSkills />
        <div className={styles.tools}>
          <img src="/señalando.png" alt="x" className={styles.img} />
          <h3 className={styles.workTag1}>Habilidades</h3>
          <ToolsList tools={tools} size="small" animateOnScroll />
          <h3 className={styles.workTag2}>
            Aprediendo
            <span className={styles.btnContainer}>
              <p className={styles.btn}>Learn</p>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
