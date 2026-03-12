const steps = [
  {
    step: "Paso 1",
    title: "Diagnóstico",
    text: "Entendemos qué hace tu negocio, qué quieres lograr y qué tipo de solución te conviene.",
  },
  {
    step: "Paso 2",
    title: "Propuesta",
    text: "Definimos alcance, estructura, enfoque visual y dirección general del proyecto.",
  },
  {
    step: "Paso 3",
    title: "Diseño y desarrollo",
    text: "Construimos la experiencia cuidando claridad, rendimiento, versión móvil y presentación de marca.",
  },
  {
    step: "Paso 4",
    title: "Revisión y lanzamiento",
    text: "Ajustamos detalles, dejamos todo listo y publicamos con una base sólida.",
  },
];

export default function ProcessSection() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="shell">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Proceso de trabajo</span>
          <h2 className="section-heading mt-4">
            Un proceso claro para construir mejor y avanzar sin improvisación
          </h2>
          <p className="section-copy mt-5">
            Si ya tienes una web existente, también podemos evaluar si conviene
            optimizarla, rediseñarla o reconstruirla.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.step} className="panel p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
                {step.step}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
