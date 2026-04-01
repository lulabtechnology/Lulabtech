"use client";

import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/button";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { useSiteLanguage } from "@/components/providers/site-language";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  quoteHref: string;
};

export function MobileMenu({ quoteHref }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const { copy } = useSiteLanguage();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-900 shadow-soft transition hover:bg-slate-50"
        aria-label={copy.navigation.menuAria}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        className={cn(
          "absolute left-0 top-[calc(100%+12px)] w-full rounded-[28px] border border-slate-200 bg-white/95 p-4 shadow-elevated backdrop-blur-xl transition-all duration-300",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="mb-4 flex items-start justify-between gap-3 rounded-[24px] border border-brand-100 bg-gradient-to-br from-brand-50 to-accent-50 p-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              {copy.mobileMenu.title}
            </p>
            <p className="mt-2 max-w-[17rem] text-sm leading-6 text-ink-700">
              {copy.mobileMenu.description}
            </p>
          </div>

          <LanguageToggle compact className="shrink-0" />
        </div>

        <nav className="flex flex-col gap-2">
          {copy.navigation.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-ink-700 transition hover:bg-slate-50 hover:text-ink-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-4 grid gap-3">
          <ButtonLink href={quoteHref} className="w-full" onClick={() => setOpen(false)}>
            {copy.navigation.quote}
          </ButtonLink>

          <ButtonLink
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            <MessageCircle className="h-4 w-4" />
            {copy.navigation.whatsapp}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
