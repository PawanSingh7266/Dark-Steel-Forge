import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Container, Eyebrow, FadeIn } from "@/components/section";
import { Award, Users, Factory, Globe2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Bhandari Metals & Alloys" }, { name: "description", content: "Founded in 1983 in CP Tank Mumbai. Four decades of stainless steel legacy and family heritage." }] }),
  component: About,
});

const TIMELINE = [
  { year: "1983", title: "The Beginning", desc: "Mr. Rajnesh Bhandari founds Bhandari Metals & Alloys in CP Tank, Mumbai — one of India's most respected stainless steel hubs." },
  { year: "1990s", title: "Establishing Trust", desc: "Steady expansion through deep relationships with mills, fabricators and India's growing industrial base." },
  { year: "2000s", title: "Diversification", desc: "The Bhandari Group diversifies into multiple verticals while the founding enterprise continues its singular focus on stainless steel." },
  { year: "2010s", title: "Strategic Partnerships", desc: "Becomes Authorized Distributor of JSL and SAIL — sourcing directly from India's leading steel manufacturers." },
  { year: "Today", title: "The Next Generation", desc: "The next generation of the Bhandari family carries the legacy forward with global vision and modern operations." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="Our Story" title={<>A legacy forged in <span className="text-gradient-glow">stainless steel.</span></>} subtitle="From a small office in CP Tank, Mumbai to serving industries worldwide — the Bhandari journey is one of trust, family and uncompromising quality." />

      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <Eyebrow>Founder</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Mr. Rajnesh Bhandari</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">Founded in 1983, Bhandari Metals & Alloys is the vision of Mr. Rajnesh Bhandari — a name synonymous with integrity in Mumbai's stainless steel community. From the historic CP Tank market, he built relationships that would define a multi-generational enterprise.</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">Over four decades, he has guided the company through changing industrial cycles, always anchored to the principles of quality, transparency and partnership.</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Eyebrow>Heritage</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">A family business with global vision.</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">While the broader Bhandari Group has diversified across industries, this enterprise remains dedicated to stainless steel and metal solutions — preserving the founder's original mission.</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">Today the next generation continues the legacy, bringing modern systems, international standards and a renewed commitment to innovation.</p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn className="max-w-2xl mb-14">
            <Eyebrow>Timeline</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-semibold">Four decades of <span className="text-gradient-steel">consistent excellence.</span></h2>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <FadeIn key={t.year} delay={i * 0.06}>
                  <div className={`relative flex gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="relative z-10 mt-1.5 h-3 w-3 md:absolute md:left-1/2 md:-translate-x-1/2 rounded-full bg-primary ring-4 ring-background shadow-glow" />
                    <div className="flex-1 md:max-w-[calc(50%-3rem)] glass rounded-2xl p-6 md:p-8">
                      <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2">{t.year}</div>
                      <h3 className="text-xl font-display font-semibold mb-2">{t.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Award, t: "Quality First", d: "Every coil, sheet and pipe meets stringent specifications." },
              { icon: Users, t: "Family Heritage", d: "Multi-generational expertise and continuity." },
              { icon: Factory, t: "Direct Mill Sourcing", d: "Authorized distributor of JSL & SAIL." },
              { icon: Globe2, t: "Industrial Reach", d: "Serving demanding industries across geographies." },
            ].map((v, i) => (
              <FadeIn key={v.t} delay={i * 0.06}>
                <div className="p-7 rounded-2xl glass h-full">
                  <v.icon className="h-7 w-7 text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold mb-2">{v.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
