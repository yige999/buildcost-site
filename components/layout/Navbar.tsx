"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const concreteDropdown = [
  { href: "/concrete/slab", label: "Slab Calculator" },
  { href: "/concrete/footing", label: "Footing Calculator" },
  { href: "/concrete/wall", label: "Wall Calculator" },
  { href: "/concrete/driveway", label: "Driveway Calculator" },
  { href: "/concrete/rebar", label: "Rebar Calculator" },
  { href: "/concrete/sonotube", label: "Sonotube Calculator" },
  { href: "/concrete", label: "All Concrete Calculators" },
];

const navLinks = [
  { href: "/concrete", label: "Concrete", dropdown: concreteDropdown },
  { href: "/roofing", label: "Roofing" },
  { href: "/flooring", label: "Flooring" },
  { href: "/cost/concrete-driveway", label: "Cost Guides" },
  { href: "/convert", label: "Conversions" },
  { href: "/compare", label: "Compare" },
  { href: "/materials", label: "Materials" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [concreteOpen, setConcreteOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white border-b border-secondary-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="font-bold text-xl text-secondary-900">
              BuildCost<span className="text-primary">.site</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setConcreteOpen(true)}
                    onMouseLeave={() => setConcreteOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm font-medium transition-colors inline-flex items-center gap-1",
                        isActive(link.href)
                          ? "text-primary"
                          : "text-secondary-600 hover:text-secondary-900"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </Link>
                    {concreteOpen && (
                      <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-secondary-200 rounded-lg shadow-lg py-1 z-50">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-primary"
                      : "text-secondary-600 hover:text-secondary-900"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-secondary-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {/* Concrete with sub-links */}
            <div>
              <Link
                href="/concrete"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive("/concrete")
                    ? "bg-primary/10 text-primary"
                    : "text-secondary-600 hover:bg-secondary-100"
                )}
              >
                Concrete
              </Link>
              <div className="pl-4 space-y-0.5">
                {concreteDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 rounded-lg text-sm text-secondary-500 hover:bg-secondary-100 hover:text-secondary-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {/* Other nav links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-secondary-600 hover:bg-secondary-100"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
