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

export default function SiteEnhancements() {
  useEffect(() => {
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
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
