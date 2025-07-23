"use client";

import Hero from "@/presentation/components/sections/Hero";
import SkillsCarousel from "@/presentation/components/sections/SkillsCarousel";
import FeaturedSites from "@/presentation/components/sections/FeaturedSites";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SkillsCarousel />
      <FeaturedSites />
    </main>
  );
}
