import { CircleCheckBig, Sparkles, Target, Zap } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Más claridad",
    text: "Una estructura mejor pensada ayuda a que el visitante entienda rápido qué haces y por qué debería contactarte.",
  },
  {
    icon: Sparkles,
    title: "Más nivel visual",
    text: "Diseño, contraste, ritmo y detalle para que tu marca deje de verse genérica y se sienta mucho más premium.",
  },
  {
    icon: CircleCheckBig,
    title: "Más confianza",
    text: "Cuando la web se ve seria, limpia y bien construida, la percepción del negocio cambia desde el primer scroll.",
  },
  {
    icon: Zap,
    title: "Más intención comercial",
    text: "No se trata solo de estética. Se trata de presentar mejor la oferta y hacer más fácil la conversación correcta.",
  },
];

export default function PremiumValue() {
  return (
    <section className="section-space-tight">
      <div className="shell">
        <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
          <div className="panel-dark relative overflow-hidden px-6 py-7 md:px-8 md:py-8">
            <div className="pointer-events-none absolute -left-8 top-0 h-36 w-36 rounded-full bg-[rgba(38,120,242,0.16)] blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-full bg-[rgba(32,183,132,0.12)] blur-3xl" />

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-brand-green" />
              Qué cambia cuando se hace bien
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-[1.02] text-white sm:text-4xl md:text-[3rem]">
              Una web premium no solo se ve mejor.
              <span className="mt-2 block brand-gradient-text">
                También hace que tu oferta se sienta más seria.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base md:leading-8">
              Cuando la dirección visual, la jerarquía y el contacto están bien resueltos, cambia cómo te perciben. Y cuando cambia la percepción, cambia también la calidad del lead que te escribe.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="panel group relative overflow-hidden px-6 py-6 transition duration-300 hover:-translate-y-1 hover:shadow-panel md:px-7"
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white transition duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                        {item.text}
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
