"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PRODUCT_SPRITE } from "./productSprite";

const PHONE = "18296826461";

type Product = {
  name: string;
  ingredients: string;
  price: number;
  size: string;
  position: string;
};

const products: Product[] = [
  {
    name: "Tropical",
    ingredients: "Piña · naranja · limón",
    price: 200,
    size: "12 oz · 355 ml",
    position: "100% 0%",
  },
  {
    name: "Fresh Mint",
    ingredients: "Sandía · limón · menta",
    price: 200,
    size: "12 oz · 355 ml",
    position: "50% 0%",
  },
  {
    name: "Detox Energía",
    ingredients: "Pepino · piña · manzana verde · espinaca · apio · limón",
    price: 200,
    size: "12 oz · 355 ml",
    position: "100% 100%",
  },
  {
    name: "Red Boost",
    ingredients: "Remolacha · zanahoria · manzana roja · limón · jengibre",
    price: 200,
    size: "12 oz · 355 ml",
    position: "50% 100%",
  },
  {
    name: "Zanahoria Power",
    ingredients: "Zanahoria · naranja · limón · jengibre",
    price: 200,
    size: "12 oz · 355 ml",
    position: "0% 100%",
  },
  {
    name: "Combo Tropical",
    ingredients: "Jugo Tropical + Shot Detox",
    price: 250,
    size: "Jugo + shot",
    position: "0% 0%",
  },
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

    const existing = document.getElementById("product-showcase-portal-root");
    if (existing) {
      setMountNode(existing);
      return;
    }

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
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">Nuestro menú</p>
            <h2 className="display-font mt-3 text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">
              Fresco, simple y <span className="italic text-leaf">listo para pedir.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm leading-6 text-ink/55">
              Mostramos únicamente los productos para los que tenemos fotografía real de MO Vida.
            </p>
            <p className="mt-2 text-xs leading-5 text-ink/40">
              Precios de referencia. Confirma disponibilidad y total final al ordenar.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[28px] border border-forest/10 bg-white shadow-card transition duration-300 hover:-translate-y-1"
            >
              <div
                role="img"
                aria-label={`Fotografía de ${product.name} de MO Vida`}
                className="aspect-[4/3] bg-[#e8eddb] bg-cover bg-center bg-no-repeat transition duration-500 group-hover:scale-[1.015]"
                style={{
                  backgroundImage: `url(${PRODUCT_SPRITE})`,
                  backgroundSize: "300% 200%",
                  backgroundPosition: product.position,
                }}
              />

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black text-forest">{product.name}</h3>
                    <p className="mt-1 text-xs font-semibold text-ink/40">{product.size}</p>
                  </div>
                  <p className="shrink-0 text-lg font-black text-forest">RD${product.price}</p>
                </div>

                <p className="mt-4 text-sm leading-6 text-ink/60">{product.ingredients}</p>

                <a
                  href={`https://wa.me/${PHONE}?text=${encodeURIComponent(productMessage(product))}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-black text-forest transition hover:text-leaf"
                  aria-label={`Pedir ${product.name} por WhatsApp`}
                >
                  Pedir <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[26px] bg-forest px-6 py-6 text-white sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="font-black">¿Quieres que te recomendemos uno?</p>
            <p className="mt-1 text-sm text-white/65">Cuéntanos qué sabores prefieres y te orientamos por WhatsApp.</p>
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
