"use client";

import { useState, useEffect } from "react";
import { CalculatorConfig, CalculatorState, CalculatorResults, UnitSystem } from "@/types/calculator";
import { runEngine } from "@/lib/calculator-factory/renderer";
import { InputGroup } from "./InputGroup";
import { UnitSelector } from "./UnitSelector";
import { WasteSlider } from "./WasteSlider";
import { ResultCard } from "./ResultCard";
import { Calculator as CalculatorIcon } from "lucide-react";

interface CalculatorFactoryProps {
  config: CalculatorConfig;
  /** Local labor rate multiplier to adjust cost calculations */
  localLaborRate?: number;
}

export function CalculatorFactory({ config, localLaborRate = 1 }: CalculatorFactoryProps) {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>("imperial");
  const [inputs, setInputs] = useState<CalculatorState>({});
  const [results, setResults] = useState<CalculatorResults>({});
  const [hasCalculated, setHasCalculated] = useState(false);

  // Initialize inputs with default values
  useEffect(() => {
    const defaultInputs: CalculatorState = {};
    config.inputs.forEach((input) => {
      if (input.default !== undefined) {
        defaultInputs[input.name] = input.default;
      } else {
        defaultInputs[input.name] = undefined;
      }
    });
    setInputs(defaultInputs);
  }, [config.inputs]);

  // Update input value
  const updateInput = (name: string, value: number | string) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  // Run calculation
  const calculate = () => {
    try {
      const calculationInputs = {
        ...inputs,
        unitSystem,
      };
      const newResults = runEngine(config.engine, calculationInputs);

      // Apply local labor rate to totalCost if present
      if (newResults.totalCost && localLaborRate !== 1) {
        newResults.totalCost = Math.round(
          (newResults.totalCost as number) * localLaborRate * 100
        ) / 100;
      }

      setResults(newResults);
      setHasCalculated(true);
    } catch (error) {
      console.error("Calculation error:", error);
    }
  };

  // Auto-calculate when inputs change
  useEffect(() => {
    // Check if all required inputs have values
    const requiredInputs = config.inputs.filter((i) => i.required);
    const allRequiredFilled = requiredInputs.every(
      (input) => {
        const value = inputs[input.name];
        // For select inputs, check if value exists
        if (input.type === "select") {
          return value !== undefined && value !== null && value !== "";
        }
        // For numeric inputs, check if value is greater than 0
        return value !== undefined && value !== null && Number(value) > 0;
      }
    );

    if (allRequiredFilled) {
      calculate();
    } else {
      setHasCalculated(false);
    }
  }, [inputs, unitSystem, config.inputs, config.engine, localLaborRate]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Calculator Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-xl">
          <CalculatorIcon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-secondary-900">
            {config.name}
          </h1>
          <p className="text-secondary-600">{config.description}</p>
        </div>
      </div>

      {/* Unit Selector (if length inputs exist) */}
      {config.inputs.some((i) => i.unit === "length") && (
        <div className="flex justify-end mb-4">
          <UnitSelector value={unitSystem} onChange={setUnitSystem} />
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Inputs Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200">
          <h2 className="text-lg font-semibold text-secondary-900 mb-4">
            Enter Dimensions
          </h2>

          <div className="space-y-4">
            {config.inputs.map((input) => {
              if (input.type === "percent") {
                return (
                  <WasteSlider
                    key={input.name}
                    value={(inputs[input.name] as number) ?? input.default ?? 10}
                    onChange={(value) => updateInput(input.name, value)}
                    min={input.min}
                    max={input.max}
                  />
                );
              }

              return (
                <InputGroup
                  key={input.name}
                  input={input}
                  value={(inputs[input.name] as number) ?? 0}
                  onChange={(value) => updateInput(input.name, value)}
                  unitSystem={unitSystem}
                />
              );
            })}
          </div>
        </div>

        {/* Results Section */}
        <div>
          {hasCalculated ? (
            <ResultCard outputs={config.outputs} results={results} />
          ) : (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalculatorIcon className="w-8 h-8 text-secondary-400" />
                </div>
                <p className="text-secondary-500">
                  Enter your dimensions to see results
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-sm text-amber-800">
          <strong>Tip:</strong>{" "}
          {config.category === "roofing"
            ? "Always include a waste factor (10-15%) for starter shingles, cap shingles, and cut waste. Complex roofs with many valleys may require 20%."
            : "Always include a waste factor (5-10%) to account for spillage, uneven subgrade, and formwork irregularities. Consider 15%+ for complex pours or poor conditions."}
        </p>
        {localLaborRate !== 1 && (
          <p className="text-sm text-amber-700 mt-2">
            <strong>Local Pricing:</strong> Costs have been adjusted for local labor
            rates (×{localLaborRate.toFixed(2)}).
          </p>
        )}
      </div>
    </div>
  );
}
