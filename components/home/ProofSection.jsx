const points = [
  {
    title: "Diseño con intención comercial",
    text: "Cada sección debe ayudar al usuario a entender, confiar y avanzar. No diseñamos solo para decorar.",
  },
  {
    title: "Estructura clara",
    text: "Ordenamos la información para que tu oferta se vea más sólida, más fácil de entender y más profesional.",
  },
  {
    title: "Experiencia móvil cuidada",
    text: "Gran parte del tráfico llega desde celular. Por eso la experiencia móvil se piensa desde el primer paso.",
  },
  {
    title: "Propuesta personalizada",
    text: "Cada proyecto se cotiza según alcance, necesidad y objetivo. No trabajamos con soluciones genéricas disfrazadas.",
  },
  {
    title: "Contacto bien pensado",
    text: "La web debe facilitar que te escriban con intención, no solo que te visiten.",
  },
  {
    title: "Enfoque visual premium",
    text: "Queremos que la percepción de tu marca suba desde el primer scroll.",
  },
];

export default function ProofSection() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="shell">
        <div className="panel p-6 md:p-8">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Por qué LulabTech</span>
            <h2 className="section-heading mt-4">
              No diseñamos para llenar espacio. Diseñamos para que tu negocio
              comunique mejor y convierta con menos fricción.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {points.map((point) => (
              <div
                key={point.title}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
