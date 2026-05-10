import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Container, FadeIn } from "@/components/section";
import { Flame, Beaker, Zap, Pill, Anchor, Building2, HardHat, Wrench, Car, Cog } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({ meta: [{ title: "Industries Served — Bhandari Metals & Alloys" }, { name: "description", content: "Trusted material partner for oil & gas, power, pharma, marine, infrastructure and more." }] }),
  component: Industries,
});

const IND = [
  { icon: Flame, name: "Oil & Gas", desc: "Pipelines, refineries and offshore systems requiring corrosion-resistant alloys." },
  { icon: Beaker, name: "Petrochemicals", desc: "Process piping, vessels and equipment for aggressive chemical environments." },
  { icon: Zap, name: "Power Plants", desc: "Heat exchangers, condensers and high-temperature service components." },
  { icon: Pill, name: "Pharmaceuticals", desc: "Sanitary tubing and equipment surfaces for hygienic manufacturing." },
  { icon: Anchor, name: "Marine", desc: "Chloride-resistant grades engineered for coastal and offshore service." },
  { icon: Building2, name: "Infrastructure", desc: "Architectural cladding, bridges and modern urban infrastructure." },
  { icon: HardHat, name: "Construction", desc: "Structural plates, bars and fabricated assemblies." },
  { icon: Wrench, name: "Heavy Engineering", desc: "Forging stock, bars and engineering raw material to spec." },
  { icon: Car, name: "Automotive", desc: "Auto components, exhaust systems and precision fabricated parts." },
  { icon: Cog, name: "Manufacturing", desc: "OEMs and downstream processors across general industry." },
];

function Industries() {
  return (
    <>
      <PageHero eyebrow="Industries Served" title={<>Powering progress across <span className="text-gradient-glow">every sector.</span></>} subtitle="From the depths of the ocean to the heart of a refinery — Bhandari materials are engineered to perform in the world's most demanding environments." />
      <Section>
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {IND.map((it, i) => (
              <FadeIn key={it.name} delay={(i % 3) * 0.08}>
                <div className="group relative h-full p-7 rounded-2xl glass hover:border-primary/40 transition-all overflow-hidden">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 grid place-items-center mb-5 ring-1 ring-primary/20">
                      <it.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2">{it.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
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
