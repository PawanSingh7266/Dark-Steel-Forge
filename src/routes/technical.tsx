import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Container, FadeIn, Eyebrow } from "@/components/section";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export const Route = createFileRoute("/technical")({
  head: () => ({
    meta: [
      { title: "Technical Information — Bhandari Metals & Alloys" },
      {
        name: "description",
        content: "Material grades, mechanical properties, ASTM/ASME standards and specifications.",
      },
    ],
  }),
  component: Technical,
});

const TABS = [
  {
    name: "Material Grades",
    rows: [
      ["Grade", "UNS", "Type", "Key Properties"],
      [
        "SS 304 / 304L",
        "S30400 / S30403",
        "Austenitic",
        "General purpose, excellent corrosion resistance",
      ],
      [
        "SS 316 / 316L",
        "S31600 / S31603",
        "Austenitic",
        "Enhanced corrosion in chloride environments",
      ],
      ["SS 321", "S32100", "Austenitic", "Stabilized, high-temperature service"],
      ["SS 310 / 310S", "S31000", "Austenitic", "High-temperature oxidation resistance"],
      ["SS 409 / 410", "S40900 / S41000", "Ferritic / Martensitic", "Automotive, structural"],
      ["SS 904L", "N08904", "Super austenitic", "Aggressive acidic environments"],
      ["Duplex 2205", "S31803 / S32205", "Duplex", "High strength + corrosion resistance"],
    ],
  },
  {
    name: "Mechanical Properties",
    rows: [
      ["Grade", "Tensile (MPa)", "Yield (MPa)", "Elongation %", "Hardness (HB)"],
      ["SS 304", "≥ 515", "≥ 205", "≥ 40", "≤ 201"],
      ["SS 316", "≥ 515", "≥ 205", "≥ 40", "≤ 217"],
      ["SS 321", "≥ 515", "≥ 205", "≥ 40", "≤ 217"],
      ["SS 410", "≥ 450", "≥ 205", "≥ 20", "≤ 217"],
      ["Duplex 2205", "≥ 620", "≥ 450", "≥ 25", "≤ 293"],
    ],
  },
  {
    name: "Standards",
    rows: [
      ["Standard", "Scope"],
      ["ASTM A240 / A480", "Stainless steel sheets and plates"],
      ["ASTM A312", "Seamless & welded austenitic stainless pipes"],
      ["ASTM A269 / A213", "Tubing for general & boiler service"],
      ["ASTM A276", "Stainless bars and shapes"],
      ["ASTM A182", "Forged flanges and fittings"],
      ["ASTM A403", "Wrought stainless buttweld fittings"],
      ["ASME SA-240 / SA-312", "Pressure vessel & power piping"],
      ["ANSI B16.5 / B16.9", "Flange & fitting dimensions"],
    ],
  },
  {
    name: "Chemical Composition",
    rows: [],
  },
];

const CHEM_HEADERS = ["Grade", "C% Max", "Mn%", "P%", "S%", "Si%", "Cr%", "Ni%", "Mo%", "N%", "Others"];

const CHEM_TABLES: { title: string; rows: string[][] }[] = [
  {
    title: "Grades: SSLN1 – 309",
    rows: [
      ["SSLN1", "0.08-0.11", "9.00-9.75", "0.06", "0.016 Max", "0.06 Max", "15.00-15.70", "1.00-1.70", "–", "0.13-0.16", "cu=1.73-2.00"],
      ["SSLN4", "0.05-0.08", "6.75-7.50", "0.06 Max", "0.015 Max", "0.06 Max", "16.00-16.70", "4.00-4.70", "–", "0.08-0.11", "cu=1.60-2.00"],
      ["301", "0.15", "2.00", "0.045", "0.03", "1.00", "16.00-18.00", "6.00-8.00", "–", "0.10", "–"],
      ["304", "0.08", "2.00", "0.045", "0.03", "0.75", "18.00-20.00", "8.00-10.50", "–", "0.10", "–"],
      ["304H", "0.04-0.10", "2.00", "0.045", "0.03", "0.75", "18.00-20.00", "8.00-10.50", "–", "–", "–"],
      ["304L", "0.030", "2.00", "0.045", "0.03", "0.75", "18.00-20.00", "8.00-12.00", "–", "–", "–"],
      ["304LN", "0.030", "2.00", "0.045", "0.03", "0.75", "18.00-20.00", "8.00-12.00", "–", "–", "–"],
      ["309", "0.20", "2.00", "0.045", "0.03", "0.75", "22.00-24.00", "12.00-15.00", "–", "–", "–"],
    ],
  },
  {
    title: "Grades: 309S – 409",
    rows: [
      ["309 S", "0.08", "2.00", "0.045", "0.03", "0.75", "22.00-24.00", "12.00-15.00", "–", "–", "–"],
      ["310", "0.25", "2.00", "0.045", "0.03", "1.50", "24.00-26.00", "19.00-22.00", "–", "–", "–"],
      ["310 S", "0.08", "2.00", "0.045", "0.03", "1.50", "24.00-26.00", "19.00-22.00", "–", "–", "–"],
      ["316", "0.08", "2.00", "0.045", "0.03", "0.75", "16.00-18.00", "10.00-14.00", "2.00-3.00", "0.10", "–"],
      ["316 L", "0.030", "2.00", "0.045", "0.03", "0.75", "16.00-18.00", "10.00-14.00", "2.00", "0.10", "–"],
      ["316LN", "0.030", "2.00", "0.045", "0.03", "0.75", "16.00-18.00", "10.00-14.00", "2.00", "0.10", "–"],
      ["316LTi", "0.08", "2.00", "0.045", "0.03", "0.75", "16.00-18.00", "10.00-14.00", "3.00", "0.10", "Ti=5x(c+N)Min, 316LTi 0.70 Max"],
      ["317", "0.08", "2.00", "0.045", "0.03", "0.75", "18.00-20.00", "11.00-15.00", "3.00", "0.10", ""],
      ["321", "0.08", "2.00", "0.045", "0.03", "0.75", "17.00-19.00", "9.00-12.00", "–", "0.10", "Ti=5x(C+N)Min"],
      ["347", "0.08", "2.00", "0.045", "0.03", "0.75", "17.00-19.00", "9.00-13.00", "–", "–", "ch=10XCMin, 1.00Max"],
      ["409", "0.030", "1.00", "0.040", "0.02", "1.00", "10.50-11.75", "0.50Max", "–", "0.03", "Ti=6x(C+N)Min, 0.75Max"],
    ],
  },
  {
    title: "Grades: 409M – 420",
    rows: [
      ["409M", "0.03", "0.080-1.50", "0.03", "0.003", "1.00", "10.80-12.50", "1.50 Max", "–", "0.03", "Ti=0.75Max"],
      ["410", "0.15", "1.00", "0.040", "0.003", "1.00", "11.50-13.50", "0.75 Max", "–", "–", "–"],
      ["410S", "0.08", "1.00", "0.040", "0.003", "1.00", "11.50-13.50", "0.60 Max", "–", "–", "–"],
      ["430", "0.12", "1.00", "0.04", "0.003", "1.00", "16.00-19.00", "0.75 Max", "–", "–", "–"],
      ["430Ti", "0.030", "1.00", "0.04", "0.003", "1.00", "16.00-18.00", "–", "–", "–", "Ti=010-1.0"],
      ["436", "0.12", "1.00", "0.040", "0.003", "1.00", "16.00-18.00", "–", "0.75-1.5 Max", "–", "cb=5xCmin-0.80Max"],
      ["420", "0.15 Min", "1.00", "0.040", "0.003", "1.00", "12.00-14.00", "0.75 Max", "–", "–", "M0=0.50Max"],
    ],
  },
];

