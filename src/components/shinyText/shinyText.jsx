import styles from "./shinyText.module.css";

const ShinyText = ({ text, disabled = false, speed = 4, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <h3
      className={`${styles.shinyText} ${
        disabled ? styles.disabled : ""
      } ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </h3>
  );
};

export default ShinyText;
