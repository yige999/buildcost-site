/**
 * Cost Estimate Page - Programmatic SEO
 * Pattern: /cost/{project-type}
 * Targets high-volume "how much does X cost" searches
 */

import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { DollarSign, TrendingUp, Calculator, MapPin, Info, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { getProjectCostData, calculateProjectCost, projectCosts } from "@/data/cost-estimates";

interface CostPageProps {
  params: Promise<{ projectId: string }>;
}

export async function generateStaticParams() {
  return projectCosts.map((project) => ({
    projectId: project.id,
  }));
}

export async function generateMetadata({ params }: CostPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = getProjectCostData(projectId);

  if (!project) {
    return { title: "Cost Estimate Not Found" };
  }

  const avgCost = `${project.nationalAverage.min.toLocaleString()}` +
    ` - $${project.nationalAverage.max.toLocaleString()}`;

  return {
    title: `${project.name} Cost ${new Date().getFullYear().toString()}: $${avgCost}`,
    description: `How much does a ${project.name.toLowerCase()} cost? National average is $${avgCost}. Get detailed cost breakdowns by size, factors that affect price, and tips to save money.`,
    keywords: [
      `${project.name.toLowerCase()} cost`,
      `${project.name.toLowerCase()} price`,
      `how much does a ${project.name.toLowerCase()} cost`,
      `${project.name.toLowerCase()} installation cost`,
      `${project.name.toLowerCase()} cost calculator`,
    ],
    alternates: {
      canonical: `https://buildcost.site/cost/${projectId}`,
    },
  };
}

export default async function CostEstimatePage({ params }: CostPageProps) {
  const { projectId } = await params;
  const project = getProjectCostData(projectId);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/concrete" className="text-primary hover:underline">
          View all projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-secondary-600 mb-4">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/concrete" className="hover:text-primary">Cost Guides</Link>
          <span>/</span>
          <span className="text-secondary-900">{project.name}</span>
        </div>
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          {project.name} Cost Guide {new Date().getFullYear().toString()}
        </h1>
        <p className="text-xl text-secondary-600">{project.description}</p>
      </div>

      {/* Quick Answer Card */}
      <Card className="mb-8 bg-gradient-to-r from-green-50 to-green-100 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-green-900 mb-2">National Average Cost</h2>
              <div className="text-4xl font-bold text-green-700 mb-2">
                ${project.nationalAverage.min.toLocaleString()} - ${project.nationalAverage.max.toLocaleString()}
              </div>
              <p className="text-green-800">
                or ${project.costPerSqFt.min} - ${project.costPerSqFt.max} per square foot
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost by Size */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Cost by Project Size</CardTitle>
          <CardDescription>Typical costs for common {project.name.toLowerCase()} sizes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {project.sizeCategories.map((size, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors"
              >
                <div>
                  <div className="font-semibold text-secondary-900">{size.name}</div>
                  <div className="text-sm text-secondary-600">{size.sqft} sq ft</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">
                    ${size.avgCost.toLocaleString()}
                  </div>
                  <div className="text-sm text-secondary-600">average</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cost Breakdown */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Material & Labor Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Materials</span>
                  <span className="text-blue-600 font-semibold">{project.factors.materials}%</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${project.factors.materials}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Labor</span>
                  <span className="text-orange-600 font-semibold">{project.factors.labor}%</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <div
                    className="bg-orange-600 h-2 rounded-full"
                    style={{ width: `${project.factors.labor}%` }}
                  />
                </div>
              </div>
              <div className="pt-4 border-t border-secondary-200">
                <p className="text-sm text-secondary-600 mb-2">Additional costs may include:</p>
                <ul className="text-sm text-secondary-700 space-y-1">
                  {project.factors.additional.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-purple-600" />
              Cost Factors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {project.variables.map((variable, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg ${
                    variable.addsCost
                      ? "bg-red-50 border border-red-200"
                      : "bg-green-50 border border-green-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-secondary-900">{variable.factor}</span>
                    <span
                      className={`text-sm font-semibold ${
                        variable.addsCost ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {variable.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Money Saving Tips */}
      <Card className="mb-8 bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <DollarSign className="w-5 h-5" />
            Ways to Save on Your {project.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid sm:grid-cols-2 gap-3">
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                1
              </div>
              <span className="text-blue-900 text-sm">Get multiple quotes from contractors (3-5 minimum)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                2
              </div>
              <span className="text-blue-900 text-sm">Schedule work during off-season (winter for concrete)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                3
              </div>
              <span className="text-blue-900 text-sm">Keep it simple - basic finishes cost less</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                4
              </div>
              <span className="text-blue-900 text-sm">Prepare site yourself to save on labor</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                5
              </div>
              <span className="text-blue-900 text-sm">Combine with neighbors for bulk pricing</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                6
              </div>
              <span className="text-blue-900 text-sm">Avoid rush orders - plan ahead</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Location Warning */}
      <Card className="mb-8 bg-amber-50 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-900">
            <MapPin className="w-5 h-5" />
            Local Pricing Variations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-amber-900 mb-3">
            Prices vary significantly by location. Major metropolitan areas and coastal cities can cost
            30-50% more than the national average.
          </p>
          <Link
            href="/concrete/slab"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium"
          >
            Get local pricing with our calculator
            <Calculator className="w-4 h-4" />
          </Link>
        </CardContent>
      </Card>

      {/* Related Cost Guides */}
      <div>
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">Related Cost Guides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectCosts
            .filter((p) => p.id !== project.id)
            .slice(0, 6)
            .map((relatedProject) => (
              <Link key={relatedProject.id} href={`/cost/${relatedProject.id}`}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-secondary-900">{relatedProject.name}</h3>
                    <p className="text-sm text-secondary-600">
                      ${relatedProject.nationalAverage.min.toLocaleString()} - $
                      {relatedProject.nationalAverage.max.toLocaleString()}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 pt-6 border-t border-secondary-200">
        <p className="text-sm text-secondary-500">
          All cost estimates are national averages for planning purposes only. Local costs
          vary based on labor rates, material availability, site conditions, and building codes.
          Get quotes from local contractors for accurate pricing.
        </p>
        <p className="text-xs text-secondary-400 mt-2">Last updated: May 2026</p>
      </div>
    </div>
  );
}
