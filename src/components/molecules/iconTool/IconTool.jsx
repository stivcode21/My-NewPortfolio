import styles from "./IconTool.module.css";
import { dataTools } from "@/data/dataTools";
import HoverTag from "@/components/atoms/hoverTag/HoverTag";

const IconTool = ({ tools, size = "large", position }) => {
  return (
    <>
      {tools.map((toolName, index) => {
        const tool = dataTools[toolName];
        if (!tool) return null;
        return (
          <div className={styles.container} key={index}>
            <HoverTag
              label={tool.title}
              caption={tool.caption}
              size="small"
              position={position}
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
    </>
  );
};

export default IconTool;
