import ServicePage from "@/components/services/ServicePage";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/site";

const service = services.find((item) => item.slug === "webs-corporativas");

export const metadata = buildMetadata({
  title: "Webs Corporativas en Panamá",
  path: "/servicios/webs-corporativas",
  description:
    "Creamos webs corporativas para empresas, profesionales y marcas que necesitan una presencia digital más seria, clara y confiable.",
  keywords: ["webs corporativas en Panamá", "diseño web corporativo", "página web para empresa"],
});

const faqItems = [
  {
    question: "¿Una web corporativa es mejor que una landing page?",
    answer: "Depende del objetivo. Si necesitas presentar varios servicios o construir una presencia más completa, normalmente sí. Si solo quieres captar para una oferta puntual, puede convenir más una landing.",
  },
  {
    question: "¿Sirve para empresas pequeñas también?",
    answer: "Sí. No depende del tamaño del negocio, sino de la necesidad de comunicación y estructura.",
  },
  {
    question: "¿Puedo usarla para campañas también?",
    answer: "Sí, aunque en algunos casos conviene combinar una web corporativa con landing pages específicas.",
  },
];

export default function WebsCorporativasPage() {
  return (
    <main>
      <ServicePage
        service={service}
        pageTitle="Webs corporativas para marcas, empresas y profesionales que necesitan una presencia más seria, clara y confiable."
        pageDescription="Diseñamos webs corporativas para negocios que necesitan presentar mejor sus servicios, ordenar su oferta y transmitir una imagen digital más sólida frente a clientes, aliados y prospectos."
        faqItems={faqItems}
      />
    </main>
  );
}
