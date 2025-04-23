import React from "react";
import SectionHead from "@/components/sectionHead/sectionHead";
import ToolsList from "@/components/toolsList/toolsList";
import styles from "./About.module.css";
import ListSkills from "../../../components/listSkills/listSkills";

const tools = [
  "vercel",
  "reactjs",
  "nextjs",
  "tailwindcss",
  "typescript",
  "figma",
  "github",
  "sass",
  "javascript",
  "zustand",
  "redux",
];

const About = () => {
  return (
    <div className={styles.about} id="about">
      <SectionHead
        title="Sobre mi"
        description="Cada trabajo no solo muestra mis competencias técnicas, sino también mi enfoque creativo y mi dedicación a crear soluciones de diseño que sean usables, accesibles y estéticas.
        Cada trabajo no solo muestra mis competencias técnicas, sino también mi enfoque creativo y mi dedicación a crear soluciones de diseño que sean usables, accesibles y estéticas.
        Cada trabajo no solo muestra mis competencias técnicas, sino también mi enfoque creativo y mi dedicación a crear soluciones de diseño que sean usables, accesibles y estéticas."
      />
      <div className={styles.container}>
        <ListSkills />
        <div className={styles.tools}>
          <img src="/señalando.png" alt="x" className={styles.img} />
          <ToolsList tools={tools} size="small" animateOnScroll />
        </div>
      </div>
    </div>
  );
};

export default About;
