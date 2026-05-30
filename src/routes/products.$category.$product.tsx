import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Container } from "@/components/section";
import { ArrowLeft } from "lucide-react";
import { findProduct, getGradeImage, productSlug, productName, COMPANY } from "@/data/products";

export const Route = createFileRoute("/products/$category/$product")({
  head: ({ params }) => {
    const found = findProduct(params.category, params.product);
    if (!found) return { meta: [{ title: "Product not found" }] };
    return {
      meta: [
        { title: `${found.name} Supplier — ${COMPANY}` },
        {
          name: "description",
          content: `${found.name} Supplier, Manufacturer, and Exporter. High-quality stainless steel products. Contact us for pricing and technical specifications.`,
        },
        { property: "og:title", content: `${found.name} Supplier — ${COMPANY}` },
        { property: "og:description", content: `Premium quality ${found.name.toLowerCase()}.` },
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
        <div className="text-center py-20 text-gray-500">Product not found.</div>
      </Container>
    </Section>
  ),
  errorComponent: ({ error }) => (
    <Section>
      <Container>
        <div className="py-20 text-center text-sm text-gray-400">{error.message}</div>
      </Container>
    </Section>
  ),
});

const EXPORT_COUNTRIES = [
  "Macau, Philippines, Estonia, Slovakia, India, Switzerland, France, Gambia, United States, Nepal, Iran, Australia, Thailand, Gabon, Zimbabwe, Bangladesh, Angola, Lithuania, Kuwait, Kazakhstan, Trinidad & Tobago, Puerto Rico, Singapore, Mexico, Azerbaijan, Brazil, Bulgaria, United Arab Emirates, Greece, South Africa, Afghanistan, Sri Lanka, Italy, China, Serbia, Turkey, Mexico, Bolivia, Peru, Chile, Belarus, Yemen, Namibia, Qatar, Algeria, Libya, Nigeria, Japan, Poland, Austria, Bhutan, Portugal, Czech Republic, Croatia, Jordan, Hungary, Finland, Pakistan, Spain, South Korea, Ecuador, Denmark, Canada, Kenya, Saudi Arabia, Vietnam, Sweden, Malaysia, Bahrain, Costa Rica, Venezuela, Israel, Netherlands, United Kingdom, New Zealand, Russia, Morocco, Indonesia, Hong Kong, Egypt, Oman, Norway, Chile, Iran, Lebanon, Taiwan, Ghana, Romania, Mongolia, Ukraine, Colombia, Tunisia, Ireland, Iraq, Belgium, Argentina, Germany",
];

const EXPORT_CITIES = [
  "Calgary, Al Jubail, Hong Kong, Bhopal, Jeddah, Toronto, Ulsan, Aberdeen, Thiruvananthapuram, Petaling Jaya, Nashik, Houston, Montreal, Cairo, Ernakulam, Atyrau, Karachi, Haryana, Istanbul, Jakarta, Sharjah, Nagpur, Dallas, Ranchi, Algiers, Doha, Santiago, Geoje-si, Singapore, Chennai, Jamshedpur, Perth, New Delhi, Tehran, Vadodara, New York, Caracas, Ahmedabad, Edmonton, Kanpur, Busan, Mumbai, Secunderabad, Bengaluru, Kolkata, Pimpri-Chinchwad, Manama, Vung Tau, Melbourne, Bangkok, Colombo, Ankara, Bogota, Sydney, Milan, Port-of-Spain, Abu Dhabi, Thane, Ahvaz, Visakhapatnam, Rajkot, Jaipur, Indore, Kuwait City, Gurgaon, Baroda, Navi Mumbai, La Victoria, Surat, Ludhiana, Lahore, Hanoi, Riyadh, Faridabad, Hyderabad, Coimbatore, Mexico City, Dubai, Al Khobar, Rio de Janeiro, Pune, Chiyoda, Moscow, Lagos, London, Madrid, Granada, Ho Chi Minh City, Brisbane, Chandigarh, Seoul, Courbevoie, Los Angeles, Gimhae-si, Dammam, Howrah, Muscat, Noida, Kuala Lumpur, Pondicherry, Tamil Nadu",
];

function ProductDetailPage() {
  const found = findProduct(Route.useParams().category, Route.useParams().product);
  if (!found) return null;
  const { category: cat, grade, name } = found;
  const slugBase = cat.slug.replace(/^stainless-steel-/, "");
  const shortCat = cat.shortName.toLowerCase();
  const gradeIdx = cat.grades.indexOf(grade);
  const related = cat.grades.filter((g) => g !== grade).slice(0, 4);

  return (
    <div className="bg-white text-[#333] min-h-screen">
      <Section className="!py-12 md:!py-16">
        <Container>
          <Link
            to="/products/$category"
            params={{ category: cat.slug }}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gray-500 hover:text-gray-800 transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to {cat.name}
          </Link>

          {/* Product Image */}
          <div className="aspect-[16/9] md:aspect-[3/1] overflow-hidden bg-gray-100 rounded-lg mb-8">
            <img
              src={getGradeImage(cat.slug, gradeIdx)}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Description */}
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">
            {grade} {cat.name} Supplier
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-4xl">
            {COMPANY} is a leading supplier, stockist, and exporter of premium quality {grade}{" "}
            {cat.name}, Plates, and Coils. Known for excellent corrosion resistance, durability, and
            versatility, {grade} Stainless Steel is one of the most widely used stainless steel
            grades across industries worldwide.
            <br />
            <br />
            We supply ASTM A240 UNS S30400 material in various finishes, sizes, and custom
            specifications to meet diverse industrial requirements.
          </p>

          {/* What is {grade} Stainless Steel? */}
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">
            What is {grade} Stainless Steel?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            <strong>{grade} Stainless Steel</strong> is an austenitic chromium-nickel stainless
            steel that offers:
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mb-8">
            <li>Excellent corrosion resistance</li>
            <li>High strength and durability</li>
            <li>Good formability and weldability</li>
            <li>Strong oxidation resistance up to 870°C (1600°F)</li>
            <li>Non-magnetic properties in annealed condition</li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            Because of its balanced chemical composition, <strong>{grade} Stainless Steel</strong>{" "}
            performs exceptionally well in both chemical and atmospheric environments.
          </p>

          {/* Available Finishes */}
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">Available finishes include:</h2>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mb-8">
            <li>SS {grade} 2B Finish</li>
            <li>STAINLESS STEEL {grade} No.4 Finish</li>
            <li>{grade} SS No.8 Mirror Finish</li>
            <li>{grade} Bright Annealed Finish</li>
            <li>Custom surface finishes as per requirement</li>
          </ul>

          {/* Technical Specifications */}
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Technical Specifications</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse border border-gray-200">
              <tbody>
                {[
                  ["Grade", `${grade} / UNS S30400`],
                  ["Standard", `SS ${grade} ASTM A240 / ASME SA240`],
                  ["Category", "Austenitic Stainless Steel"],
                  ["Form", `${grade} Sheet, Plate, Coil`],
                  ["Thickness Range", "As per customer requirement"],
                  ["Surface Finish", "BA, 2B, No.4, Mirror, etc."],
                  ["Item", `${grade} Stainless Steel (Hot rolled, cold rolled)`],
                  ["Standard", "JIS, AISI, ASTM, GB, DIN, EN, etc"],
                  ["Range", "5mm To 150mm"],
                  ["Thickness", "0.01~200mm"],
                  ["Width", "1000mm, 1219mm, 1500mm, 1800mm, 2000mm, 2500mm, 3000mm, 3500mm, etc"],
                  ["Length", "2000mm, 2440mm, 3000mm, 5800mm, 6000mm, etc"],
                  [
                    "Brand",
                    "Indian Origin, European Origin, Japanese Origin, US Origin, Korea Origin, Thailand Origin, Taiwan Origin",
                  ],
                  [
                    "Manufacturer",
                    "POSCO, Aperam, Salem Stainless, Acerinox, Thyssenkrup, Baosteel, DKC Korea, TISCO, Arcelor Mittal, Nas, Sail, Nippon Metal, Outokumpu",
                  ],
                  ["Package", "Standard export package, suit for all kinds of transport, or as"],
                  ["Hardness", "As per ASME A & NACE MR 175"],
                  [
                    "Finish",
                    "Hot rolled sheet (HR), Cold rolled sheet (CR), 2B, 2D, BA NO(8), SATIN (Met with Plastic Coated)",
                  ],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-gray-200">
                    <td className="py-2 px-4 font-semibold text-gray-700 bg-gray-50 w-1/3">
                      {label}
                    </td>
                    <td className="py-2 px-4 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Standard Comparison */}
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
            Stainless Steel {grade} Grade Specification Comparison
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  {[
                    "Grade",
                    "UNS No",
                    "Old British BS",
                    "Euronorm No",
                    "Euronorm Name",
                    "Swedish SS",
                    "Japanese JIS",
                  ].map((h) => (
                    <th key={h} className="py-2 px-3 text-left font-semibold text-gray-700 text-xs">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-3 font-medium text-gray-700">{grade}</td>
                  <td className="py-2 px-3 text-gray-600">S30400</td>
                  <td className="py-2 px-3 text-gray-600">304S31</td>
                  <td className="py-2 px-3 text-gray-600">1.4301</td>
                  <td className="py-2 px-3 text-gray-600">X5CrNi18-10</td>
                  <td className="py-2 px-3 text-gray-600">2332</td>
                  <td className="py-2 px-3 text-gray-600">SUS 304</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Chemical Composition */}
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
            Chemical Properties Of {grade} {cat.name}:
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-2 px-4 text-left font-semibold text-gray-700">Element</th>
                  <th className="py-2 px-4 text-left font-semibold text-gray-700">
                    Composition (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Carbon (C)", "≤ 0.08"],
                  ["Manganese (Mn)", "≤ 2.00"],
                  ["Silicon (Si)", "≤ 0.75"],
                  ["Phosphorus (P)", "≤ 0.045"],
                  ["Sulfur (S)", "≤ 0.030"],
                  ["Chromium (Cr)", "18.00 – 20.00"],
                  ["Nickel (Ni)", "8.00 – 10.50"],
                  ["Nitrogen (N)", "≤ 0.10"],
                ].map(([el, comp]) => (
                  <tr key={el} className="border-b border-gray-200">
                    <td className="py-2 px-4 text-gray-700">{el}</td>
                    <td className="py-2 px-4 text-gray-600">{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Applications */}
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">
            Applications of {grade} Stainless Steel:
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Due to its versatility, {grade} Stainless Steel is widely used in:
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mb-8">
            <li>Kitchen equipment and food processing units</li>
            <li>Storage tanks and pressure vessels</li>
            <li>Heat exchangers</li>
            <li>Architectural cladding and facades</li>
            <li>Chemical processing equipment</li>
            <li>Water treatment plants</li>
            <li>Dairy and pharmaceutical industries</li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            Its hygienic properties make it ideal for food-grade and sanitary applications.
          </p>

          {/* Quote CTA */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8 text-center">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">Get a Quote Today</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-2xl mx-auto">
              Looking for reliable suppliers of <strong>{grade} Stainless Steel</strong>? Contact{" "}
              {COMPANY} today for pricing, technical support, or customized requirements. Our
              experts are ready to assist you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 h-10 rounded bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Export Destinations */}
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">
            Export Destinations of {grade} {cat.name}
          </h2>
          <h3 className="text-base font-semibold text-[#1a1a1a] mb-2">Countries We Export</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{EXPORT_COUNTRIES[0]}</p>
          <h3 className="text-base font-semibold text-[#1a1a1a] mb-2">Cities We Supply</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">{EXPORT_CITIES[0]}</p>

          {/* Related Products */}
          {related.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">More {cat.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {related.map((g) => {
                  const rSlug = productSlug(g, cat);
                  const rName = productName(g, cat);
                  const rIdx = cat.grades.indexOf(g);
                  return (
                    <Link
                      key={rSlug}
                      to="/products/$category/$product"
                      params={{ category: cat.slug, product: rSlug }}
                      className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                        <img
                          src={getGradeImage(cat.slug, rIdx)}
                          alt={rName}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3">
                        <h4 className="text-xs font-semibold text-[#1a1a1a]">{rName}</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">{COMPANY}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </>
          )}
        </Container>
      </Section>
    </div>
  );
}
