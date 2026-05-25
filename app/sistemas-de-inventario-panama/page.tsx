import { ServiceLandingPage } from "@/components/pages/service-landing-page";
import { createServicePageMetadata } from "@/data/seo-pages";

export const metadata = createServicePageMetadata("sistemas-de-inventario-panama");

export default function Page() {
  return <ServiceLandingPage slug="sistemas-de-inventario-panama" />;
}
