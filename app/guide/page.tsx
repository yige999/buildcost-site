/**
 * Guide Hub Page - All guides index
 */
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { getAllGuides, getGuidesByCategory } from "@/data";
import { BookOpen, Thermometer, Wrench, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Construction Guides & Tutorials | BuildCost.site",
  description: "Complete guides for concrete construction, seasonal pouring, DIY projects, and maintenance. Expert tips for homeowners and contractors.",
};

export default async function GuidesHubPage() {
  const allGuides = getAllGuides();
  const seasonalGuides = getGuidesByCategory("seasonal");
  const howToGuides = getGuidesByCategory("how-to");
  const maintenanceGuides = getGuidesByCategory("maintenance");

  const categoryIcons: Record<string, React.ComponentType> = {
    seasonal: Thermometer,
    "how-to": Wrench,
    maintenance: Shield,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Construction Guides & Tutorials
        </h1>
        <p className="text-xl text-secondary-600">
          Expert guides for concrete projects, seasonal considerations, and maintenance
        </p>
      </div>

      {/* Seasonal Guides */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
          <Thermometer className="w-6 h-6 text-orange-500" />
          Seasonal Guides
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seasonalGuides.map((guide) => (
            <Link key={guide.id} href={`/guide/${guide.slug}`}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Thermometer className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-secondary-900">{guide.title}</h3>
                  </div>
                  <p className="text-sm text-secondary-600">{guide.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* How-To Guides */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
          <Wrench className="w-6 h-6 text-blue-500" />
          How-To Guides
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {howToGuides.map((guide) => (
            <Link key={guide.id} href={`/guide/${guide.slug}`}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Wrench className="w-4 h-4 text-blue-500" />
                    <h3 className="font-semibold text-secondary-900">{guide.title}</h3>
                  </div>
                  <p className="text-sm text-secondary-600">{guide.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Maintenance Guides */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
          <Shield className="w-6 h-6 text-green-500" />
          Maintenance Guides
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {maintenanceGuides.map((guide) => (
            <Link key={guide.id} href={`/guide/${guide.slug}`}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <h3 className="font-semibold text-secondary-900">{guide.title}</h3>
                  </div>
                  <p className="text-sm text-secondary-600">{guide.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
