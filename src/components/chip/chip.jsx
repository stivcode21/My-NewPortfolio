import styles from "./Chip.module.css";

export default function Chip({ tag, index }) {
  return (
    <li key={index} className={styles.chip}>
      {tag}
    </li>
  );
}
