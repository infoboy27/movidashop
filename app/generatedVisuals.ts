import hero0 from "./generated/hero0";
import hero1 from "./generated/hero1";
import hero2 from "./generated/hero2";
import hero3 from "./generated/hero3";
import sabores0 from "./generated/sabores0";
import sabores1 from "./generated/sabores1";
import brand0 from "./generated/brand0";
import brand1 from "./generated/brand1";

export const HERO_CHUNKS = [hero0, hero1, hero2, hero3];
export const SABORES_CHUNKS = [sabores0, sabores1];
export const BRAND_CHUNKS = [brand0, brand1];

export function createWebpObjectUrl(chunks: string[]) {
  const parts = chunks.map((chunk) => {
    const binary = window.atob(chunk);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return bytes;
  });

  return URL.createObjectURL(new Blob(parts, { type: "image/webp" }));
}