const FAQS = [
  {
    q: "What thicknesses and dimensions can you supply?",
    a: "Sheets and plates from 0.3 mm to 100 mm; coils up to 1500 mm width; pipes from NB 6 to 600 mm. Custom cut-to-size processing is available on request.",
  },
  {
    q: "Do you provide mill test certificates?",
    a: "Yes — every consignment is dispatched with original mill test certificates ensuring full chemical and mechanical traceability.",
  },
  {
    q: "What surface finishes are available?",
    a: "2B, BA, No. 4, No. 8 mirror, hairline and custom architectural finishes for sheets and coils.",
  },
  {
    q: "Can you handle export documentation?",
    a: "Yes — full export documentation, packaging and freight-forwarding coordination is supported by our team.",
  },
];

function Technical() {
  const [open, setOpen] = useState<number | null>(0);
  const [chemQuery, setChemQuery] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Technical Information"
        title={
          <>
            Chemical <span className="text-gradient-glow">Composition.</span>
          </>
        }
        subtitle="Complete stainless steel grade specifications — clearly documented for engineers, fabricators and procurement teams."
      />

      <Section>
        <Container>
          <FadeIn>
            <div className="mb-8 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={chemQuery}
                onChange={(e) => setChemQuery(e.target.value)}
                placeholder="Search by grade (e.g. 304, 316L, 430)"
                className="w-full pl-10 pr-4 py-2.5 rounded-full glass text-sm bg-transparent border border-steel/60 focus:outline-none focus:border-primary"
              />
            </div>
          </FadeIn>

          <div className="space-y-16">
            {CHEM_TABLES.map((ct) => {
              const q = chemQuery.trim().toLowerCase();
              const filtered = q
                ? ct.rows.filter((r) => r[0].toLowerCase().includes(q))
                : ct.rows;
              if (q && filtered.length === 0) return null;
              return (
                <FadeIn key={ct.title}>
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-4 text-foreground/90">
                    {ct.title}
                  </h3>
                  <div className="rounded-2xl glass overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm min-w-[900px]">
                        <thead className="sticky top-0 z-10 bg-background/95 backdrop-blur">
                          <tr className="border-b border-steel">
                            {CHEM_HEADERS.map((h) => (
                              <th
                                key={h}
                                className="text-left p-3 md:p-4 text-xs uppercase tracking-[0.15em] text-primary font-medium whitespace-nowrap"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {filtered.map((row, i) => (
                            <tr
                              key={i}
                              className="border-b border-steel/50 hover:bg-white/[0.02] transition-colors"
                            >
                              {row.map((c, j) => (
                                <td
                                  key={j}
                                  className={`p-3 md:p-4 text-foreground/85 ${j === 0 ? "font-medium text-foreground whitespace-nowrap" : ""}`}
                                >
                                  {c || "–"}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
            {chemQuery &&
              CHEM_TABLES.every(
                (ct) => !ct.rows.some((r) => r[0].toLowerCase().includes(chemQuery.trim().toLowerCase())),
              ) && (
                <p className="text-sm text-muted-foreground">No grades match "{chemQuery}".</p>
              )}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn className="max-w-2xl mb-10">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Common technical <span className="text-gradient-steel">questions.</span>
            </h2>
          </FadeIn>
          <div className="space-y-3 max-w-3xl">
            {FAQS.map((f, i) => (
              <FadeIn key={f.q} delay={i * 0.05}>
                <div className="rounded-xl glass overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium">{f.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-primary transition-transform ${open === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
