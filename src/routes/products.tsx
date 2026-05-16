import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, Container, FadeIn, Eyebrow } from "@/components/section";
import { ArrowUpRight, Layers, Search } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Product Catalogue — Bhandari Metals & Alloys" },
      { name: "description", content: "Comprehensive stainless steel, alloy steel, nickel alloy, Inconel, Monel, Hastelloy and titanium product catalogue — sheets, coils, plates, pipes, tubes, flanges, fittings and bars." },
      { property: "og:title", content: "Product Catalogue — Bhandari Metals & Alloys" },
      { property: "og:description", content: "Stainless steel and high-performance alloy products engineered to ASTM, ASME and EN standards." },
    ],
  }),
  component: Products,
});

function Products() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("All");

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCat === "All" || p.category === activeCat;
    const q = query.trim().toLowerCase();
    const matchQ =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.grades.join(" ").toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  return (
    <>
      <PageHero
        eyebrow="Product Catalogue"
        title={<>Engineered metal solutions, <span className="text-gradient-glow">end to end.</span></>}
        subtitle="From precision slit coils to forged superalloy fittings — every product is sourced, processed and supplied to the world's most demanding industrial standards."
      />

      <Section className="!pt-4">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by product, grade or application…"
                className="w-full h-12 pl-11 pr-4 rounded-full bg-card border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", ...CATEGORIES].map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`px-4 h-10 rounded-full text-xs font-medium border transition-all ${
                    activeCat === c
                      ? "bg-foreground text-background border-foreground"
                      : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <FadeIn key={p.slug} delay={(i % 3) * 0.06}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="group block h-full rounded-2xl bg-card border border-border overflow-hidden hover:border-foreground/20 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={1280}
                      height={896}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] bg-background/85 backdrop-blur-md border border-border text-foreground">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-display font-semibold mb-1.5 group-hover:text-accent transition-colors">{p.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{p.tagline}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.grades.slice(0, 3).map((g) => (
                        <span key={g} className="text-[10px] tracking-wide px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border">
                          {g}
                        </span>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 text-xs font-medium text-accent group-hover:gap-3 transition-all">
                      View specifications <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              <Layers className="h-10 w-10 mx-auto mb-4 opacity-40" />
              No products match your search.
            </div>
          )}
        </Container>
      </Section>

      <Section className="!pt-0">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-foreground to-foreground/80 text-background p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-[0.04]" />
            <div className="relative max-w-2xl">
              <Eyebrow>Need a custom specification?</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 leading-tight">
                Tell us your grade, size and standard — we'll quote within 24 hours.
              </h2>
              <p className="text-background/70 mb-7 text-sm md:text-base leading-relaxed">
                Our technical team handles custom melt chemistries, special dimensions and third-party certifications for projects worldwide.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 h-11 rounded-full bg-background text-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Request a Quotation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}