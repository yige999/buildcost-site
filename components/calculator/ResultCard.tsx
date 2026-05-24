import { CalculatorOutput, CalculatorResults } from "@/types/calculator";
import { cn, formatNumber, formatCurrency } from "@/lib/utils";

interface ResultCardProps {
  outputs: CalculatorOutput[];
  results: CalculatorResults;
  className?: string;
}

export function ResultCard({ outputs, results, className }: ResultCardProps) {
  // Filter outputs based on conditional requirements
  const visibleOutputs = outputs.filter((output) => {
    if (output.conditional) {
      const conditionalValue = results[output.conditional];
      return (
        conditionalValue !== undefined &&
        conditionalValue !== null &&
        conditionalValue !== ""
      );
    }
    return true;
  });

  if (visibleOutputs.length === 0) {
    return null;
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Primary Result - Large Display */}
      {visibleOutputs.some((o) => o.primary) && (
        <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-6 shadow-lg">
          <p className="text-primary-100 text-sm font-medium mb-1">
            {visibleOutputs.find((o) => o.primary)?.label}
          </p>
          <p className="text-4xl md:text-5xl font-bold">
            {formatResult(
              visibleOutputs.find((o) => o.primary)!,
              results
            )}
          </p>
        </div>
      )}

      {/* Secondary Results - Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {visibleOutputs
          .filter((o) => !o.primary)
          .map((output) => (
            <div
              key={output.name}
              className="bg-white rounded-xl p-4 border border-secondary-200 shadow-sm"
            >
              <p className="text-secondary-600 text-xs font-medium mb-1">
                {output.label}
              </p>
              <p className="text-xl md:text-2xl font-bold text-secondary-900">
                {formatResult(output, results)}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

function formatResult(output: CalculatorOutput, results: CalculatorResults): string {
  const value = results[output.name];

  if (value === undefined || value === null) {
    return "-";
  }

  const numValue = typeof value === "number" ? value : parseFloat(String(value));

  if (isNaN(numValue)) {
    return "-";
  }

  // Format as currency if the name includes "cost" or "price"
  if (
    output.name.toLowerCase().includes("cost") ||
    output.name.toLowerCase().includes("price")
  ) {
    return formatCurrency(numValue);
  }

  // Format as number with unit
  const decimals = output.decimals ?? 2;
  const formattedNumber = formatNumber(numValue, decimals);
  const unit = output.unit ? ` ${output.unit}` : "";

  return `${formattedNumber}${unit}`;
}
