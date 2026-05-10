import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Container, FadeIn, Eyebrow } from "@/components/section";
import { ShieldCheck, Award, FileCheck2, Stamp } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({ meta: [{ title: "Certifications & Authorizations — Bhandari Metals & Alloys" }, { name: "description", content: "Authorized distributor of JSL and SAIL. Quality certifications and trust credentials." }] }),
  component: Certs,
});

function Certs() {
  return (
    <>
      <PageHero eyebrow="Certifications & Authorizations" title={<>Backed by India's most <span className="text-gradient-glow">trusted names.</span></>} subtitle="Direct partnerships with the makers — and a relentless commitment to documented quality at every step." />

      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {[{ name: "JSL", full: "Jindal Stainless Limited", desc: "Authorized Distributor — direct sourcing of premium stainless steel grades from India's largest stainless producer." }, { name: "SAIL", full: "Steel Authority of India Limited", desc: "Authorized Distributor — supply of carbon and specialty steel products from India's national steel maker." }].map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.1}>
                <div className="relative h-full overflow-hidden rounded-3xl glass p-10 md:p-12">
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
                  <div className="relative">
                    <div className="flex items-center gap-2 text-primary text-xs uppercase tracking-[0.25em] mb-6">
                      <Stamp className="h-4 w-4" /> Authorized Distributor
                    </div>
                    <div className="font-display text-6xl md:text-7xl font-bold text-gradient-steel mb-3">{p.name}</div>
                    <div className="text-sm text-muted-foreground mb-6">{p.full}</div>
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
            <h2 className="text-4xl md:text-5xl font-semibold">Every consignment, <span className="text-gradient-steel">documented.</span></h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: FileCheck2, t: "Mill Test Certificates", d: "Original MTCs accompany every consignment for full traceability." },
              { icon: ShieldCheck, t: "ASTM / ASME Compliance", d: "All material conforms to international specifications." },
              { icon: Award, t: "Quality Inspection", d: "Multi-stage inspection from intake to dispatch." },
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
