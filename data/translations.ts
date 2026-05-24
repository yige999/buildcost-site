/**
 * Translations for i18n support
 * Currently supporting English (en) and Spanish (es)
 */

export interface Translations {
  // Common
  siteName: string;
  home: string;
  about: string;
  contact: string;

  // Calculator
  calculator: string;
  calculate: string;
  results: string;
  reset: string;
  download: string;
  share: string;
  print: string;

  // Units
  feet: string;
  inches: string;
  yards: string;
  meters: string;
  centimeters: string;
  cubicFeet: string;
  cubicYards: string;
  cubicMeters: string;
  squareFeet: string;
  squareYards: string;
  squareMeters: string;

  // Concrete
  concrete: string;
  concreteSlab: string;
  concreteVolume: string;
  bagsNeeded: string;
  bag80lb: string;
  bag60lb: string;
  wasteFactor: string;
  thickness: string;
  length: string;
  width: string;
  depth: string;
  height: string;
  diameter: string;
  quantity: string;

  // Input labels
  enterLength: string;
  enterWidth: string;
  enterDepth: string;
  enterHeight: string;
  enterDiameter: string;
  enterQuantity: string;
  enterPrice: string;
  optional: string;

  // Results
  totalVolume: string;
  estimatedCost: string;
  materialCost: string;
  laborCost: string;

  // Location
  city: string;
  state: string;
  localPricing: string;
  climate: string;
  frostLine: string;

  // Actions
  getStarted: string;
  learnMore: string;
  viewAll: string;
  seeAlso: string;
  relatedCalculators: string;

  // SEO
  metaTitle: string;
  metaDescription: string;

  // Errors
  invalidInput: string;
  required: string;
  mustBePositive: string;
}

export const translations: Record<string, Translations> = {
  en: {
    siteName: "BuildCost.site",
    home: "Home",
    about: "About",
    contact: "Contact",

    calculator: "Calculator",
    calculate: "Calculate",
    results: "Results",
    reset: "Reset",
    download: "Download",
    share: "Share",
    print: "Print",

    feet: "ft",
    inches: "in",
    yards: "yd",
    meters: "m",
    centimeters: "cm",
    cubicFeet: "cu ft",
    cubicYards: "cu yd",
    cubicMeters: "m³",
    squareFeet: "sq ft",
    squareYards: "sq yd",
    squareMeters: "m²",

    concrete: "Concrete",
    concreteSlab: "Concrete Slab",
    concreteVolume: "Concrete Volume",
    bagsNeeded: "Bags Needed",
    bag80lb: "80lb Bags",
    bag60lb: "60lb Bags",
    wasteFactor: "Waste Factor",
    thickness: "Thickness",
    length: "Length",
    width: "Width",
    depth: "Depth",
    height: "Height",
    diameter: "Diameter",
    quantity: "Quantity",

    enterLength: "Enter length",
    enterWidth: "Enter width",
    enterDepth: "Enter thickness",
    enterHeight: "Enter height",
    enterDiameter: "Enter diameter",
    enterQuantity: "Enter quantity",
    enterPrice: "Enter price per unit",
    optional: "Optional",

    totalVolume: "Total Volume",
    estimatedCost: "Estimated Cost",
    materialCost: "Material Cost",
    laborCost: "Labor Cost",

    city: "City",
    state: "State",
    localPricing: "Local Pricing",
    climate: "Climate",
    frostLine: "Frost Line",

    getStarted: "Get Started",
    learnMore: "Learn More",
    viewAll: "View All",
    seeAlso: "See Also",
    relatedCalculators: "Related Calculators",

    metaTitle: "Free Construction Calculators",
    metaDescription: "Calculate concrete, roofing, and construction materials with free online calculators.",

    invalidInput: "Invalid input",
    required: "This field is required",
    mustBePositive: "Value must be positive",
  },

  es: {
    siteName: "BuildCost.site",
    home: "Inicio",
    about: "Acerca de",
    contact: "Contacto",

    calculator: "Calculadora",
    calculate: "Calcular",
    results: "Resultados",
    reset: "Reiniciar",
    download: "Descargar",
    share: "Compartir",
    print: "Imprimir",

    feet: "pies",
    inches: "pulgadas",
    yards: "yardas",
    meters: "metros",
    centimeters: "centímetros",
    cubicFeet: "pies cúbicos",
    cubicYards: "yardas cúbicas",
    cubicMeters: "m³",
    squareFeet: "pies cuadrados",
    squareYards: "yardas cuadradas",
    squareMeters: "m²",

    concrete: "Concreto",
    concreteSlab: "Losa de Concreto",
    concreteVolume: "Volumen de Concreto",
    bagsNeeded: "Bolsas Necesarias",
    bag80lb: "Bolsas de 80lb",
    bag60lb: "Bolsas de 60lb",
    wasteFactor: "Factor de Desperdicio",
    thickness: "Grosor",
    length: "Largo",
    width: "Ancho",
    depth: "Profundidad",
    height: "Altura",
    diameter: "Diámetro",
    quantity: "Cantidad",

    enterLength: "Ingrese el largo",
    enterWidth: "Ingrese el ancho",
    enterDepth: "Ingrese el grosor",
    enterHeight: "Ingrese la altura",
    enterDiameter: "Ingrese el diámetro",
    enterQuantity: "Ingrese la cantidad",
    enterPrice: "Ingrese el precio por unidad",
    optional: "Opcional",

    totalVolume: "Volumen Total",
    estimatedCost: "Costo Estimado",
    materialCost: "Costo de Materiales",
    laborCost: "Costo de Mano de Obra",

    city: "Ciudad",
    state: "Estado",
    localPricing: "Precios Locales",
    climate: "Clima",
    frostLine: "Línea de Helada",

    getStarted: "Comenzar",
    learnMore: "Aprende Más",
    viewAll: "Ver Todos",
    seeAlso: "Véase También",
    relatedCalculators: "Calculadoras Relacionadas",

    metaTitle: "Calculadoras de Construcción Gratis",
    metaDescription: "Calcula concreto, techumbre y materiales de construcción con calculadoras en línea gratis.",

    invalidInput: "Entrada inválida",
    required: "Este campo es requerido",
    mustBePositive: "El valor debe ser positivo",
  },
};

/**
 * Get translations for a locale
 */
export function getTranslations(locale: string = "en"): Translations {
  return translations[locale] || translations.en;
}

/**
 * Get all supported locales
 */
export function getSupportedLocales(): string[] {
  return Object.keys(translations);
}

/**
 * Check if a locale is supported
 */
export function isLocaleSupported(locale: string): boolean {
  return locale in translations;
}

/**
 * Get locale from path or default to 'en'
 */
export function getLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (isLocaleSupported(firstSegment)) {
    return firstSegment;
  }

  return "en";
}
