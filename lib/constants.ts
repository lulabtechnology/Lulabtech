export const SITE_NAME = "LulabTech";
export const SITE_DESCRIPTION =
  "Landing page premium para captar cotizaciones de proyectos digitales de alto impacto.";
export const CONTACT_EMAIL =
  process.env.CONTACT_TO_EMAIL || "ventas@lulabtech.com";

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "50700000000";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, quiero solicitar una cotización para un proyecto con LulabTech."
)}`;

export const NAV_ANCHORS = {
  projects: "proyectos",
  services: "servicios",
  why: "por-que-lulabtech",
  process: "proceso",
  quote: "cotizar"
} as const;
