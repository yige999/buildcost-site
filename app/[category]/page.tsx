import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Hammer,
  Home,
  Layers,
  Square,
  RectangleVertical,
  RectangleHorizontal,
  Minus,
  Circle,
  CircleDot,
  Grid3x3,
  MapPin,
  CreditCard,
  LayoutTemplate,
  Database,
  BoxSelect,
} from "lucide-react";
import { getAllCategories, getCalculatorsByCategory, categoryExists } from "@/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getCategoryBySlug } from "@/data";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);

  if (!cat) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${cat.name} | BuildCost.site`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  if (!categoryExists(category)) {
    notFound();
  }

  const cat = getCategoryBySlug(category);
  const calculators = getCalculatorsByCategory(category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: cat?.name || category }]} className="mb-8" />

      {/* Category Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          {cat?.name}
        </h1>
        <p className="text-lg text-secondary-600 max-w-3xl">
          {cat?.description}
        </p>
      </div>

      {/* Calculators Grid */}
      {calculators.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc) => {
            const Icon = getIcon(calc.icon);
            return (
              <Link key={calc.id} href={`/${category}/${calc.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {calc.name}
                    </CardTitle>
                    <CardDescription>{calc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-primary font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Open Calculator
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-secondary-500">
            No calculators available in this category yet. Check back soon!
          </p>
        </div>
      )}

      {/* Concrete-specific section */}
      {category === "concrete" && (
        <div className="mt-16 pt-8 border-t border-secondary-200">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">Popular Slab Sizes</h2>
          <p className="text-secondary-600 mb-6">
            Pre-calculated concrete needs for common slab dimensions.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { w: 10, d: 10, label: "10x10" },
              { w: 10, d: 12, label: "10x12" },
              { w: 12, d: 12, label: "12x12" },
              { w: 20, d: 20, label: "20x20" },
            ].map(({ w, d, label }) => (
              <Link
                key={label}
                href={`/size/${w}/x${d}/concrete/slab`}
                className="flex items-center gap-2 p-3 bg-white border border-secondary-200 rounded-lg hover:border-primary hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center text-primary text-sm font-bold group-hover:bg-primary/20 transition-colors">
                  {label}
                </div>
                <span className="text-sm font-medium text-secondary-700 group-hover:text-primary">
                  View concrete needs
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/cost/concrete-driveway"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View concrete cost guides
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      )}

      {/* More Coming Soon (non-concrete only) */}
      {category !== "concrete" && (
        <div className="mt-16 bg-secondary-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-secondary-900 mb-2">
            More Calculators Coming Soon
          </h3>
          <p className="text-secondary-600">
            We're constantly adding new calculators. Check back regularly for more
            tools.
          </p>
        </div>
      )}
    </div>
  );
}

function getIcon(iconName: string) {
  const icons: Record<string, any> = {
    Hammer,
    Home,
    Layers,
    Square,
    RectangleVertical,
    RectangleHorizontal,
    Minus,
    Circle,
    CircleDot,
    Grid3x3,
    MapPin,
    CreditCard,
    LayoutTemplate,
    Database,
    BoxSelect,
  };
  return icons[iconName] || Square;
}
