/**
 * Localized Cost Estimate Page - Cost × City pSEO
 * Pattern: /cost/{project}/l/{state}/{city}
 * Generates location-specific cost estimate pages
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getProjectCostData, calculateProjectCost, projectCosts } from "@/data/cost-estimates";
import { getExtendedCityData, extendedCities } from "@/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { MapPin, DollarSign, TrendingUp, Calculator } from "lucide-react";

interface LocalizedCostPageProps {
  params: Promise<{
    projectId: string;
    stateSlug: string;
    citySlug: string;
  }>;
}

export async function generateStaticParams() {
  const params: Array<{
    projectId: string;
    stateSlug: string;
    citySlug: string;
  }> = [];

  // Generate combinations for all projects and cities
  for (const project of projectCosts) {
    for (const city of extendedCities) {
      params.push({
        projectId: project.id,
        stateSlug: city.stateSlug,
        citySlug: city.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: LocalizedCostPageProps): Promise<Metadata> {
  const { projectId, stateSlug, citySlug } = await params;

  const project = getProjectCostData(projectId);
  const city = getExtendedCityData(stateSlug, citySlug);

  if (!project || !city) {
    return { title: "Cost Estimate Not Found" };
  }

  // All current cost projects are concrete — centralize material multiplier here
  const materialMultiplier = city.materialCosts.concrete;
  const localMin = Math.round(project.nationalAverage.min * city.laborRate * materialMultiplier);
  const localMax = Math.round(project.nationalAverage.max * city.laborRate * materialMultiplier);

  return {
    title: `${project.name} Cost in ${city.city}, ${city.stateAbbr} ${new Date().getFullYear().toString()}: $${localMin.toLocaleString()} - $${localMax.toLocaleString()}`,
    description: `How much does a ${project.name.toLowerCase()} cost in ${city.city}, ${city.stateAbbr}? Local average is $${localMin.toLocaleString()} - $${localMax.toLocaleString()}. Get detailed cost breakdown with local pricing.`,
  };
}

export default async function LocalizedCostPage({ params }: LocalizedCostPageProps) {
  const { projectId, stateSlug, citySlug } = await params;

  const project = getProjectCostData(projectId);
  const city = getExtendedCityData(stateSlug, citySlug);

  if (!project || !city) {
    notFound();
  }

  // Calculate local costs
  const materialMultiplier = city.materialCosts.concrete;
  const localMin = Math.round(project.nationalAverage.min * city.laborRate * materialMultiplier);
  const localMax = Math.round(project.nationalAverage.max * city.laborRate * materialMultiplier);
  const nationalAvg = (project.nationalAverage.min + project.nationalAverage.max) / 2;
  const localAvg = (localMin + localMax) / 2;
  const diffPercent = Math.round(((localAvg - nationalAvg) / nationalAvg) * 100);

  // Calculate costs by size with local pricing
  const localSizeCosts = project.sizeCategories.map((size) => ({
    ...size,
    avgCost: Math.round(size.avgCost * city.laborRate * materialMultiplier),
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-secondary-600 mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/cost/${projectId}`} className="hover:text-primary">{project.name}</Link>
        <span className="mx-2">/</span>
        <span className="text-secondary-900">{city.city}, {city.stateAbbr}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-secondary-600 mb-2">
          <MapPin className="w-4 h-4" />
          {city.city}, {city.stateAbbr} Pricing
        </div>
        <h1 className="text-3xl font-bold text-secondary-900 mb-2">
          {project.name} Cost in {city.city}, {city.stateAbbr}
        </h1>
        <p className="text-secondary-600">
          Local pricing guide with {city.city}-specific labor and material costs
        </p>
      </div>

      {/* Local Cost Summary */}
      <Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-secondary-900 mb-2">
                {city.city} Average Cost
              </h2>
              <div className="text-4xl font-bold text-primary mb-1">
                ${localMin.toLocaleString()} - ${localMax.toLocaleString()}
              </div>
              <p className="text-secondary-600">
                {diffPercent > 0 ? `+${diffPercent}%` : diffPercent} vs. national average
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost Factors */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm text-secondary-600">Labor Rate</span>
            </div>
            <div className="text-2xl font-bold">
              {city.laborRate > 1 ? "+" : ""}{Math.round((city.laborRate - 1) * 100)}%
            </div>
            <p className="text-xs text-secondary-500">vs. national avg</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-secondary-600">Material Cost</span>
            </div>
            <div className="text-2xl font-bold">
              {materialMultiplier > 1 ? "+" : ""}{Math.round((materialMultiplier - 1) * 100)}%
            </div>
            <p className="text-xs text-secondary-500">concrete multiplier</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-orange-600" />
              <span className="text-sm text-secondary-600">Climate</span>
            </div>
            <div className="text-xl font-bold capitalize">
              {city.climate.replace("-", " ")}
            </div>
            <p className="text-xs text-secondary-500">affects construction</p>
          </CardContent>
        </Card>
      </div>

      {/* Cost by Size - Local */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Local Cost by Project Size</CardTitle>
          <CardDescription>{city.city} pricing for common project sizes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {localSizeCosts.map((size, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg"
              >
                <div>
                  <div className="font-semibold text-secondary-900">{size.name}</div>
                  <div className="text-sm text-secondary-600">{size.sqft} sq ft</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">
                    ${size.avgCost.toLocaleString()}
                  </div>
                  <div className="text-sm text-secondary-600">{city.city} avg</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Local Considerations */}
      {city.considerations?.concrete && (
        <Card className="mb-8 bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-900">{city.city} Construction Considerations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {city.considerations.concrete.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 text-amber-800">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2" />
                  {tip}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Seasonal Factors */}
      {city.seasonalFactors && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Seasonal Construction Factors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-secondary-700">{city.seasonalFactors}</p>
          </CardContent>
        </Card>
      )}

      {/* Calculator CTA */}
      <Card className="mb-8 bg-gradient-to-r from-primary to-primary/80 text-white">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Get Exact Cost for Your Project</h3>
              <p className="opacity-90">Use our calculator with your specific dimensions</p>
            </div>
            <Link
              href="/concrete/slab"
              className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-secondary-50 transition-colors whitespace-nowrap flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              Use Calculator
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Nearby Cities */}
      <div>
        <h2 className="text-xl font-bold text-secondary-900 mb-4">Nearby Cities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {extendedCities
            .filter((c) => c.stateSlug === stateSlug && c.slug !== citySlug)
            .slice(0, 8)
            .map((nearby) => (
              <Link
                key={nearby.slug}
                href={`/cost/${projectId}/l/${stateSlug}/${nearby.slug}`}
                className="p-3 bg-white border border-secondary-200 rounded-lg hover:border-primary transition-colors"
              >
                <div className="font-medium text-secondary-900">{nearby.city}</div>
                <div className="text-xs text-secondary-500">View local pricing</div>
              </Link>
            ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-secondary-200">
          <p className="text-sm text-secondary-500">
            Cost estimates are for planning purposes only. Actual costs vary by site conditions,
            contractor rates, and material availability. Verify pricing with local suppliers and licensed contractors.
          </p>
          <p className="text-xs text-secondary-400 mt-2">Last updated: May 2026</p>
        </div>
      </div>
    </div>
  );
}
