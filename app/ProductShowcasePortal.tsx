"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Camera, Check, MessageCircle, ShoppingBag, Sparkles } from "lucide-react";
import { PRODUCT_SPRITE } from "./productSprite";

const PHONE = "18296826461";

type Product = {
  name: string;
  subtitle: string;
  ingredients: string;
  price: number;
  size: string;
  position: string;
  accent: string;
};

const products: Product[] = [
  {
    name: "Combo Tropical",
    subtitle: "Tropical + Shot Detox",
    ingredients: "Piña · naranja · limón · shot cítrico",
    price: 250,
    size: "Jugo + shot",
    position: "0% 0%",
    accent: "bg-[#e9a820]",
  },
  {
    name: "Fresh Mint",
    subtitle: "Ligero y refrescante",
    ingredients: "Sandía · limón · menta",
    price: 200,
    size: "12 oz · 355 ml",
    position: "50% 0%",
    accent: "bg-[#de7b6f]",
  },
  {
    name: "Tropical",
    subtitle: "Frutal y cítrico",
    ingredients: "Piña · naranja · limón",
    price: 200,
    size: "12 oz · 355 ml",
    position: "100% 0%",
    accent: "bg-[#e99b19]",
  },
  {
    name: "Zanahoria Power",
    subtitle: "Cítrico con carácter",
    ingredients: "Zanahoria · naranja · limón · jengibre",
    price: 200,
    size: "12 oz · 355 ml",
    position: "0% 100%",
    accent: "bg-[#d96815]",
  },
  {
    name: "Red Boost",
    subtitle: "Intenso y naturalmente vibrante",
    ingredients: "Remolacha · zanahoria · manzana roja · limón · jengibre",
    price: 200,
    size: "12 oz · 355 ml",
    position: "50% 100%",
    accent: "bg-[#8f1830]",
  },
  {
    name: "Detox Energía",
    subtitle: "El verde de la casa",
    ingredients: "Pepino · piña · manzana verde · espinaca · apio · limón",
    price: 200,
    size: "12 oz · 355 ml",
    position: "100% 100%",
    accent: "bg-[#477c2d]",
  },
];

