import styles from "./NetworkButton.module.css";
import { dataBtnIcons } from "@/data/dataBtnIcons";
import HoverTag from "@/components/atoms/hoverTag/HoverTag";
import { handleScroll } from "@/hooks/handleScroll";

const NetworkButton = ({
  iconName,
  type = "primary",
  handleClick,
  position = "bottom",
}) => {
  const social = dataBtnIcons.find((item) => item.title === iconName);
  return (
    <HoverTag label={social.label} position={position}>
      {iconName === "share" ? (
        <button
          className={`${styles.button} ${styles.link} ${
            type === "secondary" ? styles.secondary : ""
          }`}
          onClick={handleClick}
          aria-label={social.iconName}
        >
          {social.svg}
        </button>
      ) : iconName === "email" ? (
        <a
          onClick={() => handleScroll("contact")}
          className={`${styles.link} ${
            type === "secondary" ? styles.secondary : ""
          }`}
        >
          {social.svg}
        </a>
      ) : (
        <a
          className={`${styles.link} ${
            type === "secondary" ? styles.secondary : ""
          }`}
          href={social.url}
          rel="noreferrer"
          target={social.title !== "email" ? "_blank" : undefined}
          aria-label={social.label}
        >
          {social.svg}
        </a>
      )}
    </HoverTag>
  );
};

export default NetworkButton;
