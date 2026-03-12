import ServicePage from "@/components/services/ServicePage";

export const metadata = {
  title: "Landing Pages en Panamá | LulabTech",
  description:
    "Landing pages diseñadas para captar mejor, explicar con claridad y convertir con menos distracción.",
};

const whatsappHref =
  "https://wa.me/50767069044?text=Hola%20LulabTech%2C%20me%20interesa%20cotizar%20una%20landing%20page%20para%20captar%20clientes.";

export default function LandingPagesPage() {
  return (
    <ServicePage
      eyebrow="Landing Pages"
      title="Landing pages diseñadas para captar mejor, explicar con claridad y convertir con menos distracción."
      description="Creamos landing pages para campañas, servicios, promociones, lanzamientos y ofertas que necesitan una estructura directa, una narrativa clara y una experiencia pensada para generar consultas reales."
      useCasesTitle="¿Cuándo conviene una landing page?"
      useCases={[
        "Campañas publicitarias",
        "Servicios puntuales",
        "Lanzamientos",
        "Promociones y captación de leads",
        "Validación de una oferta o propuesta comercial",
      ]}
      valueTitle="Una buena landing no solo se ve bien. Debe hacer que el usuario entienda rápido, confíe y avance."
      valueText="En LulabTech diseñamos landing pages para que la oferta se entienda mejor, la percepción de marca suba y el contacto sea más fácil. No buscamos llenar la página de bloques innecesarios. Buscamos que cada sección tenga una función."
      bullets={[
        "Mensaje claro desde el primer scroll",
        "Estructura enfocada en una sola acción",
        "Jerarquía visual bien trabajada",
        "CTA visibles y bien ubicados",
        "Experiencia móvil muy cuidada",
      ]}
      faqs={[
        {
          question: "¿Una landing page sirve aunque no haga anuncios todavía?",
          answer:
            "Sí. También puede funcionar para tráfico desde redes, enlaces directos, referencias o presentaciones comerciales.",
        },
        {
          question: "¿La landing puede incluir WhatsApp, formulario o correo?",
          answer:
            "Sí. La estructura puede integrar el canal más conveniente según el tipo de negocio.",
        },
        {
          question: "¿Qué pasa si después necesito una web más grande?",
          answer:
            "La landing puede ser un buen primer paso y luego evolucionar hacia una estructura más amplia si el proyecto lo necesita.",
        },
      ]}
      whatsappHref={whatsappHref}
    />
  );
}
