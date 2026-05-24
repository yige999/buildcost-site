/**
 * Materials Hub Page - All material guides index
 */
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { getAllMaterialGuides } from "@/data";
import { Package, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Building Materials Guide: Compare & Choose | BuildCost.site",
  description: "Complete guides to concrete types, pavers, gravel, and other construction materials. Compare options, costs, and best uses.",
};

export default function MaterialsHubPage() {
  const guides = getAllMaterialGuides();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Building Materials Guide
        </h1>
        <p className="text-xl text-secondary-600">
          Expert guides to help you choose the right materials for your construction project
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <Link key={guide.id} href={`/materials/${guide.slug}`}>
            <Card className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  {guide.title}
                </CardTitle>
                <CardDescription>{guide.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-secondary-600 mb-4">
                  {guide.description}
                </p>
                <div className="text-sm text-secondary-900 font-semibold">
                  {guide.types.length} Material Types
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {guide.types.slice(0, 4).map((type) => (
                    <span
                      key={type.name}
                      className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded"
                    >
                      {type.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Material Categories */}
      <div className="mt-16 pt-8 border-t border-secondary-200">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6">
          Browse by Category
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/concrete" className="group">
            <Card className="hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 group-hover:text-primary">Concrete</h3>
                    <p className="text-sm text-secondary-600">Calculators & guides</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
