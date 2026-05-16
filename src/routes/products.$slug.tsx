import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Container, FadeIn, Eyebrow } from "@/components/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowUpRight, ArrowLeft, CheckCircle2, FileText, Ruler, Sparkles, Factory, Phone } from "lucide-react";
import { PRODUCTS, getProduct, getRelated } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) return { meta: [{ title: "Product not found" }] };
    return {
      meta: [
        { title: `${p.name} — Bhandari Metals & Alloys` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.name} — Bhandari Metals & Alloys` },
        { property: "og:description", content: p.tagline },
        { property: "og:image", content: p.image },
        { property: "twitter:image", content: p.image },
      ],
    };
  },
  component: ProductPage,
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
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  if (!product) {
    return (
      <Section>
        <Container>
          <div className="text-center py-20">
            <h1 className="text-3xl font-display font-semibold mb-4">Product not found</h1>
            <Link to="/products" className="text-accent underline">Back to catalogue</Link>
          </div>
        </Container>
      </Section>
    );
  }
  const related = getRelated(product.related);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-60" />
        <Container className="relative">
          <Link to="/products" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-3.5 w-3.5" /> All Products
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn>
              <Eyebrow>{product.category}</Eyebrow>
              <h1 className="text-4xl md:text-5xl font-display font-semibold leading-[1.05] text-gradient-steel mb-5">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-7 max-w-xl">{product.tagline}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {product.standards.slice(0, 4).map((s) => (
                  <span key={s} className="text-[11px] tracking-wide px-3 py-1.5 rounded-full bg-card border border-border text-foreground/80">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">
                  Request Quote <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href="tel:+910000000000" className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-border text-sm font-medium hover:border-foreground/40 transition-colors">
                  <Phone className="h-4 w-4" /> Talk to Sales
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-border">
                <img src={product.image} alt={product.name} width={1280} height={896} className="w-full h-full object-cover aspect-[4/3]" />
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
              <Eyebrow>Overview</Eyebrow>
              <p className="text-lg leading-relaxed text-foreground/85 max-w-3xl">{product.overview}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl bg-card border border-border p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">Quick facts</div>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Category</dt>
                    <dd className="font-medium text-right">{product.category}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Grades</dt>
                    <dd className="font-medium text-right">{product.grades.length}+</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Standards</dt>
                    <dd className="font-medium text-right">{product.standards.length}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Industries</dt>
                    <dd className="font-medium text-right">{product.industries.length}+</dd>
                  </div>
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
            <Eyebrow>Technical specifications</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10">Engineered to global standards.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <SpecCard icon={<Sparkles className="h-4 w-4" />} title="Available Grades" items={product.grades} />
            <SpecCard icon={<FileText className="h-4 w-4" />} title="Standards & Specifications" items={product.standards} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
                <Ruler className="h-4 w-4 text-accent" />
                <h3 className="text-sm uppercase tracking-[0.2em] font-medium">Dimensions & Range</h3>
              </div>
              <dl className="divide-y divide-border">
                {product.dimensions.map((d) => (
                  <div key={d.label} className="grid grid-cols-[140px_1fr] px-6 py-4 text-sm">
                    <dt className="text-muted-foreground">{d.label}</dt>
                    <dd className="font-medium">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {product.finishes && (
              <SpecCard icon={<Sparkles className="h-4 w-4" />} title="Surface Finishes" items={product.finishes} />
            )}
          </div>
        </Container>
      </Section>

      {/* Applications & Industries */}
      <Section className="!pt-0">
        <Container>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-card border border-border p-8">
              <div className="flex items-center gap-2 mb-5">
                <Factory className="h-4 w-4 text-accent" />
                <h3 className="text-sm uppercase tracking-[0.2em] font-medium">Industrial Applications</h3>
              </div>
              <ul className="space-y-3">
                {product.applications.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-card border border-border p-8">
              <div className="flex items-center gap-2 mb-5">
                <Factory className="h-4 w-4 text-accent" />
                <h3 className="text-sm uppercase tracking-[0.2em] font-medium">Industries Served</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.industries.map((i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted border border-border">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Properties accordion */}
      <Section className="!pt-0">
        <Container>
          <FadeIn>
            <Eyebrow>Material properties</Eyebrow>
            <h2 className="text-3xl font-display font-semibold mb-8">Engineering data on request.</h2>
          </FadeIn>
          <div className="rounded-2xl bg-card border border-border px-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="chem" className="border-border">
                <AccordionTrigger>Chemical composition</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Detailed chemistry (C, Cr, Ni, Mo, N, Si, Mn, P, S) per heat is supplied via EN 10204 3.1 / 3.2 mill test certificates with every consignment. PMI testing available on request.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="mech" className="border-border">
                <AccordionTrigger>Mechanical properties</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Tensile strength, yield strength (0.2% proof), elongation, hardness (HRB / HV) and impact (Charpy V-notch) values reported per applicable ASTM / ASME standard.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tol" className="border-border">
                <AccordionTrigger>Tolerances</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Dimensional tolerances per ASTM A480 / A484, EN 10029 / 10051 / 10258 or customer-specific. Tighter tolerances available through cold-finishing, peeling and centreless grinding.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="test" className="border-border last:border-0">
                <AccordionTrigger>Testing & certification</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Hydrotest, eddy-current, ultrasonic, IGC (ASTM A262 Pr. A/B/C/E), PMI, dye-penetrant and radiography available. Third-party inspection by Lloyd's, BV, DNV, SGS and TÜV supported.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section className="!pt-0">
          <Container>
            <FadeIn>
              <Eyebrow>Related products</Eyebrow>
              <h2 className="text-3xl font-display font-semibold mb-8">Often specified together.</h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/products/$slug"
                  params={{ slug: r.slug }}
                  className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-foreground/20 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img src={r.image} alt={r.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display font-semibold mb-1 group-hover:text-accent transition-colors">{r.name}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{r.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Inquiry CTA */}
      <Section className="!pt-0">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-foreground to-foreground/80 text-background p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-[0.04]" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-end">
              <div className="max-w-2xl">
                <Eyebrow>Send Inquiry</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 leading-tight">
                  Request a quotation for {product.name.toLowerCase()}.
                </h2>
                <p className="text-background/70 text-sm md:text-base leading-relaxed">
                  Share your grade, dimensions and quantity — our technical team responds within 24 hours with availability, pricing and lead time.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 h-12 rounded-full bg-background text-foreground text-sm font-medium hover:opacity-90 transition-opacity shrink-0"
              >
                Get a Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function SpecCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="rounded-2xl bg-card border border-border overflow-hidden">
      <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
        <span className="text-accent">{icon}</span>
        <h3 className="text-sm uppercase tracking-[0.2em] font-medium">{title}</h3>
      </div>
      <ul className="divide-y divide-border">
        {items.map((i) => (
          <li key={i} className="px-6 py-3 text-sm flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Pre-render hint for static export of slugs (unused at runtime but documents available slugs)
export const _ALL_SLUGS = PRODUCTS.map((p) => p.slug);