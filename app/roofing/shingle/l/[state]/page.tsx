import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCitiesByState, getUniqueStates, CityData } from "@/data/city-data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MapPin, Users } from "lucide-react";

interface StatePageProps {
  params: Promise<{
    state: string;
  }>;
}

/**
 * Generate static params for all states
 */
export async function generateStaticParams() {
  const states = getUniqueStates();
  return states.map((state) => ({
    state: state.stateSlug,
  }));
}

/**
 * Generate dynamic metadata for each state page
 */
export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const { state } = await params;
  const cities = getCitiesByState(state);

  if (cities.length === 0) {
    return {
      title: "State Not Found | BuildCost.site",
    };
  }

  const stateName = cities[0].state;

  return {
    title: `Roof Shingle Cost Calculators in ${stateName} - Local City Guides`,
    description: `Find accurate roofing cost estimates for cities in ${stateName}. Browse local pricing, climate considerations, and material recommendations.`,
  };
}

/**
 * Group cities by first letter for easier navigation
 */
function groupCitiesByLetter(cities: CityData[]) {
  const grouped: Record<string, CityData[]> = {};
  cities.forEach((city) => {
    const firstLetter = city.city[0].toUpperCase();
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = [];
    }
    grouped[firstLetter].push(city);
  });
  return grouped;
}

export default async function StatePage({ params }: StatePageProps) {
  const { state } = await params;
  const cities = getCitiesByState(state);

  if (cities.length === 0) {
    notFound();
  }

  const stateName = cities[0].state;
  const groupedCities = groupCitiesByLetter(cities);
  const allStates = getUniqueStates();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Roofing", href: "/roofing" },
          { label: "Shingle Calculator", href: "/roofing/shingle" },
          { label: stateName },
        ]}
        className="mb-8"
      />

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-3">
          Roof Shingle Calculators in {stateName}
        </h1>
        <p className="text-lg text-secondary-600">
          Find local roofing cost estimates for cities across {stateName}. Each
          city page includes local labor rates, climate-specific advice, and
          material recommendations.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
          <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-secondary-900">
            {cities.length}
          </div>
          <div className="text-sm text-secondary-600">Cities Covered</div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-secondary-900">
            {Math.round(
              cities.reduce((sum, city) => sum + city.laborRate * 100, 0) /
                cities.length
            )}
            %
          </div>
          <div className="text-sm text-secondary-600">
            Avg. Labor Rate vs National
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-secondary-900">
            {cities.filter((c) => c.climate === "hot-humid").length > 0
              ? "Hot & Humid"
              : cities.filter((c) => c.climate === "cold").length > 0
              ? "Cold Climate"
              : "Mixed Climate"}
          </div>
          <div className="text-sm text-secondary-600">Primary Climate</div>
        </div>
      </div>

      {/* Cities by Letter */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Browse by City</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(groupedCities)
              .sort()
              .map(([letter, cities]) => (
                <div key={letter}>
                  <h3 className="font-semibold text-secondary-900 mb-2 border-b border-secondary-200 pb-1">
                    {letter}
                  </h3>
                  <div className="space-y-1">
                    {cities.map((city) => (
                      <Link
                        key={`${city.stateSlug}-${city.slug}`}
                        href={`/roofing/shingle/l/${city.stateSlug}/${city.slug}`}
                        className="block text-sm text-secondary-600 hover:text-primary py-1"
                      >
                        {city.city}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* All States */}
      <Card>
        <CardHeader>
          <CardTitle>Other States</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            {allStates
              .filter((s) => s.stateSlug !== state)
              .map((stateInfo) => (
                <Link
                  key={stateInfo.stateSlug}
                  href={`/roofing/shingle/l/${stateInfo.stateSlug}`}
                  className="text-sm text-secondary-600 hover:text-primary py-1"
                >
                  {stateInfo.state}
                </Link>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
