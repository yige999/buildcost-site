/**
 * Material Selection Guides for Programmatic SEO
 */

export interface MaterialGuide {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  types: Array<{
    name: string;
    description: string;
    avgCost: string;
    lifespan: string;
    pros: string[];
    cons: string[];
    bestFor: string[];
  }>;
  selectionFactors: Array<{
    factor: string;
    description: string;
  }>;
}

export const materialGuides: MaterialGuide[] = [
  {
    id: "concrete-types-guide",
    title: "Types of Concrete - Complete Guide",
    slug: "types-of-concrete",
    description: "Learn about different types of concrete mixes and their uses for construction projects",
    category: "Concrete",
    types: [
      {
        name: "Normal Strength Concrete (3000 PSI)",
        description: "Standard residential concrete mix",
        avgCost: "$100-$125/cubic yard",
        lifespan: "25-30 years",
        pros: ["Most economical", "Readily available", "Sufficient for many projects"],
        cons: ["Not for heavy loads", "May crack under stress"],
        bestFor: ["Sidewalks", "Patios", "Light-duty slabs"],
      },
      {
        name: "Medium Strength Concrete (4000 PSI)",
        description: "Standard for driveways and garage floors",
        avgCost: "$110-$140/cubic yard",
        lifespan: "30-40 years",
        pros: ["Good durability", "Residential standard", "Cost-effective"],
        cons: ["More expensive than 3000 PSI"],
        bestFor: ["Driveways", "Garage floors", "Most residential"],
      },
      {
        name: "High Strength Concrete (5000+ PSI)",
        description: "Commercial-grade concrete for heavy use",
        avgCost: "$130-$175/cubic yard",
        lifespan: "40-50+ years",
        pros: ["Maximum strength", "Crack resistant", "Durable"],
        cons: ["Most expensive", "Overkill for many projects"],
        bestFor: ["Commercial", "Heavy equipment", "High-traffic"],
      },
      {
        name: "Stamped Concrete",
        description: "Decorative concrete embossed with patterns",
        avgCost: "$14-$18/sq ft",
        lifespan: "25+ years",
        pros: ["Attractive appearance", "Many design options", "Lower cost than pavers"],
        cons: ["Can show cracks", "Requires resealing", "Limited repair options"],
        bestFor: ["Patios", "Pool decks", "Walkways"],
      },
      {
        name: "Exposed Aggregate Concrete",
        description: "Decorative concrete with exposed aggregate",
        avgCost: "$12-$16/sq ft",
        lifespan: "30+ years",
        pros: ["Beautiful finish", "Slip resistant", "Durable", "Low maintenance"],
        cons: ["More expensive", "Requires skilled installer"],
        bestFor: ["Patios", "Driveways", "Pool decks"],
      },
      {
        name: "Fiber-Reinforced Concrete",
        description: "Concrete with synthetic fibers for crack control",
        avgCost: "$105-$135/cubic yard",
        lifespan: "30+ years",
        pros: ["Reduced cracking", "Alternative to wire mesh", "Easy to use"],
        cons: ["Still needs reinforcement for structural", "Not for heavy loads"],
        bestFor: ["Slabs", "Patios", "Interior floors"],
      },
    ],
    selectionFactors: [
      { factor: "PSI Strength", description: "Choose based on intended use - 3000 PSI for light use, 4000 for driveways, 5000+ for commercial" },
      { factor: "Climate", description: "Cold climates require air-entrained concrete for freeze-thaw resistance" },
      { factor: "Finish", description: "Broom finish for traction, smooth for indoor, stamped/decorative for appearance" },
      { factor: "Reinforcement", description: "Wire mesh for crack control, rebar for structural strength, fibers as additional measure" },
    ],
  },
  {
    id: "gravel-types-guide",
    title: "Types of Gravel - Complete Guide",
    slug: "types-of-gravel",
    description: "Compare different types of gravel for driveways, drainage, and landscaping",
    category: "Landscaping",
    types: [
      {
        name: "Crushed Stone #57",
        description: "Most popular gravel for driveways and drainage",
        avgCost: "$25-$45/ton",
        lifespan: "10+ years",
        pros: ["Excellent drainage", "Compacts well", "Versatile"],
        cons: ["Can be sharp", "May need edging"],
        bestFor: ["Driveways", "Drainage", "Base layer"],
      },
      {
        name: "Pea Gravel",
        description: "Small, smooth rounded stones",
        avgCost: "$30-$50/ton",
        lifespan: "5+ years",
        pros: ["Attractive appearance", "Comfortable to walk on", "Natural look"],
        cons: ["Scatters easily", "Not for driveways", "Hard to shovel"],
        bestFor: ["Pathways", "Play areas", "Ground cover"],
      },
      {
        name: "Crusher Run",
        description: "Compacted gravel with fines for base preparation",
        avgCost: "$20-$35/ton",
        lifespan: "Indefinite",
        pros: ["Excellent compaction", "Stable base", "Inexpensive"],
        cons: ["Not attractive", "Dusty when dry"],
        bestFor: ["Base for pavers/concrete", "Driveway base", "Road base"],
      },
      {
        name: "River Rock",
        description: "Large, smooth rounded stones",
        avgCost: "$40-$70/ton",
        lifespan: "Indefinite",
        pros: ["Very attractive", "Low maintenance", "Natural look"],
        cons: ["Expensive", "Not for walking", "Hard to move"],
        bestFor: ["Dry creek beds", "Edging", "Decorative"],
      },
    ],
    selectionFactors: [
      { factor: "Intended Use", description: "Drainage needs angular gravel, walkways need smooth gravel" },
      { factor: "Size", description: "Smaller gravel (1/4-1/2) for pathways, larger (3/4-1) for driveways" },
      { factor: "Local Availability", description: "Local gravel is cheaper and available in larger quantities" },
    ],
  },
  {
    id: "paver-types-guide",
    title: "Types of Pavers - Complete Guide",
    slug: "types-of-pavers",
    description: "Compare different types of pavers for patios, driveways, and walkways",
    category: "Hardscaping",
    types: [
      {
        name: "Concrete Pavers",
        description: "Manufactured concrete pavers in various shapes and colors",
        avgCost: "$3-$7/sq ft (materials only)",
        lifespan: "30-50 years",
        pros: ["Affordable", "Many colors/styles", "Durable", "Easy to replace"],
        cons: ["Color can fade", "Can settle unevenly", "Weeds in joints"],
        bestFor: ["Patios", "Walkways", "Driveways"],
      },
      {
        name: "Clay Brick Pavers",
        description: "Traditional clay brick pavers",
        avgCost: "$5-$10/sq ft (materials only)",
        lifespan: "50-100+ years",
        pros: ["Classic look", "Very durable", "Color won't fade", "Increases home value"],
        cons: ["More expensive", "Limited shapes", "Requires skilled installation"],
        bestFor: ["High-end patios", "Historic homes", "Walkways"],
      },
      {
        name: "Natural Stone Pavers",
        description: "Flagstone, travertine, slate, or granite pavers",
        avgCost: "$10-$30/sq ft (materials only)",
        lifespan: "50+ years",
        pros: ["Unique beauty", "Natural variation", "Very high-end look"],
        cons: ["Most expensive", "Uneven thickness", "Can be slippery when wet"],
        bestFor: ["Pool decks", "High-end patios", "Stepping stones"],
      },
      {
        name: "Permeable Pavers",
        description: "Pavers designed to let water pass through",
        avgCost: "$6-$12/sq ft (materials only)",
        lifespan: "30-50 years",
        pros: ["Eco-friendly", "Reduces runoff", "May qualify for tax credits"],
        cons: ["Requires special base", "More maintenance", "Higher cost"],
        bestFor: ["Eco-conscious projects", "Areas with drainage issues"],
      },
    ],
    selectionFactors: [
      { factor: "Climate", description: "Freeze-thaw cycles require durable pavers with low water absorption" },
      { factor: "Budget", description: "Concrete pavers are most affordable, natural stone is premium" },
      { factor: "Maintenance", description: "All pavers need some maintenance - joint sand, weed control, occasional leveling" },
    ],
  },
];

export function getMaterialGuideById(id: string): MaterialGuide | undefined {
  return materialGuides.find((m) => m.id === id);
}

export function getMaterialGuideBySlug(slug: string): MaterialGuide | undefined {
  return materialGuides.find((m) => m.slug === slug);
}

export function getAllMaterialGuides(): MaterialGuide[] {
  return materialGuides;
}
