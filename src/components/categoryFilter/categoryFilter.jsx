import React, { useEffect, useRef } from "react";
import styles from "./CategoryFilter.module.css";

export default function CategoryFilter({
  controls,
  selectedCategory,
  setSelectedCategory,
}) {
  const highlightRef = useRef(null);

  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
  };

  // Actualiza la posición y el tamaño del resaltado dinámico
  useEffect(() => {
    const currentElement = document.querySelector(
      `input[name="filter"][value="${selectedCategory}"]`
    )?.parentElement;

    if (currentElement && highlightRef.current) {
      const { offsetWidth, offsetLeft } = currentElement;

      highlightRef.current.style.width = `${offsetWidth}px`;
      highlightRef.current.style.transform = `translateX(${offsetLeft}px)`;
    }
  }, [selectedCategory]);

  return (
    <div className={styles.filters} role="radiogroup">
      <div ref={highlightRef} className={styles.highlight}></div>
      {Object.entries(controls).map(([key, value], index) => (
        <React.Fragment key={key}>
          <label
            className={`${styles.label} ${
              selectedCategory === Number(key) ? styles.active : ""
            }`}
          >
            <input
              type="radio"
              name="filter"
              value={key}
              onChange={() => handleCategoryChange(Number(key))}
            />
            {value.svg && value.svg}
            <span>{value.title}</span>
          </label>

          {/* Añade un separador entre botones, excepto el último */}
          {index < Object.entries(controls).length - 1 && (
            <span className={styles.line}></span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
