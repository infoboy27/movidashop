"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HERO_VISUAL } from "./generatedVisuals";

export default function HeroUpgrade() {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const image = hero?.querySelector<HTMLImageElement>('img[alt="Selección de jugos MO Vida"]');
    const visual = image?.parentElement;
    if (!visual || !image) return;

    const overlays = Array.from(visual.children).filter((child) =>
      ["Popular", "Disponible"].some((text) => child.textContent?.includes(text)),
    ) as HTMLElement[];
    const previousDisplays = overlays.map((element) => element.style.display);
    const previousOpacity = image.style.opacity;

    image.style.opacity = "0";
    overlays.forEach((element) => {
      element.style.display = "none";
    });

    const existing = document.getElementById("hero-upgrade-portal-root");
    if (existing) {
      setMountNode(existing);
      return;
    }

    const node = document.createElement("div");
    node.id = "hero-upgrade-portal-root";
    node.className = "absolute inset-4 z-10 overflow-hidden rounded-[42px] sm:inset-6 lg:inset-4 lg:rounded-[50px]";
    visual.appendChild(node);
    setMountNode(node);

    return () => {
      image.style.opacity = previousOpacity;
      overlays.forEach((element, index) => {
        element.style.display = previousDisplays[index];
      });
      node.remove();
    };
  }, []);

  if (!mountNode) return null;

  return createPortal(
    <div className="flex h-full w-full flex-col justify-center overflow-hidden bg-[#eef1e5] p-3 sm:p-5">
      <img
        src={HERO_VISUAL}
        alt="MO Vida: jugos naturales y opciones de pedido por WhatsApp, PedidosYa y Uber Eats"
        className="w-full rounded-[30px] object-contain shadow-card"
      />
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-black text-forest sm:text-xs">
        <span className="rounded-full bg-white px-2 py-2 shadow-sm sm:px-3">WhatsApp</span>
        <span className="rounded-full bg-white px-2 py-2 shadow-sm sm:px-3">PedidosYa</span>
        <span className="rounded-full bg-white px-2 py-2 shadow-sm sm:px-3">Uber Eats</span>
      </div>
    </div>,
    mountNode,
  );
}
