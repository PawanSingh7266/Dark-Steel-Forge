import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Container, FadeIn, Eyebrow } from "@/components/section";
import { Warehouse, Truck, Search, Cog, PackageCheck, Boxes } from "lucide-react";
import infra from "@/assets/infrastructure.jpg";
import sheets from "@/assets/products-sheets.jpg";
import coils from "@/assets/products-coils.jpg";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure — Bhandari Metals & Alloys" },
      {
        name: "description",
        content: "Modern warehousing, machinery, logistics and quality inspection infrastructure.",
      },
    ],
  }),
  component: Infra,
});

const CAPS = [
  {
    icon: Warehouse,
    t: "Modern Warehousing",
    d: "Organized stocking systems for fast retrieval and minimal handling damage.",
  },
  {
    icon: Cog,
    t: "Processing Machinery",
    d: "Slitting, shearing and cutting equipment for tailored dimensions.",
  },
  {
    icon: Search,
    t: "Quality Inspection",
    d: "In-house verification of dimensions, surface and material certificates.",
  },
  {
    icon: Boxes,
    t: "Inventory Depth",
    d: "Wide range of grades, sizes and finishes ready for immediate dispatch.",
  },
  {
    icon: Truck,
    t: "Logistics Coordination",
    d: "Pan-India and export logistics handled by an experienced dispatch team.",
  },
  {
    icon: PackageCheck,
    t: "Custom Packaging",
    d: "Export-grade packaging for safe long-distance transit.",
  },
];

function Infra() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title={
          <>
            Built for scale, <span className="text-gradient-glow">tuned for precision.</span>
          </>
        }
        subtitle="Decades of operational refinement go into every consignment that leaves our facility — from inventory to inspection to dispatch."
      />

      <Section>
        <Container>
          <FadeIn>
            <div className="relative aspect-[16/8] rounded-3xl overflow-hidden glass">
              <img
                src={infra}
                alt="Warehouse"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-10 md:p-14">
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2">
                  Mumbai, India
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-semibold max-w-2xl">
                  Operations engineered for industrial reliability.
                </h2>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn className="max-w-2xl mb-12">
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Everything required to <span className="text-gradient-steel">deliver, on time.</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPS.map((c, i) => (
              <FadeIn key={c.t} delay={(i % 3) * 0.08}>
                <div className="p-7 rounded-2xl glass h-full">
                  <c.icon className="h-7 w-7 text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold mb-2">{c.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {[sheets, coils].map((src, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden glass">
                  <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
