import styles from "./SocialButton.module.css";
import { dataBtnIcons } from "@/data/dataBtnIcons";
import HoverLabel from "../hoverLabel/HoverLabel";
import { handleScroll } from "@/hooks/handleScroll";

export default function SocialButton({
  iconName,
  type = "primary",
  handleClick,
  position = "bottom",
}) {
  const social = dataBtnIcons.find((item) => item.title === iconName);
  return (
    <HoverLabel label={social.label} position={position}>
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
        <button
          onClick={() => handleScroll("contact")}
          className={`${styles.link} ${
            type === "secondary" ? styles.secondary : ""
          }`}
        >
          {social.svg}
        </button>
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
    </HoverLabel>
  );
}
