import { MetadataRoute } from "next";
import {
  getAllCategories,
  getAllCalculators,
  getAllConversions,
  getAllComparisons,
  getAllDimensionGuides,
  getAllFAQHubs,
  getAllDIYVsPro,
  getAllMaterialGuides,
  projectCosts,
} from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://buildcost.site";
  const categories = getAllCategories();
  const calculators = getAllCalculators();
  const conversions = getAllConversions();
  const comparisons = getAllComparisons();
  const dimensionGuides = getAllDimensionGuides();
  const faqHubs = getAllFAQHubs();
  const diyVsPro = getAllDIYVsPro();
  const materialGuides = getAllMaterialGuides();
  const costProjects = projectCosts;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/diy-vs-pro`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/materials`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/compare`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/dimensions`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/convert`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/guide`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Calculator pages
  const calculatorPages: MetadataRoute.Sitemap = calculators.map((calc) => ({
    url: `${baseUrl}/${calc.category}/${calc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Unit conversion pages
  const conversionPages: MetadataRoute.Sitemap = conversions.map((conv) => ({
    url: `${baseUrl}/convert/${conv.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Comparison pages
  const comparisonPages: MetadataRoute.Sitemap = comparisons.map((comp) => ({
    url: `${baseUrl}/compare/${comp.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dimension guide pages
  const dimensionPages: MetadataRoute.Sitemap = dimensionGuides.map((dim) => ({
    url: `${baseUrl}/dimensions/${dim.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // FAQ hub pages
  const faqPages: MetadataRoute.Sitemap = faqHubs.map((faq) => ({
    url: `${baseUrl}/faq/${faq.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // DIY vs Pro pages
  const diyVsProPages: MetadataRoute.Sitemap = diyVsPro.map((diy) => ({
    url: `${baseUrl}/diy-vs-pro/${diy.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Material guide pages
  const materialGuidePages: MetadataRoute.Sitemap = materialGuides.map((mat) => ({
    url: `${baseUrl}/materials/${mat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Cost estimate pages
  const costPages: MetadataRoute.Sitemap = costProjects.map((cost) => ({
    url: `${baseUrl}/cost/${cost.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...calculatorPages,
    ...conversionPages,
    ...comparisonPages,
    ...dimensionPages,
    ...faqPages,
    ...diyVsProPages,
    ...materialGuidePages,
    ...costPages,
  ];
}
