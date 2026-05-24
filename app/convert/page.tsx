/**
 * Unit Converter Hub Page - All unit conversion tools
 */
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { getAllConversions } from "@/data";
import { Calculator, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Unit Conversion Tools | BuildCost.site",
  description: "Free construction unit converters. Convert square feet to cubic yards, inches to feet, pounds to kilograms, and more.",
};

export default function ConvertHubPage() {
  const conversions = getAllConversions();

  // Group by category
  const byCategory = conversions.reduce((acc, conv) => {
    const cat = conv.category || "other";
    if (!acc[cat]) {
      acc[cat] = [];
    }
    acc[cat].push(conv);
    return acc;
  }, {} as Record<string, typeof conversions>);

  const categoryInfo: Record<string, { title: string; description: string; icon: string; color: string }> = {
    "length": {
      title: "Length Converters",
      description: "Convert between feet, inches, yards, meters, and more",
      icon: "📏",
      color: "bg-blue-600"
    },
    "area": {
      title: "Area Converters",
      description: "Square feet, square yards, square meters, acres",
      icon: "🔲",
      color: "bg-green-600"
    },
    "volume": {
      title: "Volume Converters",
      description: "Cubic yards, cubic feet, liters, gallons",
      icon: "📦",
      color: "bg-purple-600"
    },
    "weight": {
      title: "Weight Converters",
      description: "Pounds, kilograms, tons, ounces",
      icon: "⚖️",
      color: "bg-amber-600"
    },
    "temperature": {
      title: "Temperature",
      description: "Fahrenheit, Celsius, Kelvin",
      icon: "🌡️",
      color: "bg-red-600"
    },
    "construction": {
      title: "Construction Specific",
      description: "Concrete bags, lumber board feet, roofing squares",
      icon: "🏗️",
      color: "bg-primary"
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Construction Unit Converters
        </h1>
        <p className="text-xl text-secondary-600">
          Free online conversion tools for construction measurements
        </p>
      </div>

      {/* Info Banner */}
      <Card className="mb-12 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <Calculator className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-secondary-900 mb-2">
                Quick & Accurate Conversions
              </h2>
              <p className="text-secondary-700 text-sm">
                Our conversion tools handle all common construction measurements. Convert between
                imperial and metric units, calculate material quantities, and ensure your project
                measurements are accurate.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Most Popular */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">
          Most Popular Converters
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {conversions.filter(c => c.popular).slice(0, 6).map((conversion) => (
            <Link key={conversion.id} href={`/convert/${conversion.slug}`}>
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 border-primary/20">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{conversion.icon}</span>
                        <h3 className="font-bold text-secondary-900">{conversion.name}</h3>
                      </div>
                      <p className="text-xs text-secondary-500 mt-1">
                        {conversion.fromUnit} → {conversion.toUnit}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* All Converters by Category */}
      <div className="space-y-10">
        {Object.entries(byCategory).map(([category, converters]) => {
          const info = categoryInfo[category] || {
            title: category,
            description: `${category} converters`,
            icon: "🔧",
            color: "bg-secondary-600"
          };

          return (
            <div key={category}>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4 flex items-center gap-3">
                <span className={`w-2 h-8 ${info.color} rounded`}></span>
                <span className="text-2xl">{info.icon}</span>
                {info.title}
              </h2>
              {info.description && (
                <p className="text-secondary-600 mb-4 ml-9">{info.description}</p>
              )}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {converters.map((conversion) => (
                  <Link key={conversion.id} href={`/convert/${conversion.slug}`}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span>{conversion.icon}</span>
                            <div>
                              <h3 className="font-semibold text-secondary-900">{conversion.name}</h3>
                              <p className="text-xs text-secondary-500">
                                {conversion.fromUnit} to {conversion.toUnit}
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-secondary-400 flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Conversion Reference */}
      <Card className="mt-12 bg-secondary-50 border-secondary-200">
        <CardHeader>
          <CardTitle>Quick Conversion Reference</CardTitle>
          <CardDescription>Common construction conversions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-white rounded-lg">
              <div className="font-semibold text-secondary-900">Length</div>
              <div className="text-secondary-600">1 yard = 3 feet = 36 inches</div>
              <div className="text-secondary-600">1 meter ≈ 3.28 feet</div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="font-semibold text-secondary-900">Area</div>
              <div className="text-secondary-600">1 sq yard = 9 sq feet</div>
              <div className="text-secondary-600">1 acre = 43,560 sq feet</div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="font-semibold text-secondary-900">Volume</div>
              <div className="text-secondary-600">1 cu yard = 27 cu feet</div>
              <div className="text-secondary-600">1 gallon ≈ 3.78 liters</div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="font-semibold text-secondary-900">Weight</div>
              <div className="text-secondary-600">1 ton = 2,000 pounds</div>
              <div className="text-secondary-600">1 kg ≈ 2.2 pounds</div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="font-semibold text-secondary-900">Concrete</div>
              <div className="text-secondary-600">1 cu yard ≈ 4,000 lb (wet)</div>
              <div className="text-secondary-600">80lb bag = 0.6 cu ft</div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="font-semibold text-secondary-900">Lumber</div>
              <div className="text-secondary-600">Board foot = 1" × 12" × 12"</div>
              <div className="text-secondary-600">1 linear ft of 2×4 = 0.67 bd ft</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Resources */}
      <div className="mt-12 pt-8 border-t border-secondary-200">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/concrete/slab" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">Concrete Calculator</h3>
            <p className="text-sm text-secondary-600">Calculate materials</p>
          </Link>
          <Link href="/guide" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">How-To Guides</h3>
            <p className="text-sm text-secondary-600">Step-by-step tutorials</p>
          </Link>
          <Link href="/dimensions" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">Standard Dimensions</h3>
            <p className="text-sm text-secondary-600">Common project sizes</p>
          </Link>
          <Link href="/faq" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">FAQs</h3>
            <p className="text-sm text-secondary-600">Common questions</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
