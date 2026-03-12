import SectionIntro from "@/components/ui/SectionIntro";

export default function ValueBlock() {
  return (
    <section className="shell section-space grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
      <SectionIntro
        eyebrow="Propuesta de valor"
        title="Tu web no debería ser solo una vitrina. Debería ayudarte a explicar mejor lo que haces, transmitir más confianza y facilitar el contacto correcto."
      />
      <div className="panel p-8">
        <p className="section-copy">
          En LulabTech diseñamos experiencias digitales que combinan estructura, claridad, diseño y enfoque comercial. No se trata solo de que la web se vea bien. Se trata de que tu marca se perciba mejor, tu oferta se entienda más rápido y tu negocio esté mejor preparado para convertir visitas en oportunidades reales.
        </p>
      </div>
    </section>
  );
}
