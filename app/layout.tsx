import type { Metadata } from "next";
import "./globals.css";
import ProductShowcasePortal from "./ProductShowcasePortal";
import TransformationPortal from "./TransformationPortal";

const SITE_URL = "https://movidashop.vercel.app";
const UBER_EATS_URL = "https://www.ubereats.com/do/store/mo-vida-sdq-santo-domingo/Ux3gzl0OQWSzHs6xKJPwdw";

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
  hasMenu: UBER_EATS_URL,
  description: "Jugos naturales, protein shakes, shots funcionales, combos y desayunos en Santo Domingo.",
  telephone: "+1-829-682-6461",
  priceRange: "RD$",
  areaServed: "Santo Domingo, Dominican Republic",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Esther Rosario 32",
    addressLocality: "Santo Domingo",
    addressRegion: "Distrito Nacional",
    addressCountry: "DO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "22:00",
    },
  ],
  servesCuisine: ["Healthy", "Juice", "Smoothies"],
  sameAs: [
    "https://www.instagram.com/movidasdq/",
    UBER_EATS_URL,
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        <ProductShowcasePortal />
        <TransformationPortal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </body>
    </html>
  );
}
