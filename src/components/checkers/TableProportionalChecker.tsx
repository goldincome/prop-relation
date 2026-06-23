"use client"

import { useState } from "react"

interface RowEntry { x: string; y: string }

export function TableProportionalChecker() {
  const [rows, setRows] = useState<RowEntry[]>([{ x: "", y: "" }, { x: "", y: "" }])
  const [result, setResult] = useState<{
    rows: { x: number; y: number; ratio: number | null }[]
    allMatch: boolean
    k: number | null
  } | null>(null)
  const [error, setError] = useState("")

  function addRow() {
    setRows([...rows, { x: "", y: "" }])
    setResult(null)
    setError("")
  }

  function removeRow(index: number) {
    if (rows.length <= 2) return
    const next = rows.filter((_, i) => i !== index)
    setRows(next)
    setResult(null)
    setError("")
  }

  function updateRow(index: number, field: "x" | "y", value: string) {
    const next = rows.map((r, i) => (i === index ? { ...r, [field]: value } : r))
    setRows(next)
    setResult(null)
    setError("")
  }

  function check() {
    const parsed: { x: number; y: number }[] = []

    for (let i = 0; i < rows.length; i++) {
      const x = parseFloat(rows[i].x)
      const y = parseFloat(rows[i].y)
      if (rows[i].x.trim() === "" || rows[i].y.trim() === "") {
        setError(`Fill in both x and y for row ${i + 1}.`)
        setResult(null)
        return
      }
      if (isNaN(x) || isNaN(y)) {
        setError(`Enter valid numbers for row ${i + 1}.`)
        setResult(null)
        return
      }
      parsed.push({ x, y })
    }

    setError("")

    const computed = parsed.map((p) => ({
      x: p.x,
      y: p.y,
      ratio: p.x !== 0 ? p.y / p.x : null,
    }))

    const valid = computed.filter((r) => r.ratio !== null)
    let allMatch = false
    let k: number | null = null

    if (valid.length >= 1) {
      k = valid[0].ratio!
      allMatch = valid.every((r) => Math.abs(r.ratio! - k!) < 1e-10)
    }

    setResult({ rows: computed, allMatch, k })
  }

  return (
    <div>
      <p className="text-sm text-ink/60 dark:text-ink/40 mb-4">
        Enter each row from your table below
      </p>

      <div className="space-y-2 mb-4">
        <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center">
          <div className="text-xs font-medium text-ink/50 dark:text-ink/40 pl-3">x</div>
          <div className="text-xs font-medium text-ink/50 dark:text-ink/40 pl-3">y</div>
          <div className="w-8" />
        </div>
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center">
            <input
              type="number"
              value={row.x}
              onChange={(e) => updateRow(i, "x", e.target.value)}
              placeholder="x"
              className="w-full px-4 py-3 text-base rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="number"
              value={row.y}
              onChange={(e) => updateRow(i, "y", e.target.value)}
              placeholder="y"
              className="w-full px-4 py-3 text-base rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="button"
              onClick={() => removeRow(i)}
              disabled={rows.length <= 2}
              className={`w-8 h-full flex items-center justify-center rounded-lg text-lg transition-colors ${
                rows.length <= 2
                  ? "text-ink/20 dark:text-ink/20 cursor-not-allowed"
                  : "text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              }`}
              aria-label="Remove row"
            >
              −
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mb-4">
        <button
          type="button"
          onClick={addRow}
          className="flex-1 bg-offwhite dark:bg-ink/60 hover:bg-teal-50 dark:hover:bg-teal-900/20 text-ink dark:text-white font-medium py-3 px-6 rounded-lg transition-colors text-base border border-ink/20 dark:border-ink/30 border-dashed"
        >
          + Add Row
        </button>
        <button
          type="button"
          onClick={check}
          className="flex-[2] bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-base"
        >
          Check Table
        </button>
      </div>

      {error && <p className="text-sm text-red-500 mb-3 text-center">{error}</p>}

      {result && (
        <div className="space-y-3 text-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-offwhite dark:bg-ink/60">
                  <th className="p-3 border border-ink/20 dark:border-ink/30 text-left font-medium text-ink dark:text-white">x</th>
                  <th className="p-3 border border-ink/20 dark:border-ink/30 text-left font-medium text-ink dark:text-white">y</th>
                  <th className="p-3 border border-ink/20 dark:border-ink/30 text-left font-medium text-ink dark:text-white">y ÷ x</th>
                  <th className="p-3 border border-ink/20 dark:border-ink/30 text-left font-medium text-ink dark:text-white">= k?</th>
                </tr>
              </thead>
              <tbody>
                {result.rows.map((row, i) => (
                  <tr key={i} className="bg-white dark:bg-ink/80">
                    <td className="p-3 border border-ink/10 dark:border-ink/20 font-medium">{row.x}</td>
                    <td className="p-3 border border-ink/10 dark:border-ink/20 font-medium">{row.y}</td>
                    <td className="p-3 border border-ink/10 dark:border-ink/20">
                      {row.ratio !== null ? row.ratio.toFixed(4) : "—"}
                    </td>
                    <td className="p-3 border border-ink/10 dark:border-ink/20 text-center">
                      {row.ratio !== null && result.k !== null ? (
                        Math.abs(row.ratio - result.k) < 1e-10 ? (
                          <span className="text-lg">✅</span>
                        ) : (
                          <span className="text-lg">❌</span>
                        )
                      ) : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {result.k !== null && result.rows.some((r) => r.x !== 0) ? (
            result.allMatch ? (
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center">
                <span className="text-lg font-semibold text-green-700 dark:text-green-300">
                  ✅ Table IS proportional (k = {result.k}, y = {result.k}x)
                </span>
              </div>
            ) : (
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-center">
                <span className="text-lg font-semibold text-red-700 dark:text-red-300">
                  ❌ Table is NOT proportional — ratios are not all equal
                </span>
              </div>
            )
          ) : (
            <p className="text-sm text-ink/50 text-center">Need at least one row with x ≠ 0 to check.</p>
          )}
        </div>
      )}
    </div>
  )
}
