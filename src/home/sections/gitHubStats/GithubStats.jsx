import React from "react";
import { useGitHubStats } from "@/hooks/useGitHubStats";
import GitHubStatsCounter from "@/components/gitHubStatsCounter/GitHubStatsCounter";

const GitHubStats = () => {
    const token = import.meta.env.VITE_ACCESS_TOKEN;
    const { stats, loading, error } = useGitHubStats("stivcode21", token);

    if (loading) return <p>Loading stats...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section>
            <GitHubStatsCounter stats={stats} />
        </section>
    );
};

export default GitHubStats;