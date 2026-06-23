import { notFound } from "next/navigation"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import { getTool, getToolSlugs } from "@/data/tools"
import { ToolPageLayout } from "@/components/tools/ToolPageLayout"
import { ProportionalRelationshipCalc } from "@/components/tools/ProportionalRelationshipCalc"
import { UnitRateCalc } from "@/components/tools/UnitRateCalc"
import { ConstantOfProportionalityCalc } from "@/components/tools/ConstantOfProportionalityCalc"
import { EquivalentRatiosCalc } from "@/components/tools/EquivalentRatiosCalc"
import { ProportionSolverCalc } from "@/components/tools/ProportionSolverCalc"
import { ScaleFactorCalc } from "@/components/tools/ScaleFactorCalc"
import { SlopeVsUnitRateCalc } from "@/components/tools/SlopeVsUnitRateCalc"
import { RatioSimplifierCalc } from "@/components/tools/RatioSimplifierCalc"

interface Props {
  params: Promise<{ slug: string }>
}

const calculatorComponents: Record<string, ReactNode> = {
  "proportional-relationship-calculator": <ProportionalRelationshipCalc />,
  "unit-rate-calculator": <UnitRateCalc />,
  "constant-of-proportionality-calculator": <ConstantOfProportionalityCalc />,
  "equivalent-ratios-calculator": <EquivalentRatiosCalc />,
  "proportion-solver": <ProportionSolverCalc />,
  "scale-factor-calculator": <ScaleFactorCalc />,
  "slope-vs-unit-rate-calculator": <SlopeVsUnitRateCalc />,
  "ratio-simplifier": <RatioSimplifierCalc />,
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = getTool(slug)
  if (!tool || tool.type !== "calculator") return {}

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    keywords: tool.keywords,
    alternates: {
      canonical: `https://proportionalrelationship.com/calculators/${tool.slug}`,
    },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      url: `https://proportionalrelationship.com/calculators/${tool.slug}`,
      images: [{ url: "/images/og-default.webp", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: tool.metaTitle,
      description: tool.metaDescription,
      images: ["/images/og-default.webp"],
    },
  }
}

export function generateStaticParams() {
  return getToolSlugs()
    .filter((slug) => getTool(slug)?.type === "calculator")
    .map((slug) => ({ slug }))
}

export default async function CalculatorPage({ params }: Props) {
  const { slug } = await params
  const tool = getTool(slug)

  if (!tool || tool.type !== "calculator") notFound()

  return (
    <ToolPageLayout tool={tool}>
      {calculatorComponents[slug] ?? null}
    </ToolPageLayout>
  )
}
