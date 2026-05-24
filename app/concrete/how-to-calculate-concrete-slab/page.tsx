import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { BookOpen, Calculator, ArrowRight, Check, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Calculate Concrete for a Slab - Step-by-Step Guide",
  description:
    "Learn how to calculate concrete for a slab with our step-by-step guide. Includes formula, thickness conversion, cubic feet to cubic yards, bag estimates, and worked examples for 10x10 and 12x12 slabs.",
  keywords: [
    "how to calculate concrete slab",
    "how do you calculate concrete slab",
    "how to calculate concrete for a slab",
    "calculate for concrete slab",
    "slab calculation",
    "slab concrete calculation",
    "concrete slab formula",
  ],
};

const steps = [
  {
    number: 1,
    title: "Measure the Slab Area",
    content: "Measure the length and width of your slab in feet. For rectangular slabs, multiply length × width to get the area in square feet.",
    example: "Example: 10 feet long × 10 feet wide = 100 sq ft area",
  },
  {
    number: 2,
    title: "Convert Thickness to Feet",
    content: "Concrete thickness is measured in inches but must be converted to feet for the volume formula. Divide your thickness in inches by 12.",
    example: 'Example: 4 inches ÷ 12 = 0.333 feet',
  },
  {
    number: 3,
    title: "Calculate Cubic Feet",
    content: "Multiply length × width × thickness (in feet) to get the volume in cubic feet.",
    example: "Example: 10 × 10 × 0.333 = 33.3 cubic feet",
  },
  {
    number: 4,
    title: "Convert to Cubic Yards",
    content: "Concrete is ordered by the cubic yard. Divide cubic feet by 27 (since 1 cubic yard = 27 cubic feet).",
    example: "Example: 33.3 ÷ 27 = 1.23 cubic yards",
  },
  {
    number: 5,
    title: "Add Waste Factor (10%)",
    content: "Always add 10% extra for spillage, uneven ground, and form irregularities. Multiply your cubic yards by 1.10.",
    example: "Example: 1.23 × 1.10 = 1.36 cubic yards (order this much)",
  },
  {
    number: 6,
    title: "Convert to Bags (if using bagged concrete)",
    content: "If mixing your own: each 80lb bag yields ~0.60 cu ft, each 60lb bag yields ~0.45 cu ft. Divide total cubic feet by bag yield.",
    example: "Example: 33.3 ÷ 0.60 = 56 bags of 80lb concrete",
  },
];

export default function HowToCalculateConcreteSlabPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex text-sm text-secondary-600 mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/concrete" className="hover:text-primary">Concrete</Link>
        <span className="mx-2">/</span>
        <span className="text-secondary-900">How to Calculate Concrete Slab</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          How to Calculate Concrete for a Slab
        </h1>
        <p className="text-xl text-secondary-600">
          A step-by-step guide with formulas, examples, and conversion tables to calculate exactly how much concrete you need.
        </p>
      </div>

      {/* Quick Formula */}
      <Card className="mb-8 border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            The Concrete Slab Formula
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-secondary-50 p-6 rounded-lg space-y-3 font-mono text-lg">
            <p><strong>Cubic Feet</strong> = Length (ft) × Width (ft) × Thickness (ft)</p>
            <p><strong>Cubic Yards</strong> = Cubic Feet ÷ 27</p>
            <p><strong>Thickness (ft)</strong> = Thickness (inches) ÷ 12</p>
            <hr className="border-secondary-300 my-4" />
            <p className="text-base font-sans text-secondary-600">
              <strong>With waste:</strong> Cubic Yards × 1.10 = Total to Order
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Step-by-step */}
      <div className="space-y-6 mb-8">
        {steps.map((step) => (
          <Card key={step.number}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">{step.title}</h3>
                  <p className="text-secondary-700 mb-3">{step.content}</p>
                  <div className="bg-primary/5 p-3 rounded-lg text-sm text-primary-800 border border-primary/10">
                    {step.example}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Worked Examples */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Worked Examples</CardTitle>
          <CardDescription>Common slab sizes with full calculations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* 10x10 Example */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-3">10×10 Slab at 4&quot; Thick</h4>
            <div className="bg-secondary-50 p-4 rounded-lg space-y-1 text-sm font-mono">
              <p>Area: 10 × 10 = 100 sq ft</p>
              <p>Thickness: 4&quot; ÷ 12 = 0.333 ft</p>
              <p>Volume: 100 × 0.333 = 33.3 cu ft</p>
              <p>Cubic yards: 33.3 ÷ 27 = <strong>1.23 yd&sup3;</strong></p>
              <p>With 10% waste: 1.23 × 1.10 = <strong>1.36 yd&sup3;</strong></p>
              <p>80lb bags: 33.3 ÷ 0.60 = <strong>56 bags</strong></p>
              <p>60lb bags: 33.3 ÷ 0.45 = <strong>75 bags</strong></p>
            </div>
          </div>

          {/* 12x12 Example */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-3">12×12 Slab at 4&quot; Thick</h4>
            <div className="bg-secondary-50 p-4 rounded-lg space-y-1 text-sm font-mono">
              <p>Area: 12 × 12 = 144 sq ft</p>
              <p>Thickness: 4&quot; ÷ 12 = 0.333 ft</p>
              <p>Volume: 144 × 0.333 = 48.0 cu ft</p>
              <p>Cubic yards: 48.0 ÷ 27 = <strong>1.78 yd&sup3;</strong></p>
              <p>With 10% waste: 1.78 × 1.10 = <strong>1.95 yd&sup3;</strong></p>
              <p>80lb bags: 48.0 ÷ 0.60 = <strong>80 bags</strong></p>
              <p>60lb bags: 48.0 ÷ 0.45 = <strong>107 bags</strong></p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conversion Quick Reference */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Thickness Conversion Table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary-200">
                  <th className="text-left py-3 px-4">Inches</th>
                  <th className="text-left py-3 px-4">Feet</th>
                  <th className="text-left py-3 px-4">Decimal</th>
                  <th className="text-left py-3 px-4">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { in: '3"', ft: '0\' 3"', dec: "0.250", use: "Light-duty walkway" },
                  { in: '4"', ft: '0\' 4"', dec: "0.333", use: "Patio, shed, walkway" },
                  { in: '5"', ft: '0\' 5"', dec: "0.417", use: "Standard driveway" },
                  { in: '6"', ft: '0\' 6"', dec: "0.500", use: "Garage, heavy-duty driveway" },
                  { in: '8"', ft: '0\' 8"', dec: "0.667", use: "Foundation footing" },
                  { in: '10"', ft: '0\' 10"', dec: "0.833", use: "Thickened edge / footing" },
                  { in: '12"', ft: '1\' 0"', dec: "1.000", use: "Full foot of concrete" },
                ].map((row) => (
                  <tr key={row.in} className="border-b border-secondary-100">
                    <td className="py-3 px-4 font-medium">{row.in}</td>
                    <td className="py-3 px-4">{row.ft}</td>
                    <td className="py-3 px-4 font-mono text-sm">{row.dec}</td>
                    <td className="py-3 px-4 text-sm text-secondary-600">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Bag Yield Reference */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Concrete Bag Yield</CardTitle>
          <CardDescription>How much concrete each bag produces</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary-200">
                  <th className="text-left py-3 px-4">Bag Size</th>
                  <th className="text-left py-3 px-4">Yield (cu ft)</th>
                  <th className="text-left py-3 px-4">Bags per Cubic Yard</th>
                  <th className="text-left py-3 px-4">Typical Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: "40 lb", yield: "0.30", perYard: "90", price: "$3-5" },
                  { size: "60 lb", yield: "0.45", perYard: "60", price: "$4-6" },
                  { size: "80 lb", yield: "0.60", perYard: "45", price: "$5-7" },
                  { size: "90 lb", yield: "0.68", perYard: "40", price: "$6-8" },
                ].map((row) => (
                  <tr key={row.size} className="border-b border-secondary-100">
                    <td className="py-3 px-4 font-medium">{row.size}</td>
                    <td className="py-3 px-4">{row.yield}</td>
                    <td className="py-3 px-4">{row.perYard}</td>
                    <td className="py-3 px-4 text-sm text-secondary-600">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pro Tips */}
      <Card className="mb-8 bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Lightbulb className="w-5 h-5" />
            Pro Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {[
              "Always round up when ordering concrete — running short mid-pour is a disaster.",
              "Ready-mix trucks typically have a 1-yard minimum order, with a small-load fee under 3 yards.",
              "For odd shapes, break the area into rectangles, calculate each separately, then add together.",
              "Double-check your measurements. A 1-foot error on a 20×20 slab means 1.23 yards difference at 4\".",
              "Order 10% extra for waste. It's cheaper to have a little left over than to run short.",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-sm text-blue-800">
                <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                Skip the Math — Use Our Calculator
              </h3>
              <p className="text-secondary-600">
                Enter your dimensions and get instant results in cubic yards, bags, and cost estimates.
              </p>
            </div>
            <Link
              href="/concrete/slab"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              <Calculator className="w-5 h-5" />
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
            { href: "/concrete/slab", title: "Concrete Slab Calculator", desc: "Calculate volume, bags, and cost" },
            { href: "/concrete/slab-thickness-calculator", title: "Slab Thickness Guide", desc: "How thick should your slab be?" },
            { href: "/size/10/x10/concrete/slab", title: "Concrete for 10×10 Slab", desc: "Exact amounts for 10×10" },
            { href: "/size/12/x12/concrete/slab", title: "Concrete for 12×12 Slab", desc: "Exact amounts for 12×12" },
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
