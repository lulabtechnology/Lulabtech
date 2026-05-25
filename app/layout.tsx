import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { AnalyticsNoScript, AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import { PageViewTracker } from "@/components/analytics/page-view-tracker";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E76FF"
};

const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1475809483955480";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

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
        <AnalyticsScripts gaMeasurementId={gaMeasurementId} gtmId={gtmId} metaPixelId={metaPixelId} />

        <AnalyticsNoScript gtmId={gtmId} metaPixelId={metaPixelId} />

        <PageViewTracker />
        {children}
      </body>
    </html>
  );
}
