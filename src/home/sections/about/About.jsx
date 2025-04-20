import React from "react";
import SectionHead from "@/components/sectionHead/sectionHead";
import ToolsList from "@/components/toolsList/toolsList";
import styles from "./About.module.css";

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
        description="Cada trabajo no solo muestra mis competencias técnicas, sino también mi enfoque creativo y mi dedicación a crear soluciones de diseño que sean usables, accesibles y estéticas."
      />
      <div className={styles.tools}>
        <ToolsList
          tools={tools}
          size="small"
          divisors={false}
          animateOnScroll
        />
      </div>
    </div>
  );
};

export default About;
