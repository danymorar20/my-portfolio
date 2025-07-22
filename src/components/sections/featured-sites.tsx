"use client";

import { useTranslation } from "react-i18next";

export default function FeaturedSites() {
  const { t } = useTranslation();
  const featuredSites = [
    {
      title: "Facturación Macropay",
      description: t("portal-facturacion-description"),
      image: "/factura-macropay.webp",
      url: "https://facturaclientes.macropay.mx/",
    },
    {
      title: "Myo vector",
      description: t("myovector-description"),
      image: "/myovector.webp",
      url: "https://myovector.com/",
    },
    {
      title: "ActionCoach",
      description: t("actioncoach-description"),
      image: "/action.webp",
      url: "https://www.actioncoachsbp.com/",
    },
    {
      title: "Minu",
      description: t("minu-app-description"),
      image: "/minu.webp",
      url: "https://www.minu.mx/",
    },
    {
      title: "Cambiate a telcel / Celex",
      description: t("celex-description"),
      image: "/celex.webp",
      url: "https://www.cambiateatelcel.com/",
    },
    {
      title: "Casa Santos Lugo",
      description: t("santos-lugo-description"),
      image: "/santos-lugo.webp",
      url: "https://www.santoslugo.com.mx/",
    },
  ];
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-6">{t("work-title")}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {featuredSites.map((site, i) => (
          <a
            key={i}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group bg-card rounded-xl overflow-hidden shadow border transition transform hover:scale-[1.02] hover:border-primary"
          >
            <img src={site.image} alt={site.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {site.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">{site.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
