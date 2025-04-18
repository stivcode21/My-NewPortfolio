import React from "react";
import { useGitHubStats } from "@/hooks/useGitHubStats";
import GitHubStatsCounter from "@/components/gitHubStatsCounter/GitHubStatsCounter";
import styles from "./GitHubStats.module.css";

const GitHubStats = () => {
    const token = import.meta.env.VITE_ACCESS_TOKEN;
    const { stats, loading, error } = useGitHubStats("stivcode21", token);

    if (loading) return (
        <div className={styles.containerLoader}>
            <span className={styles.loader}></span>
        </div>
    )
    if (error) return <p>Error: {error}</p>;

    return (
        <section>
            <GitHubStatsCounter stats={stats} />
        </section>
    );
};

export default GitHubStats;