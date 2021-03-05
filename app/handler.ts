import { Context } from 'aws-lambda'
import { GithubController } from './controller/github'

const githubController = new GithubController()
export async function githubProjectRepos(event: any, context: Context) {
  const result = await githubController.ProjectRepos(event, context)
  return {
    statusCode: 200,
    body: JSON.stringify({
      code: 0,
      message: 'success',
      data: result,
    }),
  }
}
