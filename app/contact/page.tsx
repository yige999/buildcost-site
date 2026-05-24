import { Metadata } from "next";
import { Mail, Clock, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us | BuildCost.site",
  description:
    "Have questions about our construction cost calculators? Contact the BuildCost.site team. We're here to help contractors and DIY enthusiasts.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Contact Us" }]} className="mb-8" />

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Have questions about our construction cost calculators? We&apos;re here
          to help!
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Email */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200 text-center">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-semibold text-secondary-900 mb-2">Email</h3>
          <a
            href="mailto:contact@buildcost.site"
            className="text-primary hover:underline break-all"
          >
            contact@buildcost.site
          </a>
        </div>

        {/* Response Time */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200 text-center">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Clock className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-semibold text-secondary-900 mb-2">
            Response Time
          </h3>
          <p className="text-secondary-600 text-sm">
            We typically respond within 24-48 hours
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200 text-center">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Users className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-semibold text-secondary-900 mb-2">Our Mission</h3>
          <p className="text-secondary-600 text-sm">
            Construction calculators and cost references for U.S. projects
          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-secondary-50 rounded-2xl p-8">
        <h2 className="text-xl font-semibold text-secondary-900 mb-4">
          How Can We Help?
        </h2>
        <ul className="space-y-3 text-secondary-700">
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span>
              <strong>Calculator Corrections:</strong> Report incorrect results or formula errors
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span>
              <strong>Outdated Prices:</strong> Let us know if material costs or labor rates have changed in your area
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span>
              <strong>Data Suggestions:</strong> Suggest new calculators or data sources
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span>
              <strong>Partnership Inquiries:</strong> Collaboration and content opportunities
            </span>
          </li>
        </ul>
      </div>

      {/* Commitment Statement */}
      <div className="mt-8 text-center">
        <p className="text-secondary-600">
          We read every email. If you find a calculation error, want to request
          a new calculator, or have a question about a cost estimate, send a
          message and we will respond within 48 hours.
        </p>
      </div>
    </div>
  );
}
