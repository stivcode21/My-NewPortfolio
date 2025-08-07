import styles from "./Tag.module.css";

export default function Tag({ tag, index }) {
  const main = tag === "MAIN-PROJECT" ? true : false;

  return (
    <li key={index} className={`${styles.tag} ${main && styles.main}`}>
      {tag}
    </li>
  );
}
