import sheetsImg from "@/assets/products-sheets.jpg";
import coilsImg from "@/assets/products-coils.jpg";
import pipesImg from "@/assets/products-pipes.jpg";
import barsImg from "@/assets/products-bars.jpg";
import flangesImg from "@/assets/products-flanges.jpg";
import platesImg from "@/assets/products-plates.jpg";
import structuralImg from "@/assets/products-structural.jpg";
import alloysImg from "@/assets/products-alloys.jpg";
import decorativeImg from "@/assets/products-decorative.jpg";

export type Category = {
  slug: string;            // e.g. "stainless-steel-sheets"
  name: string;            // e.g. "Stainless Steel Sheets"
  shortName: string;       // e.g. "Sheets"
  group: "Stainless Steel" | "Pipes & Tubes" | "Flanges & Fittings" | "Long Products" | "Structural" | "High-Performance Alloys";
  tagline: string;
  image: string;
  grades: string[];        // e.g. ["202","304","304L",...]
};

const SS_FLAT_GRADES = [
  "202","301","304","304L","309","309S","310","310S","316","316L","316Ti","317L","321","347",
  "409M","410","430","441","Duplex 2205","Duplex 2507","Hastelloy","Inconel","X2CrNi12","X5CrNi1810","253 MA","16Mo3",
];

const SS_PIPE_GRADES = [
  "304","304L","304H","316","316L","316H","317L","321","321H","347","Duplex 2205","Duplex 2507",
];

const SS_LONG_GRADES = [
  "303","304","304L","316","316L","410","416","420","430","431","17-4 PH","Duplex 2205",
];

const SS_STRUCT_GRADES = ["304","304L","316","316L","410","430"];

