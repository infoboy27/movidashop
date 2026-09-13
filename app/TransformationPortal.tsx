"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";
import { TRANSFORMATION_IMAGE } from "./transformationImage";

const PHONE = "18296826461";

const stories = [
  {
    src: TRANSFORMATION_IMAGE,
    alt: "Comparación visual de una transformación personal compartida como inspiración",
    label: "Historia 01",
  },
  {
    src: "/transformation-before-after-2.webp",
    alt: "Segunda comparación visual de una transformación personal compartida como inspiración",
    label: "Historia 02",
  },
];

export default function TransformationPortal() {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);
  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    const faq = document.getElementById("faq");
    if (!faq?.parentElement) return;

    const existing = document.getElementById("transformation-portal-root");
    if (existing) {
      setMountNode(existing);
      return;
    }

    const node = document.createElement("div");
    node.id = "transformation-portal-root";
    faq.parentElement.insertBefore(node, faq);
    setMountNode(node);

    return () => node.remove();
  }, []);

  if (!mountNode) return null;

  const message =
    "Hola MO Vida 👋 Vi la sección de inspiración en la web y quiero comenzar una rutina con sus jugos y opciones saludables. ¿Qué me recomiendan?";

  const previous = () =>
    setActiveStory((current) => (current - 1 + stories.length) % stories.length);
  const next = () => setActiveStory((current) => (current + 1) % stories.length);

  return createPortal(
    <section id="historias" className="relative overflow-hidden border-y border-forest/10 bg-[#eef2e6]">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-lime/25 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sun/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-8 lg:py-28">
        <div className="relative">
          <div className="absolute -left-3 -top-3 z-30 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[.16em] text-forest shadow-card backdrop-blur">
            2 historias reales
          </div>

          <div className="group relative overflow-hidden rounded-[34px] border border-white/80 bg-white p-2 shadow-soft sm:rounded-[42px] sm:p-3">
            <div className="relative overflow-hidden rounded-[28px] bg-[#dfe8d3] sm:rounded-[34px]">
              <img
                key={stories[activeStory].src}
                src={stories[activeStory].src}
                alt={stories[activeStory].alt}
                className="aspect-[1.04/1] w-full object-cover transition duration-700 group-hover:scale-[1.015]"
                loading={activeStory === 0 ? "eager" : "lazy"}
                decoding="async"
              />

              <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-4 sm:p-5">
                <span className="rounded-full bg-[#7f1d1d]/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.15em] text-white shadow-lg backdrop-blur">
                  Antes
                </span>
                <span className="rounded-full bg-forest/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.15em] text-white shadow-lg backdrop-blur">
                  Después
                </span>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10271d]/80 via-[#10271d]/25 to-transparent px-5 pb-5 pt-24 text-white sm:px-7 sm:pb-7">
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-white/65">
                  {stories[activeStory].label}
                </p>
                <p className="mt-1 max-w-lg text-sm font-semibold leading-6 text-white/95">
                  Cada proceso es distinto. La constancia y los hábitos sostenibles son los verdaderos protagonistas.
                </p>
              </div>

              <button
                type="button"
                onClick={previous}
                className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/90 text-forest shadow-lg backdrop-blur transition hover:scale-105"
                aria-label="Ver historia anterior"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/90 text-forest shadow-lg backdrop-blur transition hover:scale-105"
                aria-label="Ver siguiente historia"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 py-3">
              {stories.map((story, index) => (
                <button
                  key={story.label}
                  type="button"
                  onClick={() => setActiveStory(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeStory === index ? "w-8 bg-forest" : "w-2.5 bg-forest/20 hover:bg-forest/40"
                  }`}
                  aria-label={`Ver ${story.label.toLowerCase()}`}
                  aria-current={activeStory === index ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:pl-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white/65 px-4 py-2 text-xs font-extrabold uppercase tracking-[.15em] text-leaf shadow-sm">
            <Sparkles size={15} /> Bienestar que inspira
          </div>

          <h2 className="display-font mt-5 max-w-2xl text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">
            Pequeños hábitos. <span className="italic text-leaf">Grandes cambios.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-ink/65">
            Estas historias visuales pueden inspirar, pero una transformación física no sucede por un solo producto ni de la noche a la mañana. Alimentación, movimiento, descanso y constancia trabajan juntos. MO Vida puede acompañar esa rutina con opciones frescas, prácticas y fáciles de integrar a tu día.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Rutinas más conscientes",
              "Opciones frescas para tu día",
              "Consistencia sobre soluciones rápidas",
              "Acompañamiento por WhatsApp",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-forest/10 bg-white/55 px-4 py-3 text-sm font-bold text-ink/80">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest text-white">
                  <Check size={14} strokeWidth={3} />
                </span>
                {item}
              </div>
            ))}
          </div>

          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#18492f]"
          >
            <MessageCircle size={18} /> Quiero comenzar <ArrowRight size={17} />
          </a>

          <p className="mt-5 max-w-xl text-[11px] leading-5 text-ink/45">
            Imágenes compartidas como inspiración. Los resultados individuales pueden variar según alimentación, actividad física, descanso, salud y constancia. MO Vida acompaña hábitos saludables y no garantiza pérdida de peso ni resultados específicos.
          </p>
        </div>
      </div>
    </section>,
    mountNode,
  );
}
