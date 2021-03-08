import { Context, Handler } from 'aws-lambda'
import { GithubController } from './controller/github'

const githubController = new GithubController()

export const githubContributions: Handler = async (
  event: any,
  context: Context,
) => {
  return await githubController.getGithubContributionsData(event, context)
}

export const githubRepositories: Handler = async (
  event: any,
  context: Context,
) => {
  return await githubController.getGithubRepositoriesData(event, context)
}
