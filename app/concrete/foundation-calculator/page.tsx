import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Building2, ArrowRight, Check, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Concrete Foundation Calculator - Estimate Foundation Concrete Volume",
  description:
    "Calculate concrete needed for all foundation types: slab-on-grade, footings, stem walls, and monolithic slabs. Get estimates in cubic yards and cost.",
  keywords: [
    "concrete foundation calculator",
    "foundation concrete calculator",
    "how much concrete for foundation",
    "foundation concrete estimate",
    "concrete foundation cost",
  ],
};

interface FoundationType {
  name: string;
  description: string;
  concreteParts: string[];
  thicknessRange: string;
  bestFor: string;
}

const foundationTypes: FoundationType[] = [
  {
    name: "Slab-on-Grade",
    description: "A single concrete slab poured directly on prepared ground. Most common for garages, sheds, and homes in warm climates.",
    concreteParts: ["Slab (4-6\" thick)", "Thickened edges (optional)", "Interior footings (if load-bearing walls)"],
    thicknessRange: '4-6"',
    bestFor: "Garages, sheds, patios, warm climates",
  },
  {
    name: "T-Shaped (Footing + Stem Wall)",
    description: "Footings poured below frost line with stem walls built up to grade. Standard for homes in cold climates.",
    concreteParts: ["Footing (8-12\" deep, 16-24\" wide)", "Stem wall (8\" thick, below-grade)", "Slab floor (4\" thick, optional)"],
    thicknessRange: 'Footing: 8-12" below frost line',
    bestFor: "Homes in freeze-thaw climates",
  },
  {
    name: "Monolithic Slab",
    description: "Slab and footing poured together in one monolithic pour. The edges are thickened to act as footings.",
    concreteParts: ["Slab field (4-6\" thick)", "Thickened perimeter (12-24\" deep × 12\" wide)"],
    thicknessRange: 'Slab: 4-6", Edge: 12-24"',
    bestFor: "Metal buildings, garages, workshops",
  },
  {
    name: "Pier and Beam (Post and Pier)",
    description: "Concrete piers supporting beams above grade. Minimal concrete compared to full foundations.",
    concreteParts: ["Pier footings (18-24\" diameter × 12-48\" deep)", "Pier columns (if needed)"],
    thicknessRange: 'Piers: 18-24" diameter',
    bestFor: "Decks, elevated floors, remote locations",
  },
];

