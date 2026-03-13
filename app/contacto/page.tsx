import { PageHero } from "../../components/sections/page-hero";
import { Container } from "../../components/ui/container";
import ContactForm from "../../components/forms/contact-form";

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="contacto"
        title="Cuéntanos qué estás construyendo."
        description="Si necesitas una presencia digital más clara, más seria y mejor pensada, podemos ayudarte a definir la mejor ruta para tu proyecto."
      />

      <section className="section-padding pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="space-y-6">
              <div className="surface rounded-[32px] p-6 md:p-7">
                <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                  Contacto directo
                </h2>

                <div className="mt-6 space-y-5 text-[var(--text-main)]">
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
              </div>

              <div className="surface rounded-[32px] p-6 md:p-7">
                <h3 className="text-xl font-semibold tracking-[-0.04em]">
                  Qué puedes enviarnos aquí
                </h3>

                <div className="mt-5 space-y-4 text-[15px] leading-7 text-[var(--text-main)]">
                  <p>Landing pages para campañas o captación.</p>
                  <p>Webs corporativas con una presencia más seria.</p>
                  <p>Tiendas online con mejor estructura visual y comercial.</p>
                  <p>Automatizaciones o proyectos que necesitan una ruta más clara.</p>
                </div>
              </div>

              <div className="surface-strong rounded-[32px] p-6 md:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                  Forma de trabajo
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                  Cotización personalizada, sin precios publicados.
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[var(--text-main)]">
                  Cada proyecto se evalúa según alcance, nivel visual, estructura,
                  necesidades técnicas y objetivos reales de la marca.
                </p>
              </div>
            </div>

            <div className="surface-strong rounded-[32px] p-6 md:p-7">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                  Solicitud de cotización
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                  Envíanos el contexto de tu proyecto.
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[var(--text-main)]">
                  Mientras más claro nos expliques lo que buscas, mejor podremos
                  orientarte y prepararte una propuesta más alineada a tu marca.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
