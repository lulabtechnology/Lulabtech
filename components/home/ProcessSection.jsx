import { ArrowRight, Compass, DraftingCompass, Rocket, SearchCode } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: SearchCode,
    title: "Diagnóstico",
    text: "Entendemos tu negocio, tu oferta, tu punto actual y el tipo de presencia digital que de verdad te conviene construir.",
  },
  {
    step: "02",
    icon: Compass,
    title: "Dirección estratégica",
    text: "Definimos qué estructura conviene, cómo debe presentarse tu marca y qué ruta de conversión hará más sentido según tu objetivo.",
  },
  {
    step: "03",
    icon: DraftingCompass,
    title: "Diseño y desarrollo",
    text: "Construimos una experiencia visual más sólida, clara y premium, cuidando desktop, mobile, ritmo visual y rendimiento.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Refinamiento y lanzamiento",
    text: "Ajustamos detalles, validamos lo importante y dejamos la base lista para que el proyecto salga con mejor percepción y más orden.",
  },
];

export default function ProcessSection() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Proceso de trabajo</span>
            <h2 className="section-heading mt-4">
              Un flujo claro para construir bien, evitar improvisaciones y llegar a un resultado mucho más serio.
            </h2>
          </div>

          <div className="panel px-6 py-5 md:px-7">
            <p className="text-sm leading-7 text-slate-600 md:text-base">
              Si ya tienes una web existente, también podemos evaluar si conviene mejorarla, rediseñarla o reconstruirla según su estado, su estructura y lo que quieras lograr.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.step}
                className="panel group relative overflow-hidden px-6 py-6 transition duration-300 hover:-translate-y-1 hover:shadow-panel md:px-7"
              >
                <div className="absolute right-5 top-5 text-[2.4rem] font-semibold leading-none text-slate-200/80">
                  {step.step}
                </div>

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200/70 bg-white text-slate-950 shadow-sm transition duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="relative mt-6 text-xl font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  {step.text}
                </p>

                {index < steps.length - 1 ? (
                  <div className="relative mt-6 hidden items-center text-slate-400 xl:flex">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
