import { ServiceLandingPage } from "@/components/pages/service-landing-page";
import { createServicePageMetadata } from "@/data/seo-pages";

export const metadata = createServicePageMetadata("cuanto-cuesta-una-pagina-web-en-panama");

export default function Page() {
  return <ServiceLandingPage slug="cuanto-cuesta-una-pagina-web-en-panama" />;
}
