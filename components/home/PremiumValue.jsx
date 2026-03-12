export default function PremiumValue() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <span className="section-eyebrow">Propuesta de valor</span>
            <h2 className="section-heading mt-4">
              Tu web no debería ser solo una vitrina. Debería ayudarte a
              explicar mejor lo que haces, transmitir más confianza y facilitar
              el contacto correcto.
            </h2>
          </div>

          <div className="space-y-5">
            <p className="section-copy">
              En LulabTech diseñamos experiencias digitales que combinan
              estructura, claridad, diseño y enfoque comercial. No se trata solo
              de que la web se vea bien. Se trata de que tu marca se perciba
              mejor, tu oferta se entienda más rápido y tu negocio esté mejor
              preparado para convertir visitas en oportunidades reales.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                <p className="text-sm font-semibold text-slate-900">
                  Para negocios que ya venden
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Si hoy dependes demasiado de Instagram, WhatsApp o referencias,
                  una web bien pensada puede ayudarte a reforzar confianza y
                  ordenar mejor tu oferta.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                <p className="text-sm font-semibold text-slate-900">
                  Para marcas que necesitan verse más serias
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Cuando tu servicio ya tiene nivel, tu presencia digital también
                  debería reflejarlo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
