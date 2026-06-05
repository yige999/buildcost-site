/**
 * Spanish Homepage - /es/
 * Entry point for Spanish-speaking users
 */

import { Metadata } from "next";
import Link from "next/link";
import { Calculator, Home, MapPin, DollarSign, Zap } from "lucide-react";
import { getAllCalculators, getAllCategories, getTranslations } from "@/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Calculadoras de Construcción Gratis",
  description: "Calcula concreto, techumbre y materiales de construcción con calculadoras en línea gratis. Estimaciones precisas para proyectos de construcción y DIY.",
  keywords: [
    "calculadora de concreto",
    "calculadora de construcción",
    "calcular yards de concreto",
    "estimador de materiales",
    "calculadora gratis",
  ],
  alternates: {
    canonical: "https://buildcost.site/es",
  },
  openGraph: {
    title: "Calculadoras de Construcción Gratis | BuildCost.site",
    description: "Calculadoras gratis para concreto, techumbre y construcción.",
    locale: "es_MX",
  },
};

export default function SpanishHomePage() {
  const t = getTranslations("es");
  const calculators = getAllCalculators();
  const categories = getAllCategories();

  // Top calculators for Spanish homepage
  const topCalculators = calculators.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Calculadoras de Construcción Gratis
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Calcula concreto, techumbre y materiales de construcción con precisión.
              Estimaciones instantáneas para profesionales y DIY.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/es/calculadoras"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-secondary-50 transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Ver Todas las Calculadoras
              </Link>
              <Link
                href="/es/concreto/losa"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                Comenzar Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Resultados Instantáneos</h3>
              <p className="text-secondary-600">
                Obtén estimaciones de materiales y costos en segundos. Sin registro requerido.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Precios Locales</h3>
              <p className="text-secondary-600">
                Calcula con precios de materiales y mano de obra específicos para tu área.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Completamente Gratis</h3>
              <p className="text-secondary-600">
                Todas las calculadoras son 100% gratis. Sin cargos ocultos ni suscripciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Calculators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Calculadoras Populares
            </h2>
            <p className="text-lg text-secondary-600">
              Las calculadoras más utilizadas para proyectos de construcción
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCalculators.map((calc) => (
              <Link key={calc.id} href={`/es/${calc.category}/${calc.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Calculator className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {t.concrete} - {calc.name}
                    </CardTitle>
                    <CardDescription>{calc.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/es/calculadoras"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-100 text-secondary-700 font-medium rounded-lg hover:bg-secondary-200 transition-colors"
            >
              Ver Todas las Calculadoras
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Categorías de Calculadoras
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/es/${cat.slug}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Home className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-secondary-900 group-hover:text-primary transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-secondary-600 mt-2">{cat.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Language Toggle */}
      <section className="py-8 border-t border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 text-sm text-secondary-600">
            <span>Language:</span>
            <Link href="/" className="hover:text-primary font-medium">
              English
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">Español</span>
          </div>
        </div>
      </section>
    </div>
  );
}