export default function FoundationCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex text-sm text-secondary-600 mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/concrete" className="hover:text-primary">Concrete</Link>
        <span className="mx-2">/</span>
        <span className="text-secondary-900">Foundation Calculator</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Concrete Foundation Calculator
        </h1>
        <p className="text-xl text-secondary-600">
          Estimate concrete for all foundation types — slab-on-grade, footings, stem walls, and monolithic pours.
        </p>
      </div>

      {/* Foundation Types */}
      <Card className="mb-8 border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">Foundation Types &amp; Concrete Needs</CardTitle>
              <CardDescription>Each type has different concrete requirements</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {foundationTypes.map((ft) => (
            <div key={ft.name} className="border border-secondary-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-secondary-900 mb-1">{ft.name}</h3>
              <p className="text-sm text-secondary-600 mb-3">{ft.description}</p>
              <div className="grid md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-semibold text-secondary-500 uppercase mb-1">Concrete Parts</p>
                  <ul className="space-y-1">
                    {ft.concreteParts.map((part) => (
                      <li key={part} className="text-sm text-secondary-700 flex items-start gap-1">
                        <Check className="w-3 h-3 text-green-600 mt-1 flex-shrink-0" />
                        {part}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-secondary-500 uppercase mb-1">Thickness</p>
                  <p className="text-sm text-secondary-700">{ft.thicknessRange}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-secondary-500 uppercase mb-1">Best For</p>
                  <p className="text-sm text-secondary-700">{ft.bestFor}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Estimates by Home Size */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Concrete Estimates by Home Size</CardTitle>
          <CardDescription>Approximate concrete needed for common home foundations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary-200">
                  <th className="text-left py-3 px-4">Home Size</th>
                  <th className="text-center py-3 px-4">Slab-on-Grade</th>
                  <th className="text-center py-3 px-4">Monolithic</th>
                  <th className="text-center py-3 px-4">Est. Total Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "800 sqft (cottage)", slab: "10-12 yd³", mono: "12-15 yd³", cost: "$2,000-$3,500" },
                  { size: "1,200 sqft (ranch)", slab: "15-18 yd³", mono: "18-22 yd³", cost: "$3,000-$5,000" },
                  { size: "1,600 sqft", slab: "20-24 yd³", mono: "24-29 yd³", cost: "$4,000-$6,500" },
                  { size: "2,000 sqft", slab: "25-30 yd³", mono: "30-36 yd³", cost: "$5,000-$8,000" },
                  { size: "2,400 sqft", slab: "30-36 yd³", mono: "36-43 yd³", cost: "$6,000-$10,000" },
                  { size: "3,000 sqft", slab: "37-45 yd³", mono: "45-54 yd³", cost: "$7,500-$12,000" },
                ].map((row) => (
                  <tr key={row.size} className="border-b border-secondary-100 hover:bg-secondary-50">
                    <td className="py-3 px-4 font-medium text-secondary-900">{row.size}</td>
                    <td className="py-3 px-4 text-center">{row.slab}</td>
                    <td className="py-3 px-4 text-center">{row.mono}</td>
                    <td className="py-3 px-4 text-center text-sm text-green-700">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Cost Breakdown */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Foundation Cost Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-secondary-900 mb-3">Concrete Cost Components</h4>
              <div className="space-y-2">
                {[
                  { item: "Ready-mix concrete", cost: "$110-$165 per yd³" },
                  { item: "Pump truck (if needed)", cost: "$150-$250 flat fee + $3-5/yd" },
                  { item: "Rebar / wire mesh", cost: "$0.50-$1.50 per sq ft" },
                  { item: "Vapor barrier", cost: "$0.05-$0.15 per sq ft" },
                  { item: "Gravel base (4-6\")", cost: "$1-$2 per sq ft" },
                  { item: "Forms and stakes", cost: "$0.50-$1.00 per sq ft" },
                ].map((row) => (
                  <div key={row.item} className="flex justify-between text-sm">
                    <span className="text-secondary-700">{row.item}</span>
                    <span className="font-medium text-secondary-900">{row.cost}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-secondary-900 mb-3">Labor Estimates</h4>
              <div className="space-y-2">
                {[
                  { item: "Form setting", cost: "$1-$2 per sq ft" },
                  { item: "Pour and finish", cost: "$2-$4 per sq ft" },
                  { item: "Site prep / grading", cost: "$0.50-$1.50 per sq ft" },
                  { item: "Rebar installation", cost: "$0.50-$1.00 per sq ft" },
                ].map((row) => (
                  <div key={row.item} className="flex justify-between text-sm">
                    <span className="text-secondary-700">{row.item}</span>
                    <span className="font-medium text-secondary-900">{row.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Warning */}
      <Card className="mb-8 bg-amber-50 border-amber-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-amber-900 mb-1">Engineering &amp; Permits</h4>
              <p className="text-amber-800 text-sm">
                Foundation design must comply with local building codes and typically requires engineering approval.
                Soil conditions, frost depth, water table, and seismic zone all affect foundation requirements.
                These estimates are for planning purposes only.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                Calculate Concrete for Your Specific Project
              </h3>
              <p className="text-secondary-600">
                Use our specialized calculators for each foundation component.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/concrete/slab"
                className="flex items-center gap-2 px-5 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap text-sm"
              >
                Slab Calculator
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/concrete/footing"
                className="flex items-center gap-2 px-5 py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors whitespace-nowrap text-sm"
              >
                Footing Calculator
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related */}
      <div>
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">Related Calculators</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { href: "/concrete/slab", title: "Concrete Slab Calculator", desc: "Volume and bag estimates" },
            { href: "/concrete/footing", title: "Footing Calculator", desc: "Footings and piers" },
            { href: "/concrete/monolithic-slab-calculator", title: "Monolithic Slab Calculator", desc: "Thickened-edge slabs" },
            { href: "/concrete/basement-floor-calculator", title: "Basement Floor Calculator", desc: "Below-grade slabs" },
            { href: "/concrete/rebar", title: "Rebar Calculator", desc: "Reinforcement layout" },
            { href: "/cost/concrete-slab-foundation", title: "Foundation Cost Guide", desc: "Full cost breakdown" },
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
