/**
 * Dimensions Hub Page - Standard dimension guides for construction
 */
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { getAllDimensionGuides } from "@/data";
import { Ruler, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Standard Dimensions Guide | BuildCost.site",
  description: "Standard dimensions for concrete slabs, driveways, patios, and more. Find common sizes and their material requirements.",
};

export default function DimensionsHubPage() {
  const dimensionGuides = getAllDimensionGuides();

  // Group by category
  const byCategory = dimensionGuides.reduce((acc, guide) => {
    if (!acc[guide.category]) {
      acc[guide.category] = [];
    }
    acc[guide.category].push(guide);
    return acc;
  }, {} as Record<string, typeof dimensionGuides>);

  const categoryLabels: Record<string, { title: string; description: string; color: string }> = {
    "concrete": {
      title: "Concrete Slabs",
      description: "Standard slab dimensions for garages, patios, sheds, and more",
      color: "bg-primary"
    },
    "driveway": {
      title: "Driveways",
      description: "Common driveway dimensions for different vehicle configurations",
      color: "bg-green-600"
    },
    "outdoor": {
      title: "Outdoor Spaces",
      description: "Patio, deck, and pool deck standard sizes",
      color: "bg-blue-600"
    },
    "footing": {
      title: "Footings & Foundations",
      description: "Standard footing dimensions for various structures",
      color: "bg-amber-600"
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Standard Construction Dimensions
        </h1>
        <p className="text-xl text-secondary-600">
          Find common dimensions and material requirements for your projects
        </p>
      </div>

      {/* Info Banner */}
      <Card className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <Ruler className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-secondary-900 mb-2">
                Plan Your Project with Confidence
              </h2>
              <p className="text-secondary-700 text-sm">
                These standard dimensions serve as guidelines for common construction projects.
                Use them to estimate material needs and costs. Always check local building codes
                and requirements before starting construction.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Size Calculator Link */}
      <Card className="mb-12 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-secondary-900">
                Need a custom size?
              </h3>
              <p className="text-secondary-600 text-sm">
                Use our calculators to get exact material requirements for any dimensions
              </p>
            </div>
            <Link
              href="/concrete/slab"
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Go to Calculators
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Dimension Categories */}
      <div className="space-y-10">
        {Object.entries(byCategory).map(([category, guides]) => {
          const categoryInfo = categoryLabels[category] || {
            title: category,
            description: `${category} dimensions`,
            color: "bg-secondary-600"
          };

          return (
            <div key={category}>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4 flex items-center gap-3">
                <span className={`w-2 h-8 ${categoryInfo.color} rounded`}></span>
                {categoryInfo.title}
              </h2>
              {categoryInfo.description && (
                <p className="text-secondary-600 mb-4 ml-5">{categoryInfo.description}</p>
              )}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {guides.map((guide) => (
                  <Link key={guide.id} href={`/dimensions/${guide.slug}`}>
                    <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-secondary-900">{guide.name || guide.title}</h3>
                            {guide.alternativeNames && (
                              <p className="text-xs text-secondary-500 mt-1">
                                Also: {guide.alternativeNames}
                              </p>
                            )}
                          </div>
                          <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        </div>
                        <p className="text-sm text-secondary-600">{guide.description}</p>
                        <p className="text-xs text-secondary-500 mt-2">
                          {guide.dimensions.length} dimension option{guide.dimensions.length !== 1 ? "s" : ""}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Related Resources */}
      <div className="mt-16 pt-8 border-t border-secondary-200">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6">
          More Planning Resources
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/concrete/slab" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">Concrete Calculator</h3>
            <p className="text-sm text-secondary-600">Calculate any size</p>
          </Link>
          <Link href="/guide" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">How-To Guides</h3>
            <p className="text-sm text-secondary-600">Step-by-step help</p>
          </Link>
          <Link href="/compare" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">Material Compare</h3>
            <p className="text-sm text-secondary-600">Choose materials wisely</p>
          </Link>
          <Link href="/faq" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">FAQs</h3>
            <p className="text-sm text-secondary-600">Get answers</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
