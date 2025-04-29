import React, { useState } from "react";
import styles from "./autoScrolling.module.css";
import { AllDataEducation, row1, row2 } from "../../data/dataEducation";
import { useNavigate } from "react-router-dom";

function AutoScrolling() {
  const [pausedRows, setPausedRows] = useState({ row1: false, row2: false });

  const navigate = useNavigate();

  const handleMouseEnter = (row) => {
    setPausedRows((prev) => ({ ...prev, [row]: true }));
  };

  const handleMouseLeave = (row) => {
    setPausedRows((prev) => ({ ...prev, [row]: false }));
  };

  const handleClick = (id) => {
    navigate(`/education/${id}`);
  };

  const renderRow = (row, rowKey, isReversed = false) => (
    <div
      className={`${styles.marqueeGroup} ${isReversed ? styles.reverse : ""} ${
        pausedRows[rowKey] ? styles.paused : ""
      }`}
    >
      {row.map(({ path, id }, i) => (
        <div key={i} className={styles.imageGroup}>
          <img
            className={styles.image}
            src={path}
            alt={`${rowKey}-${i}`}
            onMouseEnter={() => handleMouseEnter(rowKey)}
            onMouseLeave={() => handleMouseLeave(rowKey)}
            onClick={() => handleClick(id)}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.appContainer}>
      <div className={styles.wrapper}>
        <div className={styles.marquee}>
          {renderRow(row1, "row1")}
          {renderRow(row1, "row1")}
        </div>
        <div className={styles.marquee}>
          {renderRow(row2, "row2", true)}
          {renderRow(row2, "row2", true)}
        </div>
      </div>
    </div>
  );
}

export default AutoScrolling;
