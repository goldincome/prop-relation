import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use | Proportional Relationship",
  description:
    "Terms and conditions for using ProportionalRelationship.com. Read our rules about content usage, copyright, and liability.",
  alternates: { canonical: "https://proportionalrelationship.com/terms" },
  openGraph: {
    title: "Terms of Use",
    description: "Terms and conditions for using ProportionalRelationship.com.",
    url: "https://proportionalrelationship.com/terms",
    siteName: "Proportional Relationship",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Terms of Use", description: "Terms and conditions." },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-ink transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white leading-tight mb-2">Terms of Use</h1>
          <p className="text-sm text-ink/40 dark:text-ink/30 mb-8">Last updated: June 23, 2026</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Acceptance of Terms</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              By accessing or using ProportionalRelationship.com (the &quot;Site&quot;), you agree to be bound by these Terms of Use.
              If you do not agree with any part of these terms, you may not use the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Educational Purpose</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              The Site provides educational content, calculators, worksheets, and reference materials about proportional
              relationships for students, teachers, and parents. All content is provided for informational and educational
              purposes only and is not a substitute for professional instruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Intellectual Property</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              All content on this Site — including text, graphics, logos, calculators, worksheets, images, and software —
              is the property of ProportionalRelationship.com or its content providers and is protected by applicable
              copyright and intellectual property laws. You may print or download materials for personal, non-commercial
              educational use only. Any reproduction, redistribution, or modification without prior written permission is
              prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">User Conduct</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-ink/70 dark:text-ink/60 leading-relaxed mb-4 space-y-1">
              <li>Use the Site for any unlawful purpose or in violation of any applicable laws</li>
              <li>Attempt to disrupt, damage, or impair the Site or its servers</li>
              <li>Scrape, crawl, or reproduce substantial portions of the Site without authorization</li>
              <li>Submit false or misleading information through contact forms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Disclaimer of Warranties</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              The Site and all content are provided &quot;as is&quot; without any warranties, express or implied. We make no
              guarantees about the accuracy, completeness, or reliability of any content, calculators, or tools. Use of
              the Site is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Limitation of Liability</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              ProportionalRelationship.com, its owners, and contributors shall not be liable for any damages arising
              from your use of or inability to use the Site, including but not limited to direct, indirect, incidental,
              or consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Third-Party Links</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              The Site may contain links to third-party websites. We are not responsible for the content, privacy
              practices, or terms of those sites. Accessing third-party links is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Changes to Terms</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              We reserve the right to update these Terms of Use at any time. Changes will be posted on this page with
              an updated revision date. Continued use of the Site after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Contact</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed">
              For questions about these Terms of Use, please contact us through our{" "}
              <a href="/contact" className="text-teal-600 dark:text-teal-400 hover:underline">Contact page</a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
