import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Factory,
  Globe2,
  ShieldCheck,
  Sparkles,
  Layers,
  Zap,
  Star,
  Quote,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import hero from "@/assets/hero-industrial.jpg";
import sheets from "@/assets/products-sheets.jpg";
import jslLogo from "@/assets/jsl-logo.jpeg.asset.json";
import sailLogo from "@/assets/sail-logo.jpeg.asset.json";
import pipes from "@/assets/products-pipes.jpg";
import coils from "@/assets/products-coils.jpg";
import infra from "@/assets/infrastructure.jpg";
import { Section, Container, Eyebrow, FadeIn } from "@/components/section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhandari Metals & Alloys — Stainless Steel Excellence Since 1983" },
      {
        name: "description",
        content:
          "Premium stainless steel sheets, coils, pipes, flanges & fittings. Authorized distributor of JSL & SAIL. Trusted globally.",
      },
    ],
  }),
  component: Home,
});

const CATEGORIES = [
  {
    name: "Stainless Steel Sheets",
    img: sheets,
    desc: "Cold rolled, hot rolled & finished sheets in 200 / 300 / 400 series.",
  },
  {
    name: "Coils",
    img: coils,
    desc: "Precision slit coils for fabrication, automotive & engineering.",
  },
  {
    name: "Pipes & Tubes",
    img: pipes,
    desc: "Seamless and welded pipes meeting ASTM / ASME standards.",
  },
];

