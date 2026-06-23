"use client"

import { useState } from "react"

export function SlopeVsUnitRateCalc() {
  const [x1, setX1] = useState("")
  const [y1, setY1] = useState("")
  const [x2, setX2] = useState("")
  const [y2, setY2] = useState("")
  const [result, setResult] = useState<{
    slope: number
    unitRate: number
    proportional: boolean
  } | null>(null)
  const [error, setError] = useState("")

  function calculate() {
    const nX1 = parseFloat(x1)
    const nY1 = parseFloat(y1)
    const nX2 = parseFloat(x2)
    const nY2 = parseFloat(y2)

    if (isNaN(nX1) || isNaN(nY1) || isNaN(nX2) || isNaN(nY2)) {
      setError("Enter all four coordinates.")
      setResult(null)
      return
    }
    if (nX2 === nX1) {
      setError("x coordinates must differ.")
      setResult(null)
      return
    }

    setError("")
    const slope = (nY2 - nY1) / (nX2 - nX1)
    const unitRate = nX2 !== 0 ? nY2 / nX2 : (nX1 !== 0 ? nY1 / nX1 : NaN)
    const throughOrigin = Math.abs(nX1) < 1e-10 && Math.abs(nY1) < 1e-10
    const proportional = throughOrigin && !isNaN(unitRate) && Math.abs(slope - unitRate) < 1e-10

    setResult({ slope, unitRate, proportional })
  }

  return (
    <div>
      <p className="text-sm text-ink/60 dark:text-ink/40 mb-4">Enter two points to compare slope and unit rate.</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">x&#x2081;</label>
          <input type="number" value={x1} onChange={(e) => setX1(e.target.value)} placeholder="0" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">y&#x2081;</label>
          <input type="number" value={y1} onChange={(e) => setY1(e.target.value)} placeholder="0" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">x&#x2082;</label>
          <input type="number" value={x2} onChange={(e) => setX2(e.target.value)} placeholder="4" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">y&#x2082;</label>
          <input type="number" value={y2} onChange={(e) => setY2(e.target.value)} placeholder="12" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
      </div>

      <button type="button" onClick={calculate} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4">
        Calculate
      </button>

      {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

      {result && (
        <div className="space-y-3 text-sm">
          <div className="p-3 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20">
            Slope = ({parseFloat(y2)} &minus; {parseFloat(y1)}) &divide; ({parseFloat(x2)} &minus; {parseFloat(x1)}) = <strong className="text-teal-700 dark:text-teal-300">{result.slope}</strong>
          </div>
          <div className="p-3 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20">
            Unit rate = y&#x2082; &divide; x&#x2082; = <strong className="text-teal-700 dark:text-teal-300">{result.unitRate}</strong>
          </div>
          {result.proportional ? (
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 font-semibold">
              Slope matches unit rate — this relationship is proportional ✓
            </div>
          ) : (
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 font-semibold">
              Slope ({result.slope}) does not match unit rate ({result.unitRate}) — not proportional ✗
            </div>
          )}
        </div>
      )}
    </div>
  )
}
