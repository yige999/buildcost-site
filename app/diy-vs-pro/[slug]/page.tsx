/**
 * Dynamic DIY vs Professional Page - Programmatic SEO
 * Pattern: /diy-vs-pro/{project-slug}
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getDIYVsProBySlug, getAllDIYVsPro } from "@/data/diy-vs-pro";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { CheckCircle, XCircle, DollarSign, Clock, AlertTriangle } from "lucide-react";

interface DIYVsProPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllDIYVsPro().map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: DIYVsProPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getDIYVsProBySlug(slug);

  if (!data) {
    return { title: "DIY vs Pro Not Found" };
  }

  return {
    title: `${data.title} | Cost & Comparison`,
    description: data.description,
  };
}

export default async function DIYVsProPage({ params }: DIYVsProPageProps) {
  const { slug } = await params;
  const data = getDIYVsProBySlug(slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/diy-vs-pro" className="text-sm text-primary hover:underline">
          ← All DIY vs Pro Comparisons
        </Link>
        <h1 className="text-4xl font-bold text-secondary-900 mt-4 mb-2">{data.title}</h1>
        <p className="text-xl text-secondary-600">{data.description}</p>
      </div>

      {/* Cost Comparison */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900">DIY Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-700 mb-2">{data.diy.totalCost}</div>
            <div className="text-sm text-green-700 mb-4">for typical {data.project}</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Materials:</span>
                <span className="font-medium">{data.diy.materialsCost}</span>
              </div>
              <div className="flex justify-between">
                <span>Time:</span>
                <span className="font-medium">{data.diy.timeEstimate}</span>
              </div>
              <div className="flex justify-between">
                <span>Difficulty:</span>
                <span className="font-medium">{data.diy.difficulty}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900">Professional Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-700 mb-2">{data.professional.totalCost}</div>
            <div className="text-sm text-blue-700 mb-4">for typical {data.project}</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Materials:</span>
                <span className="font-medium">{data.professional.materialsCost}</span>
              </div>
              <div className="flex justify-between">
                <span>Labor:</span>
                <span className="font-medium">{data.professional.laborCost}</span>
              </div>
              <div className="flex justify-between">
                <span>Time:</span>
                <span className="font-medium">{data.professional.timeEstimate}</span>
              </div>
              <div className="flex justify-between">
                <span>Warranty:</span>
                <span className="font-medium">{data.professional.warranty}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Savings */}
      <Card className="mb-8 bg-gradient-to-r from-green-100 to-emerald-100 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-green-900 mb-1">Potential DIY Savings</h3>
              <p className="text-green-800 text-sm">Labor cost you save by doing it yourself</p>
            </div>
            <div className="text-4xl font-bold text-green-700">{data.diy.savings}</div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Factors */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Decision Factors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.factors.map((factor, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg flex items-center justify-between ${
                  factor.winner === "DIY"
                    ? "bg-green-50"
                    : factor.winner === "Professional"
                    ? "bg-blue-50"
                    : "bg-gray-50"
                }`}
              >
                <div className="flex-1">
                  <div className="font-semibold text-secondary-900">{factor.factor}</div>
                  <div className="text-sm text-secondary-600">{factor.explanation}</div>
                </div>
                <div
                  className={`text-sm font-bold px-3 py-1 rounded ${
                    factor.winner === "DIY"
                      ? "bg-green-200 text-green-800"
                      : factor.winner === "Professional"
                      ? "bg-blue-200 text-blue-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {factor.winner}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pros and Cons */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <CheckCircle className="w-5 h-5" />
              DIY Pros & Cons
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Pros</h4>
              <ul className="space-y-1 text-sm text-secondary-700">
                {data.diy.pros.map((pro, idx) => (
                  <li key={idx}>• {pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-2">Cons</h4>
              <ul className="space-y-1 text-sm text-secondary-700">
                {data.diy.cons.map((con, idx) => (
                  <li key={idx}>• {con}</li>
                ))}
              </ul>
            </div>
            <div className="pt-2 border-t border-secondary-200">
              <div className="text-sm text-secondary-600">
                <strong>Required Tools:</strong>
              </div>
              <div className="text-sm text-secondary-700 mt-1">
                {data.diy.tools.join(", ")}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <CheckCircle className="w-5 h-5" />
              Professional Pros & Cons
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Pros</h4>
              <ul className="space-y-1 text-sm text-secondary-700">
                {data.professional.pros.map((pro, idx) => (
                  <li key={idx}>• {pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-2">Cons</h4>
              <ul className="space-y-1 text-sm text-secondary-700">
                {data.professional.cons.map((con, idx) => (
                  <li key={idx}>• {con}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendation */}
      <Card className="mb-8 bg-amber-50 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-900">
            <AlertTriangle className="w-5 h-5" />
            Our Recommendation
          </CardTitle>
        </CardHeader>
        <CardContent className="text-amber-900">
          <p>
            {data.diy.difficulty === "Easy"
              ? `This is a DIY-friendly project! Most homeowners can handle this ${data.project.toLowerCase()} with basic tools and some research. Consider DIY if you want to save money and have the time.`
              : data.diy.difficulty === "Medium"
              ? `This ${data.project.toLowerCase()} is possible for experienced DIYers but requires some skill. If you have experience with similar projects and help available, DIY can save significant money. Otherwise, consider hiring a pro.`
              : `This ${data.project.toLowerCase()} is a challenging project that requires specialized skills and equipment. We recommend hiring a professional unless you have significant concrete experience. The risk of costly mistakes is high.`}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
