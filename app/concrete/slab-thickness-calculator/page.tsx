import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Ruler, AlertTriangle, Check, ArrowRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Concrete Slab Thickness Calculator - How Thick Should Your Slab Be?",
  description:
    "Determine the right concrete slab thickness for your project. Recommended thickness by use: patio 4\", driveway 5-6\", garage 6\", shed 4\". Includes how thickness affects concrete volume.",
  keywords: [
    "slab thickness calculator",
    "calculate concrete slab thickness",
    "calculating concrete slab thickness",
    "concrete slab measurements",
    "how thick should a concrete slab be",
    "concrete slab thickness guide",
  ],
};

interface ThicknessRecommendation {
  project: string;
  thickness: string;
  inches: number;
  notes: string;
  reinforcement: string;
}

const recommendations: ThicknessRecommendation[] = [
  {
    project: "Patio / Walkway",
    thickness: '4"',
    inches: 4,
    notes: "Standard for foot traffic only. Use welded wire mesh for crack control.",
    reinforcement: "Wire mesh optional",
  },
  {
    project: "Driveway (standard)",
    thickness: '4-5"',
    inches: 5,
    notes: "For passenger cars and light trucks. Use #3 rebar at 24\" spacing.",
    reinforcement: "#3 rebar at 24\" OC",
  },
  {
    project: "Driveway (heavy vehicle)",
    thickness: '6"',
    inches: 6,
    notes: "For trucks, RVs, or heavy equipment. Use #4 rebar at 18\" spacing.",
    reinforcement: "#4 rebar at 18\" OC",
  },
  {
    project: "Garage Floor",
    thickness: '6"',
    inches: 6,
    notes: "Standard for attached and detached garages. Add vapor barrier underneath.",
    reinforcement: "#4 rebar at 18\" OC",
  },
  {
    project: "Shed Slab",
    thickness: '4"',
    inches: 4,
    notes: "Suitable for most storage sheds up to 12x16. Thicken edges to 6-8\" for larger sheds.",
    reinforcement: "Wire mesh recommended",
  },
  {
    project: "Hot Tub Pad",
    thickness: '6"',
    inches: 6,
    notes: "Hot tubs are extremely heavy (5000+ lbs when filled). Use #4 rebar grid.",
    reinforcement: "#4 rebar at 12\" OC",
  },
  {
    project: "Concrete Countertop",
    thickness: '1.5-2"',
    inches: 2,
    notes: "Special mix required. Use GFRC or high-strength bags. Reinforce with fiberglass mesh.",
    reinforcement: "Fiberglass mesh",
  },
  {
    project: "Foundation Footing",
    thickness: '8-12"',
    inches: 10,
    notes: "Must comply with local building codes. Typically 8\" minimum below frost line.",
    reinforcement: "#4 or #5 rebar (2 continuous)",
  },
];

const thicknessVolume = [
  { size: "10×10", "4in": "1.23", "5in": "1.54", "6in": "1.85" },
  { size: "10×12", "4in": "1.48", "5in": "1.85", "6in": "2.22" },
  { size: "12×12", "4in": "1.78", "5in": "2.22", "6in": "2.67" },
  { size: "20×20", "4in": "4.94", "5in": "6.17", "6in": "7.41" },
  { size: "24×24", "4in": "7.11", "5in": "8.89", "6in": "10.67" },
  { size: "30×40", "4in": "14.81", "5in": "18.52", "6in": "22.22" },
];