function ProductPhoto({ product, className = "" }: { product: Product; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Fotografía de ${product.name} de MO Vida`}
      className={`bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${PRODUCT_SPRITE})`,
        backgroundSize: "300% 200%",
        backgroundPosition: product.position,
      }}
    />
  );
}

function productMessage(product: Product) {
  return `Hola MO Vida 👋 Vi ${product.name} en la web y quiero pedirlo. ¿Me confirman disponibilidad, precio final y delivery?`;
}

export default function ProductShowcasePortal() {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const menu = document.getElementById("menu");
    if (!menu?.parentElement) return;

    const existing = document.getElementById("product-showcase-portal-root");
    if (existing) {
      setMountNode(existing);
      return;
    }

    const node = document.createElement("div");
    node.id = "product-showcase-portal-root";
    menu.parentElement.insertBefore(node, menu);
    setMountNode(node);

    return () => node.remove();
  }, []);

  if (!mountNode) return null;

  const featured = products[0];
  const rest = products.slice(1);

  return createPortal(
    <section id="productos-reales" className="relative overflow-hidden border-b border-forest/10 bg-[#f8f4e9]">
      <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-lime/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-sun/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white/70 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.16em] text-leaf shadow-sm">
              <Camera size={15} /> Fotos reales · Línea MO Vida
            </div>
            <h2 className="display-font mt-5 text-4xl leading-[.98] sm:text-5xl lg:text-6xl">
              Tu favorito empieza <span className="italic text-leaf">por el sabor.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/65">
              Ahora puedes conocer mejor la línea MO Vida antes de ordenar. Sabores frescos, ingredientes reconocibles y una forma más simple de pedir desde tu celular.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-5 py-3 text-sm font-extrabold text-forest transition hover:-translate-y-0.5 hover:bg-white"
          >
            Ver menú completo <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-10 overflow-hidden rounded-[36px] border border-forest/10 bg-white/65 shadow-soft lg:grid lg:grid-cols-[1.08fr_.92fr]">
          <div className="relative min-h-[430px] overflow-hidden bg-[#e8eddb] sm:min-h-[520px] lg:min-h-[610px]">
            <ProductPhoto product={featured} className="absolute inset-0 h-full w-full bg-cover bg-center transition duration-700 hover:scale-[1.015]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10271d]/80 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[.17em] text-forest shadow-lg backdrop-blur sm:left-7 sm:top-7">
              Combo destacado
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:hidden">
              <p className="text-xs font-black uppercase tracking-[.16em] text-white/70">{featured.size}</p>
              <h3 className="mt-2 text-3xl font-black">{featured.name}</h3>
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <div className="hidden lg:block">
              <span className="inline-flex rounded-full bg-[#eef3e5] px-3 py-1.5 text-[10px] font-black uppercase tracking-[.17em] text-leaf">
                MO recomendado
              </span>
              <h3 className="display-font mt-5 text-5xl leading-none">Combo <span className="italic text-[#df9c18]">Tropical.</span></h3>
            </div>
            <p className="mt-4 text-lg font-extrabold text-ink/80">{featured.subtitle}</p>
            <p className="mt-3 text-sm leading-6 text-ink/55">{featured.ingredients}</p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-forest/10 bg-[#f8f5ec] p-4">
                <p className="text-[10px] font-black uppercase tracking-[.15em] text-ink/40">Presentación</p>
                <p className="mt-2 font-black">{featured.size}</p>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-[#f8f5ec] p-4">
                <p className="text-[10px] font-black uppercase tracking-[.15em] text-ink/40">Precio referencia</p>
                <p className="mt-2 text-xl font-black">RD${featured.price}</p>
              </div>
            </div>

            <div className="mt-7 space-y-3 text-sm font-bold text-ink/70">
              <p className="flex items-center gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-white"><Check size={14} strokeWidth={3} /></span> Fácil de pedir desde WhatsApp</p>
              <p className="flex items-center gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-white"><Check size={14} strokeWidth={3} /></span> Delivery sujeto a tu ubicación</p>
            </div>

            <a
              href={`https://wa.me/${PHONE}?text=${encodeURIComponent(productMessage(featured))}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-black text-[#09371d] shadow-card transition hover:-translate-y-0.5"
            >
              <MessageCircle size={18} /> Pedir Combo Tropical
            </a>
            <p className="mt-3 text-center text-[10px] leading-4 text-ink/40">Precio mostrado como referencia. Confirma disponibilidad y total final al ordenar.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {rest.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-[28px] border border-forest/10 bg-white/70 shadow-card transition duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#e7ecd9]">
                <ProductPhoto product={product} className="absolute inset-0 h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-[1.035]" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#10271d]/65 to-transparent" />
                <span className={`absolute left-4 top-4 h-2.5 w-2.5 rounded-full ${product.accent} shadow`} aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-[9px] font-black uppercase tracking-[.16em] text-white/70">{product.size}</p>
                  <h3 className="mt-1 text-xl font-black leading-tight">{product.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="font-extrabold text-ink/80">{product.subtitle}</p>
                <p className="mt-2 min-h-[40px] text-xs leading-5 text-ink/50">{product.ingredients}</p>
                <div className="mt-5 flex items-center justify-between gap-2 border-t border-forest/10 pt-4">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[.12em] text-ink/35">Referencia</p>
                    <p className="font-black">RD${product.price}</p>
                  </div>
                  <a
                    href={`https://wa.me/${PHONE}?text=${encodeURIComponent(productMessage(product))}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-white transition group-hover:bg-[#18492f]"
                    aria-label={`Pedir ${product.name} por WhatsApp`}
                  >
                    <ShoppingBag size={17} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[28px] bg-forest px-6 py-6 text-white sm:flex-row sm:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10"><Sparkles size={18} /></span>
            <div>
              <p className="font-black">¿No sabes cuál elegir?</p>
              <p className="mt-1 text-sm leading-6 text-white/65">Cuéntanos qué sabores prefieres y te ayudamos a encontrar una opción para tu día.</p>
            </div>
          </div>
          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hola MO Vida 👋 Estoy viendo la nueva web y quiero una recomendación. ¿Qué jugo o combo me sugieren?")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-forest transition hover:-translate-y-0.5 sm:w-auto"
          >
            Recomiéndame uno <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>,
    mountNode,
  );
}
