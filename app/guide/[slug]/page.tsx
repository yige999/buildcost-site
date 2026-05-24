/**
 * Dynamic Guide Page - Programmatic SEO
 * Pattern: /guide/{guide-slug}
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getGuideBySlug, getGuideById, getAllGuides } from "@/data/guides";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { BookOpen, AlertTriangle, Lightbulb, Clock } from "lucide-react";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGuides().map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  return {
    title: `${guide.title} | BuildCost.site`,
    description: guide.description,
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/guide" className="text-sm text-primary hover:underline">
          ← All Guides
        </Link>
        <h1 className="text-4xl font-bold text-secondary-900 mt-4 mb-2">{guide.title}</h1>
        <p className="text-xl text-secondary-600">{guide.description}</p>
      </div>

      {/* Introduction */}
      <Card className="mb-8 bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <p className="text-secondary-800 leading-relaxed">{guide.content.introduction}</p>
        </CardContent>
      </Card>

      {/* Content Sections */}
      {guide.content.sections.map((section, idx) => (
        <Card key={idx} className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {section.content.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2 text-secondary-700">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}

      {/* Tips */}
      {guide.content.tips.length > 0 && (
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Lightbulb className="w-5 h-5" />
              Pro Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-2">
              {guide.content.tips.map((tip, idx) => (
                <li key={idx} className="text-sm text-blue-800 flex items-start gap-2">
                  <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  {tip}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Warnings */}
      {guide.content.warnings && guide.content.warnings.length > 0 && (
        <Card className="mb-8 bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-900">
              <AlertTriangle className="w-5 h-5" />
              Important Warnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {guide.content.warnings.map((warning, idx) => (
                <li key={idx} className="text-red-800 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  {warning}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Related Guides */}
      <div>
        <h2 className="text-2xl font-bold text-secondary-900 mb-4">Related Guides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guide.related.slice(0, 6).map((relatedId, idx) => {
            const related = getGuideById(relatedId);
            if (!related) return null;
            return (
              <Link key={idx} href={`/guide/${related.slug}`} className="group">
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-5 h-5 text-primary group-hover:text-blue-600" />
                      <h3 className="font-semibold text-secondary-900 group-hover:text-primary">{related.title}</h3>
                    </div>
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
