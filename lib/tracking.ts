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
  | "submit_contact_form"
  | "spa_page_view";

type TrackingParams = Record<string, string | number | boolean | null | undefined>;

type PageViewParams = {
  source?: string;
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

const META_STANDARD_EVENT_BY_EVENT_NAME: Partial<Record<TrackingEventName, "Contact" | "Lead" | "ViewContent">> = {
  click_whatsapp_header: "Contact",
  click_whatsapp_hero: "Contact",
  click_whatsapp_footer: "Contact",
  click_whatsapp_top_banner: "Contact",
  click_email: "Contact",
  click_formulario_contacto: "ViewContent",
  click_servicio_landing_page: "ViewContent",
  click_servicio_web_corporativa: "ViewContent",
  click_servicio_ecommerce: "ViewContent",
  click_servicio_software: "ViewContent",
  click_portafolio: "ViewContent",
  submit_contact_form: "Lead"
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: "event" | "config", eventName: string, params?: TrackingParams) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function getPageContext(): TrackingParams {
  if (typeof window === "undefined") {
    return {};
  }

  return {
    page_title: document.title,
    page_path: window.location.pathname,
    page_location: window.location.href
  };
}

function cleanParams(params: TrackingParams): TrackingParams {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== "")
  );
}

export function trackEvent(eventName: TrackingEventName | string, params: TrackingParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const eventParams = cleanParams({
    event_category: "engagement",
    ...getPageContext(),
    ...params
  });

  window.gtag?.("event", eventName, eventParams);
  window.dataLayer?.push({
    event: eventName,
    ...eventParams
  });

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, eventParams);

    const metaStandardEvent = META_STANDARD_EVENT_BY_EVENT_NAME[eventName as TrackingEventName];
    if (metaStandardEvent) {
      window.fbq("track", metaStandardEvent, eventParams);
    }
  }
}

export function trackPageView(params: PageViewParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const pageParams = cleanParams({
    event_category: "navigation",
    ...getPageContext(),
    ...params
  });

  if (GA_MEASUREMENT_ID) {
    window.gtag?.("config", GA_MEASUREMENT_ID, pageParams);
  }

  window.dataLayer?.push({
    event: "spa_page_view",
    ...pageParams
  });

  window.fbq?.("track", "PageView");
}
