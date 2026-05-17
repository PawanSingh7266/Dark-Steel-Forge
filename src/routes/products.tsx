import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { PageHero, Section, Container, Eyebrow } from "@/components/section";
import { ArrowUpRight, Search, ChevronRight } from "lucide-react";
import { CATEGORIES, GROUPS } from "@/data/products";

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
  const [activeGroup, setActiveGroup] = useState<string>(GROUPS[0]);

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const map = new Map<string, typeof CATEGORIES>();
    for (const g of GROUPS) map.set(g, []);
    for (const c of CATEGORIES) {
      if (q && !c.name.toLowerCase().includes(q) && !c.tagline.toLowerCase().includes(q)) continue;
      map.get(c.group)?.push(c);
    }
    return map;
  }, [query]);

  const visibleGroups = query ? GROUPS.filter((g) => (grouped.get(g)?.length ?? 0) > 0) : GROUPS;
  const activeList = query
    ? CATEGORIES.filter((c) => c.name.toLowerCase().includes(query.trim().toLowerCase()) || c.tagline.toLowerCase().includes(query.trim().toLowerCase()))
    : grouped.get(activeGroup) ?? [];

  return (
    <>
      <PageHero
        eyebrow="Product Catalogue"
        title={<>Industrial product <span className="text-gradient-glow">directory.</span></>}
        subtitle="Browse our complete catalogue of stainless steel, alloy and high-performance metal products. Select any category to view all available grades."
      />

      <Section className="!pt-4">
        <Container>
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
            <aside className="lg:sticky lg:top-24 self-start">
              <Eyebrow>Product Groups</Eyebrow>
              <nav className="mt-4 flex lg:flex-col flex-wrap gap-1 border-l border-border">
                {visibleGroups.map((g) => {
                  const count = grouped.get(g)?.length ?? 0;
                  const isActive = !query && g === activeGroup;
                  return (
                    <button
                      key={g}
                      onClick={() => { setActiveGroup(g); setQuery(""); }}
                      className={`group flex items-center justify-between text-left pl-4 pr-3 py-2.5 -ml-px border-l-2 text-sm transition-colors ${
                        isActive ? "border-foreground text-foreground font-medium" : "border-transparent text-muted-foreground hover:text-foreground hover:border-foreground/40"
                      }`}
                    >
                      <span className="uppercase tracking-wide text-[12px]">{g}</span>
                      <span className="text-[10px] text-muted-foreground/70 tabular-nums">{count}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            <div>
              <div className="flex items-baseline justify-between mb-5 pb-4 border-b border-border">
                <h2 className="text-xl md:text-2xl font-display font-semibold tracking-tight">
                  {query ? `Results for "${query}"` : activeGroup}
                </h2>
                <span className="text-xs text-muted-foreground tabular-nums">{activeList.length} categories</span>
              </div>

              {activeList.length === 0 ? (
                <div className="text-center py-20 text-muted-foreground text-sm border border-dashed border-border rounded-xl">
                  No categories match your search.
                </div>
              ) : (
                <ul className="divide-y divide-border">
                  {activeList.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to="/products/$category"
                        params={{ category: c.slug }}
                        className="group flex items-center justify-between gap-6 py-4 px-2 -mx-2 rounded-md hover:bg-muted/50 transition-colors"
                      >
                        <div className="min-w-0 flex-1">
                          <h3 className="text-[15px] font-medium uppercase tracking-wide text-foreground group-hover:text-accent transition-colors truncate">
                            {c.name}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-1 mt-1">{c.tagline}</p>
                          <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                            {c.grades.slice(0, 6).map((g) => (
                              <span key={g} className="text-[10px] tracking-wide px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border/60">
                                {g}
                              </span>
                            ))}
                            {c.grades.length > 6 && (
                              <span className="text-[10px] tracking-wide px-1.5 py-0.5 rounded text-muted-foreground">+{c.grades.length - 6} more</span>
                            )}
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
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
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 h-11 rounded-full bg-background text-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                Request a Quotation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