const INDUSTRIES = [
  "Oil & Gas",
  "Petrochemicals",
  "Power Plants",
  "Pharmaceuticals",
  "Marine",
  "Infrastructure",
  "Heavy Engineering",
  "Automotive",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt=""
            width={1920}
            height={1088}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] uppercase tracking-[0.25em] text-primary mb-6">
              <Sparkles className="h-3 w-3" /> Legacy Since 1983
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              <span className="text-gradient-steel">Forging</span>
              <br />
              <span className="text-foreground">a legacy in</span>
              <br />
              <span className="text-gradient-glow">stainless steel.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Four decades of precision, partnership and uncompromising quality — supplying
              world-class stainless steel and alloy solutions to industry leaders worldwide.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[oklch(0.62_0.14_235)] to-[oklch(0.5_0.18_250)] text-white text-sm font-medium shadow-glow hover:shadow-[0_0_80px_oklch(0.62_0.14_235/0.6)] transition-all"
              >
                Explore Products{" "}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass text-sm font-medium hover:border-primary/40 transition-all"
              >
                Send Inquiry{" "}
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          Scroll to discover
        </motion.div>
      </section>

      {/* STATS / LEGACY */}
      <Section className="border-t border-steel">
        <Container>
          <div className="grid md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden glass">
            {[
              { v: "40+", l: "Years of Legacy", type: "text" as const },
              { v: "Global", l: "Industrial Supply", type: "text" as const },
              { logo: jslLogo.url, name: "JSL", l: "Authorized Distributor", type: "logo" as const },
              { logo: sailLogo.url, name: "SAIL", l: "Authorized Distributor", type: "logo" as const },
            ].map((s, i) => (
              <FadeIn key={s.l + i} delay={i * 0.08}>
                <div className="bg-card p-8 md:p-10 h-full flex flex-col justify-center">
                  {s.type === "text" ? (
                    <div className="text-4xl md:text-5xl font-display font-semibold text-gradient-steel">
                      {s.v}
                    </div>
                  ) : (
                    <div className="h-12 md:h-14 flex items-center">
                      <img
                        src={s.logo}
                        alt={`${s.name} logo`}
                        loading="lazy"
                        className="max-h-full w-auto object-contain"
                      />
                    </div>
                  )}
                  <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ABOUT */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <Eyebrow>About the company</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                Born in <span className="text-gradient-steel">CP Tank, Mumbai</span> — one of
                India's stainless steel hubs.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Founded in 1983 by Mr. Rajnesh Bhandari, Bhandari Metals & Alloys has spent over
                four decades pioneering reliable stainless steel solutions. As the next generation
                continues the legacy, we combine deep industry expertise with a modern, global
                business vision.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
              >
                Read our story <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[oklch(0.62_0.14_235)]/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass shadow-elegant">
                  <img
                    src={infra}
                    alt="Warehouse"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-8">
                    <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2">
                      Est. 1983
                    </div>
                    <div className="font-display text-2xl">A family legacy in metal.</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* CATEGORIES */}
      <Section>
        <Container>
          <div className="flex items-end justify-between mb-12 gap-8 flex-wrap">
            <div>
              <Eyebrow>Product Range</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-semibold max-w-xl">
                Engineered for the world's most demanding industries.
              </h2>
            </div>
            <Link
              to="/products"
              className="text-sm text-primary inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CATEGORIES.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.1}>
                <Link
                  to="/products"
                  className="group relative block aspect-[4/5] rounded-2xl overflow-hidden glass"
                >
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute inset-0 p-7 flex flex-col justify-end">
                    <h3 className="text-2xl font-display font-semibold mb-2">{c.name}</h3>
                    <p className="text-sm text-muted-foreground">{c.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs text-primary">
                      Explore{" "}
                      <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHY */}
      <Section>
        <Container>
          <FadeIn className="max-w-4xl mb-14">
            <Eyebrow>Why Bhandari</Eyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold md:whitespace-nowrap">
              Precision. Partnership. <span className="text-gradient-steel">Pedigree.</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Award,
                t: "40+ Year Legacy",
                d: "Four decades of trusted supply across India and beyond.",
              },
              {
                icon: ShieldCheck,
                t: "Certified Quality",
                d: "Every grade meets ASTM, ASME and global standards.",
              },
              {
                icon: Factory,
                t: "JSL & SAIL Distributor",
                d: "Direct sourcing from India's premier steel makers.",
              },
              {
                icon: Globe2,
                t: "Global Supply",
                d: "Engineered logistics for international industrial demand.",
              },
            ].map((f, i) => (
              <FadeIn key={f.t} delay={i * 0.08}>
                <div className="group relative h-full p-7 rounded-2xl glass hover:border-primary/30 transition-all">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <f.icon className="h-7 w-7 text-primary mb-5" />
                  <h3 className="font-display text-lg font-semibold mb-2">{f.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* DISTRIBUTOR BANNER */}
      <Section>
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.62_0.14_235)]/15 via-transparent to-[oklch(0.5_0.18_250)]/10" />
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[oklch(0.62_0.14_235)]/20 blur-3xl" />
              <div className="relative grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <Eyebrow>Authorized Distributor</Eyebrow>
                  <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
                    Direct partnership with India's steel giants —{" "}
                    <span className="text-gradient-steel">JSL</span> &{" "}
                    <span className="text-gradient-steel">SAIL</span>.
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "JSL", logo: jslLogo.url },
                    { name: "SAIL", logo: sailLogo.url },
                  ].map((p) => (
                    <div
                      key={p.name}
                      className="group aspect-[3/2] rounded-xl bg-white border border-border/60 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all p-5 flex flex-col items-center justify-center gap-2"
                    >
                      <img
                        src={p.logo}
                        alt={`${p.name} official logo`}
                        loading="lazy"
                        className="max-h-16 md:max-h-20 w-auto object-contain"
                      />
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Authorized Distributor
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <Container>
          <FadeIn className="max-w-2xl mb-14">
            <Eyebrow>Industries Served</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Powering the backbone of <span className="text-gradient-steel">modern industry.</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {INDUSTRIES.map((i, idx) => (
              <FadeIn key={i} delay={idx * 0.04}>
                <Link
                  to="/industries"
                  className="group block p-5 rounded-xl glass hover:border-primary/40 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{i}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* INFRA + TECH */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-6">
            <FadeIn>
              <Link
                to="/infrastructure"
                className="group relative block aspect-[4/3] rounded-2xl overflow-hidden glass"
              >
                <img
                  src={infra}
                  alt="Infrastructure"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                  <Layers className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-3xl font-display font-semibold">
                    Infrastructure built for scale.
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md">
                    Modern warehousing, processing & logistics engineered for precision delivery.
                  </p>
                </div>
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link
                to="/technical"
                className="group relative block aspect-[4/3] rounded-2xl overflow-hidden glass"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.22_0.04_235)] to-[oklch(0.14_0.005_240)]" />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                  <Zap className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-3xl font-display font-semibold">
                    Technical excellence, documented.
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md">
                    Material grades, mechanical properties & ASTM/ASME specifications at your
                    fingertips.
                  </p>
                </div>
              </Link>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <Section>
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center glass">
              <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-10" />
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-3xl opacity-30" />
              <div className="relative">
                <Eyebrow>Get in touch</Eyebrow>
                <h2 className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
                  Let's build your next{" "}
                  <span className="text-gradient-steel">project together.</span>
                </h2>
                <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
                  From concept to consignment — partner with a name India has trusted for over four
                  decades.
                </p>
                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[oklch(0.62_0.14_235)] to-[oklch(0.5_0.18_250)] text-white text-sm font-medium shadow-glow"
                >
                  Send Inquiry <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
