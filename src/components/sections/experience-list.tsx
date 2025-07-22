"use client"

import { useTranslation } from "react-i18next";

export default function ExperienceList() {
  const { t } = useTranslation();
  const experience = [
    {
      company: "Minu",
      role: "Backend Engineer",
      date: "June 2025 - July 2025",
      description: t("minu-description")
    },
    {
      company: "Macropay",
      role: "Backend Developer",
      date: "May 2024 - June 2025",
      description: t("macropay-description")
    },
    {
      company: "BlackSpot",
      role: "FullStack Developer",
      date: "March 2023 - May 2024",
      description: t("blackspot-description")
    },
    {
      company: "Freelancer",
      role: "FullStack Developer",
      date: t("freelancer-date"),
      description: t("freelancer-description")
    },
  ];

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
