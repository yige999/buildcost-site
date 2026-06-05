import { Card, CardContent } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for BuildCost.site. Learn how we protect your data and privacy.",
};

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} className="mb-8" />

      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-secondary-600">Last updated: {currentDate}</p>
      </div>

      <div className="space-y-6">
        <SectionCard
          title="Information We Collect"
          content={
            <div className="space-y-3 text-secondary-600">
              <p>
                At BuildCost.site, we are committed to protecting your privacy. We collect
                the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <strong>Usage Data:</strong> We collect anonymous usage data including
                  page visits, calculator usage, and browser type to improve our services.
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> We use cookies for
                  analytics and to remember your preferences.
                </li>
                <li>
                  <strong>Device Information:</strong> We collect information about your
                  device including IP address, browser type, and operating system.
                </li>
              </ul>
              <p className="mt-3 text-secondary-600">
                We do not require user accounts. We do not collect names, email
                addresses, phone numbers, or project details. Calculator inputs
                are processed entirely in your browser and are not sent to our
                servers.
              </p>
            </div>
          }
        />

        <SectionCard
          title="How We Use Your Information"
          content={
            <div className="space-y-3 text-secondary-600">
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>To provide and maintain our calculators</li>
                <li>To improve and optimize our services</li>
                <li>To analyze usage patterns and trends</li>
                <li>To display relevant advertisements through Google AdSense</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>
          }
        />

        <SectionCard
          title="Google AdSense and Third-Party Advertising"
          content={
            <div className="space-y-3 text-secondary-600">
              <p>
                We use Google AdSense to display advertisements on our website. Google may
                use cookies to serve ads based on your prior visits to this website or
                other websites.
              </p>
              <p>
                <strong>Advertising cookies may include:</strong> __gads, __gpi, IDE, and
                other third-party cookies set by Google and its advertising partners. These
                cookies are used to track browsing activity across sites and deliver
                personalized ads based on your interests.
              </p>
              <p>
                Google's use of advertising cookies enables it and its partners to serve
                ads to you based on your visits to this site and/or other sites on the
                Internet.
              </p>
              <p>
                You can opt out of personalized advertising by visiting{" "}
                <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Google's ad settings
                </a>, the{" "}
                <a href="https://optout.networkadvertising.org/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Network Advertising Initiative opt-out page
                </a>, or{" "}
                <a href="https://www.youronlinechoices.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Your Online Choices
                </a>.
              </p>
            </div>
          }
        />

        <SectionCard
          title="Google Analytics"
          content={
            <div className="space-y-3 text-secondary-600">
              <p>
                We use Google Analytics to analyze how visitors use our website. Google
                Analytics uses cookies to collect information such as how often users visit
                the site, what pages they visit, and what other sites they use before
                coming to this site.
              </p>
              <p>
                <strong>Analytics cookies may include:</strong> _ga (distinguishes unique visitors,
                expires after 2 years), _gid (distinguishes unique visitors, expires after 24 hours),
                and _gat (throttles request rate, expires after 1 minute). These cookies do not
                collect personal information.
              </p>
              <p>
                Google Analytics data is anonymized and does not personally identify you.
                You can opt out of Google Analytics by installing the{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Google Analytics opt-out browser add-on
                </a>.
              </p>
            </div>
          }
        />

        <SectionCard
          title="Data Security"
          content={
            <p className="text-secondary-600">
              We implement appropriate technical and organizational measures to protect
              your data against unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          }
        />

        <SectionCard
          title="Third-Party Links"
          content={
            <p className="text-secondary-600">
              Our website may contain links to third-party websites. We are not responsible
              for the privacy practices or content of these external sites. We encourage
              you to read the privacy policies of any third-party websites you visit.
            </p>
          }
        />

        <SectionCard
          title="Children's Privacy"
          content={
            <p className="text-secondary-600">
              Our services are not intended for children under the age of 13. We do not
              knowingly collect personal information from children under 13. If you are a
              parent or guardian and believe your child has provided us with personal
              information, please contact us, and we will delete such information.
            </p>
          }
        />

        <SectionCard
          title="Your Rights"
          content={
            <div className="space-y-3 text-secondary-600">
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your personal data</li>
                <li>Objection to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </div>
          }
        />

        <SectionCard
          title="Changes to This Privacy Policy"
          content={
            <p className="text-secondary-600">
              We may update our Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page and updating the
              "Last updated" date. You are advised to review this Privacy Policy
              periodically for any changes.
            </p>
          }
        />

        <SectionCard
          title="Contact Us"
          content={
            <p className="text-secondary-600">
              If you have any questions about this Privacy Policy or our data practices,
              contact us at{" "}
              <a href="mailto:contact@buildcost.site" className="text-primary hover:underline">
                contact@buildcost.site
              </a>.
            </p>
          }
        />
      </div>
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
