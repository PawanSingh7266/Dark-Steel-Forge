import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, Container, FadeIn } from "@/components/section";
import { ArrowUpRight } from "lucide-react";
import sheets from "@/assets/products-sheets.jpg";
import pipes from "@/assets/products-pipes.jpg";
import coils from "@/assets/products-coils.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [{ title: "Products — Bhandari Metals & Alloys" }, { name: "description", content: "Stainless steel sheets, coils, pipes, flanges, fittings, bars, plates and industrial raw materials." }] }),
  component: Products,
});

const PRODUCTS = [
  { name: "Stainless Steel Sheets", img: sheets, desc: "Cold rolled, hot rolled and finished surface sheets for fabrication and architectural use.", apps: ["Architecture", "Equipment", "Fabrication"], specs: ["200 / 300 / 400 series", "0.3 – 6.0 mm thickness", "2B / BA / No.4 finish"] },
  { name: "Coils", img: coils, desc: "Precision slit and full-width coils for downstream processing.", apps: ["Auto components", "Appliances", "Engineering"], specs: ["Width up to 1500 mm", "Slit to spec", "Mill-edge / slit-edge"] },
  { name: "Pipes & Tubes", img: pipes, desc: "Seamless and welded pipes manufactured to ASTM / ASME specifications.", apps: ["Oil & Gas", "Process plants", "Heat exchangers"], specs: ["NB 6 – 600 mm", "Sch 5 – Sch XXS", "ASTM A312 / A269"] },
  { name: "Flanges", img: pipes, desc: "Forged flanges in WN, SO, BL, SW and threaded configurations.", apps: ["Pipelines", "Pressure systems"], specs: ["ANSI B16.5", "150 – 2500 class", "Custom forging"] },
  { name: "Fittings", img: sheets, desc: "Buttweld and forged fittings for high-integrity piping systems.", apps: ["Process piping", "Utilities"], specs: ["ASTM A403 / A182", "Elbows, tees, reducers", "Custom dimensions"] },
  { name: "Bars & Rods", img: coils, desc: "Round, square, hex and flat bars in a range of grades and tempers.", apps: ["Machining", "Shafts", "Fasteners"], specs: ["3 – 300 mm dia", "Bright / black finish", "ASTM A276"] },
  { name: "Plates", img: sheets, desc: "Heavy plates for pressure vessels, tanks and structural fabrication.", apps: ["Vessels", "Storage", "Structures"], specs: ["6 – 100 mm thickness", "Custom dimensions", "ASTM A240"] },
  { name: "Industrial Raw Materials", img: coils, desc: "Specialty alloys, billets and engineering raw stock supplied to spec.", apps: ["Forging", "Casting", "Engineering"], specs: ["Custom alloys", "Mill TC reports", "Traceable supply"] },
];

function Products() {
  return (
    <>
      <PageHero eyebrow="Product Catalogue" title={<>Engineered metal solutions, <span className="text-gradient-glow">end to end.</span></>} subtitle="From precision slit coils to heavy plates and forged fittings — every product is sourced, processed and supplied to the world's most demanding industrial standards." />

      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {PRODUCTS.map((p, i) => (
              <FadeIn key={p.name} delay={(i % 2) * 0.08}>
                <div className="group h-full rounded-2xl glass overflow-hidden flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <h3 className="text-2xl font-display font-semibold mb-2">{p.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                    <div className="grid grid-cols-2 gap-5 mb-6 text-xs">
                      <div>
                        <div className="uppercase tracking-[0.2em] text-primary mb-2">Applications</div>
                        <ul className="space-y-1 text-muted-foreground">{p.apps.map(a => <li key={a}>· {a}</li>)}</ul>
                      </div>
                      <div>
                        <div className="uppercase tracking-[0.2em] text-primary mb-2">Specifications</div>
                        <ul className="space-y-1 text-muted-foreground">{p.specs.map(s => <li key={s}>· {s}</li>)}</ul>
                      </div>
                    </div>
                    <Link to="/contact" className="mt-auto inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
                      Send Inquiry <ArrowUpRight className="h-4 w-4" />
                    </Link>
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
