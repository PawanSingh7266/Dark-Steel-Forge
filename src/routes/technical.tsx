import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Container, FadeIn, Eyebrow } from "@/components/section";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/technical")({
  head: () => ({ meta: [{ title: "Technical Information — Bhandari Metals & Alloys" }, { name: "description", content: "Material grades, mechanical properties, ASTM/ASME standards and specifications." }] }),
  component: Technical,
});

const TABS = [
  {
    name: "Material Grades",
    rows: [
      ["Grade", "UNS", "Type", "Key Properties"],
      ["SS 304 / 304L", "S30400 / S30403", "Austenitic", "General purpose, excellent corrosion resistance"],
      ["SS 316 / 316L", "S31600 / S31603", "Austenitic", "Enhanced corrosion in chloride environments"],
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
];

const FAQS = [
  { q: "What thicknesses and dimensions can you supply?", a: "Sheets and plates from 0.3 mm to 100 mm; coils up to 1500 mm width; pipes from NB 6 to 600 mm. Custom cut-to-size processing is available on request." },
  { q: "Do you provide mill test certificates?", a: "Yes — every consignment is dispatched with original mill test certificates ensuring full chemical and mechanical traceability." },
  { q: "What surface finishes are available?", a: "2B, BA, No. 4, No. 8 mirror, hairline and custom architectural finishes for sheets and coils." },
  { q: "Can you handle export documentation?", a: "Yes — full export documentation, packaging and freight-forwarding coordination is supported by our team." },
];

function Technical() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const t = TABS[tab];

  return (
    <>
      <PageHero eyebrow="Technical Information" title={<>Specifications <span className="text-gradient-glow">made simple.</span></>} subtitle="Every grade, every standard, every dimension — clearly documented for engineers, fabricators and procurement teams." />

      <Section>
        <Container>
          <div className="flex gap-2 mb-8 flex-wrap">
            {TABS.map((tb, i) => (
              <button key={tb.name} onClick={() => setTab(i)} className={`px-5 py-2.5 rounded-full text-sm transition-all ${tab === i ? "bg-gradient-to-r from-[oklch(0.62_0.14_235)] to-[oklch(0.5_0.18_250)] text-white shadow-glow" : "glass text-muted-foreground hover:text-foreground"}`}>
                {tb.name}
              </button>
            ))}
          </div>
          <FadeIn key={tab}>
            <div className="rounded-2xl glass overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-steel">
                      {t.rows[0].map((h) => <th key={h} className="text-left p-4 md:p-5 text-xs uppercase tracking-[0.18em] text-primary font-medium">{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {t.rows.slice(1).map((row, i) => (
                      <tr key={i} className="border-b border-steel/50 hover:bg-white/[0.02] transition-colors">
                        {row.map((c, j) => <td key={j} className="p-4 md:p-5 text-foreground/85">{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn className="max-w-2xl mb-10">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-semibold">Common technical <span className="text-gradient-steel">questions.</span></h2>
          </FadeIn>
          <div className="space-y-3 max-w-3xl">
            {FAQS.map((f, i) => (
              <FadeIn key={f.q} delay={i * 0.05}>
                <div className="rounded-xl glass overflow-hidden">
                  <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                    <span className="font-medium">{f.q}</span>
                    <ChevronDown className={`h-4 w-4 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
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
