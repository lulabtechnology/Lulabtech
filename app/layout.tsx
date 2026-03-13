import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "../components/layout/site-header";
import { SiteFooter } from "../components/layout/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "LulabTech | Estudio digital premium",
    template: "%s | LulabTech"
  },
  description:
    "Landing pages, webs corporativas, tiendas online y automatizaciones para marcas que necesitan una presencia digital más clara, premium y lista para convertir."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${sora.variable} bg-[var(--bg-main)] text-[var(--text-strong)] antialiased`}
      >
        <div className="page-noise" />
        <SiteHeader />
        <main className="relative isolate overflow-x-clip">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
