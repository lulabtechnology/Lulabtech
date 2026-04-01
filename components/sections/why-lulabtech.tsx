import {
  CheckCircle2,
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
    title: "Diseño con mejor criterio",
    description:
      "No es solo estética: cuidamos composición, jerarquía y detalle para que la marca se sienta mejor construida."
  },
  {
    icon: Sparkles,
    title: "Mensaje más fácil de entender",
    description:
      "Ordenamos el contenido para que el visitante entienda qué haces, por qué importa y qué paso debe dar."
  },
  {
    icon: GaugeCircle,
    title: "Experiencia más fluida",
    description:
      "Responsive real, carga cuidada y recorrido visual limpio para que todo se sienta más sólido."
  },
  {
    icon: Workflow,
    title: "Solución hecha para el negocio",
    description:
      "Cada proyecto responde al objetivo comercial y al tipo de usuario, no a una plantilla genérica."
  },
  {
    icon: ShieldCheck,
    title: "Presencia más confiable",
    description:
      "Diseño, estructura y tecnología alineados para transmitir más seriedad y respaldo profesional."
  }
];

const valuePoints = [
  "Se entiende mejor lo que ofreces.",
  "La marca se percibe más seria.",
  "El contacto queda más fácil de tomar."
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
          title="Una web no solo debe verse bien: debe dejar más claro tu valor y mover mejor al usuario"
          description="Trabajamos la parte visual, la estructura comercial y la experiencia para que el sitio no se quede en algo bonito, sino útil para tu negocio."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-[#0A1227] via-[#0E1D45] to-[#12397A] p-7 text-white shadow-elevated sm:p-8">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Lo que cambia
          </div>

          <h3 className="mt-5 max-w-md text-balance text-[1.95rem] font-semibold leading-[1.08] text-white sm:text-[2.4rem]">
            Una presencia más cuidada, un mensaje más claro y un contacto mejor guiado.
          </h3>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/88 sm:text-base">
            En LulabTech cada bloque tiene una función concreta: ordenar la oferta, reforzar la percepción de marca y acercar al visitante al siguiente paso.
          </p>

          <div className="mt-7 grid gap-3">
            {valuePoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-[20px] border border-white/10 bg-white/8 px-4 py-3 backdrop-blur"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent-300" />
                <p className="text-sm font-medium leading-6 text-white/92">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border border-white/10 bg-white/8 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Enfoque
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-white">
                Diseño, estructura y copy trabajando juntos.
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-white/8 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Resultado
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-white">
                Más claridad, más confianza y una mejor ruta hacia cotizar.
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
              <h3 className="mt-5 text-lg font-semibold leading-snug text-ink-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-600">{item.description}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </SectionShell>
  );
}