export default function SlabThicknessCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex text-sm text-secondary-600 mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/concrete" className="hover:text-primary">Concrete</Link>
        <span className="mx-2">/</span>
        <span className="text-secondary-900">Slab Thickness Calculator</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Concrete Slab Thickness Calculator
        </h1>
        <p className="text-xl text-secondary-600">
          How thick should your concrete slab be? Find the right thickness for patios, driveways, garages, sheds, and more.
        </p>
      </div>

      {/* Quick Reference Card */}
      <Card className="mb-8 border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Ruler className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">Recommended Thickness by Project Type</CardTitle>
              <CardDescription>Common standards for residential concrete slabs</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary-200">
                  <th className="text-left py-3 px-4">Project Type</th>
                  <th className="text-center py-3 px-4">Thickness</th>
                  <th className="text-left py-3 px-4">Reinforcement</th>
                  <th className="text-left py-3 px-4">Notes</th>
                </tr>
              </thead>
              <tbody>
                {recommendations.map((rec) => (
                  <tr key={rec.project} className="border-b border-secondary-100 hover:bg-secondary-50">
                    <td className="py-3 px-4 font-medium text-secondary-900">{rec.project}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                        {rec.thickness}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-secondary-700">{rec.reinforcement}</td>
                    <td className="py-3 px-4 text-sm text-secondary-600">{rec.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* How Thickness Affects Volume */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How Thickness Affects Concrete Volume</CardTitle>
          <CardDescription>More thickness means more cubic yards — compare common sizes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary-200">
                  <th className="text-left py-3 px-4">Slab Size</th>
                  <th className="text-center py-3 px-4">4&quot; Thick</th>
                  <th className="text-center py-3 px-4">5&quot; Thick</th>
                  <th className="text-center py-3 px-4">6&quot; Thick</th>
                </tr>
              </thead>
              <tbody>
                {thicknessVolume.map((row) => (
                  <tr key={row.size} className="border-b border-secondary-100 hover:bg-secondary-50">
                    <td className="py-3 px-4 font-medium">{row.size}</td>
                    <td className="py-3 px-4 text-center">{row["4in"]} yd&sup3;</td>
                    <td className="py-3 px-4 text-center">{row["5in"]} yd&sup3;</td>
                    <td className="py-3 px-4 text-center">{row["6in"]} yd&sup3;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-secondary-500 mt-4">
            Going from 4&quot; to 6&quot; increases concrete volume by 50% — plan accordingly.
          </p>
        </CardContent>
      </Card>

      {/* Key Factors */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What Determines Slab Thickness?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { title: "Load / Traffic", desc: "Foot traffic needs less thickness than vehicle traffic. Heavy equipment requires 6\"+ with rebar." },
            { title: "Soil Conditions", desc: "Expansive clay or poorly compacted soil may require a thicker slab or additional base preparation." },
            { title: "Climate / Frost Line", desc: "In freeze-thaw climates, thicker slabs with proper air entrainment resist cracking better." },
            { title: "Building Codes", desc: "Always check local building codes. Some jurisdictions require minimum thicknesses for certain projects." },
            { title: "Reinforcement", desc: "Adding rebar or wire mesh allows thinner slabs to perform better under load." },
          ].map((factor) => (
            <div key={factor.title} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-secondary-900">{factor.title}</h4>
                <p className="text-sm text-secondary-600">{factor.desc}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Warning */}
      <Card className="mb-8 bg-amber-50 border-amber-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-amber-900 mb-1">Structural Disclaimer</h4>
              <p className="text-amber-800 text-sm">
                These are general guidelines for residential projects. For structural slabs, commercial applications,
                or projects requiring building permits, consult a licensed structural engineer. Local building codes
                may mandate different requirements.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sub-Base Preparation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Sub-Base Preparation</CardTitle>
          <CardDescription>Proper base prep is as important as slab thickness</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            "Compact native soil or add 4-6\" of gravel/crushed stone base",
            "Ensure proper grading for drainage (1/4\" per foot slope away from structures)",
            "Install vapor barrier (6-mil polyethylene) for interior slabs",
            "Place forms securely and check for level",
            "Dampen sub-base before pouring to prevent moisture absorption",
          ].map((step) => (
            <div key={step} className="flex items-start gap-2 text-secondary-700">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm">{step}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                Calculate How Much Concrete You Need
              </h3>
              <p className="text-secondary-600">
                Now that you know the right thickness, use our calculator to estimate cubic yards and bags.
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

      {/* Related Resources */}
      <div>
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">Related Calculators</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/concrete/slab", title: "Concrete Slab Calculator", desc: "Calculate volume, bags, and cost" },
            { href: "/concrete/rebar", title: "Rebar Calculator", desc: "Estimate reinforcement for your slab" },
            { href: "/concrete/gravel", title: "Gravel Calculator", desc: "Calculate sub-base material needed" },
            { href: "/concrete/how-to-calculate-concrete-slab", title: "How to Calculate Concrete", desc: "Step-by-step formula guide" },
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
