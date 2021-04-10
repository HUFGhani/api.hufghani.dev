import { gql, GraphQLClient } from 'graphql-request'

const endpoint = 'https://api.github.com/graphql'
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.API_KEY}`,
  },
})

export class GithubService {
  async getGitHubContributions(): Promise<object> {
    const query = gql`
      query GITHUB_CONTRIBUTIONS_QUERY {
        viewer {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                  weekday
                }
              }
            }
          }
        }
      }
    `
    const res = await graphQLClient.request(query)
    return res.viewer.contributionsCollection.contributionCalendar
  }

  async getGitHubRepositories(): Promise<object> {
    const query = gql`
      query GITHUB_TOP_LANGUAGES_QUERY {
        viewer {
          repositories(
            last: 100
            isFork: false
            orderBy: { field: UPDATED_AT, direction: ASC }
          ) {
            nodes {
              name
              description
              url
              updatedAt
              languages(first: 5) {
                nodes {
                  color
                  name
                }
              }
            }
          }
        }
      }
    `
    const res = await graphQLClient.request(query)
    return res.viewer
  }
}
