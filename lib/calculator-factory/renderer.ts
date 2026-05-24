import { CalculatorResults, CalculatorState } from "@/types/calculator";
import {
  calculateSlab,
  calculateColumn,
  calculateFooting,
  calculateWall,
  calculateSteps,
  calculateCurbGutter,
  calculateCircle,
  calculateBlock,
  calculatePostHole,
  calculateSquareColumn,
} from "./engines/concrete";
import { calculateShingle } from "./engines/roofing";
import {
  calculateHardwood,
  calculateLaminate,
  calculateTile,
  calculateCarpet,
  calculateVinyl,
  calculateBaseboard,
  calculateFloorArea,
} from "./engines/flooring";

/**
 * Calculation engine registry
 * Maps engine names to their calculation functions
 */
const engines: Record<string, (inputs: any) => CalculatorResults> = {
  // Concrete engines
  slab: calculateSlab,
  column: calculateColumn,
  "square-column": calculateSquareColumn,
  footing: calculateFooting,
  wall: calculateWall,
  steps: calculateSteps,
  "curb-gutter": calculateCurbGutter,
  circle: calculateCircle,
  block: calculateBlock,
  "post-hole": calculatePostHole,
  // Roofing engines
  shingle: calculateShingle,
  // Flooring engines
  hardwood: calculateHardwood,
  laminate: calculateLaminate,
  tile: calculateTile,
  carpet: calculateCarpet,
  vinyl: calculateVinyl,
  baseboard: calculateBaseboard,
  "floor-area": calculateFloorArea,
};

/**
 * Run a calculation engine
 *
 * @param engineName - Name of the engine to run
 * @param inputs - Input values for the calculation
 * @returns Calculation results or throws error if engine not found
 */
export function runEngine(
  engineName: string,
  inputs: CalculatorState
): CalculatorResults {
  const engine = engines[engineName];

  if (!engine) {
    throw new Error(`Calculation engine "${engineName}" not found`);
  }

  try {
    return engine(inputs);
  } catch (error) {
    console.error(`Error running engine "${engineName}":`, error);
    throw error;
  }
}

/**
 * Check if an engine exists
 */
export function engineExists(engineName: string): boolean {
  return engineName in engines;
}

/**
 * Get all available engine names
 */
export function getAvailableEngines(): string[] {
  return Object.keys(engines);
}

/**
 * Register a new calculation engine
 * Useful for dynamically adding engines in development
 */
export function registerEngine(
  name: string,
  engine: (inputs: any) => CalculatorResults
): void {
  engines[name] = engine;
}
