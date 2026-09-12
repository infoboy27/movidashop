import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MO Vida | Jugos verdes, smoothies y bienestar",
  description:
    "Jugos verdes frescos, smoothies, shots y planes de bienestar con delivery en Santo Domingo. Ordena por WhatsApp, PedidosYa o Uber Eats.",
  keywords: ["MO Vida", "jugos verdes", "smoothies", "shots", "Santo Domingo", "delivery"],
  openGraph: {
    title: "MO Vida — Salud en cada botella",
    description: "Jugos verdes, smoothies, shots y combos de bienestar en Santo Domingo.",
    type: "website",
    locale: "es_DO",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
