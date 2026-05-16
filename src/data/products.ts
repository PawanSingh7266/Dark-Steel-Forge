import sheets from "@/assets/products-sheets.jpg";
import coils from "@/assets/products-coils.jpg";
import pipes from "@/assets/products-pipes.jpg";
import bars from "@/assets/products-bars.jpg";
import flanges from "@/assets/products-flanges.jpg";
import plates from "@/assets/products-plates.jpg";
import structural from "@/assets/products-structural.jpg";
import alloys from "@/assets/products-alloys.jpg";
import decorative from "@/assets/products-decorative.jpg";

export type Product = {
  slug: string;
  name: string;
  category: "Stainless Steel" | "Structural" | "Decorative" | "High-Performance Alloys" | "Raw Materials";
  tagline: string;
  image: string;
  overview: string;
  grades: string[];
  standards: string[];
  dimensions: { label: string; value: string }[];
  finishes?: string[];
  applications: string[];
  industries: string[];
  related: string[]; // slugs
};

export const PRODUCTS: Product[] = [
  {
    slug: "stainless-steel-sheets",
    name: "Stainless Steel Sheets",
    category: "Stainless Steel",
    tagline: "Cold and hot rolled sheets engineered for precision fabrication.",
    image: sheets,
    overview:
      "Precision-rolled stainless steel sheets supplied in austenitic, ferritic and duplex grades. Manufactured to international standards with consistent surface integrity, tight thickness tolerance and full material traceability — ideal for architectural facades, process equipment and high-volume fabrication.",
    grades: ["SS 304 / 304L", "SS 316 / 316L", "SS 321", "SS 409 / 410 / 430", "Duplex 2205", "Super Duplex 2507"],
    standards: ["ASTM A240", "ASME SA240", "EN 10088-2", "JIS G4304 / G4305"],
    dimensions: [
      { label: "Thickness", value: "0.3 mm – 6.0 mm" },
      { label: "Width", value: "Up to 2000 mm" },
      { label: "Length", value: "Up to 6000 mm or coil cut-to-length" },
      { label: "Form", value: "Cold rolled (CR) / Hot rolled (HR)" },
    ],
    finishes: ["2B", "BA / No.8 Mirror", "No.1", "No.4 Satin", "Hairline", "PVC coated"],
    applications: ["Architectural cladding", "Kitchen equipment", "Process tanks", "Automotive trim", "Medical devices"],
    industries: ["Architecture", "Food & Dairy", "Pharma", "Automotive"],
    related: ["stainless-steel-coils", "stainless-steel-plates", "decorative-sheets"],
  },
  {
    slug: "stainless-steel-coils",
    name: "Stainless Steel Coils",
    category: "Stainless Steel",
    tagline: "Mill-edge and slit coils for high-volume downstream processing.",
    image: coils,
    overview:
      "Full-width and precision-slit stainless steel coils manufactured on world-class rolling mills. Supplied in HRAP and CR finishes with controlled mechanical properties for stamping, deep-drawing and continuous forming operations.",
    grades: ["SS 201 / 202", "SS 304 / 304L", "SS 316L", "SS 430", "SS 439"],
    standards: ["ASTM A240 / A480", "EN 10088-2", "JIS G4305"],
    dimensions: [
      { label: "Thickness", value: "0.30 mm – 4.0 mm" },
      { label: "Width", value: "25 mm – 1550 mm (slit to spec)" },
      { label: "Coil ID", value: "508 / 610 mm" },
      { label: "Coil Weight", value: "Up to 12 MT" },
    ],
    finishes: ["2B", "BA", "No.1", "Hairline", "Mirror"],
    applications: ["Press components", "White-goods panels", "Automotive parts", "Pipe & tube mills"],
    industries: ["Appliances", "Automotive", "Engineering"],
    related: ["stainless-steel-sheets", "stainless-steel-pipes", "decorative-sheets"],
  },
  {
    slug: "stainless-steel-plates",
    name: "Stainless Steel Plates",
    category: "Stainless Steel",
    tagline: "Heavy-gauge plates for pressure vessels and structural fabrication.",
    image: plates,
    overview:
      "Hot-rolled and quarto plates produced in standard and custom dimensions for tanks, pressure vessels, heat exchangers and offshore structures. Supplied with NACE MR0175, IBR and EN 10204 3.1 / 3.2 certification on request.",
    grades: ["SS 304 / 304L / 304H", "SS 316 / 316L / 316Ti", "SS 317L", "SS 321 / 321H", "Duplex 2205", "Super Duplex 2507"],
    standards: ["ASTM A240", "ASME SA240", "EN 10028-7", "NACE MR0175"],
    dimensions: [
      { label: "Thickness", value: "5 mm – 100 mm" },
      { label: "Width", value: "1000 – 3000 mm" },
      { label: "Length", value: "Up to 12000 mm" },
      { label: "Form", value: "Plate / Quarto plate / Profile cut" },
    ],
    finishes: ["No.1 (HRAP)", "Shot blasted", "Pickled & passivated"],
    applications: ["Pressure vessels", "Storage tanks", "Heat exchangers", "Offshore structures"],
    industries: ["Oil & Gas", "Power", "Petrochemicals", "Marine"],
    related: ["stainless-steel-sheets", "stainless-steel-pipes", "alloy-steel-products"],
  },
  {
    slug: "stainless-steel-pipes",
    name: "Stainless Steel Pipes",
    category: "Stainless Steel",
    tagline: "Seamless and welded pipes for high-integrity piping systems.",
    image: pipes,
    overview:
      "Seamless (SMLS) and electric-fusion-welded (EFW / ERW) stainless steel pipes manufactured to ASTM, ASME and EN specifications for process, utility and high-pressure applications. Hydrotested, eddy-current tested and supplied with full mill test certificates.",
    grades: ["SS 304 / 304L / 304H", "SS 316 / 316L / 316H", "SS 317L", "SS 321 / 347", "Duplex 2205"],
    standards: ["ASTM A312 / A358 / A790", "ASME SA312", "EN 10216-5", "EN 10217-7"],
    dimensions: [
      { label: "Size Range", value: "NB 6 mm – NB 600 mm (1/8\" – 24\")" },
      { label: "Schedule", value: "Sch 5S – Sch XXS" },
      { label: "Length", value: "Single / Double random, cut-to-length" },
      { label: "Type", value: "Seamless, ERW, EFW, LSAW" },
    ],
    finishes: ["Pickled & passivated", "Annealed", "Mirror polished", "BA"],
    applications: ["Process piping", "Steam lines", "Instrument tubing", "Heat exchanger tubes"],
    industries: ["Oil & Gas", "Petrochemicals", "Pharma", "Power"],
    related: ["stainless-steel-tubes", "stainless-steel-fittings", "stainless-steel-flanges"],
  },
  {
    slug: "stainless-steel-tubes",
    name: "Stainless Steel Tubes",
    category: "Stainless Steel",
    tagline: "Precision tubes for heat exchangers, instrumentation and structural use.",
    image: pipes,
    overview:
      "Cold-drawn and welded stainless steel tubes manufactured to tight OD, wall thickness and surface tolerances. Suitable for heat exchangers, condensers, instrumentation and high-purity applications including pharma and semiconductor.",
    grades: ["SS 304 / 304L", "SS 316 / 316L", "SS 321 / 347", "Duplex 2205", "Super Duplex 2507"],
    standards: ["ASTM A213 / A269 / A249", "ASME SA213", "EN 10216-5"],
    dimensions: [
      { label: "OD", value: "3 mm – 219 mm" },
      { label: "Wall Thickness", value: "0.5 mm – 20 mm" },
      { label: "Length", value: "Up to 24 m (U-bend on request)" },
      { label: "Form", value: "Round, square, rectangular" },
    ],
    finishes: ["Bright annealed", "Pickled", "Electropolished", "Mirror"],
    applications: ["Heat exchangers", "Boilers", "Instrumentation", "Hygienic dairy lines"],
    industries: ["Pharma", "Power", "Dairy", "Semiconductor"],
    related: ["stainless-steel-pipes", "stainless-steel-fittings", "nickel-alloy-products"],
  },
  {
    slug: "stainless-steel-flanges",
    name: "Stainless Steel Flanges",
    category: "Stainless Steel",
    tagline: "Forged flanges in WN, SO, BL, SW and threaded configurations.",
    image: flanges,
    overview:
      "Forged stainless steel flanges machined to ANSI, ASME and EN dimensional standards. Manufactured from controlled-melt billets with full traceability — ideal for high-pressure pipelines, refineries and power plants.",
    grades: ["SS 304 / 304L", "SS 316 / 316L", "SS 321 / 347", "Duplex 2205"],
    standards: ["ASTM A182 / A240", "ANSI B16.5", "ANSI B16.47", "EN 1092-1"],
    dimensions: [
      { label: "Size", value: "½\" – 48\" NB" },
      { label: "Pressure Class", value: "150# – 2500# / PN 6 – PN 100" },
      { label: "Type", value: "WN, SO, BL, SW, LJ, Threaded, RTJ" },
      { label: "Face", value: "RF, FF, RTJ, T&G, M&F" },
    ],
    applications: ["Pipeline systems", "Pressure equipment", "Valves & pumps", "Heat exchangers"],
    industries: ["Oil & Gas", "Petrochemicals", "Power", "Marine"],
    related: ["stainless-steel-fittings", "stainless-steel-pipes", "alloy-steel-products"],
  },
  {
    slug: "stainless-steel-fittings",
    name: "Stainless Steel Fittings",
    category: "Stainless Steel",
    tagline: "Buttweld and forged fittings engineered for high-integrity piping.",
    image: flanges,
    overview:
      "Buttweld (BW) and forged socket-weld / threaded fittings manufactured to ASME B16.9 / B16.11 standards. Hydrotested, dye-penetrant tested and supplied with full PMI and material certification.",
    grades: ["SS 304 / 304L", "SS 316 / 316L", "SS 321 / 347", "Duplex 2205"],
    standards: ["ASTM A403 / A182", "ASME B16.9", "ASME B16.11", "MSS-SP-43"],
    dimensions: [
      { label: "Size", value: "½\" – 48\" NB" },
      { label: "Schedule", value: "Sch 10S – Sch 160" },
      { label: "Type", value: "Elbows, Tees, Reducers, Caps, Crosses, Stub-ends" },
      { label: "Bend Radius", value: "1.5D / 3D / 5D long radius" },
    ],
    applications: ["Process piping", "Utility headers", "Pump skids", "Refinery service"],
    industries: ["Oil & Gas", "Petrochemicals", "Power", "Pharma"],
    related: ["stainless-steel-flanges", "stainless-steel-pipes", "stainless-steel-tubes"],
  },
  {
    slug: "stainless-steel-bars-rods",
    name: "Stainless Steel Bars & Rods",
    category: "Stainless Steel",
    tagline: "Round, square, hex and forged bars in a wide range of grades.",
    image: bars,
    overview:
      "Hot-rolled, cold-drawn, peeled and centreless-ground stainless steel bars supplied in tight diameter tolerances for machining, forging and fastener manufacturing.",
    grades: ["SS 303 / 304 / 304L", "SS 316 / 316L", "SS 410 / 416 / 420", "SS 17-4 PH", "Duplex 2205"],
    standards: ["ASTM A276 / A479 / A484", "EN 10088-3", "JIS G4303"],
    dimensions: [
      { label: "Round Bar", value: "Ø 3 mm – Ø 350 mm" },
      { label: "Hex / Square", value: "6 mm – 100 mm AF" },
      { label: "Length", value: "3 m – 6 m or cut-to-size" },
      { label: "Finish", value: "Black, Bright, Peeled, Polished, Centreless ground" },
    ],
    applications: ["Machined components", "Shafts & spindles", "Fasteners", "Surgical instruments"],
    industries: ["Engineering", "Automotive", "Medical", "Defence"],
    related: ["stainless-steel-flats", "stainless-steel-plates", "alloy-steel-products"],
  },
  {
    slug: "stainless-steel-flats",
    name: "Stainless Steel Flats",
    category: "Structural",
    tagline: "Rolled and forged flat bars for structural and engineering use.",
    image: structural,
    overview:
      "Hot-rolled and cold-finished stainless steel flat bars supplied in standard and custom widths. Used for base plates, brackets, frames and decorative architectural elements.",
    grades: ["SS 304 / 304L", "SS 316 / 316L", "SS 410 / 430"],
    standards: ["ASTM A276 / A479", "EN 10058"],
    dimensions: [
      { label: "Width", value: "10 mm – 300 mm" },
      { label: "Thickness", value: "3 mm – 60 mm" },
      { label: "Length", value: "3 m – 6 m" },
    ],
    applications: ["Structural framing", "Brackets", "Architectural trim", "Foundation plates"],
    industries: ["Construction", "Infrastructure", "Engineering"],
    related: ["stainless-steel-angles", "stainless-steel-channels", "stainless-steel-bars-rods"],
  },
  {
    slug: "stainless-steel-angles",
    name: "Stainless Steel Angles",
    category: "Structural",
    tagline: "Equal and unequal angles for structural and architectural framing.",
    image: structural,
    overview:
      "Hot-rolled and laser-fused stainless steel angles produced in equal and unequal leg configurations. Engineered for structural strength with corrosion resistance for exposed environments.",
    grades: ["SS 304 / 304L", "SS 316 / 316L"],
    standards: ["ASTM A276 / A484", "EN 10056-1"],
    dimensions: [
      { label: "Equal Angle", value: "20×20 mm – 200×200 mm" },
      { label: "Unequal Angle", value: "30×20 mm – 200×100 mm" },
      { label: "Thickness", value: "3 mm – 20 mm" },
    ],
    applications: ["Structural supports", "Frames", "Stair edging", "Marine fabrication"],
    industries: ["Construction", "Marine", "Infrastructure"],
    related: ["stainless-steel-channels", "stainless-steel-flats", "stainless-steel-plates"],
  },
  {
    slug: "stainless-steel-channels",
    name: "Stainless Steel Channels",
    category: "Structural",
    tagline: "C and U channels for industrial structures and supports.",
    image: structural,
    overview:
      "C-section and U-section stainless steel channels manufactured by hot rolling and laser fusion. Used in conveyors, support frames, light structural work and industrial fixtures.",
    grades: ["SS 304 / 304L", "SS 316 / 316L"],
    standards: ["ASTM A276", "EN 10279"],
    dimensions: [
      { label: "Section", value: "50 mm – 300 mm depth" },
      { label: "Flange Width", value: "25 mm – 100 mm" },
      { label: "Thickness", value: "3 mm – 15 mm" },
    ],
    applications: ["Conveyor frames", "Industrial racks", "Support structures", "Architectural framing"],
    industries: ["Infrastructure", "Construction", "Manufacturing"],
    related: ["stainless-steel-angles", "stainless-steel-flats", "stainless-steel-plates"],
  },
  {
    slug: "chequered-plates",
    name: "Stainless Steel Chequered Plates",
    category: "Decorative",
    tagline: "Anti-skid embossed plates for flooring and platforms.",
    image: decorative,
    overview:
      "Cold-rolled chequered plates with raised diamond or teardrop patterns providing anti-skid grip. Used for industrial flooring, stair treads, walkways and vehicle platforms.",
    grades: ["SS 304 / 304L", "SS 316L", "SS 409"],
    standards: ["ASTM A786", "EN 10025"],
    dimensions: [
      { label: "Thickness", value: "1.5 mm – 8 mm" },
      { label: "Width", value: "1000 / 1219 / 1500 mm" },
      { label: "Pattern", value: "Diamond, Teardrop, 5-Bar" },
    ],
    applications: ["Industrial flooring", "Stair treads", "Walkways", "Truck beds"],
    industries: ["Marine", "Infrastructure", "Transport"],
    related: ["perforated-sheets", "decorative-sheets", "stainless-steel-plates"],
  },
  {
    slug: "perforated-sheets",
    name: "Stainless Steel Perforated Sheets",
    category: "Decorative",
    tagline: "Precision perforated sheets for filtration, screening and acoustics.",
    image: decorative,
    overview:
      "Precision-perforated stainless steel sheets in round, square, slotted and decorative patterns. Manufactured on CNC presses with consistent open area for filtration, ventilation and architectural use.",
    grades: ["SS 304 / 304L", "SS 316 / 316L"],
    standards: ["ISO 7806", "DIN 24041"],
    dimensions: [
      { label: "Thickness", value: "0.5 mm – 6 mm" },
      { label: "Hole Size", value: "0.5 mm – 50 mm" },
      { label: "Pattern", value: "Round, Square, Slotted, Hexagonal" },
      { label: "Open Area", value: "20% – 70%" },
    ],
    applications: ["Filtration screens", "Acoustic panels", "Ventilation grilles", "Facade cladding"],
    industries: ["Architecture", "HVAC", "Pharma", "Food Processing"],
    related: ["chequered-plates", "decorative-sheets", "stainless-steel-sheets"],
  },
  {
    slug: "decorative-sheets",
    name: "Decorative & Designer Sheets",
    category: "Decorative",
    tagline: "Etched, embossed and PVD-coated sheets for premium architecture.",
    image: decorative,
    overview:
      "Designer stainless steel sheets in etched, embossed, vibration-finished and PVD colour-coated variants. Engineered for luxury interiors, elevator panels, signage and façade applications.",
    grades: ["SS 304", "SS 316", "SS 430"],
    standards: ["ASTM A480", "Custom architectural spec"],
    dimensions: [
      { label: "Thickness", value: "0.5 mm – 3 mm" },
      { label: "Size", value: "1219×2438 / 1219×3048 / 1500×3000 mm" },
      { label: "PVD Colours", value: "Rose Gold, Champagne, Black, Bronze, Blue, Copper" },
    ],
    finishes: ["Etched", "Embossed", "Hairline", "Vibration", "Mirror + PVD", "Anti-fingerprint coating"],
    applications: ["Elevator interiors", "Wall cladding", "Signage", "Luxury furniture"],
    industries: ["Architecture", "Hospitality", "Retail"],
    related: ["perforated-sheets", "chequered-plates", "stainless-steel-sheets"],
  },
  {
    slug: "alloy-steel-products",
    name: "Alloy Steel Products",
    category: "High-Performance Alloys",
    tagline: "Chromium-molybdenum alloy steels for high-temperature service.",
    image: alloys,
    overview:
      "Alloy steel plates, pipes, tubes, bars and forgings in P5, P9, P11, P22 and P91 grades. Suitable for high-temperature, high-pressure service in power, petrochemical and refinery applications.",
    grades: ["A335 P5 / P9 / P11 / P22 / P91", "A387 Gr.11 / Gr.22", "4140 / 4340"],
    standards: ["ASTM A335 / A387", "ASTM A182 F-series", "ASME SA-series"],
    dimensions: [
      { label: "Form", value: "Pipe, Tube, Plate, Bar, Forging, Fitting" },
      { label: "Size", value: "Standard & custom on request" },
      { label: "Heat Treatment", value: "Normalised, Tempered, Q&T" },
    ],
    applications: ["Boiler tubes", "Steam headers", "High-pressure piping", "Refinery components"],
    industries: ["Power", "Oil & Gas", "Petrochemicals"],
    related: ["inconel-products", "nickel-alloy-products", "stainless-steel-pipes"],
  },
  {
    slug: "inconel-products",
    name: "Inconel Products",
    category: "High-Performance Alloys",
    tagline: "Nickel-chromium superalloys for extreme temperature and corrosion.",
    image: alloys,
    overview:
      "Inconel 600, 601, 625, 718 and 825 plates, pipes, tubes, bars and fittings. Engineered for jet engines, gas turbines, chemical reactors and seawater service where stainless steel reaches its limits.",
    grades: ["Inconel 600", "Inconel 601", "Inconel 625", "Inconel 718", "Inconel 825"],
    standards: ["ASTM B168 / B167 / B166", "ASME SB-series", "AMS specifications"],
    dimensions: [
      { label: "Form", value: "Sheet, Plate, Pipe, Tube, Bar, Wire, Fittings, Flanges" },
      { label: "Size", value: "Mill standard + custom" },
      { label: "Condition", value: "Annealed, Solution treated, Age hardened" },
    ],
    applications: ["Gas turbines", "Reactor vessels", "Heat exchangers", "Aerospace components"],
    industries: ["Aerospace", "Power", "Chemical", "Marine"],
    related: ["monel-products", "hastelloy-products", "nickel-alloy-products"],
  },
  {
    slug: "monel-products",
    name: "Monel Products",
    category: "High-Performance Alloys",
    tagline: "Nickel-copper alloys with outstanding seawater corrosion resistance.",
    image: alloys,
    overview:
      "Monel 400 and K-500 in plate, pipe, tube, bar and fittings form. Industry standard for marine, desalination and chemical processing where chloride corrosion is critical.",
    grades: ["Monel 400", "Monel K-500"],
    standards: ["ASTM B127 / B165 / B164", "ASME SB-series"],
    dimensions: [
      { label: "Form", value: "Sheet, Plate, Pipe, Tube, Bar, Fittings" },
      { label: "Size", value: "Mill standard + custom" },
      { label: "Condition", value: "Annealed, Cold-worked, Age hardened (K-500)" },
    ],
    applications: ["Seawater piping", "Heat exchanger tubes", "Pump shafts", "Desalination equipment"],
    industries: ["Marine", "Chemical", "Oil & Gas"],
    related: ["inconel-products", "hastelloy-products", "nickel-alloy-products"],
  },
  {
    slug: "hastelloy-products",
    name: "Hastelloy Products",
    category: "High-Performance Alloys",
    tagline: "Nickel-molybdenum alloys for the harshest chemical service.",
    image: alloys,
    overview:
      "Hastelloy C-22, C-276, B-2 and X plates, pipes, tubes and bars. Selected for severe acid service, FGD systems and reactor environments demanding the highest corrosion resistance.",
    grades: ["Hastelloy C-22", "Hastelloy C-276", "Hastelloy B-2", "Hastelloy X"],
    standards: ["ASTM B575 / B622 / B619", "ASME SB-series"],
    dimensions: [
      { label: "Form", value: "Sheet, Plate, Pipe, Tube, Bar, Fittings" },
      { label: "Thickness", value: "0.5 mm – 50 mm" },
      { label: "Condition", value: "Solution annealed" },
    ],
    applications: ["Chemical reactors", "FGD scrubbers", "Acid piping", "Pharma vessels"],
    industries: ["Chemical", "Pharma", "Power"],
    related: ["inconel-products", "monel-products", "titanium-products"],
  },
  {
    slug: "titanium-products",
    name: "Titanium Products",
    category: "High-Performance Alloys",
    tagline: "Commercially pure and Grade 5 titanium for lightweight strength.",
    image: alloys,
    overview:
      "Titanium sheets, plates, pipes, tubes and bars in Grade 1, 2, 5 (Ti-6Al-4V) and 7. Combines exceptional strength-to-weight ratio with outstanding corrosion resistance for aerospace, medical and marine applications.",
    grades: ["Ti Grade 1", "Ti Grade 2", "Ti Grade 5 (6Al-4V)", "Ti Grade 7"],
    standards: ["ASTM B265 / B338 / B348", "AMS 4911 / 4928"],
    dimensions: [
      { label: "Form", value: "Sheet, Plate, Pipe, Tube, Bar, Wire, Forgings" },
      { label: "Thickness", value: "0.3 mm – 100 mm" },
      { label: "Condition", value: "Annealed, Mill annealed" },
    ],
    applications: ["Aerospace structures", "Medical implants", "Heat exchangers", "Desalination plants"],
    industries: ["Aerospace", "Medical", "Marine", "Chemical"],
    related: ["nickel-alloy-products", "inconel-products", "hastelloy-products"],
  },
  {
    slug: "nickel-alloy-products",
    name: "Nickel Alloy Products",
    category: "High-Performance Alloys",
    tagline: "Nickel 200 / 201 and engineered nickel alloys for specialty service.",
    image: alloys,
    overview:
      "Nickel 200, Nickel 201 and engineered nickel alloys in full product range. Used for caustic handling, electronics, food processing and aerospace components where pure nickel chemistry is required.",
    grades: ["Nickel 200", "Nickel 201", "Alloy 20", "Alloy 800 / 800H / 800HT"],
    standards: ["ASTM B161 / B162 / B163", "ASME SB-series"],
    dimensions: [
      { label: "Form", value: "Sheet, Plate, Pipe, Tube, Bar, Wire, Fittings" },
      { label: "Size", value: "Mill standard + custom" },
      { label: "Condition", value: "Annealed, Cold-worked" },
    ],
    applications: ["Caustic evaporators", "Electronics", "Aerospace parts", "Food equipment"],
    industries: ["Chemical", "Aerospace", "Electronics", "Food"],
    related: ["inconel-products", "monel-products", "alloy-steel-products"],
  },
  {
    slug: "industrial-raw-materials",
    name: "Industrial Raw Materials",
    category: "Raw Materials",
    tagline: "Billets, blooms, ingots and engineering raw stock supplied to spec.",
    image: alloys,
    overview:
      "Specialty alloy billets, blooms, ingots and engineering raw materials supplied with full mill certification and traceability. Engineered for forge shops, foundries and downstream re-rollers.",
    grades: ["Custom melt — stainless, alloy, nickel, titanium"],
    standards: ["ASTM / EN / JIS / Custom"],
    dimensions: [
      { label: "Form", value: "Billet, Bloom, Ingot, Slab" },
      { label: "Size", value: "As per customer specification" },
      { label: "Certification", value: "EN 10204 3.1 / 3.2, NACE, PMI" },
    ],
    applications: ["Open / closed die forging", "Investment casting", "Re-rolling mills"],
    industries: ["Forging", "Casting", "Heavy Engineering"],
    related: ["alloy-steel-products", "nickel-alloy-products", "stainless-steel-bars-rods"],
  },
];

export const CATEGORIES = [
  "Stainless Steel",
  "Structural",
  "Decorative",
  "High-Performance Alloys",
  "Raw Materials",
] as const;

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const getRelated = (slugs: string[]) => slugs.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean) as Product[];