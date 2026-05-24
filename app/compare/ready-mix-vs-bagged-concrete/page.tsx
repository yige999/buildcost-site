import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Truck, ShoppingBag, Check, X, ArrowRight, Scale, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Ready-Mix vs Bagged Concrete - Which Should You Use?",
  description:
    "Compare ready-mix vs bagged concrete for your project. Cost breakdown, when to use each, labor comparison, delivery fees, and real examples.",
  keywords: [
    "ready-mix vs bagged concrete",
    "ready-mix vs bags of concrete",
    "should I order ready-mix concrete",
    "bagged concrete vs truck delivery",
    "concrete bags vs ready-mix cost",
  ],
};

interface ComparisonItem {
  label: string;
  readyMix: string;
  bagged: string;
  winner?: "ready-mix" | "bagged" | "tie";
}

const comparisons: ComparisonItem[] = [
  {
    label: "Cost per Cubic Yard",
    readyMix: "$110-$165 per yd³",
    bagged: "$200-$350 per yd³ (56 × 80lb @ $5)",
    winner: "ready-mix",
  },
  {
    label: "Best For Projects Under",
    readyMix: "N/A (minimum order 1-3 yd³)",
    bagged: "1 cubic yard or less",
    winner: "bagged",
  },
  {
    label: "Best For Projects Over",
    readyMix: "1 cubic yard",
    bagged: "N/A (too many bags)",
    winner: "ready-mix",
  },
  {
    label: "Consistency & Quality",
    readyMix: "Professional batch, consistent mix",
    bagged: "Varies by mixing quality",
    winner: "ready-mix",
  },
  {
    label: "Labor Required",
    readyMix: "2-4 people for finishing",
    bagged: "1-2 people + lots of mixing time",
    winner: "ready-mix",
  },
  {
    label: "Setup Time",
    readyMix: "Minimal (forms + rebar only)",
    bagged: "Need mixer, water source, staging area",
    winner: "ready-mix",
  },
  {
    label: "Scheduling Flexibility",
    readyMix: "Must schedule delivery window",
    bagged: "Work at your own pace",
    winner: "bagged",
  },
  {
    label: "Small Jobs (repairs, posts)",
    readyMix: "Not practical (minimum orders)",
    bagged: "Perfect for small patches",
    winner: "bagged",
  },
  {
    label: "Remote Locations",
    readyMix: "May charge extra or can't reach",
    bagged: "Transportable anywhere",
    winner: "bagged",
  },
  {
    label: "One-Pour Guarantee",
    readyMix: "Entire slab poured at once",
    bagged: "Risk of cold joints between batches",
    winner: "ready-mix",
  },
];

const costExamples = [
  {
    project: "10×10 Patio (4\" thick)",
    yards: "1.23",
    readyMixCost: "$150-$200 + delivery",
    bagsCost: "$280-$390 (56 bags)",
    savings: "Save $80-$190 with ready-mix",
  },
  {
    project: "12×12 Shed Slab (4\" thick)",
    yards: "1.78",
    readyMixCost: "$200-$290 + delivery",
    bagsCost: "$400-$560 (80 bags)",
    savings: "Save $150-$320 with ready-mix",
  },
  {
    project: "20×20 Garage (6\" thick)",
    yards: "7.41",
    readyMixCost: "$815-$1,225 + delivery",
    bagsCost: "$1,700-$2,380 (340 bags)",
    savings: "Save $800-$1,200 with ready-mix",
  },
  {
    project: "Fence Post Repair",
    yards: "0.10",
    readyMixCost: "Not practical (min order)",
    bagsCost: "$5-$7 (1 bag)",
    savings: "Use bagged concrete",
  },
];

export default function ReadyMixVsBaggedPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex text-sm text-secondary-600 mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/compare" className="hover:text-primary">Compare</Link>
        <span className="mx-2">/</span>
        <span className="text-secondary-900">Ready-Mix vs Bagged Concrete</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Ready-Mix vs Bagged Concrete: Which Should You Use?
        </h1>
        <p className="text-xl text-secondary-600">
          Complete comparison to help you decide between ready-mix delivery and bagged concrete for your project.
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
              <h3 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Order Ready-Mix If:
              </h3>
              <ul className="space-y-1 text-sm text-secondary-700">
                <li>• Your project needs <strong>over 1 cubic yard</strong></li>
                <li>• You want consistent, professional-grade concrete</li>
                <li>• The entire pour must happen at once</li>
                <li>• You have truck access to the site</li>
                <li>• Time is a factor (pours in minutes, not hours)</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-amber-700 mb-2 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Use Bagged Concrete If:
              </h3>
              <ul className="space-y-1 text-sm text-secondary-700">
                <li>• Your project needs <strong>under 1 cubic yard</strong></li>
                <li>• You&apos;re doing small repairs or setting posts</li>
                <li>• The site is remote or hard to reach</li>
                <li>• You want to work at your own pace</li>
                <li>• You can&apos;t schedule a delivery window</li>
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
                  <th className="text-left py-3 px-4 font-semibold">Factor</th>
                  <th className="text-center py-3 px-4 font-semibold text-blue-600">Ready-Mix</th>
                  <th className="text-center py-3 px-4 font-semibold text-amber-600">Bagged</th>
                  <th className="text-center py-3 px-4 font-semibold">Winner</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item) => (
                  <tr key={item.label} className="border-b border-secondary-100">
                    <td className="py-3 px-4 font-medium text-secondary-900">{item.label}</td>
                    <td className="py-3 px-4 text-center text-sm">{item.readyMix}</td>
                    <td className="py-3 px-4 text-center text-sm">{item.bagged}</td>
                    <td className="py-3 px-4 text-center">
                      {item.winner === "ready-mix" && <span className="text-blue-600 font-semibold text-sm">Ready-Mix</span>}
                      {item.winner === "bagged" && <span className="text-amber-600 font-semibold text-sm">Bagged</span>}
                      {item.winner === "tie" && <span className="text-secondary-600 text-sm">Tie</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Cost Comparison */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Real Project Cost Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary-200">
                  <th className="text-left py-3 px-4">Project</th>
                  <th className="text-center py-3 px-4">Yards</th>
                  <th className="text-center py-3 px-4">Ready-Mix Cost</th>
                  <th className="text-center py-3 px-4">Bags Cost</th>
                </tr>
              </thead>
              <tbody>
                {costExamples.map((row) => (
                  <tr key={row.project} className="border-b border-secondary-100">
                    <td className="py-3 px-4 font-medium text-secondary-900">{row.project}</td>
                    <td className="py-3 px-4 text-center">{row.yards}</td>
                    <td className="py-3 px-4 text-center text-sm text-blue-700">{row.readyMixCost}</td>
                    <td className="py-3 px-4 text-center text-sm text-amber-700">{row.bagsCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Delivery Fees */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Ready-Mix Delivery Fees to Know</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[
              { fee: "Minimum load charge", desc: "$50-$100 if ordering under 3-5 yards" },
              { fee: "Distance surcharge", desc: "$1-3 per mile beyond plant radius (typically 10-20 miles)" },
              { fee: "Wait time fee", desc: "$2-4 per minute after 5-10 minutes on site" },
              { fee: "Pump truck", desc: "$150-$250 flat + $3-5/yd³ if truck can't reach pour location" },
              { fee: "Saturday/holiday delivery", desc: "$50-$100 surcharge" },
              { fee: "Environmental/surcharge", desc: "$5-15 per load (fuel, California fee, etc.)" },
            ].map((item) => (
              <div key={item.fee} className="flex justify-between text-sm border-b border-secondary-50 pb-2">
                <span className="font-medium text-secondary-900">{item.fee}</span>
                <span className="text-secondary-600">{item.desc}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pros and Cons */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-700">Ready-Mix Pros &amp; Cons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                <Check className="w-4 h-4" /> Pros
              </h4>
              <ul className="space-y-1 text-sm text-secondary-700">
                <li>• 50-70% cheaper per yard than bags</li>
                <li>• Consistent quality and strength</li>
                <li>• One continuous pour (no cold joints)</li>
                <li>• Fast — entire pour in minutes</li>
                <li>• Professional-grade mix design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                <X className="w-4 h-4" /> Cons
              </h4>
              <ul className="space-y-1 text-sm text-secondary-700">
                <li>• Minimum order (usually 1-3 yards)</li>
                <li>• Must schedule delivery window</li>
                <li>• Limited working time (60-90 min)</li>
                <li>• Needs truck access to site</li>
                <li>• Delivery fees can add up</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-amber-700">Bagged Concrete Pros &amp; Cons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                <Check className="w-4 h-4" /> Pros
              </h4>
              <ul className="space-y-1 text-sm text-secondary-700">
                <li>• Available at any home improvement store</li>
                <li>• Work at your own pace</li>
                <li>• No scheduling or delivery needed</li>
                <li>• Works in remote locations</li>
                <li>• Buy exactly what you need</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                <X className="w-4 h-4" /> Cons
              </h4>
              <ul className="space-y-1 text-sm text-secondary-700">
                <li>• 2-3x more expensive per yard</li>
                <li>• Labor-intensive mixing</li>
                <li>• Risk of inconsistent mix quality</li>
                <li>• Cold joints between batches</li>
                <li>• Not practical over 1 cubic yard</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Note */}
      <Card className="mb-8 bg-amber-50 border-amber-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-amber-900 mb-1">Rule of Thumb</h4>
              <p className="text-amber-800 text-sm">
                <strong>Under 1 yard:</strong> Use bagged concrete. <strong>Over 1 yard:</strong> Get ready-mix.
                The crossover point is around 45 bags (80lb) — once you need more than that,
                ready-mix is almost always cheaper, faster, and better quality.
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
                Calculate How Much Concrete You Need
              </h3>
              <p className="text-secondary-600">
                Enter your project dimensions to get cubic yards and bag estimates.
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { href: "/concrete/slab", title: "Concrete Slab Calculator", desc: "Volume and bag estimates" },
            { href: "/concrete/slab-material-calculator", title: "Slab Material Calculator", desc: "Complete materials list" },
            { href: "/concrete/bag-coverage", title: "Bag Coverage Calculator", desc: "How much does one bag cover?" },
            { href: "/concrete/slab-thickness-calculator", title: "Slab Thickness Guide", desc: "How thick should your slab be?" },
            { href: "/compare/concrete-vs-pavers", title: "Concrete vs Pavers", desc: "Material comparison" },
            { href: "/concrete/how-to-calculate-concrete-slab", title: "How to Calculate", desc: "Step-by-step guide" },
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
