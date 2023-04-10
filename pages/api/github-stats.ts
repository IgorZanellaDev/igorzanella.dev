import { NextApiRequest, NextApiResponse } from "next";
import { gql, GraphQLClient } from "graphql-request";
import { GithubStatsApi, GithubStatsGQLApi } from "types/github";
import { GITHUB_ENDPOINT } from "constants/api";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<GithubStatsApi>
) => {
  const graphQLClient = new GraphQLClient(GITHUB_ENDPOINT, {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
    },
  });

  const data = await graphQLClient.request<GithubStatsGQLApi>(
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
          starredRepositories {
            totalCount
          }
          topRepositories(
            orderBy: { direction: ASC, field: NAME }
            first: 100
          ) {
            nodes {
              name
            }
          }
        }
      }
    `
  );

  res.status(200).json({
    first_year:
      data?.user.contributionsCollection.contributionYears[
        data?.user.contributionsCollection.contributionYears.length - 1
      ],
    starred_repos: data?.user.starredRepositories.totalCount,
    top_repo: data?.user.topRepositories.nodes[0].name,
    total_contributions:
      data?.user.contributionsCollection.contributionCalendar
        .totalContributions,
    total_repositories:
      data?.user.contributionsCollection
        .totalRepositoriesWithContributedCommits,
  });
};
