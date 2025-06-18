import { useGitHubStats } from "@/hooks/useGitHubStats";
import styles from "./GitHubOverview.module.css";
import GitHubCounters from "../../gitHubCounters/GitHubCounters";

const GitHubOverview = () => {
  const token = import.meta.env.VITE_ACCESS_TOKEN;
  const { stats, loading, error } = useGitHubStats("stivcode21", token);

  if (loading)
    return (
      <div className={styles.containerLoader}>
        <span className={styles.loader}></span>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <GitHubCounters stats={stats} />
    </section>
  );
};

export default GitHubOverview;
