"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between p-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{t("greeting")}</h1>
        <p className="max-w-xl text-muted-foreground text-lg">
          {t("bio")}
        </p>
      </div>
      <Image
        src="/me.webp"
        alt="Daniel Mora photo"
        width={300}
        height={300}
        className="rounded-full shadow-lg w-auto h-auto"
      />
    </section>
  );
}