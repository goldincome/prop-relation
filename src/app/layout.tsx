import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Proportional Relationship - Math Guides, Calculators & Resources",
    template: "%s | Proportional Relationship",
  },
  description:
    "Learn proportional relationships with step-by-step guides, interactive calculators, graph checkers, and free printable worksheets for students and teachers.",
  metadataBase: new URL("https://proportionalrelationship.com"),
  alternates: {
    canonical: "https://proportionalrelationship.com",
  },
  openGraph: {
    siteName: "Proportional Relationship",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/og-default.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-default.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-offwhite dark:bg-ink text-ink dark:text-white font-[family-name:var(--font-geist-sans)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Proportional Relationship",
              url: "https://proportionalrelationship.com",
              logo: "https://proportionalrelationship.com/images/og-default.webp",
              description:
                "The web's most complete hub for proportional relationships, calculators, graph checkers, classroom resources, and step-by-step help.",
              sameAs: [],
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>

        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        <footer className="border-t border-ink/10 dark:border-ink/20 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
              <p className="text-sm text-ink/40 dark:text-ink/30">
                Proportional Relationship — helping students and teachers master
                proportional reasoning.
              </p>
              <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm" aria-label="Legal">
                <a href="/terms" className="text-ink/40 dark:text-ink/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Terms of Use
                </a>
                <a href="/privacy" className="text-ink/40 dark:text-ink/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="/accessibility" className="text-ink/40 dark:text-ink/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Accessibility
                </a>
                <a href="/contact" className="text-ink/40 dark:text-ink/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
