/**
 * Unit Conversion Data for Programmatic SEO
 * Generates conversion pages for various units
 */

export interface UnitConversion {
  id: string;
  title: string;
  slug: string;
  description: string;
  fromUnit: string;
  toUnit: string;
  factor: number;
  formula: string;
  category?: string;
  popular?: boolean;
  icon?: string;
  name?: string;
  commonValues: Array<{ from: number; to: number; label?: string }>;
  relatedConversions: string[];
}

export const unitConversions: UnitConversion[] = [
  {
    id: "cubic-yards-to-cubic-feet",
    title: "Cubic Yards to Cubic Feet",
    slug: "cubic-yards-to-cubic-feet",
    description: "Convert cubic yards to cubic feet for concrete, mulch, and landscaping materials",
    fromUnit: "cubic yards",
    toUnit: "cubic feet",
    factor: 27,
    formula: "cubic feet = cubic yards × 27",
    commonValues: [
      { from: 0.5, to: 13.5 },
      { from: 1, to: 27 },
      { from: 2, to: 54 },
      { from: 3, to: 81 },
      { from: 4, to: 108 },
      { from: 5, to: 135 },
      { from: 10, to: 270 },
    ],
    relatedConversions: ["cubic-feet-to-cubic-yards", "square-yards-to-square-feet"],
  },
  {
    id: "cubic-feet-to-cubic-yards",
    title: "Cubic Feet to Cubic Yards",
    slug: "cubic-feet-to-cubic-yards",
    description: "Convert cubic feet to cubic yards for ordering concrete and materials",
    fromUnit: "cubic feet",
    toUnit: "cubic yards",
    factor: 0.037037,
    formula: "cubic yards = cubic feet ÷ 27",
    commonValues: [
      { from: 27, to: 1 },
      { from: 54, to: 2 },
      { from: 81, to: 3 },
      { from: 108, to: 4 },
      { from: 135, to: 5 },
      { from: 270, to: 10 },
    ],
    relatedConversions: ["cubic-yards-to-cubic-feet"],
  },
  {
    id: "square-yards-to-square-feet",
    title: "Square Yards to Square Feet",
    slug: "square-yards-to-square-feet",
    description: "Convert square yards to square feet for flooring, carpet, and landscaping",
    fromUnit: "square yards",
    toUnit: "square feet",
    factor: 9,
    formula: "square feet = square yards × 9",
    commonValues: [
      { from: 1, to: 9 },
      { from: 5, to: 45 },
      { from: 10, to: 90 },
      { from: 15, to: 135 },
      { from: 20, to: 180 },
      { from: 100, to: 900 },
    ],
    relatedConversions: ["square-feet-to-square-yards", "cubic-yards-to-cubic-feet"],
  },
  {
    id: "square-feet-to-square-yards",
    title: "Square Feet to Square Yards",
    slug: "square-feet-to-square-yards",
    description: "Convert square feet to square yards for ordering materials",
    fromUnit: "square feet",
    toUnit: "square yards",
    factor: 0.111111,
    formula: "square yards = square feet ÷ 9",
    commonValues: [
      { from: 9, to: 1 },
      { from: 45, to: 5 },
      { from: 90, to: 10 },
      { from: 180, to: 20 },
      { from: 450, to: 50 },
      { from: 900, to: 100 },
    ],
    relatedConversions: ["square-yards-to-square-feet"],
  },
  {
    id: "feet-to-yards",
    title: "Feet to Yards",
    slug: "feet-to-yards",
    description: "Convert feet to yards for length measurements",
    fromUnit: "feet",
    toUnit: "yards",
    factor: 0.333333,
    formula: "yards = feet ÷ 3",
    commonValues: [
      { from: 3, to: 1 },
      { from: 6, to: 2 },
      { from: 9, to: 3 },
      { from: 12, to: 4 },
      { from: 30, to: 10 },
      { from: 100, to: 33.33 },
    ],
    relatedConversions: ["yards-to-feet", "inches-to-feet"],
  },
  {
    id: "yards-to-feet",
    title: "Yards to Feet",
    slug: "yards-to-feet",
    description: "Convert yards to feet for length measurements",
    fromUnit: "yards",
    toUnit: "feet",
    factor: 3,
    formula: "feet = yards × 3",
    commonValues: [
      { from: 1, to: 3 },
      { from: 2, to: 6 },
      { from: 3, to: 9 },
      { from: 10, to: 30 },
      { from: 100, to: 300 },
    ],
    relatedConversions: ["feet-to-yards"],
  },
  {
    id: "inches-to-feet",
    title: "Inches to Feet",
    slug: "inches-to-feet",
    description: "Convert inches to feet for construction measurements",
    fromUnit: "inches",
    toUnit: "feet",
    factor: 0.0833333,
    formula: "feet = inches ÷ 12",
    commonValues: [
      { from: 12, to: 1 },
      { from: 24, to: 2 },
      { from: 36, to: 3 },
      { from: 48, to: 4 },
      { from: 60, to: 5 },
      { from: 72, to: 6 },
      { from: 96, to: 8 },
    ],
    relatedConversions: ["feet-to-inches"],
  },
  {
    id: "feet-to-inches",
    title: "Feet to Inches",
    slug: "feet-to-inches",
    description: "Convert feet to inches for detailed measurements",
    fromUnit: "feet",
    toUnit: "inches",
    factor: 12,
    formula: "inches = feet × 12",
    commonValues: [
      { from: 1, to: 12 },
      { from: 2, to: 24 },
      { from: 3, to: 36 },
      { from: 4, to: 48 },
      { from: 5, to: 60 },
      { from: 10, to: 120 },
    ],
    relatedConversions: ["inches-to-feet"],
  },
  {
    id: "cubic-meters-to-cubic-yards",
    title: "Cubic Meters to Cubic Yards",
    slug: "cubic-meters-to-cubic-yards",
    description: "Convert cubic meters to cubic yards for metric to imperial conversion",
    fromUnit: "cubic meters",
    toUnit: "cubic yards",
    factor: 1.30795,
    formula: "cubic yards = cubic meters × 1.30795",
    commonValues: [
      { from: 1, to: 1.31 },
      { from: 2, to: 2.62 },
      { from: 3, to: 3.92 },
      { from: 5, to: 6.54 },
      { from: 10, to: 13.08 },
    ],
    relatedConversions: ["cubic-yards-to-cubic-meters"],
  },
  {
    id: "cubic-yards-to-cubic-meters",
    title: "Cubic Yards to Cubic Meters",
    slug: "cubic-yards-to-cubic-meters",
    description: "Convert cubic yards to cubic meters for imperial to metric conversion",
    fromUnit: "cubic yards",
    toUnit: "cubic meters",
    factor: 0.764555,
    formula: "cubic meters = cubic yards × 0.764555",
    commonValues: [
      { from: 1, to: 0.76 },
      { from: 2, to: 1.53 },
      { from: 3, to: 2.29 },
      { from: 5, to: 3.82 },
      { from: 10, to: 7.65 },
    ],
    relatedConversions: ["cubic-meters-to-cubic-yards"],
  },
  {
    id: "meters-to-feet",
    title: "Meters to Feet",
    slug: "meters-to-feet",
    description: "Convert meters to feet for metric to imperial length conversion",
    fromUnit: "meters",
    toUnit: "feet",
    factor: 3.28084,
    formula: "feet = meters × 3.28084",
    commonValues: [
      { from: 1, to: 3.28 },
      { from: 2, to: 6.56 },
      { from: 3, to: 9.84 },
      { from: 5, to: 16.4 },
      { from: 10, to: 32.81 },
    ],
    relatedConversions: ["feet-to-meters"],
  },
  {
    id: "feet-to-meters",
    title: "Feet to Meters",
    slug: "feet-to-meters",
    description: "Convert feet to meters for imperial to metric length conversion",
    fromUnit: "feet",
    toUnit: "meters",
    factor: 0.3048,
    formula: "meters = feet × 0.3048",
    commonValues: [
      { from: 1, to: 0.3 },
      { from: 3, to: 0.91 },
      { from: 10, to: 3.05 },
      { from: 100, to: 30.48 },
    ],
    relatedConversions: ["meters-to-feet"],
  },
];

export function getConversionById(id: string): UnitConversion | undefined {
  return unitConversions.find((c) => c.id === id);
}

export function getConversionBySlug(slug: string): UnitConversion | undefined {
  return unitConversions.find((c) => c.slug === slug);
}

export function getAllConversions(): UnitConversion[] {
  return unitConversions;
}
