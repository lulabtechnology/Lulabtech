import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { heroContent } from "@/data/hero";
import { NAV_ANCHORS, WHATSAPP_URL } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { ButtonLink } from "@/components/ui/button";
import { GlowOrb } from "@/components/ui/glow-orb";
import { GridPattern } from "@/components/ui/grid-pattern";
import { FloatingElements } from "@/components/motion/floating-elements";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";

const heroBadges = [
  "Landing pages",
  "Webs corporativas",
  "Tiendas online",
  "Software a medida"
];

const heroMetrics = [
  {
    icon: Sparkles,
    label: "Imagen de marca",
    value: "Más sólida y mejor presentada"
  },
  {
    icon: MonitorSmartphone,
    label: "Mobile",
    value: "Bien resuelto desde el primer scroll"
  },
  {
    icon: Layers3,
    label: "Ruta de contacto",
    value: "CTA claros y recorrido mejor pensado"
  }
];

const heroPreviewCards = [
  {
    eyebrow: "Landing pages",
    value: "Captación"
  },
  {
    eyebrow: "Web corporativa",
    value: "Autoridad"
  },
  {
    eyebrow: "Tienda online",
    value: "Venta digital"
  },
  {
    eyebrow: "Software",
    value: "Operación clara"
  }
];

export function HeroSection() {
  return (
    <SectionShell className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-white pt-10 md:pt-14 lg:pt-16">
      <GridPattern className="opacity-30" />
      <GlowOrb className="-left-10 top-10 h-52 w-52" />
      <GlowOrb className="right-0 top-0 h-60 w-60 bg-accent-400/20" />
      <FloatingElements />

      <div className="relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">{heroContent.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-5 balance text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-[4.5rem]">
              Soluciones digitales que se ven{" "}
              <span className="text-gradient-brand">premium</span> y convierten con intención.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
              {heroContent.description}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`#${NAV_ANCHORS.quote}`} size="lg">
                {heroContent.primaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>

              <ButtonLink
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="lg"
              >
                {heroContent.secondaryCta}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {heroBadges.map((badge) => (
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
              <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-soft">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-600" />
                  <span className="text-sm font-semibold text-ink-900">
                    Oferta bien explicada
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-ink-600">
                  Estructura, jerarquía y copy pensados para que el visitante entienda rápido.
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-soft">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-600" />
                  <span className="text-sm font-semibold text-ink-900">
                    Presencia más seria
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-ink-600">
                  Visual limpio y dirección de marca para proyectar más nivel y confianza.
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-soft">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-600" />
                  <span className="text-sm font-semibold text-ink-900">
                    Contacto mejor guiado
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-ink-600">
                  CTA visibles, WhatsApp directo y recorrido pensado para cotizar sin fricción.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="relative">
          <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-4 shadow-elevated sm:p-5">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-brand-500/10 via-transparent to-accent-500/10" />
            <div className="relative rounded-[28px] border border-white/10 bg-slate-950 p-3">
              <div className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/5 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Vista de propuesta
                </span>
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="grid gap-3">
                  <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/60">
                    <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-slate-950/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur">
                      Preview real
                    </div>

                    <div className="relative h-[260px] w-full sm:h-[290px]">
                      <Image
                        src="/projects/landing/landing-01.png"
                        alt="Vista real de un proyecto desarrollado por LulabTech"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 520px"
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/12 to-transparent" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
                      <h2 className="max-w-sm text-balance text-xl font-semibold leading-tight text-white sm:text-[1.5rem]">
                        Diseño visual fuerte, oferta clara y contacto directo.
                      </h2>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/78">
                        Así se ve una landing pensada para proyectar más nivel y facilitar la acción.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {heroPreviewCards.map((card) => (
                      <div
                        key={card.eyebrow}
                        className="rounded-[20px] border border-white/10 bg-white/6 p-4 backdrop-blur"
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/62 sm:text-[11px]">
                          {card.eyebrow}
                        </p>
                        <p className="mt-2 text-sm font-medium text-white">
                          {card.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <Stagger className="grid gap-3">
                  {heroMetrics.map((metric) => {
                    const Icon = metric.icon;

                    return (
                      <div
                        key={metric.label}
                        className="rounded-[24px] border border-white/10 bg-white/6 p-4 backdrop-blur"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                              {metric.label}
                            </p>
                            <p className="mt-1 text-sm font-semibold leading-6 text-white sm:text-[15px]">
                              {metric.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-brand-600/28 to-accent-500/16 p-5 backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                      Siguiente paso
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      Cotización clara
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/78">
                      El objetivo no es solo que se vea bien, sino dejar claro qué haces y cómo contactarte.
                    </p>
                  </div>
                </Stagger>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
