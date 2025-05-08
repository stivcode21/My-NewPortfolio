import styles from "./ButtonBorder.module.css";

const ButtonBorder = ({
  className = "",
  color = "white",
  speed = "6s",
  children,
  disabled,
  ...rest
}) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.borderContainer} ${className}`}
      {...rest}
    >
      <div
        className={styles.borderGradientBottom}
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className={styles.borderGradientTop}
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className={styles.innerContent}>{children}</div>
    </button>
  );
};

export default ButtonBorder;
