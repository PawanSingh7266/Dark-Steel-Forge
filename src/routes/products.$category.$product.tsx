import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Container, FadeIn, Eyebrow } from "@/components/section";
import { ArrowLeft, ArrowUpRight, Phone, CheckCircle2, FileText, Ruler, Factory, Sparkles } from "lucide-react";
import { findProduct, productSlug, productName } from "@/data/products";

export const Route = createFileRoute("/products/$category/$product")({
  head: ({ params }) => {
    const found = findProduct(params.category, params.product);
    if (!found) return { meta: [{ title: "Product not found" }] };
    return {
      meta: [
        { title: `${found.name} — Bhandari Metals & Alloys` },
        { name: "description", content: `${found.name} — manufactured to global ASTM, ASME, EN and JIS standards. Request technical datasheets, dimensions and quotations.` },
        { property: "og:title", content: `${found.name} — Bhandari Metals & Alloys` },
        { property: "og:description", content: found.category.tagline },
        { property: "og:image", content: found.category.image },
      ],
    };
  },
  loader: ({ params }) => {
    const found = findProduct(params.category, params.product);
    if (!found) throw notFound();
    return found;
  },
  component: ProductDetailPage,
  notFoundComponent: () => (
    <Section>
      <Container>
        <div className="text-center py-20">
          <h1 className="text-3xl font-display font-semibold mb-4">Product not found</h1>
          <Link to="/products" className="text-accent underline">Back to catalogue</Link>
        </div>
      </Container>
    </Section>
  ),
  errorComponent: ({ error }) => (
    <Section><Container><div className="py-20 text-center text-sm text-muted-foreground">{error.message}</div></Container></Section>
  ),
});

function ProductDetailPage() {
  const params = Route.useParams();
  const found = findProduct(params.category, params.product)!;
  const { category: cat, grade, name } = found;
  const related = cat.grades.filter((g) => g !== grade).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-60" />
        <Container className="relative">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
            <span>/</span>
            <Link to="/products/$category" params={{ category: cat.slug }} className="hover:text-foreground transition-colors">{cat.shortName}</Link>
            <span>/</span>
            <span className="text-foreground">{grade}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn>
              <Eyebrow>{cat.group}</Eyebrow>
              <h1 className="text-4xl md:text-5xl font-display font-semibold leading-[1.05] text-gradient-steel mb-5">
                {name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-7 max-w-xl">
                Premium grade {grade} {cat.shortName.toLowerCase()} engineered to international ASTM, ASME, EN and JIS standards. Full mill test certificates, third-party inspection and custom dimensions available.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">
                  Request Quote <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/products/$category" params={{ category: cat.slug }} className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-border text-sm font-medium hover:border-foreground/40 transition-colors">
                  <ArrowLeft className="h-4 w-4" /> All {cat.shortName}
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-border">
                <img src={cat.image} alt={name} width={1280} height={896} className="w-full h-full object-cover aspect-[4/3]" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <Section className="!py-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-10">
            <FadeIn className="lg:col-span-2">
              <Eyebrow>Product Overview</Eyebrow>
              <p className="text-lg leading-relaxed text-foreground/85 max-w-3xl mb-4">
                {name} are supplied by Bhandari Metals &amp; Alloys with full traceability and certification. Detailed product description, manufacturing process and material characteristics will be added shortly.
              </p>
              <p className="text-sm text-muted-foreground italic">[Detailed overview content to be added.]</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl bg-card border border-border p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">Quick facts</div>
                <dl className="space-y-3 text-sm">
                  <Fact label="Grade" value={grade} />
                  <Fact label="Category" value={cat.name} />
                  <Fact label="Group" value={cat.group} />
                  <Fact label="Standards" value="ASTM / ASME / EN / JIS" />
                </dl>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Specifications */}
      <Section className="!pt-0">
        <Container>
          <FadeIn>
            <Eyebrow>Specifications</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10">Engineered to global standards.</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <PlaceholderCard icon={<Sparkles className="h-4 w-4" />} title="Chemical Composition" />
            <PlaceholderCard icon={<FileText className="h-4 w-4" />} title="Mechanical Properties" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <PlaceholderCard icon={<Ruler className="h-4 w-4" />} title="Dimensions & Tolerances" />
            <PlaceholderCard icon={<Sparkles className="h-4 w-4" />} title="Surface Finishes" />
          </div>
        </Container>
      </Section>

      {/* Applications */}
      <Section className="!pt-0">
        <Container>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-card border border-border p-8">
              <div className="flex items-center gap-2 mb-5">
                <Factory className="h-4 w-4 text-accent" />
                <h3 className="text-sm uppercase tracking-[0.2em] font-medium">Industrial Applications</h3>
              </div>
              <ul className="space-y-3">
                {["Process equipment", "Pressure systems", "Structural fabrication", "Custom engineering"].map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground italic">[Detailed application list to be added.]</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-8">
              <div className="flex items-center gap-2 mb-5">
                <FileText className="h-4 w-4 text-accent" />
                <h3 className="text-sm uppercase tracking-[0.2em] font-medium">Technical Information</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Heat-treatment, corrosion data, weldability and forming characteristics for {grade} will be published here.
              </p>
              <p className="mt-3 text-xs text-muted-foreground italic">[Technical content to be added.]</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Inquiry form placeholder */}
      <Section className="!pt-0">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-foreground to-foreground/80 text-background p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-[0.04]" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-end">
              <div className="max-w-2xl">
                <Eyebrow>Send Inquiry</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 leading-tight">
                  Request a quotation for {name.toLowerCase()}.
                </h2>
                <p className="text-background/70 text-sm md:text-base leading-relaxed">
                  Share your dimensions, quantity and standard — our technical team responds within 24 hours with availability, pricing and lead time.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 h-12 rounded-full bg-background text-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                  Get a Quote <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href="tel:+910000000000" className="inline-flex items-center gap-2 px-6 h-12 rounded-full border border-background/30 text-background text-sm font-medium hover:bg-background/10 transition-colors">
                  <Phone className="h-4 w-4" /> Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section className="!pt-0">
          <Container>
            <FadeIn>
              <Eyebrow>Related products</Eyebrow>
              <h2 className="text-3xl font-display font-semibold mb-8">More from {cat.name}.</h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((g) => {
                const slug = productSlug(g, cat);
                const rName = productName(g, cat);
                return (
                  <Link
                    key={slug}
                    to="/products/$category/$product"
                    params={{ category: cat.slug, product: slug }}
                    className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-foreground/20 shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img src={cat.image} alt={rName} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <h4 className="font-display font-semibold mb-1 group-hover:text-accent transition-colors">{rName}</h4>
                      <p className="text-xs text-muted-foreground">Bhandari Metals &amp; Alloys</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium text-right">{value}</dd>
    </div>
  );
}

function PlaceholderCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="rounded-2xl bg-card border border-border overflow-hidden">
      <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
        <span className="text-accent">{icon}</span>
        <h3 className="text-sm uppercase tracking-[0.2em] font-medium">{title}</h3>
      </div>
      <div className="p-6 text-sm text-muted-foreground italic">
        [Detailed {title.toLowerCase()} data will be published here.]
      </div>
    </div>
  );
}
