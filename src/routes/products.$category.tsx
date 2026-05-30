import { createFileRoute, Outlet } from "@tanstack/react-router";
import { getCategory } from "@/data/products";

export const Route = createFileRoute("/products/$category")({
  head: ({ params }) => {
    const cat = getCategory(params.category);
    if (!cat) return { meta: [{ title: "Category not found" }] };
    return {
      meta: [
        { title: `${cat.name} — Bhandari metal & alloyes` },
        {
          name: "description",
          content: `High-quality ${cat.name.toLowerCase()} — Available in various grades. Supplier and stockist of premium stainless steel products.`,
        },
        { property: "og:title", content: `${cat.name} — Bhandari metal & alloyes` },
        { property: "og:description", content: `Browse our range of ${cat.name.toLowerCase()}.` },
      ],
    };
  },
  component: CategoryLayout,
  errorComponent: () => null,
});

function CategoryLayout() {
  return <Outlet />;
}
