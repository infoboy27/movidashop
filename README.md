# MO Vida Shop

Sitio web comercial de **MO Vida** — jugos naturales, protein shakes, shots, combos y desayunos con delivery en Santo Domingo.

## Dirección creativa

> Diseña una experiencia web premium para MO Vida, marca dominicana de jugos, smoothies y bienestar. Debe sentirse fresca, natural, saludable y moderna; usar el branding verde/crema existente sin parecer una plantilla fitness genérica; priorizar conversión móvil, producto, delivery, WhatsApp, PedidosYa/Uber Eats, accesibilidad y velocidad. El sitio debe vender bienestar, no “dietas”.

## Experiencia implementada

- Home responsive y mobile-first
- Hero premium con branding MO Vida
- Catálogo real dividido en Jugos, Protein Shakes, Shots, Combos y Desayunos
- Selector de cantidades y pedido armado por WhatsApp
- Total de referencia y confirmación de precio final antes de completar el pedido
- Botón flotante de WhatsApp + barra de compra móvil
- Banner de PedidosYa
- Enlace directo a la tienda de MO Vida en Uber Eats
- Dirección física y enlace a Google Maps
- FAQ interactivo
- SEO local, Open Graph, Twitter metadata y JSON-LD de negocio local
- Animaciones con Framer Motion
- Estados de foco y soporte para `prefers-reduced-motion`

## Catálogo

El contenido de `app/catalog.ts` fue construido a partir del menú público de **MO Vida SDQ (Santo Domingo)** revisado el 12/09/2026.

Los precios mostrados son **de referencia** porque Uber Eats/PedidosYa pueden aplicar promociones o cambios. El flujo de WhatsApp pide confirmar disponibilidad, precio final y delivery antes de cerrar el pedido.

## Integraciones

- WhatsApp: `829-682-6461`
- Instagram: `@movidasdq`
- Uber Eats: enlace directo a MO Vida SDQ
- PedidosYa: portal RD; el sitio indica buscar “MO Vida” mientras no exista/esté indexado un deep-link público estable
- Ubicación: Esther Rosario 32, Distrito Nacional

Los enlaces comerciales están centralizados al inicio de `app/page.tsx`.

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons

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

## Fotos de producto

Los visuales actuales mantienen la identidad visual de las botellas mediante ilustraciones de marca. Para producción final se recomienda reemplazarlos por archivos originales de fotografía de producto (WebP/AVIF, idealmente 1400px o más) en lugar de hotlinkear imágenes de Instagram, ya que las URLs del CDN social no son estables.
