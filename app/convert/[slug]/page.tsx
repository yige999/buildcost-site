/**
 * Dynamic Unit Conversion Page - Programmatic SEO
 * Pattern: /convert/{conversion-slug}
 * Generates conversion pages from unit conversion data
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getConversionBySlug, getAllConversions } from "@/data/unit-conversions";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { ArrowRightLeft, Calculator } from "lucide-react";
import { ConversionCalculator } from "@/components/calculator/ConversionCalculator";

interface ConversionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllConversions().map((conv) => ({
    slug: conv.slug,
  }));
}

export async function generateMetadata({ params }: ConversionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const conversion = getConversionBySlug(slug);

  if (!conversion) {
    return { title: "Conversion Not Found" };
  }

  return {
    title: `${conversion.title} Converter - Free Online Calculator`,
    description: conversion.description,
    alternates: {
      canonical: `https://buildcost.site/convert/${slug}`,
    },
  };
}

export default async function ConversionPage({ params }: ConversionPageProps) {
  const { slug } = await params;
  const conversion = getConversionBySlug(slug);

  if (!conversion) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link href="/convert" className="text-sm text-primary hover:underline">
          All Conversions
        </Link>
        <h1 className="text-4xl font-bold text-secondary-900 mt-4 mb-2">
          {conversion.title}
        </h1>
        <p className="text-xl text-secondary-600">{conversion.description}</p>
      </div>

      {/* Quick Answer */}
      <Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="text-sm text-secondary-600 mb-2">Quick Answer</div>
            <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-bold">
              <span>1 {conversion.fromUnit}</span>
              <ArrowRightLeft className="w-6 h-6 text-primary" />
              <span>{conversion.factor} {conversion.toUnit}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calculator */}
      <Card className="mb-8">
        <ConversionCalculator
          fromUnit={conversion.fromUnit}
          toUnit={conversion.toUnit}
          factor={conversion.factor}
        />
      </Card>

      {/* Formula */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Conversion Formula</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-secondary-50 p-4 rounded-lg text-center font-mono text-lg">
            {conversion.formula}
          </div>
        </CardContent>
      </Card>

      {/* Common Values */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Common Conversions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {conversion.commonValues.map((val, idx) => (
              <div
                key={idx}
                className="p-3 bg-secondary-50 rounded-lg text-center"
              >
                <div className="font-bold text-secondary-900">
                  {val.from} {conversion.fromUnit}
                </div>
                <div className="text-primary text-sm">
                  = {val.to} {conversion.toUnit}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Related Conversions */}
      <div>
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">Related Conversions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {conversion.relatedConversions.map((relatedId, idx) => {
            const related = getConversionBySlug(relatedId);
            if (!related) return null;
            return (
              <Link key={idx} href={`/convert/${related.slug}`}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-secondary-900">{related.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
