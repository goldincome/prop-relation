"use client"

import { useState } from "react"

type Mode = "find-k" | "solve-y" | "cross-check"

export function ProportionalRelationshipCalc() {
  const [mode, setMode] = useState<Mode>("find-k")

  return (
    <div>
      <div className="flex gap-2 mb-6">
        {[
          { key: "find-k" as Mode, label: "Find k" },
          { key: "solve-y" as Mode, label: "Solve y = kx" },
          { key: "cross-check" as Mode, label: "Cross Check" },
        ].map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => setMode(m.key)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              mode === m.key
                ? "bg-teal-600 text-white"
                : "bg-white dark:bg-ink/60 text-ink/60 dark:text-ink/40 hover:bg-teal-50 dark:hover:bg-teal-900/20 border border-ink/20 dark:border-ink/30"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {mode === "find-k" && <FindKMode />}
      {mode === "solve-y" && <SolveYMode />}
      {mode === "cross-check" && <CrossCheckMode />}
    </div>
  )
}

function FindKMode() {
  const [x1, setX1] = useState("")
  const [y1, setY1] = useState("")
  const [x2, setX2] = useState("")
  const [y2, setY2] = useState("")
  const [result, setResult] = useState<{
    k1: number
    k2: number
    proportional: boolean
  } | null>(null)
  const [error, setError] = useState("")

  function calculate() {
    const nX1 = parseFloat(x1)
    const nY1 = parseFloat(y1)
    const nX2 = parseFloat(x2)
    const nY2 = parseFloat(y2)

    if (isNaN(nX1) || isNaN(nY1) || isNaN(nX2) || isNaN(nY2)) {
      setError("Enter all four values.")
      setResult(null)
      return
    }
    if (nX1 === 0 || nX2 === 0) {
      setError("x cannot be zero.")
      setResult(null)
      return
    }

    setError("")
    const k1 = nY1 / nX1
    const k2 = nY2 / nX2
    setResult({ k1, k2, proportional: Math.abs(k1 - k2) < 1e-10 })
  }

  return (
    <div>
      <p className="text-sm text-ink/60 dark:text-ink/40 mb-4">Enter two points (x, y) from a table or graph to find k.</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">x₁</label>
          <input type="number" value={x1} onChange={(e) => setX1(e.target.value)} placeholder="2" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">y₁</label>
          <input type="number" value={y1} onChange={(e) => setY1(e.target.value)} placeholder="10" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">x₂</label>
          <input type="number" value={x2} onChange={(e) => setX2(e.target.value)} placeholder="5" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">y₂</label>
          <input type="number" value={y2} onChange={(e) => setY2(e.target.value)} placeholder="25" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
      </div>

      <button type="button" onClick={calculate} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4">
        Calculate
      </button>

      {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

      {result && (
        <div className="space-y-3 text-sm">
          <div className="p-3 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20">
            k₁ = {parseFloat(y1)} ÷ {parseFloat(x1)} = <strong className="text-teal-700 dark:text-teal-300">{result.k1}</strong>
          </div>
          <div className="p-3 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20">
            k₂ = {parseFloat(y2)} ÷ {parseFloat(x2)} = <strong className="text-teal-700 dark:text-teal-300">{result.k2}</strong>
          </div>
          {result.proportional ? (
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <span className="font-semibold text-green-700 dark:text-green-300">Proportional</span>
              <span className="text-green-700 dark:text-green-300"> — k = {result.k1}, equation: y = {result.k1}x</span>
            </div>
          ) : (
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <span className="font-semibold text-red-700 dark:text-red-300">Not proportional</span>
              <span className="text-red-700 dark:text-red-300"> — ratios differ ({result.k1} vs {result.k2})</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function SolveYMode() {
  const [k, setK] = useState("")
  const [x, setX] = useState("")
  const [result, setResult] = useState<{ y: number } | null>(null)
  const [error, setError] = useState("")

  function calculate() {
    const nK = parseFloat(k)
    const nX = parseFloat(x)

    if (isNaN(nK) || isNaN(nX)) {
      setError("Enter both k and x.")
      setResult(null)
      return
    }

    setError("")
    setResult({ y: nK * nX })
  }

  return (
    <div>
      <p className="text-sm text-ink/60 dark:text-ink/40 mb-4">Given k and x, find y in y = kx.</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">k (constant)</label>
          <input type="number" value={k} onChange={(e) => setK(e.target.value)} placeholder="4" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">x</label>
          <input type="number" value={x} onChange={(e) => setX(e.target.value)} placeholder="7" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
      </div>

      <button type="button" onClick={calculate} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4">
        Calculate
      </button>

      {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

      {result && (
        <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 text-sm">
          <div className="mb-1">y = {parseFloat(k)} × {parseFloat(x)}</div>
          <div className="text-2xl font-bold text-teal-700 dark:text-teal-300">y = {result.y}</div>
        </div>
      )}
    </div>
  )
}

function CrossCheckMode() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [c, setC] = useState("")
  const [d_val, setD] = useState("")
  const [result, setResult] = useState<{
    left: number
    right: number
    match: boolean
  } | null>(null)
  const [error, setError] = useState("")

  function calculate() {
    const nA = parseFloat(a)
    const nB = parseFloat(b)
    const nC = parseFloat(c)
    const nD = parseFloat(d_val)

    if (isNaN(nA) || isNaN(nB) || isNaN(nC) || isNaN(nD)) {
      setError("Enter all four values.")
      setResult(null)
      return
    }

    setError("")
    const left = nA * nD
    const right = nB * nC
    setResult({ left, right, match: Math.abs(left - right) < 1e-10 })
  }

  return (
    <div>
      <p className="text-sm text-ink/60 dark:text-ink/40 mb-4">Check if two ratios form a proportion using cross multiplication.</p>
      <div className="flex items-center gap-3 mb-4 flex-wrap justify-center">
        <div className="w-20">
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">a</label>
          <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="3" className="w-full px-3 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <span className="text-lg text-ink/40 mt-6">:</span>
        <div className="w-20">
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">b</label>
          <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="4" className="w-full px-3 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <span className="text-lg text-ink/40 mt-6">=</span>
        <div className="w-20">
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">c</label>
          <input type="number" value={c} onChange={(e) => setC(e.target.value)} placeholder="9" className="w-full px-3 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <span className="text-lg text-ink/40 mt-6">:</span>
        <div className="w-20">
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">d</label>
          <input type="number" value={d_val} onChange={(e) => setD(e.target.value)} placeholder="12" className="w-full px-3 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
      </div>

      <button type="button" onClick={calculate} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4">
        Calculate
      </button>

      {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

      {result && (
        <div className="space-y-2 text-sm">
          <div className="p-3 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20">
            {parseFloat(a)} × {parseFloat(d_val)} = <strong className="text-teal-700 dark:text-teal-300">{result.left}</strong>
          </div>
          <div className="p-3 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20">
            {parseFloat(b)} × {parseFloat(c)} = <strong className="text-teal-700 dark:text-teal-300">{result.right}</strong>
          </div>
          {result.match ? (
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 font-semibold text-center text-base">
              {result.left} = {result.right} — These ratios form a proportion ✓
            </div>
          ) : (
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 font-semibold text-center text-base">
              {result.left} ≠ {result.right} — These ratios do NOT form a proportion ✗
            </div>
          )}
        </div>
      )}
    </div>
  )
}
