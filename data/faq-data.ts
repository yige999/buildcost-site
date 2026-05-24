/**
 * FAQ Data for calculators
 * Used for FAQPage Schema and FAQ sections on pages
 */

export interface FAQEntry {
  question: string;
  answer: string;
}

export const calculatorFAQs: Record<string, FAQEntry[]> = {
  // Concrete Slab FAQs
  "concrete-slab": [
    {
      question: "How much concrete do I need for a 10x10 slab?",
      answer: "For a standard 4-inch thick 10x10 slab, you need approximately 1.85 cubic yards (50 cubic feet) of concrete. This equals about 84 bags of 80lb concrete or 112 bags of 60lb concrete. Always add 10% waste factor for safety.",
    },
    {
      question: "How many 80lb bags of concrete for a yard?",
      answer: "One cubic yard of concrete requires approximately 45 bags of 80lb concrete. Each 80lb bag yields about 0.60 cubic feet of concrete, and there are 27 cubic feet in a cubic yard (27 ÷ 0.60 = 45 bags).",
    },
    {
      question: "What thickness should a concrete slab be?",
      answer: "Standard thickness varies by application: patios and walkways use 4 inches, driveways use 4-6 inches, garage floors use 6 inches, and shed slabs use 4 inches. Heavy-duty commercial applications may require 8-12 inches.",
    },
    {
      question: "How much does a yard of concrete cost?",
      answer: "Concrete prices vary by location but typically range from $125 to $150 per cubic yard for standard 3000 psi concrete. Higher strength concrete (4000+ psi) costs $15-30 more per yard. Delivery fees may apply for small orders.",
    },
    {
      question: "Should I use wire mesh or rebar in concrete?",
      answer: "Wire mesh helps control cracking and is good for interior slabs. Rebar provides structural reinforcement and is essential for driveways, garage floors, and structural slabs. Many contractors use both for maximum strength.",
    },
  ],

  // Concrete Wall FAQs
  "concrete-wall": [
    {
      question: "How do I calculate concrete for a wall?",
      answer: "Calculate wall concrete by multiplying length × height × thickness, then dividing by 27 to convert to cubic yards. For example, a 20ft long × 8ft high × 8 inch thick wall requires approximately 3.95 cubic yards of concrete.",
    },
    {
      question: "What is the standard thickness for a concrete wall?",
      answer: "Standard foundation walls are 8 inches thick for residential construction. Basement walls may be 10-12 inches thick depending on soil conditions and height. Retaining walls typically start at 8 inches for heights under 4 feet.",
    },
    {
      question: "How much concrete do I need for a retaining wall?",
      answer: "For a retaining wall, multiply total length × height × thickness and divide by 27. A 20ft long × 4ft high × 8 inch thick retaining wall needs about 1.98 cubic yards. Add 10% waste and consider reinforcement requirements for walls over 3 feet tall.",
    },
    {
      question: "Do I need rebar in a concrete wall?",
      answer: "Yes, most concrete walls require rebar reinforcement. Vertical rebar is typically spaced 16-24 inches on center, with horizontal bars at 16-24 inch intervals. Retaining walls, foundation walls, and basement walls all require rebar for structural integrity. Consult an engineer for specific requirements.",
    },
  ],

  // Round Column FAQs
  "concrete-column": [
    {
      question: "How do I calculate concrete for a round column?",
      answer: "Calculate round column concrete using the formula: π × radius² × height. For a 12-inch diameter column that is 10 feet tall, you need approximately 0.29 cubic yards of concrete.",
    },
    {
      question: "How much concrete for a 12-inch diameter sonotube?",
      answer: "A 12-inch diameter sonotube requires 0.79 cubic feet of concrete per linear foot. For a 10-foot tall sonotube, you need 7.85 cubic feet or approximately 0.29 cubic yards of concrete.",
    },
  ],

  // Square Column FAQs
  "concrete-square-column": [
    {
      question: "How do I calculate concrete for a square column?",
      answer: "Calculate square column concrete by multiplying side length × side length × height. For a 12×12 inch column that is 10 feet tall, you need approximately 0.37 cubic yards of concrete.",
    },
    {
      question: "How many bags of concrete for a 4x4 post?",
      answer: "A typical 4x4 post requires a 12-inch diameter hole, 2-3 feet deep. This requires approximately 3-5 bags of 80lb concrete per post, depending on hole depth and diameter.",
    },
  ],

  // Footing FAQs
  "concrete-footing": [
    {
      question: "How deep should concrete footings be?",
      answer: "Concrete footings must extend below the frost line to prevent heaving. In most U.S. climates, this means 36-48 inches deep. In warmer regions (no frost), footings may only need to be 12-24 inches deep. Always check your local building code for the required depth.",
    },
    {
      question: "How much concrete for deck footings?",
      answer: "A typical deck footing uses a 12-inch diameter sonotube 36-48 inches deep, requiring 2-4 bags of 80lb concrete per footing. For a 12×16 deck with 8 footings, plan for 16-32 bags total depending on depth.",
    },
    {
      question: "Do footings need to be below the frost line?",
      answer: "Yes, in areas with freezing temperatures, footings must extend below the frost line to prevent frost heave from cracking the structure. Frost line depth varies by region — from 12 inches in the South to 60+ inches in northern states. Check local codes.",
    },
    {
      question: "What size footing do I need for a post?",
      answer: "For a 4×4 post, use a footing at least 12 inches in diameter (or 12×12 square). For 6×6 posts, use 16-18 inch diameter footings. The footing should be 6 inches wider than the post on all sides. Depth depends on frost line and load requirements.",
    },
  ],

  // Concrete Steps FAQs
  "concrete-steps": [
    {
      question: "What is the standard size for concrete steps?",
      answer: "Standard concrete steps have a 7-8 inch rise and a 10-12 inch run. The width should match the door width or walkway, typically 36-48 inches minimum. The platform should be at least as wide as the door and 36-48 inches deep.",
    },
    {
      question: "How much concrete for a set of steps?",
      answer: "A standard set of 3 steps (36 inches wide, 10 inch run, 7 inch rise) requires approximately 0.5 cubic yards of concrete. Including a 48×36 inch landing adds another 0.2 cubic yards.",
    },
    {
      question: "How many steps before a landing is required?",
      answer: "Most building codes require a landing after 12-15 feet of vertical rise. A typical 7-inch rise means about 20 steps maximum before a landing is required. Check local codes for specific requirements.",
    },
  ],

  // Curb & Gutter FAQs
  "concrete-curb-gutter": [
    {
      question: "What are standard curb dimensions?",
      answer: "Standard curbs are 6-8 inches tall and 6 inches wide. Gutters are typically 12-18 inches wide and 4-6 inches thick. Combination curb and gutter sections vary by municipality.",
    },
    {
      question: "How much concrete for 100 linear feet of curb?",
      answer: "100 linear feet of standard 6×6 inch curb requires approximately 1.11 cubic yards of concrete. Adding a standard 12×4 inch gutter brings the total to approximately 2.78 cubic yards.",
    },
  ],

  // Circle/Cylinder FAQs
  "concrete-circle": [
    {
      question: "How do I calculate concrete for a circle?",
      answer: "Calculate circular slab concrete using: π × radius² × thickness. For a 10-foot diameter circle with 4-inch thickness, you need approximately 0.96 cubic yards of concrete.",
    },
    {
      question: "How much concrete for a 10-foot round pad?",
      answer: "A 10-foot diameter round pad with 4-inch thickness requires approximately 0.96 cubic yards of concrete. With 10% waste, order 1.06 cubic yards or about 48 bags of 80lb concrete.",
    },
  ],

  // Block Calculator FAQs
  "concrete-block": [
    {
      question: "How many concrete blocks per wall?",
      answer: "Standard 8x8x16 concrete blocks cover approximately 1.125 square feet each including mortar joints. For a 100 square foot wall, you need approximately 89 blocks. Add 5-10% for waste and breakage.",
    },
    {
      question: "How much does a concrete block cost?",
      answer: "Standard concrete blocks cost $1.50-$3.00 each depending on type and location. Specialty blocks (decorative, split-face, etc.) cost $3-$6 each. Prices vary by region and quantity.",
    },
    {
      question: "How many blocks on a pallet?",
      answer: "A standard pallet contains 72-90 standard 8x8x16 concrete blocks, weighing approximately 2,400-3,000 pounds. Check with your supplier for specific quantities.",
    },
  ],

  // Post Hole FAQs
  "concrete-post-hole": [
    {
      question: "How much concrete for a fence post?",
      answer: "A typical 4x4 fence post requires a hole 8-12 inches in diameter and 24-36 inches deep. This requires approximately 2-4 bags of 80lb concrete per post, depending on hole dimensions.",
    },
    {
      question: "How deep should a post hole be?",
      answer: "Post holes should be dug below the frost line—typically 24-36 inches deep in most climates. For gate posts or heavy-duty applications, go 36-48 inches deep. The hole diameter should be 3x the post width.",
    },
    {
      question: "Should I set posts in concrete?",
      answer: "Concrete provides the most stable and durable post setting. For fences, decks, and structures, concrete is recommended. For temporary or lightweight applications, gravel or tamped dirt may be sufficient.",
    },
  ],

  // Rebar FAQs
  "concrete-rebar": [
    {
      question: "How do I calculate rebar for a concrete slab?",
      answer: "Divide the slab length by the rebar spacing to get the number of bars in one direction, then repeat for the other direction. For a 10x10 slab with 16-inch spacing: 10ft ÷ 1.33ft = 8 bars each way, totaling 16 bars. Each bar is 10ft long, so you need 160 linear feet of rebar.",
    },
    {
      question: "What size rebar should I use?",
      answer: "#3 rebar (3/8 inch) is used for light-duty slabs like patios and walkways. #4 rebar (1/2 inch) is standard for driveways, garage floors, and most residential slabs. #5 rebar (5/8 inch) is used for heavy-duty applications like commercial floors and structural foundations.",
    },
    {
      question: "How far apart should rebar be spaced?",
      answer: "Standard rebar spacing is 16-18 inches on center for residential slabs. For driveways and garage floors, use 16-inch spacing. Light-duty patios may use 24-inch spacing. Heavily loaded slabs should use 12-inch spacing. Always overlap bars by at least 30x the bar diameter at joints.",
    },
    {
      question: "How do I calculate rebar overlap (lap length)?",
      answer: "For #4 rebar in 3000 psi concrete, the lap length is approximately 24 inches. The general rule is 30-40 times the bar diameter. For #3 rebar, lap 12-16 inches. For #4 rebar, lap 18-24 inches. For #5 rebar, lap 24-30 inches. Check local codes for specific requirements.",
    },
    {
      question: "How much does rebar weigh?",
      answer: "Rebar weight per linear foot: #3 = 0.376 lbs/ft, #4 = 0.668 lbs/ft, #5 = 1.043 lbs/ft. A standard 20ft stick of #4 rebar weighs about 13.4 lbs. For a 10x10 slab with #4 rebar at 16-inch spacing, you need approximately 134 lbs of rebar.",
    },
  ],

  // Concrete Driveway FAQs
  "concrete-driveway": [
    {
      question: "How thick should a concrete driveway be?",
      answer: "Standard residential driveways should be 4-5 inches thick. For heavier vehicles like trucks or RVs, use 5-6 inches. The base beneath should be 4-6 inches of compacted gravel. Thinner driveways are more likely to crack under load.",
    },
    {
      question: "Do I need rebar or wire mesh in a driveway?",
      answer: "Wire mesh (6×6 W1.4/1.4) is the minimum reinforcement for residential driveways. For longer driveways or heavy vehicle use, use #4 rebar at 16-18 inch spacing. Rebar provides stronger reinforcement and better crack control than wire mesh alone.",
    },
    {
      question: "How do I calculate concrete for a driveway?",
      answer: "Multiply length × width × thickness and divide by 27 for cubic yards. For a 20×40 driveway at 5 inches thick: 20 × 40 × (5/12) = 333 cubic feet ÷ 27 = 12.35 cubic yards. Add 10% waste for a total order of about 13.5 cubic yards.",
    },
    {
      question: "How far apart should control joints be in a driveway?",
      answer: "Space control joints no more than 2-3 times the slab thickness in feet. For a 5-inch thick driveway, space joints 10-15 feet apart. For a 4-inch driveway, space them 8-12 feet apart. Joints should be cut 1/4 of the slab depth within 24 hours of pouring.",
    },
    {
      question: "Should I use ready-mix or bags for a driveway?",
      answer: "For driveways over 3-4 cubic yards, ready-mix delivery is cheaper and faster than bags. A 20×40 driveway at 5 inches needs 12+ cubic yards (540+ bags of 80lb concrete). Ready-mix at $130-$150/yard with delivery is significantly more practical for this volume.",
    },
  ],

  // Sonotube FAQs
  "concrete-sonotube": [
    {
      question: "How do I calculate concrete for sonotubes?",
      answer: "Use the formula: π × radius² × depth. For an 8-inch diameter sonotube 4 feet deep: π × (4/12)² × 4 = 1.40 cubic feet per tube. Divide by 0.60 for 80lb bags = approximately 2.3 bags per sonotube.",
    },
    {
      question: "What are common sonotube sizes?",
      answer: "Common sonotube diameters are 6, 8, 10, 12, and 16 inches. For deck footings, 8-12 inch diameters are standard. For fence posts, 6-8 inch tubes work well. Larger diameters (12-16 inches) are used for pergolas, porches, and heavier structures.",
    },
    {
      question: "How many bags of concrete per sonotube?",
      answer: "An 8-inch diameter sonotube needs about 0.35 cubic feet per linear foot. For a 4-foot deep tube: 1.39 cubic feet = approximately 2.3 bags of 80lb concrete. A 12-inch diameter sonotube at 4 feet deep needs about 3.14 cubic feet = approximately 5.2 bags of 80lb concrete.",
    },
    {
      question: "How deep should sonotubes be below the frost line?",
      answer: "Sonotubes must extend below the local frost line depth. In northern states, this can be 36-60+ inches. In southern states, 12-24 inches may suffice. The tube should extend 4-6 inches above ground level to keep the concrete out of soil contact.",
    },
    {
      question: "Should I use sonotubes or poured footings?",
      answer: "Sonotubes are ideal for deck posts, fence posts, and small structure footings — they create clean, round piers with minimal excavation. Poured footings (square/rectangular forms) are better for continuous wall foundations and larger structures. Sonotubes are faster and easier for individual post supports.",
    },
  ],

  // Roofing Shingle FAQs
  "roofing-shingle": [
    {
      question: "How many shingles in a bundle?",
      answer: "A bundle of asphalt shingles typically covers 33.3 square feet. Three bundles equal one square (100 sq ft). For a 2,000 sq ft roof, you need approximately 60 bundles or 20 squares of shingles.",
    },
    {
      question: "How much does a roof replacement cost?",
      answer: "Roof replacement costs vary by location and materials. Asphalt shingles typically cost $3-$7 per square foot installed. For a 2,000 sq ft roof, expect to pay $6,000-$14,000. Get multiple quotes from local contractors.",
    },
    {
      question: "How long do asphalt shingles last?",
      answer: "Standard 3-tab shingles last 15-20 years. Architectural/dimensional shingles last 25-30 years. Premium shingles can last 50 years. Proper ventilation and installation affect longevity.",
    },
    {
      question: "What is a roofing square?",
      answer: "A roofing square equals 100 square feet of roof area. Roofers use squares as the standard measurement unit. A 2,400 sq ft roof equals 24 squares.",
    },
    {
      question: "How do I calculate roof pitch?",
      answer: "Roof pitch is calculated as rise over run. For example, a roof that rises 6 inches for every 12 inches of horizontal run has a 6/12 pitch. Measure from the attic or use a pitch gauge on the roof.",
    },
  ],

  // Hardwood Flooring FAQs
  "flooring-hardwood": [
    {
      question: "How much hardwood flooring do I need?",
      answer: "Calculate the square footage of your room (length × width), then add 10% for waste. For example, a 12×15 room requires 180 sq ft plus 10% waste = 198 sq ft of hardwood flooring. This accounts for cuts, defects, and pattern matching.",
    },
    {
      question: "What is the standard hardwood floor board width?",
      answer: "Standard hardwood flooring comes in widths ranging from 2-1/4 inches to 5 inches. Narrow strips (2-1/4\" to 3\") create a traditional look, while wider planks (4\" to 5+\" or wider) create a more modern, spacious appearance.",
    },
    {
      question: "How many hardwood boards in a box?",
      answer: "Hardwood flooring typically comes in boxes covering 20-25 square feet. The number of boards per box varies by board dimensions. For 3-inch wide, 3-foot long boards, a 20 sq ft box contains approximately 32 boards.",
    },
    {
      question: "Should I use nails or glue for hardwood?",
      answer: "Solid hardwood flooring is typically nailed down over a wood subfloor. Engineered hardwood can be floated, glued, or stapled depending on the product. Follow manufacturer recommendations for best results.",
    },
    {
      question: "How much does hardwood flooring cost?",
      answer: "Hardwood flooring costs $3-$15 per square foot for materials, depending on species and quality. Installation adds $3-$8 per square foot. Total installed cost ranges from $6-$23+ per square foot.",
    },
  ],

  // Laminate Flooring FAQs
  "flooring-laminate": [
    {
      question: "How much laminate flooring do I need?",
      answer: "Measure your room's square footage and add 10% for waste. For example, a 10×12 room (120 sq ft) requires 132 sq ft of laminate. Always round up to full boxes, which typically contain 20-25 sq ft each.",
    },
    {
      question: "How many planks in a box of laminate?",
      answer: "A typical box of laminate flooring covers 20-25 square feet and contains 8-12 planks depending on plank dimensions. Standard 47-inch long planks in a 20 sq ft box contain approximately 9 planks.",
    },
    {
      question: "Do I need underlayment for laminate flooring?",
      answer: "Most laminate flooring requires underlayment for moisture protection and sound reduction. Many products include pre-attached underlayment. If not, purchase a separate underlayment roll for best results.",
    },
    {
      question: "Can I install laminate over concrete?",
      answer: "Yes, laminate can be installed over concrete if the surface is clean, dry, and level. Always use a moisture barrier underlayment when installing over concrete to prevent moisture damage.",
    },
    {
      question: "How much does laminate flooring cost?",
      answer: "Laminate flooring costs $1-$6 per square foot for materials. Installation adds $2-$5 per square foot. Total installed cost ranges from $3-$11 per square foot, making it a budget-friendly alternative to hardwood.",
    },
  ],

  // Tile Flooring FAQs
  "flooring-tile": [
    {
      question: "How many tiles do I need for my floor?",
      answer: "Calculate your room's square footage and divide by the area of one tile. For example, a 50 sq ft room using 12×12 tiles (1 sq ft each) needs 50 tiles plus 10-15% waste = 55-58 tiles total.",
    },
    {
      question: "How much grout do I need?",
      answer: "Grout coverage depends on tile size and joint width. For standard 12×12 tiles with 1/4\" grout lines, you need approximately 1-1.5 lbs of grout per 10 sq ft. A 50 sq ft floor requires about 5-8 lbs of grout.",
    },
    {
      question: "What size grout line should I use?",
      answer: "Standard grout lines are 1/4\" for floor tiles. Smaller tiles may use 1/8\" grout lines. Larger format tiles (18\"+) may use 3/8\" grout lines. Consistent spacing ensures professional results.",
    },
    {
      question: "How much tile adhesive do I need?",
      answer: "Thin-set mortar coverage is typically 50-75 sq ft per 50lb bag for standard floor tiles. Larger tiles and uneven floors may require more. A 100 sq ft floor typically needs 2-3 bags of thin-set.",
    },
    {
      question: "Should I include extra tiles for waste?",
      answer: "Yes, always order 10-15% extra tile for waste, cuts, and future repairs. Tile lots can vary between shipments, so keeping spare tiles from the original batch ensures color matches if repairs are needed later.",
    },
  ],

  // Carpet FAQs
  "flooring-carpet": [
    {
      question: "How much carpet do I need?",
      answer: "Measure your room's square footage, then add 10-15% for waste and seam placement. Carpet comes in standard 12-foot and 15-foot widths, so you may need to calculate based on full-width strips rather than exact square footage.",
    },
    {
      question: "What is standard carpet roll width?",
      answer: "Carpet typically comes in 12-foot rolls, with 13.5-foot and 15-foot widths also available. Wider widths reduce seams. Choose a roll width that minimizes cuts for your room dimensions.",
    },
    {
      question: "Do I need carpet padding?",
      answer: "Yes, carpet padding is essential for comfort, insulation, and extending carpet life. Standard pad is 7/16\" thick with 6-8 lb density. Budget $2-$5 per square foot for padding depending on quality.",
    },
    {
      question: "How much does carpet cost?",
      answer: "Carpet costs $1-$6 per square foot for materials. Padding adds $0.50-$1 per sq ft. Installation costs $0.50-$2 per sq ft. Total installed cost ranges from $2-$9+ per square foot.",
    },
    {
      question: "How do I measure for carpet on stairs?",
      answer: "Measure each stair's tread (depth) and riser (height), add them together, then multiply by the stair width. Add 10% extra. A standard staircase requires approximately 12-15 square yards of carpet including padding.",
    },
  ],

  // Vinyl Flooring FAQs
  "flooring-vinyl": [
    {
      question: "How much vinyl flooring do I need?",
      answer: "Measure your room's square footage and add 10% for waste. For LVP/LVT in boxes, round up to full boxes. For sheet vinyl, calculate based on roll width (typically 12 feet) and add enough for full-width strips.",
    },
    {
      question: "What is the difference between LVP and LVT?",
      answer: "LVP (Luxury Vinyl Plank) looks like wood with long plank dimensions. LVT (Luxury Vinyl Tile) looks like stone or ceramic with square or rectangular tiles. Both offer waterproof durability and easy installation.",
    },
    {
      question: "How many planks in a box of vinyl flooring?",
      answer: "A typical box of LVP/LVT covers 20-30 square feet and contains 6-12 planks depending on dimensions. Standard 48-inch long planks in a 20 sq ft box contain approximately 6-8 planks.",
    },
    {
      question: "Can I install vinyl flooring over existing floor?",
      answer: "Yes, vinyl can be installed over many existing floors if they are clean, dry, level, and securely attached. Embossing leveler may be needed over textured floors. Follow manufacturer guidelines.",
    },
    {
      question: "How much does vinyl flooring cost?",
      answer: "Vinyl flooring costs $2-$7 per square foot for materials. Installation adds $1-$3 per square foot. Total installed cost ranges from $3-$10 per square foot, making it an affordable, waterproof option.",
    },
  ],

  // Baseboard & Trim FAQs
  "flooring-baseboard": [
    {
      question: "How do I calculate baseboard needed?",
      answer: "Measure the perimeter of your room and subtract the width of any door openings. Add 5-10% for waste. For example, a 12×15 room has a 54 ft perimeter minus 3 ft for a door = 51 ft of baseboard needed.",
    },
    {
      question: "What is standard baseboard height?",
      answer: "Standard baseboard heights are 3-4 inches for modern homes and 4-6 inches for traditional homes. Taller baseboards (7-8 inches) create a more formal, high-end appearance.",
    },
    {
      question: "How many baseboards in a bundle?",
      answer: "Baseboard trim typically comes in 8-16 foot lengths. A bundle of 10 pieces at 8 feet each provides 80 linear feet. Calculate your needs and add 10% for cuts and waste.",
    },
    {
      question: "Should I use corner blocks or mitered corners?",
      answer: "Corner blocks are easier for DIY installation and hide imperfect cuts. Mitered corners (45° angles) provide a more professional, seamless look but require precise cutting and more skill.",
    },
    {
      question: "How much does baseboard installation cost?",
      answer: "Baseboard materials cost $0.50-$3 per linear foot. Professional installation adds $1-$3 per linear foot. Total cost ranges from $1.50-$6 per linear foot installed.",
    },
  ],

  // Floor Area Calculator FAQs
  "flooring-floor-area": [
    {
      question: "How do I calculate total floor area?",
      answer: "Multiply length × width for each room, then add all room areas together. For example, a 12×15 bedroom (180 sq ft) plus a 10×12 office (120 sq ft) equals 300 sq ft total flooring area.",
    },
    {
      question: "Do I include closets in floor area?",
      answer: "Yes, include all floor areas that will receive flooring—closets, hallways, and alcoves. Measure each space separately and add to your total for accurate material estimates.",
    },
    {
      question: "How do I measure odd-shaped rooms?",
      answer: "Break irregular rooms into rectangles, measure each separately, then add them together. For L-shaped rooms, measure each leg as a separate rectangle. Triangular areas use (base × height) ÷ 2.",
    },
    {
      question: "What waste factor should I use?",
      answer: "Standard waste factor is 10% for most flooring. Use 15% for diagonal installations, patterned layouts, or rooms with many corners and cuts. Larger rooms may require less waste than smaller rooms.",
    },
  ],
};

/**
 * Get FAQs for a specific calculator
 */
export function getFAQs(calculatorId: string): FAQEntry[] {
  return calculatorFAQs[calculatorId] || [];
}

/**
 * Get all calculator IDs that have FAQs
 */
export function getCalculatorIdsWithFAQs(): string[] {
  return Object.keys(calculatorFAQs);
}

/**
 * Common construction FAQs applicable to all calculators
 */
export const commonFAQs: FAQEntry[] = [
  {
    question: "How accurate are these construction calculators?",
    answer: "Our calculators provide accurate estimates based on standard construction formulas. However, actual material requirements may vary due to site conditions, waste factors, and material variations. Always add 5-10% extra material for waste and unexpected needs.",
  },
  {
    question: "What is a waste factor and why do I need it?",
    answer: "A waste factor accounts for material lost during cutting, spillage, uneven surfaces, and formwork irregularities. Adding 5-10% for standard projects and up to 15-20% for complex projects ensures you have enough material to complete the job.",
  },
  {
    question: "Should I include a waste factor in my calculations?",
    answer: "Yes, always include a waste factor. Experienced contractors never calculate exact material needs without a buffer. Running short mid-project can cause delays and increased costs due to delivery fees or price changes.",
  },
];
