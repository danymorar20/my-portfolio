import { fetchGithubRepos } from "@/infrastructure/github/github.service";
import { GithubRepo } from "@/domain/models/github-repo";

export async function getGithubRepos(fullList = false): Promise<GithubRepo[]> {
  const repos = await fetchGithubRepos("danymorar20");
  return fullList ? repos : repos.slice(0, 3);
}
