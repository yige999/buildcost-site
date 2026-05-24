"use client";

/**
 * Widget Embed Code Generator
 * Allows users to embed calculators on their own websites
 */

import { Copy, Code, Share2, Check, X } from "lucide-react";
import { useState } from "react";

interface EmbedWidgetButtonProps {
  /** Calculator URL to embed */
  calculatorUrl: string;
  /** Calculator name */
  calculatorName: string;
  /** Button variant */
  variant?: "button" | "icon";
  /** Custom className */
  className?: string;
}

export function EmbedWidgetButton({
  calculatorUrl,
  calculatorName,
  variant = "button",
  className = "",
}: EmbedWidgetButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Generate different embed code options
  const embedCodes = {
    standard: `<iframe
  src="${calculatorUrl}"
  title="${calculatorName}"
  width="100%"
  height="600"
  frameborder="0"
  style="border: 1px solid #e5e7eb; border-radius: 8px;"
></iframe>`,

    responsive: `<div style="position: relative; padding-bottom: 100%; height: 0; overflow: hidden;">
  <iframe
    src="${calculatorUrl}"
    title="${calculatorName}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 1px solid #e5e7eb; border-radius: 8px;"
    frameborder="0"
  ></iframe>
</div>`,

    compact: `<iframe src="${calculatorUrl}" title="${calculatorName}" width="100%" height="400" frameborder="0"></iframe>`,
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (variant === "icon") {
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className={`p-2 text-secondary-600 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors ${className}`}
          title="Embed this calculator"
        >
          <Share2 className="w-5 h-5" />
        </button>

        {isOpen && <EmbedModal calculatorName={calculatorName} onClose={() => setIsOpen(false)} />}
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-2 px-4 py-2 bg-secondary-100 text-secondary-700 font-medium rounded-lg hover:bg-secondary-200 transition-colors ${className}`}
      >
        <Code className="w-4 h-4" />
        Embed on Your Site
      </button>

      {isOpen && <EmbedModal calculatorName={calculatorName} onClose={() => setIsOpen(false)} />}
    </>
  );
}

interface EmbedModalProps {
  calculatorName: string;
  onClose: () => void;
}

function EmbedModal({ calculatorName, onClose }: EmbedModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"standard" | "responsive" | "compact">("standard");

  const embedCodes = {
    standard: `<iframe
  src="${window.location.origin}${window.location.pathname}"
  title="${calculatorName}"
  width="100%"
  height="600"
  frameborder="0"
  style="border: 1px solid #e5e7eb; border-radius: 8px;"
></iframe>`,

    responsive: `<div style="position: relative; padding-bottom: 100%; height: 0; overflow: hidden;">
  <iframe
    src="${window.location.origin}${window.location.pathname}"
    title="${calculatorName}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 1px solid #e5e7eb; border-radius: 8px;"
    frameborder="0"
  ></iframe>
</div>`,

    compact: `<iframe src="${window.location.origin}${window.location.pathname}" title="${calculatorName}" width="100%" height="400" frameborder="0"></iframe>`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCodes[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-secondary-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-secondary-900">Embed Calculator</h2>
              <p className="text-sm text-secondary-600">Add this calculator to your website</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-secondary-600" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-secondary-200 px-6">
          <button
            onClick={() => setActiveTab("standard")}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "standard"
                ? "border-primary text-primary"
                : "border-transparent text-secondary-600 hover:text-secondary-900"
            }`}
          >
            Standard
          </button>
          <button
            onClick={() => setActiveTab("responsive")}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "responsive"
                ? "border-primary text-primary"
                : "border-transparent text-secondary-600 hover:text-secondary-900"
            }`}
          >
            Responsive
          </button>
          <button
            onClick={() => setActiveTab("compact")}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "compact"
                ? "border-primary text-primary"
                : "border-transparent text-secondary-600 hover:text-secondary-900"
            }`}
          >
            Compact
          </button>
        </div>

        {/* Code Block */}
        <div className="p-6 bg-secondary-50">
          <div className="relative">
            <pre className="bg-secondary-900 text-secondary-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{embedCodes[activeTab]}</code>
            </pre>
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
          {copied && (
            <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
              <Check className="w-4 h-4" />
              Copied to clipboard!
            </p>
          )}
        </div>

        {/* Preview */}
        <div className="p-6">
          <h3 className="text-sm font-semibold text-secondary-900 mb-3">Preview</h3>
          <div className="border border-secondary-200 rounded-lg p-4 bg-secondary-50">
            <div className="bg-white rounded shadow-sm border border-secondary-200" style={{ height: activeTab === "compact" ? "200px" : "300px" }}>
              <div className="flex items-center justify-center h-full text-secondary-400 text-sm">
                Calculator Preview
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-secondary-50 border-t border-secondary-200">
          <p className="text-sm text-secondary-600">
            Free to use for personal and commercial websites. By embedding, you agree to our Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}
