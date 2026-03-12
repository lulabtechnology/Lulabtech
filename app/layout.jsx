import "./globals.css";
import { Manrope } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import SchemaMarkup from "@/components/layout/SchemaMarkup";
import { buildMetadata } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = buildMetadata({
  description:
    "Agencia digital en Panamá especializada en landing pages, webs corporativas, tiendas online y automatizaciones con enfoque en diseño premium, claridad comercial y conversión.",
  keywords: [
    "diseño web en Panamá",
    "landing pages en Panamá",
    "web corporativa",
    "tienda online",
    "automatización para negocios",
  ],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1078ff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={manrope.variable}>
      <body>
        <SchemaMarkup />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
