/**
 * Localized Calculator Page - 3D SEO Matrix
 * Pattern: /{category}/{tool}/l/{state}/{city}
 * Generates location-specific calculator pages with:
 * - Local pricing
 * - Climate-specific recommendations
 * - Regional building codes
 * - Local contractors CTA
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { Metadata } from "next";
import {
  calculatorExists,
  getCalculatorBySlug,
  getAllCalculators,
  getCalculatorsByCategory,
  getExtendedCityData,
  getCategoryBySlug,
  getFAQs,
  commonFAQs,
  extendedCities,
} from "@/data";
import { CalculatorFactory } from "@/components/calculator/CalculatorFactory";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOBlock } from "@/components/seo/SEOBlock";
import { SoftwareAppSchema, FAQPageSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { MapPin, Thermometer, DollarSign, Info, Hammer, Users } from "lucide-react";

interface LocalizedPageProps {
  params: Promise<{
    category: string;
    tool: string;
    stateSlug: string;
    citySlug: string;
  }>;
}

/**
 * Generate static params for all city x calculator combinations
 * This creates thousands of location-specific pages
 */
export async function generateStaticParams() {
  const calculators = getAllCalculators();
  const params: Array<{
    category: string;
    tool: string;
    stateSlug: string;
    citySlug: string;
  }> = [];

  // Generate combinations for all cities and calculators
  for (const calc of calculators) {
    for (const city of extendedCities) {
      params.push({
        category: calc.category,
        tool: calc.slug,
        stateSlug: city.stateSlug,
        citySlug: city.slug,
      });
    }
  }

  return params;
}

/**
 * Generate location-specific metadata
 */
export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { category, tool, stateSlug, citySlug } = await params;

  if (!calculatorExists(category, tool)) {
    return { title: "Calculator Not Found" };
  }

  const calc = getCalculatorBySlug(category, tool);
  const city = getExtendedCityData(stateSlug, citySlug);

  if (!city || !calc) {
    return { title: "Page Not Found" };
  }

  const baseTitle = calc.seoTitle || `${calc.name} | BuildCost.site`;
  const locationTitle = baseTitle.replace(" | BuildCost.site", ` in ${city.city}, ${city.stateAbbr} | BuildCost.site`);

  return {
    title: locationTitle,
    description: `Calculate ${calc.name.toLowerCase()} costs in ${city.city}, ${city.stateAbbr}. Local pricing, climate-specific recommendations, and material estimates.`,
    openGraph: {
      title: locationTitle,
      description: `Get accurate ${calc.name.toLowerCase()} estimates for ${city.city}, ${city.stateAbbr}. Includes local material costs and labor rates.`,
      type: "website",
    },
  };
}

