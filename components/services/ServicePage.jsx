import Link from "next/link";

export default function ServicePage({
  eyebrow,
  title,
  description,
  useCasesTitle,
  useCases,
  valueTitle,
  valueText,
  bullets,
  faqTitle = "Preguntas frecuentes",
  faqs = [],
  whatsappHref,
}) {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="max-w-4xl">
          <span className="section-eyebrow">{eyebrow}</span>
          <h1 className="section-heading mt-4">{title}</h1>
          <p className="section-copy mt-5 max-w-3xl">{description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-primary">
              Solicitar cotización
            </Link>
            <Link href={whatsappHref} className="btn-secondary">
              Hablar por WhatsApp
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel p-6 md:p-7">
            <h2 className="text-2xl font-semibold text-slate-950">{useCasesTitle}</h2>
            <div className="mt-5 space-y-3">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white shadow-soft md:p-8">
            <h2 className="text-2xl font-semibold">{valueTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-slate-200 md:text-base">
              {valueText}
            </p>

            <ul className="mt-6 space-y-3">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <div className="max-w-3xl">
            <span className="section-eyebrow">{faqTitle}</span>
          </div>

          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <div key={item.question} className="panel p-5 md:p-6">
                <h3 className="text-lg font-semibold text-slate-950">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[36px] border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-soft md:px-10 md:py-14">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Si esta es la estructura correcta para tu negocio, hablemos.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
            Te ayudamos a definir alcance, enfoque y la mejor ruta para avanzar
            con una propuesta personalizada.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-primary">
              Solicitar propuesta
            </Link>
            <Link href={whatsappHref} className="btn-secondary">
              Hablar por WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
