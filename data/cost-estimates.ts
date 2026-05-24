/**
 * Cost Estimate Data for Programmatic SEO
 * Generates cost estimate pages for different project types and locations
 */

export interface ProjectCostData {
  /** Project identifier */
  id: string;
  /** Project name */
  name: string;
  /** Description */
  description: string;
  /** National average cost range */
  nationalAverage: { min: number; max: number };
  /** Cost per square foot */
  costPerSqFt: { min: number; max: number };
  /** Cost factors */
  factors: {
    /** Material cost percentage */
    materials: number;
    /** Labor cost percentage */
    labor: number;
    /** Additional costs */
    additional: string[];
  };
  /** Size categories */
  sizeCategories: Array<{ name: string; sqft: number; avgCost: number }>;
  /** Cost variables */
  variables: Array<{
    factor: string;
    impact: string;
    addsCost: boolean;
  }>;
}

export const projectCosts: ProjectCostData[] = [
  {
    id: "concrete-driveway",
    name: "Concrete Driveway",
    description: "New concrete driveway installation including forms, reinforcement, and finishing",
    nationalAverage: { min: 3000, max: 9000 },
    costPerSqFt: { min: 6, max: 18 },
    factors: {
      materials: 40,
      labor: 60,
      additional: ["Reinforcement (rebar/wire mesh)", "Base preparation", "Forms", "Sealing"],
    },
    sizeCategories: [
      { name: "Single Car", sqft: 200, avgCost: 2400 },
      { name: "Double Car", sqft: 400, avgCost: 4800 },
      { name: "Triple Car", sqft: 600, avgCost: 7200 },
      { name: "Extra Wide", sqft: 800, avgCost: 9600 },
    ],
    variables: [
      { factor: "Basic concrete", impact: "$6-$10/sq ft", addsCost: true },
      { factor: "Stamped concrete", impact: "+$6-$8/sq ft", addsCost: true },
      { factor: "Colored concrete", impact: "+$2-$5/sq ft", addsCost: true },
      { factor: "Sloped lot", impact: "+20-30%", addsCost: true },
      { factor: "Poor soil conditions", impact: "+$500-$2000", addsCost: true },
      { factor: "Removing old driveway", impact: "+$2-$6/sq ft", addsCost: true },
    ],
  },
  {
    id: "concrete-patio",
    name: "Concrete Patio",
    description: "New concrete patio installation for outdoor living space",
    nationalAverage: { min: 1500, max: 6000 },
    costPerSqFt: { min: 6, max: 15 },
    factors: {
      materials: 45,
      labor: 55,
      additional: ["Gravel base", "Reinforcement", "Forms", "Finish options"],
    },
    sizeCategories: [
      { name: "Small (10x10)", sqft: 100, avgCost: 900 },
      { name: "Medium (12x16)", sqft: 192, avgCost: 1730 },
      { name: "Large (16x20)", sqft: 320, avgCost: 2880 },
      { name: "Extra Large (20x30)", sqft: 600, avgCost: 5400 },
    ],
    variables: [
      { factor: "Basic broom finish", impact: "$6-$9/sq ft", addsCost: false },
      { factor: "Stamped finish", impact: "+$5-$8/sq ft", addsCost: true },
      { factor: "Exposed aggregate", impact: "+$4-$6/sq ft", addsCost: true },
      { factor: "Colored concrete", impact: "+$2-$4/sq ft", addsCost: true },
      { factor: "Retaining wall needed", impact: "+$15-$40/sq ft of wall", addsCost: true },
    ],
  },
  {
    id: "concrete-slab-foundation",
    name: "Concrete Slab Foundation",
    description: "Monolithic concrete slab foundation for house, garage, or addition",
    nationalAverage: { min: 5000, max: 20000 },
    costPerSqFt: { min: 5, max: 12 },
    factors: {
      materials: 50,
      labor: 50,
      additional: ["Grading", "Vapor barrier", "Insulation", "Termite treatment"],
    },
    sizeCategories: [
      { name: "Garage (20x20)", sqft: 400, avgCost: 3400 },
      { name: "Small House (30x40)", sqft: 1200, avgCost: 10200 },
      { name: "Medium House (40x60)", sqft: 2400, avgCost: 20400 },
    ],
    variables: [
      { factor: "Standard slab", impact: "$5-$8/sq ft", addsCost: false },
      { factor: "Slab with footings", impact: "+$2-$4/sq ft", addsCost: true },
      { factor: "Radiant floor heating", impact: "+$6-$10/sq ft", addsCost: true },
      { factor: "Poor soil (extra prep)", impact: "+20-40%", addsCost: true },
      { factor: "Sloped site (excavation)", impact: "+$3,000-$10,000", addsCost: true },
    ],
  },
  {
    id: "concrete-walkway",
    name: "Concrete Walkway / Sidewalk",
    description: "Concrete walkway installation for residential properties",
    nationalAverage: { min: 800, max: 2500 },
    costPerSqFt: { min: 8, max: 16 },
    factors: {
      materials: 40,
      labor: 60,
      additional: ["Gravel base", "Forms", "Reinforcement", "Finishing"],
    },
    sizeCategories: [
      { name: "Short (20ft)", sqft: 24, avgCost: 290 },
      { name: "Standard (40ft)", sqft: 48, avgCost: 580 },
      { name: "Long (80ft)", sqft: 96, avgCost: 1150 },
      { name: "Extended (100ft)", sqft: 120, avgCost: 1440 },
    ],
    variables: [
      { factor: "3ft wide sidewalk", impact: "$8-$12/sq ft", addsCost: false },
      { factor: "4ft wide walkway", impact: "+10-15%", addsCost: true },
      { factor: "Curved walkway", impact: "+15-25%", addsCost: true },
      { factor: "Stamped border", impact: "+$2-$4/linear ft", addsCost: true },
      { factor: "Removing old concrete", impact: "+$2-$4/sq ft", addsCost: true },
    ],
  },
  {
    id: "concrete-garage-floor",
    name: "Concrete Garage Floor",
    description: "New concrete garage floor slab for new or replacement construction",
    nationalAverage: { min: 2000, max: 7000 },
    costPerSqFt: { min: 4, max: 8 },
    factors: {
      materials: 45,
      labor: 55,
      additional: ["Base preparation", "Vapor barrier", "Reinforcement", "Trowel finish"],
    },
    sizeCategories: [
      { name: "1-Car (12x20)", sqft: 240, avgCost: 1440 },
      { name: "2-Car (20x24)", sqft: 480, avgCost: 2880 },
      { name: "3-Car (30x30)", sqft: 900, avgCost: 5400 },
      { name: "Large (40x40)", sqft: 1600, avgCost: 9600 },
    ],
    variables: [
      { factor: "Standard 4-inch slab", impact: "$4-$6/sq ft", addsCost: false },
      { factor: "6-inch slab (heavy duty)", impact: "+20-30%", addsCost: true },
      { factor: "Radiant heating", impact: "+$6-$10/sq ft", addsCost: true },
      { factor: "Epoxy coating", impact: "+$3-$7/sq ft", addsCost: true },
      { factor: "Polished finish", impact: "+$4-$8/sq ft", addsCost: true },
    ],
  },
  {
    id: "concrete-detached-garage",
    name: "Concrete Detached Garage Slab",
    description: "Concrete slab for detached garage with footings and thickened edge",
    nationalAverage: { min: 3000, max: 8000 },
    costPerSqFt: { min: 5, max: 10 },
    factors: {
      materials: 48,
      labor: 52,
      additional: ["Footings", "Thickened edge", "Anchor bolts", "Vapor barrier"],
    },
    sizeCategories: [
      { name: "1-Car (12x20)", sqft: 240, avgCost: 1800 },
      { name: "2-Car (24x24)", sqft: 576, avgCost: 4320 },
      { name: "2-Car + Storage (24x30)", sqft: 720, avgCost: 5400 },
      { name: "3-Car (30x40)", sqft: 1200, avgCost: 9000 },
    ],
    variables: [
      { factor: "Basic slab on grade", impact: "$5-$7/sq ft", addsCost: false },
      { factor: "Frost footings required", impact: "+$2-$4/sq ft", addsCost: true },
      { factor: "Sloped site (retaining wall)", impact: "+$3,000-$8,000", addsCost: true },
    ],
  },
];

/**
 * Get cost data by project ID
 */
export function getProjectCostData(id: string): ProjectCostData | undefined {
  return projectCosts.find((p) => p.id === id);
}

/**
 * Calculate estimated cost for a project
 */
export function calculateProjectCost(
  projectId: string,
  squareFootage: number,
  qualityLevel: "basic" | "standard" | "premium" = "standard",
  locationMultiplier: number = 1.0
): { min: number; max: number } {
  const project = getProjectCostData(projectId);
  if (!project) return { min: 0, max: 0 };

  const qualityMultipliers = {
    basic: 0.8,
    standard: 1.0,
    premium: 1.4,
  };

  const multiplier = qualityMultipliers[qualityLevel];

  const minCost = squareFootage * project.costPerSqFt.min * multiplier * locationMultiplier;
  const maxCost = squareFootage * project.costPerSqFt.max * multiplier * locationMultiplier;

  return {
    min: Math.round(minCost),
    max: Math.round(maxCost),
  };
}

/**
 * Get all project cost IDs
 */
export function getProjectCostIds(): string[] {
  return projectCosts.map((p) => p.id);
}
