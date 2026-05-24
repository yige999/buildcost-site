/**
 * Answer Engine Page - Specific Size Calculations
 * Pattern: /size/{width}x{length}/{category}/{tool}
 * Targets queries like "how much concrete for 10x10 slab"
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  calculatorExists,
  getCalculatorBySlug,
  getCategoryBySlug,
  getCalculatorIdsWithFAQs,
} from "@/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Calculator, Package, DollarSign, AlertCircle, ArrowRight } from "lucide-react";
import { generateSizeAnswer, calculateConcreteRequirements } from "@/data/common-sizes";

function getUsesForSize(w: number, l: number): string[] {
  const area = w * l;
  if (area <= 120) return ["Storage shed foundation", "Small patio", "Hot tub base", "Dog kennel", "Garden shed", "AC pad"];
  if (area <= 200) return ["Workshop foundation", "Medium patio", "Shed foundation", "Small garage", "Pool equipment pad", "Driveway extension"];
  if (area <= 400) return ["Two-car garage floor", "Large workshop", "Patio & outdoor kitchen", "RV pad", "Basketball court", "Driveway"];
  return ["Large garage", "Pole barn foundation", "Commercial building", "Warehouse floor", "Sports court", "Parking area"];
}

function getThicknessRecommendation(w: number, l: number): string {
  const area = w * l;
  if (area <= 120) return "For most small slabs (sheds, patios), 4 inches is standard. If the slab will support heavy loads like a hot tub, increase to 5-6 inches.";
  if (area <= 200) return "A 4-inch slab works for light-duty use (shed, patio). For vehicle parking, go with 5-6 inches and add rebar reinforcement.";
  return "For vehicle or heavy loads, use 6 inches with rebar reinforcement. Light-duty applications can use 4-5 inches. Always check local building codes.";
}

interface SizePageProps {
  params: Promise<{
    width: string;
    dimension: string;
    category: string;
    tool: string;
  }>;
}

/**
 * Generate static params for common sizes
 */
export async function generateStaticParams() {
  // Common sizes to generate pages for
  const commonSizes = [
    "10x10", "10x12", "10x20", "12x12", "12x20", "20x20", "20x24", "24x24",
    "24x30", "24x40", "30x30", "30x40", "30x50", "40x40", "40x60", "40x80",
  ];

  const params: Array<{
    width: string;
    dimension: string;
    category: string;
    tool: string;
  }> = [];

  for (const size of commonSizes) {
    const [width, dimension] = size.split("x");
    params.push({
      width,
      dimension,
      category: "concrete",
      tool: "slab",
    });
  }

  return params;
}

/**
 * Generate metadata for size pages
 */
export async function generateMetadata({ params }: SizePageProps): Promise<Metadata> {
  const { width, dimension, category, tool } = await params;

  if (!calculatorExists(category, tool)) {
    return { title: "Calculator Not Found" };
  }

  const calc = getCalculatorBySlug(category, tool);

  const w = parseInt(width);
  const l = parseInt(dimension);

  if (isNaN(w) || isNaN(l)) {
    return { title: "Invalid Size" };
  }

  const requirements = calculateConcreteRequirements(w, l, 4);

  const titleMap: Record<string, string> = {
    "10x10": `How Much Concrete Do I Need for a 10×10 Slab? (${requirements.cubicYards} Yards)`,
    "10x12": `How Much Concrete Do I Need for a 10×12 Slab? (${requirements.cubicYards} Yards)`,
    "12x12": `How Much Concrete for a 12×12 Slab? (${requirements.cubicYards} Yards)`,
    "20x20": `How Much Concrete Do I Need for a 20×20 Slab? (${requirements.cubicYards} Yards)`,
    "24x24": `How Much Concrete Do I Need for a 24×24 Slab? (${requirements.cubicYards} Yards)`,
    "30x40": `How Much Concrete Do I Need for a 30×40 Slab? (${requirements.cubicYards} Yards)`,
    "40x60": `How Much Concrete Do I Need for a 40×60 Slab? (${requirements.cubicYards} Yards)`,
  };

  const sizeKey = `${w}x${l}`;
  const title = titleMap[sizeKey] || `Concrete for ${w}×${l} Slab: ${requirements.cubicYards} Cubic Yards Needed`;

  return {
    title,
    description: `You need ${requirements.cubicYards} cubic yards (${requirements.bags80lb} 80lb bags) of concrete for a ${w}x${l} slab at 4" thick. Add 10% waste for ${((requirements.cubicYards) * 1.1).toFixed(2)} yards total.`,
    openGraph: {
      title: `How Much Concrete for a ${w}×${l} Slab?`,
      description: `${requirements.cubicYards} cubic yards of concrete for a ${w}×${l}×4" slab`,
    },
    keywords: [
      `how much concrete for ${w}x${l} slab`,
      `concrete for ${w}x${l} slab`,
      `${w}x${l} concrete slab calculator`,
      `${w} by ${l} concrete slab`,
    ],
  };
}

