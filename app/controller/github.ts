import { Context } from 'aws-lambda'
import { GithubService } from '../service/githubService'
import { MessageUtil } from '../utils/message'

const githubService = new GithubService()
const messageUtil = new MessageUtil()

export class GithubController {
  async githubData(event: any, _context: Context): Promise<any> {
    const { GitHubContributions, GitHubRepositories } = event

    if (GitHubContributions) {
      return messageUtil.success(await githubService.getGitHubContributions())
    }

    if (GitHubRepositories) {
      return messageUtil.success(await githubService.getGitHubRepositories())
    }
    return messageUtil.failure({})
  }
}
