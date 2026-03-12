import ServicePage from "@/components/services/ServicePage";

export const metadata = {
  title: "Automatizaciones para Negocios | LulabTech",
  description:
    "Automatizaciones para negocios que necesitan responder mejor, ordenar procesos y ganar eficiencia.",
};

const whatsappHref =
  "https://wa.me/50767069044?text=Hola%20LulabTech%2C%20me%20interesa%20una%20automatizaci%C3%B3n%20para%20mi%20negocio.";

export default function AutomatizacionesPage() {
  return (
    <ServicePage
      eyebrow="Automatizaciones"
      title="Automatizaciones para negocios que necesitan responder mejor, ordenar procesos y ganar eficiencia."
      description="Implementamos soluciones digitales para reducir fricción, mejorar atención, organizar flujos y ayudar a que tu negocio funcione con más claridad y menos carga manual."
      useCasesTitle="¿Cuándo conviene automatizar?"
      useCases={[
        "Respuestas repetitivas",
        "Seguimiento de leads",
        "Formularios y captación",
        "Atención por WhatsApp",
        "Procesos internos que hoy son manuales",
      ]}
      valueTitle="Automatizar no es complicar. Es diseñar mejor la forma en que tu negocio responde y opera."
      valueText="No se trata de automatizar por moda. Se trata de identificar dónde hay fricción, repetición o pérdida de tiempo y construir una solución que tenga sentido."
      bullets={[
        "Atención más ágil",
        "Menos pasos manuales",
        "Mejor organización",
        "Más consistencia en el flujo comercial",
        "Mejor experiencia para el usuario final",
      ]}
      faqs={[
        {
          question: "¿Qué tipo de automatizaciones trabajan?",
          answer:
            "Depende del caso. Puede incluir flujos de atención, formularios, captación, mensajes, organización de procesos o integraciones simples.",
        },
        {
          question: "¿Necesito un negocio grande para automatizar?",
          answer:
            "No. Lo importante es que exista una necesidad real y repetitiva que haga sentido ordenar.",
        },
        {
          question: "¿Esto se puede combinar con una web?",
          answer:
            "Sí. De hecho, muchas veces tiene más valor cuando forma parte de una estructura digital mejor pensada.",
        },
      ]}
      whatsappHref={whatsappHref}
    />
  );
}
