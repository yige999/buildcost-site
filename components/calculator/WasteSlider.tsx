import { cn } from "@/lib/utils";

interface WasteSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export function WasteSlider({
  value,
  onChange,
  min = 0,
  max = 20,
  className,
}: WasteSliderProps) {
  // Calculate color based on value
  const getColor = () => {
    if (value <= 5) return "text-green-600";
    if (value <= 10) return "text-amber-600";
    return "text-orange-600";
  };

  const getBackground = () => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #2563eb ${percentage}%, #e2e8f0 ${percentage}%)`;
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-secondary-700">
          Waste Factor
        </label>
        <span className={cn("text-lg font-bold", getColor())}>{value}%</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{ background: getBackground() }}
        />
        <div className="flex justify-between text-xs text-secondary-500 mt-1">
          <span>0%</span>
          <span>10%</span>
          <span>20%</span>
        </div>
      </div>
      <p className="text-xs text-secondary-500">
        {value <= 5 && "Low waste - best for precise formwork"}
        {value > 5 && value <= 10 && "Standard waste - recommended for most projects"}
        {value > 10 && "High waste - for irregular shapes or poor conditions"}
      </p>
    </div>
  );
}
