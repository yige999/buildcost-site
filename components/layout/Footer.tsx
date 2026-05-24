import Link from "next/link";
import { HardHat } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-secondary-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-xl text-white">
                BuildCost<span className="text-primary">.site</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-secondary-400">
              Free concrete calculators, cost guides, and city-specific
              construction estimates for U.S. projects.
            </p>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="font-semibold text-white mb-3">Calculators</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/concrete/slab" className="hover:text-white transition-colors">
                  Concrete Slab Calculator
                </Link>
              </li>
              <li>
                <Link href="/concrete/footing" className="hover:text-white transition-colors">
                  Footing Calculator
                </Link>
              </li>
              <li>
                <Link href="/concrete/wall" className="hover:text-white transition-colors">
                  Wall Calculator
                </Link>
              </li>
              <li>
                <Link href="/concrete/driveway" className="hover:text-white transition-colors">
                  Driveway Calculator
                </Link>
              </li>
              <li>
                <Link href="/concrete/rebar" className="hover:text-white transition-colors">
                  Rebar Calculator
                </Link>
              </li>
              <li>
                <Link href="/concrete/sonotube" className="hover:text-white transition-colors">
                  Sonotube Calculator
                </Link>
              </li>
              <li>
                <Link href="/concrete" className="hover:text-white transition-colors">
                  All Concrete Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* Cost Guides & Resources */}
          <div>
            <h3 className="font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cost/concrete-driveway" className="hover:text-white transition-colors">
                  Cost Guides
                </Link>
              </li>
              <li>
                <Link href="/convert" className="hover:text-white transition-colors">
                  Unit Conversions
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-white transition-colors">
                  Material Comparisons
                </Link>
              </li>
              <li>
                <Link href="/dimensions" className="hover:text-white transition-colors">
                  Standard Dimensions
                </Link>
              </li>
              <li>
                <Link href="/diy-vs-pro" className="hover:text-white transition-colors">
                  DIY vs Pro
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-white mb-3">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/materials" className="hover:text-white transition-colors">
                  Materials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
            <h3 className="font-semibold text-white mb-3 mt-6">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-secondary-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-500">
            © {currentYear} BuildCost.site. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-secondary-500">
            <HardHat className="w-4 h-4" />
            <span>Construction calculators and cost guides</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
