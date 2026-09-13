"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

const PHONE = "18296826461";

type Product = {
  name: string;
  ingredients: string;
  price: number;
  size: string;
};

const products: Product[] = [
  { name: "Tropical", ingredients: "Piña · naranja · limón", price: 200, size: "12 oz · 355 ml" },
  { name: "Fresh Mint", ingredients: "Sandía · limón · menta", price: 200, size: "12 oz · 355 ml" },
  { name: "Detox Energía", ingredients: "Pepino · piña · manzana verde · espinaca · apio · limón", price: 200, size: "12 oz · 355 ml" },
  { name: "Red Boost", ingredients: "Remolacha · zanahoria · manzana roja · limón · jengibre", price: 200, size: "12 oz · 355 ml" },
  { name: "Zanahoria Power", ingredients: "Zanahoria · naranja · limón · jengibre", price: 200, size: "12 oz · 355 ml" },
  { name: "Combo Tropical", ingredients: "Jugo Tropical + Shot Detox", price: 250, size: "Jugo + shot" },
];

function productMessage(product: Product) {
  return `Hola MO Vida 👋 Vi ${product.name} en la web y quiero pedirlo. ¿Me confirman disponibilidad, precio final y delivery?`;
}

export default function ProductShowcasePortal() {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const legacyMenu = document.getElementById("menu");
    if (!legacyMenu?.parentElement) return;

    const legacyOrderSection = legacyMenu.nextElementSibling as HTMLElement | null;
    const previousMenuDisplay = legacyMenu.style.display;
    const previousOrderDisplay = legacyOrderSection?.style.display ?? "";

    legacyMenu.id = "menu-legacy";
    legacyMenu.style.display = "none";
    if (legacyOrderSection) legacyOrderSection.style.display = "none";

    const node = document.createElement("div");
    node.id = "product-showcase-portal-root";
    legacyMenu.parentElement.insertBefore(node, legacyMenu);
    setMountNode(node);

    return () => {
      legacyMenu.id = "menu";
      legacyMenu.style.display = previousMenuDisplay;
      if (legacyOrderSection) legacyOrderSection.style.display = previousOrderDisplay;
      node.remove();
    };
  }, []);

  if (!mountNode) return null;

  return createPortal(
    <section id="menu" className="border-b border-forest/10 bg-[#faf7ef]">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">Nuestro menú</p>
            <h2 className="display-font mt-3 text-4xl leading-[1.02] sm:text-5xl">
              Fresco, simple y <span className="italic text-leaf">listo para pedir.</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm leading-6 text-ink/55">
              Una carta compacta de jugos y combos, con ingredientes y pedido directo por WhatsApp.
            </p>
            <p className="mt-2 text-xs leading-5 text-ink/40">
              Precios de referencia. Confirma disponibilidad y total final al ordenar.
            </p>
          </div>
        </div>

        <div className="mt-9 grid gap-3 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.name}
              className="rounded-[22px] border border-forest/10 bg-white px-5 py-5 transition hover:border-forest/25 hover:shadow-card sm:px-6"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg font-black text-forest">{product.name}</h3>
                    <span className="text-[11px] font-semibold uppercase tracking-[.09em] text-ink/35">{product.size}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-ink/55">{product.ingredients}</p>
                </div>
                <p className="shrink-0 text-lg font-black text-forest">RD${product.price}</p>
              </div>

              <a
                href={`https://wa.me/${PHONE}?text=${encodeURIComponent(productMessage(product))}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-black text-forest transition hover:text-leaf"
                aria-label={`Pedir ${product.name} por WhatsApp`}
              >
                Pedir <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-[22px] bg-forest px-6 py-5 text-white sm:flex-row sm:items-center">
          <div>
            <p className="font-black">¿No sabes cuál elegir?</p>
            <p className="mt-1 text-sm text-white/65">Te ayudamos por WhatsApp según los sabores que prefieras.</p>
          </div>
          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hola MO Vida 👋 Estoy viendo el menú y quiero una recomendación. ¿Qué jugo o combo me sugieren?")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-forest"
          >
            <MessageCircle size={17} /> Recomiéndame uno
          </a>
        </div>
      </div>
    </section>,
    mountNode,
  );
}
