/**
 * Top US Cities Data for Programmatic SEO
 * Contains climate, cost factors, and regional insights for major metropolitan areas
 */

export interface CityData {
  /** City name */
  city: string;
  /** State name */
  state: string;
  /** URL-safe city slug */
  slug: string;
  /** URL-safe state slug */
  stateSlug: string;
  /** Primary ZIP code for the city */
  zip: string;
  /** Climate-specific roofing or construction tip */
  climateTip: string;
  /** Labor cost multiplier (1.0 = national average) */
  laborRate: number;
  /** Base material cost adjustment (percentage) */
  basePriceOffset: number;
  /** Climate classification */
  climate: "hot-humid" | "hot-arid" | "cold" | "temperate" | "mixed";
  /** Recommended construction considerations */
  considerations: string[];
}

/**
 * Top 30 US Metropolitan Areas with Regional Diversity
 * Covers all major climate zones and cost-of-living variations
 */
export const topCities: CityData[] = [
  // =========================================================================
  // NORTHEAST - Cold, Snowy Winters
  // =========================================================================
  {
    city: "New York",
    state: "New York",
    slug: "new-york",
    stateSlug: "new-york",
    zip: "10001",
    climateTip: "Heavy snow loads require structural reinforcement and ice dam prevention measures.",
    laborRate: 1.45,
    basePriceOffset: 15,
    climate: "cold",
    considerations: [
      "Ice and water shield required in valleys",
      "Heated roof melt systems recommended",
      "Higher wind ratings needed for high-rise buildings",
      "Strict building codes and permit requirements",
    ],
  },
  {
    city: "Philadelphia",
    state: "Pennsylvania",
    slug: "philadelphia",
    stateSlug: "pennsylvania",
    zip: "19101",
    climateTip: "Freeze-thaw cycles require shingles with high crack resistance ratings.",
    laborRate: 1.18,
    basePriceOffset: 5,
    climate: "cold",
    considerations: [
      "Ice dam protection essential",
      "Proper attic ventilation critical",
      "Consider impact-resistant shingles",
    ],
  },
  {
    city: "Boston",
    state: "Massachusetts",
    slug: "boston",
    stateSlug: "massachusetts",
    zip: "02101",
    climateTip: "Nor'easters bring heavy snow and wind - require 6-nail installation pattern.",
    laborRate: 1.35,
    basePriceOffset: 12,
    climate: "cold",
    considerations: [
      "Ice and water shield minimum 24 inches past interior wall",
      "Heated cables common for roof edges",
      "Strict historic district requirements",
    ],
  },

  // =========================================================================
  // MIDWEST - Cold Winters, Temperature Extremes
  // =========================================================================
  {
    city: "Chicago",
    state: "Illinois",
    slug: "chicago",
    stateSlug: "illinois",
    zip: "60601",
    climateTip: "Extreme cold and wind require impact-resistant shingles and enhanced sealing.",
    laborRate: 1.22,
    basePriceOffset: 8,
    climate: "cold",
    considerations: [
      "Wind ratings minimum 110 mph required",
      "Ice and water shield full deck recommended",
      "Extra fasteners in high-wind zones",
      "Short roofing season affects pricing",
    ],
  },
  {
    city: "Detroit",
    state: "Michigan",
    slug: "detroit",
    stateSlug: "michigan",
    zip: "48201",
    climateTip: "Lake-effect snow requires extra structural load capacity.",
    laborRate: 1.15,
    basePriceOffset: 0,
    climate: "cold",
    considerations: [
      "Ice dam prevention essential",
      "Enhanced underlayment recommended",
      "Proper insulation prevents ice dams",
    ],
  },
  {
    city: "Minneapolis",
    state: "Minnesota",
    slug: "minneapolis",
    stateSlug: "minnesota",
    zip: "55401",
    climateTip: "Extreme sub-zero temperatures demand premium underlayment and cold-weather installation techniques.",
    laborRate: 1.20,
    basePriceOffset: 5,
    climate: "cold",
    considerations: [
      "Cold weather shingle installation required",
      "Synthetic underlayment prevents ice damage",
      "Heavy snow load considerations",
      "Short construction season",
    ],
  },
  {
    city: "Cleveland",
    state: "Ohio",
    slug: "cleveland",
    stateSlug: "ohio",
    zip: "44101",
    climateTip: "Lake-effect snow belt requires enhanced ice and water protection.",
    laborRate: 1.12,
    basePriceOffset: 0,
    climate: "cold",
    considerations: [
      "Ice dam protection mandatory",
      "6-nail installation recommended",
      "Synthetic underlayment worth investment",
    ],
  },
  {
    city: "Indianapolis",
    state: "Indiana",
    slug: "indianapolis",
    stateSlug: "indiana",
    zip: "46201",
    climateTip: "Severe thunderstorms and hail require impact-resistant shingles (UL 2218 rated).",
    laborRate: 1.08,
    basePriceOffset: -2,
    climate: "mixed",
    considerations: [
      "Hail-resistant shingles recommended",
      "Proper sealing for wind-driven rain",
      "Annual hail damage inspections advised",
    ],
  },
  {
    city: "Milwaukee",
    state: "Wisconsin",
    slug: "milwaukee",
    stateSlug: "wisconsin",
    zip: "53201",
    climateTip: "Lake Michigan snow and extreme cold require premium installation practices.",
    laborRate: 1.18,
    basePriceOffset: 3,
    climate: "cold",
    considerations: [
      "Ice and water shield at eaves critical",
      "Heated roof edge systems common",
      "Heavy winter snow loads",
    ],
  },
  {
    city: "Kansas City",
    state: "Missouri",
    slug: "kansas-city",
    stateSlug: "missouri",
    zip: "64101",
    climateTip: "Tornado alley location requires enhanced wind resistance and proper fastening.",
    laborRate: 1.05,
    basePriceOffset: -5,
    climate: "mixed",
    considerations: [
      "Wind rating minimum 110 mph",
      "Impact-resistant shingles recommended",
      "Proper strap-to-foundation connection",
    ],
  },

  // =========================================================================
  // SOUTH - Hot, Humid, Hurricane Risk
  // =========================================================================
  {
    city: "Houston",
    state: "Texas",
    slug: "houston",
    stateSlug: "texas",
    zip: "77001",
    climateTip: "High heat and humidity require algae-resistant shingles and enhanced ventilation.",
    laborRate: 1.15,
    basePriceOffset: 0,
    climate: "hot-humid",
    considerations: [
      "Algae-resistant granules essential",
      "Ridge vents with high airflow capacity",
      "Radiant barrier underlayment recommended",
      "Hurricane-rated wind protection (150 mph)",
    ],
  },
  {
    city: "Dallas",
    state: "Texas",
    slug: "dallas",
    stateSlug: "texas",
    zip: "75201",
    climateTip: "Extreme heat (100°F+ summers) requires reflective or light-colored roofing materials.",
    laborRate: 1.12,
    basePriceOffset: 0,
    climate: "hot-arid",
    considerations: [
      "Cool roof options reduce energy costs",
      "Hail-resistant shingles strongly recommended",
      "Proper attic ventilation critical",
      "UV-resistant materials essential",
    ],
  },
  {
    city: "San Antonio",
    state: "Texas",
    slug: "san-antonio",
    stateSlug: "texas",
    zip: "78201",
    climateTip: "Intense heat and hail storms require Class 4 impact resistance.",
    laborRate: 1.10,
    basePriceOffset: -2,
    climate: "hot-arid",
    considerations: [
      "Hail country - Class 4 shingles recommended",
      "Light colors reduce cooling costs",
      "Enhanced ventilation required",
    ],
  },
  {
    city: "Austin",
    state: "Texas",
    slug: "austin",
    stateSlug: "texas",
    zip: "78701",
    climateTip: "Hot summers with occasional hail require impact-resistant materials.",
    laborRate: 1.18,
    basePriceOffset: 5,
    climate: "hot-arid",
    considerations: [
      "Hail damage common investment",
      "Cool roof options available",
      "Proper ventilation extends shingle life",
    ],
  },
  {
    city: "Fort Worth",
    state: "Texas",
    slug: "fort-worth",
    stateSlug: "texas",
    zip: "76101",
    climateTip: "North Texas hail alley requires Class 4 impact-rated shingles.",
    laborRate: 1.08,
    basePriceOffset: -3,
    climate: "hot-arid",
    considerations: [
      "Hail-resistant shingles highly recommended",
      "Insurance discounts for impact-resistant roofs",
      "Wind rating minimum 110 mph",
    ],
  },
  {
    city: "Jacksonville",
    state: "Florida",
    slug: "jacksonville",
    stateSlug: "florida",
    zip: "32201",
    climateTip: "Humid subtropical climate requires algae resistance and hurricane-rated wind protection.",
    laborRate: 1.08,
    basePriceOffset: 0,
    climate: "hot-humid",
    considerations: [
      "Algae-resistant shingles required",
      "Hurricane clips and straps mandatory",
      "Salt air corrosion resistance",
      " enhanced nailing patterns required",
    ],
  },
  {
    city: "Miami",
    state: "Florida",
    slug: "miami",
    stateSlug: "florida",
    zip: "33101",
    climateTip: "Hurricane zone requires 180 mph wind rating and secondary water barrier.",
    laborRate: 1.25,
    basePriceOffset: 10,
    climate: "hot-humid",
    considerations: [
      "Hurricane-rated roofing mandatory",
      "Secondary water barrier required by code",
      "Salt corrosion-resistant materials",
      "Enhanced nailing patterns (6 nails per shingle)",
    ],
  },
  {
    city: "Atlanta",
    state: "Georgia",
    slug: "atlanta",
    stateSlug: "georgia",
    zip: "30301",
    climateTip: "Hot humid summers and occasional ice storms require versatile roofing solutions.",
    laborRate: 1.12,
    basePriceOffset: 0,
    climate: "hot-humid",
    considerations: [
      "Algae resistance essential",
      "Proper attic ventilation critical",
      "Ice dam protection for occasional winter storms",
    ],
  },
  {
    city: "Charlotte",
    state: "North Carolina",
    slug: "charlotte",
    stateSlug: "north-carolina",
    zip: "28201",
    climateTip: "Humid summers with hail risk require impact-resistant shingles.",
    laborRate: 1.10,
    basePriceOffset: 0,
    climate: "hot-humid",
    considerations: [
      "Hail-resistant shingles recommended",
      "Algae resistance important",
      "Good ventilation prevents moisture damage",
    ],
  },
  {
    city: "Nashville",
    state: "Tennessee",
    slug: "nashville",
    stateSlug: "tennessee",
    zip: "37201",
    climateTip: "Humid subtropical with seasonal storms require Class 3 impact rating.",
    laborRate: 1.08,
    basePriceOffset: -2,
    climate: "hot-humid",
    considerations: [
      "Impact-resistant shingles recommended",
      "Proper ventilation essential",
      "Algae-resistant granules",
    ],
  },

  // =========================================================================
  // WEST - Varied Climates, High Costs
  // =========================================================================
  {
    city: "Los Angeles",
    state: "California",
    slug: "los-angeles",
    stateSlug: "california",
    zip: "90001",
    climateTip: "Mediterranean climate with wildfire risks require Class A fire-rated materials.",
    laborRate: 1.55,
    basePriceOffset: 20,
    climate: "hot-arid",
    considerations: [
      "Title 24 energy compliance required",
      "Cool roof ratings mandatory for new construction",
      "Fire-resistant materials in wildfire zones",
      "Strict permitting and inspection process",
    ],
  },
  {
    city: "San Francisco",
    state: "California",
    slug: "san-francisco",
    stateSlug: "california",
    zip: "94102",
    climateTip: "Foggy, mild climate with salt air require corrosion-resistant materials.",
    laborRate: 1.65,
    basePriceOffset: 25,
    climate: "temperate",
    considerations: [
      "Salt air corrosion resistance essential",
      "Cool roof requirements for new construction",
      "Complex permitting process",
      "Historic district requirements common",
    ],
  },
  {
    city: "San Diego",
    state: "California",
    slug: "san-diego",
    stateSlug: "california",
    zip: "92101",
    climateTip: "Mild climate with marine layer - algae resistance and salt corrosion protection needed.",
    laborRate: 1.50,
    basePriceOffset: 18,
    climate: "temperate",
    considerations: [
      "Cool roof Title 24 compliance",
      "Salt corrosion resistance",
      "Algae resistance near coast",
      "High labor costs affect total project cost",
    ],
  },
  {
    city: "San Jose",
    state: "California",
    slug: "san-jose",
    stateSlug: "california",
    zip: "95101",
    climateTip: "Mild inland climate with Title 24 cool roof requirements.",
    laborRate: 1.70,
    basePriceOffset: 22,
    climate: "hot-arid",
    considerations: [
      "Title 24 energy compliance mandatory",
      "Cool roof reflectance requirements",
      "Highest labor rates in continental US",
    ],
  },
  {
    city: "Seattle",
    state: "Washington",
    slug: "seattle",
    stateSlug: "washington",
    zip: "98101",
    climateTip: "Rainy climate requires enhanced water barriers and moss prevention.",
    laborRate: 1.42,
    basePriceOffset: 12,
    climate: "temperate",
    considerations: [
      "Synthetic underlayment recommended",
      "Moss-resistant copper or zinc strips",
      "Enhanced drainage systems",
      "PVC vent pipes (not metal) to prevent corrosion",
    ],
  },
  {
    city: "Portland",
    state: "Oregon",
    slug: "portland",
    stateSlug: "oregon",
    zip: "97201",
    climateTip: "Wet climate with moss growth requires moss-resistant roofing materials.",
    laborRate: 1.28,
    basePriceOffset: 8,
    climate: "temperate",
    considerations: [
      "Moss prevention treatments needed",
      "Excellent water barrier essential",
      "Zinc or copper strips prevent moss",
    ],
  },

  // =========================================================================
  // MOUNTAIN/SOUTHWEST - Dry, Extreme Temperatures
  // =========================================================================
  {
    city: "Phoenix",
    state: "Arizona",
    slug: "phoenix",
    stateSlug: "arizona",
    zip: "85001",
    climateTip: "Extreme desert heat (120°F+) requires reflective cool roofs and UV-resistant materials.",
    laborRate: 1.15,
    basePriceOffset: 0,
    climate: "hot-arid",
    considerations: [
      "Cool roof rating mandatory for new construction",
      "UV-resistant materials essential",
      "Thermal expansion accommodation needed",
      "Night radiative cooling benefits",
    ],
  },
  {
    city: "Denver",
    state: "Colorado",
    slug: "denver",
    stateSlug: "colorado",
    zip: "80201",
    climateTip: "High altitude UV exposure and heavy snow require UV-resistant materials and ice protection.",
    laborRate: 1.25,
    basePriceOffset: 8,
    climate: "mixed",
    considerations: [
      "Increased UV damage at altitude",
      "Heavy snow load requirements",
      "Ice dam protection essential",
      "Rapid temperature changes affect materials",
    ],
  },
  {
    city: "Las Vegas",
    state: "Nevada",
    slug: "las-vegas",
    stateSlug: "nevada",
    zip: "89101",
    climateTip: "Extreme desert heat requires cool roof ratings and materials tested for 150°F+ surface temperatures.",
    laborRate: 1.18,
    basePriceOffset: 3,
    climate: "hot-arid",
    considerations: [
      "Cool roof materials reduce cooling costs",
      "UV resistance critical",
      "Thermal shock resistant materials",
      "Proper insulation essential",
    ],
  },

  // =========================================================================
  // MID-ATLANTIC - Mixed Climate
  // =========================================================================
  {
    city: "Washington",
    state: "District of Columbia",
    slug: "washington",
    stateSlug: "district-of-columbia",
    zip: "20001",
    climateTip: "Humid summers with ice storm winters require versatile roofing solutions.",
    laborRate: 1.38,
    basePriceOffset: 10,
    climate: "mixed",
    considerations: [
      "Impact-resistant shingles recommended",
      "Ice dam protection for winter",
      "Enhanced ventilation for summer humidity",
      "Strict historic district codes",
    ],
  },
  {
    city: "Baltimore",
    state: "Maryland",
    slug: "baltimore",
    stateSlug: "maryland",
    zip: "21201",
    climateTip: "Coastal exposure with winter ice require algae and ice protection.",
    laborRate: 1.20,
    basePriceOffset: 5,
    climate: "mixed",
    considerations: [
      "Algae resistance near coast",
      "Ice dam protection inland",
      "Wind ratings minimum 110 mph",
    ],
  },
];

