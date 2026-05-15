import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Container, FadeIn } from "@/components/section";
import { Flame, Beaker, Zap, Pill, Anchor, Building2, HardHat, Wrench, Car, Cog } from "lucide-react";
import oilGas from "@/assets/industries/oil-gas.jpg";
import petrochemicals from "@/assets/industries/petrochemicals.jpg";
import powerPlants from "@/assets/industries/power-plants.jpg";
import pharmaceuticals from "@/assets/industries/pharmaceuticals.jpg";
import marine from "@/assets/industries/marine.jpg";
import infrastructure from "@/assets/industries/infrastructure.jpg";
import construction from "@/assets/industries/construction.jpg";
import heavyEngineering from "@/assets/industries/heavy-engineering.jpg";
import automotive from "@/assets/industries/automotive.jpg";
import manufacturing from "@/assets/industries/manufacturing.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({ meta: [{ title: "Industries Served — Bhandari Metals & Alloys" }, { name: "description", content: "Trusted material partner for oil & gas, power, pharma, marine, infrastructure and more." }] }),
  component: Industries,
});

const IND = [
  { icon: Flame, name: "Oil & Gas", desc: "Pipelines, refineries and offshore systems requiring corrosion-resistant alloys.", image: oilGas },
  { icon: Beaker, name: "Petrochemicals", desc: "Process piping, vessels and equipment for aggressive chemical environments.", image: petrochemicals },
  { icon: Zap, name: "Power Plants", desc: "Heat exchangers, condensers and high-temperature service components.", image: powerPlants },
  { icon: Pill, name: "Pharmaceuticals", desc: "Sanitary tubing and equipment surfaces for hygienic manufacturing.", image: pharmaceuticals },
  { icon: Anchor, name: "Marine", desc: "Chloride-resistant grades engineered for coastal and offshore service.", image: marine },
  { icon: Building2, name: "Infrastructure", desc: "Architectural cladding, bridges and modern urban infrastructure.", image: infrastructure },
  { icon: HardHat, name: "Construction", desc: "Structural plates, bars and fabricated assemblies.", image: construction },
  { icon: Wrench, name: "Heavy Engineering", desc: "Forging stock, bars and engineering raw material to spec.", image: heavyEngineering },
  { icon: Car, name: "Automotive", desc: "Auto components, exhaust systems and precision fabricated parts.", image: automotive },
  { icon: Cog, name: "Manufacturing", desc: "OEMs and downstream processors across general industry.", image: manufacturing },
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
                <div className="group relative h-80 rounded-2xl overflow-hidden ring-1 ring-border hover:ring-primary/40 transition-all shadow-sm hover:shadow-xl">
                  <img
                    src={it.image}
                    alt={it.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <div className="h-11 w-11 rounded-xl bg-white/15 backdrop-blur-md grid place-items-center mb-4 ring-1 ring-white/25">
                      <it.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2">{it.name}</h3>
                    <p className="text-sm text-white/85 leading-relaxed">{it.desc}</p>
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
