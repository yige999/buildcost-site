/**
 * FAQ Hub Data for Programmatic SEO
 */

export interface FAQHubData {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  faqs: Array<{
    question: string;
    answer: string;
    related?: string[];
  }>;
}

export const faqHubs: FAQHubData[] = [
  {
    id: "concrete-faq",
    title: "Concrete FAQ - Common Questions Answered",
    slug: "concrete-faq",
    description: "Answers to the most frequently asked questions about concrete, mixing, pouring, and curing",
    category: "Concrete",
    faqs: [
      {
        question: "How long does concrete take to cure?",
        answer: "Concrete reaches about 70% of its full strength in 7 days and 100% in 28 days. However, you can walk on it after 24-48 hours and drive on it after 7-10 days. Full curing continues for months, but 28 days is considered the standard cure time.",
        related: ["How long until I can drive on concrete?", "Concrete curing time by temperature"],
      },
      {
        question: "How long until I can drive on new concrete?",
        answer: "Wait at least 7 days before driving on a standard 4-6 inch driveway slab. For heavier vehicles or thinner slabs, wait 10-14 days. Winter pours require longer wait times - up to 30 days in very cold conditions.",
        related: ["Concrete driveway cure time", "Cold weather concreting"],
      },
      {
        question: "Can you pour concrete in the rain?",
        answer: "Light rain won't harm freshly poured concrete, but heavy rain can damage the surface. If rain is forecast, postpone the pour or have covers ready. If caught in rain, cover the concrete with tarps immediately.",
        related: ["Weather conditions for pouring concrete"],
      },
      {
        question: "How much does a yard of concrete cover?",
        answer: "One cubic yard of concrete covers 27 square feet at 12 inches thick, 54 sq ft at 6 inches thick, 81 sq ft at 4 inches thick, and 108 sq ft at 3 inches thick. This is the most common measurement used when ordering ready-mix concrete.",
        related: ["Concrete coverage calculator", "Cubic yards to square feet"],
      },
      {
        question: "What happens if it rains after pouring concrete?",
        answer: "Light rain within a few hours of pouring usually won't cause damage. Heavy rain can wash out cement, create surface blemishes, or weaken the surface. If rain occurs before concrete sets, cover it or trowel the surface once rain stops.",
        related: ["Concrete damage from rain"],
      },
      {
        question: "Do you need rebar in concrete?",
        answer: "Rebar is not required for all projects but provides structural strength. Driveways, garage floors, and structural slabs should have rebar. Patios and walkways can use wire mesh or fiber mesh instead. Rebar should be placed in the lower third of the slab for maximum effectiveness.",
        related: ["Wire mesh vs rebar", "Concrete reinforcement"],
      },
      {
        question: "How many 80lb bags of concrete in a yard?",
        answer: "One cubic yard of concrete requires approximately 45 bags of 80lb concrete. Each 80lb bag yields about 0.60 cubic feet. For comparison, it takes about 60 bags of 60lb concrete to equal one cubic yard.",
        related: ["80lb vs 60lb concrete bags", "Concrete bag calculator"],
      },
      {
        question: "What PSI concrete for a driveway?",
        answer: "Use 4000 PSI concrete for residential driveways. This provides adequate strength for vehicles and resists cracking. 3000 PSI may be sufficient for light vehicles, but 4000 PSI is the recommended minimum for durability.",
        related: ["Concrete strength guide", "3000 vs 4000 vs 5000 PSI"],
      },
      {
        question: "How thick should a concrete driveway be?",
        answer: "Standard residential driveways should be 4-6 inches thick. 4 inches is sufficient for passenger cars, while 6 inches is recommended for heavier vehicles like SUVs and trucks. The edges should be thickened to 8-12 inches to prevent chipping.",
        related: ["Standard driveway dimensions", "Driveway construction"],
      },
      {
        question: "Should I wet concrete while curing?",
        answer: "Yes, keeping concrete moist during curing improves strength. Spray the surface with water 2-3 times per day for the first week, or cover with wet burlap, plastic sheets, or curing compound. Never let concrete dry out completely during the first 7 days.",
        related: ["Concrete curing methods", "Concrete curing time"],
      },
    ],
  },
  {
    id: "concrete-cost-faq",
    title: "Concrete Cost FAQ",
    slug: "concrete-cost-faq",
    description: "Frequently asked questions about concrete pricing, installation costs, and money-saving tips",
    category: "Concrete",
    faqs: [
      {
        question: "How much is a yard of concrete?",
        answer: "The average cost of a cubic yard of ready-mix concrete is $125-$150. This is for standard 3000-4000 PSI concrete. Higher strength concrete (5000+ PSI) costs $15-$30 more per yard. Delivery fees may apply for small orders under 5 cubic yards.",
        related: ["Concrete cost per yard", "Ready-mix prices"],
      },
      {
        question: "How much does a concrete driveway cost?",
        answer: "A concrete driveway costs $6-$18 per square foot installed, or $3,000-$9,000 for a standard 2-car (500 sq ft) driveway. Basic broom finish is cheapest, while stamped or colored concrete increases costs significantly.",
        related: ["Driveway cost calculator", "Stamped concrete cost"],
      },
      {
        question: "Is concrete cheaper than pavers?",
        answer: "Yes, concrete is generally 40-60% cheaper than pavers for material and installation combined. A concrete driveway costs $6-$18/sq ft while pavers cost $15-$30/sq ft. However, pavers may last longer and are easier to repair.",
        related: ["Concrete vs pavers cost", "Driveway material comparison"],
      },
      {
        question: "How much does a 10x10 concrete slab cost?",
        answer: "A 10x10 foot concrete slab (4 inches thick) requires about 1.85 cubic yards of concrete. At $125-$150 per yard, material cost is $230-$280. Professional installation adds $500-$1,500 in labor, for a total of $730-$1,780.",
        related: ["10x10 slab calculator", "Small concrete slab cost"],
      },
      {
        question: "How much does a 20x20 concrete slab cost?",
        answer: "A 20x20 foot concrete slab (4 inches thick) requires about 7.4 cubic yards of concrete. Material cost is $925-$1,110. Professional installation with base preparation typically costs $2,000-$4,000, for a total of $2,925-$5,110.",
        related: ["20x20 slab calculator", "Large concrete slab cost"],
      },
      {
        question: "How much does a 24x24 garage slab cost?",
        answer: "A 24x24 foot garage slab (6 inches thick) requires about 12.8 cubic yards of concrete. Material cost is $1,600-$1,920. Professional installation with proper footings and reinforcement typically costs $3,500-$7,000.",
        related: ["Garage slab cost", "Garage foundation pricing"],
      },
    ],
  },
  {
    id: "roofing-faq",
    title: "Roofing FAQ - Common Questions",
    slug: "roofing-faq",
    description: "Answers to frequently asked questions about roofing materials, installation, and costs",
    category: "Roofing",
    faqs: [
      {
        question: "How many shingles in a bundle?",
        answer: "A bundle of asphalt shingles typically covers 33.3 square feet. Three bundles equal one square (100 sq ft). Most roofs require 3-4 bundles per square depending on shingle type and roof complexity.",
        related: ["Shingle coverage calculator", "Roofing material calculator"],
      },
      {
        question: "How long do asphalt shingles last?",
        answer: "Standard 3-tab shingles last 15-20 years. Architectural/dimensional shingles last 25-30 years. Premium shingles can last 40-50 years. Proper ventilation and installation affect longevity significantly.",
        related: ["Shingle lifespan", "Roofing material durability"],
      },
      {
        question: "What is a roofing square?",
        answer: "A roofing square equals 100 square feet of roof area. This is the standard measurement unit used by roofers. A 2,400 sq ft roof would be 24 squares.",
        related: ["Roof measurement guide"],
      },
    ],
  },
];

export function getFAQHubById(id: string): FAQHubData | undefined {
  return faqHubs.find((f) => f.id === id);
}

export function getFAQHubBySlug(slug: string): FAQHubData | undefined {
  return faqHubs.find((f) => f.slug === slug);
}

export function getAllFAQHubs(): FAQHubData[] {
  return faqHubs;
}

export function getAllFAQIds(): string[] {
  return faqHubs.map((f) => f.id);
}
