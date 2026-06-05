import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "BuildCost.site - Free Construction Calculators and Cost Guides",
    template: "%s | BuildCost.site",
  },
  description:
    "Free construction calculators and cost guides for U.S. projects. Estimate concrete, roofing, flooring, materials, waste factors, and local construction costs.",
  keywords: [
    "construction calculator",
    "concrete calculator",
    "building estimator",
    "construction cost calculator",
    "DIY construction",
    "concrete volume calculator",
    "material estimator",
    "roofing calculator",
    "flooring calculator",
  ],
  authors: [{ name: "BuildCost.site" }],
  creator: "BuildCost.site",
  publisher: "BuildCost.site",
  robots: "index, follow",
  alternates: {
    canonical: "https://buildcost.site",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildcost.site",
    siteName: "BuildCost.site",
    title: "BuildCost.site - Free Construction Calculators and Cost Guides",
    description:
      "Estimate concrete, roofing, flooring, materials, waste factors, and local construction costs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildCost.site - Free Construction Calculators and Cost Guides",
    description:
      "Estimate concrete, roofing, flooring, materials, waste factors, and local construction costs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
