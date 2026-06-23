import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/blog/Breadcrumbs"

export const metadata: Metadata = {
  title: "Contact Us | Proportional Relationship",
  description:
    "Get in touch with the ProportionalRelationship.com team. Send questions, suggestions, report issues, or inquire about advertising and partnerships.",
  alternates: { canonical: "https://proportionalrelationship.com/contact" },
  openGraph: {
    title: "Contact Us",
    description: "Get in touch with the ProportionalRelationship.com team.",
    url: "https://proportionalrelationship.com/contact",
    siteName: "Proportional Relationship",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Contact Us", description: "Get in touch with us." },
}

export default function ContactPage() {
  const breadcrumbItems = [{ label: "Contact" }]

  return (
    <div className="min-h-screen bg-offwhite dark:bg-ink transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white leading-tight mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-ink/60 dark:text-ink/50">
              We value your feedback. Whether you have a question about our content, found a bug, want to report an
              issue, or are interested in partnerships — we are here to help.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2 mb-8">
            <section className="p-6 rounded-xl bg-white dark:bg-ink/80 border border-ink/10 dark:border-ink/20">
              <h2 className="text-xl font-semibold text-ink dark:text-white mb-4">Send Us a Message</h2>
              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink dark:text-white mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 text-sm rounded-lg border border-ink/20 dark:border-ink/30 bg-offwhite dark:bg-ink text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink dark:text-white mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 text-sm rounded-lg border border-ink/20 dark:border-ink/30 bg-offwhite dark:bg-ink text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ink dark:text-white mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 text-sm rounded-lg border border-ink/20 dark:border-ink/30 bg-offwhite dark:bg-ink text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select a topic...</option>
                    <option value="question">Question about content</option>
                    <option value="bug">Report a bug or issue</option>
                    <option value="suggestion">Suggestion or feedback</option>
                    <option value="advertising">Advertising or partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink dark:text-white mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 text-sm rounded-lg border border-ink/20 dark:border-ink/30 bg-offwhite dark:bg-ink text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-8 rounded-lg transition-colors text-sm"
                >
                  Send Message
                </button>
                <p className="text-xs text-ink/40 dark:text-ink/30">
                  This form is connected to a form processing service. We typically respond within 2&ndash;3 business days.
                </p>
              </form>
            </section>

            <section className="space-y-6">
              <div className="p-6 rounded-xl bg-white dark:bg-ink/80 border border-ink/10 dark:border-ink/20">
                <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Other Ways to Reach Us</h2>

                <div className="space-y-4 text-sm text-ink/70 dark:text-ink/60">
                  <div>
                    <h3 className="font-medium text-ink dark:text-white mb-1">Email</h3>
                    <p>contact@proportionalrelationship.com</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-ink dark:text-white mb-1">Response Time</h3>
                    <p>We aim to respond to all inquiries within 2&ndash;3 business days. For urgent matters, please
                    include &ldquo;URGENT&rdquo; in your subject line.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-ink/80 border border-ink/10 dark:border-ink/20">
                <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Common Topics</h2>
                <ul className="space-y-2 text-sm text-ink/70 dark:text-ink/60">
                  <li>
                    <strong>Content questions</strong> &mdash; Need help understanding a proportional relationship concept?
                    Check our <a href="/blog" className="text-teal-600 dark:text-teal-400 hover:underline">blog</a> and{" "}
                    <a href="/topics" className="text-teal-600 dark:text-teal-400 hover:underline">topic guides</a> first.
                  </li>
                  <li>
                    <strong>Technical issues</strong> &mdash; Having trouble with a calculator or checker? Let us know
                    which tool and what happened.
                  </li>
                  <li>
                    <strong>Advertising</strong> &mdash; Interested in advertising on our site? Please include &ldquo;Advertising&rdquo;
                    in your subject.
                  </li>
                  <li>
                    <strong>Content removal</strong> &mdash; If you believe any content on our site infringes on your
                    copyright, please contact us with the details.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
