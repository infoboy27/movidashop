import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, "public", "generated");

const groups = {
  hero: [
    "app/generated/hero0.ts",
    "app/generated/hero1.ts",
    "app/generated/hero2.ts",
    "app/generated/hero3.ts",
  ],
  sabores: [
    "app/generated/sabores0.ts",
    "app/generated/sabores1.ts",
  ],
  brand: [
    "app/generated/brand0.ts",
    "app/generated/brand1.ts",
  ],
};

function readChunk(relativePath) {
  const source = fs.readFileSync(path.join(ROOT, relativePath), "utf8");
  const match = source.match(/export default "([A-Za-z0-9+/=]+)";/);

  if (!match) {
    throw new Error(`Could not parse generated image chunk: ${relativePath}`);
  }

  return match[1];
}

function assertWebp(buffer, name) {
  const riff = buffer.subarray(0, 4).toString("ascii");
  const webp = buffer.subarray(8, 12).toString("ascii");

  if (riff !== "RIFF" || webp !== "WEBP") {
    throw new Error(`${name} did not decode to a valid WebP file`);
  }
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

for (const [name, chunkFiles] of Object.entries(groups)) {
  const base64 = chunkFiles.map(readChunk).join("");
  const buffer = Buffer.from(base64, "base64");
  assertWebp(buffer, name);

  const outputPath = path.join(OUTPUT_DIR, `${name}.webp`);
  fs.writeFileSync(outputPath, buffer);
  console.log(`materialized ${path.relative(ROOT, outputPath)} (${buffer.length} bytes)`);
}
