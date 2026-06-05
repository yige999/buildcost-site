/**
 * Dynamic Dimension Guide Page - Programmatic SEO
 * Pattern: /dimensions/{dimension-slug}
 * Generates dimension reference pages
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getDimensionGuideBySlug, getAllDimensionGuides } from "@/data/dimension-guides";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Ruler, Info, AlertTriangle } from "lucide-react";

interface DimensionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllDimensionGuides().map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: DimensionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getDimensionGuideBySlug(slug);

  if (!guide) {
    return { title: "Dimension Guide Not Found" };
  }

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `https://buildcost.site/dimensions/${slug}`,
    },
  };
}

export default async function DimensionPage({ params }: DimensionPageProps) {
  const { slug } = await params;
  const guide = getDimensionGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link href="/dimensions" className="text-sm text-primary hover:underline">
          ← All Dimension Guides
        </Link>
        <h1 className="text-4xl font-bold text-secondary-900 mt-4 mb-2">
          {guide.title}
        </h1>
        <p className="text-xl text-secondary-600">{guide.description}</p>
      </div>

      {/* Dimensions Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ruler className="w-6 h-6 text-primary" />
            Standard Dimensions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary-200">
                  <th className="text-left py-3 px-4">Size</th>
                  <th className="text-center py-3 px-4">Width</th>
                  <th className="text-center py-3 px-4">Length</th>
                  {guide.dimensions[0]?.thickness && (
                    <th className="text-center py-3 px-4">Thickness</th>
                  )}
                  <th className="text-left py-3 px-4">Notes</th>
                </tr>
              </thead>
              <tbody>
                {guide.dimensions.map((dim, idx) => (
                  <tr key={idx} className="border-b border-secondary-100">
                    <td className="py-3 px-4 font-medium text-secondary-900">{dim.name}</td>
                    <td className="py-3 px-4 text-center">
                      {dim.width.min}-{dim.width.recommended} {dim.width.unit}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {dim.length.min}-{dim.length.recommended} {dim.length.unit}
                    </td>
                    {dim.thickness && (
                      <td className="py-3 px-4 text-center">
                        {dim.thickness.min}-{dim.thickness.recommended} {dim.thickness.unit}
                      </td>
                    )}
                    <td className="py-3 px-4 text-sm text-secondary-600">{dim.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Specs */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {guide.dimensions.map((dim, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="text-base">{dim.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="text-sm text-secondary-600">Width Range</div>
                <div className="font-semibold">
                  {dim.width.min} - {dim.width.recommended} {dim.width.unit}
                </div>
              </div>
              <div>
                <div className="text-sm text-secondary-600">Length Range</div>
                <div className="font-semibold">
                  {dim.length.min} - {dim.length.recommended} {dim.length.unit}
                </div>
              </div>
              {dim.thickness && (
                <div>
                  <div className="text-sm text-secondary-600">Thickness</div>
                  <div className="font-semibold">
                    {dim.thickness.min} - {dim.thickness.recommended} {dim.thickness.unit}
                  </div>
                </div>
              )}
              {dim.notes && (
                <div className="pt-2 border-t border-secondary-100 text-sm text-secondary-600">
                  {dim.notes}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Important Considerations */}
      <Card className="mb-8 bg-amber-50 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-900">
            <AlertTriangle className="w-5 h-5" />
            Important Considerations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid md:grid-cols-2 gap-2">
            {guide.considerations.map((consideration, idx) => (
              <li key={idx} className="flex items-start gap-2 text-amber-800">
                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                {consideration}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Calculator CTA */}
      <Card className="bg-gradient-to-r from-primary to-primary/80 text-white">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Calculate Materials for Your Project</h3>
              <p className="opacity-90">Get exact material estimates based on your dimensions</p>
            </div>
            <Link
              href="/concrete/slab"
              className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-secondary-50 transition-colors whitespace-nowrap"
            >
              Use Calculator
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
