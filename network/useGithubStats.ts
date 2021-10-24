import { gql, GraphQLClient } from "graphql-request";
import { useQuery } from "react-query";
import { GITHUB_API_TOKEN } from "constants/github";

const GITHUB_STATS_KEY = "github-stats";

const endpoint = "https://api.github.com/graphql";

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${GITHUB_API_TOKEN}`,
  },
});

interface GithubStatsApi {
  user: {
    contributionsCollection: {
      totalRepositoriesWithContributedCommits: number;
      contributionCalendar: {
        totalContributions: number;
      };
      contributionYears: number[];
    };
    repositories: {
      totalCount: number;
    };
  };
}

const getGithubStats = async () => {
  return await graphQLClient.request(
    gql`
      {
        user(login: "IgorZanellaDev") {
          contributionsCollection {
            totalRepositoriesWithContributedCommits
            contributionYears
            contributionCalendar {
              totalContributions
            }
          }
          repositories(first: 100) {
            nodes {
              name
            }
            totalCount
          }
        }
      }
    `
  );
};

const useGithubStats = () => {
  return useQuery<GithubStatsApi>(GITHUB_STATS_KEY, getGithubStats, {
    staleTime: Infinity,
  });
};

export { useGithubStats, getGithubStats, GITHUB_STATS_KEY };
