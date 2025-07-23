"use client";

import Hero from "@/presentation/components/sections/hero";
import SkillsCarousel from "@/presentation/components/sections/skills-carousel";
import FeaturedSites from "@/presentation/components/sections/featured-sites";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SkillsCarousel />
      <FeaturedSites />
    </main>
  );
}
