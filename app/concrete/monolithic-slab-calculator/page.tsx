import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Layers, ArrowRight, AlertTriangle, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Monolithic Slab Calculator - Estimate Concrete for Monolithic Foundations",
  description:
    "Calculate concrete needed for a monolithic slab with thickened edges. Enter slab area, footing depth, and perimeter for an accurate estimate including the perimeter beam.",
  keywords: [
    "monolithic slab calculator",
    "monolithic foundation calculator",
    "concrete monolithic slab",
    "thickened edge slab calculator",
    "monolithic pour concrete calculator",
  ],
};

export default function MonolithicSlabCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex text-sm text-secondary-600 mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/concrete" className="hover:text-primary">Concrete</Link>
        <span className="mx-2">/</span>
        <span className="text-secondary-900">Monolithic Slab Calculator</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Monolithic Slab Calculator
        </h1>
        <p className="text-xl text-secondary-600">
          Estimate concrete for a monolithic slab (thickened-edge slab) including the slab area, footing perimeter, and total volume.
        </p>
      </div>

      {/* What is a Monolithic Slab */}
      <Card className="mb-8 border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">What Is a Monolithic Slab?</CardTitle>
              <CardDescription>A single-pour foundation with integrated footings</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-secondary-700">
            A monolithic slab (also called a &quot;thickened-edge slab&quot;) is a concrete foundation where the slab
            and footing are poured at the same time. The perimeter edges are thickened to serve as footings,
            while the interior is a standard 4-6 inch slab.
          </p>
          <div className="bg-secondary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-secondary-900 mb-2">Key Components:</h4>
            <ul className="space-y-1">
              {[
                "Slab area: Standard 4-6\" thickness across the interior",
                "Thickened edge (footing): 12-24\" deep along the perimeter",
                "Perimeter beam: Typically 12\" wide at the base, tapering to slab thickness",
                "Reinforcement: Rebar in the footing and wire mesh in the slab field",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-secondary-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Volume Formula */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How to Calculate Monolithic Slab Concrete</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-secondary-50 p-4 rounded-lg font-mono text-sm space-y-2">
            <p><strong>Step 1 — Slab Volume:</strong></p>
            <p>Slab (cu ft) = Length × Width × (Slab Thickness ÷ 12)</p>
            <br />
            <p><strong>Step 2 — Footing Volume:</strong></p>
            <p>Perimeter = 2 × (Length + Width)</p>
            <p>Footing (cu ft) = Perimeter × Footing Width × (Footing Depth ÷ 12)</p>
            <p className="font-sans text-secondary-600 text-xs">(Subtract the slab portion already counted above)</p>
            <br />
            <p><strong>Step 3 — Total:</strong></p>
            <p>Total (cu yd) = (Slab + Footing) ÷ 27 × 1.10 (waste)</p>
          </div>
        </CardContent>
      </Card>

      {/* Example Calculations */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Example: 30×40 Monolithic Slab</CardTitle>
          <CardDescription>Slab: 4&quot; thick, Footing: 12&quot; wide × 12&quot; deep</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
              <div className="text-3xl font-bold text-blue-700">14.81</div>
              <div className="text-sm text-blue-600">yd³ (slab only)</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100">
              <div className="text-3xl font-bold text-green-700">4.44</div>
              <div className="text-sm text-green-600">yd³ (footing)</div>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg text-center border border-primary/20">
              <div className="text-3xl font-bold text-primary">21.18</div>
              <div className="text-sm text-secondary-600">yd³ (total w/ 10% waste)</div>
            </div>
          </div>
          <div className="bg-secondary-50 p-4 rounded-lg text-sm space-y-1">
            <p><strong>Slab:</strong> 30 × 40 × (4÷12) = 400 cu ft = 14.81 yd³</p>
            <p><strong>Footing:</strong> 140 ft perimeter × 1 ft × (12÷12) = 140 cu ft = 5.19 yd³</p>
            <p><strong>Overlap credit:</strong> 140 ft × 1 ft × (4÷12) = -46.67 cu ft = -1.73 yd³</p>
            <p><strong>Net footing:</strong> 5.19 - 1.73 = 3.46 yd³</p>
            <p><strong>Total:</strong> (14.81 + 3.46) × 1.10 = <strong>20.10 yd³</strong></p>
          </div>
        </CardContent>
      </Card>

      {/* More Examples */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Common Monolithic Slab Sizes</CardTitle>
          <CardDescription>Slab: 4&quot; thick, Footing: 12&quot; wide × 12&quot; deep</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary-200">
                  <th className="text-left py-3 px-4">Size</th>
                  <th className="text-center py-3 px-4">Slab (yd³)</th>
                  <th className="text-center py-3 px-4">Footing (yd³)</th>
                  <th className="text-center py-3 px-4">Total w/ 10%</th>
                  <th className="text-center py-3 px-4">Est. Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "20×30", slab: "7.41", ftg: "2.47", total: "10.87", cost: "$1,300-$1,900" },
                  { size: "24×36", slab: "10.67", ftg: "3.16", total: "15.21", cost: "$1,800-$2,700" },
                  { size: "30×40", slab: "14.81", ftg: "3.46", total: "20.10", cost: "$2,400-$3,600" },
                  { size: "30×50", slab: "18.52", ftg: "3.83", total: "24.59", cost: "$2,900-$4,400" },
                  { size: "40×60", slab: "29.63", ftg: "5.19", total: "38.30", cost: "$4,600-$6,900" },
                ].map((row) => (
                  <tr key={row.size} className="border-b border-secondary-100 hover:bg-secondary-50">
                    <td className="py-3 px-4 font-medium">{row.size}</td>
                    <td className="py-3 px-4 text-center">{row.slab}</td>
                    <td className="py-3 px-4 text-center">{row.ftg}</td>
                    <td className="py-3 px-4 text-center font-semibold text-primary">{row.total}</td>
                    <td className="py-3 px-4 text-center text-sm text-green-700">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Warning */}
      <Card className="mb-8 bg-red-50 border-red-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-red-900 mb-1">Structural Engineering Required</h4>
              <p className="text-red-800 text-sm">
                Monolithic slabs are structural foundations. The footing dimensions, rebar placement, and concrete
                strength must be designed by a licensed engineer and comply with local building codes. This calculator
                provides estimates only — always have your design verified by a professional.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* When to Use */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>When to Use a Monolithic Slab</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                <Check className="w-4 h-4" /> Good For
              </h4>
              <ul className="space-y-1 text-sm text-secondary-700">
                <li>• Garages and workshops</li>
                <li>• Pole barns and metal buildings</li>
                <li>• Single-story homes on level ground</li>
                <li>• Areas with stable, well-draining soil</li>
                <li>• Warm climates (no deep frost line)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Avoid When
              </h4>
              <ul className="space-y-1 text-sm text-secondary-700">
                <li>• Sloped or uneven terrain</li>
                <li>• Expansive clay soils</li>
                <li>• Deep frost line areas (without modification)</li>
                <li>• Multi-story structures</li>
                <li>• Heavy loads beyond residential</li>
              </ul>
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
                Need a Standard Slab Calculator?
              </h3>
              <p className="text-secondary-600">
                For non-monolithic slabs, use our standard slab calculator for volume and bag estimates.
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
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">Related Calculators</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/concrete/slab", title: "Concrete Slab Calculator", desc: "Standard slab volume and bags" },
            { href: "/concrete/footing", title: "Footing Calculator", desc: "Separate footing volume" },
            { href: "/concrete/foundation-calculator", title: "Foundation Calculator", desc: "All foundation types" },
            { href: "/concrete/rebar", title: "Rebar Calculator", desc: "Reinforcement estimates" },
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
