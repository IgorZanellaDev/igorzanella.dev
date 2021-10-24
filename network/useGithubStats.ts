import { useQuery } from "react-query";
import { GithubStatsApi } from "types/github";
import axios from "axios";

const GITHUB_STATS_KEY = "github-stats";

const getGithubStats = async () => {
  const { data } = await axios.get<GithubStatsApi>("/api/github-stats");
  return data;
};

const useGithubStats = () => {
  return useQuery<GithubStatsApi>(GITHUB_STATS_KEY, getGithubStats, {
    staleTime: Infinity,
  });
};

export { useGithubStats, getGithubStats, GITHUB_STATS_KEY };
