/**
 * Dynamic FAQ Hub Page - Programmatic SEO
 * Pattern: /faq/{faq-slug}
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getFAQHubBySlug, getAllFAQHubs } from "@/data/faq-hub";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { HelpCircle } from "lucide-react";

interface FAQPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllFAQHubs().map((hub) => ({
    slug: hub.slug,
  }));
}

export async function generateMetadata({ params }: FAQPageProps): Promise<Metadata> {
  const { slug } = await params;
  const hub = getFAQHubBySlug(slug);

  if (!hub) {
    return { title: "FAQ Not Found" };
  }

  return {
    title: `${hub.title} | BuildCost.site`,
    description: hub.description,
  };
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { slug } = await params;
  const hub = getFAQHubBySlug(slug);

  if (!hub) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/faq" className="text-sm text-primary hover:underline">
          ← All FAQ Categories
        </Link>
        <h1 className="text-4xl font-bold text-secondary-900 mt-4 mb-2">{hub.title}</h1>
        <p className="text-xl text-secondary-600">{hub.description}</p>
      </div>

      <div className="space-y-4">
        {hub.faqs.map((faq, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <HelpCircle className="w-5 h-5 text-primary" />
                {faq.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-secondary-700 leading-relaxed">{faq.answer}</p>
              {faq.related && faq.related.length > 0 && (
                <div className="mt-4 pt-4 border-t border-secondary-200">
                  <div className="text-sm font-medium text-secondary-900 mb-2">Related:</div>
                  <div className="flex flex-wrap gap-2">
                    {faq.related.map((related, rIdx) => (
                      <span
                        key={rIdx}
                        className="text-sm bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full"
                      >
                        {related}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
