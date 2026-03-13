"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  quoteHref: string;
};

export function MobileMenu({ quoteHref }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-900 transition hover:bg-slate-50"
        aria-label="Abrir menú"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        className={cn(
          "absolute left-0 top-[calc(100%+12px)] w-full rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-elevated backdrop-blur transition-all duration-300",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-2">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-ink-700 transition hover:bg-slate-50 hover:text-ink-900"
            >
              {item.label}
            </a>
          ))}

          <div className="pt-2">
            <ButtonLink href={quoteHref} className="w-full" onClick={() => setOpen(false)}>
              Solicitar cotización
            </ButtonLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
