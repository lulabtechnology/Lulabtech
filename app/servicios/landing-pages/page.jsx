import ServicePage from "@/components/services/ServicePage";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/site";

const service = services.find((item) => item.slug === "landing-pages");

export const metadata = buildMetadata({
  title: "Landing Pages en Panamá",
  path: "/servicios/landing-pages",
  description:
    "Diseñamos landing pages para campañas, servicios y captación de leads con estructura clara, diseño premium y enfoque en conversión.",
  keywords: ["landing pages en Panamá", "diseño de landing page", "landing page para captar clientes"],
});

const faqItems = [
  {
    question: "¿Una landing page sirve aunque no haga anuncios todavía?",
    answer: "Sí. También puede funcionar para tráfico desde redes, enlaces directos, referencias o presentaciones comerciales.",
  },
  {
    question: "¿La landing puede incluir WhatsApp, formulario o correo?",
    answer: "Sí. La estructura puede integrar el canal más conveniente según el tipo de negocio.",
  },
  {
    question: "¿Qué pasa si después necesito una web más grande?",
    answer: "La landing puede ser un buen primer paso y luego evolucionar hacia una estructura más amplia si el proyecto lo necesita.",
  },
];

export default function LandingPagesPage() {
  return (
    <main>
      <ServicePage
        service={service}
        pageTitle="Landing pages diseñadas para captar mejor, explicar con claridad y convertir con menos distracción."
        pageDescription="Creamos landing pages para campañas, servicios, promociones, lanzamientos y ofertas que necesitan una estructura directa, una narrativa clara y una experiencia pensada para generar consultas reales."
        faqItems={faqItems}
      />
    </main>
  );
}
