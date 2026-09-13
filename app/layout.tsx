import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import ProductShowcasePortal from "./ProductShowcasePortal";
import SiteEnhancements from "./SiteEnhancements";
import TransformationPortal from "./TransformationPortal";

const SITE_URL = "https://movidashop.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MO Vida | Jugos naturales y bienestar en Santo Domingo",
    template: "%s | MO Vida",
  },
  description:
    "Jugos naturales, protein shakes, shots funcionales, combos y desayunos con delivery en Santo Domingo. Ordena por WhatsApp, PedidosYa o Uber Eats.",
  keywords: [
    "MO Vida",
    "jugos naturales Santo Domingo",
    "jugos verdes",
    "protein shakes",
    "shots funcionales",
    "delivery saludable Santo Domingo",
  ],
  applicationName: "MO Vida",
  category: "food",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "MO Vida — Salud en cada botella",
    description: "Jugos naturales, protein shakes, shots, combos y delivery en Santo Domingo.",
    url: "/",
    type: "website",
    locale: "es_DO",
    siteName: "MO Vida",
  },
  twitter: {
    card: "summary_large_image",
    title: "MO Vida — Salud en cada botella",
    description: "Jugos naturales, protein shakes, shots y delivery en Santo Domingo.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        <ProductShowcasePortal />
        <TransformationPortal />
        <SiteEnhancements />
        <Analytics />
      </body>
    </html>
  );
}
