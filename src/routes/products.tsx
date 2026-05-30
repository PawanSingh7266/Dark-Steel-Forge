import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Section, Container } from "@/components/section";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Bhandari metal & alloyes" },
      {
        name: "description",
        content:
          "High-quality stainless steel products — sheets, plates, coils, pipes, fittings, flanges, rods, angles, flats, designer sheets, slit coil.",
      },
      { property: "og:title", content: "Products — Bhandari metal & alloyes" },
      {
        property: "og:description",
        content: "Browse our complete range of stainless steel products.",
      },
    ],
  }),
  component: ProductsLayout,
});

function ProductsLayout() {
  return <Outlet />;
}
