import { gql, GraphQLClient } from 'graphql-request'

const endpoint = 'https://api.github.com/graphql'
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.API_KEY}`,
  },
})

export class GithubService {
  async getProjectReposData(): Promise<object> {
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
    return await graphQLClient.request(query)
  }
}
