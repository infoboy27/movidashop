"use client";

import { useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Bike, Check, ChevronDown, Clock3, Heart, Instagram, Leaf, MapPin, Menu, MessageCircle, Minus, Plus, ShieldCheck, ShoppingBag, Sparkles, X, Zap } from "lucide-react";

const PHONE = "18296826461";
const INSTAGRAM = "https://www.instagram.com/movidasdq/";
const PEDIDOSYA = "https://www.pedidosya.com.do/";
const UBEREATS = "https://www.ubereats.com/do";

const products = [
  { id:"detox", name:"Detox Green", type:"Jugos", subtitle:"Pepino · piña · limón · jengibre", tag:"Bestseller", tone:"from-[#87b65e] to-[#426a39]", price:240 },
  { id:"energia", name:"Energía", type:"Jugos", subtitle:"Piña · naranja · limón", tag:"Para tu día", tone:"from-[#efc55d] to-[#d98c32]", price:240 },
  { id:"red", name:"Red Boost", type:"Jugos", subtitle:"Remolacha · frutos rojos · limón", tag:"Antioxidante", tone:"from-[#c55a6b] to-[#7d2942]", price:250 },
  { id:"almond", name:"Almond Protein", type:"Smoothies", subtitle:"Almendra · avena · proteína · canela", tag:"Protein", tone:"from-[#d7b98f] to-[#a77f54]", price:290 },
  { id:"ginger", name:"Shot Ginger", type:"Shots", subtitle:"Jengibre · limón · miel", tag:"60 ml", tone:"from-[#f0c34e] to-[#df8a2d]", price:120 },
  { id:"balance", name:"Balance", type:"Jugos", subtitle:"Manzana verde · kale · limón", tag:"Equilibrio", tone:"from-[#9fc169] to-[#527942]", price:240 },
];

const plans = [
  { name:"Plan Detox 5 días", price:"RD$3,450", copy:"5 jugos diarios + 5 shots. Una rutina simple para reiniciar hábitos.", features:["25 jugos","5 shots","Guía de consumo"] },
  { name:"Combo Bienestar", price:"RD$650", copy:"Detox Green + Energía + Shot Ginger para una pausa funcional.", features:["2 jugos","1 shot","Ideal para oficina"] },
  { name:"Pack Semana", price:"RD$1,550", copy:"Una selección variada para tener bienestar listo en tu nevera.", features:["6 jugos","2 shots","Sabores variados"] },
];

const faqs = [
  ["¿Hacen delivery?","Sí. Hacemos delivery en Santo Domingo y también puedes ordenar por PedidosYa o Uber Eats."],
  ["¿Puedo personalizar un combo?","Sí. Escríbenos por WhatsApp y te ayudamos a combinar jugos, smoothies y shots según disponibilidad."],
  ["¿Cómo hago un pedido grande?","Contáctanos por WhatsApp. Podemos coordinar pedidos para oficinas, eventos o grupos."],
];

