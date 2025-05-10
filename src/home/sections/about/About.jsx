import styles from "./About.module.css";
import SectionHead from "@/components/sectionHead/SectionHead";
import ToolsList from "@/components/toolsList/ToolsList";
import ListSkills from "@/components/listSkills/ListSkills";

const tools = [
  "figma",
  "miro",
  "asana",
  "notion",
  "trello",
  "vsCode",
  "html",
  "css",
  "sass",
  "tailwindcss",
  "bootstrap",
  "git",
  "github",
  "js",
  "typescript",
  "reactjs",
  "nextjs",
  "sqlLite",
  "firebase",
  "zustand",
  "redux",
  "vite",
  "npm",
  "vercel",
];

const learn = ["python", "supabase", "astro"];

const About = () => {
  return (
    <div className={styles.about} id="about">
      <SectionHead title="Sobre mi">
        <span>
          En esta sección sabrás un poco de mí, mis skills y algo de mi historia{" "}
          <strong>por si la quieres conocer.</strong> Combino diseño y código
          para <strong>crear soluciones funcionales y con personalidad.</strong>{" "}
          Cada paso en mi camino{" "}
          <strong>ha sido una lección de aprendizaje</strong>
        </span>
      </SectionHead>
      <div className={styles.container}>
        <ListSkills />
        <div className={styles.containerTools}>
          <div className={styles.tools}>
            <img src="/señalando.png" alt="x" className={styles.img} />
            <h3 className={styles.workTag1}>Habilidades</h3>
            <ToolsList tools={tools} size="small" animateOnScroll />
            <h3 className={styles.workTag2}>
              Aprediendo
              <span className={styles.tag}>Learn</span>
            </h3>
            <ToolsList tools={learn} size="small" animateOnScroll />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
