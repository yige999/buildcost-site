"use client";

import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

interface ConversionCalculatorProps {
  fromUnit: string;
  toUnit: string;
  factor: number;
}

export function ConversionCalculator({ fromUnit, toUnit, factor }: ConversionCalculatorProps) {
  const [fromValue, setFromValue] = useState(1);

  return (
    <>
      <CardHeader>
        <CardTitle>Conversion Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4 items-center">
          <div>
            <label className="block text-sm font-medium mb-2">{fromUnit}</label>
            <input
              type="number"
              value={fromValue}
              onChange={(e) => setFromValue(parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-3 text-lg border border-secondary-300 rounded-lg"
            />
          </div>
          <div className="text-center">
            <ArrowRightLeft className="w-6 h-6 text-secondary-400 mx-auto" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{toUnit}</label>
            <div className="w-full px-4 py-3 text-lg border border-secondary-200 rounded-lg bg-secondary-50">
              {(fromValue * factor).toFixed(4)}
            </div>
          </div>
        </div>
      </CardContent>
    </>
  );
}
