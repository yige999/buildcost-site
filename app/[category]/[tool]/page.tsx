import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { getAllCategories, getCalculatorBySlug, calculatorExists, getAllCalculators, getCalculatorsByCategory, topCities, getFAQs, commonFAQs, projectCosts } from "@/data";
import { CalculatorFactory } from "@/components/calculator/CalculatorFactory";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOBlock } from "@/components/seo/SEOBlock";
import { SoftwareAppSchema, FAQPageSchema, BreadcrumbSchema, HowToSchema } from "@/components/seo/JsonLd";
import { getSEOContent } from "@/data/seo-content";
import { getCategoryBySlug } from "@/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { MapPin, Info } from "lucide-react";

interface CalculatorPageProps {
  params: Promise<{
    category: string;
    tool: string;
  }>;
}

export async function generateStaticParams() {
  const calculators = getAllCalculators();

  return calculators.map((calc) => ({
    category: calc.category,
    tool: calc.slug,
  }));
}

export async function generateMetadata({ params }: CalculatorPageProps) {
  const { category, tool } = await params;

  if (!calculatorExists(category, tool)) {
    return {
      title: "Calculator Not Found",
    };
  }

  const calc = getCalculatorBySlug(category, tool);

  return {
    title: calc?.seoTitle || `${calc?.name} | BuildCost.site`,
    description: calc?.seoDescription || calc?.description,
  };
}

