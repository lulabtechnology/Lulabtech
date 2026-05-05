"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  LayoutTemplate,
  MonitorSmartphone,
  SearchCheck,
  ShoppingBag,
  Workflow
} from "lucide-react";
import { NAV_ANCHORS, WHATSAPP_URL } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { ButtonLink } from "@/components/ui/button";
import { GlowOrb } from "@/components/ui/glow-orb";
import { GridPattern } from "@/components/ui/grid-pattern";
import { FloatingElements } from "@/components/motion/floating-elements";
import { Reveal } from "@/components/motion/reveal";
import { useSiteLanguage } from "@/components/providers/site-language";

const cardIcons = [CheckCircle2, MonitorSmartphone, SearchCheck] as const;
const serviceIcons = [LayoutTemplate, MonitorSmartphone, ShoppingBag, Workflow] as const;

export function HeroSection() {
  const { copy } = useSiteLanguage();
  const hero = copy.hero;

  return (
    <SectionShell className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/35 to-white pt-10 md:pt-14 lg:pt-16">
      <GridPattern className="opacity-30" />
      <GlowOrb className="-left-10 top-10 h-52 w-52" />
      <GlowOrb className="right-0 top-0 h-60 w-60 bg-accent-400/20" />
      <FloatingElements />

      <div className="relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">{hero.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-5 balance text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-[4.35rem]">
              {hero.titleStart} <span className="text-gradient-brand">{hero.titleGradient}</span>{" "}
              {hero.titleEnd}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              {hero.description}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`#${NAV_ANCHORS.quote}`} size="lg">
                {hero.primaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>

              <ButtonLink
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="lg"
              >
                {hero.secondaryCta}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 shadow-soft"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {hero.cards.map((card, index) => {
                const Icon = cardIcons[index];

                return (
                  <div
                    key={card.title}
                    className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-soft"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${index === 2 ? "text-accent-600" : "text-brand-600"}`} />
                      <span className="text-sm font-semibold text-ink-900">{card.title}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-ink-600">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="relative">
          <div className="relative overflow-hidden rounded-[38px] border border-slate-200 bg-white p-4 shadow-elevated sm:p-5">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-brand-500/12 via-transparent to-accent-500/14" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#050A18] p-4 text-white sm:p-5">
              <div className="mb-4 flex items-center justify-between rounded-[22px] border border-white/10 bg-white/5 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  {hero.previewWindow}
                </span>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[390px] overflow-hidden rounded-[28px] border border-white/10 bg-white/6 p-3 sm:min-h-[440px]">
                  <div className="relative h-full min-h-[360px] overflow-hidden rounded-[24px] bg-slate-900 sm:min-h-[410px]">
                    <Image
                      src="/projects/landing/landing-03.png"
                      alt={hero.previewTitle}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/5 to-transparent" />
                  </div>

                  <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-slate-950/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur">
                    {hero.previewBadge}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 rounded-[22px] border border-white/16 bg-slate-950/72 p-4 backdrop-blur-xl">
                    <h2 className="text-balance text-xl font-semibold leading-tight text-white sm:text-[1.45rem]">
                      {hero.previewTitle}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-white/78">
                      {hero.previewDescription}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/6 p-3">
                    <div className="relative h-44 overflow-hidden rounded-[22px] bg-slate-900 sm:h-52">
                      <Image
                        src="/projects/Corporate/corporate-01.png"
                        alt={hero.sidePreviewAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 360px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/6 p-3">
                    <div className="relative h-44 overflow-hidden rounded-[22px] bg-slate-900 sm:h-52">
                      <Image
                        src="/projects/software/software-01.png"
                        alt={hero.sidePreviewAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 360px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {hero.previewCards.map((card, index) => {
                      const Icon = serviceIcons[index % serviceIcons.length];

                      return (
                        <div
                          key={card.eyebrow}
                          className="rounded-[20px] border border-white/10 bg-white/7 p-4 backdrop-blur"
                        >
                          <Icon className="h-4 w-4 text-accent-200" />
                          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55 sm:text-[11px]">
                            {card.eyebrow}
                          </p>
                          <p className="mt-1 text-sm font-medium text-white">{card.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
