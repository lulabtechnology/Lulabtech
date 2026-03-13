import { PageHero } from "../../components/sections/page-hero";
import { Container } from "../../components/ui/container";

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="contacto"
        title="Cuéntanos qué estás construyendo."
        description="Si necesitas una presencia digital más clara, más seria y mejor pensada, podemos ayudarte a definir la mejor ruta."
      />

      <section className="section-padding pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
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
                    href="https://wa.me/50700000000"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-lg font-medium text-[var(--text-strong)]"
                  >
                    Abrir conversación
                  </a>
                </div>

                <div className="rounded-[24px] border border-[var(--border-soft)] bg-white/75 p-5">
                  <p className="text-sm leading-7 text-[var(--text-main)]">
                    No publicamos precios. Cada proyecto se evalúa según el nivel de
                    diseño, estructura y alcance que necesite tu marca.
                  </p>
                </div>
              </div>
            </div>

            <div className="surface-strong rounded-[32px] p-6 md:p-7">
              <form className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="label">Nombre</label>
                  <input className="form-input" type="text" placeholder="Tu nombre" />
                </div>

                <div>
                  <label className="label">Empresa o marca</label>
                  <input className="form-input" type="text" placeholder="Nombre de tu marca" />
                </div>

                <div>
                  <label className="label">Email</label>
                  <input className="form-input" type="email" placeholder="correo@empresa.com" />
                </div>

                <div>
                  <label className="label">WhatsApp</label>
                  <input className="form-input" type="text" placeholder="+507 ..." />
                </div>

                <div>
                  <label className="label">Servicio de interés</label>
                  <select className="form-select" defaultValue="">
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option>Landing Page</option>
                    <option>Web Corporativa</option>
                    <option>Tienda Online</option>
                    <option>Automatización</option>
                  </select>
                </div>

                <div>
                  <label className="label">Presupuesto estimado (opcional)</label>
                  <input className="form-input" type="text" placeholder="Referencia opcional" />
                </div>

                <div className="md:col-span-2">
                  <label className="label">Mensaje / necesidades</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Cuéntanos qué necesitas, qué buscas mejorar y qué tipo de proyecto tienes en mente."
                  />
                </div>

                <div className="md:col-span-2">
                  <button type="submit" className="btn-primary">
                    Enviar solicitud
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
