export interface GithubStatsApi {
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
