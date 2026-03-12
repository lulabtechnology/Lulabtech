import ServicePage from "@/components/services/ServicePage";

export const metadata = {
  title: "Tiendas Online en Panamá | LulabTech",
  description:
    "Tiendas online y catálogos web pensados para vender con más orden, mejor experiencia y una marca más sólida.",
};

const whatsappHref =
  "https://wa.me/50767069044?text=Hola%20LulabTech%2C%20me%20interesa%20cotizar%20una%20tienda%20online%20o%20cat%C3%A1logo%20web.";

export default function TiendasOnlinePage() {
  return (
    <ServicePage
      eyebrow="Tiendas Online"
      title="Tiendas online y catálogos web pensados para vender con más orden, mejor experiencia y una marca más sólida."
      description="Creamos tiendas online y catálogos digitales para negocios que necesitan mostrar productos con mejor presentación, vender con más claridad y construir una experiencia más profesional."
      useCasesTitle="¿Cuándo conviene una tienda online o un catálogo web?"
      useCases={[
        "Negocios con varios productos",
        "Marcas que venden por Instagram o WhatsApp",
        "Catálogos que necesitan orden",
        "Productos que requieren mejor presentación",
        "Negocios que quieren prepararse para campañas",
      ]}
      valueTitle="No todos los negocios necesitan el mismo nivel de ecommerce."
      valueText="En algunos casos conviene una tienda con flujo de compra más completo. En otros, un catálogo bien pensado con contacto directo puede ser suficiente para empezar. La clave está en elegir la estructura correcta según el volumen, tipo de producto y forma de vender."
      bullets={[
        "Organización clara de productos",
        "Presentación visual más sólida",
        "Experiencia mobile-first",
        "Rutas de contacto o compra mejor pensadas",
        "Base preparada para crecer",
      ]}
      faqs={[
        {
          question: "¿Necesito una tienda completa o me sirve un catálogo?",
          answer:
            "Depende del tipo de negocio, del proceso de venta y del nivel de complejidad que realmente necesites.",
        },
        {
          question: "¿La tienda puede conectar con WhatsApp?",
          answer:
            "Sí. En algunos casos esa integración tiene mucho sentido como parte del flujo comercial.",
        },
        {
          question: "¿Sirve si todavía vendo poco?",
          answer:
            "Sí. Una buena estructura puede ayudarte precisamente a vender con más orden y mejor percepción.",
        },
      ]}
      whatsappHref={whatsappHref}
    />
  );
}
