import React from "react";
import { useGitHubStats } from "@/hooks/useGitHubStats";
import GitHubStatsCounter from "@/components/gitHubStatsCunter/GitHubStatsCounter";

const GitHubStats = () => {
    const token = process.env.ACCESS_TOKEN;
    const { stats, loading, error } = useGitHubStats("stivcode21", token);

    if (loading) return <p>Loading stats...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section>
            <h2>GitHub Statistics</h2>
            <GitHubStatsCounter stats={stats} />
        </section>
    );
};

export default GitHubStats;