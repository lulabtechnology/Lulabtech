export type TrackingEventName =
  | "click_whatsapp_header"
  | "click_whatsapp_hero"
  | "click_whatsapp_footer"
  | "click_whatsapp_top_banner"
  | "click_email"
  | "click_formulario_contacto"
  | "click_servicio_landing_page"
  | "click_servicio_web_corporativa"
  | "click_servicio_ecommerce"
  | "click_servicio_software"
  | "click_portafolio"
  | "submit_contact_form";

type TrackingParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: "event", eventName: string, params?: TrackingParams) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: TrackingEventName | string, params: TrackingParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag?.("event", eventName, params);
  window.dataLayer?.push({
    event: eventName,
    ...params
  });
}
