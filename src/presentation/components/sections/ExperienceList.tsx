"use client"

import { useTranslation } from "react-i18next";
import { getExperienceList } from "@/application/use-cases/get-experience.use-case";

export default function ExperienceList() {
  const { t } = useTranslation();
  const experience = getExperienceList(t);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{t("experience-title")}</h1>
      <div className="space-y-4">
        {experience.map((exp, i) => (
          <div key={i} className="bg-card p-4 rounded-xl shadow border">
            <h3 className="text-xl font-semibold">{exp.company}</h3>
            <p className="text-sm text-muted-foreground">{exp.role} · {exp.date}</p>
            <p className="text-sm mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
