import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/blog/Breadcrumbs"

export const metadata: Metadata = {
  title: "Contact Us | Proportional Relationship",
  description: "Get in touch with the ProportionalRelationship.com team. Send questions, suggestions, or report issues.",
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
              Have a question, suggestion, or found something that is not working? We would love to hear from you.
            </p>
          </header>

          <section className="mb-8 p-6 rounded-xl bg-white dark:bg-ink/80 border border-ink/10 dark:border-ink/20">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink dark:text-white mb-1">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 text-sm rounded-lg border border-ink/20 dark:border-ink/30 bg-offwhite dark:bg-ink text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink dark:text-white mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 text-sm rounded-lg border border-ink/20 dark:border-ink/30 bg-offwhite dark:bg-ink text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink dark:text-white mb-1">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 text-sm rounded-lg border border-ink/20 dark:border-ink/30 bg-offwhite dark:bg-ink text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors text-sm">
                Send Message
              </button>
              <p className="text-xs text-ink/40 dark:text-ink/30">This is a static demo form. Email functionality can be connected to a form service or API endpoint.</p>
            </form>
          </section>
        </article>
      </div>
    </div>
  )
}
