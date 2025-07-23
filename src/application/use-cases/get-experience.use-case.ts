import { Experience } from "@/domain/models/experience";

export const getExperienceList = (t: (key: string) => string): Experience[] => [
  {
    company: "Minu",
    role: "Backend Engineer",
    date: "June 2025 - July 2025",
    description: t("minu-description"),
  },
  {
    company: "Macropay",
    role: "Backend Developer",
    date: "May 2024 - June 2025",
    description: t("macropay-description"),
  },
  {
    company: "BlackSpot",
    role: "FullStack Developer",
    date: "March 2023 - May 2024",
    description: t("blackspot-description"),
  },
  {
    company: "Freelancer",
    role: "FullStack Developer",
    date: t("freelancer-date"),
    description: t("freelancer-description"),
  },
];
