"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

function classifyConversion(element: Element) {
  const anchor = element.closest("a") as HTMLAnchorElement | null;
  const href = anchor?.href || "";
  const label = (anchor?.textContent || "").trim().replace(/\s+/g, " ").slice(0, 100);

  if (href.includes("wa.me/")) return { name: "whatsapp_click", props: { label } };
  if (href.includes("ubereats.com")) return { name: "uber_eats_click", props: { label } };
  if (href.includes("pedidosya.com")) return { name: "pedidosya_click", props: { label } };
  if (href.includes("instagram.com")) return { name: "instagram_click", props: { label } };
  if (href.includes("google.com/maps")) return { name: "location_click", props: { label } };
  return null;
}

function replaceAboutVisual() {
  const about = document.getElementById("nosotros");
  const grid = about?.querySelector(":scope > div.grid");
  const visual = grid?.firstElementChild as HTMLElement | null;
  if (!visual || visual.dataset.generatedVisualApplied === "true") return () => {};

  const children = Array.from(visual.children) as HTMLElement[];
  const previousDisplays = children.map((child) => child.style.display);
  const previousBackgroundColor = visual.style.backgroundColor;
  const previousMinHeight = visual.style.minHeight;
  const previousPadding = visual.style.padding;

  children.forEach((child) => {
    child.style.display = "none";
  });

  visual.dataset.generatedVisualApplied = "true";
  visual.style.minHeight = "470px";
  visual.style.backgroundColor = "#f6f0e3";
  visual.style.padding = "0";

  const image = document.createElement("img");
  image.src = "/generated/brand.webp";
  image.alt = "MO Vida: jugos naturales frescos para tu día";
  image.className = "h-full min-h-[470px] w-full object-contain object-center";
  image.dataset.generatedBrandVisual = "true";
  visual.appendChild(image);

  return () => {
    image.remove();
    children.forEach((child, index) => {
      child.style.display = previousDisplays[index];
    });
    delete visual.dataset.generatedVisualApplied;
    visual.style.minHeight = previousMinHeight;
    visual.style.backgroundColor = previousBackgroundColor;
    visual.style.padding = previousPadding;
  };
}

export default function SiteEnhancements() {
  useEffect(() => {
    const restoreAbout = replaceAboutVisual();

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
      restoreAbout();
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
