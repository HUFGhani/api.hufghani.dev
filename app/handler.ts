import { Context, Handler } from 'aws-lambda'
import { GithubController } from './controller/github'

const githubController = new GithubController()

export const github: Handler = async (event: any, context: Context) => {
  return await githubController.githubData(event, context)
}
