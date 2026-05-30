import sheetsImg from "@/assets/ssss-sheets.jpg";
import plateImg from "@/assets/ssss-plate.jpg";
import coilImg from "@/assets/ssss-coil.jpg";
import chequeredImg from "@/assets/ssss-chequered.jpg";
import fittingsImg from "@/assets/ssss-pipe-fittings.jpg";
import weldedImg from "@/assets/ssss-welded-pipes.jpg";
import seamlessImg from "@/assets/ssss-seamless-pipes.jpg";
import rodsImg from "@/assets/ssss-rods.jpg";
import anglesImg from "@/assets/ssss-angles.jpg";
import flatsImg from "@/assets/ssss-flats.jpg";
import flangesImg from "@/assets/ssss-flanges.jpg";
import designerImg from "@/assets/ssss-designer-sheets.jpg";
import slitCoilImg from "@/assets/ssss-slit-coil.jpg";

export const COMPANY = "Bhandari metal & alloyes";

const CAT_SLUG_TO_DIR: Record<string, string> = {
  "stainless-steel-sheets": "sheets",
  "stainless-steel-plate": "plate",
  "stainless-steel-coil": "coil",
  "stainless-steel-chequered-sheets": "chequered",
  "stainless-steel-pipe-fittings": "pipe-fittings",
  "stainless-steel-welded-pipes": "welded-pipes",
  "stainless-steel-seamless-pipes": "seamless-pipes",
  "stainless-steel-rods": "rods",
  "stainless-steel-angles": "angles",
  "stainless-steel-flats": "flats",
  "stainless-steel-flanges": "flanges",
  "stainless-steel-designer-sheets": "designer-sheets",
  "stainless-steel-slit-coil": "slit-coil",
};

const CAT_IMAGE_COUNTS: Record<string, number> = {
  "stainless-steel-sheets": 25,
  "stainless-steel-plate": 26,
  "stainless-steel-coil": 27,
  "stainless-steel-chequered-sheets": 21,
  "stainless-steel-pipe-fittings": 27,
  "stainless-steel-welded-pipes": 27,
  "stainless-steel-seamless-pipes": 27,
  "stainless-steel-rods": 25,
  "stainless-steel-angles": 26,
  "stainless-steel-flats": 27,
  "stainless-steel-flanges": 27,
  "stainless-steel-designer-sheets": 2,
  "stainless-steel-slit-coil": 28,
};

export function getGradeImage(catSlug: string, gradeIndex: number): string {
  const dir = CAT_SLUG_TO_DIR[catSlug] || "sheets";
  const count = CAT_IMAGE_COUNTS[catSlug] || 24;
  return `/images/products/${dir}/${gradeIndex % count}.jpg`;
}

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  image: string;
  grades: string[];
};

const GRADE_SHEETS = [
  "202", "301", "304", "304L", "316", "316L", "310", "310S",
  "309", "309S", "316Ti", "321", "409M", "430", "441", "410",
  "Duplex", "Duplex 2205", "Duplex 2507", "Hastelloy", "Inconel",
  "X2CrNi12", "X5CrNi1810", "253 MA", "16Mo3",
];

const GRADE_PLATE = [
  "202", "304", "304L", "316", "316L", "310", "310S", "309",
  "316Ti", "321", "904L", "409M", "409L", "409", "430", "441", "410",
  "Duplex", "Duplex 2205", "Duplex 2507", "Hastelloy", "Inconel",
  "X2CrNi12", "X5CrNi1810", "253 MA", "16Mo3",
];

const GRADE_COIL = [
  "202", "304", "304L", "316", "316L", "309", "309S", "310", "310S",
  "316Ti", "904L", "409M", "409L", "430", "410", "321", "441", "409",
  "Duplex", "Duplex 2205", "Duplex 2507", "Hastelloy", "Inconel",
  "X2CrNi12", "X5CrNi1810", "253 MA", "16Mo3",
];

const GRADE_CHEQUERED = [
  "202", "304", "304L", "316", "316L", "310", "310S", "309",
  "316Ti", "321", "904L", "409M", "409L", "409", "430", "441", "410",
  "Duplex", "Duplex 2205", "X5CrNi1810",
];

const GRADE_PIPE_FITTINGS = [
  "202", "304", "304L", "316", "316L", "310", "310S", "309",
  "301S", "316Ti", "321", "904L", "409M", "409L", "409", "430", "441", "410",
  "Duplex", "Duplex 2205", "Duplex 2507", "Hastelloy", "Inconel",
  "X2CrNi12", "X5CrNi1810", "253 MA", "16Mo3",
];

const GRADE_WELDED_PIPES = [
  "202", "304", "304L", "316", "316L", "310", "310S", "309", "309S",
  "316Ti", "321", "904L", "409M", "409L", "409", "430", "441", "410",
  "Duplex", "Duplex 2205", "Duplex 2507", "Hastelloy", "Inconel",
  "X2CrNi12", "X5CrNi1810", "253 MA", "16Mo3",
];

const GRADE_SEAMLESS_PIPES = [
  "202", "304", "304L", "316", "316L", "310", "310S", "309", "309S",
  "316Ti", "321", "904L", "409M", "409L", "409", "430", "441", "410",
  "Duplex", "Duplex 2205", "Duplex 2507", "Hastelloy", "Inconel",
  "X2CrNi12", "X5CrNi1810", "253 MA", "16Mo3",
];

