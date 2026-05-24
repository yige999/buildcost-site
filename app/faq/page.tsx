/**
 * FAQ Hub Page - All FAQ categories index
 */
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { getAllFAQHubs } from "@/data";
import { HelpCircle, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ: Frequently Asked Questions | BuildCost.site",
  description: "Find answers to common questions about concrete calculations, project costs, and construction. Get expert answers to your questions.",
};

export default function FAQHubPage() {
  const faqHubs = getAllFAQHubs();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-secondary-600">
          Find answers to the most common questions about construction calculators, costs, and DIY projects
        </p>
      </div>

      {/* Search CTA */}
      <Card className="mb-12 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <Search className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-lg font-semibold text-secondary-900">Can't find your answer?</h2>
              <p className="text-secondary-600 text-sm">
                Browse our guides or use our calculators to get started
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Categories */}
      <div className="space-y-6">
        {faqHubs.map((hub) => (
          <Link key={hub.id} href={`/faq/${hub.slug}`}>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-secondary-900">{hub.title}</h2>
                    <p className="text-secondary-600">{hub.description}</p>
                    <p className="text-sm text-primary font-medium mt-1">
                      {hub.faqs.length} Questions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Links */}
      <div className="mt-16 pt-8 border-t border-secondary-200">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6">
          More Help
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/guide" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">How-To Guides</h3>
            <p className="text-sm text-secondary-600">Step-by-step tutorials</p>
          </Link>
          <Link href="/compare" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">Comparisons</h3>
            <p className="text-sm text-secondary-600">Material vs material</p>
          </Link>
          <Link href="/diy-vs-pro" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">DIY vs Pro</h3>
            <p className="text-sm text-secondary-600">Cost comparisons</p>
          </Link>
          <Link href="/concrete/slab" className="p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <h3 className="font-semibold text-secondary-900">Calculators</h3>
            <p className="text-sm text-secondary-600">Get estimates</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
