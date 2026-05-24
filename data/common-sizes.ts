/**
 * Common Size Combinations for Answer Engine Pages
 * Targets high-volume "how much material for X size" searches
 */

export interface CommonSize {
  /** Width in feet */
  width: number;
  /** Length in feet */
  length: number;
  /** Common description */
  description: string;
  /** Popular uses */
  uses: string[];
}

/**
 * Common concrete slab sizes that users search for
 */
export const commonSlabSizes: CommonSize[] = [
  { width: 10, length: 10, description: "10x10 slab", uses: ["Small shed", "Patios", "Hot tub base"] },
  { width: 10, length: 12, description: "10x12 slab", uses: ["Small shed", "Storage building"] },
  { width: 10, length: 20, description: "10x20 slab", uses: ["Large shed", "Garage extension"] },
  { width: 12, length: 12, description: "12x12 slab", uses: ["Medium shed", "Workshop"] },
  { width: 12, length: 20, description: "12x20 slab", uses: ["Large shed", "Small garage"] },
  { width: 20, length: 20, description: "20x20 slab", uses: ["2-car garage", "Large workshop"] },
  { width: 20, length: 24, description: "20x24 slab", uses: ["2-car garage", "Storage"] },
  { width: 24, length: 24, description: "24x24 slab", uses: ["2-car garage", "Large garage"] },
  { width: 24, length: 30, description: "24x30 slab", uses: ["3-car garage", "Large workshop"] },
  { width: 24, length: 40, description: "24x40 slab", uses: ["Pole barn", "Large garage"] },
  { width: 30, length: 30, description: "30x30 slab", uses: ["4-car garage", "Large workshop"] },
  { width: 30, length: 40, description: "30x40 slab", uses: ["Pole barn", "Large building"] },
  { width: 30, length: 50, description: "30x50 slab", uses: ["Large pole barn", "Warehouse"] },
  { width: 40, length: 40, description: "40x40 slab", uses: ["Large warehouse", "Commercial"] },
  { width: 40, length: 60, description: "40x60 slab", uses: ["Large building", "Arena"] },
  { width: 40, length: 80, description: "40x80 slab", uses: ["Commercial building", "Warehouse"] },
  { width: 50, length: 50, description: "50x50 slab", uses: ["Large commercial", "Industrial"] },
  { width: 50, length: 80, description: "50x80 slab", uses: ["Warehouse", "Industrial"] },
  { width: 60, length: 80, description: "60x80 slab", uses: ["Large warehouse", "Industrial"] },
  { width: 60, length: 100, description: "60x100 slab", uses: ["Large building", "Arena"] },
];

/**
 * Common concrete depths/thicknesses
 */
export const commonDepths = [3, 4, 5, 6, 8, 10, 12];

/**
 * Calculate concrete requirements for a given size
 */
export function calculateConcreteRequirements(
  width: number,
  length: number,
  depth: number = 4
): {
  cubicFeet: number;
  cubicYards: number;
  bags80lb: number;
  bags60lb: number;
  area: number;
} {
  // Calculate in cubic feet
  const cubicFeet = (width * length * depth) / 12;
  const cubicYards = cubicFeet / 27;
  const area = width * length;

  // Calculate bags (80lb = 0.60 cu ft, 60lb = 0.45 cu ft)
  const bags80lb = Math.ceil(cubicFeet / 0.60);
  const bags60lb = Math.ceil(cubicFeet / 0.45);

  return {
    cubicFeet: Math.round(cubicFeet * 100) / 100,
    cubicYards: Math.round(cubicYards * 100) / 100,
    bags80lb,
    bags60lb,
    area,
  };
}

/**
 * Generate answer text for a specific size
 */
export function generateSizeAnswer(
  width: number,
  length: number,
  depth: number = 4
): {
  title: string;
  summary: string;
  details: string[];
  costEstimate: { material: number; labor: number; total: number };
} {
  const calc = calculateConcreteRequirements(width, length, depth);

  return {
    title: `How Much Concrete for a ${width}x${length} Slab (${depth}" thick)`,
    summary: `For a ${width}x${length} foot slab that is ${depth} inches thick, you need approximately ${calc.cubicYards} cubic yards of concrete. This equals about ${calc.bags80lb} bags of 80lb concrete or ${calc.bags60lb} bags of 60lb concrete.`,
    details: [
      `Area: ${calc.area} square feet`,
      `Volume: ${calc.cubicFeet} cubic feet (${calc.cubicYards} cubic yards)`,
      `80lb bags required: ${calc.bags80lb} bags`,
      `60lb bags required: ${calc.bags60lb} bags`,
      `With 10% waste: ${(calc.cubicYards * 1.1).toFixed(2)} cubic yards`,
    ],
    costEstimate: {
      material: Math.round(calc.cubicYards * 125),
      labor: Math.round(calc.cubicYards * 50),
      total: Math.round(calc.cubicYards * 175),
    },
  };
}

/**
 * Get all size combinations for static generation
 */
export function getAllSizeCombinations(): Array<{
  width: number;
  length: number;
  slug: string;
}> {
  return commonSlabSizes.map((size) => ({
    width: size.width,
    length: size.length,
    slug: `${size.width}x${size.length}`,
  }));
}
