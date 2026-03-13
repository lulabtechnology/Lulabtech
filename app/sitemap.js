import { absoluteUrl } from "@/lib/site";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/servicios", priority: 0.95, changeFrequency: "weekly" },
  { path: "/servicios/landing-pages", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/webs-corporativas", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/tiendas-online", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/automatizaciones", priority: 0.9, changeFrequency: "monthly" },
  { path: "/proyectos", priority: 0.85, changeFrequency: "monthly" },
  { path: "/sobre-lulabtech", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contacto", priority: 0.95, changeFrequency: "weekly" },
];

export default function sitemap() {
  const now = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
