import { CalculatorResults } from "@/types/calculator";

/**
 * Unit system types
 */
type UnitSystem = "imperial" | "metric";

/**
 * Shared concrete calculation constants
 */
const BAG_YIELDS = {
  "80lb": 0.6, // 80lb bag yields ~0.6 cubic feet
  "60lb": 0.45, // 60lb bag yields ~0.45 cubic feet
};

const CONVERSIONS = {
  feetToMeters: 0.3048,
  metersToFeet: 3.28084,
  cubicFeetToCubicYards: 1 / 27, // 27 cubic feet = 1 cubic yard
};

/**
 * Convert length to feet if needed
 */
function toFeet(value: number, unitSystem: UnitSystem): number {
  return unitSystem === "metric" ? value * CONVERSIONS.metersToFeet : value;
}

/**
 * Calculate bags and cost from volume
 */
function calculateBagsAndCost(
  totalVolume: number,
  pricePerBag?: number
): { bags80lb: number; bags60lb: number; totalCost?: number } {
  const bags80lb = Math.ceil(totalVolume / BAG_YIELDS["80lb"]);
  const bags60lb = Math.ceil(totalVolume / BAG_YIELDS["60lb"]);

  let totalCost: number | undefined;
  if (pricePerBag && pricePerBag > 0) {
    totalCost = Math.round(bags80lb * pricePerBag * 100) / 100;
  }

  return { bags80lb, bags60lb, totalCost };
}

/**
 * Apply waste factor to volume
 */
function applyWaste(volume: number, waste: number = 10): number {
  return volume * (1 + waste / 100);
}

/**
 * Round to specified decimals
 */
