/**
 * Material Comparison Page - Programmatic SEO
 * Pattern: /compare/{material}-vs-{material}
 * Targets high-volume "vs" search queries
 */

import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Check, X, AlertTriangle, Scale } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete vs Pavers: Complete Comparison Guide | BuildCost.site",
  description: "Compare concrete vs pavers for driveways, patios, and walkways. Cost, durability, maintenance, and installation comparison to help you choose.",
  keywords: [
    "concrete vs pavers",
    "concrete driveway vs pavers",
    "paver patio vs concrete patio cost",
    "pavers vs stamped concrete",
    "concrete vs pavers durability",
  ],
};

interface ComparisonItem {
  label: string;
  concrete: string;
  pavers: string;
  winner?: "concrete" | "pavers" | "tie";
}

const comparisons: ComparisonItem[] = [
  {
    label: "Initial Cost (per sq ft)",
    concrete: "$6 - $10",
    pavers: "$10 - $20",
    winner: "concrete",
  },
  {
    label: "Installation Time",
    concrete: "1-3 days (pours quickly)",
    pavers: "3-7 days (labor intensive)",
    winner: "concrete",
  },
  {
    label: "DIY Friendly",
    concrete: "Difficult - requires pro",
    pavers: "Possible - labor intensive",
    winner: "pavers",
  },
  {
    label: "Durability",
    concrete: "25-30 years with proper care",
    pavers: "30-50+ years",
    winner: "pavers",
  },
  {
    label: "Crack Resistance",
    concrete: "Prone to cracking",
    pavers: "Individual units resist cracks",
    winner: "pavers",
  },
  {
    label: "Maintenance Required",
    concrete: "Sealing every 2-3 years",
    pavers: "Weed control, occasional leveling",
    winner: "tie",
  },
  {
    label: "Repair Difficulty",
    concrete: "Difficult - visible patches",
    pavers: "Easy - replace individual units",
    winner: "pavers",
  },
  {
    label: "Design Options",
    concrete: "Stamped, colored, stained",
    pavers: "Unlimited colors, patterns, shapes",
    winner: "pavers",
  },
  {
    label: "Ice/Salt Resistance",
    concrete: "Can be damaged by de-icing salts",
    pavers: "Generally resistant (depends on type)",
    winner: "pavers",
  },
  {
    label: "Resale Value",
    concrete: "Good return on investment",
    pavers: "Excellent return on investment",
    winner: "pavers",
  },
];

