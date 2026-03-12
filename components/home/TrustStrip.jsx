const items = [
  "Diseño premium con intención comercial",
  "Experiencia mobile-first cuidada",
  "Propuestas personalizadas según el proyecto",
  "Estructura clara para captar mejor",
];

export default function TrustStrip() {
  return (
    <section className="shell pb-10">
      <div className="grid gap-3 rounded-[32px] border border-slate-200 bg-white/80 p-5 md:grid-cols-4 md:p-6">
        {items.map((item) => (
          <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
