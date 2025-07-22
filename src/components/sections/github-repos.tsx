"use client";

import useSWR from "swr";
import { useTranslation } from "react-i18next";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function GithubRepos({ fullList = false }) {
  const { t } = useTranslation();
  const { data, error } = useSWR("https://api.github.com/users/danymorar20/repos", fetcher);

  if (error) return <div>Error loading repos</div>;
  if (!data) return <div>Loading...</div>;
console.log("fetched data", data)
  const repos = fullList ? data : data.slice(0, 3);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{t("projectsTitle")}</h1>
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4"> {t("projectsGithub")} </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {repos.map((repo) => (
            <div key={repo.id} className="p-4 rounded-xl border bg-card">
              <h3 className="text-xl font-semibold">{repo.name}</h3>
              <p className="text-sm text-muted-foreground">{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
