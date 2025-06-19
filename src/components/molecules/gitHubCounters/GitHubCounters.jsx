import { useEffect, useState } from "react";
import styles from "./GitHubCounters.module.css";
import { useTranslation } from "react-i18next";

const GitHubCounters = ({ stats }) => {
  const { t } = useTranslation("global");

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
        <p className={styles.statLabel}>{t("github.repositories")}</p>
      </div>
      <div className={styles.stat}>
        <p className={styles.statNumber}>{counts.starsReceived}</p>
        <p className={styles.statLabel}>{t("github.stars")}</p>
      </div>
      <div className={styles.stat}>
        <p className={styles.statNumber}>{counts.followers}</p>
        <p className={styles.statLabel}>{t("github.followers")}</p>
      </div>
      <div className={styles.stat}>
        <p className={styles.statNumber}>{counts.totalCommits}</p>
        <p className={styles.statLabel}>{t("github.commits")}</p>
      </div>
    </div>
  );
};

export default GitHubCounters;