function round(value: number, decimals: number = 2): number {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

// ============================================================================
// SLAB CALCULATOR
// ============================================================================

export interface SlabInputs {
  length: number;
  width: number;
  depth: number;
  waste?: number;
  pricePerBag?: number;
  unitSystem?: UnitSystem;
}

export interface SlabResults extends CalculatorResults {
  cubicYards: number;
  cubicFeet: number;
  bags80lb: number;
  bags60lb: number;
  totalCost?: number;
}

export function calculateSlab(inputs: SlabInputs): SlabResults {
  const { length, width, depth, waste = 10, pricePerBag, unitSystem = "imperial" } = inputs;

  const lengthFt = toFeet(length, unitSystem);
  const widthFt = toFeet(width, unitSystem);
  const depthFt = toFeet(depth, unitSystem);

  const baseVolume = lengthFt * widthFt * depthFt;
  const totalVolume = applyWaste(baseVolume, waste);
  const cubicYards = totalVolume * CONVERSIONS.cubicFeetToCubicYards;

  const { bags80lb, bags60lb, totalCost } = calculateBagsAndCost(totalVolume, pricePerBag);

  return {
    cubicYards: round(cubicYards, 2),
    cubicFeet: round(totalVolume, 2),
    bags80lb,
    bags60lb,
    ...(totalCost !== undefined && { totalCost }),
  };
}

// ============================================================================
// COLUMN CALCULATOR (Round)
// ============================================================================

export interface ColumnInputs {
  height: number;
  diameter: number;
  quantity?: number;
  waste?: number;
  pricePerBag?: number;
  unitSystem?: UnitSystem;
}

export interface ColumnResults extends CalculatorResults {
  cubicYards: number;
  cubicFeet: number;
  bags80lb: number;
  bags60lb: number;
  totalCost?: number;
}

export function calculateColumn(inputs: ColumnInputs): ColumnResults {
  const { height, diameter, quantity = 1, waste = 10, pricePerBag, unitSystem = "imperial" } = inputs;

  const heightFt = toFeet(height, unitSystem);
  const diameterFt = toFeet(diameter, unitSystem);

  const radius = diameterFt / 2;
  const volumePerColumn = Math.PI * radius * radius * heightFt;
  const baseVolume = volumePerColumn * quantity;
  const totalVolume = applyWaste(baseVolume, waste);
  const cubicYards = totalVolume * CONVERSIONS.cubicFeetToCubicYards;

  const { bags80lb, bags60lb, totalCost } = calculateBagsAndCost(totalVolume, pricePerBag);

  return {
    cubicYards: round(cubicYards, 2),
    cubicFeet: round(totalVolume, 2),
    bags80lb,
    bags60lb,
    ...(totalCost !== undefined && { totalCost }),
  };
}

// ============================================================================
// FOOTING CALCULATOR (Rectangular)
// ============================================================================

export interface FootingInputs {
  length: number;
  width: number;
  depth: number;
  quantity?: number;
  waste?: number;
  pricePerBag?: number;
  unitSystem?: UnitSystem;
}

export interface FootingResults extends CalculatorResults {
  cubicYards: number;
  cubicFeet: number;
  bags80lb: number;
  bags60lb: number;
  totalCost?: number;
}

export function calculateFooting(inputs: FootingInputs): FootingResults {
  const { length, width, depth, quantity = 1, waste = 10, pricePerBag, unitSystem = "imperial" } = inputs;

  const lengthFt = toFeet(length, unitSystem);
  const widthFt = toFeet(width, unitSystem);
  const depthFt = toFeet(depth, unitSystem);

  const volumePerFooting = lengthFt * widthFt * depthFt;
  const baseVolume = volumePerFooting * quantity;
  const totalVolume = applyWaste(baseVolume, waste);
  const cubicYards = totalVolume * CONVERSIONS.cubicFeetToCubicYards;

  const { bags80lb, bags60lb, totalCost } = calculateBagsAndCost(totalVolume, pricePerBag);

  return {
    cubicYards: round(cubicYards, 2),
    cubicFeet: round(totalVolume, 2),
    bags80lb,
    bags60lb,
    ...(totalCost !== undefined && { totalCost }),
  };
}

// ============================================================================
// WALL CALCULATOR (Poured)
// ============================================================================

export interface WallInputs {
  length: number;
  height: number;
  thickness: number;
  waste?: number;
  pricePerBag?: number;
  unitSystem?: UnitSystem;
}

export interface WallResults extends CalculatorResults {
  cubicYards: number;
  cubicFeet: number;
  bags80lb: number;
  bags60lb: number;
  totalCost?: number;
}

export function calculateWall(inputs: WallInputs): WallResults {
  const { length, height, thickness, waste = 10, pricePerBag, unitSystem = "imperial" } = inputs;

  const lengthFt = toFeet(length, unitSystem);
  const heightFt = toFeet(height, unitSystem);
  const thicknessFt = toFeet(thickness, unitSystem);

  const baseVolume = lengthFt * heightFt * thicknessFt;
  const totalVolume = applyWaste(baseVolume, waste);
  const cubicYards = totalVolume * CONVERSIONS.cubicFeetToCubicYards;

  const { bags80lb, bags60lb, totalCost } = calculateBagsAndCost(totalVolume, pricePerBag);

  return {
    cubicYards: round(cubicYards, 2),
    cubicFeet: round(totalVolume, 2),
    bags80lb,
    bags60lb,
    ...(totalCost !== undefined && { totalCost }),
  };
}

// ============================================================================
// STEPS CALCULATOR
// ============================================================================

export interface StepsInputs {
  run: number; // Horizontal depth of each step
  rise: number; // Vertical height of each step
  width: number; // Width of the stairs
  numberOfSteps: number; // Number of steps
  platformDepth?: number; // Optional landing platform depth
  waste?: number;
  pricePerBag?: number;
  unitSystem?: UnitSystem;
}

export interface StepsResults extends CalculatorResults {
  cubicYards: number;
  cubicFeet: number;
  bags80lb: number;
  bags60lb: number;
  totalCost?: number;
}

export function calculateSteps(inputs: StepsInputs): StepsResults {
  const {
    run,
    rise,
    width,
    numberOfSteps,
    platformDepth = 0,
    waste = 10,
    pricePerBag,
    unitSystem = "imperial",
  } = inputs;

  const runFt = toFeet(run, unitSystem);
  const riseFt = toFeet(rise, unitSystem);
  const widthFt = toFeet(width, unitSystem);
  const platformFt = toFeet(platformDepth, unitSystem);

  // Volume of each step (triangular prism)
  const volumePerStep = (runFt * riseFt * widthFt) / 2;
  const stepsVolume = volumePerStep * numberOfSteps;

  // Volume of platform (rectangular prism)
  const platformVolume = platformFt * riseFt * numberOfSteps * widthFt;

  const baseVolume = stepsVolume + platformVolume;
  const totalVolume = applyWaste(baseVolume, waste);
  const cubicYards = totalVolume * CONVERSIONS.cubicFeetToCubicYards;

  const { bags80lb, bags60lb, totalCost } = calculateBagsAndCost(totalVolume, pricePerBag);

  return {
    cubicYards: round(cubicYards, 2),
    cubicFeet: round(totalVolume, 2),
    bags80lb,
    bags60lb,
    ...(totalCost !== undefined && { totalCost }),
  };
}

// ============================================================================
// CURB & GUTTER CALCULATOR
// ============================================================================

export interface CurbGutterInputs {
  length: number; // Total linear length
  curbHeight: number; // Height of the curb (vertical face)
  curbWidth: number; // Width of the curb (horizontal thickness)
  gutterWidth: number; // Width of the gutter
  gutterThickness: number; // Thickness of the gutter slab
  waste?: number;
  pricePerBag?: number;
  unitSystem?: UnitSystem;
}

export interface CurbGutterResults extends CalculatorResults {
  cubicYards: number;
  cubicFeet: number;
  curbVolume: number;
  gutterVolume: number;
  bags80lb: number;
  bags60lb: number;
  totalCost?: number;
}

export function calculateCurbGutter(inputs: CurbGutterInputs): CurbGutterResults {
  const {
    length,
    curbHeight,
    curbWidth,
    gutterWidth,
    gutterThickness,
    waste = 10,
    pricePerBag,
    unitSystem = "imperial",
  } = inputs;

  const lengthFt = toFeet(length, unitSystem);
  const curbHeightFt = toFeet(curbHeight, unitSystem);
  const curbWidthFt = toFeet(curbWidth, unitSystem);
  const gutterWidthFt = toFeet(gutterWidth, unitSystem);
  const gutterThicknessFt = toFeet(gutterThickness, unitSystem);

  // Curb cross-section area (rectangle)
  const curbArea = curbHeightFt * curbWidthFt;
  const curbVolume = curbArea * lengthFt;

  // Gutter cross-section area (rectangle)
  const gutterArea = gutterWidthFt * gutterThicknessFt;
  const gutterVolume = gutterArea * lengthFt;

  const baseVolume = curbVolume + gutterVolume;
  const totalVolume = applyWaste(baseVolume, waste);
  const cubicYards = totalVolume * CONVERSIONS.cubicFeetToCubicYards;

  const { bags80lb, bags60lb, totalCost } = calculateBagsAndCost(totalVolume, pricePerBag);

  return {
    cubicYards: round(cubicYards, 2),
    cubicFeet: round(totalVolume, 2),
    curbVolume: round(curbVolume, 2),
    gutterVolume: round(gutterVolume, 2),
    bags80lb,
    bags60lb,
    ...(totalCost !== undefined && { totalCost }),
  };
}

// ============================================================================
// CIRCLE / CYLINDER CALCULATOR
// ============================================================================

export interface CircleInputs {
  diameter: number;
  depth?: number; // For slabs/pads
  height?: number; // For cylinders (taller)
  waste?: number;
  pricePerBag?: number;
  unitSystem?: UnitSystem;
}

export interface CircleResults extends CalculatorResults {
  cubicYards: number;
  cubicFeet: number;
  area: number; // Surface area in sq ft
  bags80lb: number;
  bags60lb: number;
  totalCost?: number;
}

export function calculateCircle(inputs: CircleInputs): CircleResults {
  const {
    diameter,
    depth = 0,
    height,
    waste = 10,
    pricePerBag,
    unitSystem = "imperial",
  } = inputs;

  const diameterFt = toFeet(diameter, unitSystem);
  const radius = diameterFt / 2;
  const verticalFt = toFeet(height || depth, unitSystem);

  // Calculate volume
  const baseVolume = Math.PI * radius * radius * verticalFt;
  const totalVolume = applyWaste(baseVolume, waste);
  const cubicYards = totalVolume * CONVERSIONS.cubicFeetToCubicYards;

  // Calculate surface area
  const area = Math.PI * radius * radius;

  const { bags80lb, bags60lb, totalCost } = calculateBagsAndCost(totalVolume, pricePerBag);

  return {
    cubicYards: round(cubicYards, 2),
    cubicFeet: round(totalVolume, 2),
    area: round(area, 2),
    bags80lb,
    bags60lb,
    ...(totalCost !== undefined && { totalCost }),
  };
}

// ============================================================================
// CONCRETE BLOCK / CMU CALCULATOR
// ============================================================================

export interface BlockInputs {
  wallLength: number;
  wallHeight: number;
  blockLength?: number; // Default 16 inches
  blockHeight?: number; // Default 8 inches
  waste?: number;
  pricePerBlock?: number;
  unitSystem?: UnitSystem;
}

export interface BlockResults extends CalculatorResults {
  blocksNeeded: number;
  squareFeet: number;
  totalCost?: number;
}

export function calculateBlock(inputs: BlockInputs): BlockResults {
  const {
    wallLength,
    wallHeight,
    blockLength = 16,
    blockHeight = 8,
    waste = 10,
    pricePerBlock,
    unitSystem = "imperial",
  } = inputs;

  let lengthInches = wallLength;
  let heightInches = wallHeight;
  let blockLenInches = blockLength;
  let blockHeightInches = blockHeight;

  if (unitSystem === "metric") {
    lengthInches = wallLength * 39.3701; // meters to inches
    heightInches = wallHeight * 39.3701;
    blockLenInches = blockLength * 39.3701;
    blockHeightInches = blockHeight * 39.3701;
  }

  // Calculate wall area in square feet
  const wallAreaSqFt = (lengthInches * heightInches) / 144;

  // Calculate blocks per row (including mortar - typically 3/8" joint)
  const blocksPerRow = Math.ceil(lengthInches / (blockLenInches + 0.375));
  const numberOfRows = Math.ceil(heightInches / (blockHeightInches + 0.375));

  const baseBlocks = blocksPerRow * numberOfRows;
  const totalBlocks = Math.ceil(applyWaste(baseBlocks, waste));

  let totalCost: number | undefined;
  if (pricePerBlock && pricePerBlock > 0) {
    totalCost = round(totalBlocks * pricePerBlock, 2);
  }

  return {
    blocksNeeded: totalBlocks,
    squareFeet: round(wallAreaSqFt, 2),
    ...(totalCost !== undefined && { totalCost }),
  };
}

// ============================================================================
// POST HOLE CALCULATOR
// ============================================================================

export interface PostHoleInputs {
  holeDepth: number;
  holeDiameter: number;
  numberOfPosts?: number;
  waste?: number;
  pricePerBag?: number;
  unitSystem?: UnitSystem;
}

export interface PostHoleResults extends CalculatorResults {
  cubicYards: number;
  cubicFeet: number;
  volumePerHole: number;
  bags80lb: number;
  bags60lb: number;
  totalCost?: number;
}

export function calculatePostHole(inputs: PostHoleInputs): PostHoleResults {
  const {
    holeDepth,
    holeDiameter,
    numberOfPosts = 1,
    waste = 10,
    pricePerBag,
    unitSystem = "imperial",
  } = inputs;

  const depthFt = toFeet(holeDepth, unitSystem);
  const diameterFt = toFeet(holeDiameter, unitSystem);

  const radius = diameterFt / 2;
  const volumePerHole = Math.PI * radius * radius * depthFt;
  const baseVolume = volumePerHole * numberOfPosts;
  const totalVolume = applyWaste(baseVolume, waste);
  const cubicYards = totalVolume * CONVERSIONS.cubicFeetToCubicYards;

  const { bags80lb, bags60lb, totalCost } = calculateBagsAndCost(totalVolume, pricePerBag);

  return {
    cubicYards: round(cubicYards, 2),
    cubicFeet: round(totalVolume, 2),
    volumePerHole: round(volumePerHole, 2),
    bags80lb,
    bags60lb,
    ...(totalCost !== undefined && { totalCost }),
  };
}

// ============================================================================
// SQUARE COLUMN CALCULATOR
// ============================================================================

export interface SquareColumnInputs {
  height: number;
  sideLength: number;
  quantity?: number;
  waste?: number;
  pricePerBag?: number;
  unitSystem?: UnitSystem;
}

export interface SquareColumnResults extends CalculatorResults {
  cubicYards: number;
  cubicFeet: number;
  bags80lb: number;
  bags60lb: number;
  totalCost?: number;
}

export function calculateSquareColumn(inputs: SquareColumnInputs): SquareColumnResults {
  const {
    height,
    sideLength,
    quantity = 1,
    waste = 10,
    pricePerBag,
    unitSystem = "imperial",
  } = inputs;

  const heightFt = toFeet(height, unitSystem);
  const sideFt = toFeet(sideLength, unitSystem);

  const volumePerColumn = sideFt * sideFt * heightFt;
  const baseVolume = volumePerColumn * quantity;
  const totalVolume = applyWaste(baseVolume, waste);
  const cubicYards = totalVolume * CONVERSIONS.cubicFeetToCubicYards;

  const { bags80lb, bags60lb, totalCost } = calculateBagsAndCost(totalVolume, pricePerBag);

  return {
    cubicYards: round(cubicYards, 2),
    cubicFeet: round(totalVolume, 2),
    bags80lb,
    bags60lb,
    ...(totalCost !== undefined && { totalCost }),
  };
}
