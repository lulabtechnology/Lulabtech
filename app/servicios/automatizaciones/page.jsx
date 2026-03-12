import ServicePage from "@/components/services/ServicePage";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/site";

const service = services.find((item) => item.slug === "automatizaciones");

export const metadata = buildMetadata({
  title: "Automatizaciones para Negocios",
  path: "/servicios/automatizaciones",
  description:
    "Implementamos automatizaciones para negocios que necesitan responder mejor, ordenar procesos y reducir fricción comercial.",
  keywords: ["automatización para negocios", "automatización de ventas", "automatización con WhatsApp"],
});

const faqItems = [
  {
    question: "¿Qué tipo de automatizaciones trabajan?",
    answer: "Depende del caso. Puede incluir flujos de atención, formularios, captación, mensajes, organización de procesos o integraciones simples.",
  },
  {
    question: "¿Necesito un negocio grande para automatizar?",
    answer: "No. Lo importante es que exista una necesidad real y repetitiva que haga sentido ordenar.",
  },
  {
    question: "¿Esto se puede combinar con una web?",
    answer: "Sí. De hecho, muchas veces tiene más valor cuando forma parte de una estructura digital mejor pensada.",
  },
];

export default function AutomatizacionesPage() {
  return (
    <main>
      <ServicePage
        service={service}
        pageTitle="Automatizaciones para negocios que necesitan responder mejor, ordenar procesos y ganar eficiencia."
        pageDescription="Implementamos soluciones digitales para reducir fricción, mejorar atención, organizar flujos y ayudar a que tu negocio funcione con más claridad y menos carga manual."
        faqItems={faqItems}
      />
    </main>
  );
}
