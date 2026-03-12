import { absoluteUrl } from "@/lib/site";

const routes = [
  "/",
  "/servicios",
  "/servicios/landing-pages",
  "/servicios/webs-corporativas",
  "/servicios/tiendas-online",
  "/servicios/automatizaciones",
  "/proyectos",
  "/sobre-lulabtech",
  "/contacto",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
