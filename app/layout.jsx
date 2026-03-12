import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata = {
  metadataBase: new URL("https://www.lulabtech.com"),
  title: {
    default: "LulabTech | Diseño web premium para negocios en Panamá",
    template: "%s | LulabTech",
  },
  description:
    "Landing pages, webs corporativas, tiendas online y automatizaciones para negocios que necesitan una presencia digital más seria, clara y orientada a conversión.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
