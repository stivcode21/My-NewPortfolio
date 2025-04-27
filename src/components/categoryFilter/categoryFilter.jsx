import React, { useEffect, useRef } from "react";
import styles from "./CategoryFilter.module.css";

export default function CategoryFilter({
  controls,
  selectedCategory,
  setSelectedCategory,
  ifExists,
}) {
  // Referencia al elemento que actúa como resaltado dinámico
  const highlightRef = useRef(null);

  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
  };

  // Actualiza la posición y el tamaño del resaltado dinámico
  useEffect(() => {
    // Encuentra el elemento actual basado en la categoría seleccionada
    const currentElement = document.querySelector(
      `input[name="filter-${
        ifExists ? "other" : "default"
      }"][value="${selectedCategory}"]`
    )?.parentElement;

    // Si el elemento actual y el resaltado dinámico existen, ajusta su posición y tamaño
    if (currentElement && highlightRef.current) {
      const { offsetWidth, offsetLeft } = currentElement;

      highlightRef.current.style.width = `${offsetWidth}px`;
      highlightRef.current.style.transform = `translateX(${offsetLeft}px)`;
    }
  }, [selectedCategory, ifExists]); // Ejecuta el efecto cuando cambian `selectedCategory` o `ifExists`

  return (
    <div
      className={`${styles.filters} ${ifExists ? styles.otherFilters : ""}`}
      role="radiogroup"
    >
      {/* Resaltado dinámico */}
      <div
        ref={highlightRef}
        className={`${styles.highlight} ${
          ifExists ? styles.highlightOther : ""
        }`}
      >
        <div className={styles.glow}></div>
      </div>

      {/* Renderiza los controles */}
      {Object.entries(controls).map(([key, value], index) => (
        <React.Fragment key={key}>
          <label
            className={`${styles.label} ${ifExists ? styles.otherLabel : ""} ${
              selectedCategory === Number(key) ? styles.active : ""
            }`}
          >
            <input
              type="radio"
              name={`filter-${ifExists ? "other" : "default"}`}
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
