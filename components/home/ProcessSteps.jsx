import SectionIntro from "@/components/ui/SectionIntro";

const steps = [
  {
    step: "01",
    title: "Diagnóstico",
    text: "Entendemos qué hace tu negocio, qué quieres lograr y qué tipo de solución te conviene.",
  },
  {
    step: "02",
    title: "Propuesta",
    text: "Definimos alcance, estructura, enfoque visual y dirección general del proyecto.",
  },
  {
    step: "03",
    title: "Diseño y desarrollo",
    text: "Construimos la experiencia cuidando claridad, rendimiento, versión móvil y presentación de marca.",
  },
  {
    step: "04",
    title: "Revisión y lanzamiento",
    text: "Ajustamos detalles, dejamos todo listo y publicamos con una base sólida.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="shell section-space">
      <SectionIntro
        eyebrow="Proceso"
        title="Un proceso claro para construir mejor y avanzar sin improvisación"
        description="Si ya tienes una web existente, también podemos evaluar si conviene optimizarla, rediseñarla o reconstruirla."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-4">
        {steps.map((item) => (
          <article key={item.step} className="panel p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">Paso {item.step}</p>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
