/**
 * Standard Dimensions Reference Page - Programmatic SEO
 * Pattern: /dimensions/{project-type}
 * Targets "standard dimensions" and "typical sizes" searches
 */

import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Ruler, Car, Truck, Home, Warehouse } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Standard Driveway Dimensions & Sizes Guide",
  description: "Standard driveway sizes for 1-car, 2-car, and 3-car garages. Minimum and recommended dimensions with layout examples.",
  keywords: [
    "standard driveway size",
    "typical driveway dimensions",
    "driveway width for 2 cars",
    "minimum driveway width",
    "driveway length requirements",
  ],
};

const drivewaySpecs = [
  {
    type: "Single Car",
    icon: Car,
    minWidth: 10,
    recommendedWidth: 12,
    minLength: 20,
    recommendedLength: 24,
    turnaroundRadius: 16,
    description: "Minimum for compact cars, recommended for comfort",
    doorHeight: 7,
  },
  {
    type: "Double Car",
    icon: Car,
    minWidth: 18,
    recommendedWidth: 24,
    minLength: 20,
    recommendedLength: 24,
    turnaroundRadius: 20,
    description: "Allows both doors to open without hitting adjacent car",
    doorHeight: 7,
  },
  {
    type: "Triple Car",
    icon: Car,
    minWidth: 28,
    recommendedWidth: 32,
    minLength: 20,
    recommendedLength: 24,
    turnaroundRadius: 22,
    description: "Extra parking or storage space",
    doorHeight: 7,
  },
  {
    type: "RV/Boat Parking",
    icon: Truck,
    minWidth: 14,
    recommendedWidth: 16,
    minLength: 35,
    recommendedLength: 40,
    turnaroundRadius: 40,
    description: "Extra length for recreational vehicles",
    doorHeight: 12,
  },
];

const parkingLayouts = [
  {
    name: "Straight In",
    description: "Simplest design, car drives straight in and backs out",
    width: "12-24 ft",
    length: "20-24 ft",
    bestFor: "Most residential",
  },
  {
    name: "Circular Turnaround",
    description: "Allows driving in and out without backing",
    width: "24-30 ft",
    length: "30-40 ft",
    bestFor: "Easier access",
  },
  {
    name: "Side-Load Garage",
    description: "Driveway runs alongside garage",
    width: "12-16 ft",
    length: "Depends on garage",
    bestFor: "Narrow lots",
  },
  {
    name: "Angled Parking",
    description: "Cars park at an angle to the driveway",
    width: "18-20 ft per car",
    length: "20-25 ft",
    bestFor: "Multiple cars",
  },
];

export default function StandardDrivewaySizesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-secondary-600 mb-4">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-secondary-900">Dimensions</span>
        </div>
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Standard Driveway Dimensions & Sizes
        </h1>
        <p className="text-xl text-secondary-600">
          Complete guide to standard driveway dimensions for residential construction
        </p>
      </div>

      {/* Quick Reference Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ruler className="w-6 h-6 text-primary" />
            Quick Reference: Driveway Sizes by Vehicle
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary-200">
                  <th className="text-left py-3 px-4">Vehicle Type</th>
                  <th className="text-center py-3 px-4">Min Width</th>
                  <th className="text-center py-3 px-4">Rec. Width</th>
                  <th className="text-center py-3 px-4">Min Length</th>
                  <th className="text-center py-3 px-4">Rec. Length</th>
                </tr>
              </thead>
              <tbody>
                {drivewaySpecs.map((spec, idx) => (
                  <tr key={idx} className="border-b border-secondary-100">
                    <td className="py-3 px-4 font-medium text-secondary-900">{spec.type}</td>
                    <td className="py-3 px-4 text-center">{spec.minWidth} ft</td>
                    <td className="py-3 px-4 text-center font-semibold text-primary">
                      {spec.recommendedWidth} ft
                    </td>
                    <td className="py-3 px-4 text-center">{spec.minLength} ft</td>
                    <td className="py-3 px-4 text-center font-semibold text-primary">
                      {spec.recommendedLength} ft
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Specs */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {drivewaySpecs.map((spec, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <spec.icon className="w-5 h-5 text-primary" />
                </div>
                {spec.type}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-secondary-600 text-sm">{spec.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-secondary-600">Minimum Width</div>
                  <div className="font-semibold text-lg">{spec.minWidth} ft</div>
                </div>
                <div>
                  <div className="text-secondary-600">Recommended Width</div>
                  <div className="font-semibold text-lg text-primary">{spec.recommendedWidth} ft</div>
                </div>
                <div>
                  <div className="text-secondary-600">Minimum Length</div>
                  <div className="font-semibold text-lg">{spec.minLength} ft</div>
                </div>
                <div>
                  <div className="text-secondary-600">Recommended Length</div>
                  <div className="font-semibold text-lg text-primary">{spec.recommendedLength} ft</div>
                </div>
              </div>
              {spec.turnaroundRadius && (
                <div className="pt-2 border-t border-secondary-100">
                  <div className="text-secondary-600 text-sm">Turnaround Radius: {spec.turnaroundRadius} ft</div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Parking Layouts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Common Driveway Layouts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {parkingLayouts.map((layout, idx) => (
              <div key={idx} className="p-4 bg-secondary-50 rounded-lg">
                <h3 className="font-semibold text-secondary-900 mb-1">{layout.name}</h3>
                <p className="text-sm text-secondary-600 mb-2">{layout.description}</p>
                <div className="flex justify-between text-sm">
                  <span>Width: <strong>{layout.width}</strong></span>
                  <span>Length: <strong>{layout.length}</strong></span>
                </div>
                <div className="text-xs text-secondary-500 mt-2">Best for: {layout.bestFor}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Considerations */}
      <Card className="mb-8 bg-amber-50 border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-900">Important Design Considerations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-amber-900 mb-3">Minimum Requirements</h4>
              <ul className="space-y-2 text-sm text-amber-800">
                <li>• Check local building codes for minimum widths</li>
                <li>• HOA may have specific requirements</li>
                <li>• Setback requirements from property lines</li>
                <li>• Sidewalk crossing permits may be needed</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-900 mb-3">Design Tips</h4>
              <ul className="space-y-2 text-sm text-amber-800">
                <li>• Add 2-3 ft to width for easy entry/exit</li>
                <li>• Consider future vehicle size changes</li>
                <li>• Plan for drainage slope (1-2% grade)</li>
                <li>• Leave space for walkway to front door</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost Calculator CTA */}
      <Card className="bg-gradient-to-r from-primary to-primary/80 text-white">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Calculate Your Driveway Cost</h3>
              <p className="opacity-90">Get instant estimates for your specific driveway dimensions</p>
            </div>
            <Link
              href="/concrete/slab"
              className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-secondary-50 transition-colors whitespace-nowrap"
            >
              Use Calculator
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
