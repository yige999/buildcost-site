/**
 * Dynamic Material Guide Page - Programmatic SEO
 * Pattern: /materials/{material-slug}
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getMaterialGuideBySlug, getAllMaterialGuides } from "@/data/material-guides";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Package, DollarSign, Clock, Check, X } from "lucide-react";

interface MaterialGuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllMaterialGuides().map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: MaterialGuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getMaterialGuideBySlug(slug);

  if (!guide) {
    return { title: "Material Guide Not Found" };
  }

  return {
    title: `${guide.title} | BuildCost.site`,
    description: guide.description,
  };
}

export default async function MaterialGuidePage({ params }: MaterialGuidePageProps) {
  const { slug } = await params;
  const guide = getMaterialGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/materials" className="text-sm text-primary hover:underline">
          ← All Material Guides
        </Link>
        <h1 className="text-4xl font-bold text-secondary-900 mt-4 mb-2">{guide.title}</h1>
        <p className="text-xl text-secondary-600">{guide.description}</p>
      </div>

      {/* Types Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {guide.types.map((type, idx) => (
          <Card key={idx} className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                {type.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-secondary-600">{type.description}</p>
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span>{type.avgCost}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>{type.lifespan}</span>
              </div>
              <div className="pt-2 border-t border-secondary-200">
                <div className="text-xs font-semibold text-green-700 mb-1">Best for:</div>
                <div className="flex flex-wrap gap-1">
                  {type.bestFor.map((use, useIdx) => (
                    <span
                      key={useIdx}
                      className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Comparison */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Comparison Table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-secondary-200">
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Cost</th>
                  <th className="text-left py-3 px-4">Lifespan</th>
                  <th className="text-left py-3 px-4">Pros</th>
                  <th className="text-left py-3 px-4">Cons</th>
                </tr>
              </thead>
              <tbody>
                {guide.types.map((type, idx) => (
                  <tr key={idx} className="border-b border-secondary-100">
                    <td className="py-3 px-4 font-medium text-secondary-900">{type.name}</td>
                    <td className="py-3 px-4">{type.avgCost}</td>
                    <td className="py-3 px-4">{type.lifespan}</td>
                    <td className="py-3 px-4 text-xs text-green-700">
                      {type.pros.slice(0, 2).join(", ")}
                    </td>
                    <td className="py-3 px-4 text-xs text-red-700">
                      {type.cons.slice(0, 2).join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Selection Factors */}
      <Card className="mb-8 bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">Selection Factors</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid md:grid-cols-2 gap-3">
            {guide.selectionFactors.map((factor, idx) => (
              <li key={idx} className="flex items-start gap-2 text-blue-900">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold">{factor.factor}</div>
                  <div className="text-sm text-blue-800">{factor.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
