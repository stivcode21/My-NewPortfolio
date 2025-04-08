import { useEffect, useState } from "react";

export const useGitHubStats = (username, token) => {
  const [stats, setStats] = useState({
    publicRepos: 0,
    followers: 0,
    totalCommits: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const headers = token ? { Authorization: `token ${token}` } : undefined;

        const userResponse = await fetch(
          `https://api.github.com/users/${username}`,
          { headers }
        );
        const userData = await userResponse.json();

        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=10&sort=updated`,
          { headers }
        );
        const repos = await reposResponse.json();

        let totalCommits = 0;
        for (const repo of repos) {
          const commitsResponse = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`,
            { headers }
          );
          const commits = await commitsResponse.json();
          totalCommits += commits.length;
        }

        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          totalCommits,
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStats();
  }, [username, token]);

  return { stats, loading, error };
};
