import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { siteMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          inter.variable,
          manrope.variable,
          "min-h-screen bg-white font-sans text-ink-900"
        )}
      >
        {children}
      </body>
    </html>
  );
}
