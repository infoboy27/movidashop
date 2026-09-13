"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { BRAND_CHUNKS, createWebpObjectUrl } from "./generatedVisuals";

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

function replaceAboutVisual(brandSrc: string) {
  const about = document.getElementById("nosotros");
  const grid = about?.querySelector(":scope > div.grid");
  const visual = grid?.firstElementChild as HTMLElement | null;
  if (!visual || visual.dataset.generatedVisualApplied === "true") return () => {};

  const children = Array.from(visual.children) as HTMLElement[];
  const previousDisplays = children.map((child) => child.style.display);
  const previousBackgroundImage = visual.style.backgroundImage;
  const previousBackgroundSize = visual.style.backgroundSize;
  const previousBackgroundPosition = visual.style.backgroundPosition;
  const previousBackgroundRepeat = visual.style.backgroundRepeat;
  const previousBackgroundColor = visual.style.backgroundColor;
  const previousMinHeight = visual.style.minHeight;

  children.forEach((child) => {
    child.style.display = "none";
  });

  visual.dataset.generatedVisualApplied = "true";
  visual.style.minHeight = "470px";
  visual.style.backgroundColor = "#f6f0e3";
  visual.style.backgroundImage = `url("${brandSrc}")`;
  visual.style.backgroundSize = "cover";
  visual.style.backgroundPosition = "center";
  visual.style.backgroundRepeat = "no-repeat";

  return () => {
    children.forEach((child, index) => {
      child.style.display = previousDisplays[index];
    });
    delete visual.dataset.generatedVisualApplied;
    visual.style.minHeight = previousMinHeight;
    visual.style.backgroundColor = previousBackgroundColor;
    visual.style.backgroundImage = previousBackgroundImage;
    visual.style.backgroundSize = previousBackgroundSize;
    visual.style.backgroundPosition = previousBackgroundPosition;
    visual.style.backgroundRepeat = previousBackgroundRepeat;
  };
}

export default function SiteEnhancements() {
  useEffect(() => {
    const brandSrc = createWebpObjectUrl(BRAND_CHUNKS);
    const restoreAbout = replaceAboutVisual(brandSrc);

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
      URL.revokeObjectURL(brandSrc);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
