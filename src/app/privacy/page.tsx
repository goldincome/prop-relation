import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Proportional Relationship",
  description:
    "Privacy policy for ProportionalRelationship.com. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://proportionalrelationship.com/privacy" },
  openGraph: {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information.",
    url: "https://proportionalrelationship.com/privacy",
    siteName: "Proportional Relationship",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Privacy Policy", description: "How we protect your data." },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-ink transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white leading-tight mb-2">Privacy Policy</h1>
          <p className="text-sm text-ink/40 dark:text-ink/30 mb-8">Last updated: June 23, 2026</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Introduction</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              ProportionalRelationship.com (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
              our website. Please read this policy carefully.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Information We Collect</h2>

            <h3 className="text-lg font-medium text-ink dark:text-white mb-2">Personal Information</h3>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide when you use our contact form, subscribe
              to our newsletter, or send us a message. This may include your name, email address, and any other
              information you choose to share.
            </p>

            <h3 className="text-lg font-medium text-ink dark:text-white mb-2">Automatically Collected Information</h3>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              When you visit the Site, we may automatically collect certain information, including your IP address,
              browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits.
              This information helps us understand how visitors use the Site and improve our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Cookies and Tracking Technologies</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              We may use cookies, web beacons, and similar tracking technologies to enhance your browsing experience,
              analyze site traffic, and understand where our visitors come from. Cookies are small text files stored on
              your device by your web browser.
            </p>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              You can control cookie preferences through your browser settings. Disabling cookies may affect certain
              features of the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Third-Party Services</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">We may use the following third-party services:</p>
            <ul className="list-disc pl-6 text-ink/70 dark:text-ink/60 leading-relaxed mb-4 space-y-1">
              <li><strong>Google Analytics</strong> — to analyze website traffic and usage patterns. Google Analytics uses cookies to collect anonymized data. You can learn more at{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Google&apos;s Privacy Policy</a>.</li>
              <li><strong>Google AdSense</strong> — to display advertisements. AdSense may use cookies to serve relevant ads based on your interests. See{" "}
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Google&apos;s Advertising Policy</a>.</li>
              <li><strong>ZeptoMail</strong> — to deliver emails from our newsletter and contact forms.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">How We Use Your Information</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">We may use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 text-ink/70 dark:text-ink/60 leading-relaxed mb-4 space-y-1">
              <li>To operate, maintain, and improve the Site</li>
              <li>To respond to your comments, questions, and requests</li>
              <li>To send newsletters and updates (with your consent)</li>
              <li>To analyze usage trends and improve user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Data Protection</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              We implement reasonable technical and organizational measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
              internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Your Rights</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              Depending on your location, you may have the right to access, correct, update, or delete your personal
              information. You may also have the right to object to or restrict certain processing activities. To
              exercise these rights, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Children&apos;s Privacy</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              Our Site is intended for a general audience and is not directed at children under 13. We do not knowingly
              collect personal information from children under 13. If you believe a child has provided us with personal
              information, please contact us so we can delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Changes to This Policy</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              policy on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Contact</h2>
            <p className="text-ink/70 dark:text-ink/60 leading-relaxed">
              If you have questions or concerns about this Privacy Policy, please{" "}
              <a href="/contact" className="text-teal-600 dark:text-teal-400 hover:underline">contact us</a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
