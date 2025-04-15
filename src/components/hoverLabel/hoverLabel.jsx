import React, { useState, useEffect, useRef } from "react";
import styles from "./hoverLabel.module.css";

const HoverLabel = ({
    children,
    label,
    caption,
    position = "top",
    size = "normal",
}) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const tooltipRef = useRef(null);

    useEffect(() => {
        if (showTooltip && caption && tooltipRef.current) {
            const rect = tooltipRef.current.getBoundingClientRect();
            const container = tooltipRef.current.parentElement;

            if (container) {
                const containerRect = container.getBoundingClientRect();
                setIsOverflowing(rect.right > containerRect.right);
            } else {
                setIsOverflowing(false);
            }
        } else {
            setIsOverflowing(false);
        }
    }, [showTooltip, caption]);

    return label ? (
        <div
            style={{ position: "relative", display: "inline-block" }}
            onMouseEnter={() => setShowTooltip(true)} // Mostrar tooltip en hover
            onMouseLeave={() => setShowTooltip(false)}>
            <div
                ref={tooltipRef}
                className={`${styles.tooltip} ${showTooltip ? styles.show : ""} ${styles[position]}
                      ${size === "minimal" ? styles.minimal : ""}
                      ${caption && styles.expanded} 
                      ${isOverflowing ? styles.overflowRight : ""}`}
                aria-hidden={!showTooltip}
            >
                {caption ? (
                    <>
                        <h3>{label}</h3>
                        <p className={styles.caption}>{caption}</p>
                    </>
                ) : (
                    label
                )}
            </div>
        </div>
    ) : (
        children
    );
};

export default HoverLabel;