import styles from "./ToolGrid.module.css";
import { dataTools } from "@/data/dataTools";
import { motion } from "framer-motion";
import HoverTag from "../hoverTag/HoverTag";

const ToolGrid = ({ tools, size = "large", animateOnScroll = false }) => {
  return (
    <section className={styles.tools}>
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
        {tools.map((toolName, index) => {
          const tool = dataTools[toolName];
          if (!tool) return null;
          return (
            <div className={styles.container} key={index}>
              <HoverTag
                label={tool.title}
                caption={tool.caption}
                size="small"
                position="left"
              >
                <li
                  className={`${styles.toolItem} ${
                    size === "small" ? styles.small : styles.large
                  }`}
                >
                  <img src={tool.logo} role="icon" alt={`svgSkill-${index}`} />
                </li>
              </HoverTag>
            </div>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default ToolGrid;
