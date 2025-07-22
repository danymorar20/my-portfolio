"use client";

import Hero from "@/components/sections/hero";
import SkillsCarousel from "@/components/sections/skills-carousel";
import FeaturedSites from "@/components/sections/featured-sites";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SkillsCarousel />
      <FeaturedSites />
    </main>
  );
}
