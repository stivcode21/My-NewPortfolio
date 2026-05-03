import { ArrowRight, Clock } from "lucide-react";
import styles from "./CardBlog.module.css";

const CardBlog = ({ chapter, isActive, onActivate }) => {
  const handleClick = () => {
    if (!isActive) onActivate(chapter.id);
  };

  return (
    <article
      data-active={isActive}
      onClick={handleClick}
      className={styles.card}
      aria-expanded={isActive}
    >
      <div className={styles.media}>
        <img src={chapter.image} alt={chapter.title} loading="lazy" />
      </div>

      <div className={styles.body}>
        <span className={styles.badge}>{chapter.category}</span>
        <h2 className={styles.title}>{chapter.title}</h2>
        <p className={styles.text}>
          {isActive ? chapter.description : chapter.excerpt}
        </p>

        <div className={styles.footer}>
          <span className={styles.readTime}>
            <Clock size={14} aria-hidden="true" />
            {chapter.readTime} min{isActive ? " de lectura" : ""}
          </span>

          <button
            className={styles.cta}
            onClick={(e) => e.stopPropagation()}
            type="button"
            tabIndex={isActive ? 0 : -1}
          >
            Leer capítulo
            <ArrowRight size={16} aria-hidden="true" />
          </button>

          <span className={styles.arrow} aria-hidden="true">
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default CardBlog;
