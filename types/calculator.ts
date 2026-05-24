/**
 * Input field types for calculators
 */
export type CalculatorInputType = "number" | "percent" | "select" | "checkbox";

/**
 * Unit types for measurement inputs
 */
export type CalculatorUnit = "length" | "volume" | "weight" | "currency";

/**
 * Calculator input field configuration
 */
export interface CalculatorInput {
  /** Unique identifier for the input */
  name: string;
  /** Display label for the input */
  label: string;
  /** Type of input field */
  type: CalculatorInputType;
  /** Unit type for display (optional) */
  unit?: CalculatorUnit;
  /** Whether the input is required */
  required: boolean;
  /** Default value */
  default?: any;
  /** Minimum value (for numeric inputs) */
  min?: number;
  /** Maximum value (for numeric inputs) */
  max?: number;
  /** Step value (for numeric inputs) */
  step?: number;
  /** Options for select inputs */
  options?: { value: string; label: string }[];
  /** Placeholder text */
  placeholder?: string;
}

/**
 * Calculator output field configuration
 */
export interface CalculatorOutput {
  /** Unique identifier for the output */
  name: string;
  /** Display label for the output */
  label: string;
  /** Whether this is the primary result to highlight */
  primary?: boolean;
  /** Show only if this input has a value */
  conditional?: string;
  /** Unit to display */
  unit?: string;
  /** Number of decimal places */
  decimals?: number;
}

/**
 * Calculator configuration
 * This defines everything needed to render and run a calculator
 */
export interface CalculatorConfig {
  /** Unique identifier */
  id: string;
  /** Display name */
  name: string;
  /** URL slug */
  slug: string;
  /** Short description */
  description: string;
  /** Category slug */
  category: string;
  /** Lucide icon name */
  icon: string;
  /** Input field configurations */
  inputs: CalculatorInput[];
  /** Output field configurations */
  outputs: CalculatorOutput[];
  /** Calculation engine name */
  engine: string;
  /** SEO meta title */
  seoTitle?: string;
  /** SEO meta description */
  seoDescription?: string;
}

/**
 * Calculator category configuration
 */
export interface CategoryConfig {
  /** URL slug */
  slug: string;
  /** Display name */
  name: string;
  /** Description */
  description: string;
  /** Lucide icon name */
  icon: string;
  /** Tailwind color name */
  color: string;
}

/**
 * Unit system for measurements
 */
export type UnitSystem = "imperial" | "metric";

/**
 * Length units
 */
export type LengthUnit = "ft" | "in" | "yd" | "m" | "cm" | "mm";

/**
 * Calculation engine function signature
 */
export type CalculationEngine<T = any, R = any> = (inputs: T) => R;

/**
 * Calculator state (all input values)
 */
export interface CalculatorState {
  [key: string]: number | string | undefined;
}

/**
 * Calculator results (all output values)
 */
export interface CalculatorResults {
  [key: string]: number | string | undefined;
}
