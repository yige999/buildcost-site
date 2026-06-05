import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalculatorFactory } from "@/components/calculator/CalculatorFactory";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { calculatorExists, getCalculatorBySlug } from "@/data";
import { topCities, getCityData, getCitiesByState, getUniqueStates } from "@/data/city-data";
import { MapPin, DollarSign, Thermometer, Users, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

interface CityPageProps {
  params: Promise<{
    state: string;
    city: string;
  }>;
}

/**
 * Generate static params for all cities
 * This pre-builds all city pages for optimal performance
 */
export async function generateStaticParams() {
  return topCities.map((city) => ({
    state: city.stateSlug,
    city: city.slug,
  }));
}

/**
 * Generate dynamic metadata for each city page
 */
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { state, city } = await params;
  const cityData = getCityData(state, city);

  if (!cityData) {
    return {
      title: "City Not Found",
    };
  }

  const currentYear = new Date().getFullYear();

  return {
    title: `Roof Shingle Cost Calculator in ${cityData.city}, ${cityData.state} (${currentYear} Local Prices)`,
    description: `Calculate accurate roofing costs for ${cityData.city}, ${cityData.state}. Includes local labor rates for ${cityData.zip} and ${cityData.climate} climate advice.`,
    keywords: [
      `roof shingle calculator ${cityData.city}`,
      `roofing cost ${cityData.city}`,
      `shingle estimator ${cityData.state}`,
      `roof replacement ${cityData.city}`,
      `roofing materials ${cityData.zip}`,
    ].join(", "),
  };
}

/**
 * Get local cost multiplier display
 */
function formatLaborRate(rate: number): string {
  const percentage = Math.round((rate - 1) * 100);
  if (percentage > 0) {
    return `${percentage}% above national average`;
  } else if (percentage < 0) {
    return `${Math.abs(percentage)}% below national average`;
  }
  return "National average";
}

/**
 * Get climate description
 */
function getClimateDescription(climate: string): string {
  const descriptions: Record<string, string> = {
    "hot-humid": "Hot & Humid - High moisture requires algae-resistant materials",
    "hot-arid": "Hot & Dry - Reflective cool roofs recommended",
    "cold": "Cold & Snowy - Ice dam protection essential",
    "temperate": "Mild Coastal - Corrosion resistance important",
    "mixed": "Variable Climate - Versatile materials needed",
  };
  return descriptions[climate] || "Standard climate conditions";
}

export default async function CityPage({ params }: CityPageProps) {
  const { state, city } = await params;
  const cityData = getCityData(state, city);

  if (!cityData) {
    notFound();
  }

  // Get the shingle calculator config
  const calculator = getCalculatorBySlug("roofing", "shingle");

  if (!calculator) {
    notFound();
  }

  // Get nearby cities in the same state
  const nearbyCities = getCitiesByState(state)
    .filter((c) => c.slug !== city)
    .slice(0, 6);

  // Get all states for navigation
  const allStates = getUniqueStates();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Roofing", href: "/roofing" },
          { label: "Shingle Calculator", href: "/roofing/shingle" },
          { label: cityData.state, href: `/roofing/shingle/l/${state}` },
          { label: cityData.city },
        ]}
        className="mb-8"
      />

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-3">
          Roofing Cost Estimator for {cityData.city} Homeowners
        </h1>
        <p className="text-lg text-secondary-600">
          Get accurate material estimates with local {cityData.state} pricing
          adjustments for {cityData.zip}.
        </p>
      </div>

      {/* Local Info Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {/* Climate Info */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Thermometer className="w-5 h-5 text-amber-600" />
            <h3 className="font-semibold text-secondary-900">Local Climate</h3>
          </div>
          <p className="text-sm text-secondary-700">
            {getClimateDescription(cityData.climate)}
          </p>
        </div>

        {/* Labor Rate Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-secondary-900">Local Labor Costs</h3>
          </div>
          <p className="text-sm text-secondary-700">
            {formatLaborRate(cityData.laborRate)} - Adjusted in estimates
          </p>
        </div>

        {/* Location Info */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-secondary-900">
              {cityData.city}, {cityData.state}
            </h3>
          </div>
          <p className="text-sm text-secondary-700">ZIP: {cityData.zip}</p>
        </div>
      </div>

      {/* Climate-Specific Advice */}
      <div className="bg-secondary-50 border border-secondary-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-secondary-900 mb-3">
          Roofing Considerations for {cityData.city}, {cityData.state}
        </h2>
        <p className="text-secondary-700 mb-4">
          <strong>Local Expert Tip:</strong> {cityData.climateTip}
        </p>
        <ul className="space-y-2">
          {cityData.considerations.map((consideration, index) => (
            <li key={index} className="flex items-start gap-2 text-secondary-700">
              <span className="text-primary mt-1">•</span>
              <span>{consideration}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Calculator Section */}
      <div className="mb-12">
        {/* Pass local labor rate as a prop to adjust pricing */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-secondary-900">
            Calculate Your Roofing Materials
          </h2>
          <div className="text-sm text-secondary-600 bg-secondary-100 px-3 py-1 rounded-full">
            Prices adjusted for {cityData.city} local rates
          </div>
        </div>
        <CalculatorFactory config={calculator} localLaborRate={cityData.laborRate} />
      </div>

      {/* Cost Explanation */}
      <div className="bg-white border border-secondary-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold text-secondary-900 mb-4">
          Understanding {cityData.city} Roofing Costs
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-secondary-900 mb-2">
              Material Costs
            </h4>
            <p className="text-sm text-secondary-600 mb-3">
              Material prices in {cityData.city} are approximately{" "}
              {cityData.basePriceOffset > 0 ? "+" : ""}
              {cityData.basePriceOffset}% different from the national average due
              to local supply and transportation factors.
            </p>
            <h4 className="font-medium text-secondary-900 mb-2">
              Labor Costs
            </h4>
            <p className="text-sm text-secondary-600">
              Local roofing contractors in {cityData.city} charge{" "}
              {formatLaborRate(cityData.laborRate)}. This reflects local wage
              rates, competition, and cost of living in {cityData.state}.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-secondary-900 mb-2">
              When to Get Multiple Quotes
            </h4>
            <ul className="text-sm text-secondary-600 space-y-1">
              <li>• Always get 3+ estimates for comparison</li>
              <li>• Verify contractor license and insurance</li>
              <li>• Check local {cityData.state} Better Business Bureau</li>
              <li>• Ask about manufacturer warranties</li>
              <li>• Confirm permit requirements for {cityData.city}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-secondary-900 mb-4">
            Other Cities in {cityData.state}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {nearbyCities.map((nearbyCity) => (
              <Link
                key={`${nearbyCity.stateSlug}-${nearbyCity.slug}`}
                href={`/roofing/shingle/l/${nearbyCity.stateSlug}/${nearbyCity.slug}`}
                className="flex items-center justify-between p-3 bg-white border border-secondary-200 rounded-lg hover:border-primary hover:shadow-md transition-all group"
              >
                <span className="text-secondary-700 group-hover:text-primary">
                  {nearbyCity.city}
                </span>
                <ArrowRight className="w-4 h-4 text-secondary-400 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All States Navigation */}
      <Card>
        <CardHeader>
          <CardTitle>Browse Roofing Calculators by State</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            {allStates.map((stateInfo) => (
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