export default function ConcreteVsPaversPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-secondary-600 mb-4">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-secondary-900">Comparison</span>
        </div>
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Concrete vs Pavers: Complete Comparison
        </h1>
        <p className="text-xl text-secondary-600">
          A detailed comparison to help you decide between concrete and pavers for your driveway, patio, or walkway project.
        </p>
      </div>

      {/* Quick Verdict */}
      <Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-primary" />
            Quick Verdict
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-secondary-900 mb-2">Choose Concrete If:</h3>
              <ul className="space-y-1 text-sm text-secondary-700">
                <li>• Budget is your primary concern</li>
                <li>• You want a quick installation</li>
                <li>• You prefer a smooth, seamless surface</li>
                <li>• You're in a cold climate (with proper reinforcement)</li>
                <li>• You want minimal maintenance</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-secondary-900 mb-2">Choose Pavers If:</h3>
              <ul className="space-y-1 text-sm text-secondary-700">
                <li>• You want maximum durability</li>
                <li>• Design variety is important to you</li>
                <li>• You may need underground repairs</li>
                <li>• You want easy DIY repairs</li>
                <li>• Budget allows for higher initial cost</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Side-by-Side Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary-200">
                  <th className="text-left py-3 px-4 font-semibold">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-blue-600">Concrete</th>
                  <th className="text-center py-3 px-4 font-semibold text-amber-600">Pavers</th>
                  <th className="text-center py-3 px-4 font-semibold">Winner</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, idx) => (
                  <tr key={idx} className="border-b border-secondary-100">
                    <td className="py-3 px-4 font-medium text-secondary-900">{item.label}</td>
                    <td className="py-3 px-4 text-center">{item.concrete}</td>
                    <td className="py-3 px-4 text-center">{item.pavers}</td>
                    <td className="py-3 px-4 text-center">
                      {item.winner === "concrete" && <span className="text-blue-600 font-semibold">Concrete</span>}
                      {item.winner === "pavers" && <span className="text-amber-600 font-semibold">Pavers</span>}
                      {item.winner === "tie" && <span className="text-secondary-600">Tie</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Cost Breakdown */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">Concrete Cost Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>Basic Concrete</span>
              <span className="font-semibold">$6 - $10/sq ft</span>
            </div>
            <div className="flex justify-between">
              <span>Stamped Concrete</span>
              <span className="font-semibold">$12 - $18/sq ft</span>
            </div>
            <div className="flex justify-between">
              <span>Colored Concrete</span>
              <span className="font-semibold">$10 - $15/sq ft</span>
            </div>
            <div className="flex justify-between">
              <span>Exposed Aggregate</span>
              <span className="font-semibold">$10 - $15/sq ft</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg">
              <span className="font-semibold">Typical 500 sq ft Driveway</span>
              <span className="font-bold text-blue-600">$3,000 - $9,000</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-amber-600">Pavers Cost Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>Basic Concrete Pavers</span>
              <span className="font-semibold">$10 - $15/sq ft</span>
            </div>
            <div className="flex justify-between">
              <span>Brick Pavers</span>
              <span className="font-semibold">$15 - $20/sq ft</span>
            </div>
            <div className="flex justify-between">
              <span>Natural Stone Pavers</span>
              <span className="font-semibold">$20 - $30/sq ft</span>
            </div>
            <div className="flex justify-between">
              <span>Permeable Pavers</span>
              <span className="font-semibold">$15 - $25/sq ft</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg">
              <span className="font-semibold">Typical 500 sq ft Driveway</span>
              <span className="font-bold text-amber-600">$5,000 - $15,000</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pros and Cons */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Concrete Pros & Cons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                <Check className="w-4 h-4" /> Pros
              </h4>
              <ul className="space-y-1 text-sm text-secondary-700">
                <li>• Lower initial cost</li>
                <li>• Faster installation</li>
                <li>• Smooth surface - snow removal easy</li>
                <li>• Low maintenance</li>
                <li>• Can be stamped/stained for looks</li>
                <li>• Good for accessibility</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                <X className="w-4 h-4" /> Cons
              </h4>
              <ul className="space-y-1 text-sm text-secondary-700">
                <li>• Prone to cracking</li>
                <li>• Difficult to repair invisibly</li>
                <li>• Limited design options</li>
                <li>• Requires sealing</li>
                <li>• Can be damaged by de-icing salts</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pavers Pros & Cons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                <Check className="w-4 h-4" /> Pros
              </h4>
              <ul className="space-y-1 text-sm text-secondary-700">
                <li>• Extremely durable</li>
                <li>• Easy to replace individual units</li>
                <li>• Unlimited design options</li>
                <li>• No cracking (flexible joints)</li>
                <li>• Permeable options available</li>
                <li>• Higher resale value</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                <X className="w-4 h-4" /> Cons
              </h4>
              <ul className="space-y-1 text-sm text-secondary-700">
                <li>• Higher initial cost</li>
                <li>• Longer installation time</li>
                <li>• Weeds can grow in joints</li>
                <li>• Can settle unevenly</li>
                <li>• Snow removal more difficult</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Climate Considerations */}
      <Card className="mb-8 bg-amber-50 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            Climate Considerations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Cold Climates</h4>
              <p className="text-sm text-secondary-700 mb-2">
                Freeze-thaw cycles affect both materials:
              </p>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• <strong>Concrete:</strong> Use air-entrained mix, proper reinforcement</li>
                <li>• <strong>Pavers:</strong> Choose dense pavers, proper base essential</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Hot Climates</h4>
              <p className="text-sm text-secondary-700 mb-2">
                Heat affects both differently:
              </p>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• <strong>Concrete:</strong> Light colors reduce heat absorption</li>
                <li>• <strong>Pavers:</strong> Permeable options stay cooler</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Rainy/Humid</h4>
              <p className="text-sm text-secondary-700 mb-2">
                Drainage is key:
              </p>
              <ul className="text-sm text-secondary-600 space-y-1">
                <li>• <strong>Concrete:</strong> Proper slope critical</li>
                <li>• <strong>Pavers:</strong> Permeable pavers ideal</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Calculators */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Related Calculators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/concrete/slab" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
              <h3 className="font-semibold text-secondary-900">Concrete Slab Calculator</h3>
              <p className="text-sm text-secondary-600">Calculate concrete volume for slabs</p>
            </Link>
            <Link href="/convert/cubic-yards-to-cubic-feet" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
              <h3 className="font-semibold text-secondary-900">Volume Converter</h3>
              <p className="text-sm text-secondary-600">Convert cubic yards to cubic feet</p>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* More Comparisons */}
      <div>
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">More Comparisons</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { href: "/compare/stamped-concrete-vs-pavers", title: "Stamped Concrete vs Pavers", desc: "Decorative options comparison" },
            { href: "/compare/concrete-vs-asphalt-driveway", title: "Concrete vs Asphalt", desc: "Driveway material showdown" },
            { href: "/compare/80lb-vs-60lb-concrete", title: "80lb vs 60lb Concrete Bags", desc: "Which bags to buy?" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="p-4 bg-white border border-secondary-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
              <h3 className="font-semibold text-secondary-900">{link.title}</h3>
              <p className="text-sm text-secondary-600">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
