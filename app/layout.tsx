import type { Metadata } from "next";
import "./globals.css";

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
  alternates: {
    canonical: "/",
  },
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

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "MO Vida",
  url: SITE_URL,
  description: "Jugos naturales, protein shakes, shots funcionales, combos y desayunos en Santo Domingo.",
  telephone: "+1-829-682-6461",
  priceRange: "RD$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Esther Rosario 32",
    addressLocality: "Santo Domingo",
    addressRegion: "Distrito Nacional",
    addressCountry: "DO",
  },
  servesCuisine: ["Healthy", "Juice", "Smoothies"],
  sameAs: [
    "https://www.instagram.com/movidasdq/",
    "https://www.ubereats.com/do/store/mo-vida-sdq-santo-domingo/Ux3gzl0OQWSzHs6xKJPwdw",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </body>
    </html>
  );
}
