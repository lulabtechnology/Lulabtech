const items = [
  "Diseño premium con intención comercial",
  "Experiencia mobile-first cuidada",
  "Propuestas personalizadas según el proyecto",
  "Estructura clara para captar mejor",
  "Contacto estratégico por WhatsApp o correo",
];

export default function TrustStrip() {
  return (
    <section className="pt-8 md:pt-12">
      <div className="shell">
        <div className="panel p-4 md:p-5">
          <div className="grid gap-3 md:grid-cols-5">
            {items.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium leading-6 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
