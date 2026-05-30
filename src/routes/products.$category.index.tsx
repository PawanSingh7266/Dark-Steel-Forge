import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Container } from "@/components/section";
import { ArrowLeft } from "lucide-react";
import { getCategory, getGradeImage, productSlug, productName, COMPANY } from "@/data/products";

export const Route = createFileRoute("/products/$category/")({
  component: CategoryIndexPage,
});

function CategoryIndexPage() {
  const cat = getCategory(Route.useParams().category);
  if (!cat) return null;

  return (
    <div className="bg-white text-[#333] min-h-screen">
      <Section className="!py-12 md:!py-16">
        <Container>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gray-500 hover:text-gray-800 transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Products
          </Link>

          <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8">{cat.name}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cat.grades.map((g, idx) => {
              const slug = productSlug(g, cat);
              const name = productName(g, cat);
              return (
                <div
                  key={slug}
                  className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                    <img
                      src={getGradeImage(cat.slug, idx)}
                      alt={name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <h3 className="font-semibold text-sm text-[#1a1a1a]">{name}</h3>
                    <p className="text-xs text-gray-500">{COMPANY}</p>
                    <Link
                      to="/products/$category/$product"
                      params={{ category: cat.slug, product: slug }}
                      className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
}
