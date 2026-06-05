/**
 * DIY vs Pro Hub Page - All comparisons index
 */
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { getAllDIYVsPro } from "@/data";
import { Wrench, DollarSign, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "DIY vs Professional: Should You Hire a Pro?",
  description: "Compare DIY and professional costs for concrete, roofing, and other projects. Decide when to DIY and when to hire a contractor.",
};

export default function DIYVsProHubPage() {
  const comparisons = getAllDIYVsPro();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          DIY vs Professional: Should You Hire a Pro?
        </h1>
        <p className="text-xl text-secondary-600">
          Compare costs, time, and quality to decide whether to tackle your project yourself or hire a professional contractor.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <DollarSign className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="text-lg font-semibold text-green-900">Save Money</h3>
            <p className="text-sm text-green-800 mt-2">
              DIY saves 50-70% on labor costs. For small projects, savings can be $1,000-$5,000.
            </p>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <Scale className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-blue-900">Quality Assurance</h3>
            <p className="text-sm text-blue-800 mt-2">
              Professionals have experience and tools. Get guaranteed results with warranty.
            </p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="pt-6">
            <Wrench className="w-8 h-8 text-purple-600 mb-2" />
            <h3 className="text-lg font-semibold text-purple-900">Time & Effort</h3>
            <p className="text-sm text-purple-800 mt-2">
              Professionals work faster in days. DIY takes weeks of evenings and weekends.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Comparison List */}
      <div>
        <h2 className="text-2xl font-bold text-secondary-900 mb-6">
          Project Comparisons
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((item) => (
            <Link key={item.id} href={`/diy-vs-pro/${item.slug}`}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-secondary-600">DIY Cost:</span>
                      <span className="font-semibold text-green-700">{item.diy.totalCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Pro Cost:</span>
                      <span className="font-semibold text-blue-700">{item.professional.totalCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Your Savings:</span>
                      <span className="font-bold text-green-700">{item.diy.savings}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
