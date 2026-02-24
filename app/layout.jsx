import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://lulabtech.com"),
  title: {
    default: "Lulabtech Studio | Landing pages, webs y tiendas online",
    template: "%s | Lulabtech Studio",
  },
  description:
    "Lulabtech Studio diseña landing pages, webs corporativas, tiendas online y automatizaciones con enfoque en conversión, diseño premium y experiencia móvil.",
  applicationName: "Lulabtech Studio",
  keywords: [
    "landing pages",
    "web corporativa",
    "tienda online",
    "diseño web Panamá",
    "desarrollo web Panamá",
    "automatizaciones para negocios",
    "agencia digital",
    "páginas web para negocios",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://lulabtech.com",
    siteName: "Lulabtech Studio",
    title: "Lulabtech Studio | Webs con enfoque en conversión y diseño premium",
    description:
      "Landing pages, webs corporativas, tiendas online y automatizaciones para marcas que quieren verse serias y vender mejor.",
    locale: "es_PA",
    images: [
      {
        url: "/logo-lulab.png",
        width: 512,
        height: 512,
        alt: "Logo Lulabtech Studio",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Lulabtech Studio",
    description:
      "Webs y automatizaciones con enfoque en conversión, diseño premium y experiencia móvil.",
    images: ["/logo-lulab.png"],
  },
  icons: {
    icon: "/logo-lulab.png",
    shortcut: "/logo-lulab.png",
    apple: "/logo-lulab.png",
  },
  category: "business",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1078ff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={manrope.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
