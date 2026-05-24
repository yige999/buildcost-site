/**
 * Central export file for all calculator data
 * Import from this file to access all calculators and categories
 */

import { CalculatorConfig, CategoryConfig } from "@/types/calculator";
import {
  categories,
  getAllCategories as getCategories,
  getCategoryBySlug,
  categoryExists,
} from "./categories";
import {
  concreteCalculators,
  getAllConcreteCalculators,
  getConcreteCalculatorBySlug,
} from "./calculators/concrete";
import {
  roofingCalculators,
  getAllRoofingCalculators,
  getRoofingCalculatorBySlug,
} from "./calculators/roofing";
import {
  flooringCalculators,
  getAllFlooringCalculators,
  getFlooringCalculatorBySlug,
} from "./calculators/flooring";
import {
  topCities,
  getCityData,
  getCitiesByState,
  getCitiesByClimate,
  getUniqueStates,
} from "./city-data";

/**
 * All calculator configs aggregated by category
 */
export const allCalculators: Record<string, CalculatorConfig[]> = {
  concrete: concreteCalculators,
  roofing: roofingCalculators,
  flooring: flooringCalculators,
};

/**
 * Get all calculators across all categories
 */
export function getAllCalculators(): CalculatorConfig[] {
  return Object.values(allCalculators).flat();
}

/**
 * Get calculators for a specific category
 */
export function getCalculatorsByCategory(
  category: string
): CalculatorConfig[] {
  return allCalculators[category] || [];
}

/**
 * Get a specific calculator by category and slug
 */
export function getCalculatorBySlug(
  category: string,
  slug: string
): CalculatorConfig | undefined {
  return allCalculators[category]?.find((calc) => calc.slug === slug);
}

/**
 * Check if a calculator exists
 */
export function calculatorExists(category: string, slug: string): boolean {
  return allCalculators[category]?.some((calc) => calc.slug === slug) || false;
}

// Re-export categories
export { categories, getCategories as getAllCategories, getCategoryBySlug, categoryExists };

// Re-export calculator-specific functions
export {
  getAllConcreteCalculators,
  getConcreteCalculatorBySlug,
  getAllRoofingCalculators,
  getRoofingCalculatorBySlug,
  getAllFlooringCalculators,
  getFlooringCalculatorBySlug,
};

// Re-export city data
export {
  topCities,
  getCityData,
  getCitiesByState,
  getCitiesByClimate,
  getUniqueStates,
};
export type { CityData } from "./city-data";

// Re-export extended city data
export {
  extendedCities,
  getExtendedCityData,
  getExtendedCitiesByState,
  getExtendedCitiesByClimate,
  getExtendedUniqueStates,
  getCityMaterialCost,
  getCityLaborCost,
} from "./extended-city-data";
export type { ExtendedCityData } from "./extended-city-data";

// Re-export FAQ data
export { getFAQs, getCalculatorIdsWithFAQs, commonFAQs } from "./faq-data";
export type { FAQEntry } from "./faq-data";

// Re-export FAQ Hub data
export { getFAQHubById, getFAQHubBySlug, getAllFAQHubs, getAllFAQIds } from "./faq-hub";
export type { FAQHubData } from "./faq-hub";

// Re-export comparison data
export { getComparisonById, getAllComparisons } from "./comparisons";
export type { ComparisonData } from "./comparisons";

// Re-export unit conversion data
export { getConversionById, getConversionBySlug, getAllConversions } from "./unit-conversions";
export type { UnitConversion } from "./unit-conversions";

// Re-export dimension guide data
export {
  getDimensionGuideById,
  getDimensionGuideBySlug,
  getAllDimensionGuides,
  getDimensionGuidesByCategory,
} from "./dimension-guides";
export type { DimensionGuide } from "./dimension-guides";

// Re-export cost estimate data
export { getProjectCostData, calculateProjectCost, projectCosts } from "./cost-estimates";
export type { ProjectCostData } from "./cost-estimates";

// Re-export DIY vs Pro data
export { getDIYVsProById, getDIYVsProBySlug, getAllDIYVsPro } from "./diy-vs-pro";
export type { DIYVsProData } from "./diy-vs-pro";

// Re-export material guide data
export { getMaterialGuideById, getMaterialGuideBySlug, getAllMaterialGuides } from "./material-guides";
export type { MaterialGuide } from "./material-guides";

// Re-export guide data
export { getGuideById, getGuideBySlug, getAllGuides, getGuidesByCategory } from "./guides";
export type { GuideData } from "./guides";

// Re-export extended guides
export { getAllExtendedGuides } from "./guides-extended";

// Re-export translations
export { getTranslations, getSupportedLocales, isLocaleSupported, getLocaleFromPath } from "./translations";
export type { Translations } from "./translations";