export default async function SizeAnswerPage({ params }: SizePageProps) {
  const { width, dimension, category, tool } = await params;

  if (!calculatorExists(category, tool)) {
    notFound();
  }

  const calc = getCalculatorBySlug(category, tool);
  const cat = getCategoryBySlug(category);

  const w = parseInt(width);
  const l = parseInt(dimension);

  if (isNaN(w) || isNaN(l) || !calc) {
    notFound();
  }

  // Calculate for standard depths
  const depths = [4, 5, 6];
  const calculations = depths.map((depth) => ({
    depth,
    ...generateSizeAnswer(w, l, depth),
  }));

  const primaryCalc = calculations[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-secondary-600 mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/${category}`} className="hover:text-primary">{cat?.name || category}</Link>
        <span className="mx-2">/</span>
        <Link href={`/${category}/${tool}`} className="hover:text-primary">{calc.name}</Link>
        <span className="mx-2">/</span>
        <span className="text-secondary-900">{w}x{l}</span>
      </nav>

      {/* Main Answer Card */}
      <Card className="mb-8 border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">How Much Concrete Do I Need for a {w}&#215;{l} Slab?</CardTitle>
              <CardDescription>Standard 4-inch thickness</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Highlighted Answer */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20">
            <p className="text-lg font-medium text-secondary-900 mb-4">
              For a <strong>{w}x{l} foot</strong> slab that is <strong>4 inches</strong> thick:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-primary">{primaryCalc.details[1].split(": ")[1]}</div>
                <div className="text-sm text-secondary-600">Cubic Yards</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-orange-600">{primaryCalc.details[2].split(": ")[1]}</div>
                <div className="text-sm text-secondary-600">80lb Bags</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-blue-600">{primaryCalc.details[3].split(": ")[1]}</div>
                <div className="text-sm text-secondary-600">60lb Bags</div>
              </div>
            </div>
          </div>

          {/* Cost Estimate */}
          <div className="grid sm:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-secondary-600">Material</span>
                </div>
                <div className="text-2xl font-bold">${primaryCalc.costEstimate.material}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-secondary-600">Labor</span>
                </div>
                <div className="text-2xl font-bold">${primaryCalc.costEstimate.labor}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-secondary-600">Est. Total</span>
                </div>
                <div className="text-2xl font-bold">${primaryCalc.costEstimate.total}</div>
              </CardContent>
            </Card>
          </div>

          {/* Waste Factor Warning */}
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">Always Add 10% Waste Factor</h4>
                  <p className="text-amber-800 text-sm">
                    Order <strong>{primaryCalc.details[4].split(": ")[1]}</strong> to account for spillage,
                    uneven subgrade, and formwork irregularities. It's better to have extra than run short during a pour.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Other Thicknesses */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Different Thicknesses</CardTitle>
          <CardDescription>Concrete requirements for common slab thicknesses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-secondary-200">
                  <th className="text-left py-3 px-4">Thickness</th>
                  <th className="text-left py-3 px-4">Cubic Yards</th>
                  <th className="text-left py-3 px-4">80lb Bags</th>
                  <th className="text-left py-3 px-4">60lb Bags</th>
                </tr>
              </thead>
              <tbody>
                {calculations.map((calc) => (
                  <tr key={calc.depth} className="border-b border-secondary-100 hover:bg-secondary-50">
                    <td className="py-3 px-4 font-medium">{calc.depth}&quot;</td>
                    <td className="py-3 px-4">{calc.details[1].split(": ")[1]}</td>
                    <td className="py-3 px-4">{calc.details[2].split(": ")[1]}</td>
                    <td className="py-3 px-4">{calc.details[3].split(": ")[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Common Uses */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Common Uses for a {w}&#215;{l} Slab</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid sm:grid-cols-2 gap-2">
            {getUsesForSize(w, l).map((use) => (
              <li key={use} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* How to Calculate */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How to Calculate Concrete for a {w}&#215;{l} Slab</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-secondary-50 p-4 rounded-lg font-mono text-sm">
            <p className="mb-2"><strong>Formula:</strong></p>
            <p>Volume (cu ft) = Length &times; Width &times; (Thickness &divide; 12)</p>
            <p>Volume (cu yd) = Volume (cu ft) &divide; 27</p>
          </div>
          <div className="bg-secondary-50 p-4 rounded-lg text-sm">
            <p className="mb-2"><strong>Example for {w}&#215;{l} at 4&quot; thick:</strong></p>
            <p>Volume = {w} &times; {l} &times; (4 &divide; 12) = {((w * l * 4) / 12).toFixed(1)} cubic feet</p>
            <p>Cubic yards = {((w * l * 4) / 12).toFixed(1)} &divide; 27 = <strong>{primaryCalc.details[1].split(": ")[1]}</strong></p>
            <p>With 10% waste = <strong>{primaryCalc.details[4].split(": ")[1]}</strong></p>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-secondary-900 mb-1">How many 80lb bags of concrete do I need for a {w}&#215;{l} slab?</h4>
            <p className="text-secondary-700 text-sm">
              You need <strong>{primaryCalc.details[2].split(": ")[1]}</strong> of 80lb concrete for a {w}&#215;{l} slab at 4 inches thick.
              Each 80lb bag yields approximately 0.60 cubic feet of concrete.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-secondary-900 mb-1">How thick should a {w}&#215;{l} concrete slab be?</h4>
            <p className="text-secondary-700 text-sm">
              {getThicknessRecommendation(w, l)}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-secondary-900 mb-1">Should I use ready-mix or bagged concrete?</h4>
            <p className="text-secondary-700 text-sm">
              {parseFloat(primaryCalc.details[1].split(": ")[1]) > 1
                ? `Since your ${w}×${l} slab requires over 1 cubic yard, ready-mix delivery is usually more cost-effective and ensures consistent quality.`
                : `For less than 1 cubic yard, bagged concrete from a home improvement store is usually the most practical option.`
              }
            </p>
          </div>
        </CardContent>
      </Card>

      {/* CTA: Full Calculator */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                Need Different Dimensions?
              </h3>
              <p className="text-secondary-600">
                Use our full calculator for custom sizes, shapes, and thicknesses.
              </p>
            </div>
            <Link
              href={`/${category}/${tool}`}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Full Calculator
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Other Common Sizes */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6">Other Common Sizes</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {["10x10", "12x12", "20x20", "24x24", "30x30", "30x40", "40x40", "40x60"].map((size) => {
            const [sWidth, sLength] = size.split("x");
            return (
              <Link
                key={size}
                href={`/size/${sWidth}x${sLength}/${category}/${tool}`}
                className="p-4 bg-white border border-secondary-200 rounded-lg hover:border-primary hover:shadow-md transition-all"
              >
                <div className="font-semibold text-secondary-900">{size} Slab</div>
                <div className="text-sm text-secondary-600">Quick calculation</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
