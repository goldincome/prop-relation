"use client"

import { useState } from "react"

interface CheckResult {
  k: number | null
  hasConstant: boolean
  constant: number | null
  proportional: boolean
  equation: string
  formatted: string
}

export function EquationProportionalChecker() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<CheckResult | null>(null)
  const [error, setError] = useState("")

  function check() {
    const trimmed = input.trim().toLowerCase().replace(/\s+/g, "")
    if (!trimmed) {
      setError("Enter an equation like y=4x")
      setResult(null)
      return
    }

    setError("")

    // Normalize: y = mx + b or y = kx
    const match = trimmed.match(/^y=([\d./]+)?x(?:\+([\d./]+))?$|^y=([\d./]+)?x$/)

    if (!match) {
      // Try with just y = number * x
      const simple = trimmed.match(/^y=([\d./]+)?x$/)
      if (simple) {
        const kVal = simple[1] ? parseFloatSimple(simple[1]) : 1
        setResult({
          k: kVal,
          hasConstant: false,
          constant: null,
          proportional: true,
          equation: trimmed,
          formatted: kVal === 1 ? "y = x" : `y = ${formatNum(kVal)}x`,
        })
        return
      }

      // Check for y = kx + b (or y = kx - b)
      const withConst = trimmed.match(/^y=([\d./]+)?x\+([\d./]+)$|^y=([\d./]+)?x-([\d./]+)$/)
      if (withConst) {
        const kVal = withConst[1] ? parseFloatSimple(withConst[1]) : 1
        const bVal = withConst[2] ? parseFloatSimple(withConst[2]) : (withConst[4] ? -parseFloatSimple(withConst[4]) : 0)
        setResult({
          k: kVal,
          hasConstant: true,
          constant: bVal,
          proportional: false,
          equation: trimmed,
          formatted: `y = ${formatNum(kVal)}x + ${formatNum(bVal)}`,
        })
        return
      }

      setError('Use format: y = kx or y = kx + b (e.g., y=4x or y=3x+2)')
      setResult(null)
      return
    }

    const kVal = match[1] ? parseFloatSimple(match[1]) : 1
    const bVal = match[2] ? parseFloatSimple(match[2]) : null

    setResult({
      k: kVal,
      hasConstant: bVal !== null && bVal !== 0,
      constant: bVal,
      proportional: bVal === null || bVal === 0,
      equation: trimmed,
      formatted: bVal ? `y = ${formatNum(kVal)}x + ${formatNum(bVal)}` : `y = ${formatNum(kVal)}x`,
    })
  }

  return (
    <div>
      <p className="text-sm text-ink/60 dark:text-ink/40 mb-4">
        Enter any equation to check if it represents a proportional relationship
      </p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="y = 4x"
        className="w-full px-4 py-3 text-base rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white placeholder:text-ink/30 font-mono focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
      />

      <button
        type="button"
        onClick={check}
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4 text-base"
      >
        Check Equation
      </button>

      {error && <p className="text-sm text-red-500 mb-3 text-center">{error}</p>}

      {result && (
        <div className="space-y-3 text-sm">
          <div className="p-4 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20 text-center">
            <span className="text-lg font-mono">{result.formatted}</span>
          </div>

          <div className={`p-3 rounded-lg border text-center ${result.proportional ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"}`}>
            {result.hasConstant ? (
              <span className="text-red-700 dark:text-red-300">
                ❌ Has constant term (+{result.constant}) — NOT proportional
              </span>
            ) : (
              <span className="text-green-700 dark:text-green-300">
                ✅ No constant term — IS proportional (k = {result.k})
              </span>
            )}
          </div>

          <div className="p-4 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20 text-center">
            <p className="text-ink/70 dark:text-ink/50 mb-1">Form: y = kx</p>
            {result.proportional ? (
              <p className="text-green-700 dark:text-green-300 font-medium">
                y = {formatNum(result.k!)}x → fits y = kx ✓
              </p>
            ) : (
              <p className="text-red-700 dark:text-red-300 font-medium">
                y = {formatNum(result.k!)}x + {formatNum(result.constant!)} → has extra term ✗
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function parseFloatSimple(s: string): number {
  // Handle fractions like 2/3
  if (s.includes("/")) {
    const [num, den] = s.split("/")
    return parseFloat(num) / parseFloat(den)
  }
  return parseFloat(s)
}

function formatNum(n: number): string {
  if (Number.isInteger(n)) return n.toString()
  // Simplify fractions
  const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a
  const denom = 1000000
  const num = Math.round(n * denom)
  const g = gcd(num, denom)
  const simpNum = num / g
  const simpDen = denom / g
  if (simpDen === 1) return simpNum.toString()
  return `${simpNum}/${simpDen}`
}
