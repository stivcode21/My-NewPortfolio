import React from "react";
import styles from "./toolsList.module.css";
import { dataTools } from "@/data/dataTools";
import { motion } from "framer-motion";
import HoverLabel from "../hoverLabel/hoverLabel";

export default function ToolsList({
  tools,
  size = "large",
  animateOnScroll = false,
}) {
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
              <HoverLabel
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
                  {tool.logo}
                </li>
              </HoverLabel>
            </div>
          );
        })}
      </motion.ul>
    </section>
  );
}
