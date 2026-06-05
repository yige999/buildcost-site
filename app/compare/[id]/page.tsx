/**
 * Dynamic Comparison Page - Programmatic SEO
 * Pattern: /compare/{comparison-id}
 * Generates comparison pages from comparison data
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getComparisonById, getAllComparisons } from "@/data/comparisons";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Check, X, Scale } from "lucide-react";

interface ComparisonPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllComparisons().map((comp) => ({
    id: comp.slug,
  }));
}

export async function generateMetadata({ params }: ComparisonPageProps): Promise<Metadata> {
  const { id } = await params;
  const comparison = getComparisonById(id);

  if (!comparison) {
    return { title: "Comparison Not Found" };
  }

  return {
    title: `${comparison.title} Comparison`,
    description: comparison.description,
    alternates: {
      canonical: `https://buildcost.site/compare/${id}`,
    },
  };
}

export default async function ComparisonPage({ params }: ComparisonPageProps) {
  const { id } = await params;
  const comparison = getComparisonById(id);

  if (!comparison) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link href="/compare" className="text-sm text-primary hover:underline">
          ← All Comparisons
        </Link>
        <h1 className="text-4xl font-bold text-secondary-900 mt-4 mb-2">
          {comparison.title}
        </h1>
        <p className="text-xl text-secondary-600">{comparison.description}</p>
      </div>

      {/* Items Overview */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {comparison.items.map((item, idx) => (
          <Card key={idx} className="text-center">
            <CardContent className="pt-8">
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-2">{item.name}</h2>
              <p className="text-secondary-600 mb-4">{item.description}</p>
              <div className="text-lg font-semibold text-primary">{item.avgCost}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Verdict */}
      <Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-primary" />
            Quick Verdict
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {comparison.items.map((item, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-secondary-900 mb-2">{item.name} is best for:</h3>
                <ul className="space-y-1 text-sm text-secondary-700">
                  {item.bestFor.map((use, useIdx) => (
                    <li key={useIdx}>• {use}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Comparison Factors */}
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
                  {comparison.items.map((item, idx) => (
                    <th key={idx} className="text-center py-3 px-4 font-semibold">{item.name}</th>
                  ))}
                  <th className="text-center py-3 px-4 font-semibold">Winner</th>
                </tr>
              </thead>
              <tbody>
                {comparison.factors.map((factor, idx) => (
                  <tr key={idx} className="border-b border-secondary-100">
                    <td className="py-3 px-4 font-medium text-secondary-900">{factor.label}</td>
                    {comparison.items.map((item) => (
                      <td key={item.name} className="py-3 px-4 text-center">
                        {factor.winner === item.name ? "✓" : factor.winner === "tie" ? "=" : ""}
                      </td>
                    ))}
                    <td className="py-3 px-4 text-center">
                      <span className={`text-sm font-semibold ${
                        factor.winner === "tie" ? "text-secondary-600" : "text-primary"
                      }`}>
                        {factor.winner === "tie" ? "Tie" : factor.winner}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pros and Cons */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {comparison.items.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {item.emoji} {item.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4" /> Pros
                </h4>
                <ul className="space-y-1 text-sm text-secondary-700">
                  {item.pros.map((pro, proIdx) => (
                    <li key={proIdx}>• {pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                  <X className="w-4 h-4" /> Cons
                </h4>
                <ul className="space-y-1 text-sm text-secondary-700">
                  {item.cons.map((con, conIdx) => (
                    <li key={conIdx}>• {con}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Related Comparisons */}
      <div>
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">More Comparisons</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {getAllComparisons()
            .filter((c) => c.id !== comparison.id)
            .map((comp) => (
              <Link key={comp.id} href={`/compare/${comp.slug}`}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-secondary-900">{comp.title}</h3>
                    <p className="text-sm text-secondary-600 mt-1">{comp.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
