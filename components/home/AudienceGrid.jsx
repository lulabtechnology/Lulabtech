import SectionIntro from "@/components/ui/SectionIntro";

const audience = [
  {
    title: "Marcas y negocios que ya venden",
    text: "Si hoy dependes demasiado de Instagram, WhatsApp o referencias, una web bien pensada puede ayudarte a reforzar confianza y ordenar mejor tu oferta.",
  },
  {
    title: "Empresas y profesionales",
    text: "Cuando tu servicio o tu marca ya tiene nivel, tu presencia online también debería reflejarlo.",
  },
  {
    title: "Negocios que necesitan captar mejor",
    text: "Una mejor estructura puede marcar la diferencia entre solo recibir visitas y realmente generar consultas.",
  },
  {
    title: "Proyectos que necesitan una solución más clara",
    text: "No todos los negocios necesitan lo mismo. Por eso no trabajamos con la misma estructura para todos.",
  },
];

export default function AudienceGrid() {
  return (
    <section className="shell section-space">
      <SectionIntro
        eyebrow="Para quién es esto"
        title="Trabajamos con negocios que ya entendieron que verse bien no basta: también hay que comunicar mejor."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {audience.map((item) => (
          <article key={item.title} className="panel p-6">
            <h3 className="text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
