import "./globals.css";

export const metadata = {
  title: "Lulabtech · Landing pages, webs y tiendas online",
  description:
    "Creamos landing pages, webs corporativas, tiendas online y bots conversacionales diseñados para convertir seguidores en clientes."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#020617] text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
