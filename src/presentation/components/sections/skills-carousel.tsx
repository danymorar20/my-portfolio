"use client";

import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { skills } from "@/infrastructure/data/skills";
import SkillItem from "./skillItem";

export default function SkillsCarousel() {
  const { t } = useTranslation();

  return (
    <section className="py-10 bg-muted">
      <h2 className="text-2xl font-bold text-center mb-10">{t("skills-title")}</h2>
      <Marquee gradient={false} speed={50} pauseOnHover>
        {skills.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} Icon={skill.icon} />
        ))}
      </Marquee>
    </section>
  );
}
