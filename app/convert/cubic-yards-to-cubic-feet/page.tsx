/**
 * Unit Conversion Page - Cubic Yards to Cubic Feet
 * Pattern: /convert/{from}-to-{to}
 * Captures high-traffic conversion queries
 */

import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import Calculator from "@/components/calculator/unit-converters/CubicYardsToFeet";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Cubic Yards to Cubic Feet Converter | Free Conversion Calculator",
  description: "Convert cubic yards to cubic feet instantly. 1 cubic yard = 27 cubic feet. Free calculator for construction, landscaping, and concrete projects.",
  keywords: [
    "cubic yards to cubic feet",
    "yard to feet conversion",
    "cubic yard calculator",
    "construction unit conversion",
    "concrete volume conversion",
  ],
};

export default function CubicYardsToCubicFeetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-2">
          Cubic Yards to Cubic Feet Converter
        </h1>
        <p className="text-lg text-secondary-600">
          Instant conversion for construction, landscaping, and concrete projects
        </p>
      </div>

      {/* Quick Answer */}
      <Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="text-sm text-secondary-600 mb-2">Quick Answer</div>
            <div className="flex items-center justify-center gap-4 text-2xl font-bold">
              <span>1 cubic yard</span>
              <ArrowRight className="w-6 h-6 text-primary" />
              <span>27 cubic feet</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calculator */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Conversion Calculator</CardTitle>
          <CardDescription>Enter a value to convert</CardDescription>
        </CardHeader>
        <CardContent>
          <Calculator />
        </CardContent>
      </Card>

      {/* Common Conversions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Common Cubic Yard Conversions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { yards: 0.5, feet: 13.5 },
              { yards: 1, feet: 27 },
              { yards: 2, feet: 54 },
              { yards: 3, feet: 81 },
              { yards: 4, feet: 108 },
              { yards: 5, feet: 135 },
              { yards: 6, feet: 162 },
              { yards: 7, feet: 189 },
              { yards: 8, feet: 216 },
              { yards: 9, feet: 243 },
              { yards: 10, feet: 270 },
              { yards: 12, feet: 324 },
              { yards: 15, feet: 405 },
              { yards: 20, feet: 540 },
              { yards: 25, feet: 675 },
              { yards: 50, feet: 1350 },
              { yards: 100, feet: 2700 },
            ].map((conv) => (
              <div
                key={conv.yards}
                className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg"
              >
                <span className="font-medium">{conv.yards} cu yd</span>
                <ArrowRight className="w-4 h-4 text-secondary-400" />
                <span className="text-primary font-semibold">{conv.feet} cu ft</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Formula Explanation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Conversion Formula</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-secondary-50 p-4 rounded-lg">
            <div className="text-center font-mono text-lg">
              Cubic Feet = Cubic Yards × 27
            </div>
          </div>
          <p className="text-secondary-700">
            To convert cubic yards to cubic feet, multiply the cubic yard value by 27.
            Since 1 yard equals 3 feet, 1 cubic yard equals 3 × 3 × 3 = 27 cubic feet.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Why 27?</h4>
            <p className="text-blue-800 text-sm">
              A cubic yard is a cube that is 1 yard (3 feet) on each side. So the volume is
              3 ft × 3 ft × 3 ft = 27 cubic feet.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>When to Use This Conversion</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm font-bold">1</span>
              </div>
              <div>
                <strong className="text-secondary-900">Concrete Ordering:</strong>
                <p className="text-secondary-600 text-sm">
                  Concrete is sold by the cubic yard, but calculations are often done in cubic feet.
                  Convert your cubic feet result to cubic yards before ordering.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm font-bold">2</span>
              </div>
              <div>
                <strong className="text-secondary-900">Landscaping Materials:</strong>
                <p className="text-secondary-600 text-sm">
                  Mulch, soil, and gravel are often sold by the cubic yard. Convert from cubic feet
                  measurements to know how much to order.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm font-bold">3</span>
              </div>
              <div>
                <strong className="text-secondary-900">Construction Estimates:</strong>
                <p className="text-secondary-600 text-sm">
                  Blueprints may use different units. This conversion helps standardize measurements
                  for material estimates.
                </p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Related Conversions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Related Conversions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              href="/convert/square-feet-to-square-yards"
              className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors group"
            >
              <div className="font-medium text-secondary-900 group-hover:text-primary">
                Square Feet to Square Yards
              </div>
              <div className="text-sm text-secondary-600">Area conversion</div>
            </Link>
            <Link
              href="/convert/feet-to-yards"
              className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors group"
            >
              <div className="font-medium text-secondary-900 group-hover:text-primary">
                Feet to Yards
              </div>
              <div className="text-sm text-secondary-600">Length conversion</div>
            </Link>
            <Link
              href="/convert/cubic-meters-to-cubic-yards"
              className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors group"
            >
              <div className="font-medium text-secondary-900 group-hover:text-primary">
                Cubic Meters to Cubic Yards
              </div>
              <div className="text-sm text-secondary-600">Metric conversion</div>
            </Link>
            <Link
              href="/concrete/slab"
              className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors group"
            >
              <div className="font-medium text-secondary-900 group-hover:text-primary">
                Concrete Slab Calculator
              </div>
              <div className="text-sm text-secondary-600">Volume in cubic yards</div>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-primary to-primary/80 text-white">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Need More Than Just Conversion?</h3>
              <p className="opacity-90">Use our full construction calculators for accurate project estimates.</p>
            </div>
            <Link
              href="/concrete"
              className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-secondary-50 transition-colors whitespace-nowrap"
            >
              View All Calculators
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
