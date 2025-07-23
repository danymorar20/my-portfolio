import { GithubRepo } from "@/domain/models/github-repo";

export async function fetchGithubRepos(
  username: string
): Promise<GithubRepo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!res.ok) {
    throw new Error("Failed to fetch GitHub repos");
  }
  return res.json();
}
