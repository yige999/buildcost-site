/**
 * DIY vs Professional Comparison Data for Programmatic SEO
 */

export interface DIYVsProData {
  id: string;
  title: string;
  slug: string;
  description: string;
  project: string;
  diy: {
    difficulty: "Easy" | "Medium" | "Hard";
    timeEstimate: string;
    skillLevel: string;
    tools: string[];
    materialsCost: string;
    totalCost: string;
    savings: string;
    pros: string[];
    cons: string[];
  };
  professional: {
    timeEstimate: string;
    laborCost: string;
    materialsCost: string;
    totalCost: string;
    warranty: string;
    pros: string[];
    cons: string[];
  };
  factors: Array<{
    factor: string;
    winner: "DIY" | "Professional" | "Tie";
    explanation: string;
  }>;
}

export const diyVsProData: DIYVsProData[] = [
  {
    id: "diy-vs-pro-concrete-driveway",
    title: "DIY vs Professional Concrete Driveway",
    slug: "diy-vs-professional-concrete-driveway",
    description: "Compare DIY and professional concrete driveway installation costs, time, and quality",
    project: "Concrete Driveway",
    diy: {
      difficulty: "Hard",
      timeEstimate: "3-5 days (with help)",
      skillLevel: "Advanced - Experience required",
      tools: [
        "Concrete mixer or rental",
        "Screed and float tools",
        "Forms and stakes",
        "Wheelbarrow",
        "Shovels, rakes, trowels",
      ],
      materialsCost: "$2,000-$3,000 (500 sq ft)",
      totalCost: "$2,000-$3,500",
      savings: "$2,000-$5,500",
      pros: [
        "Significant cost savings",
        "Complete control over timeline",
        "Satisfaction of doing it yourself",
        "Can work at your own pace",
      ],
      cons: [
        "Physically demanding",
        "Requires concrete finishing skills",
        "Risk of poor results",
        "No warranty",
        "Equipment rental costs",
        "Need helper(s)",
      ],
    },
    professional: {
      timeEstimate: "1-3 days",
      laborCost: "$1,500-$3,000",
      materialsCost: "$2,000-$3,000",
      totalCost: "$3,500-$9,000",
      warranty: "1-5 years on workmanship",
      pros: [
        "Professional quality finish",
        "Faster completion",
        "Proper preparation and reinforcement",
        "Warranty included",
        "Insurance and licensing",
        "Proper curing techniques",
      ],
      cons: [
        "Much higher cost",
        "Less control over schedule",
        "Need to vet contractors",
        "Potential for unreliable contractors",
      ],
    },
    factors: [
      { factor: "Cost", winner: "DIY", explanation: "Save $2,000-$5,500 on labor" },
      { factor: "Quality", winner: "Professional", explanation: "Professional finishing is superior" },
      { factor: "Time", winner: "Professional", explanation: "Completed in 1-3 days vs 3-5 days" },
      { factor: "Warranty", winner: "Professional", explanation: "DIY has no warranty" },
      { factor: "Physical Effort", winner: "Professional", explanation: "Concrete work is extremely demanding" },
    ],
  },
  {
    id: "diy-vs-pro-concrete-patio",
    title: "DIY vs Professional Concrete Patio",
    slug: "diy-vs-professional-concrete-patio",
    description: "Should you pour your own concrete patio or hire a pro?",
    project: "Concrete Patio",
    diy: {
      difficulty: "Medium",
      timeEstimate: "2-4 days",
      skillLevel: "Intermediate",
      tools: ["Concrete mixer (optional)", "Float and trowel", "Forms", "Wheelbarrow", "Shovel, rake"],
      materialsCost: "$400-$800 (12x12 patio)",
      totalCost: "$500-$1,000",
      savings: "$500-$2,500",
      pros: ["Good beginner concrete project", "Manageable size", "Lower cost"],
      cons: ["Still physically demanding", "Risk of cracking if not done right", "No warranty"],
    },
    professional: {
      timeEstimate: "1-2 days",
      laborCost: "$500-$1,500",
      materialsCost: "$400-$800",
      totalCost: "$900-$2,500",
      warranty: "1-2 years",
      pros: ["Professional finish", "Proper reinforcement", "Weather resistance", "Quick"],
      cons: ["Higher cost", "Scheduling required"],
    },
    factors: [
      { factor: "Cost", winner: "DIY", explanation: "Save 40-60%" },
      { factor: "Difficulty", winner: "Tie", explanation: "Patios are more DIY-friendly than driveways" },
      { factor: "Quality", winner: "Professional", explanation: "Better finishing techniques" },
    ],
  },
  {
    id: "diy-vs-pro-paver-patio",
    title: "DIY vs Professional Paver Patio",
    slug: "diy-vs-professional-paver-patio",
    description: "Compare DIY paver installation vs hiring a professional contractor",
    project: "Paver Patio",
    diy: {
      difficulty: "Medium",
      timeEstimate: "4-7 weekends",
      skillLevel: "Intermediate",
      tools: ["Plate compactor", "Paver cutter/saw", "Level and stakes", "Shovel, rake", "Rubber mallet"],
      materialsCost: "$1,000-$2,000 (200 sq ft)",
      totalCost: "$1,200-$2,500",
      savings: "$2,000-$6,000",
      pros: ["No special skills needed", "Work at your own pace", "Easy to fix mistakes", "DIY-friendly materials"],
      cons: ["Very time consuming", "Physical labor", "Need to rent equipment", "May settle unevenly"],
    },
    professional: {
      timeEstimate: "3-5 days",
      laborCost: "$2,000-$4,000",
      materialsCost: "$1,000-$2,000",
      totalCost: "$3,000-$8,000",
      warranty: "2-5 years",
      pros: ["Professional base preparation", "Proper drainage", "Cleaner installation", "Warranty"],
      cons: ["High cost", "Access to yard during construction"],
    },
    factors: [
      { factor: "Cost", winner: "DIY", explanation: "Save $2,000-$6,000" },
      { factor: "Time", winner: "Professional", explanation: "Days vs weeks of work" },
      { factor: "DIY Friendliness", winner: "DIY", explanation: "Pavers are very DIY-friendly" },
      { factor: "Base Preparation", winner: "Professional", explanation: "Critical for long-term durability" },
    ],
  },
];

export function getDIYVsProById(id: string): DIYVsProData | undefined {
  return diyVsProData.find((d) => d.id === id);
}

export function getDIYVsProBySlug(slug: string): DIYVsProData | undefined {
  return diyVsProData.find((d) => d.slug === slug);
}

export function getAllDIYVsPro(): DIYVsProData[] {
  return diyVsProData;
}
