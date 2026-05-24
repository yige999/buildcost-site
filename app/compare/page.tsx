/**
 * Comparison Hub Page - All material and project comparisons
 */
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { getAllComparisons } from "@/data";
import { Scale, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Comparisons: Materials & Projects | BuildCost.site",
  description: "Compare construction materials and project types. Make informed decisions between concrete, pavers, asphalt, gravel, and more.",
};

export default function ComparisonsHubPage() {
  const comparisons = getAllComparisons();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Material & Project Comparisons
        </h1>
        <p className="text-xl text-secondary-600">
          Compare costs, durability, and suitability of different construction materials
        </p>
      </div>

      {/* Info Banner */}
      <Card className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <Scale className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-secondary-900 mb-2">
                Make Informed Decisions
              </h2>
              <p className="text-secondary-700 text-sm">
                Our detailed comparisons help you choose the right material for your project based on cost,
                durability, maintenance requirements, and local conditions. Each comparison includes pros,
                cons, cost ranges, and best-use scenarios.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Categories */}
      <div className="space-y-8">
        {/* Concrete Comparisons */}
        <div>
          <h2 className="text-2xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-8 bg-primary rounded"></span>
            Concrete Options
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {comparisons
              .filter(c => c.category === "concrete")
              .map((comparison) => (
                <Link key={comparison.id} href={`/compare/${comparison.slug}`}>
                  <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-lg text-secondary-900 mb-1">
                            {comparison.option1} vs {comparison.option2}
                          </h3>
                          <p className="text-sm text-secondary-600 line-clamp-2">
                            {comparison.summary}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>

        {/* Surface Comparisons */}
        <div>
          <h2 className="text-2xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-8 bg-green-600 rounded"></span>
            Outdoor Surfaces
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {comparisons
              .filter(c => c.category === "surface")
              .map((comparison) => (
                <Link key={comparison.id} href={`/compare/${comparison.slug}`}>
                  <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-lg text-secondary-900 mb-1">
                            {comparison.option1} vs {comparison.option2}
                          </h3>
                          <p className="text-sm text-secondary-600 line-clamp-2">
                            {comparison.summary}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-green-600" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>

        {/* Material Comparisons */}
        <div>
          <h2 className="text-2xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-8 bg-amber-500 rounded"></span>
            Building Materials
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {comparisons
              .filter(c => c.category === "material")
              .map((comparison) => (
                <Link key={comparison.id} href={`/compare/${comparison.slug}`}>
                  <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-lg text-secondary-900 mb-1">
                            {comparison.option1} vs {comparison.option2}
                          </h3>
                          <p className="text-sm text-secondary-600 line-clamp-2">
                            {comparison.summary}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-amber-600" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-16 pt-8 border-t border-secondary-200">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6">
          Related Resources
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/materials" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">Material Guides</h3>
            <p className="text-sm text-secondary-600">Detailed material info</p>
          </Link>
          <Link href="/guide" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">How-To Guides</h3>
            <p className="text-sm text-secondary-600">Step-by-step tutorials</p>
          </Link>
          <Link href="/diy-vs-pro" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">DIY vs Pro</h3>
            <p className="text-sm text-secondary-600">Cost comparisons</p>
          </Link>
          <Link href="/faq" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">FAQs</h3>
            <p className="text-sm text-secondary-600">Common questions</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
