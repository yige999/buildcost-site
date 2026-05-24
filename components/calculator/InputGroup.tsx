import { CalculatorInput, CalculatorUnit, UnitSystem } from "@/types/calculator";
import { cn } from "@/lib/utils";

interface InputGroupProps {
  input: CalculatorInput;
  value: number | string;
  onChange: (value: number | string) => void;
  unitSystem?: UnitSystem;
  error?: boolean;
  disabled?: boolean;
}

const unitLabels: Record<CalculatorUnit, Record<UnitSystem, string>> = {
  length: {
    imperial: "ft",
    metric: "m",
  },
  volume: {
    imperial: "cu ft",
    metric: "m³",
  },
  weight: {
    imperial: "lbs",
    metric: "kg",
  },
  currency: {
    imperial: "$",
    metric: "$",
  },
};

export function InputGroup({
  input,
  value,
  onChange,
  unitSystem = "imperial",
  error = false,
  disabled = false,
}: InputGroupProps) {
  const { label, type, unit, required, min, max, step, placeholder, options } = input;

  const displayValue = value === undefined || value === null ? "" : String(value);
  const unitLabel = unit ? unitLabels[unit]?.[unitSystem] || "" : "";

  // Handle select input type
  if (type === "select" && options) {
    return (
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-secondary-700 flex items-center gap-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <select
          value={displayValue}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={cn(
            "w-full px-4 py-3 rounded-lg border",
            "bg-white text-secondary-900",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
            "disabled:bg-secondary-100 disabled:text-secondary-500 disabled:cursor-not-allowed",
            "transition-all duration-200",
            error && "border-red-300 focus:ring-red-500",
            !error && "border-secondary-300"
          )}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // Handle number input type
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      onChange(newValue);
    } else if (e.target.value === "") {
      onChange(0);
    }
  };

  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-secondary-700 flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type="number"
          value={displayValue}
          onChange={handleChange}
          min={min}
          max={max}
          step={step ?? (type === "percent" ? 1 : 0.1)}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "w-full px-4 py-3 pr-16 rounded-lg border",
            "bg-white text-secondary-900 placeholder:text-secondary-400",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
            "disabled:bg-secondary-100 disabled:text-secondary-500 disabled:cursor-not-allowed",
            "transition-all duration-200",
            error && "border-red-300 focus:ring-red-500",
            !error && "border-secondary-300"
          )}
        />
        {unitLabel && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-500 font-medium">
            {unitLabel}
          </span>
        )}
      </div>
    </div>
  );
}
