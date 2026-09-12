# MO Vida Shop

Sitio web comercial de **MO Vida** — jugos verdes, smoothies, shots y planes de bienestar con delivery en Santo Domingo.

## Dirección creativa

> Diseña una experiencia web premium para MO Vida, marca dominicana de jugos verdes, smoothies, shots y planes detox. Debe sentirse fresca, natural, saludable y moderna; usar el branding verde/crema existente sin parecer una plantilla fitness genérica; priorizar conversión móvil, fotos de producto, delivery, WhatsApp, PedidosYa/Uber Eats, animaciones sutiles, accesibilidad y velocidad. El sitio debe vender bienestar, no “dietas”.

## Incluye

- Home responsive y mobile-first
- Hero premium con branding MO Vida
- Catálogo filtrable por Jugos, Smoothies y Shots
- Mini carrito local y pedido completo por WhatsApp
- Botón flotante de WhatsApp
- Banners visibles de PedidosYa y Uber Eats
- Planes y combos con CTA directo
- Sección de marca, beneficios e Instagram
- FAQ interactivo
- SEO base y metadata Open Graph
- Animaciones con Framer Motion

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons

## Configuración

Los links comerciales están centralizados al inicio de `app/page.tsx`: `PHONE`, `INSTAGRAM`, `PEDIDOSYA` y `UBEREATS`.

Actualmente PedidosYa y Uber Eats apuntan a sus portales de República Dominicana. Cuando estén disponibles los enlaces directos de la tienda MO Vida, solo hay que reemplazar esas dos constantes.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm start
```
