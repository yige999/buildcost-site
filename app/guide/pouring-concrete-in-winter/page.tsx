/**
 * Seasonal Guide Page - Programmatic SEO
 * Pattern: /guide/{seasonal-topic}
 * Targets seasonal construction advice searches
 */

import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Thermometer, Snowflake, Sun, CloudRain, AlertTriangle, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pouring Concrete in Winter: Cold Weather Tips & Guide | BuildCost.site",
  description: "Complete guide to pouring concrete in cold weather. Temperature limits, protection methods, accelerators, and winter concreting best practices.",
  keywords: [
    "pouring concrete in winter",
    "cold weather concreting",
    "minimum temperature for pouring concrete",
    "concrete curing in cold weather",
    "winter concrete pouring tips",
  ],
}

const winterGuidelines = [
  {
    category: "Temperature Limits",
    icon: Thermometer,
    tips: [
      { label: "Minimum air temperature", value: "40°F (4.5°C)" },
      { label: "Minimum concrete temperature at placement", value: "45°F (7°C)" },
      { label: "Minimum maintaining period", value: "First 48 hours above 50°F" },
      { label: "Do not pour if ground is frozen", value: "Critical requirement" },
    ],
  },
  {
    category: "Protection Methods",
    icon: Snowflake,
    tips: [
      { label: "Concrete blankets", value: "R-5.7 or higher insulation value" },
      { label: "Windbreaks", value: "Reduce wind chill effects" },
      { label: "Enclosed heated area", value: "For extreme cold (below 20°F)" },
      { label: "Portable heaters", value: "Maintain ambient temperature" },
    ],
  },
  {
    category: "Admixtures",
    icon: CheckCircle,
    tips: [
      { label: "Accelerating admixtures", value: "Reduce set time 30-50%" },
      { label: "Calcium chloride", value: "Traditional accelerator" },
      { label: "Non-chloride accelerators", value: "For reinforced concrete" },
      { label: "Hot water mixing", value: "Use 100°F-140°F water" },
    ],
  },
];

const winterDoDont = [
  {
    do: true,
    items: [
      "Check ground temperature before pouring",
      "Use heated enclosures for extreme cold",
      "Cover freshly poured concrete immediately",
      "Monitor temperature for 48 hours minimum",
      "Use air-entrained concrete for freeze-thaw resistance",
      "Schedule concrete delivery for warmest part of day",
      "Keep materials warm before mixing",
    ],
  },
  {
    do: false,
    items: [
      "Pour on frozen ground",
      "Use de-icing salts on fresh concrete",
      "Allow concrete to freeze in first 24 hours",
      "Pour during extreme weather predictions",
      "Remove protection too soon",
      "Use regular concrete mix (specify cold weather mix)",
      "Ignore wind chill factor",
    ],
  },
];

const aciGuidelines = {
  standard: "ACI 306 - Guide to Cold Weather Concreting",
  keyPoints: [
    "Cold weather defined as period when average daily temperature is below 40°F for 3+ days",
    "Concrete must be protected from freezing until it reaches 500 psi strength",
    "At 50°F, concrete reaches 500 psi in approximately 48 hours",
    "At 40°F, concrete reaches 500 psi in approximately 72 hours",
    "Use insulation value R-5.7 or equivalent protection",
  ],
}