export default async function LocalizedCalculatorPage({ params }: LocalizedPageProps) {
  const { category, tool, stateSlug, citySlug } = await params;

  if (!calculatorExists(category, tool)) {
    notFound();
  }

  const calc = getCalculatorBySlug(category, tool);
  const cat = getCategoryBySlug(category);
  const city = getExtendedCityData(stateSlug, citySlug);

  if (!city || !calc) {
    notFound();
  }

  const calculatorId = `${category}-${tool}`;
  const faqs = getFAQs(calculatorId);
  const allFAQs = [...faqs, ...commonFAQs];

  // Calculate local costs — use category-specific material multiplier
  const materialKey = category === "roofing" ? "roofing" : category === "flooring" ? "flooring" : "concrete";
  const nationalAvgCost = 100; // Base cost
  const localMaterialCost = Math.round(nationalAvgCost * city.materialCosts[materialKey]);
  const localLaborCost = Math.round(nationalAvgCost * city.laborRate);

  // Category-specific local considerations
  const localConsiderations =
    category === "roofing"
      ? city.considerations?.roofing
      : category === "concrete"
        ? city.considerations?.concrete
        : city.considerations?.general;

  return (
    <>
      {/* Schema.org JSON-LD */}
      <SoftwareAppSchema calculator={calc} category={category} />
      <FAQPageSchema faqs={allFAQs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: cat?.name || category, href: `/${category}` },
          { name: calc.name, href: `/${category}/${tool}` },
          { name: `${city.city}, ${city.stateAbbr}`, href: `/${category}/${tool}/l/${stateSlug}/${citySlug}` },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: cat?.name || category, href: `/${category}` },
            { label: calc.name, href: `/${category}/${tool}` },
            { label: `${city.city}, ${city.stateAbbr}` },
          ]}
          className="mb-8"
        />

        {/* Location Header */}
        <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-secondary-900">
                {calc.name} in {city.city}, {city.stateAbbr}
              </h1>
              <p className="text-secondary-600">Local pricing and climate-specific recommendations</p>
            </div>
          </div>
        </div>

        {/* Local Cost Summary */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <CardTitle className="text-base">Local Material Costs</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {localMaterialCost > nationalAvgCost ? "+" : ""}{((localMaterialCost / nationalAvgCost - 1) * 100).toFixed(0)}%
              </div>
              <p className="text-sm text-secondary-600">vs. national average</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <CardTitle className="text-base">Local Labor Costs</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {city.laborRate > 1 ? "+" : ""}{((city.laborRate - 1) * 100).toFixed(0)}%
              </div>
              <p className="text-sm text-secondary-600">vs. national average</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-orange-600" />
                <CardTitle className="text-base">Climate Zone</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold capitalize text-orange-600">
                {city.climate.replace("-", " ")}
              </div>
              <p className="text-sm text-secondary-600">Frost line: {city.frostLineDepth}"</p>
            </CardContent>
          </Card>
        </div>

        {/* Climate Tips */}
        <Card className="mb-8 bg-amber-50 border-amber-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-600" />
              <CardTitle className="text-amber-900">Climate-Specific Recommendations for {city.city}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-amber-800 mb-4">{city.climateTip}</p>
            {localConsiderations && localConsiderations.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold text-amber-900">{cat?.name || category} Considerations:</h4>
                <ul className="list-disc list-inside text-amber-800 space-y-1">
                  {localConsiderations.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Calculator */}
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          }
        >
          <CalculatorFactory config={calc} localLaborRate={city.laborRate} />
        </Suspense>

        {/* Building Codes Section */}
        {city.buildingCodes && (
          <Card className="mt-8">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Hammer className="w-5 h-5 text-secondary-600" />
                <CardTitle>Local Building Codes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-secondary-700">{city.buildingCodes}</p>
              <p className="text-sm text-secondary-500 mt-2">
                Always verify requirements with your local building department before starting construction.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Seasonal Factors */}
        {city.seasonalFactors && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Seasonal Construction Factors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-secondary-700">{city.seasonalFactors}</p>
            </CardContent>
          </Card>
        )}

        {/* Nearby Cities */}
        <div className="mt-16 pt-8 border-t border-secondary-200">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Nearby Cities in {city.state}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {extendedCities
              .filter((c) => c.stateSlug === stateSlug && c.slug !== citySlug)
              .slice(0, 8)
              .map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/${category}/${tool}/l/${stateSlug}/${nearbyCity.slug}`}
                  className="flex items-center gap-2 p-3 bg-white border border-secondary-200 rounded-lg hover:border-primary hover:shadow-md transition-all group"
                >
                  <MapPin className="w-4 h-4 text-secondary-400 group-hover:text-primary" />
                  <div>
                    <div className="font-medium text-secondary-900 text-sm group-hover:text-primary">
                      {nearbyCity.city}
                    </div>
                    <div className="text-xs text-secondary-500">{nearbyCity.stateAbbr}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Find Local Contractors CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary to-primary/80 rounded-xl text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Planning a Project in {city.city}?</h2>
          <p className="mb-6 opacity-90">
            Use these calculator results to compare quotes from local suppliers or licensed contractors in {city.stateAbbr}.
          </p>
          <Link
            href={`/${category}/${tool}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-secondary-50 transition-colors"
          >
            Open Calculator
            <MapPin className="w-4 h-4" />
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-secondary-200">
          <p className="text-sm text-secondary-500">
            These estimates use {city.city}-specific labor and material rates for planning purposes only.
            Actual costs vary by site conditions, contractor rates, and material availability. Verify with local suppliers and contractors before purchasing.
          </p>
          <p className="text-xs text-secondary-400 mt-2">Last updated: May 2026</p>
        </div>
      </div>
    </>
  );
}
