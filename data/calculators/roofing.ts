import { CalculatorConfig } from "@/types/calculator";

/**
 * Roofing calculator configurations
 * Add new roofing calculators here to automatically appear on the roofing category page
 */
export const roofingCalculators: CalculatorConfig[] = [
  // ============================================================================
  // ROOF SHINGLE CALCULATOR
  // ============================================================================
  {
    id: "shingle",
    name: "Roof Shingle Calculator",
    slug: "shingle",
    description:
      "Calculate the number of shingle bundles needed for your roofing project. Get estimates for total roof area, bundles required, and total cost.",
    category: "roofing",
    icon: "Home",
    seoTitle:
      "Roof Shingle Calculator - Estimate Bundles, Squares & Cost",
    seoDescription:
      "Calculate how many shingle bundles you need for your roof. Enter roof dimensions and pitch for instant estimates in squares, bundles, and cost.",
    inputs: [
      {
        name: "houseLength",
        label: "House Length",
        type: "number",
        unit: "length",
        required: true,
        min: 1,
        step: 1,
        placeholder: "Enter length (feet)",
      },
      {
        name: "houseWidth",
        label: "House Width",
        type: "number",
        unit: "length",
        required: true,
        min: 1,
        step: 1,
        placeholder: "Enter width (feet)",
      },
      {
        name: "roofPitch",
        label: "Roof Pitch",
        type: "select",
        required: true,
        default: "4",
        options: [
          { label: "Flat/No Pitch (0:12)", value: "0" },
          { label: "2:12 (Low slope)", value: "2" },
          { label: "3:12", value: "3" },
          { label: "4:12 (Standard)", value: "4" },
          { label: "5:12", value: "5" },
          { label: "6:12", value: "6" },
          { label: "7:12", value: "7" },
          { label: "8:12", value: "8" },
          { label: "9:12", value: "9" },
          { label: "10:12", value: "10" },
          { label: "12:12 (45°)", value: "12" },
          { label: "15:12 (Steep)", value: "15" },
          { label: "18:12 (Very steep)", value: "18" },
        ],
      },
      {
        name: "overhang",
        label: "Overhang (inches)",
        type: "number",
        required: false,
        default: 12,
        min: 0,
        max: 36,
        step: 1,
        placeholder: "Typically 6-24 inches",
      },
      {
        name: "waste",
        label: "Waste Factor",
        type: "percent",
        required: false,
        default: 10,
        min: 5,
        max: 20,
        step: 1,
      },
      {
        name: "pricePerBundle",
        label: "Price Per Bundle ($)",
        type: "number",
        unit: "currency",
        required: false,
        min: 0,
        step: 0.01,
        placeholder: "Optional: for cost calculation",
      },
    ],
    outputs: [
      {
        name: "totalRoofArea",
        label: "Total Roof Area",
        unit: "sq ft",
        primary: true,
        decimals: 0,
      },
      {
        name: "roofSquares",
        label: "Roofing Squares",
        unit: "squares",
        decimals: 1,
      },
      {
        name: "bundlesNeeded",
        label: "Bundles Needed (3-tab)",
        decimals: 0,
      },
      {
        name: "bundlesNeededArchitectural",
        label: "Bundles Needed (Architectural)",
        decimals: 0,
      },
      {
        name: "totalCost",
        label: "Estimated Material Cost",
        conditional: "pricePerBundle",
        decimals: 2,
      },
    ],
    engine: "shingle",
  },

  // ============================================================================
  // METAL ROOFING CALCULATOR
  // ============================================================================
  {
    id: "metal-roofing",
    name: "Metal Roofing Calculator",
    slug: "metal-roofing",
    description:
      "Calculate metal roofing panels, trim pieces, and screws needed. Works for corrugated, standing seam, and R-panel roofing.",
    category: "roofing",
    icon: "Layers",
    seoTitle:
      "Metal Roofing Calculator - Estimate Panels & Screws",
    seoDescription:
      "Calculate metal roofing panels, trim pieces, and screws needed. Enter roof dimensions for a complete material list.",
    inputs: [
      {
        name: "roofLength",
        label: "Roof Length (Rake)",
        type: "number",
        unit: "length",
        required: true,
        min: 1,
        step: 1,
        placeholder: "Enter roof length (feet)",
      },
      {
        name: "roofWidth",
        label: "Roof Width (Eave)",
        type: "number",
        unit: "length",
        required: true,
        min: 1,
        step: 1,
        placeholder: "Enter roof width (feet)",
      },
      {
        name: "roofPitch",
        label: "Roof Pitch",
        type: "select",
        required: true,
        default: "4",
        options: [
          { label: "Flat/No Pitch (0:12)", value: "0" },
          { label: "2:12 (Low slope)", value: "2" },
          { label: "3:12", value: "3" },
          { label: "4:12 (Standard)", value: "4" },
          { label: "6:12", value: "6" },
          { label: "8:12", value: "8" },
          { label: "12:12 (45°)", value: "12" },
        ],
      },
      {
        name: "panelWidth",
        label: "Panel Width",
        type: "select",
        required: true,
        default: "36",
        options: [
          { label: '24" (Corrugated)', value: "24" },
          { label: '36" (R-Panel/Ag)', value: "36" },
          { label: '12" (Standing Seam)', value: "12" },
          { label: '16" (Standing Seam)', value: "16" },
          { label: '18" (Standing Seam)', value: "18" },
        ],
      },
      {
        name: "includeRidge",
        label: "Include Ridge Cap",
        type: "checkbox",
        required: false,
        default: true,
      },
      {
        name: "includeEave",
        label: "Include Eave Trim",
        type: "checkbox",
        required: false,
        default: true,
      },
      {
        name: "waste",
        label: "Waste Factor",
        type: "percent",
        required: false,
        default: 10,
        min: 5,
        max: 20,
        step: 1,
      },
      {
        name: "pricePerSquare",
        label: "Price Per Square ($)",
        type: "number",
        unit: "currency",
        required: false,
        min: 0,
        step: 1,
        placeholder: "Optional: for cost calculation",
      },
    ],
    outputs: [
      {
        name: "roofArea",
        label: "Total Roof Area",
        unit: "sq ft",
        primary: true,
        decimals: 0,
      },
      {
        name: "panelsNeeded",
        label: "Panels Needed",
        decimals: 0,
      },
      {
        name: "ridgeLength",
        label: "Ridge Cap Length",
        unit: "linear ft",
        decimals: 0,
      },
      {
        name: "eaveTrimLength",
        label: "Eave Trim Length",
        unit: "linear ft",
        decimals: 0,
      },
      {
        name: "screwsNeeded",
        label: "Screws Needed (approx)",
        decimals: 0,
      },
      {
        name: "totalCost",
        label: "Estimated Material Cost",
        conditional: "pricePerSquare",
        decimals: 2,
      },
    ],
    engine: "metal-roofing",
  },

  // ============================================================================
  // FLAT ROOF CALCULATOR
  // ============================================================================
  {
    id: "flat-roof",
    name: "Flat Roof Calculator",
    slug: "flat-roof",
    description:
      "Calculate materials for flat or low-slope roofing. Includes membrane, adhesive, and insulation estimates.",
    category: "roofing",
    icon: "Square",
    seoTitle:
      "Flat Roof Calculator - Estimate Membrane & Materials",
    seoDescription:
      "Calculate flat roofing materials including TPO, EPDM, and modified bitumen. Get complete material estimates for flat roofs.",
    inputs: [
      {
        name: "roofLength",
        label: "Roof Length",
        type: "number",
        unit: "length",
        required: true,
        min: 1,
        step: 1,
        placeholder: "Enter length (feet)",
      },
      {
        name: "roofWidth",
        label: "Roof Width",
        type: "number",
        unit: "length",
        required: true,
        min: 1,
        step: 1,
        placeholder: "Enter width (feet)",
      },
      {
        name: "materialType",
        label: "Roofing Material",
        type: "select",
        required: true,
        default: "tpo",
        options: [
          { label: "TPO Membrane (10 ft roll)", value: "tpo" },
          { label: "EPDM Rubber (10 ft roll)", value: "epdm" },
          { label: "Modified Bitumen (3 ft roll)", value: "modified" },
          { label: "Built-up Tar & Gravel", value: "builtup" },
        ],
      },
      {
        name: "includeInsulation",
        label: "Include Insulation",
        type: "checkbox",
        required: false,
        default: true,
      },
      {
        name: "includeBaseSheet",
        label: "Include Base Sheet",
        type: "checkbox",
        required: false,
        default: true,
      },
      {
        name: "waste",
        label: "Waste Factor",
        type: "percent",
        required: false,
        default: 15,
        min: 10,
        max: 25,
        step: 1,
      },
      {
        name: "pricePerSquare",
        label: "Price Per Square ($)",
        type: "number",
        unit: "currency",
        required: false,
        min: 0,
        step: 1,
        placeholder: "Optional: for cost calculation",
      },
    ],
    outputs: [
      {
        name: "roofArea",
        label: "Total Roof Area",
        unit: "sq ft",
        primary: true,
        decimals: 0,
      },
      {
        name: "membrane Rolls",
        label: "Membrane Rolls Needed",
        decimals: 1,
      },
      {
        name: "adhesiveNeeded",
        label: "Adhesive/Gallons Needed",
        decimals: 0,
      },
      {
        name: "insulationBoards",
        label: "Insulation Boards (4x8)",
        decimals: 0,
      },
      {
        name: "totalCost",
        label: "Estimated Material Cost",
        conditional: "pricePerSquare",
        decimals: 2,
      },
    ],
    engine: "flat-roof",
  },

  // ============================================================================
  // ROOFING UNDERLAYMENT CALCULATOR
  // ============================================================================
  {
    id: "underlayment",
    name: "Roofing Underlayment Calculator",
    slug: "underlayment",
    description:
      "Calculate roofing felt or synthetic underlayment needed for your roof. Includes 15# and 30# felt and synthetic options.",
    category: "roofing",
    icon: "FileStack",
    seoTitle:
      "Roofing Underlayment Calculator - Estimate Felt & Synthetic",
    seoDescription:
      "Calculate roofing underlayment needed for your project. Compare 15# felt, 30# felt, and synthetic options.",
    inputs: [
      {
        name: "roofLength",
        label: "Roof Length",
        type: "number",
        unit: "length",
        required: true,
        min: 1,
        step: 1,
        placeholder: "Enter length (feet)",
      },
      {
        name: "roofWidth",
        label: "Roof Width",
        type: "number",
        unit: "length",
        required: true,
        min: 1,
        step: 1,
        placeholder: "Enter width (feet)",
      },
      {
        name: "roofPitch",
        label: "Roof Pitch",
        type: "select",
        required: true,
        default: "4",
        options: [
          { label: "Flat/No Pitch (0:12)", value: "0" },
          { label: "2:12 (Low slope)", value: "2" },
          { label: "3:12", value: "3" },
          { label: "4:12 (Standard)", value: "4" },
          { label: "6:12", value: "6" },
          { label: "8:12", value: "8" },
          { label: "12:12 (45°)", value: "12" },
        ],
      },
      {
        name: "underlaymentType",
        label: "Underlayment Type",
        type: "select",
        required: true,
        default: "synthetic",
        options: [
          { label: '15# Felt (#15)', value: "15felt" },
          { label: '30# Felt (#30)', value: "30felt" },
          { label: 'Synthetic (48" wide)', value: "synthetic" },
          { label: 'Ice & Water Shield (36")', value: "icewater" },
        ],
      },
      {
        name: "waste",
        label: "Waste Factor",
        type: "percent",
        required: false,
        default: 10,
        min: 5,
        max: 20,
        step: 1,
      },
      {
        name: "pricePerRoll",
        label: "Price Per Roll ($)",
        type: "number",
        unit: "currency",
        required: false,
        min: 0,
        step: 1,
        placeholder: "Optional: for cost calculation",
      },
    ],
    outputs: [
      {
        name: "roofArea",
        label: "Total Roof Area",
        unit: "sq ft",
        primary: true,
        decimals: 0,
      },
      {
        name: "rollsNeeded",
        label: "Rolls Needed",
        decimals: 0,
      },
      {
        name: "totalLinearFeet",
        label: "Total Linear Feet",
        decimals: 0,
      },
      {
        name: "totalCost",
        label: "Estimated Material Cost",
        conditional: "pricePerRoll",
        decimals: 2,
      },
    ],
    engine: "underlayment",
  },

  // ============================================================================
  // ROLL ROOFING CALCULATOR
  // ============================================================================
  {
    id: "roll-roofing",
    name: "Roll Roofing Calculator",
    slug: "roll-roofing",
    description:
      "Calculate mineral roll roofing needed for low-slope roofs. Includes coverage and nail estimates.",
    category: "roofing",
    icon: "Scroll",
    seoTitle:
      "Roll Roofing Calculator - Estimate Mineral Rolls Needed",
    seoDescription:
      "Calculate mineral roll roofing needed for sheds, porches, and low-slope roofs. Enter dimensions for material estimates.",
    inputs: [
      {
        name: "roofLength",
        label: "Roof Length",
        type: "number",
        unit: "length",
        required: true,
        min: 1,
        step: 1,
        placeholder: "Enter length (feet)",
      },
      {
        name: "roofWidth",
        label: "Roof Width",
        type: "number",
        unit: "length",
        required: true,
        min: 1,
        step: 1,
        placeholder: "Enter width (feet)",
      },
      {
        name: "roofPitch",
        label: "Roof Pitch",
        type: "select",
        required: true,
        default: "2",
        options: [
          { label: "Flat (0:12)", value: "0" },
          { label: "1:12", value: "1" },
          { label: "2:12 (Recommended max)", value: "2" },
          { label: "3:12", value: "3" },
        ],
      },
      {
        name: "rollType",
        label: "Roll Type",
        type: "select",
        required: true,
        default: "mineral",
        options: [
          { label: 'Mineral Surface (36" wide)', value: "mineral" },
          { label: 'Saturated Felt (36" wide)', value: "saturated" },
          { label: 'Smooth Roll (36" wide)', value: "smooth" },
        ],
      },
      {
        name: "layers",
        label: "Number of Layers",
        type: "select",
        required: true,
        default: "2",
        options: [
          { label: "1 Layer (not recommended)", value: "1" },
          { label: "2 Layers (standard)", value: "2" },
          { label: "3 Layers (premium)", value: "3" },
        ],
      },
      {
        name: "waste",
        label: "Waste Factor",
        type: "percent",
        required: false,
        default: 15,
        min: 10,
        max: 25,
        step: 1,
      },
      {
        name: "pricePerRoll",
        label: "Price Per Roll ($)",
        type: "number",
        unit: "currency",
        required: false,
        min: 0,
        step: 1,
        placeholder: "Optional: for cost calculation",
      },
    ],
    outputs: [
      {
        name: "roofArea",
        label: "Total Roof Area",
        unit: "sq ft",
        primary: true,
        decimals: 0,
      },
      {
        name: "rollsNeeded",
        label: "Rolls Needed",
        decimals: 0,
      },
      {
        name: "nailsNeeded",
        label: "Cap Nails Needed (lb)",
        decimals: 0,
      },
      {
        name: "cementNeeded",
        label: "Roofing Cement Tubes",
        decimals: 0,
      },
      {
        name: "totalCost",
        label: "Estimated Material Cost",
        conditional: "pricePerRoll",
        decimals: 2,
      },
    ],
    engine: "roll-roofing",
  },

  // ============================================================================
  // ROOF VENTILATION CALCULATOR
  // ============================================================================
  {
    id: "roof-ventilation",
    name: "Roof Ventilation Calculator",
    slug: "roof-ventilation",
    description:
      "Calculate proper roof ventilation requirements. Intake vents, exhaust vents, and attic fan sizing.",
    category: "roofing",
    icon: "Wind",
    seoTitle:
      "Roof Ventilation Calculator - Estimate Vent Requirements",
    seoDescription:
      "Calculate proper roof ventilation based on attic size. Get estimates for ridge vents, static vents, gable vents, and attic fans.",
    inputs: [
      {
        name: "atticFloorLength",
        label: "Attic Floor Length",
        type: "number",
        unit: "length",
        required: true,
        min: 1,
        step: 1,
        placeholder: "Enter length (feet)",
      },
      {
        name: "atticFloorWidth",
        label: "Attic Floor Width",
        type: "number",
        unit: "length",
        required: true,
        min: 1,
        step: 1,
        placeholder: "Enter width (feet)",
      },
      {
        name: "ventType",
        label: "Vent Type",
        type: "select",
        required: true,
        default: "ridge",
        options: [
          { label: "Ridge Vent + Intake", value: "ridge" },
          { label: "Box Vents (Static)", value: "box" },
          { label: "Gable Vents", value: "gable" },
          { label: "Power Attic Fan", value: "power" },
        ],
      },
      {
        name: "ceilingHeight",
        label: "Ceiling Height",
        type: "select",
        required: true,
        default: "8",
        options: [
          { label: "7 ft or less", value: "7" },
          { label: "8 ft (standard)", value: "8" },
          { label: "9 ft", value: "9" },
          { label: "10 ft or more", value: "10" },
        ],
      },
      {
        name: "climate",
        label: "Climate Zone",
        type: "select",
        required: true,
        default: "mixed",
        options: [
          { label: "Hot/Humid", value: "hot" },
          { label: "Cold", value: "cold" },
          { label: "Mixed", value: "mixed" },
        ],
      },
    ],
    outputs: [
      {
        name: "atticArea",
        label: "Attic Floor Area",
        unit: "sq ft",
        primary: true,
        decimals: 0,
      },
      {
        name: "requiredVentArea",
        label: "Required Net Free Vent Area",
        unit: "sq ft",
        decimals: 1,
      },
      {
        name: "intakeVents",
        label: "Intake Vents Needed",
        decimals: 0,
      },
      {
        name: "exhaustVents",
        label: "Exhaust Vents Needed",
        decimals: 0,
      },
      {
        name: "ridgeVentLength",
        label: "Ridge Vent Length Needed",
        unit: "linear ft",
        decimals: 0,
      },
    ],
    engine: "roof-ventilation",
  },

  // ============================================================================
  // ROOF FLASHING CALCULATOR
  // ============================================================================
  {
    id: "roof-flashing",
    name: "Roof Flashing Calculator",
    slug: "roof-flashing",
    description:
      "Calculate roof flashing needs for valleys, dormers, chimneys, and roof-to-wall intersections.",
    category: "roofing",
    icon: "FlipHorizontal",
    seoTitle:
      "Roof Flashing Calculator - Estimate Flashing Materials",
    seoDescription:
      "Calculate roof flashing for valleys, chimneys, dormers, and wall intersections. Enter dimensions for step and valley flashing.",
    inputs: [
      {
        name: "roofPerimeter",
        label: "Roof Perimeter",
        type: "number",
        unit: "length",
        required: true,
        min: 1,
        step: 1,
        placeholder: "Enter total perimeter (feet)",
      },
      {
        name: "valleyLength",
        label: "Valley Length",
        type: "number",
        unit: "length",
        required: false,
        default: 0,
        min: 0,
        step: 1,
        placeholder: "Enter total valley length (feet)",
      },
      {
        name: "chimneys",
        label: "Number of Chimneys",
        type: "number",
        required: false,
        default: 0,
        min: 0,
        step: 1,
        placeholder: "Enter number of chimneys",
      },
      {
        name: "dormers",
        label: "Number of Dormers",
        type: "number",
        required: false,
        default: 0,
        min: 0,
        step: 1,
        placeholder: "Enter number of dormers",
      },
      {
        name: "skylights",
        label: "Number of Skylights",
        type: "number",
        required: false,
        default: 0,
        min: 0,
        step: 1,
        placeholder: "Enter number of skylights",
      },
      {
        name: "flashingType",
        label: "Flashing Type",
        type: "select",
        required: true,
        default: "aluminum",
        options: [
          { label: "Aluminum (10 ft pieces)", value: "aluminum" },
          { label: "Galvanized Steel (10 ft)", value: "steel" },
          { label: "Copper (10 ft)", value: "copper" },
          { label: "Roll Flashing (50 ft)", value: "roll" },
        ],
      },
      {
        name: "waste",
        label: "Waste Factor",
        type: "percent",
        required: false,
        default: 15,
        min: 5,
        max: 25,
        step: 1,
      },
      {
        name: "pricePerPiece",
        label: "Price Per Piece ($)",
        type: "number",
        unit: "currency",
        required: false,
        min: 0,
        step: 1,
        placeholder: "Optional: for cost calculation",
      },
    ],
    outputs: [
      {
        name: "dripEdge",
        label: "Drip Edge Needed",
        unit: "linear ft",
        primary: true,
        decimals: 0,
      },
      {
        name: "valleyFlashing",
        label: "Valley Flashing Needed",
        unit: "linear ft",
        decimals: 0,
      },
      {
        name: "stepFlashing",
        label: "Step Flashing Pieces",
        decimals: 0,
      },
      {
        name: "piecesCount",
        label: "Pieces Needed (10 ft)",
        decimals: 0,
      },
      {
        name: "totalCost",
        label: "Estimated Material Cost",
        conditional: "pricePerPiece",
        decimals: 2,
      },
    ],
    engine: "roof-flashing",
  },
];

/**
 * Get a roofing calculator by its slug
 */
export function getRoofingCalculatorBySlug(
  slug: string
): CalculatorConfig | undefined {
  return roofingCalculators.find((calc) => calc.slug === slug);
}

/**
 * Get all roofing calculators
 */
export function getAllRoofingCalculators(): CalculatorConfig[] {
  return roofingCalculators;
}
