/**
 * Extended Guide Data - Roofing and Flooring
 */

const extendedGuides = [
  // ==================== ROOFING GUIDES ====================
  {
    id: "roofing-shingle-installation",
    title: "Asphalt Shingle Installation Guide: Step-by-Step",
    slug: "roofing-shingle-installation",
    description: "How to install asphalt shingles on your roof. Complete guide with safety tips and best practices.",
    category: "how-to" as const,
    content: {
      introduction: "Installing asphalt shingles is a significant DIY project that requires careful planning, proper safety measures, and attention to detail. This guide covers the complete process.",
      sections: [
        {
          title: "Safety First",
          content: [
            "Use fall protection: OSHA-compliant harness and anchor points",
            "Never work on roof in wet, windy, or icy conditions",
            "Have someone on ground in case of emergency",
            "Use proper ladder with secure footing",
            "Consider working with a professional for steep slopes",
          ],
        },
        {
          title: "Materials and Tools Needed",
          content: [
            "Asphalt shingles (3 bundles per 100 sq ft)",
            "Underlayment: 15# or 30# felt paper or synthetic",
            "Ice and water shield for valleys and eaves",
            "Roofing nails (1-1/4\" or 1\" coil or hand nails)",
            "Starter shingles for edges",
            "Hip and ridge shingles for peaks",
            "Roofing cement/sealant",
          ],
        },
        {
          title: "Step 1: Preparation",
          content: [
            "Remove old roofing down to deck",
            "Inspect and repair damaged deck boards",
            "Install drip edge metal at eaves",
            "Install ice and water barrier in valleys (24\" past interior wall)",
            "Install underlayment starting at eaves, overlapping 4-6 inches",
          ],
        },
        {
          title: "Step 2: Starter Course",
          content: [
            "Cut tabs off first shingles to create starter strip",
            "Install at eaves and rakes with 5\" exposure to weather",
            "Overhang drip edge by 1/4-3/8\"",
            "Nail 4 nails per shingle (6 nails in high wind areas)",
          ],
        },
        {
          title: "Step 3: Field Shingles",
          content: [
            "Install rows with 5\" exposure for architectural shingles",
            "Stagger seams by 6\" between rows",
            "Nail pattern: 4 nails evenly spaced",
            "Nails should be 1\" up from tab and 1\" from sides",
            "Maintain straight chalk lines for reference",
          ],
        },
        {
          title: "Step 4: Flashing and Valleys",
          content: [
            "Install step flashing where roof meets walls",
            "Weave flashing into shingle courses",
            "Valleys: Woven or closed-cut method (woven recommended)",
            "Extend flashing 4\" past roof edge",
            "Seal all flashing with roofing cement",
          ],
        },
        {
          title: "Step 5: Ridge Cap",
          content: [
            "Install ridge vent (if not present)",
            "Install hip and ridge shingles",
            "Nail according to manufacturer (usually 2 nails per shingle)",
            "Apply roofing cement to nail heads for wind protection",
          ],
        },
      ],
      tips: [
        "Order 10-15% extra shingles for waste and starter course",
        "Work from bottom to top, moving across roof",
        "Use roofing nail gun with appropriate depth setting",
        "Install shingles in cooler part of day - hot shingles are difficult",
        "Label shingles by bundle to keep color lots separate",
      ],
    },
  },
  // ==================== FLOORING GUIDES ====================
  {
    id: "flooring-types-comparison",
    title: "Flooring Types Comparison Guide: Which is Best for You?",
    slug: "flooring-types-comparison",
    description: "Compare flooring types including hardwood, laminate, tile, vinyl, and concrete for different applications.",
    category: "how-to" as const,
    content: {
      introduction: "Choosing the right flooring material depends on the room, your budget, lifestyle, and aesthetic preferences. This guide compares the most popular options.",
      sections: [
        {
          title: "Hardwood Flooring",
          content: [
            "Cost: $8-$20/sq ft (materials only)",
            "Lifespan: 30-100 years with proper care",
            "Pros: Natural beauty, adds home value, can be refinished",
            "Cons: Expensive, susceptible to scratches and water damage",
            "Best for: Living rooms, bedrooms, low-traffic areas",
          ],
        },
        {
          title: "Laminate Flooring",
          content: [
            "Cost: $2-$8/sq ft (materials only)",
            "Lifespan: 15-25 years",
            "Pros: Affordable, DIY-friendly, scratch-resistant",
            "Cons: Cannot be refinished, can be damaged by water",
            "Best for: Budget renovations, high-traffic areas, DIYers",
          ],
        },
        {
          title: "Ceramic/Porcelain Tile",
          content: [
            "Cost: $2-$15/sq ft (materials)",
            "Lifespan: 50-100+ years",
            "Pros: Extremely durable, water-resistant, many design options",
            "Cons: Cold/hard underfoot, grout requires maintenance",
            "Best for: Bathrooms, kitchens, entryways",
          ],
        },
        {
          title: "Vinyl Flooring",
          content: [
            "Cost: $2-$7/sq ft (materials)",
            "Lifespan: 10-20 years",
            "Pros: Waterproof, affordable, comfortable underfoot",
            "Cons: Can be damaged by sharp objects, can fade",
            "Best for: Basements, bathrooms, kitchens, mudrooms",
          ],
        },
        {
          title: "Polished Concrete",
          content: [
            "Cost: $3-$10/sq ft (existing slab)",
            "Lifespan: Indefinite with proper maintenance",
            "Pros: Very durable, low maintenance, modern look",
            "Cons: Can crack, cold/hard underfoot, requires sealing",
            "Best for: Modern homes, basements, garages, outdoor areas",
          ],
        },
      ],
    },
  },
  // ==================== EXPANDED CONCRETE GUIDES ====================
  {
    id: "concrete-sealing-guide",
    title: "How to Seal Concrete: Complete Guide to Sealing Driveways and Patios",
    slug: "how-to-seal-concrete",
    description: "Learn when and how to seal concrete driveways and patios. Protect your concrete from stains and damage.",
    category: "maintenance" as const,
    content: {
      introduction: "Sealing concrete protects it from water damage, oil stains, deicing salt damage, and surface wear. Proper sealing can dramatically extend the life of your concrete.",
      sections: [
        {
          title: "When to Seal Concrete",
          content: [
            "Wait 28 days after pouring for new concrete",
            "Test water absorption: Sprinkle water on surface - if it beads up, concrete isn't ready",
            "Seal every 2-3 years for driveways, 3-4 years for patios",
            "Best time: Spring or fall when temperatures are 50-80°F",
            "Avoid sealing in direct sunlight - product may dry too fast",
          ],
        },
        {
          title: "Types of Concrete Sealers",
          content: [
            "Acrylic sealers: Form film protection, 1-3 years life, moderate cost",
            "Silane/Siloxane sealers: Penetrating, breathable, 2-5 years life, higher cost",
            "Epoxy sealers: Very durable, glossy finish, 1-3 years life, hardest to apply",
            "Wax sealers: Short-term protection, easy to apply, 6-12 months life",
          ],
        },
        {
          title: "Application Steps",
          content: [
            "1. Clean concrete thoroughly - use concrete cleaner or degreaser",
            "2. Etch smooth concrete for better sealer adhesion",
            "3. Remove all cleaning residue with pressure washer",
            "4. Let concrete dry completely (24-48 hours)",
            "5. Apply sealer in small sections following grain or pattern",
            "6. Back-roll to ensure even application",
            "7. Allow to dry per manufacturer instructions (2-24 hours)",
          ],
        },
      ],
    },
  },
  {
    id: "removing-concrete-stains",
    title: "How to Remove Stains from Concrete: Oil, Paint, Rust & More",
    slug: "how-to-remove-concrete-stains",
    description: "Complete guide to removing oil, paint, rust, and other tough stains from concrete driveways and patios.",
    category: "maintenance" as const,
    content: {
      introduction: "Concrete stains are inevitable, but most can be removed with the right approach. Tackle stains promptly for best results.",
      sections: [
        {
          title: "Oil and Grease Stains",
          content: [
            "Immediate action: Absorb with kitty litter or sawdust",
            "Cleaner: Trisodium phosphate (TSP) or degreaser",
            "Method: Scrub with TSP solution, rinse thoroughly",
            "Stubborn stains: Apply poultice of baking soda and water",
            "Prevention: Seal concrete to prevent future staining",
          ],
        },
        {
          title: "Paint Stains",
          content: [
            "Water-based paint: Remove with pressure washer and concrete cleaner",
            "Oil-based paint: Use paint stripper or acetone (test in small area first)",
            "Graffiti: Wire brush scrubbing or chemical remover",
            "Large areas: Shot blasting or grinding may be necessary",
            "Stains that penetrate: May require professional services",
          ],
        },
        {
          title: "Rust Stains",
          content: [
            "Method: Create poultice of lemon juice and salt",
            "Alternative: Commercial rust remover",
            "Application: Cover stain, cover with plastic, leave 24 hours",
            "Scrub with wire brush and rinse",
            "Stubborn rust: Repeat treatment or use commercial rust remover",
          ],
        },
        {
          title: "Tire Marks",
          content: [
            "Fresh marks: Clean with concrete cleaner and stiff brush",
            "Set-in marks: Use degreaser and scrub vigorously",
            "Deep stains: May need grinding to remove",
            "Prevention: Use cardboard under tires in garage",
          ],
        },
      ],
    },
  },
];

export { extendedGuides };
export function getAllExtendedGuides() {
  return extendedGuides;
}
