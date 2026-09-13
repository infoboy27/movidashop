import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MO Vida — Salud en cada botella",
    short_name: "MO Vida",
    description:
      "Jugos naturales, protein shakes, shots, combos y delivery en Santo Domingo.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F0E2",
    theme_color: "#1F5B3A",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
