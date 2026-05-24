import { Card, CardContent } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | BuildCost.site",
  description: "Terms of Service for BuildCost.site. Read our terms and conditions for using our calculators.",
};

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs items={[{ label: "Terms of Service" }]} className="mb-8" />

      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-secondary-600">Last updated: {currentDate}</p>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <p className="text-secondary-600">
            Welcome to BuildCost.site. By accessing or using our website and services,
            you agree to be bound by these Terms of Service. If you disagree with any part
            of these terms, you may not access our services.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <SectionCard
          title="1. Description of Service"
          content={
            <div className="space-y-3 text-secondary-600">
              <p>
                BuildCost.site provides free construction calculators for estimating
                materials, volumes, and costs. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Concrete volume calculators</li>
                <li>Material cost estimators</li>
                <li>Building project planning tools</li>
                <li>Related construction resources</li>
              </ul>
            </div>
          }
        />

        <SectionCard
          title="2. Accuracy of Information"
          content={
            <div className="space-y-3 text-secondary-600">
              <p>
                While we strive to provide accurate calculations, BuildCost.site makes no
                representations or warranties of any kind, express or implied, about the:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Completeness, accuracy, reliability, or availability of our calculators</li>
                <li>Suitability of the results for your specific project</li>
                <li>Actual material requirements or costs</li>
              </ul>
              <p className="mt-3">
                <strong>Important:</strong> All calculator outputs are estimates only, not quotes, bids,
                or professional advice. BuildCost.site does not provide engineering, architectural,
                or contractor services. You must verify all results with a licensed professional
                before purchasing materials or making construction decisions. Actual requirements
                may vary based on site conditions, material specifications, and local building codes.
              </p>
            </div>
          }
        />

        <SectionCard
          title="3. Limitation of Liability"
          content={
            <div className="space-y-3 text-secondary-600">
              <p>
                To the fullest extent permitted by law, BuildCost.site shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages,
                including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Damages for lost profits, goodwill, use, or data</li>
                <li>Costs of procuring substitute services</li>
                <li>Any loss or damage resulting from your use of our calculators</li>
                <li>Errors or inaccuracies in calculation results</li>
              </ul>
              <p className="mt-3">
                In no event shall BuildCost.site's total liability exceed the amount you
                paid, if any, to access our services (currently $0).
              </p>
            </div>
          }
        />

        <SectionCard
          title="4. User Responsibilities"
          content={
            <div className="space-y-3 text-secondary-600">
              <p>As a user of BuildCost.site, you agree to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Use our calculators for legitimate purposes only</li>
                <li>Not attempt to circumvent any security measures</li>
                <li>Not use automated tools to abuse our services</li>
                <li>Verify calculation results before making purchasing decisions</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>
          }
        />

        <SectionCard
          title="5. Intellectual Property"
          content={
            <div className="space-y-3 text-secondary-600">
              <p>
                All content on BuildCost.site, including but not limited to text,
                graphics, logos, calculators, and software, is the property of
                BuildCost.site or its content suppliers and is protected by intellectual
                property laws.
              </p>
              <p>
                You may not reproduce, distribute, create derivative works, or publicly
                display our content without prior written consent.
              </p>
            </div>
          }
        />

        <SectionCard
          title="6. Third-Party Services"
          content={
            <div className="space-y-3 text-secondary-600">
              <p>
                Our website may display advertisements from third parties, including Google
                AdSense. We do not endorse and are not responsible for the content,
                products, or services of third-party advertisers.
              </p>
              <p>
                Your interaction with third-party advertisers is governed by their
                respective privacy policies and terms of service.
              </p>
            </div>
          }
        />

        <SectionCard
          title="7. Termination"
          content={
            <p className="text-secondary-600">
              We reserve the right to suspend or terminate your access to our services at
              any time, with or without cause, and with or without notice.
            </p>
          }
        />

        <SectionCard
          title="8. Indemnification"
          content={
            <p className="text-secondary-600">
              You agree to indemnify and hold harmless BuildCost.site from any claims,
              damages, losses, liabilities, and expenses arising from your use of our
              services or your violation of these Terms of Service.
            </p>
          }
        />

        <SectionCard
          title="9. Governing Law"
          content={
            <p className="text-secondary-600">
              These Terms of Service shall be governed by and construed in accordance
              with applicable laws. Any disputes arising under these terms shall be
              resolved in accordance with applicable dispute resolution procedures.
            </p>
          }
        />

        <SectionCard
          title="10. Changes to Terms"
          content={
            <p className="text-secondary-600">
              We reserve the right to modify these Terms of Service at any time. Changes
              will be effective immediately upon posting to this website. Your continued
              use of our services after changes constitutes acceptance of the new terms.
            </p>
          }
        />

        <SectionCard
          title="11. Contact Information"
          content={
            <p className="text-secondary-600">
              If you have questions about these Terms of Service, contact us at{" "}
              <a href="mailto:contact@buildcost.site" className="text-primary hover:underline">
                contact@buildcost.site
              </a>.
            </p>
          }
        />
      </div>

      <Card className="mt-8 bg-amber-50 border-amber-200">
        <CardContent className="pt-6">
          <p className="text-sm text-amber-800">
            <strong>Disclaimer:</strong> The calculators on BuildCost.site provide
            estimates for planning purposes only. These are not quotes, bids, or
            guarantees. They are not engineering, architectural, legal, or contractor
            advice. You must verify all quantities, specifications, and costs with a
            local supplier, licensed contractor, or building department before
            purchasing materials or starting construction. BuildCost.site is not liable
            for any project decisions made based on calculator results.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

interface SectionCardProps {
  title: string;
  content: React.ReactNode;
}

function SectionCard({ title, content }: SectionCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold text-secondary-900 mb-4">{title}</h2>
        {content}
      </CardContent>
    </Card>
  );
}
