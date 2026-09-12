"use client";

import { useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bike,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import { catalog, categories } from "./catalog";

const PHONE = "18296826461";
const INSTAGRAM = "https://www.instagram.com/movidasdq/";
const PEDIDOSYA = "https://www.pedidosya.com.do/";
const UBEREATS = "https://www.ubereats.com/do/store/mo-vida-sdq-santo-domingo/Ux3gzl0OQWSzHs6xKJPwdw";
const ADDRESS = "Esther Rosario 32, Distrito Nacional";

const faqs = [
  [
    "¿Cómo hago un pedido?",
    "Puedes armar tu pedido aquí y enviarlo por WhatsApp. También puedes ordenar directamente por Uber Eats o buscar MO Vida en PedidosYa.",
  ],
  [
    "¿Hacen delivery?",
    "Sí. MO Vida ofrece delivery en Santo Domingo. La cobertura, el costo y el tiempo de entrega dependen de tu ubicación y de la plataforma elegida.",
  ],
  [
    "¿Los precios de la web son finales?",
    "Los precios mostrados son de referencia del menú público y pueden cambiar por promociones o por la plataforma. El total final se confirma antes de completar el pedido.",
  ],
  [
    "¿Puedo hacer un pedido para oficina o evento?",
    "Sí. Escríbenos por WhatsApp con la cantidad de personas, fecha y zona de entrega para ayudarte a coordinarlo.",
  ],
];

function WhatsAppLink({
  children,
  message,
  className = "",
}: {
  children: ReactNode;
  message: string;
  className?: string;
}) {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function Bottle({ tone, small = false }: { tone: string; small?: boolean }) {
  return (
    <div className={`relative ${small ? "h-36 w-20" : "h-64 w-32"}`} aria-hidden="true">
      <div
        className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-xl bg-[#20231f] ${
          small ? "h-6 w-12" : "h-9 w-16"
        }`}
      />
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-[30px] bg-gradient-to-b ${tone} shadow-2xl ${
          small ? "h-[126px] w-[68px]" : "h-[226px] w-[112px]"
        }`}
      >
        <div className="absolute inset-y-4 left-3 w-2 rounded-full bg-white/15" />
        <div className="absolute left-1/2 top-[42%] w-[74%] -translate-x-1/2 rounded-2xl bg-[#f8f3e7]/95 px-2 py-3 text-center">
          <p className="font-bold leading-none text-[#4c7d3f]">MO</p>
          <p className={`display-font italic leading-none text-[#4c7d3f] ${small ? "text-base" : "text-2xl"}`}>
            Vida
          </p>
          <p className="mt-1 text-[6px] uppercase tracking-[.18em] text-[#806d4d]">natural</p>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, children, copy }: { eyebrow: string; children: ReactNode; copy?: string }) {
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">{eyebrow}</p>
        <h2 className="display-font mt-3 max-w-3xl text-4xl leading-[1.02] sm:text-5xl">{children}</h2>
      </div>
      {copy ? <p className="max-w-md text-sm leading-6 text-ink/60">{copy}</p> : null}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState<(typeof categories)[number]>("Todos");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [openFaq, setOpenFaq] = useState(0);

  const filtered = category === "Todos" ? catalog : catalog.filter((item) => item.category === category);
  const count = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  const referenceTotal = catalog.reduce((sum, item) => sum + (cart[item.id] || 0) * (item.price || 0), 0);

  const orderMessage = useMemo(() => {
    const lines = catalog
      .filter((item) => cart[item.id])
      .map((item) => `• ${cart[item.id]} x ${item.name}`);

    if (!lines.length) return "Hola MO Vida 👋 Quiero conocer el menú y hacer un pedido.";

    return `Hola MO Vida 👋\nQuiero hacer este pedido:\n${lines.join(
      "\n",
    )}\n\nTotal de referencia: RD$${referenceTotal.toLocaleString("es-DO")}.\n¿Me confirman disponibilidad, precio final y delivery?`;
  }, [cart, referenceTotal]);

  const add = (id: string) => setCart((current) => ({ ...current, [id]: (current[id] || 0) + 1 }));
  const remove = (id: string) =>
    setCart((current) => ({ ...current, [id]: Math.max(0, (current[id] || 0) - 1) }));

  return (
    <main className="overflow-x-hidden pb-20 md:pb-0">
      <div className="bg-forest px-4 py-2.5 text-center text-[11px] font-extrabold uppercase tracking-[.15em] text-white sm:text-xs">
        Salud en cada botella · Delivery en Santo Domingo · WhatsApp 829-682-6461
      </div>

      <header className="glass sticky top-0 z-50 border-b border-forest/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" aria-label="Ir al inicio">
            <img src="/movida-logo.svg" alt="MO Vida" className="h-14 w-auto" />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Navegación principal">
            <a className="transition hover:text-leaf" href="#menu">Menú</a>
            <a className="transition hover:text-leaf" href="#delivery">Delivery</a>
            <a className="transition hover:text-leaf" href="#nosotros">MO Vida</a>
            <a className="transition hover:text-leaf" href="#faq">Preguntas</a>
          </nav>

          <div className="flex items-center gap-2">
            <WhatsAppLink
              message="Hola MO Vida 👋 Quiero conocer el menú y hacer un pedido."
              className="hidden items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#18492f] sm:flex"
            >
              <MessageCircle size={17} /> Ordenar
            </WhatsAppLink>
            <button
              onClick={() => setMenuOpen((value) => !value)}
              className="rounded-full border border-forest/15 p-3 lg:hidden"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-forest/10 lg:hidden"
            >
              <div className="space-y-1 px-5 py-4 font-semibold">
                {[
                  ["#menu", "Menú"],
                  ["#delivery", "Delivery"],
                  ["#nosotros", "MO Vida"],
                  ["#faq", "Preguntas"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    onClick={() => setMenuOpen(false)}
                    href={href}
                    className="block rounded-xl px-3 py-3 hover:bg-white/50"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <section id="inicio" className="soft-grid relative overflow-hidden">
        <div className="absolute -left-20 top-28 h-72 w-72 rounded-full bg-lime/20 blur-3xl" />
        <div className="absolute -right-16 top-0 h-96 w-96 rounded-full bg-sun/25 blur-3xl" />
        <div className="relative mx-auto grid min-h-[710px] max-w-7xl items-center gap-8 px-5 py-14 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/55 px-4 py-2 text-xs font-extrabold uppercase tracking-[.14em] shadow-sm">
              <Leaf size={15} className="text-leaf" /> Fresco · Natural · Santo Domingo
            </div>
            <h1 className="display-font max-w-[690px] text-5xl font-medium leading-[.93] sm:text-6xl lg:text-7xl xl:text-[82px]">
              Tu bienestar, <span className="italic text-leaf">listo para llevar.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-ink/70 sm:text-lg">
              Jugos naturales, protein shakes, shots funcionales, combos y desayunos para hacer que cuidarte se sienta fácil y rico.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 font-extrabold text-white shadow-soft transition hover:-translate-y-0.5"
              >
                Ver menú <ArrowRight size={18} />
              </a>
              <WhatsAppLink
                message="Hola MO Vida 👋 Quiero hacer un pedido."
                className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/20 bg-white/65 px-7 py-4 font-extrabold transition hover:bg-white"
              >
                <MessageCircle size={18} /> Pedir por WhatsApp
              </WhatsAppLink>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink/65">
              <span className="flex items-center gap-2"><Check size={17} /> Ingredientes frescos</span>
              <span className="flex items-center gap-2"><Check size={17} /> Delivery disponible</span>
              <span className="flex items-center gap-2"><Check size={17} /> Pedidos rápidos</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative min-h-[500px] lg:min-h-[630px]"
          >
            <div className="absolute inset-4 rounded-[54px] border border-white/70 bg-[#e7ecd9] shadow-soft lg:inset-0" />
            <div className="absolute left-3 top-10 z-20 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-card backdrop-blur sm:left-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-ink/45">Popular</p>
              <p className="mt-1 font-extrabold">Combo Bienestar</p>
              <div className="mt-2 flex items-center gap-1 text-xs text-leaf"><Star size={13} fill="currentColor" /> MO favorito</div>
            </div>
            <div className="absolute bottom-10 right-2 z-20 rounded-2xl bg-forest p-4 text-white shadow-card sm:right-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-white/60">Disponible</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-bold"><Bike size={17} /> Delivery</p>
            </div>
            <img src="/hero-bottles.svg" alt="Selección de jugos MO Vida" className="relative z-10 h-full w-full object-contain p-4 sm:p-8" />
          </motion.div>
        </div>
      </section>

      <section id="delivery" className="border-y border-forest/10 bg-[#faf7ef]">
        <div className="mx-auto max-w-7xl px-5 py-7 lg:px-8">
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-extrabold">Pide donde te resulte más cómodo.</p>
            <p className="text-xs text-ink/50">La disponibilidad depende de tu dirección.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href={PEDIDOSYA}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-3xl bg-[#ef4056] px-6 py-5 text-white shadow-card transition hover:-translate-y-1"
            >
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.17em] text-white/70">Disponible en</p>
                <p className="mt-1 text-2xl font-black">PedidosYa</p>
                <p className="mt-1 text-xs text-white/75">Abre la app y busca “MO Vida”</p>
              </div>
              <ArrowRight className="transition group-hover:translate-x-1" />
            </a>
            <a
              href={UBEREATS}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-3xl bg-[#111] px-6 py-5 text-white shadow-card transition hover:-translate-y-1"
            >
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.17em] text-white/55">Tienda directa</p>
                <p className="mt-1 text-2xl font-black">Uber <span className="text-[#57cb78]">Eats</span></p>
                <p className="mt-1 text-xs text-white/65">Ver menú, disponibilidad y delivery</p>
              </div>
              <ArrowRight className="transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Menú MO Vida"
          copy="Selecciona tus favoritos, indica cantidades y envía el pedido armado por WhatsApp. Los precios pueden variar por plataforma o promoción."
        >
          Lo rico de cuidarte, <span className="italic text-leaf">en un solo lugar.</span>
        </SectionHeading>

        <div className="no-scrollbar mt-9 flex gap-2 overflow-x-auto pb-2">
          {categories.map((itemCategory) => (
            <button
              key={itemCategory}
              onClick={() => setCategory(itemCategory)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-extrabold transition ${
                category === itemCategory
                  ? "bg-forest text-white"
                  : "border border-forest/15 bg-white/50 hover:border-forest/35"
              }`}
            >
              {itemCategory}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => {
              const quantity = cart[item.id] || 0;
              return (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ delay: index * 0.025 }}
                  className="group overflow-hidden rounded-[30px] border border-forest/10 bg-[#fbf8f0] shadow-card"
                >
                  <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-white/50 to-[#e8ecd9]">
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/40 blur-2xl" />
                    {item.badge ? (
                      <span className="absolute right-4 top-4 z-10 rounded-full border border-white/60 bg-white/80 px-3 py-1.5 text-[11px] font-extrabold backdrop-blur">
                        {item.badge}
                      </span>
                    ) : null}
                    <div className="transition duration-300 group-hover:-translate-y-2 group-hover:scale-105">
                      <Bottle tone={item.tone} />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[.17em] text-leaf">{item.category}</p>
                        <h3 className="mt-1 text-xl font-black">{item.name}</h3>
                      </div>
                      {item.price ? <p className="whitespace-nowrap font-black">RD${item.price}</p> : null}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-ink/60">{item.description}</p>
                    {item.ingredients ? <p className="mt-2 text-xs leading-5 text-ink/45">{item.ingredients}</p> : null}
                    <div className="mt-5 flex items-center justify-between gap-3">
                      {quantity ? (
                        <div className="flex items-center rounded-full border border-forest/15 bg-white">
                          <button onClick={() => remove(item.id)} className="p-2.5" aria-label={`Quitar ${item.name}`}><Minus size={16} /></button>
                          <span className="min-w-7 text-center text-sm font-black">{quantity}</span>
                          <button onClick={() => add(item.id)} className="p-2.5" aria-label={`Agregar otro ${item.name}`}><Plus size={16} /></button>
                        </div>
                      ) : (
                        <span className="text-xs text-ink/45">Disponible según inventario</span>
                      )}
                      <button
                        onClick={() => add(item.id)}
                        className="flex items-center gap-2 rounded-full bg-forest px-4 py-2.5 text-sm font-extrabold text-white transition hover:bg-[#18492f]"
                      >
                        <Plus size={16} /> Agregar
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <p className="mt-5 text-center text-xs leading-5 text-ink/45">
          * Precios de referencia del menú público. Promociones y precios finales pueden cambiar en WhatsApp, PedidosYa o Uber Eats.
        </p>
      </section>

      <section className="bg-forest py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-lime">Tu pedido en 3 pasos</p>
              <h2 className="display-font mt-3 max-w-3xl text-4xl leading-[1.02] sm:text-5xl">
                De antojo saludable a <span className="italic text-lime">pedido enviado.</span>
              </h2>
              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                {[
                  ["01", "Elige", "Explora jugos, shakes, shots, combos y desayunos."],
                  ["02", "Arma", "Agrega cantidades a tu pedido desde el menú."],
                  ["03", "Confirma", "Envíalo por WhatsApp y coordinamos disponibilidad y delivery."],
                ].map(([number, title, copy]) => (
                  <div key={number} className="rounded-3xl border border-white/15 bg-white/[.06] p-5">
                    <p className="text-xs font-black text-lime">{number}</p>
                    <p className="mt-4 text-lg font-black">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/65">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[36px] bg-[#f7f1e3] p-6 text-ink shadow-2xl sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[.17em] text-leaf">Pedido rápido</p>
                  <p className="mt-1 text-2xl font-black">{count ? `${count} producto${count === 1 ? "" : "s"}` : "Elige tus favoritos"}</p>
                </div>
                <ShoppingBag className="text-leaf" />
              </div>
              <div className="my-6 h-px bg-forest/10" />
              {count ? (
                <div className="space-y-2 text-sm">
                  {catalog.filter((item) => cart[item.id]).slice(0, 5).map((item) => (
                    <div className="flex justify-between gap-3" key={item.id}>
                      <span className="text-ink/70">{cart[item.id]} × {item.name}</span>
                      <span className="font-bold">RD${((item.price || 0) * cart[item.id]).toLocaleString("es-DO")}</span>
                    </div>
                  ))}
                  <div className="flex justify-between border-t border-forest/10 pt-4 text-base font-black">
                    <span>Total referencia</span><span>RD${referenceTotal.toLocaleString("es-DO")}</span>
                  </div>
                </div>
              ) : (
                <p className="text-sm leading-6 text-ink/55">Agrega productos del menú y aquí aparecerá el resumen antes de enviarlo.</p>
              )}
              <WhatsAppLink
                message={orderMessage}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-black text-[#09371d] transition hover:-translate-y-0.5"
              >
                <MessageCircle size={19} /> {count ? "Enviar pedido" : "Hablar por WhatsApp"}
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[40px] bg-[#e8eddc] p-7 shadow-soft sm:p-10">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-lime/25 blur-3xl" />
            <div className="relative flex min-h-[470px] items-end justify-center gap-1 sm:gap-4">
              <Bottle tone="from-[#A6C66B] to-[#517843]" />
              <div className="translate-y-7"><Bottle tone="from-[#E5B94E] to-[#C97C2C]" small /></div>
              <Bottle tone="from-[#B44664] to-[#70283E]" />
            </div>
          </div>
          <div className="lg:pl-8">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">MO Vida</p>
            <h2 className="display-font mt-3 text-4xl leading-[1.02] sm:text-5xl">Salud en cada botella, <span className="italic text-leaf">sin complicarte.</span></h2>
            <p className="mt-6 max-w-xl leading-7 text-ink/65">
              Una propuesta local enfocada en jugos naturales, smoothies, shots y opciones prácticas para integrar bienestar a la rutina cotidiana.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                [Leaf, "Ingredientes frescos", "Combinaciones frutales y vegetales."],
                [Zap, "Opciones funcionales", "Jugos, proteína, shots y combos."],
                [Bike, "Delivery", "Ordena directo o por plataformas."],
                [ShieldCheck, "Pedido confirmado", "Disponibilidad y total antes de cerrar."],
              ].map(([Icon, title, copy]) => {
                const IconComponent = Icon as typeof Leaf;
                return (
                  <div key={String(title)} className="rounded-2xl border border-forest/10 bg-white/45 p-4">
                    <IconComponent size={20} className="text-leaf" />
                    <p className="mt-3 font-black">{String(title)}</p>
                    <p className="mt-1 text-xs leading-5 text-ink/55">{String(copy)}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-forest/15 px-5 py-3 text-sm font-extrabold"><Instagram size={17} /> @movidasdq</a>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-forest/15 px-5 py-3 text-sm font-extrabold"><MapPin size={17} /> Ver ubicación</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-[#f2f1e6] py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-3 lg:px-8">
          {[
            [MapPin, "Santo Domingo", ADDRESS],
            [Clock3, "Horario", "Consulta el horario del día en Uber Eats o WhatsApp."],
            [MessageCircle, "Atención directa", "829-682-6461"],
          ].map(([Icon, title, copy]) => {
            const IconComponent = Icon as typeof MapPin;
            return (
              <div key={String(title)} className="rounded-3xl border border-forest/10 bg-white/55 p-6">
                <IconComponent className="text-leaf" />
                <p className="mt-5 text-lg font-black">{String(title)}</p>
                <p className="mt-2 text-sm leading-6 text-ink/55">{String(copy)}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-5 py-20 lg:py-28">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">Preguntas frecuentes</p>
          <h2 className="display-font mt-3 text-4xl sm:text-5xl">Antes de tu <span className="italic text-leaf">primer sorbo.</span></h2>
        </div>
        <div className="mt-10 divide-y divide-forest/10 border-y border-forest/10">
          {faqs.map(([question, answer], index) => (
            <div key={question}>
              <button
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left font-black"
                aria-expanded={openFaq === index}
              >
                {question}
                <ChevronDown className={`shrink-0 transition ${openFaq === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {openFaq === index ? (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="max-w-3xl pb-6 text-sm leading-7 text-ink/60">{answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="relative overflow-hidden rounded-[40px] bg-[#dfe9cf] px-6 py-12 text-center shadow-soft sm:px-12 sm:py-16">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-lime/30 blur-3xl" />
          <div className="relative">
            <Sparkles className="mx-auto text-leaf" />
            <h2 className="display-font mx-auto mt-5 max-w-3xl text-4xl leading-[1.02] sm:text-5xl">¿Qué se te antoja <span className="italic text-leaf">hoy?</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-ink/60">Arma tu pedido o escríbenos directamente y te ayudamos a elegir.</p>
            <WhatsAppLink message={orderMessage} className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 font-black text-white"><MessageCircle size={18} /> Pedir por WhatsApp</WhatsAppLink>
          </div>
        </div>
      </section>

      <footer className="bg-[#153727] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 lg:px-8">
          <div>
            <img src="/movida-logo.svg" alt="MO Vida" className="h-16 rounded-full bg-white p-1" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">Jugos naturales, protein shakes, shots, combos y bienestar en Santo Domingo.</p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[.17em] text-white/45">Encuéntranos</p>
            <p className="mt-4 text-sm text-white/75">{ADDRESS}</p>
            <p className="mt-2 text-sm text-white/75">829-682-6461</p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[.17em] text-white/45">Ordena y síguenos</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
              <a href={UBEREATS} target="_blank" rel="noreferrer">Uber Eats</a>
              <a href={PEDIDOSYA} target="_blank" rel="noreferrer">PedidosYa</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/40">© {new Date().getFullYear()} MO Vida. Salud en cada botella.</div>
      </footer>

      <WhatsAppLink
        message={orderMessage}
        className="pulse-soft fixed bottom-24 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#07371c] shadow-2xl md:flex"
      >
        <MessageCircle size={26} />
      </WhatsAppLink>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-forest/10 bg-[#faf7ef]/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <div className="min-w-0 flex-1 pl-1">
            <p className="text-xs text-ink/50">{count ? `${count} seleccionado${count === 1 ? "" : "s"}` : "¿Listo para ordenar?"}</p>
            <p className="truncate text-sm font-black">{count ? `RD$${referenceTotal.toLocaleString("es-DO")} aprox.` : "MO Vida"}</p>
          </div>
          <WhatsAppLink message={orderMessage} className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-[#08371d]"><MessageCircle size={17} /> WhatsApp</WhatsAppLink>
        </div>
      </div>
    </main>
  );
}
