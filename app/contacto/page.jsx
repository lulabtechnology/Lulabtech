import ContactPageContent from "@/components/contact/ContactPageContent";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Solicita tu cotización",
  path: "/contacto",
  description:
    "Cuéntanos qué necesita tu negocio y te ayudamos a definir la mejor solución digital según tu objetivo, estructura y tipo de proyecto.",
  keywords: ["cotizar página web en Panamá", "solicitar cotización web", "contacto agencia digital"],
});

export default function ContactoPage() {
  return (
    <main>
      <ContactPageContent />
    </main>
  );
}
