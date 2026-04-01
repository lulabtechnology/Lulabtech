import { GaugeCircle, ShieldCheck, Sparkles } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { IconBox } from "@/components/ui/icon-box";

const credibilityCards = [
  {
    icon: Sparkles,
    title: "Diseño con intención",
    description:
      "Cada bloque está pensado para elevar percepción, ordenar el mensaje y empujar la conversión."
  },
  {
    icon: GaugeCircle,
    title: "Experiencia rápida",
    description:
      "Base moderna, ligera y responsive para que el sitio se sienta fluido y serio."
  },
  {
    icon: ShieldCheck,
    title: "Confianza de marca",
    description:
      "Visual limpio, estructura premium y mejor claridad para marcas que quieren verse a otro nivel."
  }
];

export function CredibilityStrip() {
  return (
    <SectionShell className="py-10 md:py-12">
      <Reveal className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
        <div className="grid gap-4 md:grid-cols-3">
          {credibilityCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-slate-200 bg-slate-50/70 p-5"
            >
              <IconBox icon={item.icon} />
              <h2 className="mt-4 text-lg font-semibold text-ink-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
