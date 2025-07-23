"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "@/i18n"

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const resumeHref = i18n.language === "es" ? "/CV_DANIEL_MORA.pdf" : "/RESUME_DANIEL_MORA.pdf";
  const isDarkMode: boolean = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-6 py-4 border-b text-foreground shadow-md h-16 ${isDarkMode ? "bg-[#181a20]" : "bg-white"
        }`}
    >
      <div className="flex gap-4 text-sm">
        <Link href="/">{i18n.language === "es" ? "Inicio" : "Home"}</Link>
        <Link href="/projects">{i18n.language === "es" ? "Proyectos" : "Projects"}</Link>
        <Link href="/experience">{i18n.language === "es" ? "Experiencia" : "Experience"}</Link>
        <a href={resumeHref} download className="underline underline-offset-2 hover:text-primary transition text-xs">
          {i18n.language === "es" ? "Descargar CV" : "Download Resume"}
        </a>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-xs border px-2 py-1 rounded"
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
        <button
          onClick={() => i18n.changeLanguage(i18n.language === "es" ? "en" : "es")}
          className="text-xs border px-2 py-1 rounded"
        >
          {i18n.language.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}
