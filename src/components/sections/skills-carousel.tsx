"use client";

import Marquee from "react-fast-marquee";
import { skills } from "@/data/skills";
import { useTranslation } from "react-i18next";

export default function SkillsCarousel() {
  const { t } = useTranslation();
  return (
    <section className="py-10 bg-muted">
      <h2 className="text-2xl font-bold text-center mb-10">{t("skills-title")}</h2>
      <Marquee gradient={false} speed={50} pauseOnHover>
        {skills.map((skill) => (
          <div key={skill.name} className="mx-4 flex flex-col items-center">
            <skill.icon className="text-4xl mb-2" />
            <div>{skill.name}</div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
