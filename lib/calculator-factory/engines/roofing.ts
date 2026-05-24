import { CalculatorResults } from "@/types/calculator";

/**
 * Unit system types
 */
type UnitSystem = "imperial" | "metric";

/**
 * Input types for shingle calculator
 */
export interface ShingleInputs {
  houseLength: number;
  houseWidth: number;
  roofPitch: string;
  overhang?: number;
  waste?: number;
  pricePerBundle?: number;
  unitSystem?: UnitSystem;
}

/**
 * Result types for shingle calculator
 */
export interface ShingleResults extends CalculatorResults {
  totalRoofArea: number;
  roofSquares: number;
  bundlesNeeded: number;
  bundlesNeededArchitectural: number;
  totalCost?: number;
}

/**
 * Roof pitch multiplier lookup table
 * Converts roof pitch to area multiplier (accounts for slope)
 * Formula: multiplier = sqrt(pitch^2 + 12^2) / 12
 */
const PITCH_MULTIPLIERS: Record<string, number> = {
  "0": 1.0,
  "2": 1.014,
  "3": 1.031,
  "4": 1.054,
  "5": 1.083,
  "6": 1.118,
  "7": 1.158,
  "8": 1.202,
  "9": 1.25,
  "10": 1.302,
  "12": 1.414,
  "15": 1.601,
  "18": 1.803,
};

/**
 * Standard bundle coverages (in square feet)
 * - 3-tab shingles: 33.3 sq ft per bundle (3 bundles = 1 square = 100 sq ft)
 * - Architectural/laminated: 32.8 sq ft per bundle (slightly less coverage)
 */
const BUNDLE_COVERAGE = {
  threeTab: 33.33,
  architectural: 32.8,
};

/**
 * Square to sq ft conversion
 * 1 square = 100 square feet
 */
const SQ_FT_PER_SQUARE = 100;

/**
 * Calculate roof shingle requirements
 *
 * @param inputs - Shingle calculation inputs
 * @returns Shingle calculation results
 */
export function calculateShingle(inputs: ShingleInputs): ShingleResults {
  const {
    houseLength,
    houseWidth,
    roofPitch = "4",
    overhang = 12,
    waste = 10,
    pricePerBundle,
    unitSystem = "imperial",
  } = inputs;

  // Convert overhang from inches to feet
  const overhangFt = overhang / 12;

  // Calculate base dimensions with overhang
  const lengthWithOverhang = houseLength + overhangFt * 2;
  const widthWithOverhang = houseWidth + overhangFt * 2;

  // Calculate base area (flat)
  const baseArea = lengthWithOverhang * widthWithOverhang;

  // Get pitch multiplier
  const pitchMultiplier = PITCH_MULTIPLIERS[roofPitch] || 1.054;

  // Calculate total roof area (accounting for pitch)
  // For a standard gable roof (2 sides), multiply by 2
  const totalRoofArea = baseArea * pitchMultiplier * 2;

  // Apply waste factor
  const wasteMultiplier = 1 + waste / 100;
  const areaWithWaste = totalRoofArea * wasteMultiplier;

  // Calculate roofing squares (1 square = 100 sq ft)
  const roofSquares = areaWithWaste / SQ_FT_PER_SQUARE;

  // Calculate bundles needed
  const bundlesNeeded = Math.ceil(
    areaWithWaste / BUNDLE_COVERAGE.threeTab
  );
  const bundlesNeededArchitectural = Math.ceil(
    areaWithWaste / BUNDLE_COVERAGE.architectural
  );

  // Calculate total cost if price per bundle is provided
  let totalCost: number | undefined;
  if (pricePerBundle && pricePerBundle > 0) {
    totalCost = Math.round(bundlesNeeded * pricePerBundle * 100) / 100;
  }

  return {
    totalRoofArea: Math.round(areaWithWaste),
    roofSquares: Math.round(roofSquares * 10) / 10,
    bundlesNeeded,
    bundlesNeededArchitectural,
    ...(totalCost !== undefined && { totalCost }),
  };
}