const GRADE_RODS = [
  "202", "304", "304L", "316", "316L", "310", "310S", "309",
  "321", "904L", "409M", "409L", "409", "430", "441", "410",
  "Duplex", "Duplex 2205", "Duplex 2507", "Hastelloy", "Inconel",
  "X2CrNi12", "X5CrNi1810", "253 MA", "16Mo3",
];

const GRADE_ANGLES = [
  "202", "304", "304L", "316", "316L", "310", "310S", "309",
  "301SS", "301", "316Ti", "321", "904L", "409M", "409L", "409", "430", "441", "410",
  "Duplex", "Duplex 2205", "Duplex 2507", "Hastelloy", "Inconel",
  "X2CrNi12", "X5CrNi1810", "253 MA", "16Mo3",
];

const GRADE_FLATS = [
  "202", "304", "304L", "316", "316L", "310", "310S", "309",
  "301S", "304 SS Flat", "316Ti", "321", "904L", "409M", "409L", "409", "430", "441", "410",
  "Duplex", "Duplex 2205", "Duplex 2507", "Hastelloy", "Inconel",
  "X2CrNi12", "X5CrNi1810", "253 MA", "16Mo3",
];

const GRADE_FLANGES = [
  "202", "304", "304L", "316", "316L", "310", "310S", "309",
  "301S", "316Ti", "321", "904L", "409M", "409L", "409", "430", "441", "410",
  "Duplex", "Duplex 2205", "Duplex 2507", "Hastelloy", "Inconel",
  "X2CrNi12", "X5CrNi1810", "253 MA", "16Mo3",
];

const GRADE_DESIGNER = ["202", "304"];

const GRADE_SLIT_COIL = [
  "202", "304", "304L", "316", "316L", "304",
  "309", "309S", "310", "310S", "316Ti", "904L", "409M",
  "409L", "430", "410", "321", "441", "409",
  "Duplex", "Duplex 2205", "Duplex 2507", "Hastelloy", "Inconel",
  "X2CrNi12", "X5CrNi1810", "253 MA", "16Mo3",
];

export const CATEGORIES: Category[] = [
  {
    slug: "stainless-steel-sheets",
    name: "Stainless Steel Sheets",
    shortName: "Sheets",
    image: sheetsImg,
    grades: GRADE_SHEETS,
  },
  {
    slug: "stainless-steel-plate",
    name: "Stainless Steel Plate",
    shortName: "Plate",
    image: plateImg,
    grades: GRADE_PLATE,
  },
  {
    slug: "stainless-steel-coil",
    name: "Stainless Steel Coil",
    shortName: "Coil",
    image: coilImg,
    grades: GRADE_COIL,
  },
  {
    slug: "stainless-steel-chequered-sheets",
    name: "Stainless Steel Chequered Sheets",
    shortName: "Chequered Sheets",
    image: chequeredImg,
    grades: GRADE_CHEQUERED,
  },
  {
    slug: "stainless-steel-pipe-fittings",
    name: "Stainless Steel Pipe Fittings",
    shortName: "Pipe Fittings",
    image: fittingsImg,
    grades: GRADE_PIPE_FITTINGS,
  },
  {
    slug: "stainless-steel-welded-pipes",
    name: "Stainless Steel Welded Pipes",
    shortName: "Welded Pipes",
    image: weldedImg,
    grades: GRADE_WELDED_PIPES,
  },
  {
    slug: "stainless-steel-seamless-pipes",
    name: "Stainless Steel Seamless Pipes",
    shortName: "Seamless Pipes",
    image: seamlessImg,
    grades: GRADE_SEAMLESS_PIPES,
  },
  {
    slug: "stainless-steel-rods",
    name: "Stainless Steel Rods",
    shortName: "Rods",
    image: rodsImg,
    grades: GRADE_RODS,
  },
  {
    slug: "stainless-steel-angles",
    name: "Stainless Steel Angles",
    shortName: "Angles",
    image: anglesImg,
    grades: GRADE_ANGLES,
  },
  {
    slug: "stainless-steel-flats",
    name: "Stainless Steel Flats",
    shortName: "Flats",
    image: flatsImg,
    grades: GRADE_FLATS,
  },
  {
    slug: "stainless-steel-flanges",
    name: "Stainless Steel Flanges",
    shortName: "Flanges",
    image: flangesImg,
    grades: GRADE_FLANGES,
  },
  {
    slug: "stainless-steel-designer-sheets",
    name: "Stainless Steel Designer Sheets",
    shortName: "Designer Sheets",
    image: designerImg,
    grades: GRADE_DESIGNER,
  },
  {
    slug: "stainless-steel-slit-coil",
    name: "Stainless Steel Slit Coil",
    shortName: "Slit Coil",
    image: slitCoilImg,
    grades: GRADE_SLIT_COIL,
  },
];

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
  const base = cat.slug.replace(/^stainless-steel-/, "");
  return `${gradeSlug(grade)}-${base}`.replace(/-+/g, "-");
}

export function productName(grade: string, cat: Category): string {
  return `${grade} ${cat.name}`;
}

export function findProduct(
  catSlug: string,
  prodSlug: string,
): { category: Category; grade: string; name: string; slug: string } | undefined {
  const cat = getCategory(catSlug);
  if (!cat) return undefined;
  const grade = cat.grades.find((g) => productSlug(g, cat) === prodSlug);
  if (!grade) return undefined;
  return { category: cat, grade, name: productName(grade, cat), slug: prodSlug };
}
