import React, { useEffect, useState } from "react";
import styles from "./GitHubStatsCounter.module.css";

const GitHubStatsCounter = ({ stats }) => {
    const [counts, setCounts] = useState({
        publicRepos: 0,
        followers: 0,
        totalCommits: 0,
        starsReceived: 0, // Nueva métrica
    });

    useEffect(() => {
        const animateCount = (key, targetValue) => {
            let currentCount = 0;
            const increment = Math.ceil(targetValue / 100);
            const interval = setInterval(() => {
                currentCount += increment;
                if (currentCount >= targetValue) {
                    currentCount = targetValue;
                    clearInterval(interval);
                }
                setCounts((prevCounts) => ({
                    ...prevCounts,
                    [key]: currentCount,
                }));
            }, 20);
        };

        Object.keys(stats).forEach((key) => animateCount(key, stats[key]));
    }, [stats]);

    return (
        <div className={styles.statsContainer}>
            <div className={styles.stat}>
                <p className={styles.statNumber}>{counts.publicRepos}</p>
                <p className={styles.statLabel}>Repositorios Publicos</p>
            </div>
            <div className={styles.stat}>
                <p className={styles.statNumber}>{counts.starsReceived}</p>
                <p className={styles.statLabel}>Estrellas Recibidas</p>
            </div>
            <div className={styles.stat}>
                <p className={styles.statNumber}>{counts.followers}</p>
                <p className={styles.statLabel}>Seguidores</p>
            </div>
            <div className={styles.stat}>
                <p className={styles.statNumber}>{counts.totalCommits}</p>
                <p className={styles.statLabel}>Commits Totales</p>
            </div>
        </div>
    );
};

export default GitHubStatsCounter;