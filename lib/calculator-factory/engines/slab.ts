import { CalculatorResults } from "@/types/calculator";

/**
 * Unit system types
 */
type UnitSystem = "imperial" | "metric";

/**
 * Input types for slab calculator
 */
export interface SlabInputs {
  length: number;
  width: number;
  depth: number;
  waste?: number;
  pricePerBag?: number;
  unitSystem?: UnitSystem;
}

/**
 * Result types for slab calculator
 */
export interface SlabResults extends CalculatorResults {
  cubicYards: number;
  cubicFeet: number;
  bags80lb: number;
  bags60lb: number;
  totalCost?: number;
}

/**
 * Concrete bag yields (in cubic feet)
 */
const BAG_YIELDS = {
  "80lb": 0.6, // 80lb bag yields ~0.6 cubic feet
  "60lb": 0.45, // 60lb bag yields ~0.45 cubic feet
};

/**
 * Conversion factors
 */
const CONVERSIONS = {
  feetToMeters: 0.3048,
  metersToFeet: 3.28084,
  cubicFeetToCubicYards: 1 / 27, // 27 cubic feet = 1 cubic yard
};

/**
 * Calculate slab concrete requirements
 *
 * @param inputs - Slab calculation inputs
 * @returns Slab calculation results
 */
export function calculateSlab(inputs: SlabInputs): SlabResults {
  const { length, width, depth, waste = 10, pricePerBag, unitSystem = "imperial" } = inputs;

  // Convert metric to imperial if needed
  let lengthFt = length;
  let widthFt = width;
  let depthFt = depth;

  if (unitSystem === "metric") {
    // Convert meters to feet
    lengthFt = length * CONVERSIONS.metersToFeet;
    widthFt = width * CONVERSIONS.metersToFeet;
    depthFt = depth * CONVERSIONS.metersToFeet;
  }

  // Calculate base volume in cubic feet
  const baseVolume = lengthFt * widthFt * depthFt;

  // Apply waste factor
  const wasteMultiplier = 1 + waste / 100;
  const totalVolume = baseVolume * wasteMultiplier;

  // Calculate cubic yards
  const cubicYards = totalVolume * CONVERSIONS.cubicFeetToCubicYards;

  // Calculate bags needed (round up to whole bags)
  const bags80lb = Math.ceil(totalVolume / BAG_YIELDS["80lb"]);
  const bags60lb = Math.ceil(totalVolume / BAG_YIELDS["60lb"]);

  // Calculate total cost if price per bag is provided
  let totalCost: number | undefined;
  if (pricePerBag && pricePerBag > 0) {
    // Use 80lb bags for cost calculation (most common)
    totalCost = bags80lb * pricePerBag;
  }

  return {
    cubicYards: Math.round(cubicYards * 100) / 100,
    cubicFeet: Math.round(totalVolume * 100) / 100,
    bags80lb,
    bags60lb,
    ...(totalCost !== undefined && { totalCost: Math.round(totalCost * 100) / 100 }),
  };
}

/**
 * Get slab calculation info for display
 */
export function getSlabCalculationInfo() {
  return {
    bagYields: BAG_YIELDS,
    conversions: CONVERSIONS,
    description: "Calculates concrete volume for rectangular slabs",
  };
}