export default function WinterConcretePouringPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-secondary-600 mb-4">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-secondary-900">Guides</span>
        </div>
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Pouring Concrete in Winter: Complete Guide
        </h1>
        <p className="text-xl text-secondary-600">
          Essential tips, temperature limits, and protection methods for cold weather concreting
        </p>
      </div>

      {/* Quick Answer */}
      <Card className="mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <Snowflake className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">Quick Answer</h2>
              <p className="text-blue-900 mb-3">
                The <strong>minimum temperature for pouring concrete</strong> is <strong>40°F (4.5°C)</strong> air temperature,
                and the ground must not be frozen. Fresh concrete must be kept above <strong>50°F (10°C)</strong> for
                the first 48 hours to achieve proper strength.
              </p>
              <p className="text-blue-800 text-sm">
                Failure to protect concrete from freezing in the first 24 hours can permanently reduce
                strength by up to 50%.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Warning */}
      <Card className="mb-8 bg-red-50 border-red-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">Critical Warning</h3>
              <p className="text-red-800 text-sm">
                <strong>Never pour concrete on frozen ground.</strong> The concrete will freeze from the bottom up,
                preventing proper curing and causing permanent damage. Always verify ground temperature before
                scheduling a winter pour.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Guidelines Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {winterGuidelines.map((section, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <section.icon className="w-5 h-5 text-primary" />
                {section.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.tips.map((tip, tipIdx) => (
                  <li key={tipIdx} className="text-sm">
                    <div className="text-secondary-600">{tip.label}</div>
                    <div className="font-semibold text-secondary-900">{tip.value}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Do's and Don'ts */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-900">
              <CheckCircle className="w-5 h-5" />
              Do's
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {winterDoDont.find((d) => d.do)?.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-green-800">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-900">
              <AlertTriangle className="w-5 h-5" />
              Don'ts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {winterDoDont.find((d) => !d.do)?.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-red-800">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* ACI Standards */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>ACI 306 Cold Weather Concreting Standards</CardTitle>
          <CardDescription>Industry standard guidelines for cold weather concreting</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-secondary-700 mb-4">
            The American Concrete Institute (ACI) provides comprehensive guidelines through ACI 306,
            the standard reference for cold weather concreting.
          </p>
          <ul className="space-y-2">
            {aciGuidelines.keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-secondary-700">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Protection Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Protection Timeline by Temperature</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-secondary-200">
                  <th className="text-left py-2 px-3">Air Temp</th>
                  <th className="text-left py-2 px-3">Protection Needed</th>
                  <th className="text-left py-2 px-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-secondary-100">
                  <td className="py-2 px-3">40°F - 50°F</td>
                  <td className="py-2 px-3">Cover with blankets or plastic</td>
                  <td className="py-2 px-3">48 hours</td>
                </tr>
                <tr className="border-b border-secondary-100">
                  <td className="py-2 px-3">30°F - 40°F</td>
                  <td className="py-2 px-3">Insulated blankets + windbreak</td>
                  <td className="py-2 px-3">72 hours</td>
                </tr>
                <tr className="border-b border-secondary-100">
                  <td className="py-2 px-3">20°F - 30°F</td>
                  <td className="py-2 px-3">Double insulation + heated enclosure</td>
                  <td className="py-2 px-3">4-5 days</td>
                </tr>
                <tr className="border-b border-secondary-100">
                  <td className="py-2 px-3">Below 20°F</td>
                  <td className="py-2 px-3">Full enclosure with heating</td>
                  <td className="py-2 px-3">5-7 days minimum</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Related Guides */}
      <div>
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">Related Guides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/guide/pouring-concrete-in-summer" className="p-4 bg-white border border-secondary-200 rounded-lg hover:border-primary transition-colors">
            <Sun className="w-6 h-6 text-orange-500 mb-2" />
            <h3 className="font-semibold text-secondary-900">Summer Concreting</h3>
            <p className="text-sm text-secondary-600">Hot weather pouring tips</p>
          </Link>
          <Link href="/guide/concrete-curing-time" className="p-4 bg-white border border-secondary-200 rounded-lg hover:border-primary transition-colors">
            <Clock className="w-6 h-6 text-blue-500 mb-2" />
            <h3 className="font-semibold text-secondary-900">Curing Time Guide</h3>
            <p className="text-sm text-secondary-600">How long for concrete to cure</p>
          </Link>
          <Link href="/guide/concrete-strength" className="p-4 bg-white border border-secondary-200 rounded-lg hover:border-primary transition-colors">
            <TrendingUp className="w-6 h-6 text-green-500 mb-2" />
            <h3 className="font-semibold text-secondary-900">Concrete Strength</h3>
            <p className="text-sm text-secondary-600">PSI ratings explained</p>
          </Link>
          <Link href="/concrete/slab" className="p-4 bg-white border border-secondary-200 rounded-lg hover:border-primary transition-colors">
            <Calculator className="w-6 h-6 text-purple-500 mb-2" />
            <h3 className="font-semibold text-secondary-900">Slab Calculator</h3>
            <p className="text-sm text-secondary-600">Calculate materials needed</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Missing icon for Clock and TrendingUp - these would be from lucide-react
const Clock = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const TrendingUp = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path d="M23 6L13.5 15.5L8.5 10.5L1 18" />
    <path d="M17 6h6v6" />
  </svg>
);

const Calculator = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M8 6h8M8 10h8M8 14h8M8 18h8" />
  </svg>
);
