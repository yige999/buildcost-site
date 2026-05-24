"use client";

/**
 * PDF Export Component
 * Generates professional PDF estimates from calculator results
 */

import { jsPDF } from "jspdf";
import { Download, FileText } from "lucide-react";
import { useState } from "react";

interface ExportPDFButtonProps {
  /** Calculator name */
  calculatorName: string;
  /** Input values */
  inputs: Record<string, { value: number | string; label: string; unit?: string }>;
  /** Output results */
  results: Record<string, { value: number | string; label: string; unit?: string }>;
  /** Optional location data */
  location?: {
    city: string;
    state: string;
  };
  /** Button variant */
  variant?: "button" | "icon";
  /** Custom className */
  className?: string;
}

export function ExportPDFButton({
  calculatorName,
  inputs,
  results,
  location,
  variant = "button",
  className = "",
}: ExportPDFButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);

    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 20;
      let yPosition = margin;

      // Helper function to check if we need a new page
      const checkPageBreak = (requiredSpace: number) => {
        if (yPosition + requiredSpace > pageHeight - margin) {
          doc.addPage();
          yPosition = margin;
        }
      };

      // Header
      doc.setFillColor(30, 58, 138); // Blue
      doc.rect(0, 0, pageWidth, 40, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(24);
      doc.setFont("helvetica", "bold");
      doc.text("BuildCost.site", margin, 25);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text("Construction Material Estimate", margin, 32);

      // Title
      yPosition = 55;
      doc.setTextColor(30, 58, 138);
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text(calculatorName, margin, yPosition);

      // Location and Date
      yPosition += 10;
      doc.setTextColor(100);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      const date = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      doc.text(`Date: ${date}`, margin, yPosition);
      if (location) {
        doc.text(`Location: ${location.city}, ${location.state}`, margin + 60, yPosition);
      }

      // Project Details Section
      yPosition += 15;
      checkPageBreak(30);
      doc.setFillColor(243, 244, 246);
      doc.rect(margin - 5, yPosition - 5, pageWidth - margin * 2 + 10, 12, "F");
      doc.setTextColor(30, 58, 138);
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("Project Details", margin, yPosition + 5);

      // Inputs Table
      yPosition += 15;
      doc.setTextColor(50);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");

      Object.entries(inputs).forEach(([key, input]) => {
        checkPageBreak(10);
        const label = input.label;
        const value = `${input.value}${input.unit ? ` ${input.unit}` : ""}`;
        doc.text(`${label}:`, margin, yPosition);
        doc.text(value, margin + 80, yPosition);
        yPosition += 8;
      });

      // Results Section
      yPosition += 10;
      checkPageBreak(30);
      doc.setFillColor(243, 244, 246);
      doc.rect(margin - 5, yPosition - 5, pageWidth - margin * 2 + 10, 12, "F");
      doc.setTextColor(30, 58, 138);
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("Material Requirements", margin, yPosition + 5);

      // Results Table
      yPosition += 15;
      doc.setTextColor(50);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");

      Object.entries(results).forEach(([key, result]) => {
        checkPageBreak(10);
        const label = result.label;
        const value = `${result.value}${result.unit ? ` ${result.unit}` : ""}`;
        doc.text(`${label}:`, margin, yPosition);
        doc.setFont("helvetica", "bold");
        doc.text(value, margin + 80, yPosition);
        doc.setFont("helvetica", "normal");
        yPosition += 8;
      });

      // Waste Factor Notice
      yPosition += 10;
      checkPageBreak(20);
      doc.setFillColor(255, 243, 205);
      doc.rect(margin - 5, yPosition - 5, pageWidth - margin * 2 + 10, 20, "F");
      doc.setTextColor(120, 53, 15);
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.text("Important Note:", margin, yPosition + 3);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(80, 50, 20);
      const note =
        "These estimates include a standard waste factor. Actual material requirements may vary based on site conditions, irregular shapes, and material waste during installation. Always verify calculations before ordering materials.";
      const splitNote = doc.splitTextToSize(note, pageWidth - margin * 2);
      doc.text(splitNote, margin, yPosition + 9);

      // Footer
      const totalPages = doc.internal.pages.length - 1;
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setTextColor(150);
        doc.setFontSize(8);
        doc.text(
          `Generated by BuildCost.site | Page ${i} of ${totalPages}`,
          pageWidth / 2,
          pageHeight - 10,
          { align: "center" }
        );
        doc.text(
          "This is an estimate only. Verify all calculations before purchasing materials.",
          pageWidth / 2,
          pageHeight - 5,
          { align: "center" }
        );
      }

      // Save PDF
      const filename = `${calculatorName.toLowerCase().replace(/\s+/g, "-")}-estimate-${Date.now()}.pdf`;
      doc.save(filename);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("There was an error generating the PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  if (variant === "icon") {
    return (
      <button
        onClick={generatePDF}
        disabled={isGenerating}
        className={`p-2 text-secondary-600 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors disabled:opacity-50 ${className}`}
        title="Download PDF Estimate"
      >
        <Download className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={generatePDF}
      disabled={isGenerating}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 ${className}`}
    >
      {isGenerating ? (
        <>
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <FileText className="w-4 h-4" />
          Download PDF Estimate
        </>
      )}
    </button>
  );
}
