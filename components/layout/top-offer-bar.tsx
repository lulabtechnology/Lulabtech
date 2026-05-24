"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";

export function TopOfferBar() {
  return (
    <div className="relative z-[60] border-b border-brand-100 bg-gradient-to-r from-brand-700 via-brand-600 to-accent-600 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-2.5 text-center text-sm font-semibold sm:flex-row sm:gap-4 sm:px-6 lg:px-8">
        <span>Páginas web desde $149 · Dominio y correo gratis por 1 año</span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent("click_whatsapp_top_banner")}
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-700 shadow-soft transition hover:bg-white/90"
        >
          <MessageCircle className="h-4 w-4" />
          Cotizar por WhatsApp
        </a>
      </div>
    </div>
  );
}