export const CATEGORIES: Category[] = [
  // Stainless Steel — flat
  { slug: "stainless-steel-sheets", name: "Stainless Steel Sheets", shortName: "Sheets", group: "Stainless Steel", tagline: "Cold and hot rolled sheets engineered for precision fabrication.", image: sheetsImg, grades: SS_FLAT_GRADES },
  { slug: "stainless-steel-coils", name: "Stainless Steel Coils", shortName: "Coils", group: "Stainless Steel", tagline: "Mill-edge and slit coils for high-volume downstream processing.", image: coilsImg, grades: SS_FLAT_GRADES },
  { slug: "stainless-steel-plates", name: "Stainless Steel Plates", shortName: "Plates", group: "Stainless Steel", tagline: "Heavy-gauge plates for pressure vessels and structural fabrication.", image: platesImg, grades: SS_FLAT_GRADES },
  { slug: "stainless-steel-chequered-plates", name: "Stainless Steel Chequered Plates", shortName: "Chequered Plates", group: "Stainless Steel", tagline: "Anti-skid embossed plates for flooring and platforms.", image: platesImg, grades: ["304","304L","316L","409"] },

  // Pipes & Tubes
  { slug: "stainless-steel-pipes", name: "Stainless Steel Pipes", shortName: "Pipes", group: "Pipes & Tubes", tagline: "Seamless and welded pipes for high-integrity piping systems.", image: pipesImg, grades: SS_PIPE_GRADES },
  { slug: "stainless-steel-seamless-pipes", name: "Stainless Steel Seamless Pipes", shortName: "Seamless Pipes", group: "Pipes & Tubes", tagline: "Cold-drawn seamless pipes for high-pressure service.", image: pipesImg, grades: SS_PIPE_GRADES },
  { slug: "stainless-steel-welded-pipes", name: "Stainless Steel Welded Pipes", shortName: "Welded Pipes", group: "Pipes & Tubes", tagline: "ERW and EFW welded pipes for utility and process lines.", image: pipesImg, grades: SS_PIPE_GRADES },
  { slug: "stainless-steel-tubes", name: "Stainless Steel Tubes", shortName: "Tubes", group: "Pipes & Tubes", tagline: "Precision tubes for heat exchangers and instrumentation.", image: pipesImg, grades: SS_PIPE_GRADES },

  // Flanges & Fittings
  { slug: "stainless-steel-flanges", name: "Stainless Steel Flanges", shortName: "Flanges", group: "Flanges & Fittings", tagline: "Forged flanges in WN, SO, BL, SW and threaded configurations.", image: flangesImg, grades: SS_PIPE_GRADES },
  { slug: "stainless-steel-pipe-fittings", name: "Stainless Steel Pipe Fittings", shortName: "Pipe Fittings", group: "Flanges & Fittings", tagline: "Buttweld and forged fittings for high-integrity piping.", image: flangesImg, grades: SS_PIPE_GRADES },

  // Long products
  { slug: "stainless-steel-bars", name: "Stainless Steel Bars", shortName: "Bars", group: "Long Products", tagline: "Round, square and hex bars for machining and forging.", image: barsImg, grades: SS_LONG_GRADES },
  { slug: "stainless-steel-rods", name: "Stainless Steel Rods", shortName: "Rods", group: "Long Products", tagline: "Cold-drawn and centreless-ground rods in tight tolerances.", image: barsImg, grades: SS_LONG_GRADES },

  // Structural
  { slug: "stainless-steel-flats", name: "Stainless Steel Flats", shortName: "Flats", group: "Structural", tagline: "Rolled and forged flat bars for structural and engineering use.", image: structuralImg, grades: SS_STRUCT_GRADES },
  { slug: "stainless-steel-angles", name: "Stainless Steel Angles", shortName: "Angles", group: "Structural", tagline: "Equal and unequal angles for structural and architectural framing.", image: structuralImg, grades: SS_STRUCT_GRADES },
  { slug: "stainless-steel-channels", name: "Stainless Steel Channels", shortName: "Channels", group: "Structural", tagline: "C and U channels for industrial structures and supports.", image: structuralImg, grades: SS_STRUCT_GRADES },
  { slug: "stainless-steel-designer-sheets", name: "Stainless Steel Designer Sheets", shortName: "Designer Sheets", group: "Structural", tagline: "Etched, embossed and PVD-coated sheets for premium architecture.", image: decorativeImg, grades: ["304","316","430"] },
  { slug: "stainless-steel-slit-coils", name: "Stainless Steel Slit Coils", shortName: "Slit Coils", group: "Structural", tagline: "Precision slit coils to customer width and gauge.", image: coilsImg, grades: SS_FLAT_GRADES },

  // High-Performance Alloys
  { slug: "alloy-products", name: "Alloy Products", shortName: "Alloy", group: "High-Performance Alloys", tagline: "Chromium-molybdenum alloy steels for high-temperature service.", image: alloysImg, grades: ["A335 P5","A335 P9","A335 P11","A335 P22","A335 P91","A387 Gr.11","A387 Gr.22","4140","4340"] },
  { slug: "duplex-products", name: "Duplex Products", shortName: "Duplex", group: "High-Performance Alloys", tagline: "Duplex and super-duplex stainless for corrosive service.", image: alloysImg, grades: ["2205","2507","S31803","S32750","S32760","Zeron 100"] },
  { slug: "inconel-products", name: "Inconel Products", shortName: "Inconel", group: "High-Performance Alloys", tagline: "Nickel-chromium superalloys for extreme temperature and corrosion.", image: alloysImg, grades: ["600","601","625","718","800","800H","800HT","825"] },
  { slug: "hastelloy-products", name: "Hastelloy Products", shortName: "Hastelloy", group: "High-Performance Alloys", tagline: "Nickel-molybdenum alloys for severe chemical environments.", image: alloysImg, grades: ["B2","B3","C4","C22","C276","X","G-30"] },
  { slug: "titanium-products", name: "Titanium Products", shortName: "Titanium", group: "High-Performance Alloys", tagline: "Titanium grades for aerospace, medical and marine service.", image: alloysImg, grades: ["Gr.1","Gr.2","Gr.5","Gr.7","Gr.9","Gr.11","Gr.12"] },
  { slug: "nickel-alloy-products", name: "Nickel Alloy Products", shortName: "Nickel Alloy", group: "High-Performance Alloys", tagline: "Pure nickel and Monel grades for extreme corrosion resistance.", image: alloysImg, grades: ["Nickel 200","Nickel 201","Monel 400","Monel K-500","Incoloy 800","Incoloy 825"] },
];

export const GROUPS = [
  "Stainless Steel",
  "Pipes & Tubes",
  "Flanges & Fittings",
  "Long Products",
  "Structural",
  "High-Performance Alloys",
] as const;

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function gradeSlug(grade: string): string {
  return grade
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function productSlug(grade: string, cat: Category): string {
  return `${gradeSlug(grade)}-${cat.slug.replace(/^stainless-steel-/, "")}`.replace(/-+/g, "-");
}

export function productName(grade: string, cat: Category): string {
  // Always end with the full category name e.g. "304 Stainless Steel Sheets"
  return `${grade} ${cat.name}`;
}

export function findProduct(catSlug: string, prodSlug: string): { category: Category; grade: string; name: string; slug: string } | undefined {
  const cat = getCategory(catSlug);
  if (!cat) return undefined;
  const grade = cat.grades.find((g) => productSlug(g, cat) === prodSlug);
  if (!grade) return undefined;
  return { category: cat, grade, name: productName(grade, cat), slug: prodSlug };
}
