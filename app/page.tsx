import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowRight,
  Calculator,
  DollarSign,
  Hammer,
  MapPin,
  Ruler,
  Scale,
  Layers,
  RectangleHorizontal,
  RectangleVertical,
  BoxSelect,
  Car,
  StretchHorizontal,
  CircleDashed,
  CircleDot,
  LayoutTemplate,
  Home,
  Square,
  Minus,
  Circle,
  Grid3x3,
  CreditCard,
  Database,
  Package,
  Sparkles,
  ShoppingBag,
  BetweenHorizonalEnd,
} from "lucide-react";
import { getAllCategories } from "@/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const colorClasses = {
  blue: "bg-blue-100 text-blue-700",
  amber: "bg-amber-100 text-amber-700",
  green: "bg-green-100 text-green-700",
  red: "bg-red-100 text-red-700",
};

const concreteCalculators = [
  {
    title: "Concrete Slab Calculator",
    description: "Estimate cubic yards, bags, and cost for any slab project.",
    href: "/concrete/slab",
    icon: LayoutTemplate,
  },
  {
    title: "Footing Calculator",
    description: "Calculate concrete for deck footings, post footings, and foundations.",
    href: "/concrete/footing",
    icon: BoxSelect,
  },
  {
    title: "Wall Calculator",
    description: "Estimate poured concrete for retaining walls, basement walls.",
    href: "/concrete/wall",
    icon: RectangleHorizontal,
  },
  {
    title: "Driveway Calculator",
    description: "Plan concrete volume, control joints, and reinforcement needs.",
    href: "/concrete/driveway",
    icon: Car,
  },
];

const commonSizes = [
  { label: "10×10 Slab", href: "/size/10/x10/concrete/slab" },
  { label: "10×12 Slab", href: "/size/10/x12/concrete/slab" },
  { label: "12×12 Slab", href: "/size/12/x12/concrete/slab" },
  { label: "20×20 Slab", href: "/size/20/x20/concrete/slab" },
];

const resourceLinks = [
  {
    title: "Cost Guides",
    description: "Project cost ranges with local material and labor adjustments.",
    href: "/cost/concrete-driveway",
    icon: DollarSign,
  },
  {
    title: "Unit Conversions",
    description: "Convert cubic yards, cubic feet, square feet, bags, and more.",
    href: "/convert",
    icon: Scale,
  },
  {
    title: "Material Comparisons",
    description: "Compare concrete, pavers, asphalt, gravel, and other materials.",
    href: "/compare",
    icon: Ruler,
  },
  {
    title: "Local Estimates",
    description: "City-specific labor rates, material costs, and climate notes.",
    href: "/concrete/slab/l/california/los-angeles",
    icon: MapPin,
  },
];

export default function HomePage() {
  const categories = getAllCategories();

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-secondary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-200 mb-4">
                Free concrete calculators, cost guides &amp; local estimates
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Construction Calculators &amp; Cost Guides
              </h1>
              <p className="text-lg md:text-xl text-secondary-200 mb-8 max-w-2xl">
                Estimate concrete, roofing, and flooring materials in cubic yards,
                bags, bundles, and square feet. Includes waste factors, rebar
                layout, and 74 city-specific cost notes for U.S. projects.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/concrete/slab"
                  className="inline-flex items-center gap-2 bg-white text-secondary-950 px-6 py-3 rounded-lg font-semibold hover:bg-secondary-100 transition-colors"
                >
                  <Calculator className="w-5 h-5" />
                  Concrete Slab Calculator
                </Link>
                <Link
                  href="/cost/concrete-driveway"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Cost Guides
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="bg-white text-secondary-900 rounded-lg shadow-xl p-6">
              <h2 className="text-xl font-bold mb-4">Popular Concrete Calculators</h2>
              <div className="space-y-3">
                {concreteCalculators.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block border border-secondary-200 rounded-lg p-4 hover:border-primary hover:shadow-sm transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-secondary-900">
                              {item.title}
                            </h3>
                            <p className="text-sm text-secondary-600 mt-1">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-secondary-400 flex-shrink-0 mt-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          <StatItem value="17" label="Concrete Calculators" />
          <StatItem value="31" label="Total Calculators" />
          <StatItem value="73" label="U.S. City Pages" />
          <StatItem value="6" label="Cost Guides" />
          <StatItem value="20+" label="Project Guides" />
        </div>
      </section>

      {/* Popular Concrete Calculators */}
      <section className="bg-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-secondary-900 mb-3">
              Concrete Calculators
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl">
              Calculate concrete volume, bags, rebar, and cost for slabs, footings,
              walls, driveways, and more.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {concreteCalculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <Link key={calc.href} href={calc.href}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">{calc.title}</CardTitle>
                      <CardDescription>{calc.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-primary font-medium text-sm inline-flex items-center gap-1">
                        Calculate <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/concrete/rebar"
              className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
            >
              Rebar Calculator <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="mx-3 text-secondary-300">|</span>
            <Link
              href="/concrete/sonotube"
              className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
            >
              Sonotube Calculator <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="mx-3 text-secondary-300">|</span>
            <Link
              href="/concrete"
              className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
            >
              All Concrete Calculators <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Concrete Slab Quick Answers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-3">
            Concrete Slab Quick Answers
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl">
            Common slab sizes with pre-calculated concrete quantities, bag counts, and cost estimates.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {commonSizes.map((size) => (
            <Link key={size.href} href={size.href}>
              <Card className="h-full hover:shadow-md hover:border-primary transition-all text-center">
                <CardContent className="pt-6 pb-6">
                  <div className="text-2xl font-bold text-secondary-900 mb-1">
                    {size.label}
                  </div>
                  <span className="text-primary font-medium text-sm inline-flex items-center gap-1">
                    View estimate <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Browse by Category */}
      <section className="bg-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-secondary-900 mb-3">
              Browse by Category
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl">
              Calculators for concrete, roofing, and flooring projects.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = getIcon(category.icon);
              return (
                <Link key={category.slug} href={`/${category.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardHeader>
                      <div
                        className={cn(
                          "w-14 h-14 rounded-lg flex items-center justify-center mb-4",
                          colorClasses[category.color as keyof typeof colorClasses] ||
                            "bg-secondary-100 text-secondary-700"
                        )}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {category.name}
                      </CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-primary font-medium text-sm inline-flex items-center gap-2">
                        View calculators
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cost Planning Resources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-secondary-900 mb-3">
            Cost Planning Resources
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl">
            Use calculators for quantities, then compare materials, convert units,
            and review project cost ranges before contacting suppliers.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resourceLinks.map((resource) => {
            const Icon = resource.icon;
            return (
              <Link key={resource.href} href={resource.href}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-11 h-11 rounded-lg bg-secondary-100 text-secondary-700 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-3">Enter dimensions, get a material list.</h2>
            <p className="text-primary-100 text-lg max-w-2xl">
              Pick a calculator, input your measurements, and see quantities in
              the units your supplier uses — cubic yards, square feet, bundles,
              bags, or linear feet.
            </p>
          </div>
          <Link
            href="/concrete"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Start Calculating
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-secondary-500 text-center">
          All estimates are for planning purposes only. Verify quantities, specifications,
          and prices with a local supplier or contractor before purchasing materials.
        </p>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div>
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-secondary-900 mb-2">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-secondary-900">{value}</div>
      <div className="text-sm text-secondary-500 mt-1">{label}</div>
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
  return icons[iconName] || Hammer;
}
