/**
 * Standard Dimensions Data for Programmatic SEO
 * Generates reference pages for standard project dimensions
 */

export interface DimensionGuide {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: "driveway" | "patio" | "garage" | "walkway" | "foundation";
  dimensions: Array<{
    name: string;
    width: { min: number; recommended: number; unit: string };
    length: { min: number; recommended: number; unit: string };
    thickness?: { min: number; recommended: number; unit: string };
    notes?: string;
  }>;
  considerations: string[];
  name?: string;
  alternativeNames?: string;
}

export const dimensionGuides: DimensionGuide[] = [
  {
    id: "standard-driveway-sizes",
    title: "Standard Driveway Dimensions",
    slug: "standard-driveway-sizes",
    description: "Standard driveway sizes for 1-car, 2-car, and 3-car garages with minimum and recommended dimensions",
    category: "driveway",
    dimensions: [
      {
        name: "Single Car Driveway",
        width: { min: 10, recommended: 12, unit: "ft" },
        length: { min: 20, recommended: 24, unit: "ft" },
        thickness: { min: 4, recommended: 6, unit: "inches" },
        notes: "Compact car only, tight fit for larger vehicles",
      },
      {
        name: "Double Car Driveway",
        width: { min: 18, recommended: 24, unit: "ft" },
        length: { min: 20, recommended: 24, unit: "ft" },
        thickness: { min: 4, recommended: 6, unit: "inches" },
        notes: "Allows both doors to open without hitting adjacent car",
      },
      {
        name: "Triple Car Driveway",
        width: { min: 28, recommended: 32, unit: "ft" },
        length: { min: 20, recommended: 24, unit: "ft" },
        thickness: { min: 4, recommended: 6, unit: "inches" },
        notes: "Extra parking or storage space",
      },
    ],
    considerations: [
      "Check local building codes for minimum requirements",
      "HOA may have specific requirements",
      "Setback requirements from property lines",
      "Consider turning radius for backing out",
    ],
  },
  {
    id: "standard-patio-sizes",
    title: "Standard Patio Dimensions",
    slug: "standard-patio-sizes",
    description: "Standard patio sizes for different outdoor living scenarios",
    category: "patio",
    dimensions: [
      {
        name: "Bistro Patio (Small)",
        width: { min: 7, recommended: 10, unit: "ft" },
        length: { min: 7, recommended: 10, unit: "ft" },
        thickness: { min: 4, recommended: 4, unit: "inches" },
        notes: "Fits a small bistro table and 2 chairs",
      },
      {
        name: "Dining Patio",
        width: { min: 12, recommended: 14, unit: "ft" },
        length: { min: 12, recommended: 16, unit: "ft" },
        thickness: { min: 4, recommended: 4, unit: "inches" },
        notes: "Dining table with 4-6 chairs, room to move around",
      },
      {
        name: "Living Room Patio",
        width: { min: 16, recommended: 18, unit: "ft" },
        length: { min: 16, recommended: 20, unit: "ft" },
        thickness: { min: 4, recommended: 4, unit: "inches" },
        notes: "Seating area plus outdoor kitchen or fire pit",
      },
      {
        name: "Entertainment Patio",
        width: { min: 20, recommended: 24, unit: "ft" },
        length: { min: 20, recommended: 24, unit: "ft" },
        thickness: { min: 4, recommended: 5, unit: "inches" },
        notes: "Multiple seating areas, dining, lounging",
      },
    ],
    considerations: [
      "Leave 3-4 feet clearance around furniture",
      "Consider sun exposure throughout the day",
      "Plan for umbrella or shade structure space",
      "Account for grill clearance (18+ inches from structures)",
    ],
  },
  {
    id: "standard-garage-sizes",
    title: "Standard Garage Dimensions",
    slug: "standard-garage-sizes",
    description: "Standard garage sizes for 1-car, 2-car, and 3-car garages",
    category: "garage",
    dimensions: [
      {
        name: "1-Car Garage",
        width: { min: 12, recommended: 14, unit: "ft" },
        length: { min: 20, recommended: 24, unit: "ft" },
        thickness: { min: 4, recommended: 6, unit: "inches" },
        notes: "Minimum for compact car, tight for SUV/truck",
      },
      {
        name: "2-Car Garage",
        width: { min: 20, recommended: 24, unit: "ft" },
        length: { min: 20, recommended: 24, unit: "ft" },
        thickness: { min: 4, recommended: 6, unit: "inches" },
        notes: "Standard size, allows space between cars",
      },
      {
        name: "2-Car Garage with Storage",
        width: { min: 24, recommended: 28, unit: "ft" },
        length: { min: 22, recommended: 24, unit: "ft" },
        thickness: { min: 4, recommended: 6, unit: "inches" },
        notes: "Extra room for workbench or storage",
      },
      {
        name: "3-Car Garage",
        width: { min: 30, recommended: 36, unit: "ft" },
        length: { min: 22, recommended: 24, unit: "ft" },
        thickness: { min: 4, recommended: 6, unit: "inches" },
        notes: "Multiple vehicles plus workspace",
      },
    ],
    considerations: [
      "Ceiling height: minimum 8 ft, 10 ft recommended for lifts",
      "Door width: 9 ft minimum for 2-car, 16 ft for 3-car",
      "Consider depth for full-size pickup trucks (22-24 ft)",
      "Electrical outlet placement (every 6 ft recommended)",
    ],
  },
  {
    id: "standard-walkway-sizes",
    title: "Standard Walkway Dimensions",
    slug: "standard-walkway-sizes",
    description: "Standard walkway and sidewalk dimensions for residential properties",
    category: "walkway",
    dimensions: [
      {
        name: "Side Walkway",
        width: { min: 3, recommended: 4, unit: "ft" },
        length: { min: 20, recommended: 40, unit: "ft" },
        thickness: { min: 4, recommended: 4, unit: "inches" },
        notes: "Front door to street or driveway",
      },
      {
        name: "Garden Path",
        width: { min: 2, recommended: 3, unit: "ft" },
        length: { min: 10, recommended: 20, unit: "ft" },
        thickness: { min: 3, recommended: 4, unit: "inches" },
        notes: "Through garden or yard",
      },
      {
        name: "Front Entrance Walk",
        width: { min: 4, recommended: 5, unit: "ft" },
        length: { min: 10, recommended: 15, unit: "ft" },
        thickness: { min: 4, recommended: 4, unit: "inches" },
        notes: "Main entrance, wide enough for 2 people",
      },
    ],
    considerations: [
      "Slope away from structures for drainage",
      "Consider curves for visual interest",
      "Allow for steps at elevation changes",
      "Width should accommodate wheelchairs if needed (36 min)",
    ],
  },
  {
    id: "standard-foundation-sizes",
    title: "Standard Foundation Depth",
    slug: "standard-foundation-depth",
    description: "Standard foundation depths and footings for different structures",
    category: "foundation",
    dimensions: [
      {
        name: "Frost Line Footing",
        width: { min: 12, recommended: 16, unit: "in" },
        length: { min: 6, recommended: 8, unit: "in" },
        thickness: { min: 36, recommended: 48, unit: "inches" },
        notes: "Below frost line depth varies by location",
      },
      {
        name: "Monolithic Slab Footing",
        width: { min: 12, recommended: 16, unit: "in" },
        length: { min: 6, recommended: 8, unit: "in" },
        thickness: { min: 4, recommended: 6, unit: "inches" },
        notes: "Thickened edge of slab on grade",
      },
      {
        name: "Sonotube Footing",
        width: { min: 8, recommended: 10, unit: "in" },
        length: { min: 8, recommended: 10, unit: "in" },
        thickness: { min: 48, recommended: 60, unit: "inches" },
        notes: "Circular pier for deck or support post",
      },
    ],
    considerations: [
      "Frost depth varies by climate (check local codes)",
      "Soil bearing capacity affects footing size",
      "Expansive soils require special design",
      "Always consult local building codes",
    ],
  },
];

export function getDimensionGuideById(id: string): DimensionGuide | undefined {
  return dimensionGuides.find((d) => d.id === id);
}

export function getDimensionGuideBySlug(slug: string): DimensionGuide | undefined {
  return dimensionGuides.find((d) => d.slug === slug);
}

export function getAllDimensionGuides(): DimensionGuide[] {
  return dimensionGuides;
}

export function getDimensionGuidesByCategory(
  category: DimensionGuide["category"]
): DimensionGuide[] {
  return dimensionGuides.filter((d) => d.category === category);
}
