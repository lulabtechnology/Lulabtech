import {
  BadgeCheck,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const points = [
  {
    icon: Sparkles,
    title: "Diseño con criterio de marca",
    text: "No se trata de poner secciones bonitas. Se trata de construir una presencia digital que eleve cómo te perciben.",
  },
  {
    icon: ShieldCheck,
    title: "Más confianza desde el primer scroll",
    text: "Una propuesta clara, una mejor jerarquía y una presentación sólida generan una sensación de profesionalismo mucho más fuerte.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile cuidado de verdad",
    text: "Gran parte del tráfico llega desde celular. Por eso la experiencia móvil no se deja para el final: se piensa desde el inicio.",
  },
  {
    icon: Workflow,
    title: "Estructura preparada para convertir",
    text: "La idea no es solo que te visiten. Es que entiendan rápido, sientan confianza y sepan cómo contactarte sin fricción.",
  },
];

export default function ProofSection() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="shell">
        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="panel-dark relative overflow-hidden px-6 py-7 md:px-8 md:py-8">
            <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-[rgba(17,194,138,0.14)] blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-[rgba(22,119,255,0.14)] blur-3xl" />

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-300">
              <BadgeCheck className="h-3.5 w-3.5 text-brand-green" />
              Por qué LulabTech
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.02] text-white sm:text-4xl md:text-[3rem]">
              No diseñamos para llenar espacio.
              <span className="mt-2 block text-transparent [background:linear-gradient(135deg,#ffffff_0%,#8fcbff_45%,#7af0cc_100%)] bg-clip-text">
                Diseñamos para que tu negocio comunique mejor y convierta con menos fricción.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base md:leading-8">
              Cuando la web tiene mejor dirección visual, mejor estructura y una ruta de contacto más clara, la percepción cambia. Y cuando la percepción cambia, cambia también la calidad de la conversación con tus posibles clientes.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {points.map((point) => {
              const Icon = point.icon;

              return (
                <article
                  key={point.title}
                  className="panel group relative overflow-hidden px-6 py-6 transition duration-300 hover:-translate-y-1 hover:shadow-panel md:px-7"
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-slate-400/40 to-transparent" />

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200/70 bg-white text-slate-950 shadow-sm transition duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">
                        {point.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
