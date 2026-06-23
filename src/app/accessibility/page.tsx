import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility | Proportional Relationship",
  description:
    "Accessibility statement for ProportionalRelationship.com. Learn about our commitment to making math education accessible to all.",
  alternates: { canonical: "https://proportionalrelationship.com/accessibility" },
  openGraph: {
    title: "Accessibility Statement",
    description: "Our commitment to making math education accessible to all.",
    url: "https://proportionalrelationship.com/accessibility",
    siteName: "Proportional Relationship",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Accessibility Statement", description: "Making math education accessible." },
}

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-ink transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white leading-tight mb-2">Accessibility Statement</h1>
          <p className="text-sm text-ink/40 dark:text-ink/30 mb-8">Last updated: June 23, 2026</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Our Commitment</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              ProportionalRelationship.com is committed to ensuring digital accessibility for all people, regardless of
              ability. We strive to provide an inclusive, barrier-free experience for all users, including those with
              visual, hearing, motor, or cognitive disabilities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Accessibility Standards</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              We aim to conform with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standards published
              by the World Wide Web Consortium (W3C). These guidelines outline best practices for making web content
              accessible to people with disabilities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">What We Are Doing</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">To ensure accessibility, we have implemented the following:</p>
            <ul className="list-disc pl-6 text-ink/70 dark:text-ink/60 leading-relaxed mb-4 space-y-2">
              <li><strong>Semantic HTML</strong> — Proper heading hierarchy (<code className="text-sm bg-ink/5 dark:bg-white/5 px-1 rounded">h1</code> through <code className="text-sm bg-ink/5 dark:bg-white/5 px-1 rounded">h6</code>) for logical document structure</li>
              <li><strong>Color contrast</strong> — Sufficient contrast ratios between text and background colors</li>
              <li><strong>Keyboard navigation</strong> — All interactive elements are accessible via keyboard</li>
              <li><strong>Screen reader support</strong> — ARIA labels and roles where appropriate</li>
              <li><strong>Alternative text</strong> — Meaningful alt text for all informative images</li>
              <li><strong>Resizable text</strong> — Content remains readable when text is resized up to 200%</li>
              <li><strong>Focus indicators</strong> — Visible focus rings on all interactive elements</li>
              <li><strong>Reduced motion</strong> — Support for prefers-reduced-motion media query</li>
              <li><strong>Dark mode</strong> — Full dark mode support for reduced eye strain</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Ongoing Efforts</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              Accessibility is an ongoing process. We regularly review our site using automated testing tools and manual
              evaluations to identify and address accessibility issues. Our development process includes accessibility
              checks for all new features and content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Third-Party Content</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              Some content on our site may link to or embed third-party resources. We cannot guarantee the accessibility
              of content from external providers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Feedback</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              We welcome your feedback on the accessibility of ProportionalRelationship.com. If you encounter any
              barriers or have suggestions for improvement, please let us know. We aim to respond to accessibility
              feedback within 5 business days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Contact Us</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed">
              To report an accessibility issue or request assistance, please visit our{" "}
              <a href="/contact" className="text-teal-600 dark:text-teal-400 hover:underline">Contact page</a> or
              email us directly.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
