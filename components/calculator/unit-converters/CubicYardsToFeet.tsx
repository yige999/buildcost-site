"use client";

/**
 * Cubic Yards to Cubic Feet Converter
 */

import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";

export default function CubicYardsToFeet() {
  const [cubicYards, setCubicYards] = useState<string>("1");
  const [cubicFeet, setCubicFeet] = useState<string>("27");

  const convertYardsToFeet = (yards: string) => {
    const value = parseFloat(yards);
    if (isNaN(value)) {
      setCubicFeet("");
      return;
    }
    setCubicFeet((value * 27).toString());
  };

  const convertFeetToYards = (feet: string) => {
    const value = parseFloat(feet);
    if (isNaN(value)) {
      setCubicYards("");
      return;
    }
    setCubicYards((value / 27).toString());
  };

  return (
    <div className="space-y-6">
      {/* Conversion Inputs */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Cubic Yards Input */}
        <div>
          <label htmlFor="cubic-yards" className="block text-sm font-medium text-secondary-700 mb-2">
            Cubic Yards (cu yd)
          </label>
          <input
            id="cubic-yards"
            type="number"
            step="0.01"
            value={cubicYards}
            onChange={(e) => {
              setCubicYards(e.target.value);
              convertYardsToFeet(e.target.value);
            }}
            className="w-full px-4 py-3 text-lg border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter cubic yards"
          />
        </div>

        {/* Swap Button */}
        <div className="flex items-center justify-center md:justify-start pt-6">
          <button
            onClick={() => {
              const temp = cubicYards;
              setCubicYards(cubicFeet);
              setCubicFeet(temp);
            }}
            className="p-2 bg-secondary-100 hover:bg-secondary-200 rounded-full transition-colors"
            title="Swap units"
          >
            <ArrowRightLeft className="w-5 h-5 text-secondary-600" />
          </button>
        </div>

        {/* Cubic Feet Input */}
        <div>
          <label htmlFor="cubic-feet" className="block text-sm font-medium text-secondary-700 mb-2">
            Cubic Feet (cu ft)
          </label>
          <input
            id="cubic-feet"
            type="number"
            step="0.01"
            value={cubicFeet}
            onChange={(e) => {
              setCubicFeet(e.target.value);
              convertFeetToYards(e.target.value);
            }}
            className="w-full px-4 py-3 text-lg border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Enter cubic feet"
          />
        </div>
      </div>

      {/* Result Display */}
      {cubicYards && cubicFeet && (
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
          <div className="text-center">
            <div className="text-sm text-secondary-600 mb-2">Conversion Result</div>
            <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-bold">
              <span>{parseFloat(cubicYards).toFixed(2)} cu yd</span>
              <span className="text-primary">=</span>
              <span>{parseFloat(cubicFeet).toFixed(2)} cu ft</span>
            </div>
          </div>
        </div>
      )}

      {/* Quick Reference */}
      <div className="bg-secondary-50 p-4 rounded-lg">
        <h3 className="font-semibold text-secondary-900 mb-2">Quick Reference</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
          <div className="bg-white p-2 rounded text-center">
            <div className="font-medium">0.5 yd</div>
            <div className="text-secondary-600">= 13.5 ft</div>
          </div>
          <div className="bg-white p-2 rounded text-center">
            <div className="font-medium">1 yd</div>
            <div className="text-secondary-600">= 27 ft</div>
          </div>
          <div className="bg-white p-2 rounded text-center">
            <div className="font-medium">5 yd</div>
            <div className="text-secondary-600">= 135 ft</div>
          </div>
          <div className="bg-white p-2 rounded text-center">
            <div className="font-medium">10 yd</div>
            <div className="text-secondary-600">= 270 ft</div>
          </div>
        </div>
      </div>
    </div>
  );
}
