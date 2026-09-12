export type CatalogItem = {
  id: string;
  name: string;
  category: "Jugos" | "Protein Shakes" | "Shots" | "Combos" | "Desayunos";
  description: string;
  ingredients?: string;
  price?: number;
  badge?: string;
  tone: string;
};

/**
 * Catalog based on the public MO Vida SDQ Uber Eats menu reviewed on 2026-09-12.
 * Platform prices/promotions can change, so checkout is confirmed through WhatsApp/Uber Eats.
 */
export const catalog: CatalogItem[] = [
  {
    id: "detox-energia",
    name: "Detox Energía",
    category: "Jugos",
    description: "Un verde fresco para acompañar tu rutina diaria.",
    ingredients: "Pepino · piña · manzana verde · espinaca · apio · limón",
    price: 200,
    badge: "Verde favorito",
    tone: "from-[#9FC169] to-[#527942]",
  },
  {
    id: "red-boost",
    name: "Red Boost",
    category: "Jugos",
    description: "Sabor intenso, frutal y naturalmente vibrante.",
    ingredients: "Remolacha · zanahoria · manzana roja · limón · jengibre",
    price: 200,
    badge: "Antioxidante",
    tone: "from-[#C85A6B] to-[#7B2940]",
  },
  {
    id: "zanahoria-power",
    name: "Zanahoria Power",
    category: "Jugos",
    description: "Cítrico, ligero y refrescante.",
    ingredients: "Zanahoria · naranja · limón",
    price: 200,
    tone: "from-[#F1A342] to-[#D96E2B]",
  },
  {
    id: "tropical",
    name: "Tropical",
    category: "Jugos",
    description: "Una mezcla tropical pensada para hidratar y refrescar.",
    ingredients: "Piña · naranja · limón",
    price: 200,
    tone: "from-[#F1C651] to-[#DC8D2E]",
  },
  {
    id: "berry-blend",
    name: "Berry Blend",
    category: "Jugos",
    description: "Dulce, ácido y lleno de sabor a frutos rojos.",
    ingredients: "Fresa · arándanos · limón",
    price: 200,
    tone: "from-[#B95A75] to-[#713249]",
  },
  {
    id: "fresh-mint",
    name: "Fresh Mint",
    category: "Jugos",
    description: "Una opción ligera para los días de más calor.",
    ingredients: "Sandía · limón · menta",
    price: 200,
    tone: "from-[#E77B7E] to-[#83A35F]",
  },
  {
    id: "berry-protein",
    name: "Berry Protein",
    category: "Protein Shakes",
    description: "Smoothie con 20 g de proteína de vainilla.",
    ingredients: "Fresa · arándanos · limón · proteína de vainilla",
    price: 250,
    badge: "20 g proteína",
    tone: "from-[#A64A6A] to-[#6C3347]",
  },
  {
    id: "tropical-protein",
    name: "Tropical Protein",
    category: "Protein Shakes",
    description: "Tropical, cremoso y con 20 g de proteína de vainilla.",
    ingredients: "Piña · naranja · limón · proteína de vainilla",
    price: 250,
    badge: "20 g proteína",
    tone: "from-[#E9BD55] to-[#D27632]",
  },
  {
    id: "shot-red-boost",
    name: "Shot Red Boost",
    category: "Shots",
    description: "Shot funcional concentrado.",
    ingredients: "Remolacha · zanahoria · manzana roja · limón · jengibre",
    price: 190,
    tone: "from-[#A92E50] to-[#681F35]",
  },
  {
    id: "shot-detox",
    name: "Shot Detox",
    category: "Shots",
    description: "Pequeño, cítrico y especiado.",
    ingredients: "Zanahoria · limón · jengibre · cúrcuma",
    price: 190,
    badge: "Popular",
    tone: "from-[#F0C54F] to-[#DC8A2E]",
  },
  {
    id: "combo-bienestar",
    name: "Combo Bienestar",
    category: "Combos",
    description: "Jugo verde + Shot Detox para una pausa completa.",
    ingredients: "Pepino · piña · manzana verde · espinaca · apio · limón · jengibre · cúrcuma",
    price: 250,
    badge: "Popular",
    tone: "from-[#91B75A] to-[#426A39]",
  },
  {
    id: "combo-antioxidante",
    name: "Combo Antioxidante",
    category: "Combos",
    description: "Una combinación roja, fresca e intensa.",
    ingredients: "Remolacha · zanahoria · manzana · limón · jengibre",
    price: 250,
    tone: "from-[#BE506A] to-[#70243F]",
  },
  {
    id: "combo-fresh",
    name: "Combo Fresh",
    category: "Combos",
    description: "Fresh Mint acompañado de Shot Detox.",
    ingredients: "Sandía · limón · menta · jengibre · cúrcuma",
    price: 250,
    tone: "from-[#E07875] to-[#78A15D]",
  },
  {
    id: "combo-vitalidad",
    name: "Combo Vitalidad",
    category: "Combos",
    description: "Zanahoria Power + Shot Red Boost.",
    ingredients: "Zanahoria · naranja · limón · remolacha · manzana · jengibre",
    price: 250,
    tone: "from-[#EE9B3B] to-[#B84D45]",
  },
  {
    id: "combo-tropical",
    name: "Combo Tropical",
    category: "Combos",
    description: "Tropical + Shot Detox para una mezcla cítrica y refrescante.",
    ingredients: "Piña · naranja · limón · zanahoria · jengibre · cúrcuma",
    price: 250,
    tone: "from-[#F0BF4F] to-[#D68132]",
  },
  {
    id: "almond-oats",
    name: "Almond Oats",
    category: "Desayunos",
    description: "Una opción cremosa y práctica para comenzar el día.",
    price: 350,
    badge: "Destacado",
    tone: "from-[#D6BA92] to-[#9E7955]",
  },
  {
    id: "mangu-verde-fit",
    name: "Mangú Plátano Verde Fit",
    category: "Desayunos",
    description: "Desayuno dominicano en una versión pensada para tu rutina.",
    price: 380,
    badge: "Destacado",
    tone: "from-[#B5B56A] to-[#717843]",
  },
];

export const categories = ["Todos", "Jugos", "Protein Shakes", "Shots", "Combos", "Desayunos"] as const;