function WA({ children, message, className="" }: { children:ReactNode; message:string; className?:string }) {
  return <a href={`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" className={className}>{children}</a>;
}

function Bottle({ tone, small=false }: { tone:string; small?:boolean }) {
  return <div className={`relative ${small?"h-44 w-24":"h-64 w-32"}`}>
    <div className={`absolute left-1/2 top-0 -translate-x-1/2 ${small?"h-7 w-14":"h-9 w-16"} rounded-xl bg-[#20231f]`} />
    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${small?"h-[155px] w-[78px]":"h-[226px] w-[112px]"} rounded-[30px] bg-gradient-to-b ${tone} shadow-2xl`}>
      <div className="absolute inset-y-4 left-3 w-2 rounded-full bg-white/15" />
      <div className="absolute left-1/2 top-[42%] w-[72%] -translate-x-1/2 rounded-2xl bg-[#f8f3e7]/95 px-2 py-4 text-center">
        <p className="font-bold leading-none text-[#4c7d3f]">MO</p><p className={`display-font ${small?"text-lg":"text-2xl"} italic leading-none text-[#4c7d3f]`}>Vida</p>
        <p className="mt-1 text-[7px] uppercase tracking-[.2em] text-[#806d4d]">natural</p>
      </div>
    </div>
  </div>;
}

export default function Home(){
  const [menu,setMenu]=useState(false);
  const [category,setCategory]=useState("Todos");
  const [cart,setCart]=useState<Record<string,number>>({});
  const [openFaq,setOpenFaq]=useState(0);
  const filtered=category==="Todos"?products:products.filter(p=>p.type===category);
  const count=Object.values(cart).reduce((a,b)=>a+b,0);
  const total=products.reduce((sum,p)=>sum+(cart[p.id]||0)*p.price,0);
  const message=useMemo(()=>{
    const lines=products.filter(p=>cart[p.id]).map(p=>`• ${cart[p.id]} x ${p.name}`);
    return lines.length?`Hola MO Vida 👋\nQuiero hacer este pedido:\n${lines.join("\n")}\n\nTotal estimado: RD$${total.toLocaleString("es-DO")}.`:"Hola MO Vida 👋 Quiero hacer un pedido.";
  },[cart,total]);
  const add=(id:string)=>setCart(v=>({...v,[id]:(v[id]||0)+1}));
  const remove=(id:string)=>setCart(v=>({...v,[id]:Math.max(0,(v[id]||0)-1)}));

  return <main>
    <div className="bg-forest px-4 py-2.5 text-center text-xs font-bold uppercase tracking-[.16em] text-white sm:text-sm">Delivery en Santo Domingo · Jugos frescos · Pedidos por WhatsApp</div>

    <header className="glass sticky top-0 z-50 border-b border-forest/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio"><img src="/movida-logo.svg" alt="MO Vida" className="h-14 w-auto" /></a>
        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex"><a href="#productos">Productos</a><a href="#planes">Planes</a><a href="#nosotros">Nosotros</a><a href="#faq">Preguntas</a></nav>
        <div className="flex items-center gap-2"><WA message="Hola MO Vida 👋 Quiero hacer un pedido." className="hidden items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-bold text-white sm:flex"><MessageCircle size={17}/> Ordenar</WA><button onClick={()=>setMenu(!menu)} className="rounded-full border border-forest/15 p-3 lg:hidden" aria-label="Abrir menú">{menu?<X/>:<Menu/>}</button></div>
      </div>
      <AnimatePresence>{menu&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-forest/10 lg:hidden"><div className="space-y-1 px-5 py-4 font-semibold">{[["#productos","Productos"],["#planes","Planes"],["#nosotros","Nosotros"],["#faq","Preguntas"]].map(([href,label])=><a key={href} onClick={()=>setMenu(false)} href={href} className="block rounded-xl px-3 py-3 hover:bg-white/40">{label}</a>)}</div></motion.div>}</AnimatePresence>
    </header>

    <section id="inicio" className="soft-grid overflow-hidden">
      <div className="mx-auto grid min-h-[710px] max-w-7xl items-center gap-8 px-5 py-14 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/50 px-4 py-2 text-xs font-bold uppercase tracking-[.14em]"><Leaf size={15} className="text-leaf"/> Fresco · Natural · Hecho aquí</div>
          <h1 className="display-font max-w-[680px] text-5xl font-medium leading-[.94] sm:text-6xl lg:text-7xl xl:text-[84px]">Salud que se <span className="italic text-leaf">siente</span> en cada botella.</h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-ink/70 sm:text-lg">Jugos verdes, smoothies y shots preparados para hacer que cuidarte sea simple, rico y parte de tu día.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><WA message="Hola MO Vida 👋 Quiero ver el menú y hacer un pedido." className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 font-bold text-white">Ver menú y ordenar <ArrowRight size={18}/></WA><a href="#productos" className="inline-flex items-center justify-center rounded-full border border-forest/20 bg-white/50 px-7 py-4 font-bold">Explorar productos</a></div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink/65"><span className="flex items-center gap-2"><Check size={17}/> Ingredientes reales</span><span className="flex items-center gap-2"><Check size={17}/> Delivery disponible</span></div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} className="relative min-h-[500px] lg:min-h-[630px]"><div className="absolute inset-4 rounded-[54px] bg-[#e7ecd9] shadow-soft lg:inset-0"/><div className="absolute left-4 top-12 z-20 rounded-2xl bg-white/80 p-4 shadow-card backdrop-blur"><p className="text-xs font-bold uppercase tracking-wider text-ink/50">Favorito</p><p className="font-bold">Detox Green</p></div><img src="/hero-bottles.svg" alt="Jugos MO Vida" className="relative z-10 h-full w-full object-contain p-4 sm:p-8"/></motion.div>
      </div>
    </section>

    <section className="border-y border-forest/10 bg-[#faf7ef]"><div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 md:grid-cols-2 lg:px-8"><a href={PEDIDOSYA} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-3xl bg-[#ef4056] px-6 py-5 text-white shadow-card"><div><p className="text-xs font-bold uppercase tracking-[.15em] text-white/75">También estamos en</p><p className="mt-1 text-2xl font-extrabold">PedidosYa</p></div><ArrowRight/></a><a href={UBEREATS} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-3xl bg-[#111] px-6 py-5 text-white shadow-card"><div><p className="text-xs font-bold uppercase tracking-[.15em] text-white/60">Pide donde prefieras</p><p className="mt-1 text-2xl font-extrabold">Uber <span className="text-[#50c878]">Eats</span></p></div><ArrowRight/></a></div></section>

    <section id="productos" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">Elige tu MOmento</p><h2 className="display-font mt-3 text-4xl sm:text-5xl">Tu rutina, pero más <span className="italic text-leaf">rica.</span></h2></div><p className="max-w-md text-sm leading-6 text-ink/60">Agrega tus favoritos y envía el pedido completo por WhatsApp.</p></div>
      <div className="no-scrollbar mt-9 flex gap-2 overflow-x-auto pb-2">{["Todos","Jugos","Smoothies","Shots"].map(c=><button key={c} onClick={()=>setCategory(c)} className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold ${category===c?"bg-forest text-white":"border border-forest/15 bg-white/45"}`}>{c}</button>)}</div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((p,i)=><motion.article layout initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}} key={p.id} className="overflow-hidden rounded-[30px] border border-forest/10 bg-[#fbf8f0] shadow-card"><div className="relative flex h-72 items-center justify-center bg-gradient-to-br from-white/40 to-[#e8ecd9]"><span className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold">{p.tag}</span><Bottle tone={p.tone}/></div><div className="p-6"><div className="flex justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-leaf">{p.type}</p><h3 className="mt-1 text-xl font-extrabold">{p.name}</h3><p className="mt-2 text-sm text-ink/55">{p.subtitle}</p></div><p className="font-extrabold">RD${p.price}</p></div><div className="mt-5 flex items-center justify-between">{cart[p.id]?<div className="flex items-center rounded-full border border-forest/15 bg-white"><button onClick={()=>remove(p.id)} className="p-2.5"><Minus size={16}/></button><span className="min-w-7 text-center text-sm font-bold">{cart[p.id]}</span><button onClick={()=>add(p.id)} className="p-2.5"><Plus size={16}/></button></div>:<span className="text-xs text-ink/45">Disponible delivery</span>}<button onClick={()=>add(p.id)} className="flex items-center gap-2 rounded-full bg-forest px-4 py-2.5 text-sm font-bold text-white"><Plus size={16}/> Agregar</button></div></div></motion.article>)}</div>
    </section>

    <section id="planes" className="bg-forest py-20 text-white lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-lime">Más que un jugo</p><h2 className="display-font mt-3 text-4xl sm:text-5xl">Planes para sentirte <span className="italic text-lime">bien.</span></h2><div className="mt-10 grid gap-5 lg:grid-cols-3">{plans.map((p,i)=><article key={p.name} className={`rounded-[30px] border p-7 ${i===0?"border-lime/60 bg-white text-ink":"border-white/15 bg-white/5"}`}><Sparkles className={i===0?"text-leaf":"text-lime"}/><h3 className="display-font mt-7 text-3xl">{p.name}</h3><p className={`mt-3 text-sm leading-6 ${i===0?"text-ink/60":"text-white/60"}`}>{p.copy}</p><p className="mt-6 text-2xl font-extrabold">{p.price}</p><ul className="mt-6 space-y-3 text-sm">{p.features.map(f=><li key={f} className="flex items-center gap-2"><Check size={16}/>{f}</li>)}</ul><WA message={`Hola MO Vida 👋 Me interesa el ${p.name}.`} className={`mt-7 flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-extrabold ${i===0?"bg-forest text-white":"bg-white text-forest"}`}>Quiero este plan <ArrowRight size={17}/></WA></article>)}</div></div></section>

    <section id="nosotros" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-2 lg:items-center"><div className="relative flex min-h-[500px] items-center justify-center gap-2 overflow-hidden rounded-[44px] bg-[#e8ecd9] p-8 shadow-soft"><div className="float-gentle"><Bottle tone="from-[#9ac65d] to-[#426a39]"/></div><div className="float-gentle-delayed -mb-10"><Bottle tone="from-[#efc55d] to-[#d98c32]" small/></div><div className="float-gentle"><Bottle tone="from-[#c55a6b] to-[#7d2942]"/></div></div><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">MO Vida</p><h2 className="display-font mt-3 text-4xl sm:text-5xl">Bienestar sin hacerlo <span className="italic text-leaf">complicado.</span></h2><p className="mt-6 text-base leading-7 text-ink/65">Productos frescos, prácticos y llenos de sabor para acompañarte entre reuniones, entrenamientos, mandados y días normales.</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><Feature icon={<Leaf/>} title="Ingredientes reales" text="Frutas, vegetales y combinaciones que hablan por sí solas."/><Feature icon={<Clock3/>} title="Listo para tu ritmo" text="Opciones fáciles para integrar a tu rutina diaria."/></div></div></div></section>

    <section className="bg-[#e9eddc] py-14"><div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"><Feature icon={<Bike/>} title="Delivery fácil" text="Ordena directo o usa tus apps favoritas."/><Feature icon={<Heart/>} title="Hecho con intención" text="Sabor y bienestar en la misma botella."/><Feature icon={<Zap/>} title="Para tu rutina" text="Mañana, tarde, oficina o post-entreno."/><Feature icon={<ShieldCheck/>} title="Compra simple" text="WhatsApp rápido y atención directa."/></div></section>

    <section className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">Instagram</p><h2 className="display-font mt-3 text-4xl sm:text-5xl">Lo que se ve rico, también se <span className="italic text-leaf">comparte.</span></h2><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white/60 px-5 py-3 font-bold"><Instagram size={18}/> @movidasdq</a></div><div className="grid grid-cols-2 gap-4 sm:grid-cols-3">{products.map(p=><a key={p.id} href={INSTAGRAM} target="_blank" rel="noreferrer" className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-[26px] bg-gradient-to-br ${p.tone}`}><Bottle tone={p.tone} small/><div className="absolute bottom-3 left-3 right-3 rounded-full bg-white/80 px-3 py-2 text-xs font-bold backdrop-blur">{p.name}</div></a>)}</div></div></div></section>

    <section id="faq" className="bg-[#fbf8f0] py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">Preguntas frecuentes</p><h2 className="display-font mt-3 text-4xl sm:text-5xl">Antes de tu primer <span className="italic text-leaf">sorbo.</span></h2><WA message="Hola MO Vida 👋 Tengo una pregunta." className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 font-bold text-white"><MessageCircle size={18}/> Preguntar por WhatsApp</WA></div><div className="divide-y divide-forest/10 border-y border-forest/10">{faqs.map(([q,a],i)=><div key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} className="flex w-full items-center justify-between py-5 text-left font-extrabold"><span>{q}</span><ChevronDown className={openFaq===i?"rotate-180 transition":"transition"}/></button><AnimatePresence>{openFaq===i&&<motion.p initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden pb-5 text-sm leading-6 text-ink/60">{a}</motion.p>}</AnimatePresence></div>)}</div></div></section>

    <section className="px-5 py-10 lg:px-8"><div className="mx-auto max-w-7xl rounded-[38px] bg-[#dfe9bd] px-7 py-11 lg:flex lg:items-center lg:justify-between lg:px-14"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-forest/65">Tu próximo favorito está aquí</p><h2 className="display-font mt-3 text-4xl sm:text-5xl">Haz tu pedido en menos de un minuto.</h2></div><WA message="Hola MO Vida 👋 Quiero hacer un pedido." className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 font-extrabold text-white lg:mt-0"><MessageCircle size={19}/> Ordenar ahora</WA></div></section>

    <footer className="mt-10 border-t border-forest/10 bg-[#f0eadb] pb-28 pt-14 sm:pb-14"><div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4 lg:px-8"><div className="md:col-span-2"><img src="/movida-logo.svg" alt="MO Vida" className="h-16"/><p className="mt-4 max-w-sm text-sm leading-6 text-ink/55">Jugos verdes, smoothies, shots y planes de bienestar con delivery en Santo Domingo.</p></div><div><p className="font-extrabold">Encuéntranos</p><div className="mt-4 space-y-3 text-sm text-ink/60"><a className="block" href={INSTAGRAM}>Instagram</a><a className="block" href={PEDIDOSYA}>PedidosYa</a><a className="block" href={UBEREATS}>Uber Eats</a></div></div><div><p className="font-extrabold">Contacto</p><div className="mt-4 space-y-3 text-sm text-ink/60"><a className="block" href={`https://wa.me/${PHONE}`}>829-682-6461</a><p className="flex items-center gap-2"><MapPin size={15}/> Santo Domingo, RD</p></div></div></div></footer>

    <WA message="Hola MO Vida 👋 Quiero hacer un pedido." className="pulse-soft fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl sm:bottom-6"><MessageCircle size={27}/></WA>
    <AnimatePresence>{count>0&&<motion.div initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} exit={{y:100,opacity:0}} className="fixed bottom-0 left-0 right-0 z-40 border-t border-forest/10 bg-[#fbf8f0]/95 p-3 backdrop-blur-xl sm:bottom-5 sm:left-1/2 sm:right-auto sm:w-[560px] sm:-translate-x-1/2 sm:rounded-full sm:border"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-white"><ShoppingBag size={20}/></div><div className="min-w-0 flex-1"><p className="text-sm font-extrabold">{count} {count===1?"producto":"productos"}</p><p className="text-xs text-ink/50">Total estimado RD${total.toLocaleString("es-DO")}</p></div><WA message={message} className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-extrabold text-white">Enviar pedido <ArrowRight size={16}/></WA></div></motion.div>}</AnimatePresence>
  </main>;
}

function Feature({icon,title,text}:{icon:ReactNode;title:string;text:string}){
  return <div className="rounded-3xl border border-forest/10 bg-white/45 p-5"><div className="text-leaf">{icon}</div><h3 className="mt-4 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-ink/55">{text}</p></div>;
}
