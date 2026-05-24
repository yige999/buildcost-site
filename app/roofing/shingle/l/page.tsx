import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { getUniqueStates, topCities } from "@/data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MapPin, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Local Roof Shingle Calculators by City | BuildCost.site",
  description:
    "Find roof shingle cost calculators for your city. Get local pricing, climate-specific roofing advice, and accurate material estimates for your location.",
};

export default function LocalLandingPage() {
  const allStates = getUniqueStates();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Roofing", href: "/roofing" },
          { label: "Shingle Calculator", href: "/roofing/shingle" },
          { label: "Local Calculators" },
        ]}
        className="mb-8"
      />

      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Local Roof Shingle Calculators
        </h1>
        <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
          Find accurate roofing cost estimates for your city. Each local page includes
          climate-specific recommendations, adjusted labor rates, and material
          suggestions for your area.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
          <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
          <div className="text-3xl font-bold text-secondary-900 mb-1">
            {topCities.length}+
          </div>
          <div className="text-secondary-600">Major Cities Covered</div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-secondary-900 mb-1">
            {allStates.length}
          </div>
          <div className="text-secondary-600">States Available</div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-secondary-900 mb-1">5</div>
          <div className="text-secondary-600">Climate Zones</div>
        </div>
      </div>

      {/* States Grid */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Browse by State</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {allStates.map((state) => {
              // Count cities in this state
              const cityCount = topCities.filter(
                (c) => c.stateSlug === state.stateSlug
              ).length;

              return (
                <Link
                  key={state.stateSlug}
                  href={`/roofing/shingle/l/${state.stateSlug}`}
                  className="flex items-center justify-between p-4 bg-white border border-secondary-200 rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <span className="font-medium text-secondary-900 group-hover:text-primary">
                    {state.state}
                  </span>
                  <span className="text-sm text-secondary-500 bg-secondary-100 px-2 py-1 rounded-full">
                    {cityCount} cities
                  </span>
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Top Cities Section */}
      <Card>
        <CardHeader>
          <CardTitle>Most Popular Cities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {topCities.slice(0, 16).map((city) => (
              <Link
                key={`${city.stateSlug}-${city.slug}`}
                href={`/roofing/shingle/l/${city.stateSlug}/${city.slug}`}
                className="flex items-center gap-2 p-3 bg-white border border-secondary-200 rounded-lg hover:border-primary hover:shadow-md transition-all group"
              >
                <MapPin className="w-4 h-4 text-secondary-400 group-hover:text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-medium text-secondary-900 text-sm group-hover:text-primary truncate">
                    {city.city}
                  </div>
                  <div className="text-xs text-secondary-500">{city.state}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-secondary-400 group-hover:text-primary ml-auto flex-shrink-0" />
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
