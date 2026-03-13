import Link from "next/link";
import { Container } from "../ui/container";

export function HomeCtaBand() {
  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="surface-strong relative overflow-hidden rounded-[36px] px-6 py-10 md:px-10 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,115,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(18,184,167,0.14),transparent_35%)]" />

          <div className="relative z-10 max-w-3xl">
            <span className="section-kicker">cotización personalizada</span>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl">
              Si tu marca necesita una presencia digital más seria, más clara y más premium, conversemos.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-main)]">
              Sin precios públicos. Evaluamos lo que necesitas, te ayudamos a definir
              la mejor ruta y preparamos una propuesta con criterio.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contacto" className="btn-primary">
                Solicitar cotización
              </Link>
              <a
                href="mailto:ventas@lulabtech.com"
                className="btn-secondary"
              >
                ventas@lulabtech.com
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
