"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { NAV_ANCHORS, WHATSAPP_URL } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const quoteHref = `#${NAV_ANCHORS.quote}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "pt-3" : "pt-0"
      )}
    >
      <Container>
        <div
          className={cn(
            "relative flex h-20 items-center justify-between gap-4 rounded-[28px] border border-transparent px-0 transition-all duration-300",
            scrolled &&
              "border-slate-200/80 bg-white/85 px-4 shadow-elevated backdrop-blur-xl"
          )}
        >
          <a href="#top" className="flex items-center gap-3">
            <div className="relative h-11 w-[150px] sm:h-12 sm:w-[165px]">
              <Image
                src="/brand/lulabtech-logo.png"
                alt="LulabTech"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-600 transition hover:text-ink-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              className="text-ink-700"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </ButtonLink>

            <ButtonLink href={quoteHref}>
              Solicitar cotización
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          <MobileMenu quoteHref={quoteHref} />
        </div>
      </Container>
    </header>
  );
}
