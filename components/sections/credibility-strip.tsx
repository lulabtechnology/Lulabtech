"use client";

import Image from "next/image";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { useSiteLanguage } from "@/components/providers/site-language";

export function CredibilityStrip() {
  const { copy } = useSiteLanguage();
  const clients = copy.clients;
  const marqueeImages = [...clients.images, ...clients.images];

  return (
    <SectionShell className="overflow-hidden py-12 md:py-14">
      <Reveal>
        <div className="rounded-[34px] border border-slate-200 bg-white/92 p-5 shadow-soft sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-ink-900 sm:text-2xl">{clients.title}</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 via-brand-100 to-transparent" />
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50/80 py-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-50 to-transparent" />

            <div className="client-marquee flex w-max gap-4 px-4">
              {marqueeImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="relative h-24 w-44 shrink-0 overflow-hidden rounded-[22px] border border-slate-200 bg-white p-4 shadow-soft sm:h-28 sm:w-56"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="224px"
                    className="object-contain p-3"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
