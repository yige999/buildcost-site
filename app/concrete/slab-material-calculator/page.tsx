import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Package, ArrowRight, Check, AlertTriangle, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Concrete Slab Material Calculator - Complete Materials List",
  description:
    "Calculate all materials needed for your concrete slab project: concrete, gravel base, rebar, wire mesh, vapor barrier, form boards, control joints, and curing compound.",
  keywords: [
    "figure concrete slab materials",
    "material calculator for concrete slab",
    "figure concrete slab",
    "figure concrete for slab",
    "concrete slab materials list",
    "what do I need to pour a concrete slab",
  ],
};

interface MaterialItem {
  name: string;
  amount: string;
  notes: string;
  priceRange: string;
}

const materials10x10: MaterialItem[] = [
  { name: "Concrete (4\" thick)", amount: "1.23 yd³ (56 × 80lb bags)", notes: "Add 10% waste: order 1.36 yd³", priceRange: "$150-$200" },
  { name: "Gravel Base (4\")", amount: "1.23 yd³ / ~1.7 tons", notes: "Compact 4-6\" of crushed stone (#57)", priceRange: "$30-$60" },
  { name: "Rebar (#4 @ 18\" OC)", amount: "8 pieces × 10ft = 80 linear ft", notes: "Grid pattern, tied with wire", priceRange: "$40-$60" },
  { name: "Wire Mesh (optional)", amount: "1 sheet (6×10ft)", notes: "Alternative to rebar for light-duty slabs", priceRange: "$15-$25" },
  { name: "Vapor Barrier", amount: "1 roll (10×100ft)", notes: "6-mil polyethylene for interior slabs", priceRange: "$20-$30" },
  { name: "Form Boards (2×6)", amount: "4 boards × 10ft = 40 linear ft", notes: "Stake every 2-3 feet", priceRange: "$25-$40" },
  { name: "Stakes", amount: "16-20 wooden stakes", notes: "Metal or wood, 12-18\" long", priceRange: "$10-$15" },
  { name: "Control Joints", amount: "1-2 joints", notes: "Hand-tooled or insert strips, every 8-10 ft", priceRange: "$5-$10" },
  { name: "Curing Compound", amount: "1 gallon", notes: "Spray-on, prevents rapid moisture loss", priceRange: "$15-$25" },
];

const materials20x20: MaterialItem[] = [
  { name: "Concrete (4\" thick)", amount: "4.94 yd³ (223 × 80lb bags)", notes: "Ready-mix recommended at this volume", priceRange: "$600-$850" },
  { name: "Gravel Base (4\")", amount: "4.94 yd³ / ~7 tons", notes: "Compact 4-6\" of crushed stone (#57)", priceRange: "$120-$200" },
  { name: "Rebar (#4 @ 18\" OC)", amount: "~440 linear ft (22 × 20ft pieces)", notes: "Grid pattern both directions", priceRange: "$150-$200" },
  { name: "Vapor Barrier", amount: "1 roll (20×100ft)", notes: "Overlap seams 6 inches, tape edges", priceRange: "$35-$50" },
  { name: "Form Boards (2×6)", amount: "8 boards × 10ft = 80 linear ft", notes: "Stake every 2-3 feet, brace corners", priceRange: "$50-$80" },
  { name: "Stakes", amount: "30-40 wooden stakes", notes: "Metal stakes preferred for larger slabs", priceRange: "$15-$25" },
  { name: "Control Joints", amount: "4-6 joints", notes: "Every 8-10 ft in each direction", priceRange: "$10-$20" },
  { name: "Curing Compound", amount: "2-3 gallons", notes: "Coverage: ~200 sq ft per gallon", priceRange: "$30-$50" },
];

