"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getGithubRepos } from "@/application/use-cases/get-github-repos.use-case";
import { GithubRepo } from "@/domain/models/github-repo";

interface Props {
  fullList?: boolean;
}

export default function GithubRepos({ fullList = false }: Props) {
  const { t } = useTranslation();
  const [repos, setRepos] = useState<GithubRepo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getGithubRepos(fullList)
      .then(setRepos)
      .catch(() => setError(true));
  }, [fullList]);

  if (error) return <div>{t("errorFetchingRepos")}</div>;
  if (!repos) return <div>{t("loading")}</div>;
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
                {t("view-on-github")}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
