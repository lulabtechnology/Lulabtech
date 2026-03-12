import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import SchemaMarkup from "@/components/layout/SchemaMarkup";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Diseño web premium para negocios en Panamá",
  description:
    "Landing pages, webs corporativas, tiendas online y automatizaciones para negocios que necesitan una presencia digital más seria, clara y orientada a conversión.",
  path: "/",
  keywords: [
    "diseño web panamá",
    "agencia digital panamá",
    "landing pages panamá",
    "web corporativa panamá",
    "tiendas online panamá",
    "automatización para negocios",
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="relative overflow-x-hidden text-slate-950">
        <SchemaMarkup />
        <div className="relative isolate min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_top,rgba(22,119,255,0.18),transparent_36%),radial-gradient(circle_at_top_right,rgba(17,194,138,0.12),transparent_22%)]" />
          <SiteHeader />
          <main className="relative">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
