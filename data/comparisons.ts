/**
 * Comparison Data for Programmatic SEO
 * Generates "A vs B" comparison pages
 */

export interface ComparisonData {
  id: string;
  title: string;
  slug: string;
  description: string;
  summary?: string;
  option1?: string;
  option2?: string;
  category?: string;
  items: {
    name: string;
    emoji: string;
    description: string;
    avgCost: string;
    pros: string[];
    cons: string[];
    bestFor: string[];
  }[];
  factors: Array<{
    label: string;
    winner: string | "tie";
    details: string;
  }>;
}

export const comparisons: ComparisonData[] = [
  {
    id: "stamped-concrete-vs-pavers",
    title: "Stamped Concrete vs Pavers",
    slug: "stamped-concrete-vs-pavers",
    description: "Compare stamped concrete and pavers for decorative driveways, patios, and walkways",
    items: [
      {
        name: "Stamped Concrete",
        emoji: "🎨",
        description: "Concrete stamped with patterns to mimic brick, stone, or tile",
        avgCost: "$12-$18/sq ft",
        pros: ["Lower cost than pavers", "Seamless surface", "Many pattern options", "Easy maintenance"],
        cons: ["Can crack", "Limited repair options", "Requires resealing", "Pattern fades over time"],
        bestFor: ["Budget-conscious homeowners", "Large areas", "Smooth surface preference"],
      },
      {
        name: "Pavers",
        emoji: "🧱",
        description: "Individual concrete, brick, or stone units laid in patterns",
        avgCost: "$15-$25/sq ft",
        pros: ["Won't crack like solid concrete", "Easy to replace damaged units", "Lasts 30-50+ years", "More design options"],
        cons: ["Higher initial cost", "Weeds can grow in joints", "Settling can occur", "More labor intensive"],
        bestFor: ["Premium installations", "Long-term investment", "Underground utility access needed"],
      },
    ],
    factors: [
      { label: "Initial Cost", winner: "Stamped Concrete", details: "$4-$8/sq ft less expensive" },
      { label: "Durability", winner: "Pavers", details: "Individual units won't crack" },
      { label: "Maintenance", winner: "Stamped Concrete", details: "Just resealing every 2-3 years" },
      { label: "Repair Ease", winner: "Pavers", details: "Replace individual units" },
      { label: "Design Options", winner: "Pavers", details: "Unlimited patterns and colors" },
    ],
  },
  {
    id: "80lb-vs-60lb-concrete-bags",
    title: "80lb vs 60lb Concrete Bags",
    slug: "80lb-vs-60lb-concrete",
    description: "Which concrete bags should you buy for your project?",
    items: [
      {
        name: "80lb Bags",
        emoji: "💪",
        description: "Heavier bags with more concrete per bag",
        avgCost: "$6-$9 per bag",
        pros: ["More concrete per bag", "Fewer bags to carry overall", "Usually better value", "Less bag waste"],
        cons: ["Heavier to lift (80 lbs)", "Harder for some to handle", "Requires mixer for multiple bags"],
        bestFor: ["Larger projects", "People who can handle heavy lifting", "Maximizing value"],
      },
      {
        name: "60lb Bags",
        emoji: "👜",
        description: "Lighter bags, easier to handle",
        avgCost: "$4-$6 per bag",
        pros: ["Easier to carry and handle", "Better for DIYers", "Can mix by hand more easily"],
        cons: ["More bags needed", "More plastic waste", "Usually slightly more expensive per cubic foot"],
        bestFor: ["Small projects", "DIY without help", "Those with physical limitations"],
      },
    ],
    factors: [
      { label: "Coverage", winner: "80lb Bags", details: "0.60 cu ft vs 0.45 cu ft" },
      { label: "Ease of Handling", winner: "60lb Bags", details: "25% lighter to carry" },
      { label: "Value", winner: "80lb Bags", details: "Usually cheaper per cubic foot" },
      { label: "DIY Friendly", winner: "60lb Bags", details: "Easier to mix and pour" },
    ],
  },
  {
    id: "quikrete-vs-sakrete",
    title: "Quikrete vs Sakrete",
    slug: "quikrete-vs-sakrete",
    description: "Compare the two most popular concrete mix brands",
    items: [
      {
        name: "Quikrete",
        emoji: "⚡",
        description: "Largest concrete mix manufacturer in the US",
        avgCost: "Similar to Sakrete",
        pros: ["Widely available", "Consistent quality", "Many specialty mixes", "Good product support"],
        cons: ["Can be pricier at some stores", "Limited color options in some areas"],
        bestFor: ["Most projects", "When availability is key", "Specialty concrete needs"],
      },
      {
        name: "Sakrete",
        emoji: "🏗️",
        description: "Popular competitor to Quikrete",
        avgCost: "Similar to Quikrete",
        pros: ["Often slightly cheaper", "Good availability", "Reliable quality", "Some prefer the mix"],
        cons: ["Fewer store locations", "Less variety in some areas"],
        bestFor: ["Budget-conscious projects", "Available at Home Depot", "Standard concrete needs"],
      },
    ],
    factors: [
      { label: "Quality", winner: "tie", details: "Both meet ASTM standards" },
      { label: "Availability", winner: "Quikrete", details: "Sold at more retailers" },
      { label: "Price", winner: "Sakrete", details: "Often slightly cheaper" },
      { label: "Variety", winner: "Quikrete", details: "More specialty products" },
    ],
  },
  {
    id: "concrete-vs-asphalt-driveway",
    title: "Concrete vs Asphalt Driveway",
    slug: "concrete-vs-asphalt-driveway",
    description: "Compare the two most popular driveway materials",
    items: [
      {
        name: "Concrete Driveway",
        emoji: "🏠",
        description: "Durable cement driveway that can last 30+ years",
        avgCost: "$6-$18/sq ft",
        pros: ["Longer lifespan", "Low maintenance", "Design options (stamping, coloring)", "Lighter color (cooler)"],
        cons: ["Higher initial cost", "Can crack", "Staining possible", "Salt damage in winter"],
        bestFor: ["Long-term investment", "Curb appeal", "Warm climates"],
      },
      {
        name: "Asphalt Driveway",
        emoji: "🛣️",
        description: "Flexible pavement that's popular in cold climates",
        avgCost: "$3-$8/sq ft",
        pros: ["Lower initial cost", "Flexible (resists cracking)", "Good for cold climates", "Quick installation"],
        cons: ["Shorter lifespan (15-20 years)", "Requires sealing every 2-3 years", "Can soften in heat", "Dark color (hotter)"],
        bestFor: ["Cold climates", "Budget installations", "Large areas"],
      },
    ],
    factors: [
      { label: "Initial Cost", winner: "Asphalt", details: "50% cheaper on average" },
      { label: "Lifespan", winner: "Concrete", details: "30+ years vs 15-20 years" },
      { label: "Cold Climate", winner: "Asphalt", details: "Handles freeze-thaw better" },
      { label: "Maintenance", winner: "Concrete", details: "Less frequent sealing needed" },
    ],
  },
  {
    id: "wire-mesh-vs-rebar",
    title: "Wire Mesh vs Rebar in Concrete",
    slug: "wire-mesh-vs-rebar",
    description: "Which reinforcement should you use for your concrete project?",
    items: [
      {
        name: "Wire Mesh",
        emoji: "🕸️",
        description: "Welded wire reinforcement grid",
        avgCost: "$0.10-$0.20/sq ft",
        pros: ["Cheaper", "Easy to install", "Good for crack control", "Lightweight"],
        cons: ["Can end up at bottom of pour", "Less structural strength", "Not for heavy loads"],
        bestFor: ["Patios and walkways", "Light-duty slabs", "Crack control"],
      },
      {
        name: "Rebar",
        emoji: "🔩",
        description: "Steel reinforcing bars",
        avgCost: "$0.50-$1.50/sq ft",
        pros: ["Much stronger", "Structural reinforcement", "Required for driveways", "Chairs hold it in place"],
        cons: ["More expensive", "Heavier to work with", "Requires more labor"],
        bestFor: ["Driveways", "Garage floors", "Structural slabs", "Heavy loads"],
      },
    ],
    factors: [
      { label: "Cost", winner: "Wire Mesh", details: "80% cheaper" },
      { label: "Strength", winner: "Rebar", details: "Essential for structural loads" },
      { label: "Crack Control", winner: "Wire Mesh", details: "Better at preventing small cracks" },
      { label: "Driveways", winner: "Rebar", details: "Required for durability" },
    ],
  },
  {
    id: "3000-vs-4000-vs-5000-psi-concrete",
    title: "3000 vs 4000 vs 5000 PSI Concrete",
    slug: "3000-vs-4000-vs-5000-psi-concrete",
    description: "Which concrete strength do you need for your project?",
    items: [
      {
        name: "3000 PSI Concrete",
        emoji: "🟢",
        description: "Standard residential concrete strength",
        avgCost: "$100-$125/yd³",
        pros: ["Most economical", "Sufficient for many projects", "Widely available"],
        cons: ["Not for heavy loads", "May crack under stress"],
        bestFor: ["Sidewalks", "Patios", "Light-duty slabs"],
      },
      {
        name: "4000 PSI Concrete",
        emoji: "🔵",
        description: "Medium-strength concrete for most residential use",
        avgCost: "$110-$135/yd³",
        pros: ["Good strength for most uses", "Durable", "Common for driveways"],
        cons: ["Slightly more expensive", "Overkill for some projects"],
        bestFor: ["Driveways", "Garage floors", "Most residential slabs"],
      },
      {
        name: "5000+ PSI Concrete",
        emoji: "🔴",
        description: "High-strength commercial-grade concrete",
        avgCost: "$125-$160/yd³",
        pros: ["Maximum strength", "Excellent durability", "Crack resistant"],
        cons: ["Most expensive", "Harder to finish quickly", "Not always necessary"],
        bestFor: ["Commercial floors", "Heavy equipment", "High-traffic areas"],
      },
    ],
    factors: [
      { label: "Cost", winner: "3000 PSI", details: "Lowest per yard" },
      { label: "Driveways", winner: "4000 PSI", details: "Best balance of strength and cost" },
      { label: "Garage Floors", winner: "4000 PSI", details: "Standard recommendation" },
      { label: "Commercial Use", winner: "5000 PSI", details: "Required for heavy loads" },
    ],
  },
];

export function getComparisonById(id: string): ComparisonData | undefined {
  return comparisons.find((c) => c.id === id);
}

export function getAllComparisons(): ComparisonData[] {
  return comparisons;
}
