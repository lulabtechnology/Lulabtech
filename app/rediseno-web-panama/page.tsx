import { ServiceLandingPage } from "@/components/pages/service-landing-page";
import { createServicePageMetadata } from "@/data/seo-pages";

export const metadata = createServicePageMetadata("rediseno-web-panama");

export default function Page() {
  return <ServiceLandingPage slug="rediseno-web-panama" />;
}
