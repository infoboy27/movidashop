"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { PRODUCT_SPRITE } from "./productSprite";

const realProductPositions: Record<string, string> = {
  "Combo Tropical": "0% 0%",
  "Fresh Mint": "50% 0%",
  Tropical: "100% 0%",
  "Zanahoria Power": "0% 100%",
  "Red Boost": "50% 100%",
  "Detox Energía": "100% 100%",
};

function enhanceCatalogPhotos() {
  const menu = document.getElementById("menu");
  if (!menu) return;

  menu.querySelectorAll<HTMLElement>("article").forEach((article) => {
    const name = article.querySelector("h3")?.textContent?.trim();
    if (!name) return;

    const position = realProductPositions[name];
    if (!position) return;

    const visual = article.firstElementChild as HTMLElement | null;
    if (!visual || visual.dataset.realPhotoApplied === "true") return;

    visual.dataset.realPhotoApplied = "true";
    visual.classList.add("bg-[#e8eddb]");

    const illustration = Array.from(visual.children).find((child) =>
      (child as HTMLElement).className?.toString().includes("group-hover:-translate-y-2"),
    ) as HTMLElement | undefined;
    if (illustration) illustration.style.display = "none";

    const photo = document.createElement("div");
    photo.setAttribute("role", "img");
    photo.setAttribute("aria-label", `Fotografía real de ${name} de MO Vida`);
    photo.className = "absolute inset-0 z-[1] bg-no-repeat transition duration-500 group-hover:scale-[1.025]";
    photo.style.backgroundImage = `url(${PRODUCT_SPRITE})`;
    photo.style.backgroundSize = "300% 200%";
    photo.style.backgroundPosition = position;
    photo.style.backgroundRepeat = "no-repeat";
    photo.style.backgroundColor = "#eef1e4";

    const shade = document.createElement("div");
    shade.className = "pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-16 bg-gradient-to-t from-[#153727]/25 to-transparent";

    const tag = document.createElement("span");
    tag.textContent = "Foto real";
    tag.className = "absolute left-4 top-4 z-[12] rounded-full bg-[#153727]/90 px-3 py-1.5 text-[9px] font-black uppercase tracking-[.14em] text-white shadow-sm backdrop-blur";

    visual.prepend(photo);
    visual.append(shade, tag);
  });
}

function classifyConversion(element: Element) {
  const anchor = element.closest("a") as HTMLAnchorElement | null;
  const button = element.closest("button") as HTMLButtonElement | null;
  const href = anchor?.href || "";
  const label = (anchor?.textContent || button?.textContent || "").trim().replace(/\s+/g, " ").slice(0, 100);

  if (href.includes("wa.me/")) return { name: "whatsapp_click", props: { label } };
  if (href.includes("ubereats.com")) return { name: "uber_eats_click", props: { label } };
  if (href.includes("pedidosya.com")) return { name: "pedidosya_click", props: { label } };
  if (href.includes("instagram.com")) return { name: "instagram_click", props: { label } };
  if (href.includes("google.com/maps")) return { name: "location_click", props: { label } };
  if (button && /agregar/i.test(label)) return { name: "add_to_order", props: { label } };
  return null;
}

export default function SiteEnhancements() {
  useEffect(() => {
    enhanceCatalogPhotos();

    const menu = document.getElementById("menu");
    const observer = menu
      ? new MutationObserver(() => window.requestAnimationFrame(enhanceCatalogPhotos))
      : null;
    observer?.observe(menu!, { childList: true, subtree: true });

    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const conversion = classifyConversion(event.target);
      if (!conversion) return;
      try {
        track(conversion.name, conversion.props);
      } catch {
        // Analytics should never interrupt ordering/navigation.
      }
    };

    document.addEventListener("click", onClick, true);
    return () => {
      observer?.disconnect();
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
