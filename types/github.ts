export interface GithubStatsApi {
  first_year: number;
  starred_repos: number;
  total_contributions: number;
  total_repositories: number;
  top_repo: string;
}

export interface GithubStatsGQLApi {
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
    starredRepositories: {
      totalCount: number;
    };
    topRepositories: {
      nodes: {
        name: string;
      }[];
    };
  };
}
