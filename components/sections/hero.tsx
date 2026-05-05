"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  LayoutTemplate,
  MonitorSmartphone,
  SearchCheck,
  ShoppingBag,
  Sparkles,
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

      <div className="relative grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
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
          <div className="relative mx-auto max-w-[520px]">
            <div className="absolute -inset-8 rounded-[44px] bg-gradient-to-br from-brand-500/12 via-white to-accent-400/18 blur-2xl" />

            <div className="relative overflow-hidden rounded-[38px] border border-slate-200 bg-white/92 p-5 shadow-elevated backdrop-blur sm:p-6">
              <div className="flex items-center justify-between gap-4 rounded-[24px] border border-slate-200 bg-slate-50/80 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-500">
                  {hero.previewWindow}
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-[32px] border border-slate-900/10 bg-gradient-to-br from-[#061026] via-[#07152F] to-[#0E2545] p-7 text-white shadow-soft sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-200">
                      {hero.previewBadge}
                    </p>
                    <h2 className="mt-4 max-w-sm text-balance text-3xl font-semibold leading-tight sm:text-[2.35rem]">
                      {hero.previewTitle}
                    </h2>
                  </div>

                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/14 bg-white p-3 shadow-soft">
                    <Image
                      src="/brand/lulabtech-mark.png"
                      alt="LulabTech"
                      fill
                      sizes="64px"
                      className="object-contain p-2"
                      priority
                    />
                  </div>
                </div>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/76">
                  {hero.previewDescription}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {hero.previewCards.map((card, index) => {
                    const Icon = serviceIcons[index % serviceIcons.length];

                    return (
                      <div
                        key={card.eyebrow}
                        className="rounded-[22px] border border-white/12 bg-white/[0.07] p-4 backdrop-blur"
                      >
                        <Icon className="h-4 w-4 text-accent-200" />
                        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55 sm:text-[11px]">
                          {card.eyebrow}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">{card.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {hero.metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-soft"
                  >
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                      {index === 0 ? (
                        <Sparkles className="h-4 w-4" />
                      ) : index === 1 ? (
                        <Code2 className="h-4 w-4" />
                      ) : (
                        <SearchCheck className="h-4 w-4" />
                      )}
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-5 text-ink-900">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
