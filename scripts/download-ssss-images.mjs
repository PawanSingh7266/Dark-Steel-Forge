import { writeFileSync, mkdirSync, readdirSync, unlinkSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images", "products");

const CATEGORIES = [
  { page: "https://ssssgroup.com/stainless-steel-sheets", short: "sheets" },
  { page: "https://ssssgroup.com/stainless-steel-plate", short: "plate" },
  { page: "https://ssssgroup.com/stainless-steel-coil", short: "coil" },
  { page: "https://ssssgroup.com/stainless-steel-chequered-sheets", short: "chequered" },
  { page: "https://ssssgroup.com/stainless-steel-pipe-fittings", short: "pipe-fittings" },
  { page: "https://ssssgroup.com/stainless-steel-welded-pipes", short: "welded-pipes" },
  { page: "https://ssssgroup.com/stainless-steel-seamless-pipes", short: "seamless-pipes" },
  { page: "https://ssssgroup.com/stainless-steel-rods", short: "rods" },
  { page: "https://ssssgroup.com/stainless-steel-angles", short: "angles" },
  { page: "https://ssssgroup.com/stainless-steel-flats", short: "flats" },
  { page: "https://ssssgroup.com/stainless-steel-flanges", short: "flanges" },
  { page: "https://ssssgroup.com/stainless-steel-designer-sheets", short: "designer-sheets" },
  { page: "https://ssssgroup.com/stainless-steel-slit-coil", short: "slit-coil" },
];

async function fetchHTML(url) {
  const resp = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; ImageDownloader/1.0)" },
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}: ${url}`);
  return await resp.text();
}

function extractImageUrls(html) {
  const urls = [];
  const seen = new Set();
  const regex = /<img[^>]+src="([^"]+)"[^>]*>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const src = match[1].trim();
    if (
      src.includes("/wp-content/uploads/") &&
      !src.includes("logo") &&
      !src.includes("certificate") &&
      !src.includes("qr-") &&
      !src.includes("icon") &&
      !src.includes("favicon") &&
      !src.endsWith(".svg") &&
      src.match(/\.(jpg|jpeg|png|webp)(\?|$)/i) &&
      !seen.has(src)
    ) {
      seen.add(src);
      urls.push(src);
    }
  }
  return urls;
}

async function download(url) {
  try {
    const resp = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; ImageDownloader/1.0)" },
      signal: AbortSignal.timeout(15000),
    });
    if (!resp.ok) return null;
    return Buffer.from(await resp.arrayBuffer());
  } catch (e) {
    return null;
  }
}

async function main() {
  for (const { page, short } of CATEGORIES) {
    const outDir = join(OUT, short);
    mkdirSync(outDir, { recursive: true });

    // Clear existing files
    for (const f of readdirSync(outDir)) {
      unlinkSync(join(outDir, f));
    }

    console.log(`\n=== ${short} ===`);
    const html = await fetchHTML(page);
    const urls = extractImageUrls(html);
    console.log(`Found ${urls.length} images`);

    let idx = 0;
    for (const url of urls) {
      const buf = await download(url);
      if (!buf) {
        console.warn(`  FAILED: ${url.split("/").pop()}`);
        continue;
      }
      const dest = join(outDir, `${idx}.jpg`);
      writeFileSync(dest, buf);
      idx++;
    }

    console.log(`→ ${idx} images saved`);
  }

  // Final tally
  console.log("\n=== Final counts ===");
  for (const { short } of CATEGORIES) {
    const dir = join(OUT, short);
    const count = readdirSync(dir).length;
    console.log(`  ${short}: ${count}`);
  }
}

main().catch(console.error);
