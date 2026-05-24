import { ServiceLandingPage } from "@/components/pages/service-landing-page";
import { createServicePageMetadata } from "@/data/seo-pages";

export const metadata = createServicePageMetadata("paginas-web-corporativas-panama");

export default function Page() {
  return <ServiceLandingPage slug="paginas-web-corporativas-panama" />;
}
