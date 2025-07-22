"use client";

import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { MdEmail, MdPhone } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const whatsappLink = `https://wa.me/529991998332?text=${encodeURIComponent(t("footer-whats-message"))}`;

  return (
    <footer className="bg-muted text-foreground mt-12 py-8 px-4 border-t">
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 text-sm">
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">{t("contact-info")}</h4>
          <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-110 cursor-pointer">
            <MdPhone className="text-primary" /> +52 9991998332
          </div>
          <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-110 cursor-pointer">
            <MdEmail className="text-primary" /> danymorar20@gmail.com
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">{t("online-profiles")}</h4>
          <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-110 cursor-pointer">
            <SiLinkedin className="text-primary" />
            <a href="https://www.linkedin.com/in/dev-daniel-mora" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-110 cursor-pointer">
            <SiGithub className="text-primary" />
            <a href="https://github.com/danymorar20" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-110 cursor-pointer">
            <SiWhatsapp className="text-primary" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground mt-8">
        © 2025 | {t("developed-by")}
      </div>
    </footer>
  );
}
