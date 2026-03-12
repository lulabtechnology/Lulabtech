import { ArrowUpRight, CircleCheckBig, Sparkles, Target } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Claridad comercial desde el primer scroll",
    text: "Cada bloque debe ayudar a entender mejor tu oferta, reducir fricción y llevar al usuario hacia una acción clara.",
  },
  {
    icon: Sparkles,
    title: "Una presencia que sí se siente premium",
    text: "Diseño, ritmo, estructura y detalle visual para que tu marca se perciba mucho más seria y mejor construida.",
  },
  {
    icon: CircleCheckBig,
    title: "Más orden para vender y comunicar",
    text: "No se trata solo de una web bonita. Se trata de presentar mejor tus servicios y facilitar el contacto correcto.",
  },
];

const stats = [
  { value: "Más seria", label: "percepción de marca" },
  { value: "Más clara", label: "estructura de oferta" },
  { value: "Más lista", label: "para convertir visitas" },
];

export default function PremiumValue() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.06fr] lg:items-start lg:gap-10">
          <div className="panel-dark relative overflow-hidden px-6 py-7 md:px-8 md:py-8">
            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-[rgba(22,119,255,0.16)] blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[rgba(17,194,138,0.12)] blur-3xl" />

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-300">
              <ArrowUpRight className="h-3.5 w-3.5 text-brand-green" />
              Propuesta de valor
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.02] text-white sm:text-4xl md:text-[3rem]">
              Tu web no debería verse como una pieza más.
              <span className="mt-2 block text-transparent [background:linear-gradient(135deg,#ffffff_0%,#8fcbff_45%,#7af0cc_100%)] bg-clip-text">
                Debería elevar cómo perciben tu negocio.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base md:leading-8">
              En LulabTech combinamos diseño, estructura, branding digital y enfoque comercial para que tu presencia online se vea mejor, explique mejor y haga más fácil que un posible cliente dé el siguiente paso.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-white/10 bg-white/[0.05] px-4 py-4"
                >
                  <div className="text-lg font-semibold text-white md:text-xl">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {pillars.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="panel group relative overflow-hidden px-6 py-6 transition duration-300 hover:-translate-y-1 hover:shadow-panel md:px-7"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200/70 bg-white text-slate-950 shadow-sm transition duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="panel relative overflow-hidden px-6 py-6 md:px-7">
              <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-brand-blue to-brand-green" />
              <p className="pl-4 text-sm leading-7 text-slate-700 md:text-base">
                Cuando una marca ya trabaja bien, pero su presencia digital no lo refleja, pierde fuerza antes de siquiera comenzar la conversación. Esta sección existe para corregir exactamente eso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
