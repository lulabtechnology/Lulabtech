import Link from "next/link";

export const metadata = {
  title: "Sobre LulabTech | Estudio Digital en Panamá",
  description:
    "Conoce el enfoque de LulabTech, un estudio digital enfocado en diseño web, estructura clara, experiencia premium y soluciones orientadas a conversión.",
};

export default function SobreLulabTechPage() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <span className="section-eyebrow">Sobre LulabTech</span>
            <h1 className="section-heading mt-4">
              LulabTech es un estudio digital enfocado en diseñar webs más claras,
              más serias y más útiles para vender.
            </h1>

            <p className="section-copy mt-6 max-w-3xl">
              No buscamos llenar internet de páginas bonitas pero vacías.
              Buscamos construir presencia digital que ayude a negocios reales a
              comunicar mejor, verse más sólidos y facilitar el contacto con
              clientes potenciales.
            </p>

            <p className="section-copy mt-5 max-w-3xl">
              Para nosotros, una buena web no solo se mide por cómo se ve.
              También se mide por qué tan claro comunica, qué tan bien representa
              la marca y qué tan fácil hace que el usuario avance.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/servicios" className="btn-primary">
                Ver servicios
              </Link>
              <Link href="/contacto" className="btn-secondary">
                Solicitar cotización
              </Link>
            </div>
          </div>

          <div className="panel p-6 md:p-7">
            <h2 className="text-2xl font-semibold text-slate-950">
              Cómo pensamos cada proyecto
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                <h3 className="text-lg font-semibold text-slate-950">
                  Diseño con intención
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Cada bloque debe ayudar al usuario a entender mejor, confiar más
                  y avanzar con claridad.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                <h3 className="text-lg font-semibold text-slate-950">
                  Estructura clara
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Ordenamos la información para que el mensaje no se pierda y la
                  oferta se vea más sólida.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                <h3 className="text-lg font-semibold text-slate-950">
                  Enfoque comercial
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  No trabajamos pensando solo en estética. Trabajamos pensando en
                  percepción, confianza y conversión.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                <h3 className="text-lg font-semibold text-slate-950">
                  Soluciones personalizadas
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Cada negocio necesita una estructura distinta. Por eso no
                  aplicamos la misma solución a todos los proyectos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[36px] border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-soft md:px-10 md:py-14">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Si buscas una web que se vea mejor, comunique mejor y esté mejor
            pensada para convertir, hablemos.
          </h2>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-primary">
              Solicitar cotización
            </Link>
            <Link
              href="https://wa.me/50767069044?text=Hola%20LulabTech%2C%20quiero%20hablar%20sobre%20un%20proyecto%20web."
              className="btn-secondary"
            >
              Hablar por WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
