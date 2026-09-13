"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PRODUCT_SPRITE } from "./productSprite";

export default function HeroUpgrade() {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const image = hero?.querySelector<HTMLImageElement>('img[alt="Selección de jugos MO Vida"]');
    const visual = image?.parentElement;
    if (!visual || !image) return;

    const legacyPopularCard = Array.from(visual.children).find((child) =>
      child.textContent?.includes("Popular"),
    ) as HTMLElement | undefined;
    const previousPopularDisplay = legacyPopularCard?.style.display ?? "";

    image.style.opacity = "0";
    if (legacyPopularCard) legacyPopularCard.style.display = "none";

    const node = document.createElement("div");
    node.id = "hero-upgrade-portal-root";
    node.className = "absolute inset-4 z-10 overflow-hidden rounded-[42px] sm:inset-6 lg:inset-4 lg:rounded-[50px]";
    visual.appendChild(node);
    setMountNode(node);

    return () => {
      image.style.opacity = "";
      if (legacyPopularCard) legacyPopularCard.style.display = previousPopularDisplay;
      node.remove();
    };
  }, []);

  if (!mountNode) return null;

  return createPortal(
    <div className="grid h-full gap-3 bg-[#dfe8d3] p-3 sm:grid-cols-[1.18fr_.82fr] sm:p-5">
      <div
        className="relative min-h-[300px] rounded-[30px] bg-cover bg-center bg-no-repeat sm:min-h-0"
        style={{
          backgroundImage: `url(${PRODUCT_SPRITE})`,
          backgroundSize: "300% 200%",
          backgroundPosition: "0% 0%",
        }}
      >
        <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-2 text-[10px] font-black uppercase tracking-[.14em] text-forest shadow">
          Combo Tropical
        </span>
      </div>
      <div className="hidden grid-rows-2 gap-3 sm:grid">
        <div
          className="rounded-[26px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${PRODUCT_SPRITE})`,
            backgroundSize: "300% 200%",
            backgroundPosition: "100% 0%",
          }}
        />
        <div
          className="rounded-[26px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${PRODUCT_SPRITE})`,
            backgroundSize: "300% 200%",
            backgroundPosition: "100% 100%",
          }}
        />
      </div>
    </div>,
    mountNode,
  );
}
