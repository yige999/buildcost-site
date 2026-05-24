/**
 * Guide Data for Programmatic SEO
 * Creates how-to and seasonal guide pages
 */

export interface GuideData {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: "seasonal" | "how-to" | "safety" | "maintenance";
  content: {
    introduction: string;
    sections: Array<{
      title: string;
      content: string[];
    }>;
    tips: string[];
    warnings?: string[];
  };
  related: string[];
}

export const guides: GuideData[] = [
  // ==================== SEASONAL GUIDES ====================
  {
    id: "pouring-concrete-in-summer",
    title: "Pouring Concrete in Summer: Hot Weather Tips",
    slug: "pouring-concrete-in-summer",
    description: "How to pour concrete in hot weather. Tips for preventing rapid drying and ensuring proper curing in high temperatures.",
    category: "seasonal",
    content: {
      introduction: "Pouring concrete in hot weather (above 85°F or 29°C) requires special precautions to prevent rapid drying, cracking, and reduced strength.",
      sections: [
        {
          title: "Hot Weather Concreting Challenges",
          content: [
            "Rapid evaporation can cause shrinkage cracks",
            "High temperatures accelerate curing, reducing long-term strength",
            "Heat makes concrete difficult to finish properly",
            "Sun exposure can cause surface drying before finishing is complete",
          ],
        },
        {
          title: "Preparation Tips",
          content: [
            "Schedule pours for early morning (5-7 AM) when temperatures are lowest",
            "Dampen the subgrade before pouring to prevent moisture absorption",
            "Use sunshades or tarps to protect fresh concrete from direct sunlight",
            "Have adequate crew - hot weather accelerates setting time",
          ],
        },
        {
          title: "During the Pour",
          content: [
            "Keep concrete temperature below 90°F during placement",
            "Use ice as part of mixing water to lower concrete temperature",
            "Work quickly but thoroughly - hot weather reduces workable time",
            "Have curing materials ready before the pour begins",
            "Use evaporative retarders or curing compounds",
          ],
        },
        {
          title: "Curing in Hot Weather",
          content: [
            "Begin curing immediately after finishing (within 30 minutes)",
            "Use wet burlap, curing blankets, or plastic sheets",
            "Keep concrete continuously moist for 7 days minimum",
            "Consider using curing compounds for large areas",
            "Monitor for surface cracking during curing period",
          ],
        },
      ],
      tips: [
        "Ideal concrete temperature for placement: 50-60°F",
        "Maximum concrete temperature: 90°F",
        "Add 2-3 inches to slab thickness in extreme heat",
        "Use Type III cement which resists heat better",
        "Limit pours to 50°F ambient or plan special precautions",
      ],
      warnings: [
        "Never add water to concrete to increase workability in heat",
        "Surface drying can occur in under 30 minutes in extreme heat",
        "Hot weather concreting requires experienced crews",
      ],
    },
    related: ["pouring-concrete-in-winter", "concrete-curing-time", "concrete-cracks"],
  },
  {
    id: "pouring-concrete-in-rain",
    title: "Pouring Concrete in the Rain: What You Need to Know",
    slug: "pouring-concrete-in-rain",
    description: "Can you pour concrete in the rain? How rain affects fresh concrete and what precautions to take.",
    category: "seasonal",
    content: {
      introduction: "Light rain generally won't harm concrete, but heavy rain during or immediately after pouring can cause serious damage to the surface and strength.",
      sections: [
        {
          title: "Can You Pour Concrete in Rain?",
          content: [
            "Light drizzle: Usually acceptable if cover is ready",
            "Moderate rain: Can cause surface damage, not recommended",
            "Heavy rain: Will wash out cement and ruin the surface - postpone pour",
            "Rain during finishing: Will create surface blemishes and weak spots",
          ],
        },
        {
          title: "If Rain Is Forecast",
          content: [
            "Postpone the pour if heavy rain is predicted",
            "Have tarps or plastic sheeting ready to cover fresh concrete",
            "Ensure proper drainage so water runs off the slab",
            "Keep finishers on standby to address surface issues",
          ],
        },
        {
          title: "If Rain Starts During Pour",
          content: [
            "Stop pouring and cover immediately with tarps",
            "Do not attempt to finish while rain is actively falling",
            "Protect edges to prevent water from getting underneath",
            "After rain stops, assess surface damage before continuing",
          ],
        },
        {
          title: "Repairing Rain Damage",
          content: [
            "Light surface marks: Can often be troweled out once surface dries",
            "Washed out areas: May require patching or resurfacing",
            "Severe damage: Full removal and replacement may be necessary",
            "Always document rain events for warranty purposes",
          ],
        },
      ],
      tips: [
        "Check hourly forecast before scheduling",
        "Have enough tarps to cover entire work area",
        "Weigh concrete truck driver against surface damage risk",
        "Concrete can handle rain once it reaches initial set (2-4 hours)",
      ],
      warnings: [
        "Rain on fresh concrete before set can permanently damage surface",
        "Water can wash out cement paste creating weak spots",
        "Exposed aggregate can be washed away by heavy rain",
      ],
    },
    related: ["pouring-concrete-in-summer", "pouring-concrete-in-winter", "concrete-curing"],
  },
  {
    id: "fall-concrete-tips",
    title: "Fall Concrete Pouring: Best Practices for Autumn",
    slug: "fall-concrete-pouring-tips",
    description: "Best practices for pouring concrete in fall weather. Temperature fluctuations and preparing for winter.",
    category: "seasonal",
    content: {
      introduction: "Fall offers ideal conditions for concrete pouring in many regions, but unpredictable weather and approaching winter require planning.",
      sections: [
        {
          title: "Advantages of Fall Pouring",
          content: [
            "Moderate temperatures (50-70°F) are ideal for curing",
            "Lower humidity means longer workable time",
            "Less extreme heat stress on fresh concrete",
            "Contractors may be less busy than summer peak",
          ],
        },
        {
          title: "Fall-Specific Challenges",
          content: [
            "Rapid temperature drops can affect curing",
            "Early frost possible in northern regions",
            "Shorter daylight hours limit working time",
            "Unpredictable weather patterns",
          ],
        },
        {
          title: "Winter Preparation for Fall Pours",
          content: [
            "Include air-entrained concrete for freeze-thaw resistance",
            "Ensure proper drainage before ground freezes",
            "Use blankets or insulated covers for late-season pours",
            "Plan for extended curing time if temperatures drop",
            "Complete exterior projects before first frost",
          ],
        },
      ],
      tips: [
        "Best time: September-October in most regions",
        "Check first frost date for your area",
        "Fall is ideal for decorative work with longer working time",
        "Get ahead of spring rush by completing projects in fall",
      ],
      warnings: [
        "Monitor frost forecasts for late-season pours",
        "Concrete needs 30 days of curing before first freeze for maximum strength",
      ],
    },
    related: ["pouring-concrete-in-winter", "winter-concrete-protection"],
  },
  {
    id: "concrete-curing-time",
    title: "Concrete Curing Time Guide: How Long Does Concrete Take to Cure?",
    slug: "concrete-curing-time",
    description: "Complete guide to concrete curing times by temperature, thickness, and weather conditions.",
    category: "maintenance",
    content: {
      introduction: "Concrete curing is the process of maintaining adequate moisture and temperature for continued hydration and strength development. Proper curing significantly increases concrete's durability and strength.",
      sections: [
        {
          title: "Curing Timeline by Temperature",
          content: [
            "70°F+ F: 70% strength in 3 days, 100% in 14-21 days",
            "50-70°F: 70% strength in 7 days, 100% in 28 days",
            "40-50°F: 70% strength in 14 days, 100% in 60+ days",
            "Below 40°F: Curing slows dramatically, special measures required",
          ],
        },
        {
          title: "Curing Methods",
          content: [
            "Water curing: Sprinkling or ponding with water",
            "Wet coverings: Wet burlap, cotton mats, or rugs",
            "Plastic sheets: Leave small gaps for moisture to escape",
            "Curing compounds: Spray-on membrane-forming compounds",
            "Absorptive covers: Paper or hygroscopic blankets",
          ],
        },
        {
          title: "Curing Time by Application",
          content: [
            "Driveways: 7 days minimum, 14 days recommended",
            "Sidewalks: 3-7 days sufficient for foot traffic",
            "Patios: 7 days before placing furniture",
            "Garage slabs: 7 days before storage, 28 days for vehicles",
            "Foundations: Continuous curing through construction",
          ],
        },
        {
          title: "Testing Curing Completion",
          content: [
            "Spray water on surface - beading indicates ready",
            "Screwdriver test: Should not penetrate surface easily",
            "Calcium chloride testing: Professional moisture measurement",
            "Rebound hammer test: Professional field test",
          ],
        },
      ],
      tips: [
        "Begin curing immediately after finishing - within 30-60 minutes",
        "Keep concrete moist for first 7 days - critical period",
        "Continue curing for 28 days for maximum strength",
        "Don't seal concrete until fully cured (28+ days)",
        "Deicing salts should be avoided for first winter",
      ],
      warnings: [
        "Stopping curing too early reduces strength by up to 50%",
        "Rapid drying causes surface dusting and crazing",
        "Never let fresh concrete freeze during first 24 hours",
      ],
    },
    related: ["pouring-concrete-in-winter", "sealing-concrete", "concrete-strength"],
  },
  {
    id: "concrete-crack-prevention",
    title: "How to Prevent Concrete Cracking: Complete Guide",
    slug: "how-to-prevent-concrete-cracks",
    description: "Comprehensive guide to preventing cracks in concrete slabs, driveways, and patios.",
    category: "maintenance",
    content: {
      introduction: "While some cracking in concrete is normal, proper design, installation, and curing can minimize unsightly and structural cracks.",
      sections: [
        {
          title: "Design for Crack Prevention",
          content: [
            "Include control joints: Spaced at 2-3 times slab thickness in feet",
            "Use proper slab thickness: 4-6 inches for most applications",
            "Add reinforcement: Wire mesh or rebar for structural strength",
            "Proper subgrade preparation: Compacted, stable soil base",
            "Isolation joints: Separate from fixed structures like foundations",
          ],
        },
        {
          title: "Installation Best Practices",
          content: [
            "Never pour on frozen ground or unstable soil",
            "Include proper reinforcement with correct placement",
            "Use air-entrained concrete in freeze zones",
            "Maintain proper concrete slump (not too wet)",
            "Finish only when bleed water has disappeared",
          ],
        },
        {
          title: "Curing for Crack Prevention",
          content: [
            "Keep concrete moist for minimum 7 days",
            "Protect from rapid temperature changes",
            "Cover in extreme weather (hot or cold)",
            "Allow gradual drying and cooling",
          ],
        },
        {
          title: "Types of Concrete Cracks",
          content: [
            "Plastic shrinkage cracks: Map-like surface cracks, usually cosmetic",
            "Drying shrinkage cracks: Occur during curing, normal if controlled",
            "Settlement cracks: Caused by soil movement, structural concern",
            "Structural cracks: Exceed 1/8\" width, professional evaluation needed",
          ],
        },
      ],
      tips: [
        "Space control joints no more than 10-15 feet apart for 4\" slab",
            "Cut joints as soon as concrete can support saw without raveling",
            "Use groover too early to weaken control joint location",
            "Saw cuts should be 1/4 to 1/3 of slab thickness",
            "Rebar should be in lower third of slab, not on neutral axis",
      ],
      warnings: [
        "Cracks wider than 1/2\" may indicate structural problems",
        "Stair-step cracks in foundations require structural assessment",
        "Wide cracks with vertical displacement indicate serious issues",
      ],
    },
    related: ["concrete-curing-time", "control-joints", "rebar-vs-wire-mesh"],
  },
  {
    id: "rebar-vs-wire-mesh-concrete",
    title: "Rebar vs Wire mesh in Concrete: Which Reinforcement to Use?",
    slug: "rebar-vs-wire-mesh-concrete",
    description: "Compare rebar and wire mesh concrete reinforcement. When to use each and installation tips.",
    category: "how-to",
    content: {
      introduction: "Both rebar and wire mesh strengthen concrete, but they serve different purposes and are appropriate for different applications.",
      sections: [
        {
          title: "Wire Mesh Overview",
          content: [
            "Welded wire grid typically 6x6 or 4x4 inches",
            "Easiest to install: Roll out and use chair supports",
            "Provides crack control, not structural strength",
            "Sits in middle of slab depth",
            "Best for: Patios, sidewalks, light-duty slabs",
          ],
        },
        {
          title: "Rebar Overview",
          content: [
            "Steel reinforcing bars in various diameters (#3, #4, #5 common)",
            "Creates structural reinforcement",
            "Must be placed in lower third of slab",
            "Requires proper overlap and support",
            "Best for: Driveways, garage slabs, foundations, heavy loads",
          ],
        },
        {
          title: "When to Use Wire Mesh",
          content: [
            "Light-duty residential slabs (4\" thickness)",
            "Patios and walkways with minimal loads",
            "Crack control for decorative concrete",
            "When budget is a concern",
            "DIY projects with limited experience",
          ],
        },
        {
          title: "When to Use Rebar",
          content: [
            "Driveways and garage slabs",
            "Foundation footings and walls",
            "Any slab supporting vehicles or heavy equipment",
            "High-performance or industrial floors",
            "Areas with poor soil conditions",
          ],
        },
        {
          title: "Installation Tips",
          content: [
            "Wire mesh: Use chairs to keep mesh 2\" above subgrade",
            "Rebar: Use dobies or chairs to maintain position",
            "Overlap wire mesh 6 inches, rebar 24 inches minimum",
            "Place rebar on chairs and tie intersection points",
            "Ensure proper cover: 1.5-3\" from surface",
          ],
        },
      ],
      tips: [
        "Both can be used together for maximum strength",
        "Rebar chairs can get driven into wet concrete - pay attention",
        "Wire mesh often ends up at bottom - still provides some benefit",
        "Rebar should be placed in both directions (grid pattern)",
        "Epoxy-coated rebar resists corrosion",
      ],
      warnings: [
        "Wire mesh in the bottom of the slab provides almost no value",
        "Rebar too close to surface can rust and cause staining",
        "Rebar touching ground will corrode and fail",
      ],
    },
    related: ["concrete-reinforcement", "driveway-construction", "garage-slab"],
  },
  {
    id: "concrete-strength-guide",
    title: "Concrete PSI Guide: 3000 vs 4000 vs 5000 PSI Explained",
    slug: "concrete-psi-guide",
    description: "Understanding concrete PSI ratings and which strength to choose for different projects.",
    category: "how-to",
    content: {
      introduction: "PSI (pounds per square inch) measures concrete's compressive strength. Higher PSI means greater durability and load-bearing capacity.",
      sections: [
        {
          title: "3000 PSI Concrete",
          content: [
            "Standard residential strength",
            "Suitable for: Sidewalks, patios, footings",
            "Not recommended for: Driveways, garage floors",
            "Most economical option",
            "Cures to design strength in 28 days",
          ],
        },
        {
          title: "4000 PSI Concrete",
          content: [
            "Most common choice for residential construction",
            "Suitable for: Driveways, garage floors, slabs",
            "Good balance of strength and cost",
            "Recommended minimum for vehicle traffic",
            "Worth extra cost for durability",
          ],
        },
        {
          title: "5000+ PSI Concrete",
          content: [
            "High-strength commercial grade",
            "Suitable for: Commercial floors, heavy equipment, industrial",
            "Enhanced durability and crack resistance",
            "More expensive and faster setting (harder to finish)",
            "Often specified for premium residential projects",
          ],
        },
        {
          title: "Choosing the Right PSI",
          content: [
            "Consider the load: Foot traffic vs vehicles vs equipment",
            "Climate matters: Freeze-thaw cycles need higher PSI",
            "Thickness matters: Thinner slabs need higher PSI",
            "Soil conditions: Poor soils may need stronger concrete",
            "Budget vs longevity: Higher PSI costs more but lasts longer",
          ],
        },
      ],
      tips: [
        "4000 PSI is minimum recommended for driveways",
        "Always use air-entrained concrete in freeze zones",
        "Higher PSI doesn't prevent cracks but improves durability",
        "PSI testing is done at 28 days but continues to increase",
        "Ready-mix companies can custom blend strengths",
      ],
      warnings: [
        "Higher PSI concrete sets faster, reducing workable time",
        "Cost difference between 3000 and 4000 is minimal ($10-15/yd)",
        "5000 PSI requires professional finishing skills",
      ],
    },
    related: ["concrete-types", "driveway-concrete-strength", "garage-floor-concrete"],
  },
  {
    id: "how-to-form-concrete-slab",
    title: "How to Form a Concrete Slab: Step-by-Step Guide",
    slug: "how-to-form-concrete-slab",
    description: "Learn how to build and set forms for pouring concrete slabs, patios, and driveways.",
    category: "how-to",
    content: {
      introduction: "Proper forming is essential for a successful concrete pour. Well-built forms create straight edges and prevent concrete from spreading beyond its intended area.",
      sections: [
        {
          title: "Materials Needed",
          content: [
            "Form boards: 2x6 lumber for standard slabs, 2x4 for small projects",
            "Stakes: 2x2 or 2x4 lumber, 12-18 inches long",
            "Form release oil: Petroleum-based or commercial form release",
            "Nails or screws: 6d or 8d common nails, or 2-1/2\" deck screws",
            "String line: For establishing straight lines and level",
          ],
        },
        {
          title: "Step 1: Prepare the Base",
          content: [
            "Excavate area to required depth accounting for slab and base",
            "Compact soil using plate compactor or hand tamper",
            "Add 4-6\" of gravel base and compact thoroughly",
            "Level the base material to uniform depth",
            "Moisten base lightly before placing forms (optional)",
          ],
        },
        {
          title: "Step 2: Stake and Set String Lines",
          content: [
            "Place stakes around perimeter, 2-3 feet apart",
            "Run string line between stakes at finished height",
            "Use line level or laser level to establish grade",
            "Mark height on stakes for reference",
            "Account for slope if needed (1-2% for drainage)",
          ],
        },
        {
          title: "Step 3: Install Form Boards",
          content: [
            "Place form boards against stakes, flush with string line",
            "Nail through form into stake (2-3 nails per stake)",
            "Use double stakes at corners for added strength",
            "Maintain constant height following string line",
            "Use screws if forms may need adjustment during pour",
          ],
        },
        {
          title: "Step 4: Brace and Reinforce",
          content: [
            "Add kickers (diagonal braces) every 4-6 feet",
            "Place stakes on outside of forms every 4 feet",
            "Nail through form into kicker stake",
            "Double-check form alignment and level",
            "Install reinforcement per design (rebar, wire mesh)",
            "Use dobies or chairs to hold reinforcement off ground",
          ],
        },
        {
          title: "Step 5: Final Preparation",
          content: [
            "Apply form release oil or used motor oil",
            "Double-check all measurements and level",
            "Check forms are secure and won't bulge during pour",
            "Clean area of debris that could get into concrete",
            "Set up screed boards and other tools nearby",
          ],
        },
      ],
      tips: [
        "Use straight, form boards - crooked boards create crooked edges",
            "Forms should be 2-6 inches above grade for most slabs",
            "Check forms with long level across multiple forms",
            "Drive stakes at angle away from concrete for better hold",
            "Pre-made metal forms available for reusable forming",
      ],
      warnings: [
        "Inadequate bracing is the most common cause of form failure",
        "Forms must withstand pressure of wet concrete (130+ pcf)",
        "Gaps between forms will leak concrete and create ugly edges",
      ],
    },
    related: ["concrete-slab-construction", "build-forms", "driveway-forms"],
  },
  // ==================== WINTER CONCRETING ====================
  {
    id: "pouring-concrete-in-winter",
    title: "Pouring Concrete in Winter: Cold Weather Concreting Guide",
    slug: "pouring-concrete-in-winter",
    description: "Complete guide to pouring concrete in cold weather. Protection methods, heating, and curing below freezing.",
    category: "seasonal",
    content: {
      introduction: "Cold weather concreting (below 40°F or 4°C) requires special precautions to prevent freezing before concrete reaches adequate strength.",
      sections: [
        {
          title: "Why Cold Weather is Problematic",
          content: [
            "Concrete freezes before reaching 500 PSI strength - permanent damage",
            "Curing slows dramatically below 50°F",
            "Freeze-thaw cycles during first 24 hours are most damaging",
            "Strength development can stop entirely in freezing conditions",
            "Deicing salts cannot be used on fresh concrete",
          ],
        },
        {
          title: "Pre-Pour Preparation",
          content: [
            "Heat mixing water to 100-140°F (not exceeding limits)",
            "Store aggregates in heated enclosure if possible",
            "Use accelerating admixtures to reduce set time",
            "Have blankets and insulation ready before pour",
            "Schedule pour for warmest part of day (10 AM - 2 PM)",
            "Thaw frozen ground using heaters or blankets (never pour on frozen ground)",
          ],
        },
        {
          title: "During the Pour",
          content: [
            "Maintain concrete temperature above 50°F during placement",
            "Reduce mixing time to minimize heat loss",
            "Place concrete quickly to retain heat",
            "Use windbreaks if conditions are windy",
            "Consider heated enclosures for critical pours",
          ],
        },
        {
          title: "Cold Weather Curing Methods",
          content: [
            "Concrete blankets: Insulating blankets retain heat (R-value matters)",
            "Straw covered with plastic: Traditional, effective insulation",
            "Heated enclosures: For critical structural pours",
            "Electric heating blankets: Actively generate heat",
            "Combination methods: Blankets + heat source for extreme cold",
          ],
        },
        {
          title: "Curing Duration in Cold Weather",
          content: [
            "Keep concrete above freezing for first 72 hours minimum",
            "Maintain protection for 5-7 days in sustained cold",
            "Gradual removal of protection prevents thermal shock",
            "Monitor temperature with thermometers in concrete mass",
          ],
        },
      ],
      tips: [
        "Use Type III (high-early) cement for faster strength gain",
        "Accelerators reduce set time but not curing time",
        "Wind chill affects exposed concrete surfaces",
        "Blankets should extend 2 feet beyond slab edges",
        "Temperature differentials cause cracking - gradual cooling is key",
      ],
      warnings: [
        "Never pour on frozen ground - concrete will crack from heaving",
        "Calcium chloride accelerators can corrode rebar - use non-chloride",
        "Deicing salts damage concrete in first winter - avoid completely",
        "Propane heaters produce CO2 which can carbonize surface - provide ventilation",
      ],
    },
    related: ["pouring-concrete-in-summer", "concrete-curing-time", "winter-concrete-protection"],
  },
  // ==================== SAFETY GUIDES ====================
  {
    id: "concrete-safety-guide",
    title: "Concrete Safety Guide: PPE and Best Practices",
    slug: "concrete-safety-guide",
    description: "Essential safety practices for working with concrete. PPE requirements, handling cement, and job site safety.",
    category: "safety",
    content: {
      introduction: "Concrete work involves hazards that require proper safety equipment and procedures. Cement is highly alkaline and can cause chemical burns, while wet concrete creates physical hazards.",
      sections: [
        {
          title: "Personal Protective Equipment (PPE)",
          content: [
            "Eye protection: Safety glasses or goggles - cement dust is abrasive",
            "Skin protection: Long sleeves, long pants, waterproof gloves",
            "Respiratory protection: N95 mask for mixing, better for extended exposure",
            "Footwear: Waterproof rubber boots when working with wet concrete",
            "Hearing protection: During power troweling or concrete sawing",
          ],
        },
        {
          title: "Cement Hazards",
          content: [
            "Cement is alkaline (pH 12-13) - causes chemical burns",
            "Dry cement dust is corrosive to lungs and eyes",
            "Wet cement penetrates clothing and continues burning skin",
            "Allergic dermatitis can develop from repeated exposure",
            "Cement burns may not be felt immediately due to nerve damage",
          ],
        },
        {
          title: "Working with Wet Concrete",
          content: [
            "Knee boards: Kneeling in wet concrete causes burns",
            "Waterproof boots: Cement attacks leather and rubber boots",
            "Change clothes immediately if concrete gets inside clothing",
            "Wash exposed skin with pH-neutral soap, not just water",
            "Remove concrete from skin within 15-30 minutes to prevent burns",
          ],
        },
        {
          title: "Job Site Safety",
          content: [
            "Slips, trips, falls: Concrete creates slick walking surfaces",
            "Falling into wet concrete: Can trap and immobilize workers",
            "Equipment safety: Concrete mixers, buggies, pumps pinch hazards",
            "Lifting safety: Concrete bags weigh 80-94 lbs - use proper lifting",
            "Power tools: Concrete saws, grinders generate dust - use dust control",
          ],
        },
        {
          title: "Emergency Procedures",
          content: [
            "Skin contact: Remove contaminated clothing, wash with water 15+ minutes",
            "Eye contact: Flush with water for 15+ minutes, seek medical attention",
            "Inhalation: Move to fresh air, seek medical attention if symptoms persist",
            "Ingestion: Rinse mouth, drink water, do not induce vomiting",
            "Cement burns: Seek medical attention - appear similar to heat burns",
          ],
        },
      ],
      tips: [
        "Keep clean water on site for immediate washing",
        "Barrier creams provide some skin protection but aren't sufficient alone",
        "N95 masks are minimum for cement dust - half-face respirator better",
        "Change out of concrete-soaked clothes immediately",
        "Moisturize skin after work to prevent drying and cracking",
      ],
      warnings: [
        "Cement burns can cause third-degree burns requiring skin grafts",
        "Silica dust from concrete cutting causes silicosis - always use water suppression",
        "Wet concrete can cause crushing injuries if it collapses on workers",
        "Never wash concrete-contaminated clothes with other laundry",
      ],
    },
    related: ["concrete-work-safety", "cement-burns", "construction-ppe"],
  },
  // ==================== MORE HOW-TO GUIDES ====================
  {
    id: "how-to-finish-concrete",
    title: "How to Finish Concrete: Tools and Techniques",
    slug: "how-to-finish-concrete",
    description: "Learn concrete finishing techniques: screeding, floating, troweling, and edging for professional results.",
    category: "how-to",
    content: {
      introduction: "Proper finishing transforms poured concrete into a durable, attractive surface. Each step serves a specific purpose and must be done at the right time.",
      sections: [
        {
          title: "Finishing Tools Needed",
          content: [
            "Screed board: 2x4 or magnesium screed, longer than slab width",
            "Bull float: Large float for initial smoothing (wood or magnesium)",
            "Hand float: Smaller float for detail work",
            "Edger: Creates rounded edges along slab perimeter",
            "Groover: Creates control joints in the surface",
            "Trowel: Steel or magnesium for final finish",
            "Broom: For creating non-slip texture",
          ],
        },
        {
          title: "Step 1: Screeding",
          content: [
            "Begin immediately after pour, while concrete is fluid",
            "Use sawing motion with screed board",
            "Work from one side to opposite side",
            "Fill low spots and re-screed high spots",
            "Don't overwork - brings cement to surface (bad)",
            "Goal: Level surface, remove excess concrete",
          ],
        },
        {
          title: "Step 2: Bull Floating",
          content: [
            "Wait until bleed water sheen disappears",
            "Float in large arcs, lifting leading edge slightly",
            "Don't seal surface - water needs to escape",
            "Embeds aggregate and closes surface imperfections",
            "Magnesium floats: Faster, lighter, for air-entrained concrete",
            "Wood floats: Slower, more workable, closes surface more",
          ],
        },
        {
          title: "Step 3: Edging and Grooving",
          content: [
            "Run edger along forms after bull floating",
            "Creates rounded, less likely-to-chip edge",
            "Cut control joints with groover at marked locations",
            "Joints should be 1/4 to 1/3 of slab depth",
            "Space joints 2-3 times slab thickness (in feet)",
          ],
        },
        {
          title: "Step 4: Floating (Second Pass)",
          content: [
            "Wait until concrete can support foot traffic (slight imprint)",
            "Use hand float or power float for large areas",
            "Remove imperfections from edging and grooving",
            "Further close surface and prepare for troweling",
          ],
        },
        {
          title: "Step 5: Troweling",
          content: [
            "Wait until concrete is firmer (harder footprint)",
            "Steel trowel: Smooth, hard, slick finish",
            "Magnesium trowel: Less smooth, faster application",
            "Multiple passes: Increasing pressure and decreasing angle",
            "Final trowel creates very smooth, hard surface",
          ],
        },
        {
          title: "Step 6: Broom Finish (Optional)",
          content: [
            "For exterior slabs requiring traction",
            "Drag broom lightly across surface after final trowel",
            "Consistent pressure and direction for uniform texture",
            "Coarse broom: Rougher texture (driveways)",
            "Fine broom: Lighter texture (patios)",
          ],
        },
      ],
      tips: [
        "Wait for bleed water to disappear before floating - critical timing",
        "Over-troweling creates weak surface layer (dusting)",
        "Keep tools clean - hardened concrete ruins them",
        "Work in cool weather extends workable time significantly",
        "Power trowels require experience - hand trowel for beginners",
      ],
      warnings: [
        "Working bleed water back into surface weakens concrete",
        "Troweling too early seals surface, causing blistering and scaling",
        "Smooth exterior finishes are slippery when wet - add texture",
        "Power tools can dig into concrete - proper technique essential",
      ],
    },
    related: ["concrete-slab-construction", "decorative-concrete", "concrete-textures"],
  },
  {
    id: "how-to-pour-concrete-driveway",
    title: "How to Pour a Concrete Driveway: Complete Guide",
    slug: "how-to-pour-concrete-driveway",
    description: "Step-by-step guide to pouring a concrete driveway. Excavation, forms, reinforcement, pouring, and finishing.",
    category: "how-to",
    content: {
      introduction: "A properly constructed concrete driveway can last 30+ years. This guide covers all aspects of driveway construction from planning to completion.",
      sections: [
        {
          title: "Planning and Specifications",
          content: [
            "Thickness: 4-6 inches for residential (6\" recommended for heavy vehicles)",
            "Concrete strength: 4000 PSI minimum for driveways",
            "Reinforcement: Rebar (#4) or 6x6 wire mesh recommended",
            "Slope: 1-2% for drainage away from structures",
            "Width: 10-12 feet minimum, 14-16 feet for two-car",
            "Base: 4-6 inches compacted gravel",
          ],
        },
        {
          title: "Excavation and Preparation",
          content: [
            "Mark underground utilities before digging (Call 811)",
            "Excavate 8-12 inches below finished grade",
            "Remove all organic material (topsoil, roots)",
            "Compact subgrade with plate compactor",
            "Add and compact 4-6 inches of gravel base",
            "Set forms at finished driveway height with proper slope",
          ],
        },
        {
          title: "Reinforcement Installation",
          content: [
            "Place rebar in grid pattern (18-24 inches spacing each direction)",
            "Use rebar chairs or dobies to hold in place",
            "Rebar should be in lower third of slab depth",
            "Overlap rebar ends 24 inches minimum",
            "Wire intersections or use rebar ties",
            "For wire mesh: Use chairs to keep centered in slab",
          ],
        },
        {
          title: "Ordering Concrete",
          content: [
            "Calculate volume: Length × Width × Thickness (in feet)",
            "Add 10% for over-excavation and variations",
            "Order 4000 PSI air-entrained concrete",
            "Specify fiber mesh if desired (doesn't replace rebar)",
            "Schedule delivery for early morning",
            "Have pump truck access planned if needed",
          ],
        },
        {
          title: "Pouring and Finishing",
          content: [
            "Pour concrete starting farthest from truck",
            "Screed to level surface immediately",
            "Bull float after bleed water disappears",
            "Edge along all forms and expansion joints",
            "Cut control joints: 10-15 feet apart in both directions",
            "Add broom texture for traction before final set",
          ],
        },
        {
          title: "Curing and Protection",
          content: [
            "Begin curing within 30-60 minutes of finishing",
            "Use concrete blankets or keep continuously moist",
            "Minimum curing: 7 days before vehicle traffic",
            "Full curing: 28 days for maximum strength",
            "Don't use deicing salts first winter",
            "Seal after 28 days for added protection",
          ],
        },
      ],
      tips: [
        "Install expansion joint material where driveway meets garage slab",
        "Wide driveways (12'+) should have center control joint",
        "Curved edges are more attractive and less prone to chipping",
        "Consider colored concrete or stamping for enhanced appearance",
        "Drainage is critical - water pooling under slab causes freeze damage",
      ],
      warnings: [
        "Never pour on frozen ground or saturated soil",
        "Vehicles on uncured driveway will cause permanent damage",
        "Inadequate thickness is the #1 cause of driveway failure",
        "Skipping control joints guarantees random cracking",
        "Deicers in first winter can severely damage surface",
      ],
    },
    related: ["driveway-cost", "driveway-repair", "asphalt-vs-concrete-driveway"],
  },
  {
    id: "how-to-repair-concrete-cracks",
    title: "How to Repair Concrete Cracks: Step-by-Step Guide",
    slug: "how-to-repair-concrete-cracks",
    description: "Methods for repairing different types of concrete cracks. Crack injection, patching, and resurfacing.",
    category: "maintenance",
    content: {
      introduction: "Not all concrete cracks require repair. Understanding crack types and appropriate repair methods is essential for durable, long-lasting repairs.",
      sections: [
        {
          title: "Assessing Crack Severity",
          content: [
            "Hairline cracks (<1/8\"): Usually cosmetic, fill for appearance",
            "Medium cracks (1/8\"-1/4\"): Fill to prevent water intrusion",
            "Large cracks (>1/4\"): May indicate structural issues, investigate cause",
            "Active cracks: Still moving, need flexible sealant",
            "Settled cracks: Vertical displacement, professional evaluation needed",
          ],
        },
        {
          title: "Hairline Crack Repair",
          content: [
            "Clean crack with wire brush and vacuum",
            "Use concrete crack filler or grout",
            "Apply with putty knife or squeeze bottle",
            "Wipe away excess with damp cloth",
            "Cure per product instructions",
          ],
        },
        {
          title: "Medium Crack Repair (1/8\" - 1/4\")",
          content: [
            "Chisel crack edges slightly wider (V-shape) for better adhesion",
            "Clean thoroughly: wire brush, vacuum, pressure wash",
            "Allow to dry completely",
            "Use concrete patching compound or epoxy",
            "Apply in layers if crack is deep",
            "Smooth flush with surrounding surface",
          ],
        },
        {
          title: "Large Crack Repair (>1/4\")",
          content: [
            "Investigate cause before repair (soil movement, tree roots, etc.)",
            "Open crack with chisel or saw (1\" deep minimum)",
            "Clean out all loose debris",
            "Use hydraulic cement for active water leaks",
            "For dry cracks: Use concrete patch with bonding agent",
            "Consider professional evaluation for structural concerns",
          ],
        },
        {
          title: "Epoxy Injection for Structural Cracks",
          content: [
            "For cracks requiring structural repair",
            "Clean and seal crack surface on one side",
            "Install injection ports along crack",
            "Inject epoxy under pressure starting at lowest port",
            "Continue until epoxy flows from next port",
            "Remove ports and grind surface flush",
            "Best done by professionals with proper equipment",
          ],
        },
        {
          title: "Control Joint Crack Filling",
          content: [
            "Control joint cracks are normal - not damage",
            "Fill to prevent water intrusion and weed growth",
            "Use flexible joint sealant (not rigid patch)",
            "Backer rod may be needed for deep joints",
            "Self-leveling sealants available for horizontal joints",
          ],
        },
      ],
      tips: [
        "Repairs adhere better to slightly damp concrete (not wet)",
        "Bonding agent dramatically improves patch adhesion",
        "Match existing concrete color as closely as possible",
        "Overfill slightly - patch shrinks as it dries",
        "Temperature matters - 50-80°F ideal for most patch materials",
      ],
      warnings: [
        "Cosmetic repairs on structural cracks hide real problems",
        "Cracks with vertical displacement indicate foundation issues",
        "Repairs done in freezing temperatures may fail",
        "Some crack fillers can't be painted or sealed over",
        "Tree roots causing cracks will continue - address root issue first",
      ],
    },
    related: ["concrete-crack-prevention", "foundation-repair", "driveway-repair"],
  },
  {
    id: "stamped-concrete-guide",
    title: "Stamped Concrete Guide: Patterns, Colors, and Cost",
    slug: "stamped-concrete-guide",
    description: "Complete guide to stamped concrete. Popular patterns, color options, installation process, and maintenance.",
    category: "how-to",
    content: {
      introduction: "Stamped concrete creates beautiful, textured surfaces that mimic stone, brick, tile, and wood at a fraction of the cost of natural materials.",
      sections: [
        {
          title: "Popular Stamp Patterns",
          "content": [
            "Ashlar slate: Natural stone appearance, very popular",
            "Cobblestone: European old-world charm",
            "Running brick: Classic brick layout",
            "Herringbone brick: Decorative brick pattern",
            "Flagstone: Random natural stone look",
            "Wood plank: Realistic wood grain texture",
            "Tile patterns: Square or geometric designs",
            "Random stone: Multiple sized stones together",
          ],
        },
        {
          title: "Color Options",
          "content": [
            "Integral color: Mixed into concrete, consistent throughout",
            "Color hardener: Shake-on, increases surface hardness and color",
            "Antique release: Prevents stamp sticking, adds secondary color",
            "Acid stain: Applied after curing, variegated translucent color",
            "Water-based stain: More consistent than acid, easier application",
            "Combination: Integral + release creates depth and realism",
          ],
        },
        {
          title: "Installation Process",
          "content": [
            "1. Prepare base and forms similar to standard concrete",
            "2. Place concrete with color (if integral colored)",
            "3. Apply color hardener if used (shake on, float in)",
            "4. Apply release agent (prevents stamp adhesion)",
            "5. Stamp concrete when ready (thumb impression test)",
            "6. Work from one side to opposite, overlap stamps",
            "7. Cure with blankets or curing compound",
            "8. Wash off excess release, seal surface",
          ],
        },
        {
          title: "Cost Comparison",
          "content": [
            "Basic broom finish: $6-10 per sq ft",
            "Stamped concrete: $12-20 per sq ft",
            "Pavers: $15-25 per sq ft",
            "Natural stone: $25-50+ per sq ft",
            "Stamped concrete is 30-60% less than natural materials",
          ],
        },
        {
          title: "Maintenance Requirements",
          "content": [
            "Reseal every 2-3 years for exterior applications",
            "Clean regularly with mild detergent",
            "Avoid harsh chemicals and deicing salts",
            "Address cracks promptly to prevent water damage",
            "Recoloring possible but requires professional application",
          ],
        },
      ],
      tips: [
        "Release agent is crucial - prevents stamp from pulling concrete",
        "Multiple mats needed: 2-3 of same pattern for random appearance",
        "Texture can be slippery - consider non-slip additives",
        "Sample boards: Always create sample to approve color/pattern",
        "Sealing intensifies color and provides protection",
      ],
      warnings: [
        "Stamped concrete requires experienced crews - not DIY friendly",
        "Pattern mistakes are permanent - difficult to fix",
        "Color inconsistencies can occur with shake-on hardeners",
        "Slippery when wet without textured sealer additives",
        "Repairing damaged stamped concrete requires professional color matching",
      ],
    },
    related: ["concrete-vs-pavers", "decorative-concrete", "patio-ideas"],
  },
  {
    id: "concrete-driveway-sealing",
    title: "How to Seal a Concrete Driveway: Complete Guide",
    slug: "how-to-seal-concrete-driveway",
    description: "Step-by-step guide to sealing concrete driveways. Types of sealers, application tips, and maintenance schedule.",
    category: "maintenance",
    content: {
      introduction: "Sealing your concrete driveway protects against oil stains, deicing salt damage, UV fading, and water intrusion. Proper sealing can double the lifespan of your driveway.",
      sections: [
        {
          title: "Types of Concrete Sealers",
          "content": [
            "Acrylic sealers: Form film on surface, 1-3 year life, easy DIY",
            "Silane/siloxane: Penetrating, breathable, 3-5 year life, no color change",
            "Epoxy sealers: Extremely durable, glossy, 1-3 years (garages, not driveways)",
            "Polyurethane: Very durable, thicker film, harder to apply",
            "High-solid acrylic: Good balance of durability and DIY-friendly",
          ],
        },
        {
          title: "When to Seal New Concrete",
          "content": [
            "Wait minimum 28 days after pour for full cure",
            "Some sealers can be applied at 14 days (check product)",
            "Concrete must be fully cured - test with water",
            "pH neutral: No efflorescence (white powder) present",
            "Surface should be clean and dry",
          ],
        },
        {
          title: "Surface Preparation",
          "content": [
            "Clean thoroughly: Pressure washer or concrete cleaner",
            "Remove oil stains: Degreaser or TSP solution",
            "Etch smooth concrete: Muriatic acid or etching solution",
            "Remove all cleaning residue: Pressure wash thoroughly",
            "Allow to dry completely: 24-48 hours minimum",
            "Test absorption: Water should bead, not absorb immediately",
          ],
        },
        {
          title: "Application Process",
          "content": [
            "Choose cool, overcast day (50-80°F, no rain forecast)",
            "Apply two thin coats rather than one thick coat",
            "Use roller, sprayer, or squeegee depending on product",
            "Work in small sections: Maintain wet edge",
            "Back-roll sprayer application for even coverage",
            "Allow to dry between coats (1-4 hours depending on product)",
            "Keep off surface: 24-48 hours depending on product",
          ],
        },
        {
          title: "Maintenance Schedule",
          "content": [
            "Driveways: Reseal every 2-3 years",
            "Patios: Reseal every 3-4 years",
            "Garage floors: Reseal every 1-2 years (heavier use)",
            "High-traffic areas: Annually if showing wear",
            "Southern sun exposure: May need more frequent resealing",
          ],
        },
      ],
      tips: [
        "Spray application is faster but requires back-rolling for even coverage",
        "Roller application gives most controlled, even coverage",
        "Early morning application prevents afternoon sun drying too fast",
        "Buy 10% more sealer than calculated - better to have extra",
        "Test sealer in small inconspicuous area first",
      ],
      warnings: [
        "Don't seal in direct sunlight - product dries too fast, streaks",
        "Applying to damp concrete causes bubbling and poor adhesion",
        "Pooling sealer creates sticky, uneven patches",
        "Some sealers change appearance - test before full application",
        "Glossy sealers are slippery when wet - consider non-slip additives",
      ],
    },
    related: ["concrete-sealing", "driveway-maintenance", "concrete-cleaner"],
  },
  {
    id: "concrete-base-preparation",
    title: "Concrete Base Preparation: Gravel and Subgrade Guide",
    slug: "concrete-base-preparation",
    description: "Proper subgrade and base preparation for concrete slabs. Compaction, drainage, and gravel layers.",
    category: "how-to",
    content: {
      introduction: "The majority of concrete failures are caused by inadequate base preparation. A properly prepared subgrade and base layer is essential for long-lasting concrete.",
      sections: [
        {
          title: "Subgrade Preparation",
          "content": [
            "Remove all vegetation: Grass, roots, organic matter",
            "Excavate to proper depth: Slab thickness + base thickness",
            "Remove unstable soil: Clay, silt, organic material replaced with gravel",
            "Compact native soil: Plate compactor or hand tamper",
            "Achieve uniform compaction: 95-98% Proctor density",
            "Create slight slope: 1-2% for drainage",
          ],
        },
        {
          title: "Base Material Options",
          "content": [
            "Crushed stone (graded aggregate base): Best option, locks together",
            "Gravel (round): Good drainage but less stable",
            "Sand: Not recommended as base alone, lacks stability",
            "Recycled concrete: Environmentally friendly, good drainage",
            "Bank run gravel: Mixed sizes, decent option when crushed not available",
          ],
        },
        {
          title: "Base Thickness by Application",
          "content": [
            "Sidewalks/Patios: 4-6 inches compacted base",
            "Driveways (passenger): 6-8 inches compacted base",
            "Driveways (heavy/RV): 8-12 inches compacted base",
            "Garage slabs: 6-8 inches compacted base",
            "Shed slabs (light): 4-6 inches compacted base",
          ],
        },
        {
          title: "Compaction Process",
          "content": [
            "Spread base material in 4-6 inch lifts (layers)",
            "Compact each lift separately: Multiple passes with plate compactor",
            "Moisture conditioning: Slightly moist soil compacts best",
            "Test compaction: Proctor test for critical applications",
            "Final grade: Level to proper elevation with slope",
          ],
        },
        {
          title: "Drainage Considerations",
          "content": [
            "Slope surface away from structures: 1-2% minimum",
            "Crown wider areas: Center higher than edges",
            "Install drain tile: For poor drainage areas or below-grade slabs",
            "Perimeter drains: For areas with high water table",
            "Vapor barrier: 6-10 mil poly under slab for conditioned spaces",
          ],
        },
      ],
      tips: [
        "Plate compactor rental worth the cost - hand tamping insufficient",
        "Moist but not muddy soil compacts best - add water if too dry",
        "Test compaction: Walk on prepared base - minimal footprints desired",
        "Geogrid fabric: Adds stability to poor soil conditions",
        "Save money on concrete, spend on base - cheaper in long run",
      ],
      warnings: [
        "Never pour on frozen ground - guarantees cracking",
        "Clay soil expands/contracts significantly - may require removal or geogrid",
        "Inadequate compaction causes settling and uneven slabs",
        "Skipping base to save money costs 3-5x more in repairs",
        "Poor drainage under slab causes freeze-thaw damage in cold climates",
      ],
    },
    related: ["concrete-slab-construction", "frost-heave", "soil-compaction"],
  },
  {
    id: "concrete-mix-design",
    title: "Concrete Mix Design Guide: Ratios and Ingredients",
    slug: "concrete-mix-design",
    description: "Understanding concrete mix ratios, ingredients, and designing the right mix for your project.",
    category: "how-to",
    content: {
      introduction: "Concrete mix design determines the strength, durability, and workability of your concrete. Understanding the components and ratios helps you achieve the best results.",
      sections: [
        {
          title: "Concrete Components",
          "content": [
            "Cement: The binding agent (Portland cement)",
            "Aggregates: Sand (fine) and gravel (coarse) - 60-75% of mix",
            "Water: Activates cement, creates workable mix - 15-20% of mix",
            "Air: Entrained air bubbles for freeze-thaw resistance",
            "Admixtures: Chemical additives for specific properties",
          ],
        },
        {
          title: "Standard Mix Ratios",
          "content": [
            "1:2:3 (cement:sand:gravel) - Common general-purpose ratio",
            "1:2:4 - Slightly less cement, economical for non-critical applications",
            "1:1.5:3 - Higher cement content, stronger mix",
            "1:3:5 - Lower cement content, filling/applications where strength less critical",
            "Water-cement ratio: 0.40-0.50 for most applications (by weight)",
          ],
        },
        {
          title: "Mix Design by PSI Target",
          "content": [
            "3000 PSI: 1:2.5:3.5 ratio, moderate strength",
            "4000 PSI: 1:2:3 ratio, standard for driveways",
            "5000 PSI: 1:1.5:2.5 ratio, high strength, commercial",
            "Water-cement ratio lower for higher PSI (0.40-0.45)",
          ],
        },
        {
          title: "Admixtures and Additives",
          "content": [
            "Accelerators: Calcium chloride, reduce set time (cold weather)",
            "Retarders: Slow set time (hot weather)",
            "Air-entraining agents: Microscopic air bubbles for freeze-thaw",
            "Plasticizers: Increase workability without adding water",
            "Fibers: Polypropylene or steel fibers for crack control",
            "Waterproofers: Reduce water permeability",
          ],
        },
        {
          title: "Mixing Tips",
          "content": [
            "Measure accurately: Volume or weight - be consistent",
            "Mix dry ingredients first: Cement, sand, gravel blended",
            "Add water gradually: Don't overwater",
            "Mix thoroughly: 3-5 minutes in mixer, longer by hand",
            "Use immediately: Concrete starts setting in 60-90 minutes",
          ],
        },
        {
          title: "Common Mix Problems",
          "content": [
            "Too much water: Weak concrete, excessive shrinkage, cracking",
            "Too little water: Unworkable, honeycombing, voids",
            "Insufficient mixing: Weak spots, inconsistent strength",
            "Wrong aggregate size: Harsh mix, poor finishability",
          ],
        },
      ],
      tips: [
        "Water-cement ratio is critical - strongest factor in concrete strength",
        "5000 PSI concrete sets faster - reduces working time",
        "Ready-mix is consistent and tested - worth it for important projects",
        "Bagged concrete is pre-mixed - convenient but more expensive per yard",
        "Slump test: Measure workability - 3-4 inch slump is typical",
      ],
      warnings: [
        "Never add water to concrete to increase workability at job site",
        "More water = weaker concrete - a common and expensive mistake",
        "Hot weather accelerates set time - plan accordingly",
        "Calcium chloride accelerators can corrode rebar - use non-chloride for reinforced concrete",
      ],
    },
    related: ["concrete-strength", "concrete-psi", "concrete-ingredients"],
  },
  {
    id: "removing-concrete-paint",
    title: "How to Remove Paint from Concrete: Methods and Tips",
    slug: "how-to-remove-paint-from-concrete",
    description: "Complete guide to removing paint from concrete surfaces. Chemical strippers, pressure washing, and grinding methods.",
    category: "maintenance",
    content: {
      introduction: "Removing paint from concrete is labor-intensive but achievable with the right approach. The method depends on paint type, age, and concrete condition.",
      sections: [
        {
          title: "Identifying Paint Type",
          "content": [
            "Water-based paint: Scratches off easily, dissolves in water",
            "Oil-based paint: Harder, resists water, requires solvents",
            "Epoxy paint: Very hard, two-part, most difficult to remove",
            "Masonry paint: Specifically for concrete, penetrates surface",
            "Test: Apply rubbing alcohol - water-based softens, oil-based doesn't",
          ],
        },
        {
          title: "Chemical Stripper Method",
          "content": [
            "Best for: Oil-based and epoxy paints",
            "Select concrete-safe paint stripper",
            "Apply generously with brush or roller",
            "Cover with plastic to prevent drying",
            "Wait 15-60 minutes per product instructions",
            "Scrape with putty knife or floor scraper",
            "Repeat for stubborn areas",
            "Neutralize and clean thoroughly after",
          ],
        },
        {
          title: "Pressure Washing Method",
          "content": [
            "Best for: Loose, peeling, or water-based paint",
            "Pre-wet surface to prevent chemical damage",
            "Use concrete cleaner solution",
            "High pressure (3000+ PSI) with 15-degree tip",
            "Maintain consistent distance from surface",
            "Work in sections, rinse thoroughly",
            "May require multiple passes",
          ],
        },
        {
          title: "Grinding Method",
          "content": [
            "Best for: Thick, stubborn paint, epoxy, multiple layers",
            "Use concrete grinder with appropriate abrasive",
            "Start with coarse grit (20-40), progress to finer",
            "Work systematically across surface",
            "Creates dust - use dust collection or vacuum",
            "Can leave grind marks - may need polishing",
            "Professional equipment recommended for large areas",
          ],
        },
        {
          title: "Soda Blasting Method",
          "content": [
            "Gentle option: Removes paint without damaging concrete",
            "Baking soda blasts away paint layer",
            "Environmentally friendly",
            "Equipment rental often available",
            "Less aggressive than sandblasting",
            "Good for delicate surfaces",
          ],
        },
        {
          title: "Post-Removal Steps",
          "content": [
            "Clean surface thoroughly: Remove all stripper residue",
            "Neutralize: If chemical stripper used",
            "Etch surface: For best adhesion of new coating",
            "Rinse and allow to dry completely",
            "Fill any divots or damage with concrete patch",
            "Apply new sealer or coating if desired",
          ],
        },
      ],
      tips: [
        "Test removal method in small, inconspicuous area first",
        "Multiple methods may be needed: Stripper + pressure washing combination",
        "Older paint may contain lead - test before disturbing",
        "Work in well-ventilated area with chemical strippers",
        "Heat gun can soften paint for easier scraping (be careful of fumes)",
      ],
      warnings: [
        "Chemical strippers are hazardous - follow all safety precautions",
        "Some strippers can discolor concrete - test first",
        "Grinding removes surface layer - can change appearance",
        "Lead paint requires special handling and disposal",
        "Muriatic acid etch after removal creates fumes - use respirator",
      ],
    },
    related: ["concrete-stains", "concrete-coatings", "concrete-refinishing"],
  },
  {
    id: "concrete-foundation-types",
    title: "Concrete Foundation Types: Slab, Crawlspace, Basement",
    slug: "concrete-foundation-types",
    description: "Compare concrete foundation types for residential construction. Pros, cons, and costs of each.",
    category: "how-to",
    content: {
      introduction: "Choosing the right foundation type affects your home's cost, comfort, and future usability. Each type has advantages depending on climate, soil, and budget.",
      sections: [
        {
          title: "Slab-on-Grade Foundation",
          "content": [
            "Description: Concrete poured directly on ground level",
            "Cost: $8-15 per sq ft - most economical option",
            "Pros: Lowest cost, fewest maintenance issues, no space for pests",
            "Cons: No storage, plumbing embedded in slab (difficult repairs),",
            "      less insulation from ground temperature",
            "Best for: Warm climates, level lots, budget-conscious builds",
          ],
        },
        {
          title: "Crawlspace Foundation",
          "content": [
            "Description: Elevated floor with 18-48 inches of accessible space",
            "Cost: $12-20 per sq ft - moderate cost",
            "Pros: Access to plumbing/electrical, easier to level on slopes,",
            "      better flood protection than slab",
            "Cons: Moisture problems, pest access, may need encapsulation",
            "Best for: Sloped lots, cold climates, areas with high water table",
          ],
        },
        {
          title: "Full Basement Foundation",
          "content": [
            "Description: Full-height living space below ground level",
            "Cost: $20-35+ per sq ft - most expensive option",
            "Pros: Additional living space, storage, storm protection,",
            "      easy access to utilities",
            "Cons: Highest cost, excavation required, water intrusion risk",
            "Best for: Cold climates, expensive lots where space is valuable",
          ],
        },
        {
          title: "Frost-Protected Shallow Foundation",
          "content": [
            "Description: Insulated slab foundation for cold climates",
            "Cost: $10-18 per sq ft",
            "Pros: Excavation savings, heating benefits, modern approach",
            "Cons: Not code-approved everywhere, requires proper insulation",
            "Best for: Cold climates with good drainage, accessible materials",
          ],
        },
        {
          title: "Pier and Beam Foundation",
          "content": [
            "Description: Concrete piers supporting wood beams",
            "Cost: $10-20 per sq ft (varies with site conditions)",
            "Pros: Works on slopes, poor soil, flood-prone areas",
            "Cons: Under-floor access needed, wood may deteriorate",
            "Best for: Coastal areas, steep slopes, expansive soils",
          ],
        },
      ],
      tips: [
        "Local soil conditions heavily influence foundation choice",
        "Building codes may restrict foundation types in your area",
        "Foundation costs are 10-15% of total home construction budget",
        "Higher upfront cost often pays back in basement value addition",
        "Consider future needs - finishing basement vs adding on later",
      ],
      warnings: [
        "Expansive soils require special foundation engineering",
        "Water table depth determines if basement is feasible",
        "Building code requirements trump personal preference",
        "Foundation repairs cost 5-10x more than doing it right initially",
        "Radon mitigation easier to include in original construction",
      ],
    },
    related: ["foundation-repair", "house-leveling", "basement-waterproofing"],
  },
  {
    id: "concrete-expansion-joints",
    title: "Concrete Expansion Joints: Purpose and Installation",
    slug: "concrete-expansion-joints",
    description: "Understanding concrete expansion joints, isolation joints, and control joints. Installation and placement.",
    category: "how-to",
    content: {
      introduction: "Joints in concrete allow for movement caused by temperature changes, drying shrinkage, and settling. Proper joint placement prevents random cracking.",
      sections: [
        {
          title: "Types of Concrete Joints",
          "content": [
            "Control joints: Planned cracks that control where concrete cracks",
            "Isolation joints: Separate concrete from fixed structures",
            "Expansion joints: Absorb thermal expansion in large slabs",
            "Construction joints: Where pouring stopped and resumed later",
          ],
        },
        {
          title: "Control Joints",
          "content": [
            "Purpose: Create weakened planes where cracking occurs",
            "Spacing: 2-3 times slab thickness (in feet)",
            "Depth: 1/4 to 1/3 of slab thickness",
            "Layout: Square or rectangular panels preferred",
            "4-inch slab: Space joints 8-12 feet apart",
            "6-inch slab: Space joints 12-18 feet apart",
          ],
        },
        {
          title: "Isolation Joints",
          "content": [
            "Purpose: Separate new concrete from existing structures",
            "Locations: Where slab meets foundation, columns, drains",
            "Material: Asphalt-impregnated fiber board, foam, or caulk",
            "Placement: Entire depth of slab, full isolation",
            "Prevents: Transfer of stress that causes cracking",
          ],
        },
        {
          title: "Expansion Joints",
          "content": [
            "Purpose: Allow for thermal expansion in large areas",
            "Typical use: Driveways crossing sidewalks, large parking areas",
            "Spacing: Every 50-100 feet in large continuous slabs",
            "Material: Compressible fiber board, specialized expansion joint material",
            "Replaced with: Backer rod and flexible sealant",
          ],
        },
        {
          title: "Joint Installation Methods",
          "content": [
            "Tooling: Groover while concrete is plastic (control joints)",
            "Saw cutting: After concrete hardens (4-24 hours)",
            "Pre-formed: Inserted during pour (isolation, expansion)",
            "Formed: Strips set in forms before pour",
          ],
        },
        {
          title: "Joint Maintenance",
          "content": [
            "Fill control joints: With flexible sealant to prevent water intrusion",
            "Replace expansion joints: When deteriorated or missing",
            "Clean joints: Remove debris before sealing",
            "Reseal: Every 3-5 years or as needed",
          ],
        },
      ],
      tips: [
        "Layout joints on paper before pour - plan panel shapes",
        "Square panels crack less than long rectangles",
        "Saw joints as soon as concrete can be cut without raveling",
        "Isolate all penetrations: drains, columns, light poles",
        "Seal joints after slab has cured (30+ days)",
      ],
      warnings: [
        "Sawing too late causes random cracking before joints are cut",
        "Missing isolation joints guarantees cracks at slab intersections",
        "Sawing too early causes raveling at joint edges",
        "Control joints don't prevent cracking - they control where it happens",
      ],
    },
    related: ["concrete-crack-prevention", "control-joints", "concrete-curing"],
  },
  {
    id: "concrete-coloring-staining",
    title: "Concrete Coloring and Staining: Complete Guide",
    slug: "concrete-coloring-staining",
    description: "Methods for coloring concrete: integral color, stains, dyes, and surface applications. Pros, cons, and application tips.",
    category: "how-to",
    content: {
      introduction: "Colored concrete adds aesthetic appeal to patios, driveways, and floors. Multiple coloring methods exist, each with unique effects and applications.",
      sections: [
        {
          title: "Integral Color (Mixed In)",
          "content": [
            "Method: Color pigment added to concrete mix at batch plant",
            "Depth: Color throughout entire slab",
            "Consistency: Uniform color, marbling limited",
            "Application: Professional batching required",
            "Cost: $30-60 per yard added to concrete cost",
            "Best for: New pours, consistent color desired",
          ],
        },
        {
          title: "Color Hardener (Shake-On)",
          "content": [
            "Method: Dry color broadcast on wet concrete, floated in",
            "Depth: Color in top 1/8-1/4 inch surface",
            "Effect: Consistent color, increased surface hardness",
            "Application: DIY possible with experience",
            "Cost: $0.50-1.50 per sq ft",
            "Best for: Stamped concrete, exterior slabs",
          ],
        },
        {
          title: "Acid Stain (Chemical Reaction)",
          "content": [
            "Method: Acid-based stain reacts with concrete minerals",
            "Effect: Variegated, translucent, marble-like appearance",
            "Application: Spray on cured concrete (28+ days)",
            "Colors: Earth tones (tans, browns, greens, blues)",
            "Cost: $1-3 per sq ft",
            "Best for: Interior floors, patios, artistic effects",
          ],
        },
        {
          title: "Water-Based Stain",
          "content": [
            "Method: Pigment particles penetrate concrete pores",
            "Effect: More consistent color than acid, less variegation",
            "Application: Roll or spray on cured concrete",
            "Colors: Wide range including bright colors",
            "Cost: $1-2 per sq ft",
            "Best for: Controlled color, bright colors desired",
          ],
        },
        {
          title: "Concrete Dye",
          "content": [
            "Method: Fine pigment particles in solvent or water carrier",
            "Effect: Very consistent, uniform color, no chemical reaction",
            "Application: Spray on cured concrete, interior use",
            "Colors: Unlimited color options",
            "Cost: $1-3 per sq ft",
            "Best for: Interior floors, overlays",
          ],
        },
        {
          title: "Comparison Summary",
          "content": [
            "Most durable: Integral color (color won't wear off)",
            "Most economical: Acid stain (DIY possible)",
            "Most color options: Dyes and water-based stains",
            "Best for new pours: Integral color or color hardener",
            "Best for existing concrete: Acid or water-based stain",
          ],
        },
      ],
      tips: [
        "Always test color in small area first - concrete affects final color",
        "Multiple thin stain coats better than one thick coat",
        "Sealing required after coloring - enhances color, provides protection",
        "Concrete porosity affects stain absorption - may cause variation",
        "Color samples: Create sample boards to approve before full application",
      ],
      warnings: [
        "Acid stain colors can't be precisely predicted - part of the effect",
        "Dyes fade in UV light - interior use only",
        "Integral color limited to colors batch plant offers",
        "Replicating stain color on repairs is very difficult",
        "Some sealers yellow - affects final color appearance",
      ],
    },
    related: ["stamped-concrete", "concrete-sealing", "concrete-floors"],
  },
  {
    id: "concrete-patio-ideas",
    title: "Concrete Patio Design Ideas: Patterns, Shapes, and Features",
    slug: "concrete-patio-ideas",
    description: "Creative concrete patio design ideas. Stamped patterns, color options, shapes, and integrated features.",
    category: "how-to",
    content: {
      introduction: "A well-designed concrete patio extends your living space outdoors. With various textures, colors, and patterns available, concrete offers versatility for any style.",
      sections: [
        {
          title: "Popular Patio Patterns",
          "content": [
            "Ashlar slate: Natural stone appearance, timeless look",
            "Flagstone: Random pattern, rustic aesthetic",
            "Running brick: Classic, traditional appearance",
            "Herringbone brick: Dynamic, formal look",
            "Cobblestone: Old-world European charm",
            "Large format tiles: Modern, contemporary feel",
            "Wood plank: Unique, modern rustic appeal",
          ],
        },
        {
          title: "Color Schemes",
          "content": [
            "Natural grays: Blends with surroundings, versatile",
            "Earth tones: Browns, tans, warm appearance",
            "Terracotta: Warm, Mediterranean feel",
            "Multi-color: Mottled, variegated, natural stone appearance",
            "Border accents: Contrasting color edges define space",
            "Random pattern: Multiple colors for flagstone effect",
          ],
        },
        {
          title: "Patio Shape Ideas",
          "content": [
            "Rectangle: Most common, efficient use of space",
            "Curved edges: Softer look, integrates with landscaping",
            "Multi-level: Defines separate functional areas",
            "Free-form: Natural, organic appearance",
            "Circular: Focal point, fire pit seating areas",
          ],
        },
        {
          title: "Integrated Features",
          "content": [
            "Built-in seating: Concrete benches along perimeter",
            "Fire pit: Covered fire feature built into patio",
            "Planter boxes: Concrete borders for planting areas",
            "Steps/elevation changes: Define dining vs lounging areas",
            "Bordered areas: Separate dining from cooking spaces",
            "Drainage channels: Recessed linear drains for water runoff",
          ],
        },
        {
          title: "Surface Textures",
          "content": [
            "Broom finish: Non-slip, subtle texture, economical",
            "Stamped: Patterned texture, mimics natural materials",
            "Exposed aggregate: Pebble surface, decorative, slip-resistant",
            "Salt finish: Subtle texture, historic appearance",
            "Polished: Smooth, modern, indoor-outdoor transition",
            "Sand finish: Fine texture, refined appearance",
          ],
        },
        {
          title: "Sizing Guidelines",
          "content": [
            "Dining area: 12x16 minimum for table + chairs",
            "Conversation area: 10-12 feet diameter for seating",
            "Chaise lounges: 4 feet each for comfortable spacing",
            "Path width: 3-4 feet minimum for walkways",
            "Full outdoor living: 20x20 or larger for multiple zones",
          ],
        },
      ],
      tips: [
        "Consider home architecture - match or complement style",
        "Larger pavers cost more but create more impressive appearance",
        "Border definition creates framed, finished appearance",
        "Multiple zones create functional, usable outdoor space",
        "Plan for furniture - ensure adequate space around tables",
      ],
      warnings: [
        "Smooth textures are slippery when wet - consider exposure",
        "Complex patterns cost more - labor-intensive installation",
        "Color changes over time - UV fades some colors",
        "Resealing required every 2-3 years to maintain appearance",
        "Free-form shapes create more waste and higher cost",
      ],
    },
    related: ["stamped-concrete", "patio-cost", "outdoor-living"],
  },
  {
    id: "permeable-paver-guide",
    title: "Permeable Pavers and Porous Concrete Guide",
    slug: "permeable-paver-guide",
    description: "Permeable paving options for driveways and patios. Porous concrete, permeable pavers, and installation.",
    category: "how-to",
    content: {
      introduction: "Permeable paving allows water to drain through the surface, reducing runoff and helping meet stormwater management requirements. Popular for eco-friendly construction.",
      sections: [
        {
          title: "Permeable Paver Types",
          "content": [
            "Permeable concrete pavers: Solid blocks with gaps filled with gravel",
            "Porous concrete: Concrete with reduced fines allowing water passage",
            "Plastic grid pavers: Grid filled with gravel or grass",
            "Permeable interlocking pavers: Special shapes that create drainage channels",
          ],
        },
        {
          title: "How Permeable Paving Works",
          "content": [
            "Surface: Water enters through gaps or porous surface",
            "Base layers: Open-graded aggregate allows water storage and percolation",
            "Soil: Water slowly infiltrates into ground below",
            "Reduces: Runoff by 80-100% compared to traditional paving",
            "Filters: Pollutants as water passes through aggregate layers",
          ],
        },
        {
          title: "Benefits",
          "content": [
            "Stormwater management: Reduces or eliminates need for retention ponds",
            "Environmental: Filters pollutants, recharges groundwater",
            "Flood prevention: Reduces runoff during heavy rain events",
            "Ice reduction: No standing water to freeze",
            "Regulatory: May qualify for credits or meet requirements",
            "Aesthetic: Similar appearance to traditional paving",
          ],
        },
        {
          title: "Installation Requirements",
          "content": [
            "Excavation: Typically 12-24 inches deep for aggregate storage",
            "Base layers: Open-graded gravel (no fines) - 2-3 layers",
            "Geotextile: Separates aggregate from soil below",
            "Edge restraints: Critical to prevent aggregate migration",
            "Slope: Can be installed on nearly level sites",
            "Soil testing: Determines percolation rate and depth needed",
          ],
        },
        {
          title: "Cost Comparison",
          "content": [
            "Traditional concrete: $6-10 per sq ft",
            "Permeable pavers: $12-20 per sq ft",
            "Porous concrete: $10-18 per sq ft",
            "Savings possible: Eliminates stormwater detention systems",
            "Incentives: Some areas offer rebates for permeable paving",
          ],
        },
        {
          title: "Maintenance",
          "content": [
            "Regular vacuuming: Removes sediment from pores/gaps",
            "Power washing: Annually or as needed to maintain permeability",
            "Surface replacement: Occasionally if damaged (individual pavers)",
            "Avoid: Sand or fine materials that clog pores",
            "Inspect: Regularly for evidence of ponding",
          ],
        },
      ],
      tips: [
        "Site conditions matter: Soil must drain for system to work",
        "Professional installation recommended: Critical to get base right",
        "Design for overflow: Extreme events may still produce runoff",
        "Vehicle loads: Specify pavers rated for driveway use",
        "Snow plowing: Use caution - can disjoint some paver types",
      ],
      warnings: [
        "Not suitable for high-clay soils with poor drainage",
        "Improper installation leads to clogging and failure",
        "Higher upfront cost (may be offset by stormwater system savings)",
        "Some maintenance required to prevent clogging",
        "Not all contractors have experience with permeable systems",
      ],
    },
    related: ["concrete-vs-pavers", "driveway-drainage", "eco-friendly-landscaping"],
  },
];

export function getGuideById(id: string): GuideData | undefined {
  return guides.find((g) => g.id === id);
}

export function getGuideBySlug(slug: string): GuideData | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuides(): GuideData[] {
  return guides;
}

export function getGuidesByCategory(
  category: GuideData["category"]
): GuideData[] {
  return guides.filter((g) => g.category === category);
}
