import styles from "./About.module.css";
import BlockHeader from "@/components/blockHeader/BlockHeader";
import MySkills from "@/components/mySkills/MySkills";
import { motion } from "framer-motion";
import IconTool from "@/components/iconTool/IconTool";

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
  const animateOnScroll = true;
  return (
    <div className={styles.about} id="about">
      <BlockHeader title="Sobre mi">
        <span>
          En esta sección sabrás un poco de mí, mis skills y algo de mi historia{" "}
          <strong>por si la quieres conocer.</strong> Combino diseño y código
          para <strong>crear soluciones funcionales y con personalidad.</strong>{" "}
          Cada paso en mi camino{" "}
          <strong>ha sido una lección de aprendizaje</strong>
        </span>
      </BlockHeader>
      <div className={styles.container}>
        <MySkills />
        <div className={styles.containerTools}>
          <div className={styles.tools}>
            <img src="/señalando.png" alt="x" className={styles.img} />
            <h3 className={styles.workTag1}>Habilidades</h3>
            <div className={styles.box}>
              <motion.ul
                {...(animateOnScroll && {
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: {
                    duration: 0.25,
                    ease: [0.215, 0.61, 0.355, 1],
                  },
                  viewport: { once: true, amount: 0.3 },
                })}
              >
                <IconTool tools={tools} size="small" />
              </motion.ul>
            </div>
            <h3 className={styles.workTag2}>
              Aprediendo
              <span className={styles.tag}>Learn</span>
            </h3>
            <div className={styles.box}>
              <motion.ul
                {...(animateOnScroll && {
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: {
                    duration: 0.25,
                    ease: [0.215, 0.61, 0.355, 1],
                  },
                  viewport: { once: true, amount: 0.3 },
                })}
              >
                <IconTool tools={learn} size="small" />
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
