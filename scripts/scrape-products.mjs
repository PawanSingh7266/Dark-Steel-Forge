import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const PAGES = [
  { slug: "stainless-steel-sheets",     name: "Stainless Steel Sheets" },
  { slug: "stainless-steel-plate",      name: "Stainless Steel Plate" },
  { slug: "stainless-steel-coil",       name: "Stainless Steel Coil" },
  { slug: "stainless-steel-chequered-sheets", name: "Stainless Steel Chequered Sheets" },
  { slug: "stainless-steel-pipe-fittings",    name: "Stainless Steel Pipe Fittings" },
  { slug: "stainless-steel-welded-pipes",     name: "Stainless Steel Welded Pipes" },
  { slug: "stainless-steel-seamless-pipes",   name: "Stainless Steel Seamless Pipes" },
  { slug: "stainless-steel-rods",       name: "Stainless Steel Rods" },
  { slug: "stainless-steel-angles",     name: "Stainless Steel Angles" },
  { slug: "stainless-steel-flats",      name: "Stainless Steel Flats" },
  { slug: "stainless-steel-flanges",    name: "Stainless Steel Flanges" },
  { slug: "stainless-steel-designer-sheets",  name: "Stainless Steel Designer Sheets" },
  { slug: "stainless-steel-slit-coil",  name: "Stainless Steel Slit Coil" },
];

async function fetchHTML(url) {
  const resp = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" },
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}: ${url}`);
  return await resp.text();
}

// Extract product names from an SSSSGroup category page
function extractProducts(html) {
  // Option 1: Look for Elementor image-box titles (product names in the grid)
  const products = [];
  
  // Try to find product entries by looking for image-box titles
  // SSSSGroup uses Elementor image-box widgets with titles containing grade and product info
  
  // Find all links to /archives/project/ which are individual product pages
  const projectLinks = new Set();
  const linkRegex = /<a[^>]+href="([^"]*\/archives\/project\/[^"]+)"[^>]*>/gi;
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    projectLinks.add(match[1]);
  }

  // Also find product titles in the page - look for h3/h4/h5 and image-box titles
  const titleRegex = />\s*(stainless\s*steel\s+\w[\w\s-]+?)\s*<\/[h3h4h5]/gi;
  while ((match = titleRegex.exec(html)) !== null) {
    const t = match[1].trim();
    if (!products.includes(t)) products.push(t);
  }

  // Look for Elementor-image-box-title class
  const eRegex = /elementor-image-box-title[^>]*>([^<]+)</gi;
  while ((match = eRegex.exec(html)) !== null) {
    const t = match[1].trim();
    if (!products.includes(t)) products.push(t);
  }

  return { products, projectLinks: [...projectLinks] };
}

// Extract the grade/type from a product name
function parseGrade(name) {
  name = name.trim();
  // Match leading number/grade pattern like "304", "304L", "202", "Duplex 2205", "16Mo3", etc.
  const m = name.match(/^(\d{3,}[A-Za-z]*\s*[0-9]*)\s+(.*)/);
  if (m) return { grade: m[1].trim(), rest: m[2].trim() };
  // Try "Duplex", "Hastelloy", "Inconel" etc
  const m2 = name.match(/^(Duplex\s*\d*|Hastelloy|Inconel|X2CrNi12|X5CrNi1810|253\s*MA|16Mo3)\s+(.*)/i);
  if (m2) return { grade: m2[1].trim().replace(/\s+/g, " "), rest: m2[2].trim() };
  return { grade: name, rest: "" };
}

async function main() {
  const results = {};

  for (const { slug, name } of PAGES) {
    const url = `https://ssssgroup.com/${slug}`;
    console.log(`\n=== ${name} ===`);
    console.log(`URL: ${url}`);

    try {
      const html = await fetchHTML(url);
      const { products, projectLinks } = extractProducts(html);
      
      console.log(`Found ${products.length} product titles, ${projectLinks.length} project links`);

      // Deduplicate and parse grades
      const grades = products.map(p => {
        const parsed = parseGrade(p);
        return parsed.grade;
      }).filter(Boolean);

      // Try extracting from project links too
      const linkGrades = projectLinks.map(link => {
        const parts = link.split("/").filter(Boolean);
        const last = parts[parts.length - 1];
        // e.g. "202-stainless-steel-sheet-supplier"
        const m = last.match(/^(\d{3,}[A-Za-z]*)-/);
        if (m) return m[1];
        // e.g. "duplex-2205-..."
        const m2 = last.match(/^(duplex-\d+|hastelloy|inconel|x2crni12|x5crni1810|253-ma|16mo3)-/i);
        if (m2) return m2[1].replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        return null;
      }).filter(Boolean);

      const allGrades = [...new Set([...grades, ...linkGrades])];
      
      // Filter out non-grade terms
      const filtered = allGrades.filter(g => {
        const lower = g.toLowerCase();
        return !lower.includes("stainless") && !lower.includes("sheet") && 
               !lower.includes("plate") && !lower.includes("product") &&
               g.length < 20;
      });

      console.log(`Grades found: ${JSON.stringify(filtered)}`);
      results[slug] = { grades: filtered, projectLinks: projectLinks.length };
    } catch (e) {
      console.error(`  ERROR: ${e.message}`);
      results[slug] = { grades: [], error: e.message };
    }
  }

  // Output the results as TypeScript grade arrays
  console.log("\n\n========== GRADE DEFINITIONS ==========\n");
  for (const [slug, data] of Object.entries(results)) {
    if (data.grades?.length) {
      console.log(`// ${PAGES.find(p => p.slug === slug)?.name} (${data.grades.length} grades)`);
      console.log(`const GRADE_${slug.toUpperCase().replace(/-/g, "_")} = [`);
      data.grades.forEach(g => console.log(`  "${g}",`));
      console.log("];\n");
    }
  }

  // Save raw data
  writeFileSync(join(__dirname, "scraped-products.json"), JSON.stringify(results, null, 2));
  console.log("\nRaw data saved to scripts/scraped-products.json");
}

main().catch(console.error);