const formulaMap: Record<string, string> = {
  slab: "Volume = Length × Width × Thickness\nCubic Yards = Cubic Feet ÷ 27",
  wall: "Volume = Length × Height × Thickness\nCubic Yards = Cubic Feet ÷ 27",
  footing: "Volume = Length × Width × Depth\nCubic Yards = Cubic Feet ÷ 27",
  column: "Volume = π × Radius² × Height\nCubic Yards = Cubic Feet ÷ 27",
  "square-column": "Volume = Side × Side × Height\nCubic Yards = Cubic Feet ÷ 27",
  steps: "Volume = sum of (Step Length × Step Width × Step Height)\nCubic Yards = Cubic Feet ÷ 27",
  "curb-gutter": "Volume = Cross-section Area × Length\nCubic Yards = Cubic Feet ÷ 27",
  circle: "Volume = π × Radius² × Thickness\nCubic Yards = Cubic Feet ÷ 27",
  block: "Blocks = Wall Area ÷ Block Face Area\nMortar Bags ≈ Blocks ÷ 30",
  "post-hole": "Volume = π × Hole Radius² × Depth\nCubic Yards = Cubic Feet ÷ 27",
  sonotube: "Volume = π × (Diameter÷2)² × Height\nCubic Yards = Cubic Feet ÷ 27",
  rebar: "Pieces = (Length ÷ Spacing + 1) × Direction\nLinear Feet = Pieces × Span",
  driveway: "Volume = Length × Width × Thickness\nCubic Yards = Cubic Feet ÷ 27",
};

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { category, tool } = await params;

  if (!calculatorExists(category, tool)) {
    notFound();
  }

  const calc = getCalculatorBySlug(category, tool);
  const cat = getCategoryBySlug(category);
  const seoContentData = getSEOContent(category, tool);
  const calculatorId = `${category}-${tool}`;
  const faqs = getFAQs(calculatorId);
  const allFAQs = [...faqs, ...commonFAQs];
  const formula = formulaMap[tool];

  // Generate HowTo schema from calculator inputs
  const howToSteps = calc?.inputs.slice(0, 5).map((input) => ({
    name: `Enter ${input.label}`,
    text: input.placeholder || `Provide the ${input.label.toLowerCase()} for your calculation`,
  }));

  return (
    <>
      {/* Schema.org JSON-LD */}
      <SoftwareAppSchema calculator={calc!} category={category} />
      <FAQPageSchema faqs={allFAQs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: cat?.name || category, href: `/${category}` },
          { name: calc?.name || tool, href: `/${category}/${tool}` },
        ]}
      />
      {howToSteps && howToSteps.length > 0 && (
        <HowToSchema
          name={`How to Use ${calc?.name}`}
          description={calc?.description}
          steps={howToSteps}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: cat?.name || category, href: `/${category}` },
          { label: calc?.name || tool },
        ]}
        className="mb-8"
      />

      {/* Intro Block */}
      <div className="mb-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-secondary-900 mb-3">
          {calc?.name}
        </h1>
        <p className="text-lg text-secondary-600 mb-2">
          {calc?.description}
        </p>
        <p className="text-sm text-secondary-500 flex items-center gap-1.5">
          <Info className="w-4 h-4" />
          Estimates are for planning only. Verify quantities with a local supplier or contractor.
        </p>
      </div>

      {/* Formula Block (concrete and other categories with formulas) */}
      {formula && (
        <div className="mb-8 p-4 bg-secondary-50 border border-secondary-200 rounded-lg max-w-4xl">
          <h2 className="text-sm font-semibold text-secondary-700 uppercase tracking-wide mb-2">Formula</h2>
          <pre className="text-sm text-secondary-800 whitespace-pre-wrap font-mono">{formula}</pre>
        </div>
      )}

      {/* Calculator */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        }
      >
        <CalculatorFactory config={calc!} />
      </Suspense>

      {/* SEO Content */}
      {seoContentData && (
        <SEOBlock title={seoContentData.title} content={seoContentData.content} />
      )}

      {/* Related Calculators */}
      <div className="mt-16 pt-8 border-t border-secondary-200">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6">
          More {cat?.name}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {getCalculatorsByCategory(category)
            .filter((c) => c.slug !== tool)
            .slice(0, 6)
            .map((relatedCalc) => {
              const Icon = getIconComponent(relatedCalc.icon);
              return (
                <Link key={relatedCalc.id} href={`/${category}/${relatedCalc.slug}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">{relatedCalc.name}</CardTitle>
                      </div>
                      <CardDescription className="text-sm">
                        {relatedCalc.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
        </div>
      </div>

      {/* Related Sizes — concrete only */}
      {category === "concrete" && (
        <div className="mt-16 pt-8 border-t border-secondary-200">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Common Slab Sizes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { href: "/size/10/x10/concrete/slab", label: "10×10 Slab", desc: "100 sq ft" },
              { href: "/size/10/x12/concrete/slab", label: "10×12 Slab", desc: "120 sq ft" },
              { href: "/size/12/x12/concrete/slab", label: "12×12 Slab", desc: "144 sq ft" },
              { href: "/size/16/x20/concrete/slab", label: "16×20 Slab", desc: "320 sq ft" },
              { href: "/size/20/x20/concrete/slab", label: "20×20 Slab", desc: "400 sq ft" },
            ].map((size) => (
              <Link
                key={size.href}
                href={size.href}
                className="flex flex-col items-center justify-center p-4 bg-white border border-secondary-200 rounded-lg hover:border-primary hover:shadow-md transition-all group text-center"
              >
                <div className="font-medium text-secondary-900 text-sm group-hover:text-primary">
                  {size.label}
                </div>
                <div className="text-xs text-secondary-500 mt-1">{size.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Related Cost Pages — concrete only */}
      {category === "concrete" && (
        <div className="mt-16 pt-8 border-t border-secondary-200">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Concrete Cost Guides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectCosts
              .filter((p) => p.id.startsWith("concrete-"))
              .map((project) => (
                <Link key={project.id} href={`/cost/${project.id}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">{project.name} Cost</CardTitle>
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                      <div className="text-xs text-secondary-400 mt-2">
                        National avg: ${project.nationalAverage.min.toLocaleString()} – ${project.nationalAverage.max.toLocaleString()}
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      )}

      {/* Popular Cities for Concrete */}
      {category === "concrete" && (
        <div className="mt-16 pt-8 border-t border-secondary-200">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Local Concrete Cost Estimates
          </h2>
          <p className="text-secondary-600 mb-6">
            Get city-specific concrete costs with local labor rates and material price adjustments.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {topCities.slice(0, 12).map((city) => (
              <Link
                key={`${city.stateSlug}-${city.slug}`}
                href={`/${category}/${tool}/l/${city.stateSlug}/${city.slug}`}
                className="flex items-center gap-2 p-3 bg-white border border-secondary-200 rounded-lg hover:border-primary hover:shadow-md transition-all group"
              >
                <MapPin className="w-4 h-4 text-secondary-400 group-hover:text-primary" />
                <div>
                  <div className="font-medium text-secondary-900 text-sm group-hover:text-primary">
                    {city.city}
                  </div>
                  <div className="text-xs text-secondary-500">{city.state}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Popular Cities for Roofing */}
      {category === "roofing" && (
        <div className="mt-16 pt-8 border-t border-secondary-200">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Most Popular Cities for Roofing Estimates
          </h2>
          <p className="text-secondary-600 mb-6">
            Get local roofing costs with climate-specific recommendations for your
            area.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {topCities.slice(0, 12).map((city) => (
              <Link
                key={`${city.stateSlug}-${city.slug}`}
                href={`/roofing/shingle/l/${city.stateSlug}/${city.slug}`}
                className="flex items-center gap-2 p-3 bg-white border border-secondary-200 rounded-lg hover:border-primary hover:shadow-md transition-all group"
              >
                <MapPin className="w-4 h-4 text-secondary-400 group-hover:text-primary" />
                <div>
                  <div className="font-medium text-secondary-900 text-sm group-hover:text-primary">
                    {city.city}
                  </div>
                  <div className="text-xs text-secondary-500">{city.state}</div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/roofing/shingle/l"
            className="inline-flex items-center gap-2 mt-6 text-primary hover:underline font-medium"
          >
            View all cities
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}

      {/* Estimate Disclaimer & Last Updated */}
      <div className="mt-12 pt-6 border-t border-secondary-200 max-w-4xl">
        <p className="text-sm text-secondary-500 mb-2">
          These estimates are for planning only. Verify quantities and code requirements
          with a local supplier or contractor before purchasing materials.
        </p>
        <p className="text-xs text-secondary-400">Last updated: May 2026</p>
      </div>
    </div>
    </>
  );
}

// Icon mapping for dynamic imports
function getIconComponent(iconName: string) {
  const icons: Record<string, any> = {
    Hammer: require("lucide-react").Hammer,
    Home: require("lucide-react").Home,
    Layers: require("lucide-react").Layers,
    Square: require("lucide-react").Square,
    RectangleVertical: require("lucide-react").RectangleVertical,
    RectangleHorizontal: require("lucide-react").RectangleHorizontal,
    Minus: require("lucide-react").Minus,
    Stairs: require("lucide-react").Stairs,
    Circle: require("lucide-react").Circle,
    CircleDot: require("lucide-react").CircleDot,
    Grid3x3: require("lucide-react").Grid3x3,
    MapPin: require("lucide-react").MapPin,
    CreditCard: require("lucide-react").CreditCard,
    LayoutTemplate: require("lucide-react").LayoutTemplate,
    Database: require("lucide-react").Database,
    BoxSelect: require("lucide-react").BoxSelect,
    Car: require("lucide-react").Car,
    StretchHorizontal: require("lucide-react").StretchHorizontal,
    CircleDashed: require("lucide-react").CircleDashed,
    ShoppingBag: require("lucide-react").ShoppingBag,
    BetweenHorizonalEnd: require("lucide-react").BetweenHorizonalEnd,
    Package: require("lucide-react").Package,
    Sparkles: require("lucide-react").Sparkles,
  };
  return icons[iconName] || icons.Square;
}
