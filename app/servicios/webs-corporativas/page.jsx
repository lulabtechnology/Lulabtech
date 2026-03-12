import ServicePage from "@/components/services/ServicePage";

export const metadata = {
  title: "Webs Corporativas en Panamá | LulabTech",
  description:
    "Webs corporativas para marcas, empresas y profesionales que necesitan una presencia más seria, clara y confiable.",
};

const whatsappHref =
  "https://wa.me/50767069044?text=Hola%20LulabTech%2C%20me%20interesa%20cotizar%20una%20web%20corporativa%20para%20mi%20negocio.";

export default function WebsCorporativasPage() {
  return (
    <ServicePage
      eyebrow="Webs Corporativas"
      title="Webs corporativas para marcas, empresas y profesionales que necesitan una presencia más seria, clara y confiable."
      description="Diseñamos webs corporativas para negocios que necesitan presentar mejor sus servicios, ordenar su oferta y transmitir una imagen digital más sólida frente a clientes, aliados y prospectos."
      useCasesTitle="¿Cuándo conviene una web corporativa?"
      useCases={[
        "Empresas con varios servicios",
        "Profesionales que quieren una presencia más sólida",
        "Negocios que hoy dependen demasiado de redes",
        "Marcas que necesitan transmitir más confianza",
        "Proyectos que quieren verse mejor frente a clientes y aliados",
      ]}
      valueTitle="Una web corporativa bien estructurada ayuda a que tu negocio se vea más claro, más serio y más fácil de entender."
      valueText="En LulabTech diseñamos webs corporativas que combinan estructura, claridad, diseño premium y experiencia móvil cuidada. El objetivo es que tu marca no solo se vea mejor, sino que comunique mejor y genere más confianza."
      bullets={[
        "Presentar servicios con mejor jerarquía",
        "Reforzar percepción de marca",
        "Facilitar contacto y consulta",
        "Mejorar presencia frente a referencias y Google",
        "Dar una base más sólida para crecer digitalmente",
      ]}
      faqs={[
        {
          question: "¿Una web corporativa es mejor que una landing page?",
          answer:
            "Depende del objetivo. Si necesitas presentar varios servicios o construir una presencia más completa, normalmente sí. Si solo quieres captar para una oferta puntual, puede convenir más una landing.",
        },
        {
          question: "¿Sirve para empresas pequeñas también?",
          answer:
            "Sí. No depende del tamaño del negocio, sino de la necesidad de comunicación y estructura.",
        },
        {
          question: "¿Puedo usarla para campañas también?",
          answer:
            "Sí, aunque en algunos casos conviene combinar una web corporativa con landing pages específicas.",
        },
      ]}
      whatsappHref={whatsappHref}
    />
  );
}
