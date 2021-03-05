import { Context, Handler } from 'aws-lambda'
import { GithubController } from './controller/github'

const githubController = new GithubController()
export const githubProjectRepos: Handler = (event: any, context: Context) => {
  return githubController.ProjectRepos(event, context)
}
