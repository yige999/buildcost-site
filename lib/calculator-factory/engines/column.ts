import { CalculatorResults } from "@/types/calculator";

/**
 * Unit system types
 */
type UnitSystem = "imperial" | "metric";

/**
 * Input types for column calculator
 */
export interface ColumnInputs {
  height: number;
  diameter: number;
  quantity: number;
  waste?: number;
  pricePerBag?: number;
  unitSystem?: UnitSystem;
}

/**
 * Result types for column calculator
 */
export interface ColumnResults extends CalculatorResults {
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
 * Calculate concrete requirements for round columns
 *
 * @param inputs - Column calculation inputs
 * @returns Column calculation results
 */
export function calculateColumn(inputs: ColumnInputs): ColumnResults {
  const {
    height,
    diameter,
    quantity = 1,
    waste = 10,
    pricePerBag,
    unitSystem = "imperial",
  } = inputs;

  // Convert metric to imperial if needed
  let heightFt = height;
  let diameterFt = diameter;

  if (unitSystem === "metric") {
    heightFt = height * CONVERSIONS.metersToFeet;
    diameterFt = diameter * CONVERSIONS.metersToFeet;
  }

  // Calculate volume of one cylindrical column
  // Volume = π × r² × h
  const radius = diameterFt / 2;
  const volumePerColumn = Math.PI * radius * radius * heightFt;

  // Calculate total volume for all columns
  const baseVolume = volumePerColumn * quantity;

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
