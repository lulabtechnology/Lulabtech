import Link from "next/link";
import { Container } from "../ui/container";

export function HomeCtaBand() {
  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="surface-strong relative overflow-hidden rounded-[36px] px-6 py-10 md:px-10 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,115,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(18,184,167,0.14),transparent_35%)]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="section-kicker">siguiente paso</span>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl">
                Si tu marca necesita una presencia digital más seria, más clara y mejor construida, conversemos.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-main)]">
                No publicamos precios porque cada proyecto necesita una dirección distinta.
                Evaluamos alcance, nivel visual y estructura para proponerte la mejor ruta.
              </p>
            </div>

            <div className="surface rounded-[28px] p-5 md:p-6">
              <div className="space-y-4 text-[var(--text-main)]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                    Correo
                  </p>
                  <a
                    href="mailto:ventas@lulabtech.com"
                    className="mt-2 block text-lg font-medium text-[var(--text-strong)]"
                  >
                    ventas@lulabtech.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/50767069044"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-lg font-medium text-[var(--text-strong)]"
                  >
                    +507 67069044
                  </a>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Link href="/contacto" className="btn-primary">
                  Solicitar cotización
                </Link>

                <a
                  href="https://wa.me/50767069044"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp directo
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
