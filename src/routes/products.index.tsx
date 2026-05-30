import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Container } from "@/components/section";
import { CATEGORIES } from "@/data/products";

export const Route = createFileRoute("/products/")({
  component: ProductsIndexPage,
});

function ProductsIndexPage() {
  return (
    <div className="bg-white text-[#333]">
      <Section className="!py-16 md:!py-20">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a1a1a]">
            Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to="/products/$category"
                params={{ category: cat.slug }}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[#1a1a1a] text-center uppercase tracking-wide">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
