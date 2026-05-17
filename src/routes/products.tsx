import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { PageHero, Section, Container, Eyebrow } from "@/components/section";
import { ArrowUpRight, Search, ChevronRight } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Product Catalogue — Bhandari Metals & Alloys" },
      { name: "description", content: "Industrial catalogue of stainless steel, alloy steel, nickel alloy, Inconel, Monel, Hastelloy and titanium products — sheets, plates, coils, pipes, tubes, flanges, fittings, bars and structural sections." },
      { property: "og:title", content: "Product Catalogue — Bhandari Metals & Alloys" },
      { property: "og:description", content: "Browse the complete industrial product directory." },
    ],
  }),
  component: Products,
});

function Products() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>(CATEGORIES[0]);

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const map = new Map<string, typeof PRODUCTS>();
    for (const cat of CATEGORIES) map.set(cat, []);
    for (const p of PRODUCTS) {
      if (q) {
        const hit =
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.grades.join(" ").toLowerCase().includes(q);
        if (!hit) continue;
      }
      map.get(p.category)?.push(p);
    }
    return map;
  }, [query]);

  const visibleCats = query
    ? CATEGORIES.filter((c) => (grouped.get(c)?.length ?? 0) > 0)
    : CATEGORIES;

  const activeList = query
    ? PRODUCTS.filter((p) => {
        const q = query.trim().toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.grades.join(" ").toLowerCase().includes(q)
        );
      })
    : grouped.get(activeCat) ?? [];

  return (
    <>
      <PageHero
        eyebrow="Product Catalogue"
        title={<>Industrial product <span className="text-gradient-glow">directory.</span></>}
        subtitle="Browse our complete catalogue of stainless steel, alloy and high-performance metal products. Select any item to view full technical specifications, grades, standards and dimensions."
      />

      <Section className="!pt-4">
        <Container>
          {/* Search */}
          <div className="relative mb-8 max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the catalogue…"
              className="w-full h-11 pl-11 pr-4 rounded-full bg-card border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            {/* Vertical category nav */}
            <aside className="lg:sticky lg:top-24 self-start">
              <Eyebrow>Categories</Eyebrow>
              <nav className="mt-4 flex lg:flex-col flex-wrap gap-1 border-l border-border">
                {visibleCats.map((c) => {
                  const count = grouped.get(c)?.length ?? 0;
                  const isActive = !query && c === activeCat;
                  return (
                    <button
                      key={c}
                      onClick={() => { setActiveCat(c); setQuery(""); }}
                      className={`group flex items-center justify-between text-left pl-4 pr-3 py-2.5 -ml-px border-l-2 text-sm transition-colors ${
                        isActive
                          ? "border-foreground text-foreground font-medium"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:border-foreground/40"
                      }`}
                    >
                      <span className="uppercase tracking-wide text-[12px]">{c}</span>
                      <span className="text-[10px] text-muted-foreground/70 tabular-nums">{count}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Product listing */}
            <div>
              {query ? (
                <CatalogueList title={`Results for "${query}"`} items={activeList} />
              ) : (
                <CatalogueList title={activeCat} items={activeList} />
              )}

              {activeList.length === 0 && (
                <div className="text-center py-20 text-muted-foreground text-sm border border-dashed border-border rounded-xl">
                  No products match your search.
                </div>
              )}
            </div>
          </div>
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

function CatalogueList({ title, items }: { title: string; items: typeof PRODUCTS }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-5 pb-4 border-b border-border">
        <h2 className="text-xl md:text-2xl font-display font-semibold tracking-tight">{title}</h2>
        <span className="text-xs text-muted-foreground tabular-nums">{items.length} products</span>
      </div>
      <ul className="divide-y divide-border">
        {items.map((p) => (
          <li key={p.slug}>
            <Link
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="group flex items-center justify-between gap-6 py-4 px-2 -mx-2 rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-[15px] font-medium uppercase tracking-wide text-foreground group-hover:text-accent transition-colors truncate">
                    {p.name}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-1">{p.tagline}</p>
                <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                  {p.grades.slice(0, 4).map((g) => (
                    <span key={g} className="text-[10px] tracking-wide px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border/60">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
