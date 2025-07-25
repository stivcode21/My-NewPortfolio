import { motion } from "framer-motion";
import styles from "./ToolsBox.module.css";
import IconTool from "@/components/molecules/iconTool/IconTool";
import { useTranslation } from "react-i18next";

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

const ToolsBox = () => {
  const { t } = useTranslation("about");
  const animateOnScroll = true;

  return (
    <div className={styles.containerTools}>
      <div className={styles.tools}>
        <img src="/señalando.png" alt="x" className={styles.img} />
        <h3 className={styles.workTag1}>{t("aboutMe.skills")}</h3>
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
          {t("aboutMe.learning")}
          <div className={styles.circle}></div>
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
  );
};

export default ToolsBox;
