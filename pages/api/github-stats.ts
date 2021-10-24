import { NextApiRequest, NextApiResponse } from "next";
import { gql, GraphQLClient } from "graphql-request";

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

export default async (
  req: NextApiRequest,
  res: NextApiResponse<GithubStatsApi>
) => {
  const endpoint = "https://api.github.com/graphql";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
    },
  });

  const data = await graphQLClient.request(
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

  res.status(200).json(data);
};
