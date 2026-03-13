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
      "Nada de apariencia genérica. Cuidamos composición, jerarquía y percepción de marca."
  },
  {
    icon: Sparkles,
    title: "Claridad comercial",
    description:
      "Ordenamos el mensaje para que el visitante entienda rápido qué haces y por qué debería contactarte."
  },
  {
    icon: GaugeCircle,
    title: "Velocidad y experiencia",
    description:
      "Sitios ligeros, responsive y pensados para sentirse fluidos en desktop y móvil."
  },
  {
    icon: Workflow,
    title: "Soluciones a medida",
    description:
      "Cada proyecto responde al negocio real, no a una plantilla rígida."
  },
  {
    icon: ShieldCheck,
    title: "Confianza profesional",
    description:
      "Diseño, tecnología y estructura alineados para proyectar un nivel serio y sólido."
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
          title="Una landing o web no solo debe verse bien: debe transmitir nivel y mover al usuario."
          description="Aquí se refuerza la propuesta de valor con una sección más clara, más visual y más premium."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-ink-950 via-ink-900 to-brand-900 p-7 text-white shadow-elevated sm:p-8">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Ventaja competitiva
          </div>

          <h3 className="mt-5 text-2xl font-semibold leading-tight sm:text-3xl">
            Más claridad, más percepción de valor y una experiencia mucho más cuidada.
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
            LulabTech combina diseño premium, estructura comercial y desarrollo moderno
            para construir activos digitales que ayudan a presentar mejor la marca y a
            facilitar la conversión.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border border-white/10 bg-white/8 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Enfoque
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                Diseño + negocio + ejecución
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-white/8 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Resultado
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                Presencia más fuerte y contacto más claro
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
