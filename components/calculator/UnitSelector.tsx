import { UnitSystem } from "@/types/calculator";
import { cn } from "@/lib/utils";

interface UnitSelectorProps {
  value: UnitSystem;
  onChange: (value: UnitSystem) => void;
  className?: string;
}

const options: { value: UnitSystem; label: string }[] = [
  { value: "imperial", label: "Imperial (ft/in)" },
  { value: "metric", label: "Metric (m/cm)" },
];

export function UnitSelector({ value, onChange, className }: UnitSelectorProps) {
  return (
    <div
      className={cn(
        "inline-flex rounded-lg bg-secondary-200 p-1",
        "border border-secondary-300",
        className
      )}
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
            "min-w-[120px]",
            value === option.value
              ? "bg-white text-primary shadow-sm"
              : "text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100/50"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
