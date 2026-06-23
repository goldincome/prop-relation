"use client"

import { useMemo } from "react"
import { Breadcrumbs } from "./Breadcrumbs"
import { TableOfContents } from "./TableOfContents"
import { ReadingProgressBar } from "./ReadingProgressBar"
import { AuthorCard } from "./AuthorCard"
import { RelatedPosts } from "./RelatedPosts"
import { NewsletterSignup } from "../ctas/NewsletterSignup"
import { TutoringCTA } from "../ctas/TutoringCTA"
import type { BlogPost, BlogListItem } from "@/types/blog"

interface BlogPostLayoutProps {
  post: BlogPost
  relatedPosts: BlogListItem[]
  children: React.ReactNode
}

export function BlogPostLayout({ post, relatedPosts, children }: BlogPostLayoutProps) {
  const breadcrumbItems = useMemo(
    () => [
      { label: "Blog", href: "/blog" },
      { label: post.frontmatter.title },
    ],
    [post.frontmatter.title]
  )

  return (
    <>
      <ReadingProgressBar />

      <div className="min-h-screen bg-offwhite dark:bg-ink transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex gap-10">
            <article className="flex-1 min-w-0 max-w-3xl">
              <header className="mb-10">
                <div className="flex items-center gap-3 text-xs text-ink/50 dark:text-ink/40 mb-3">
                  <span>{post.readingTime} min read</span>
                  <span>·</span>
                  <span className="capitalize">
                    {post.frontmatter.category.replace(/-/g, " ")}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white leading-tight mb-4">
                  {post.frontmatter.title}
                </h1>

                <p className="text-lg text-ink/60 dark:text-ink/50 leading-relaxed">
                  {post.frontmatter.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {post.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              {post.frontmatter.featuredImage && (
                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-10 bg-teal-50 dark:bg-teal-900/20">
                  <img
                    src={post.frontmatter.featuredImage}
                    alt={post.frontmatter.featuredImageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="blog-content max-w-none">
                {children}
              </div>

              <div className="mt-12">
                <AuthorCard name={post.frontmatter.author} />

                <div className="mt-8">
                  <NewsletterSignup />
                </div>

                <div className="mt-6">
                  <TutoringCTA />
                </div>

                <div className="mt-10">
                  <RelatedPosts posts={relatedPosts} />
                </div>
              </div>
            </article>

            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
