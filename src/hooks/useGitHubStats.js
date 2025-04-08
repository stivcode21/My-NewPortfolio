import { useEffect, useState } from "react";

export const useGitHubStats = (username, token) => {
  const [stats, setStats] = useState({
    publicRepos: 0,
    followers: 0,
    totalCommits: 0,
    starsReceived: 0, // Nueva métrica
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const query = `
          query($username: String!) {
            user(login: $username) {
              publicRepos: repositories(privacy: PUBLIC) {
                totalCount
              }
              followers {
                totalCount
              }
              repositories(first: 100, isFork: false) {
                nodes {
                  stargazers {
                    totalCount
                  }
                  defaultBranchRef {
                    target {
                      ... on Commit {
                        history(first: 0) {
                          totalCount
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `;

        const variables = { username };

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ query, variables }),
        });

        const { data, errors } = await response.json();

        if (errors) throw new Error(errors[0].message);

        const { publicRepos, followers, repositories } = data.user;

        // Calcular commits y estrellas
        let totalCommits = 0;
        let starsReceived = 0;
        repositories.nodes.forEach((repo) => {
          totalCommits +=
            repo.defaultBranchRef?.target?.history?.totalCount || 0;
          starsReceived += repo.stargazers.totalCount || 0;
        });

        setStats({
          publicRepos: publicRepos.totalCount,
          followers: followers.totalCount,
          totalCommits,
          starsReceived,
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
