import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Container, FadeIn, Eyebrow } from "@/components/section";
import { ShieldCheck, Award, FileCheck2, Stamp } from "lucide-react";
import jslLogo from "@/assets/jsl-logo.jpeg.asset.json";
import sailLogo from "@/assets/sail-logo.jpeg.asset.json";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications & Authorizations — Bhandari Metals & Alloys" },
      {
        name: "description",
        content:
          "Authorized distributor of JSL and SAIL. Quality certifications and trust credentials.",
      },
    ],
  }),
  component: Certs,
});

function Certs() {
  return (
    <>
      <PageHero
        eyebrow="Certifications & Authorizations"
        title={
          <>
            Backed by India's most <span className="text-gradient-glow">trusted names.</span>
          </>
        }
        subtitle="Direct partnerships with the makers — and a relentless commitment to documented quality at every step."
      />

      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "JSL",
                logo: jslLogo.url,
                full: "Jindal Stainless Limited",
                desc: "Authorized Distributor — direct sourcing of premium stainless steel grades from India's largest stainless producer.",
              },
              {
                name: "SAIL",
                logo: sailLogo.url,
                full: "Steel Authority of India Limited",
                desc: "Authorized Distributor — supply of carbon and specialty steel products from India's national steel maker.",
              },
            ].map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all p-8 md:p-10">
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="relative flex flex-col h-full">
                    <div className="flex items-center gap-2 text-primary text-xs uppercase tracking-[0.25em] mb-6">
                      <Stamp className="h-4 w-4" /> Authorized Distributor
                    </div>
                    <div className="rounded-2xl bg-white border border-border/50 p-8 md:p-10 mb-6 flex items-center justify-center min-h-[160px] md:min-h-[200px]">
                      <img
                        src={p.logo}
                        alt={`${p.full} official logo`}
                        className="max-h-24 md:max-h-32 w-auto object-contain"
                      />
                    </div>
                    <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                      {p.name}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">{p.full}</div>
                    <p className="text-foreground/85 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn className="max-w-2xl mb-12">
            <Eyebrow>Quality Commitment</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Every consignment, <span className="text-gradient-steel">documented.</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: FileCheck2,
                t: "Mill Test Certificates",
                d: "Original MTCs accompany every consignment for full traceability.",
              },
              {
                icon: ShieldCheck,
                t: "ASTM / ASME Compliance",
                d: "All material conforms to international specifications.",
              },
              {
                icon: Award,
                t: "Quality Inspection",
                d: "Multi-stage inspection from intake to dispatch.",
              },
            ].map((v, i) => (
              <FadeIn key={v.t} delay={i * 0.08}>
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
