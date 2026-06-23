import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import { getBlogPost, getAllSlugs, getBlogListItems } from "@/lib/blog"
import { articleSchema, breadcrumbSchema } from "@/lib/schema"
import { BlogPostLayout } from "@/components/blog/BlogPostLayout"
import { TutoringCTA } from "@/components/ctas/TutoringCTA"
import { WorksheetCTA } from "@/components/ctas/WorksheetCTA"
import { NewsletterSignup } from "@/components/ctas/NewsletterSignup"

const mdxComponents = {
  TutoringCTA,
  WorksheetCTA,
  NewsletterSignup,
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) return {}

  const blogImage = `/images/blog/${slug}.webp`

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: {
      canonical: post.frontmatter.canonical,
    },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: post.frontmatter.canonical,
      type: "article",
      publishedTime: post.frontmatter.date,
      images: post.frontmatter.featuredImage
        ? [{ url: post.frontmatter.featuredImage }]
        : [{ url: blogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: post.frontmatter.featuredImage
        ? [post.frontmatter.featuredImage]
        : [blogImage],
    },
  }
}

export function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getBlogListItems()
  const relatedPosts = allPosts
    .filter((p) => post.frontmatter.relatedArticles.includes(`/blog/${p.slug}`))
    .slice(0, 3)

  const articleLd = articleSchema({
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    author: post.frontmatter.author,
    image: post.frontmatter.featuredImage,
    url: post.frontmatter.canonical,
  })

  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", url: "https://proportionalrelationship.com" },
    { name: "Blog", url: "https://proportionalrelationship.com/blog" },
    { name: post.frontmatter.title, url: post.frontmatter.canonical },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <BlogPostLayout post={post} relatedPosts={relatedPosts}>
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeKatex],
            },
          }}
          components={mdxComponents}
        />
      </BlogPostLayout>
    </>
  )
}
