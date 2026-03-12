import ServicePage from "@/components/services/ServicePage";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/site";

const service = services.find((item) => item.slug === "tiendas-online");

export const metadata = buildMetadata({
  title: "Tiendas Online en Panamá",
  path: "/servicios/tiendas-online",
  description:
    "Desarrollamos tiendas online y catálogos web para negocios que necesitan vender con mejor orden, experiencia y presencia de marca.",
  keywords: ["tiendas online en Panamá", "ecommerce en Panamá", "diseño de tienda online"],
});

const faqItems = [
  {
    question: "¿Necesito una tienda completa o me sirve un catálogo?",
    answer: "Depende del tipo de negocio, del proceso de venta y del nivel de complejidad que realmente necesites.",
  },
  {
    question: "¿La tienda puede conectar con WhatsApp?",
    answer: "Sí. En algunos casos esa integración tiene mucho sentido como parte del flujo comercial.",
  },
  {
    question: "¿Sirve si todavía vendo poco?",
    answer: "Sí. Una buena estructura puede ayudarte precisamente a vender con más orden y mejor percepción.",
  },
];

export default function TiendasOnlinePage() {
  return (
    <main>
      <ServicePage
        service={service}
        pageTitle="Tiendas online y catálogos web pensados para vender con más orden, mejor experiencia y una marca más sólida."
        pageDescription="Creamos tiendas online y catálogos digitales para negocios que necesitan mostrar productos con mejor presentación, vender con más claridad y construir una experiencia más profesional."
        faqItems={faqItems}
        extraSection={
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-950">Tienda vs catálogo</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">En algunos casos conviene una tienda con flujo de compra más completo. En otros, un catálogo bien pensado con contacto directo puede ser suficiente para empezar. La clave está en elegir la estructura correcta según el volumen, tipo de producto y forma de vender.</p>
          </div>
        }
      />
    </main>
  );
}
