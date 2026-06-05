import { Card, CardContent } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Calculator, MapPin, DollarSign } from "lucide-react";

export const metadata = {
  title: "About Us",
  description:
    "Learn about BuildCost.site, a free construction calculator and cost planning resource for U.S. homeowners, DIYers, and contractors.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs items={[{ label: "About Us" }]} className="mb-8" />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          About BuildCost.site
        </h1>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Free construction calculators and cost planning resources for U.S.
          homeowners, DIYers, and contractors. Estimate materials, compare costs,
          and plan your next project with confidence.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-secondary-900 mb-2">31 Project Calculators</h3>
            <p className="text-sm text-secondary-600">
              Concrete (17), roofing (7), and flooring (7) calculators. Each
              outputs job-ready units: cubic yards, bags, bundles, square feet,
              and linear feet.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-secondary-900 mb-2">73 U.S. City Pages</h3>
            <p className="text-sm text-secondary-600">
              Local labor rate multipliers, material cost adjustments, and
              climate-specific construction notes for 73 cities across 5
              climate zones.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-secondary-900 mb-2">Cost Ranges with Sources</h3>
            <p className="text-sm text-secondary-600">
              National average cost ranges for 6 project types, broken down by
              materials vs. labor, size categories, and cost variables like
              stamped finish, slope, and demolition.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">What This Site Does</h2>
          <p className="text-secondary-600 mb-4">
            BuildCost.site is a collection of construction calculators and cost
            reference pages for common U.S. projects. It covers concrete,
            roofing, and flooring — the three categories where material quantity
            mistakes are most expensive.
          </p>
          <p className="text-secondary-600 mb-4">
            The calculators convert your dimensions into the units you actually
            order in: cubic yards of ready-mix, 80lb or 60lb bags, shingle
            bundles, flooring boxes, and linear feet of rebar or baseboard. A
            default waste factor is included in every calculation so the estimate
            accounts for spillage, cuts, and off-cuts.
          </p>
          <p className="text-secondary-600 mb-2">What you can do here:</p>
          <ul className="list-disc list-inside text-secondary-600 space-y-2">
            <li>Calculate concrete volume for slabs, footings, columns, walls, steps, and curbs</li>
            <li>Count shingle bundles, metal roofing panels, or underlayment rolls by roof pitch</li>
            <li>Estimate flooring boxes, tile square footage, or carpet yardage with waste</li>
            <li>Get rebar grid layouts with piece counts and total linear feet</li>
            <li>Compare materials (stamped concrete vs. pavers, hardwood vs. laminate, etc.)</li>
            <li>Review cost ranges and local factors for 74 U.S. cities</li>
            <li>Convert between cubic yards, cubic feet, square feet, bags, and tons</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            How Calculations Work
          </h2>
          <p className="text-secondary-600 mb-4">
            All calculators use standard geometric formulas for rectangular,
            circular, and trapezoidal volume and area. Concrete calculators
            convert to cubic yards (27 cubic feet per yard) and round up bag
            counts to whole bags. Bag yields use published values: 0.6 cubic
            feet per 80lb bag, 0.45 cubic feet per 60lb bag.
          </p>
          <p className="text-secondary-600 mb-4">
            Roofing calculators apply pitch multipliers to flat-plane
            measurements to estimate actual roof surface area. Flooring
            calculators include a user-adjustable waste factor (default 10%) for
            cuts and damaged pieces.
          </p>
          <p className="text-secondary-600">
            Cost pages show national average ranges sourced from published
            construction cost data, then apply city-specific labor and material
            multipliers. The multipliers reflect regional differences in labor
            rates, material delivery costs, and climate-related construction
            requirements.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Data Sources &amp; Methodology
          </h2>
          <div className="space-y-4 text-secondary-600">
            <div>
              <h3 className="font-semibold text-secondary-900 mb-1">Material properties</h3>
              <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                <li>Concrete bag yields: Quikrete and Sakrete published specifications</li>
                <li>Gravel/crushed stone density: 1.4–1.6 tons per cubic yard</li>
                <li>Sand density: 100–120 lb/cubic foot depending on moisture content</li>
                <li>Standard CMU block: 8″ × 8″ × 16″ with 3/8″ mortar joint</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-900 mb-1">Cost data</h3>
              <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                <li>National average cost ranges based on RS Means, HomeAdvisor, and Angi published project cost surveys</li>
                <li>City labor multipliers derived from Bureau of Labor Statistics occupational employment data for construction trades</li>
                <li>Material price offsets reflect regional delivery and supply chain differences</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-900 mb-1">Waste factors</h3>
              <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                <li>Default 10% for concrete (ACI recommendation for typical placements)</li>
                <li>Default 10% for flooring (industry standard for cuts and defects)</li>
                <li>Default 10–15% for roofing (varies by pitch and complexity)</li>
                <li>All waste factors are user-adjustable in every calculator</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Who This Site Is For
          </h2>
          <ul className="list-disc list-inside text-secondary-600 space-y-2">
            <li>U.S. homeowners planning a concrete patio, driveway, or slab</li>
            <li>DIYers estimating materials before a trip to the store</li>
            <li>Contractors cross-checking quantities for a bid</li>
            <li>Builders comparing material costs across cities</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            How Our Estimates Work
          </h2>
          <div className="space-y-4 text-secondary-600">
            <div>
              <h3 className="font-semibold text-secondary-900 mb-1">1. Standard Formulas</h3>
              <p className="text-sm">
                Volume = length × width × depth. Cubic yards = cubic feet ÷ 27.
                60lb bag ≈ 0.45 ft³, 80lb bag ≈ 0.6 ft³. Roofing squares = 100 ft².
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-900 mb-1">2. Waste Factors</h3>
              <p className="text-sm">
                Default 5-10% added to every calculation. Covers spillage, cuts,
                breakage, uneven surfaces, and formwork irregularities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-900 mb-1">3. Local Cost Adjustments</h3>
              <p className="text-sm">
                National averages adjusted by city-specific labor multipliers and
                material cost multipliers. Includes climate notes and building code
                reminders.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Important Disclaimer
          </h2>
          <p className="text-secondary-600 mb-4">
            BuildCost.site provides estimates for planning purposes only. These are
            not quotes, bids, or guarantees. They are not engineering, architectural,
            legal, or contractor advice.
          </p>
          <p className="text-secondary-600 mb-4">
            Before purchasing materials or starting construction, verify quantities,
            specifications, code requirements, and prices with:
          </p>
          <ul className="list-disc list-inside text-secondary-600 space-y-1 ml-2">
            <li>A local material supplier</li>
            <li>A licensed contractor</li>
            <li>Your local building department</li>
          </ul>
          <p className="text-secondary-600 mt-4">
            Our waste factors and cost multipliers are approximations based on
            national averages. Your actual project will vary based on site
            access, soil conditions, local building codes, contractor
            availability, and material price fluctuations.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
