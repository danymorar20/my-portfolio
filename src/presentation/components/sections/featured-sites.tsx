"use client";

import { getFeaturedSites } from "@/application/use-cases/get-featured-sites.use-case";
import { FeaturedSite } from "@/domain/models/featured-site";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function FeaturedSites() {
  const { t } = useTranslation();
  const [sites, setSites] = useState<FeaturedSite[]>([]);

  useEffect(() => {
    getFeaturedSites()
      .then(setSites);
  }, []);

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-6">{t("work-title")}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {sites.map(({ title, descriptionKey, image, url }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group bg-card rounded-xl overflow-hidden shadow border transition transform hover:scale-[1.02] hover:border-primary"
          >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">{t(descriptionKey)}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
