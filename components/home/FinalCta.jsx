import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="shell">
        <div className="rounded-[36px] border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-soft md:px-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="section-eyebrow !text-slate-300">Cotización</span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                Cuéntanos qué necesitas y te ayudamos a definir la mejor solución
                para tu negocio.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                Puedes escribirnos por WhatsApp para avanzar más rápido o
                enviarnos tu solicitud por correo/formulario si prefieres una
                consulta más estructurada.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6">
              <p className="text-sm font-semibold text-white">
                Trabajamos por propuesta personalizada
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Definimos el alcance según el tipo de proyecto, el objetivo y la
                estructura real que necesite tu negocio.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/contacto" className="btn-primary">
                  Solicitar cotización
                </Link>
                <Link
                  href="https://wa.me/50767069044?text=Hola%20LulabTech%2C%20quiero%20solicitar%20una%20propuesta%20para%20mi%20proyecto."
                  className="btn-secondary"
                >
                  Hablar por WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
