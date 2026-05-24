import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Home, ArrowRight, Check, AlertTriangle, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Basement Concrete Floor Calculator - Estimate Concrete for Basement Slabs",
  description:
    "Calculate concrete needed for a basement floor slab. Includes vapor barrier, thickness options, moisture considerations, and ready-mix estimates.",
  keywords: [
    "basement concrete calculator",
    "basement floor concrete calculator",
    "concrete for basement floor",
    "how much concrete for basement slab",
    "basement slab calculator",
  ],
};

export default function BasementFloorCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex text-sm text-secondary-600 mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/concrete" className="hover:text-primary">Concrete</Link>
        <span className="mx-2">/</span>
        <span className="text-secondary-900">Basement Floor Calculator</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Basement Concrete Floor Calculator
        </h1>
        <p className="text-xl text-secondary-600">
          Estimate concrete needed for a basement floor slab, including moisture protection and vapor barrier requirements.
        </p>
      </div>

      {/* Quick Answer */}
      <Card className="mb-8 border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">Basement Slab Estimates</CardTitle>
              <CardDescription>Standard 4-5 inch thickness with 10% waste</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary-200">
                  <th className="text-left py-3 px-4">Basement Size</th>
                  <th className="text-center py-3 px-4">4&quot; Slab (yd³)</th>
                  <th className="text-center py-3 px-4">5&quot; Slab (yd³)</th>
                  <th className="text-center py-3 px-4">Ready-Mix Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "20×30 (600 sqft)", "4in": "8.15", "5in": "10.19", cost: "$975-$1,225" },
                  { size: "24×36 (864 sqft)", "4in": "11.73", "5in": "14.67", cost: "$1,400-$1,760" },
                  { size: "28×40 (1,120 sqft)", "4in": "15.21", "5in": "19.01", cost: "$1,820-$2,280" },
                  { size: "30×40 (1,200 sqft)", "4in": "16.30", "5in": "20.37", cost: "$1,950-$2,440" },
                  { size: "30×50 (1,500 sqft)", "4in": "20.37", "5in": "25.46", cost: "$2,440-$3,060" },
                  { size: "40×60 (2,400 sqft)", "4in": "32.59", "5in": "40.74", cost: "$3,900-$4,890" },
                ].map((row) => (
                  <tr key={row.size} className="border-b border-secondary-100 hover:bg-secondary-50">
                    <td className="py-3 px-4 font-medium text-secondary-900">{row.size}</td>
                    <td className="py-3 px-4 text-center">{row["4in"]}</td>
                    <td className="py-3 px-4 text-center">{row["5in"]}</td>
                    <td className="py-3 px-4 text-center text-sm text-green-700">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Moisture & Vapor Barrier */}
      <Card className="mb-8 bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Droplets className="w-5 h-5" />
            Moisture Protection Is Critical
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-blue-800 text-sm">
            Basement floors are below grade and constantly exposed to moisture from the ground.
            A proper moisture management system is essential to prevent mold, water damage, and indoor air quality issues.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Required Layers (Bottom to Top):</h4>
              <ul className="space-y-1 text-sm text-blue-800">
                <li>1. Compacted gravel base (4-6&quot;)</li>
                <li>2. Vapor barrier (6-mil or 10-mil polyethylene)</li>
                <li>3. Optional: Rigid foam insulation (R-5 to R-10)</li>
                <li>4. Concrete slab (4-5&quot;)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Vapor Barrier Tips:</h4>
              <ul className="space-y-1 text-sm text-blue-800">
                <li>• Overlap seams by 6 inches minimum</li>
                <li>• Tape all seams with waterproof tape</li>
                <li>• Extend 6+ inches up foundation walls</li>
                <li>• 10-mil preferred for better durability</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Thickness Guide */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Basement Slab Thickness</CardTitle>
          <CardDescription>Recommended thickness depends on use</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { thickness: '4"', use: "Standard residential basement floor (living space, storage)", rec: "Most common for new construction" },
            { thickness: '5"', use: "Basement with heavy storage, workshop, or exercise equipment", rec: "Provides extra durability" },
            { thickness: '6"', use: "Basement garage, heavy equipment, or commercial use", rec: "Requires #4 rebar reinforcement" },
          ].map((item) => (
            <div key={item.thickness} className="flex items-start gap-3">
              <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm flex-shrink-0">
                {item.thickness}
              </span>
              <div>
                <p className="text-secondary-900">{item.use}</p>
                <p className="text-sm text-secondary-600">{item.rec}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Materials List */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Materials for a 30×40 Basement Floor (4&quot; thick)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary-200">
                  <th className="text-left py-3 px-4">Material</th>
                  <th className="text-left py-3 px-4">Quantity</th>
                  <th className="text-left py-3 px-4">Est. Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mat: "Concrete (4\" slab)", qty: "16.30 yd³ (ready-mix)", cost: "$1,630-$1,955" },
                  { mat: "Gravel base (4\")", qty: "~10 tons", cost: "$150-$250" },
                  { mat: "Vapor barrier (10-mil)", qty: "1,200 sq ft + overlaps", cost: "$80-$120" },
                  { mat: "Wire mesh (6×6 W1.4×1.4)", qty: "~1,200 sq ft", cost: "$120-$180" },
                  { mat: "Foam insulation (optional)", qty: "~1,200 sq ft (2\" XPS)", cost: "$600-$900" },
                  { mat: "Polyethylene tape", qty: "2-3 rolls", cost: "$15-$25" },
                ].map((row) => (
                  <tr key={row.mat} className="border-b border-secondary-100">
                    <td className="py-3 px-4 font-medium text-secondary-900">{row.mat}</td>
                    <td className="py-3 px-4 text-sm">{row.qty}</td>
                    <td className="py-3 px-4 text-sm text-green-700">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Ready Mix Note */}
      <Card className="mb-8 bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-green-900 mb-1">Ready-Mix Recommended</h4>
              <p className="text-green-800 text-sm">
                Basement slabs almost always require ready-mix concrete due to the volume involved.
                A pump truck is typically needed since the concrete must reach below grade.
                Schedule delivery carefully — basement pours must be completed in a single session.
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
                Calculate for Your Exact Basement Size
              </h3>
              <p className="text-secondary-600">
                Use our slab calculator for custom dimensions.
              </p>
            </div>
            <Link
              href="/concrete/slab"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Slab Calculator
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Related */}
      <div>
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">Related Resources</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/concrete/slab", title: "Concrete Slab Calculator", desc: "Volume and bag estimates" },
            { href: "/concrete/foundation-calculator", title: "Foundation Calculator", desc: "All foundation types" },
            { href: "/concrete/gravel", title: "Gravel Calculator", desc: "Base material estimate" },
            { href: "/concrete/rebar", title: "Rebar Calculator", desc: "Reinforcement for your slab" },
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