export default function SlabMaterialCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex text-sm text-secondary-600 mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/concrete" className="hover:text-primary">Concrete</Link>
        <span className="mx-2">/</span>
        <span className="text-secondary-900">Slab Material Calculator</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Concrete Slab Material Calculator
        </h1>
        <p className="text-xl text-secondary-600">
          Complete materials list for pouring a concrete slab. Everything you need from concrete and gravel to rebar and forms.
        </p>
      </div>

      {/* 10x10 Materials */}
      <Card className="mb-8 border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">Materials for a 10×10 Slab (4&quot; thick)</CardTitle>
              <CardDescription>Complete shopping list for a standard 100 sq ft slab</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary-200">
                  <th className="text-left py-3 px-4">Material</th>
                  <th className="text-left py-3 px-4">Quantity</th>
                  <th className="text-left py-3 px-4">Notes</th>
                  <th className="text-left py-3 px-4">Est. Cost</th>
                </tr>
              </thead>
              <tbody>
                {materials10x10.map((item) => (
                  <tr key={item.name} className="border-b border-secondary-100 hover:bg-secondary-50">
                    <td className="py-3 px-4 font-medium text-secondary-900">{item.name}</td>
                    <td className="py-3 px-4 text-sm">{item.amount}</td>
                    <td className="py-3 px-4 text-sm text-secondary-600">{item.notes}</td>
                    <td className="py-3 px-4 text-sm font-medium text-green-700">{item.priceRange}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-secondary-200">
                  <td colSpan={3} className="py-3 px-4 font-bold text-secondary-900">Estimated Total</td>
                  <td className="py-3 px-4 font-bold text-green-700">$305-$465</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* 20x20 Materials */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Materials for a 20×20 Slab (4&quot; thick)</CardTitle>
          <CardDescription>Complete shopping list for a 400 sq ft slab</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary-200">
                  <th className="text-left py-3 px-4">Material</th>
                  <th className="text-left py-3 px-4">Quantity</th>
                  <th className="text-left py-3 px-4">Notes</th>
                  <th className="text-left py-3 px-4">Est. Cost</th>
                </tr>
              </thead>
              <tbody>
                {materials20x20.map((item) => (
                  <tr key={item.name} className="border-b border-secondary-100 hover:bg-secondary-50">
                    <td className="py-3 px-4 font-medium text-secondary-900">{item.name}</td>
                    <td className="py-3 px-4 text-sm">{item.amount}</td>
                    <td className="py-3 px-4 text-sm text-secondary-600">{item.notes}</td>
                    <td className="py-3 px-4 text-sm font-medium text-green-700">{item.priceRange}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-secondary-200">
                  <td colSpan={3} className="py-3 px-4 font-bold text-secondary-900">Estimated Total</td>
                  <td className="py-3 px-4 font-bold text-green-700">$1,010-$1,475</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Additional Materials Checklist */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Tools &amp; Supplies Checklist</CardTitle>
          <CardDescription>Don&apos;t forget these essential items</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              "Concrete mixer (or wheelbarrow for small jobs)",
              "Shovels (flat and pointed)",
              "Concrete screed (straight 2×4)",
              "Float (magnessium or wood)",
              "Edger and groover tools",
              "Concrete finishing trowel",
              "Bucket and hose for water",
              "Level (4ft or longer)",
              "Measuring tape (25ft+)",
              "String line and stakes for layout",
              "Wheelbarrow",
              "Safety glasses and rubber gloves",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-secondary-700">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Note */}
      <Card className="mb-8 bg-amber-50 border-amber-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-amber-900 mb-1">Planning Tips</h4>
              <p className="text-amber-800 text-sm">
                Quantities are estimates. Actual material needs may vary based on site conditions, sub-grade preparation,
                and local building codes. Always verify with your supplier and check local requirements before ordering.
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
                Calculate Exact Amounts for Your Size
              </h3>
              <p className="text-secondary-600">
                Use our calculators to get precise quantities for any slab dimensions.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/concrete/slab"
                className="flex items-center gap-2 px-5 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                <Calculator className="w-4 h-4" />
                Slab Calculator
              </Link>
              <Link
                href="/concrete/rebar"
                className="flex items-center gap-2 px-5 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors whitespace-nowrap"
              >
                Rebar Calculator
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
            { href: "/concrete/rebar", title: "Rebar Calculator", desc: "Grid layout and lengths" },
            { href: "/concrete/gravel", title: "Gravel Calculator", desc: "Base material in tons" },
            { href: "/compare/ready-mix-vs-bagged-concrete", title: "Ready-Mix vs Bags", desc: "Which to buy?" },
            { href: "/concrete/slab-thickness-calculator", title: "Thickness Guide", desc: "How thick should your slab be?" },
            { href: "/concrete/how-to-calculate-concrete-slab", title: "How to Calculate", desc: "Step-by-step formula guide" },
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
