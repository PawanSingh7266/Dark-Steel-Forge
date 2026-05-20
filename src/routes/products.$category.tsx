import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Container, FadeIn, Eyebrow } from "@/components/section";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getCategory, productSlug, productName, CATEGORIES } from "@/data/products";

export const Route = createFileRoute("/products/$category")({
  head: ({ params }) => {
    const cat = getCategory(params.category);
    if (!cat) return { meta: [{ title: "Category not found" }] };
    return {
      meta: [
        { title: `${cat.name} — Grades & Specifications | Bhandari Metals` },
        { name: "description", content: `Browse all available grades of ${cat.name.toLowerCase()}. ${cat.tagline}` },
        { property: "og:title", content: `${cat.name} — Bhandari Metals & Alloys` },
        { property: "og:description", content: cat.tagline },
        { property: "og:image", content: cat.image },
      ],
    };
  },
  loader: ({ params }) => {
    const cat = getCategory(params.category);
    if (!cat) throw notFound();
    return { category: cat };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <Section>
      <Container>
        <div className="text-center py-20">
          <h1 className="text-3xl font-display font-semibold mb-4">Category not found</h1>
          <Link to="/products" className="text-accent underline">Back to catalogue</Link>
        </div>
      </Container>
    </Section>
  ),
  errorComponent: ({ error }) => (
    <Section><Container><div className="py-20 text-center text-sm text-muted-foreground">{error.message}</div></Container></Section>
  ),
});

function CategoryPage() {
  const { category } = Route.useParams();
  const cat = getCategory(category)!;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-60" />
        <Container className="relative">
          <Link to="/products" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="h-3.5 w-3.5" /> All Products
          </Link>
          <FadeIn>
            <Eyebrow>{cat.group}</Eyebrow>
            <h1 className="text-4xl md:text-5xl font-display font-semibold leading-[1.05] text-gradient-steel mb-4">
              {cat.name}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">{cat.tagline}</p>
          </FadeIn>
        </Container>
      </section>

      {/* Grade grid */}
      <Section className="!pt-4">
        <Container>
          <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-border">
            <h2 className="text-xl md:text-2xl font-display font-semibold tracking-tight">Available Grades</h2>
            <span className="text-xs text-muted-foreground tabular-nums">{cat.grades.length} products</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.grades.map((g) => {
              const slug = productSlug(g, cat);
              const name = productName(g, cat);
              return (
                <div key={slug} className="group flex flex-col rounded-2xl overflow-hidden bg-card border border-border hover:border-foreground/20 shadow-sm hover:shadow-lg transition-all">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img src={cat.image} alt={name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-base mb-1 text-foreground group-hover:text-accent transition-colors">
                        {name}
                      </h3>
                      <p className="text-xs text-muted-foreground">Bhandari Metals &amp; Alloys</p>
                    </div>
                    <Link
                      to="/products/$category/$product"
                      params={{ category: cat.slug, product: slug }}
                      className="inline-flex w-fit items-center gap-1.5 px-4 h-9 rounded-full bg-foreground text-background text-xs font-medium hover:opacity-90 transition-opacity"
                    >
                      Read More <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Other categories */}
      <Section className="!pt-0">
        <Container>
          <Eyebrow>Explore other categories</Eyebrow>
          <div className="mt-4 flex flex-wrap gap-2">
            {CATEGORIES.filter((c) => c.slug !== cat.slug).slice(0, 10).map((c) => (
              <Link
                key={c.slug}
                to="/products/$category"
                params={{ category: c.slug }}
                className="px-3 py-1.5 rounded-full text-xs border border-border hover:border-foreground/40 hover:text-foreground text-muted-foreground transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
