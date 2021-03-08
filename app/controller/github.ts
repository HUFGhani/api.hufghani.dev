import { Context } from 'aws-lambda'
import { GithubService } from '../service/githubService'
import { MessageUtil } from '../utils/message'

const githubService = new GithubService()
const messageUtil = new MessageUtil()

export class GithubController {
  async ProjectRepos(_event: any, _context: Context): Promise<any> {
    return messageUtil.success(await githubService.getProjectReposData())
  }
}
