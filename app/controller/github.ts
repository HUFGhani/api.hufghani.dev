import { Context } from 'aws-lambda'
import { GithubService } from '../service/githubService'

const githubService = new GithubService()

export class GithubController {
  async ProjectRepos(_event: any, _context: Context): Promise<any> {
    return await githubService.getProjectReposData()
  }
}
