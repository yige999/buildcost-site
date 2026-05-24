import { CategoryConfig } from "@/types/calculator";

/**
 * Category definitions
 * Add new categories here to automatically update navigation and sitemap
 */
export const categories: CategoryConfig[] = [
  {
    slug: "concrete",
    name: "Concrete Calculators",
    description:
      "Calculate concrete volume for slabs, columns, footings, and more construction projects.",
    icon: "Hammer",
    color: "blue",
  },
  {
    slug: "roofing",
    name: "Roofing Calculators",
    description:
      "Calculate roofing materials, shingle counts, and costs. Estimate roof area and bundles needed.",
    icon: "Home",
    color: "amber",
  },
  {
    slug: "flooring",
    name: "Flooring Calculators",
    description:
      "Calculate flooring materials for tile, hardwood, laminate, carpet, and vinyl. Estimate square footage and material costs.",
    icon: "Layers",
    color: "green",
  },
];

/**
 * Get a category by its slug
 */
export function getCategoryBySlug(slug: string): CategoryConfig | undefined {
  return categories.find((cat) => cat.slug === slug);
}

/**
 * Get all categories
 */
export function getAllCategories(): CategoryConfig[] {
  return categories;
}

/**
 * Check if a category exists
 */
export function categoryExists(slug: string): boolean {
  return categories.some((cat) => cat.slug === slug);
}
