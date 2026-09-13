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
    <div className="flex h-full items-center justify-center bg-[#dfe8d3] p-5 sm:p-8">
      <div className="grid w-full max-w-[560px] items-center gap-6 rounded-[34px] bg-[#f7f2e7] p-5 shadow-card sm:grid-cols-[220px_1fr] sm:p-6">
        <div className="mx-auto w-[210px] sm:w-[220px]">
          <div
            role="img"
            aria-label="Combo Tropical de MO Vida"
            className="aspect-[3/4] w-full rounded-[26px] bg-cover bg-center bg-no-repeat shadow-soft"
            style={{
              backgroundImage: `url(${PRODUCT_SPRITE})`,
              backgroundSize: "300% 200%",
              backgroundPosition: "0% 0%",
            }}
          />
        </div>

        <div className="text-center sm:text-left">
          <p className="text-[10px] font-black uppercase tracking-[.18em] text-leaf">Producto destacado</p>
          <h3 className="display-font mt-2 text-3xl leading-none text-forest">Combo Tropical</h3>
          <p className="mt-3 text-sm leading-6 text-ink/55">Jugo Tropical + Shot Detox</p>
          <div className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-forest shadow-sm">RD$250</div>
        </div>
      </div>
    </div>,
    mountNode,
  );
}
