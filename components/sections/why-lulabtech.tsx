import {
  GaugeCircle,
  Palette,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { IconBox } from "@/components/ui/icon-box";
import { SectionHeading } from "@/components/ui/section-heading";

const differentiators = [
  {
    icon: Palette,
    title: "Diseño premium real",
    description:
      "Composición, jerarquía y detalle visual pensados para que la marca se vea más seria y más cuidada."
  },
  {
    icon: Sparkles,
    title: "Claridad comercial",
    description:
      "Ordenamos el mensaje para que el visitante entienda rápido qué haces, por qué importa y cómo contactarte."
  },
  {
    icon: GaugeCircle,
    title: "Velocidad y experiencia",
    description:
      "Sitios ligeros y fluidos, preparados para sentirse sólidos tanto en desktop como en móvil."
  },
  {
    icon: Workflow,
    title: "Soluciones a medida",
    description:
      "Cada proyecto se adapta al negocio, al tipo de usuario y al objetivo comercial real."
  },
  {
    icon: ShieldCheck,
    title: "Confianza profesional",
    description:
      "Diseño, tecnología y estructura alineados para proyectar una presencia más fuerte y confiable."
  }
];

export function WhyLulabTechSection() {
  return (
    <SectionShell
      id={NAV_ANCHORS.why}
      className="overflow-hidden bg-gradient-to-b from-white via-brand-50/20 to-white"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Por qué LulabTech"
          title="No se trata solo de verse bien: se trata de transmitir nivel, ordenar el mensaje y facilitar el contacto"
          description="Diseño, estructura y claridad para que tu marca se vea más sólida y el visitante entienda más rápido el valor de lo que ofreces."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-ink-950 via-ink-900 to-brand-900 p-7 text-white shadow-elevated sm:p-8">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Ventaja competitiva
          </div>

          <h3 className="mt-5 max-w-lg text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Más percepción de valor, más claridad y una experiencia digital mucho mejor cuidada.
          </h3>

          <p className="mt-4 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
            En LulabTech cada sección cumple una función: presentar mejor la marca,
            hacer que el mensaje se entienda más rápido y dejar el camino más claro hacia el contacto.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border border-white/10 bg-white/8 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Enfoque
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                Diseño + estrategia + ejecución
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-white/8 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Resultado
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                Presencia más sólida y contacto más claro
              </p>
            </div>
          </div>
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <IconBox icon={item.icon} />
              <h3 className="mt-5 text-lg font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-600">{item.description}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </SectionShell>
  );
}
