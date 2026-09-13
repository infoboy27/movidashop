"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MessageCircle } from "lucide-react";

const PHONE = "18296826461";

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
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#dfe8d3] p-6 sm:p-9">
      <div className="absolute -left-14 -top-12 h-48 w-48 rounded-full bg-[#f0cc69]/35 blur-2xl" />
      <div className="absolute -bottom-14 -right-10 h-52 w-52 rounded-full bg-leaf/20 blur-2xl" />

      <div className="relative w-full max-w-[540px] rounded-[36px] border border-white/70 bg-[#f7f2e7]/95 p-8 text-center shadow-soft sm:p-10">
        <img src="/movida-logo.svg" alt="MO Vida" className="mx-auto h-20 w-auto sm:h-24" />
        <p className="mt-7 text-[10px] font-black uppercase tracking-[.2em] text-leaf">Producto destacado</p>
        <h3 className="display-font mt-2 text-4xl leading-none text-forest sm:text-5xl">Combo Tropical</h3>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-ink/55">Jugo Tropical + Shot Detox · práctico, fresco y listo para pedir.</p>
        <div className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-forest shadow-sm">RD$250</div>

        <a
          href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hola MO Vida 👋 Vi el Combo Tropical en la web y quiero pedirlo. ¿Está disponible hoy?")}`}
          target="_blank"
          rel="noreferrer"
          className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#18492f]"
        >
          <MessageCircle size={17} /> Pedir Combo Tropical
        </a>
      </div>
    </div>,
    mountNode,
  );
}
