import { CalculatorResults } from "@/types/calculator";

/**
 * Unit system types
 */
type UnitSystem = "imperial" | "metric";

/**
 * Flooring calculation constants
 */
const BOX_SIZE = 20; // Standard box size in square feet

/**
 * Convert length to feet if needed
 */
function toFeet(value: number, unitSystem: UnitSystem): number {
  return unitSystem === "metric" ? value * 3.28084 : value;
}

/**
 * Apply waste factor
 */
function applyWaste(value: number, waste: number = 10): number {
  return value * (1 + waste / 100);
}

/**
 * Round to specified decimals
 */
function round(value: number, decimals: number = 2): number {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

// ============================================================================
// HARDWOOD FLOORING CALCULATOR
// ============================================================================

export interface HardwoodInputs {
  roomLength: number;
  roomWidth: number;
  boardLength: string | number;
  boardWidth: string | number;
  waste?: number;
  pricePerSquareFoot?: number;
  unitSystem?: UnitSystem;
}

export interface HardwoodResults extends CalculatorResults {
  totalSquareFeet: number;
  squareFeetWithWaste: number;
  boardsNeeded: number;
  boxesNeeded: number;
  totalCost?: number;
}

export function calculateHardwood(inputs: HardwoodInputs): HardwoodResults {
  const {
    roomLength,
    roomWidth,
    boardLength,
    boardWidth,
    waste = 10,
    pricePerSquareFoot,
    unitSystem = "imperial",
  } = inputs;

  const lengthFt = toFeet(roomLength, unitSystem);
  const widthFt = toFeet(roomWidth, unitSystem);

  const totalSquareFeet = lengthFt * widthFt;
  const squareFeetWithWaste = applyWaste(totalSquareFeet, waste);

  // Get actual board dimensions in feet
  const boardLengthFt =
    typeof boardLength === "string" && boardLength === "random"
      ? 4 // Average 4 ft for random length
      : (typeof boardLength === "string" ? parseFloat(boardLength) : boardLength) / 12;

  const boardWidthFt =
    (typeof boardWidth === "string" ? parseFloat(boardWidth) : boardWidth) / 12;

  const boardArea = boardLengthFt * boardWidthFt;
  const boardsNeeded = Math.ceil(squareFeetWithWaste / boardArea);
  const boxesNeeded = Math.ceil(squareFeetWithWaste / BOX_SIZE);

  let totalCost: number | undefined;
  if (pricePerSquareFoot && pricePerSquareFoot > 0) {
    totalCost = round(squareFeetWithWaste * pricePerSquareFoot, 2);
  }

  return {
    totalSquareFeet: round(totalSquareFeet, 2),
    squareFeetWithWaste: round(squareFeetWithWaste, 2),
    boardsNeeded,
    boxesNeeded,
    ...(totalCost !== undefined && { totalCost }),
  };
}

// ============================================================================
// LAMINATE FLOORING CALCULATOR
// ============================================================================

export interface LaminateInputs {
  roomLength: number;
  roomWidth: number;
  plankLength: string | number;
  plankWidth: string | number;
  squareFeetPerBox: string | number;
  waste?: number;
  pricePerBox?: number;
  unitSystem?: UnitSystem;
}

export interface LaminateResults extends CalculatorResults {
  totalSquareFeet: number;
  squareFeetWithWaste: number;
  boxesNeeded: number;
  planksNeeded: number;
  totalCost?: number;
}

export function calculateLaminate(inputs: LaminateInputs): LaminateResults {
  const {
    roomLength,
    roomWidth,
    plankLength,
    plankWidth,
    squareFeetPerBox,
    waste = 10,
    pricePerBox,
    unitSystem = "imperial",
  } = inputs;

  const lengthFt = toFeet(roomLength, unitSystem);
  const widthFt = toFeet(roomWidth, unitSystem);

  const totalSquareFeet = lengthFt * widthFt;
  const squareFeetWithWaste = applyWaste(totalSquareFeet, waste);

  const boxSize =
    typeof squareFeetPerBox === "string" ? parseFloat(squareFeetPerBox) : squareFeetPerBox;
  const boxesNeeded = Math.ceil(squareFeetWithWaste / boxSize);

  // Get plank dimensions in feet
  const plankLengthFt = (typeof plankLength === "string" ? parseFloat(plankLength) : plankLength) / 12;
  const plankWidthFt = (typeof plankWidth === "string" ? parseFloat(plankWidth) : plankWidth) / 12;
  const plankArea = plankLengthFt * plankWidthFt;

  const planksNeeded = Math.ceil(squareFeetWithWaste / plankArea);

  let totalCost: number | undefined;
  if (pricePerBox && pricePerBox > 0) {
    totalCost = round(boxesNeeded * pricePerBox, 2);
  }

  return {
    totalSquareFeet: round(totalSquareFeet, 2),
    squareFeetWithWaste: round(squareFeetWithWaste, 2),
    boxesNeeded,
    planksNeeded,
    ...(totalCost !== undefined && { totalCost }),
  };
}

// ============================================================================
// TILE FLOORING CALCULATOR
// ============================================================================

export interface TileInputs {
  roomLength: number;
  roomWidth: number;
  tileSize: string | number;
  customTileSize?: number;
  groutWidth: string | number;
  waste?: number;
  pricePerTile?: number;
  unitSystem?: UnitSystem;
}

export interface TileResults extends CalculatorResults {
  totalSquareFeet: number;
  tilesNeeded: number;
  tilesWithWaste: number;
  groutNeeded: number;
  totalCost?: number;
}

export function calculateTile(inputs: TileInputs): TileResults {
  const {
    roomLength,
    roomWidth,
    tileSize,
    customTileSize,
    groutWidth,
    waste = 10,
    pricePerTile,
    unitSystem = "imperial",
  } = inputs;

  const lengthFt = toFeet(roomLength, unitSystem);
  const widthFt = toFeet(roomWidth, unitSystem);

  const totalSquareFeet = lengthFt * widthFt;

  // Determine tile size in inches
  let tileInches: number;
  if (typeof tileSize === "string" && tileSize === "custom") {
    tileInches = customTileSize || 12;
  } else {
    tileInches = typeof tileSize === "string" ? parseFloat(tileSize) : tileSize;
  }

  const groutInches = typeof groutWidth === "string" ? parseFloat(groutWidth) : groutWidth;

  // Calculate tile with grout dimensions
  const tileWithGrout = tileInches + groutInches;
  const tileAreaWithGroutSqFt = (tileWithGrout * tileWithGrout) / 144;
  const tileAreaSqFt = (tileInches * tileInches) / 144;

  // Calculate tiles needed
  const tilesNeeded = Math.ceil(totalSquareFeet / tileAreaWithGroutSqFt);
  const tilesWithWaste = Math.ceil(applyWaste(tilesNeeded, waste));

  // Calculate grout needed (approximate: 1.5-2 lbs per 10 sq ft for standard tiles)
  const groutPerSqFt = 0.18; // lbs per sq ft average
  const groutNeeded = round((totalSquareFeet * groutPerSqFt) / tileAreaSqFt * (tileInches * tileInches) / 144, 1);

  let totalCost: number | undefined;
  if (pricePerTile && pricePerTile > 0) {
    totalCost = round(tilesWithWaste * pricePerTile, 2);
  }

  return {
    totalSquareFeet: round(totalSquareFeet, 2),
    tilesNeeded,
    tilesWithWaste,
    groutNeeded,
    ...(totalCost !== undefined && { totalCost }),
  };
}

// ============================================================================
// CARPET CALCULATOR
// ============================================================================

export interface CarpetInputs {
  roomLength: number;
  roomWidth: number;
  carpetWidth: string | number;
  includePad: string;
  waste?: number;
  pricePerSquareFoot?: number;
  padPricePerSquareFoot?: number;
  unitSystem?: UnitSystem;
}

export interface CarpetResults extends CalculatorResults {
  totalSquareFeet: number;
  carpetNeeded: number;
  rollsNeeded: number;
  padNeeded: number;
  totalCost?: number;
}

export function calculateCarpet(inputs: CarpetInputs): CarpetResults {
  const {
    roomLength,
    roomWidth,
    carpetWidth,
    includePad,
    waste = 10,
    pricePerSquareFoot,
    padPricePerSquareFoot,
    unitSystem = "imperial",
  } = inputs;

  const lengthFt = toFeet(roomLength, unitSystem);
  const widthFt = toFeet(roomWidth, unitSystem);

  const totalSquareFeet = lengthFt * widthFt;
  const rollWidth = typeof carpetWidth === "string" ? parseFloat(carpetWidth) : carpetWidth;

  // Calculate rolls needed - carpet comes in fixed widths
  // Determine how many strips of carpet width needed
  const stripsNeeded = Math.ceil(widthFt / rollWidth);
  const carpetNeeded = applyWaste(stripsNeeded * rollWidth * lengthFt, waste);
  const rollsNeeded = Math.ceil(carpetNeeded / (rollWidth * lengthFt)) * stripsNeeded;

  const padNeeded = includePad === "yes" ? carpetNeeded : 0;

  let totalCost: number | undefined;
  if (pricePerSquareFoot && pricePerSquareFoot > 0) {
    const carpetCost = carpetNeeded * pricePerSquareFoot;
    const padCost = includePad === "yes" && padPricePerSquareFoot
      ? padNeeded * padPricePerSquareFoot
      : 0;
    totalCost = round(carpetCost + padCost, 2);
  }

  return {
    totalSquareFeet: round(totalSquareFeet, 2),
    carpetNeeded: round(carpetNeeded, 2),
    rollsNeeded: round(rollsNeeded, 1),
    padNeeded: round(padNeeded, 2),
    ...(totalCost !== undefined && { totalCost }),
  };
}

// ============================================================================
// VINYL FLOORING CALCULATOR
// ============================================================================

export interface VinylInputs {
  roomLength: number;
  roomWidth: number;
  vinylType: string;
  plankLength: string | number;
  plankWidth: string | number;
  sheetWidth: string | number;
  squareFeetPerBox: string | number;
  waste?: number;
  pricePerBox?: number;
  unitSystem?: UnitSystem;
}

export interface VinylResults extends CalculatorResults {
  totalSquareFeet: number;
  squareFeetWithWaste: number;
  boxesNeeded: number;
  piecesNeeded: number;
  totalCost?: number;
}

export function calculateVinyl(inputs: VinylInputs): VinylResults {
  const {
    roomLength,
    roomWidth,
    vinylType,
    plankLength,
    plankWidth,
    sheetWidth,
    squareFeetPerBox,
    waste = 10,
    pricePerBox,
    unitSystem = "imperial",
  } = inputs;

  const lengthFt = toFeet(roomLength, unitSystem);
  const widthFt = toFeet(roomWidth, unitSystem);

  const totalSquareFeet = lengthFt * widthFt;
  const squareFeetWithWaste = applyWaste(totalSquareFeet, waste);

  const boxSize =
    typeof squareFeetPerBox === "string" ? parseFloat(squareFeetPerBox) : squareFeetPerBox;
  const boxesNeeded = Math.ceil(squareFeetWithWaste / boxSize);

  let piecesNeeded = 0;

  if (vinylType === "sheet") {
    // For sheet vinyl, calculate how many sheets
    const rollWidth = typeof sheetWidth === "string" ? parseFloat(sheetWidth) : sheetWidth;
    const stripsNeeded = Math.ceil(widthFt / rollWidth);
    piecesNeeded = Math.ceil(lengthFt) * stripsNeeded;
  } else {
    // For LVP/LVT planks or tiles
    const pieceLengthFt =
      (typeof plankLength === "string" ? parseFloat(plankLength) : plankLength) / 12;
    const pieceWidthFt =
      (typeof plankWidth === "string" ? parseFloat(plankWidth) : plankWidth) / 12;
    const pieceArea = pieceLengthFt * pieceWidthFt;
    piecesNeeded = Math.ceil(squareFeetWithWaste / pieceArea);
  }

  let totalCost: number | undefined;
  if (pricePerBox && pricePerBox > 0) {
    totalCost = round(boxesNeeded * pricePerBox, 2);
  }

  return {
    totalSquareFeet: round(totalSquareFeet, 2),
    squareFeetWithWaste: round(squareFeetWithWaste, 2),
    boxesNeeded,
    piecesNeeded,
    ...(totalCost !== undefined && { totalCost }),
  };
}

// ============================================================================
// BASEBOARD & TRIM CALCULATOR
// ============================================================================

export interface BaseboardInputs {
  roomLength: number;
  roomWidth: number;
  numberOfCorners: string;
  customCorners?: number;
  pieceLength: string | number;
  includeDoorCasing: number;
  doorWidth: number;
  waste?: number;
  pricePerLinearFoot?: number;
  unitSystem?: UnitSystem;
}

export interface BaseboardResults extends CalculatorResults {
  perimeter: number;
  linearFeetNeeded: number;
  piecesNeeded: number;
  cornersNeeded: number;
  totalCost?: number;
}

export function calculateBaseboard(inputs: BaseboardInputs): BaseboardResults {
  const {
    roomLength,
    roomWidth,
    numberOfCorners,
    customCorners,
    pieceLength,
    includeDoorCasing,
    doorWidth,
    waste = 5,
    pricePerLinearFoot,
    unitSystem = "imperial",
  } = inputs;

  const lengthFt = toFeet(roomLength, unitSystem);
  const widthFt = toFeet(roomWidth, unitSystem);

  // Calculate perimeter
  const perimeter = 2 * (lengthFt + widthFt);

  // Determine number of corners
  let numCorners: number;
  if (numberOfCorners === "custom") {
    numCorners = customCorners || 4;
  } else {
    numCorners = parseInt(numberOfCorners);
  }

  // Subtract door openings from total length
  const doorDeduction = includeDoorCasing * (doorWidth / 12);
  const netPerimeter = perimeter - doorDeduction;

  // Apply waste factor
  const linearFeetNeeded = applyWaste(netPerimeter, waste);

  // Calculate pieces needed
  const pieceLengthFt =
    (typeof pieceLength === "string" ? parseFloat(pieceLength) : pieceLength) / 12;
  const piecesNeeded = Math.ceil(linearFeetNeeded / pieceLengthFt);

  // Corner blocks needed (same as corners)
  const cornersNeeded = numCorners;

  let totalCost: number | undefined;
  if (pricePerLinearFoot && pricePerLinearFoot > 0) {
    totalCost = round(linearFeetNeeded * pricePerLinearFoot, 2);
  }

  return {
    perimeter: round(perimeter, 2),
    linearFeetNeeded: round(linearFeetNeeded, 2),
    piecesNeeded,
    cornersNeeded,
    ...(totalCost !== undefined && { totalCost }),
  };
}

// ============================================================================
// FLOOR AREA CALCULATOR (MULTIPLE ROOMS)
// ============================================================================

export interface FloorAreaInputs {
  room1Length: number;
  room1Width: number;
  room2Length?: number;
  room2Width?: number;
  room3Length?: number;
  room3Width?: number;
  room4Length?: number;
  room4Width?: number;
  room5Length?: number;
  room5Width?: number;
  room6Length?: number;
  room6Width?: number;
  waste?: number;
  unitSystem?: UnitSystem;
}

export interface FloorAreaResults extends CalculatorResults {
  room1Area: number;
  room2Area?: number;
  room3Area?: number;
  room4Area?: number;
  room5Area?: number;
  room6Area?: number;
  totalArea: number;
  totalWithWaste: number;
}

export function calculateFloorArea(inputs: FloorAreaInputs): FloorAreaResults {
  const {
    room1Length,
    room1Width,
    room2Length,
    room2Width,
    room3Length,
    room3Width,
    room4Length,
    room4Width,
    room5Length,
    room5Width,
    room6Length,
    room6Width,
    waste = 10,
    unitSystem = "imperial",
  } = inputs;

  const calcArea = (length: number | undefined, width: number | undefined) => {
    if (!length || !width) return undefined;
    const lengthFt = toFeet(length, unitSystem);
    const widthFt = toFeet(width, unitSystem);
    return round(lengthFt * widthFt, 2);
  };

  const room1Area = calcArea(room1Length, room1Width) || 0;
  const room2Area = calcArea(room2Length, room2Width);
  const room3Area = calcArea(room3Length, room3Width);
  const room4Area = calcArea(room4Length, room4Width);
  const room5Area = calcArea(room5Length, room5Width);
  const room6Area = calcArea(room6Length, room6Width);

  const totalArea =
    room1Area +
    (room2Area || 0) +
    (room3Area || 0) +
    (room4Area || 0) +
    (room5Area || 0) +
    (room6Area || 0);

  const totalWithWaste = applyWaste(totalArea, waste);

  return {
    room1Area,
    room2Area,
    room3Area,
    room4Area,
    room5Area,
    room6Area,
    totalArea: round(totalArea, 2),
    totalWithWaste: round(totalWithWaste, 2),
  };
}