/**
 * Get city data by state and city slugs
 * @param stateSlug - State slug (e.g., "texas")
 * @param citySlug - City slug (e.g., "houston")
 * @returns City data or undefined if not found
 */
export function getCityData(
  stateSlug: string,
  citySlug: string
): CityData | undefined {
  return topCities.find(
    (city) => city.stateSlug === stateSlug && city.slug === citySlug
  );
}

/**
 * Get all cities in a state
 * @param stateSlug - State slug (e.g., "texas")
 * @returns Array of cities in the state
 */
export function getCitiesByState(stateSlug: string): CityData[] {
  return topCities.filter((city) => city.stateSlug === stateSlug);
}

/**
 * Get cities by climate zone
 * @param climate - Climate type
 * @returns Array of cities in the climate zone
 */
export function getCitiesByClimate(
  climate: CityData["climate"]
): CityData[] {
  return topCities.filter((city) => city.climate === climate);
}

/**
 * Get all unique states
 * @returns Array of unique state data
 */
export function getUniqueStates(): Array<{
  state: string;
  stateSlug: string;
}> {
  const stateMap = new Map<string, string>();
  topCities.forEach((city) => {
    if (!stateMap.has(city.stateSlug)) {
      stateMap.set(city.stateSlug, city.state);
    }
  });
  return Array.from(stateMap.entries()).map(([stateSlug, state]) => ({
    state,
    stateSlug,
  }));
}
