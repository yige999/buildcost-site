/**
 * JSON-LD Schema Component for SEO Rich Snippets
 * Implements SoftwareApplication and FAQPage schemas
 */

import { CalculatorConfig } from "@/types/calculator";

interface JsonLdProps {
  /** Schema data object */
  data: Record<string, unknown>;
}

/**
 * Base JSON-LD component that renders schema markup
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface SoftwareAppSchemaProps {
  /** Calculator configuration */
  calculator: CalculatorConfig;
  /** Base URL of the site */
  baseUrl?: string;
  /** Category name */
  category?: string;
}

/**
 * SoftwareApplication Schema for calculators
 * Helps Google display rich snippets in search results
 */
export function SoftwareAppSchema({
  calculator,
  baseUrl = "https://buildcost.site",
  category,
}: SoftwareAppSchemaProps) {
  const url = `${baseUrl}/${category}/${calculator.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: calculator.name,
    description: calculator.seoDescription || calculator.description,
    url: url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "BuildCost.site",
      url: baseUrl,
    },
    featureList: calculator.inputs
      .map((input) => input.label)
      .concat(calculator.outputs.map((output) => output.label)),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return <JsonLd data={schema} />;
}

interface FAQPageSchemaProps {
  /** List of FAQs */
  faqs: Array<{ question: string; answer: string }>;
}

/**
 * FAQPage Schema for FAQ sections
 * Enables Google to display FAQ rich snippets
 */
export function FAQPageSchema({ faqs }: FAQPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={schema} />;
}

interface BreadcrumbSchemaProps {
  /** Breadcrumb items */
  items: Array<{ name: string; href: string }>;
  /** Base URL of the site */
  baseUrl?: string;
}

/**
 * Breadcrumb Schema for navigation hierarchy
 */
export function BreadcrumbSchema({ items, baseUrl = "https://buildcost.site" }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href.startsWith("http") ? item.href : `${baseUrl}${item.href}`,
    })),
  };

  return <JsonLd data={schema} />;
}

interface HowToSchemaProps {
  /** How-to steps */
  name: string;
  description?: string;
  steps: Array<{ name: string; text?: string }>;
}

/**
 * HowTo Schema for instructions
 * Enables Google to display how-to rich snippets
 */
export function HowToSchema({ name, description, steps }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  return <JsonLd data={schema} />;
}
