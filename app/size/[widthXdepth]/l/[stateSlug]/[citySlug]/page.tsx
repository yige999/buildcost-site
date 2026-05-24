/**
 * Answer Engine × City Page
 * Pattern: /size/{W}x{D}/l/{state}/{city}
 * Targets queries like "how much concrete for 10x10 slab in [city]"
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  extendedCities,
  getExtendedCityData,
} from "@/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Calculator, MapPin, DollarSign, Info } from "lucide-react";

interface SizeCityPageProps {
  params: Promise<{
    widthXdepth: string;
    stateSlug: string;
    citySlug: string;
  }>;
}

// Common sizes to generate pages for
const COMMON_SIZES = [
  { width: 8, depth: 8 },
  { width: 10, depth: 10 },
  { width: 10, depth: 12 },
  { width: 12, depth: 12 },
  { width: 12, depth: 14 },
  { width: 14, depth: 14 },
  { width: 15, depth: 15 },
  { width: 16, depth: 16 },
  { width: 16, depth: 20 },
  { width: 20, depth: 20 },
  { width: 20, depth: 24 },
  { width: 24, depth: 24 },
  { width: 24, depth: 30 },
  { width: 30, depth: 30 },
  { width: 30, depth: 40 },
  { width: 40, depth: 40 },
  { width: 40, depth: 50 },
  { width: 40, depth: 60 },
];

// Slab thickness by type (inches)
const SLAB_THICKNESS = {
  "patio": 4,
  "driveway": 5,
  "garage": 6,
  "shed": 4,
  "walkway": 4,
};

export async function generateStaticParams() {
  const params: Array<{
    widthXdepth: string;
    stateSlug: string;
    citySlug: string;
  }> = [];

  for (const size of COMMON_SIZES) {
    for (const city of extendedCities) {
      params.push({
        widthXdepth: `${size.width}x${size.depth}`,
        stateSlug: city.stateSlug,
        citySlug: city.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: SizeCityPageProps): Promise<Metadata> {
  const { widthXdepth, stateSlug, citySlug } = await params;
  const [width, depth] = widthXdepth.split("x");
  const city = getExtendedCityData(stateSlug, citySlug);

  if (!city) {
    return { title: "City Not Found" };
  }

  const widthNum = parseInt(width);
  const depthNum = parseInt(depth);

  return {
    title: `Concrete Calculator: ${width}'x${depth}' Slab in ${city.city}, ${city.state} | Material Costs`,
    description: `Calculate concrete needs for a ${width}x${depth} foot slab in ${city.city}, ${city.state}. Local material prices, yardage, and bag estimates for your project.`,
  };
}

// Concrete cost per yard (base)
const BASE_CONCRETE_COST_PER_YARD = 145;

// Calculate concrete needs
function calculateConcreteNeeds(width: number, depth: number, thickness: number) {
  const area = width * depth; // sq ft
  const volume = (area * thickness) / 324; // cubic yards (thickness in inches, 324 = 27 * 12)
  const volumeRounded = Math.ceil(volume * 100) / 100;
  const volumeWithWaste = Math.ceil((volume * 1.1) * 100) / 100; // 10% waste

  // 80lb bags = 0.6 cu ft, 60lb = 0.45 cu ft
  const eightyLbBags = Math.ceil((volumeWithWaste * 27) / 0.6);
  const sixtyLbBags = Math.ceil((volumeWithWaste * 27) / 0.45);

  return {
    area,
    volume: volumeRounded,
    volumeWithWaste,
    eightyLbBags,
    sixtyLbBags,
  };
}

export default async function SizeCityPage({ params }: SizeCityPageProps) {
  const { widthXdepth, stateSlug, citySlug } = await params;
  const [width, depth] = widthXdepth.split("x");
  const city = getExtendedCityData(stateSlug, citySlug);

  if (!city) {
    notFound();
  }

  const widthNum = parseInt(width);
  const depthNum = parseInt(depth);

  if (isNaN(widthNum) || isNaN(depthNum) || widthNum <= 0 || depthNum <= 0) {
    notFound();
  }

  // Calculate for different slab types
  const slabTypes = Object.entries(SLAB_THICKNESS).map(([type, thickness]) => ({
    type,
    thickness,
    ...calculateConcreteNeeds(widthNum, depthNum, thickness),
  }));

  // Get localized cost
  const concreteMultiplier = city.materialCosts.concrete || 1;
  const localizedCostPerYard = BASE_CONCRETE_COST_PER_YARD * concreteMultiplier;

  // Local considerations (concrete + general only, skip roofing for this page)
  const concreteConsiderations = city.considerations?.concrete ?? [];
  const generalConsiderations = city.considerations?.general ?? [];
  const hasLocalConsiderations = concreteConsiderations.length > 0 || generalConsiderations.length > 0;

  // Labor delta display
  const laborDelta = Math.round((city.laborRate - 1) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-secondary-600">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/concrete/slab" className="hover:text-primary">Concrete Calculator</Link>
        <span className="mx-2">/</span>
        <Link href={`/size/${width}/x${depth}/concrete/slab`} className="hover:text-primary">{width}'×{depth}' Slab</Link>
        <span className="mx-2">/</span>
        <span className="text-secondary-900">{city.city}, {city.state}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-secondary-600 mb-2">
          <MapPin className="w-5 h-5" />
          <span>{city.city}, {city.state} Area Pricing</span>
        </div>
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Concrete Needed for {width}'×{depth}' Slab in {city.city}, {city.state}
        </h1>
        <p className="text-xl text-secondary-600">
          Calculate materials, costs, and quantities for your {width} by {depth} foot concrete project.
          Prices reflect local rates in the {city.city} area.
        </p>
      </div>

      {/* Quick Answer Card */}
      <Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-primary" />
            Quick Answer: {width}'×{depth}' Patio Slab
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-secondary-600 mb-1">Concrete Needed</div>
              <div className="text-3xl font-bold text-secondary-900">
                {slabTypes.find(t => t.type === "patio")?.volumeWithWaste} yd³
              </div>
              <div className="text-sm text-secondary-500">
                or {slabTypes.find(t => t.type === "patio")?.eightyLbBags} 80lb bags
              </div>
            </div>
            <div>
              <div className="text-sm text-secondary-600 mb-1">Estimated Cost</div>
              <div className="text-3xl font-bold text-green-600">
                ${Math.round(slabTypes.find(t => t.type === "patio")!.volumeWithWaste * localizedCostPerYard)}
              </div>
              <div className="text-sm text-secondary-500">
                Concrete only, {city.city} area
              </div>
            </div>
            <div>
              <div className="text-sm text-secondary-600 mb-1">Coverage Area</div>
              <div className="text-3xl font-bold text-secondary-900">
                {widthNum * depthNum} sq ft
              </div>
              <div className="text-sm text-secondary-500">
                4 inch thickness
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* By Project Type */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">Materials by Project Type</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slabTypes.map((slab) => (
            <Card key={slab.type} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="capitalize">{slab.type}</CardTitle>
                <CardDescription>{slab.thickness} inch thickness</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Concrete:</span>
                    <span className="font-medium">{slab.volumeWithWaste} yd³</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">80lb bags:</span>
                    <span className="font-medium">{slab.eightyLbBags}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">60lb bags:</span>
                    <span className="font-medium">{slab.sixtyLbBags}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-secondary-600">Est. Cost:</span>
                    <span className="font-bold text-green-600">
                      ${Math.round(slab.volumeWithWaste * localizedCostPerYard)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Local Pricing Information */}
      <Card className="mb-8 bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900 flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            {city.city} Area Pricing Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm">
            <div>
              <div className="font-medium text-blue-900 mb-2">Material Cost Adjustments</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-secondary-600">Concrete</div>
                  <div className="font-bold text-blue-900">
                    {Math.round((city.materialCosts.concrete - 1) * 100)}% {city.materialCosts.concrete > 1 ? "above" : "below"} avg
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-secondary-600">Lumber</div>
                  <div className="font-bold text-blue-900">
                    {Math.round((city.materialCosts.lumber - 1) * 100)}% {city.materialCosts.lumber > 1 ? "above" : "below"} avg
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-secondary-600">Labor</div>
                  <div className="font-bold text-blue-900">
                    {laborDelta === 0
                      ? "At national average"
                      : `${laborDelta > 0 ? "+" : ""}${Math.abs(laborDelta)}% ${laborDelta > 0 ? "above" : "below"} avg`}
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-secondary-600">Climate</div>
                  <div className="font-bold text-blue-900 capitalize">{city.climate}</div>
                </div>
              </div>
            </div>
            {hasLocalConsiderations && (
              <div>
                <div className="font-medium text-blue-900 mb-2">Local Considerations for {city.city}</div>
                <ul className="space-y-1 text-blue-800">
                  {concreteConsiderations.map((tip, idx) => (
                    <li key={`concrete-${idx}`} className="flex items-start gap-2">
                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                  {generalConsiderations.map((tip, idx) => (
                    <li key={`general-${idx}`} className="flex items-start gap-2">
                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Buying Guide */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Buying Concrete in {city.city}, {city.state}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div>
            <div className="font-semibold text-secondary-900 mb-2">Ready-Mix vs. Bags</div>
            <p className="text-secondary-700 mb-2">
              For a {width}'×{depth}' slab, you{" "}
              {slabTypes.find(t => t.type === "patio")!.volumeWithWaste > 1 ? (
                <strong>should order ready-mix concrete</strong>
              ) : (
                <strong>can use either bags or ready-mix</strong>
              )}.
            </p>
            <ul className="text-secondary-600 space-y-1">
              <li>• Ready-mix: Better for projects over 1 yard, delivered to your {city.city} location</li>
              <li>• Bags: Good for smaller projects, available at {city.city} area home centers</li>
              <li>• Calculate extra: Always add 10% for waste and variations in subgrade</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-secondary-900 mb-2">Climate Considerations</div>
            <p className="text-secondary-700">
              {city.city} has a {city.climate} climate.{" "}
              {city.climate === "cold" && "Allow extra time for curing in cold months. Consider air-entrained concrete for freeze-thaw resistance."}
              {city.climate === "hot-humid" && "Pour during cooler morning hours in summer. The heat can accelerate curing."}
              {city.climate === "hot-arid" && "Concrete dries quickly in arid heat. Keep surface moist during curing."}
              {city.climate === "temperate" && "Moderate temperatures provide good conditions for concrete work year-round."}
              {city.climate === "mixed" && "Be prepared for varying conditions. Check forecast before pouring."}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Nearby Cities */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Nearby Cities with Similar Pricing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {extendedCities
              .filter(c => c.state === city.state && c.slug !== city.slug)
              .slice(0, 8)
              .map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/size/${width}x${depth}/l/${nearbyCity.stateSlug}/${nearbyCity.slug}`}
                  className="px-4 py-2 bg-secondary-100 rounded-lg hover:bg-secondary-200 transition-colors text-sm"
                >
                  {nearbyCity.city}
                </Link>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Related Sizes */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Other Common Slab Sizes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {COMMON_SIZES
              .filter(s => s.width !== widthNum || s.depth !== depthNum)
              .slice(0, 12)
              .map((size) => (
                <Link
                  key={`${size.width}x${size.depth}`}
                  href={`/size/${size.width}x${size.depth}/l/${stateSlug}/${citySlug}`}
                  className="px-3 py-2 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors text-center text-sm font-medium"
                >
                  {size.width}'×{size.depth}'
                </Link>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                Need a Custom Size?
              </h3>
              <p className="text-secondary-600 text-sm">
                Use our full calculator for any dimensions
              </p>
            </div>
            <Link
              href="/concrete/slab"
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Full Calculator
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <div className="mt-8 pt-6 border-t border-secondary-200">
        <p className="text-sm text-secondary-500">
          Material cost estimates use {city.city}-specific concrete pricing for planning purposes only.
          Prices vary by supplier, order size, and delivery distance. Verify with local ready-mix suppliers.
        </p>
        <p className="text-xs text-secondary-400 mt-2">Last updated: May 2026</p>
      </div>
    </div>
  );
}
