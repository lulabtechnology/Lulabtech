import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Lulabtech · Landing pages, webs y tiendas online",
  description:
    "Creamos landing pages, webs corporativas, tiendas online y bots pensados para convertir seguidores en clientes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={manrope.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
