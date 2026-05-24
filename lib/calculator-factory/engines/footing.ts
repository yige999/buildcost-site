import { CalculatorResults } from "@/types/calculator";

/**
 * Unit system types
 */
type UnitSystem = "imperial" | "metric";

/**
 * Input types for footing calculator
 */
export interface FootingInputs {
  length: number;
  width: number;
  depth: number;
  quantity: number;
  waste?: number;
  pricePerBag?: number;
  unitSystem?: UnitSystem;
}

/**
 * Result types for footing calculator
 */
export interface FootingResults extends CalculatorResults {
  cubicYards: number;
  cubicFeet: number;
  totalVolume: number;
  bags80lb: number;
  bags60lb: number;
  totalCost?: number;
}

/**
 * Concrete bag yields (in cubic feet)
 */
const BAG_YIELDS = {
  "80lb": 0.6,
  "60lb": 0.45,
};

/**
 * Conversion factors
 */
const CONVERSIONS = {
  feetToMeters: 0.3048,
  metersToFeet: 3.28084,
  cubicFeetToCubicYards: 1 / 27,
};

/**
 * Calculate concrete requirements for rectangular footings
 *
 * @param inputs - Footing calculation inputs
 * @returns Footing calculation results
 */
export function calculateFooting(inputs: FootingInputs): FootingResults {
  const {
    length,
    width,
    depth,
    quantity = 1,
    waste = 10,
    pricePerBag,
    unitSystem = "imperial",
  } = inputs;

  // Convert metric to imperial if needed
  let lengthFt = length;
  let widthFt = width;
  let depthFt = depth;

  if (unitSystem === "metric") {
    lengthFt = length * CONVERSIONS.metersToFeet;
    widthFt = width * CONVERSIONS.metersToFeet;
    depthFt = depth * CONVERSIONS.metersToFeet;
  }

  // Calculate volume of one footing
  // Volume = length × width × depth
  const volumePerFooting = lengthFt * widthFt * depthFt;

  // Calculate total volume for all footings
  const baseVolume = volumePerFooting * quantity;

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
    totalCost = bags80lb * pricePerBag;
  }

  return {
    cubicYards: Math.round(cubicYards * 100) / 100,
    cubicFeet: Math.round(totalVolume * 100) / 100,
    totalVolume: Math.round(totalVolume * 100) / 100,
    bags80lb,
    bags60lb,
    ...(totalCost !== undefined && { totalCost: Math.round(totalCost * 100) / 100 }),
  };
}
