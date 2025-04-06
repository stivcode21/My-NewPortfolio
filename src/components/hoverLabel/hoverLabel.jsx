import React from 'react'
import styles from './hoverLabel.module.css'

const HoverLabel = ({ children, label, position = "top" }) => {
    return (
        <div className={`${styles.tooltipWrapper} ${styles[position]}`}>
            {children}
            <span className={styles.tooltip}>{label}</span>
        </div>
    )
}

export default HoverLabel