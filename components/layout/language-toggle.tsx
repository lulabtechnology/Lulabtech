"use client";

import { Languages } from "lucide-react";
import { useSiteLanguage } from "@/components/providers/site-language";
import { cn } from "@/lib/utils";

type LanguageToggleProps = {
  compact?: boolean;
  className?: string;
};

export function LanguageToggle({ compact = false, className }: LanguageToggleProps) {
  const { locale, setLocale } = useSiteLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-soft",
        compact && "bg-slate-50/90",
        className
      )}
      aria-label="Language selector"
    >
      <span className="hidden pl-2 text-ink-500 sm:inline-flex">
        <Languages className="h-4 w-4" />
      </span>

      {([
        ["es", "ES"],
        ["en", "EN"]
      ] as const).map(([value, label]) => {
        const active = locale === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setLocale(value)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition",
              active
                ? "bg-brand-600 text-white shadow-[0_10px_24px_rgba(14,118,255,0.25)]"
                : "text-ink-600 hover:bg-slate-100 hover:text-ink-900"
            )}
            aria-pressed={active}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
