import fs from "fs"
import path from "path"

const ARTICLES = [
  {
    slug: "what-is-a-proportional-relationship",
    title: "What Is a Proportional Relationship?",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#f9fafb"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#e5e7eb" stroke-width="1" rx="8"/>
    <g transform="translate(50, 100)">
        <rect x="0" y="0" width="600" height="180" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" rx="6"/>
        <text x="300" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937">y = kx Explained</text>
        <text x="300" y="60" text-anchor="middle" font-size="12" fill="#6b7280">"y is directly proportional to x"</text>
        <text x="300" y="80" text-anchor="middle" font-size="12" fill="#6b7280">as x increases, y increases exactly "k" times</text>
        <text x="300" y="100" text-anchor="middle" font-size="11" fill="#6b7280">Both x and y start at the origin (0,0)</text>
    </g>
</svg>`,
  },
  {
    slug: "how-to-tell-if-a-table-is-proportional",
    title: "How to Tell If a Table Is Proportional",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#f9fafb"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#e5e7eb" stroke-width="1" rx="8"/>
    <g transform="translate(50, 80)">
        <rect x="0" y="0" width="280" height="140" fill="white" stroke="#22c55e" stroke-width="2" rx="8"/>
        <text x="140" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937">Proportional Table</text>
        <line x1="40" y1="65" x2="240" y2="65" stroke="#374151" stroke-width="1"/>
        <line x1="40" y1="65" x2="40" y2="120" stroke="#374151" stroke-width="1"/>
        <line x1="140" y1="65" x2="140" y2="120" stroke="#374151" stroke-width="1"/>
        <line x1="240" y1="65" x2="240" y2="120" stroke="#374151" stroke-width="1"/>
        <text x="140" y="90" text-anchor="middle" font-size="12" fill="#1f2937">1 → 2</text>
        <text x="140" y="105" text-anchor="middle" font-size="12" fill="#1f2937">2 → 4</text>
    </g>
    <g transform="translate(380, 80)">
        <rect x="0" y="0" width="280" height="180" fill="white" stroke="#fecaca" stroke-width="2" rx="8"/>
        <text x="140" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#dc2626">Non-Proportional Table</text>
        <text x="140" y="55" text-anchor="middle" font-size="11" fill="#6b7280">x: y = 2x + 1</text>
        <line x1="40" y1="100" x2="240" y2="100" stroke="#374151" stroke-width="1"/>
        <line x1="40" y1="100" x2="40" y2="170" stroke="#374151" stroke-width="1"/>
        <line x1="140" y1="100" x2="140" y2="170" stroke="#374151" stroke-width="1"/>
        <line x1="240" y1="100" x2="240" y2="170" stroke="#374151" stroke-width="1"/>
        <text x="140" y="135" text-anchor="middle" font-size="12" fill="#1f2937">2 → 5</text>
        <text x="140" y="155" text-anchor="middle" font-size="12" fill="#dc2626">y ≠ k×</text>
    </g>
</svg>`,
  },
  {
    slug: "how-to-tell-if-a-graph-is-proportional",
    title: "How to Tell If a Graph Is Proportional",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#f9fafb"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#e5e7eb" stroke-width="1" rx="8"/>
    <g transform="translate(50, 80)">
        <rect x="0" y="0" width="320" height="180" fill="white" stroke="#22c55e" stroke-width="2" rx="8"/>
        <text x="160" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937">Proportional Graph (y = 2x)</text>
        <line x1="60" y1="35" x2="60" y2="150" stroke="#374151" stroke-width="1.5"/>
        <line x1="60" y1="150" x2="290" y2="150" stroke="#374151" stroke-width="1.5"/>
        <line x1="60" y1="150" x2="130" y2="110" stroke="#22c55e" stroke-width="2.5"/>
        <circle cx="60" cy="150" r="4" fill="#1f2937"/>
        <circle cx="130" cy="110" r="4" fill="#1f2937"/>
        <text x="200" y="100" font-size="14" fill="#22c55e" font-weight="bold">y = 2x</text>
        <text x="160" y="170" text-anchor="middle" font-size="11" fill="#6b7280">Passes through (0,0)</text>
    </g>
    <g transform="translate(430, 80)">
        <rect x="0" y="0" width="280" height="180" fill="white" stroke="#fecaca" stroke-width="2" rx="8"/>
        <text x="140" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#dc2626">Non-Proportional Graph</text>
        <line x1="60" y1="35" x2="60" y2="150" stroke="#374151" stroke-width="1.5"/>
        <line x1="60" y1="150" x2="250" y2="150" stroke="#374151" stroke-width="1.5"/>
        <line x1="60" y1="150" x2="250" y2="100" stroke="#dc2626" stroke-width="2.5"/>
        <circle cx="60" cy="150" r="4" fill="#1f2937"/>
        <circle cx="250" cy="100" r="4" fill="#1f2937"/>
        <text x="160" y="170" text-anchor="middle" font-size="11" fill="#dc2626">Does not pass through (0,0)</text>
    </g>
</svg>`,
  },
  {
    slug: "constant-of-proportionality-explained",
    title: "Constant of Proportionality",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#f9fafb"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#e5e7eb" stroke-width="1" rx="8"/>
    <g transform="translate(50, 80)">
        <rect x="0" y="0" width="320" height="200" fill="#e0e7ff" stroke="#3b82f6" stroke-width="2" rx="8"/>
        <text x="160" y="35" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937">What is k?</text>
        <text x="160" y="60" text-anchor="middle" font-size="12" fill="#6b7280">"k" is the constant in y = kx</text>
        <text x="160" y="80" text-anchor="middle" font-size="12" fill="#6b7280">It tells us: "for every 1 unit of x"</text>
        <text x="160" y="100" text-anchor="middle" font-size="12" fill="#6b7280">y behaves exactly "k" times"</text>
        <line x1="60" y1="130" x2="260" y2="130" stroke="#374151" stroke-width="1"/>
        <line x1="60" y1="130" x2="60" y2="180" stroke="#374151" stroke-width="1"/>
        <line x1="60" y1="180" x2="260" y2="180" stroke="#374151" stroke-width="1"/>
        <line x1="60" y1="180" x2="130" y2="130" stroke="#3b82f6" stroke-width="2.5"/>
        <circle cx="60" cy="180" r="4" fill="#1f2937"/>
        <circle cx="130" cy="130" r="6" fill="#3b82f6" stroke="#3b82f6" stroke-width="3"/>
        <text x="150" y="135" font-size="18" fill="#3b82f6" font-weight="bold">k = 2</text>
        <text x="160" y="170" text-anchor="middle" font-size="12" fill="#3b82f6" font-weight="bold">Slope = k</text>
    </g>
</svg>`,
  },
  {
    slug: "unit-rate-vs-ratio",
    title: "Unit Rate vs Ratio",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#f9fafb"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#e5e7eb" stroke-width="1" rx="8"/>
    <g transform="translate(50, 80)">
        <rect x="0" y="0" width="340" height="160" fill="#e0e7ff" stroke="#8b5cf6" stroke-width="2" rx="6"/>
        <text x="170" y="35" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937">Ratio Example</text>
        <text x="170" y="65" text-anchor="middle" font-size="12" fill="#6b7280">10 miles for 2 hours</text>
        <text x="170" y="85" text-anchor="middle" font-size="11" fill="#6b7280">Ratio = ÷</text>
        <line x1="50" y1="115" x2="290" y2="115" stroke="#374151" stroke-width="1"/>
        <text x="170" y="140" text-anchor="middle" font-size="24" fill="#8b5cf6" font-weight="bold">5</text>
    </g>
    <g transform="translate(410, 80)">
        <rect x="0" y="0" width="340" height="160" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" rx="6"/>
        <text x="170" y="35" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937">Unit Rate</text>
        <text x="170" y="60" text-anchor="middle" font-size="12" fill="#6b7280">Simplified ratio ÷ units</text>
        <text x="170" y="80" text-anchor="middle" font-size="12" fill="#6b7280">"per 1 hour" or "per 1 mile"</text>
        <line x1="50" y1="115" x2="290" y2="115" stroke="#374151" stroke-width="1"/>
        <text x="170" y="135" text-anchor="middle" font-size="18" fill="#f59e0b" font-weight="bold">5 miles/hour</text>
        <text x="170" y="155" text-anchor="middle" font-size="10" fill="#6b7280">also: 0.2 hours/mile</text>
    </g>
</svg>`,
  },
  {
    slug: "proportional-relationships-word-problems",
    title: "Proportional Relationships Word Problems",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#f9fafb"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#e5e7eb" stroke-width="1" rx="8"/>
    <g transform="translate(50, 90)">
        <rect x="0" y="0" width="440" height="190" fill="#fff7ed" stroke="#f97316" stroke-width="2" rx="6"/>
        <text x="220" y="40" text-anchor="middle" font-size="14" font-weight="bold" fill="#9a3412">Word Problem: Painting Walls</text>
        <text x="220" y="65" text-anchor="middle" font-size="12" fill="#6b7280">3 hours to paint 2 walls</text>
        <text x="220" y="85" text-anchor="middle" font-size="12" fill="#6b7280">Rate: walls ÷ hours = ?</text>
        <line x1="60" y1="110" x2="380" y2="110" stroke="#374151" stroke-width="1"/>
        <text x="220" y="140" text-anchor="middle" font-size="14" fill="#f97316" font-weight="bold">2 ÷ 3 = 0.67</text>
        <text x="220" y="165" text-anchor="middle" font-size="12" fill="#f97316" font-weight="bold">0.67 walls per hour</text>
        <text x="220" y="180" text-anchor="middle" font-size="10" fill="#6b7280">alternate: 1.5 hours per wall</text>
    </g>
    <g transform="translate(510, 90)">
        <rect x="0" y="0" width="220" height="190" fill="#e0e7ff" stroke="#8b5cf6" stroke-width="2" rx="6"/>
        <text x="110" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#1f2937">Key Steps</text>
        <text x="110" y="50" text-anchor="middle" font-size="11" fill="#6b7280">1. Identify quantities</text>
        <text x="110" y="70" text-anchor="middle" font-size="11" fill="#6b7280">2. Write ratio a : b</text>
        <text x="110" y="90" text-anchor="middle" font-size="11" fill="#6b7280">3. Simplify to unit rate</text>
        <text x="110" y="110" text-anchor="middle" font-size="11" fill="#6b7280">4. Answer question</text>
    </g>
</svg>`,
  },
  {
    slug: "proportional-vs-nonproportional-relationships",
    title: "Proportional vs Non-Proportional",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#f9fafb"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#e5e7eb" stroke-width="1" rx="8"/>
    <g transform="translate(50, 80)">
        <rect x="0" y="0" width="340" height="180" fill="#dcfce7" stroke="#22c55e" stroke-width="2" rx="8"/>
        <text x="170" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937" text-decoration="underlined">✓ Proportional</text>
        <text x="170" y="55" text-anchor="middle" font-size="12" fill="#6b7280">y is directly proportional to x</text>
        <line x1="60" y1="75" x2="280" y2="75" stroke="#374151" stroke-width="1"/>
        <text x="170" y="105" text-anchor="middle" font-size="12" fill="#1f2937">y = kx</text>
        <text x="170" y="125" text-anchor="middle" font-size="11" fill="#6b7280">Ratios are constant: y₁/x₁ = y₂/x₂</text>
        <text x="170" y="145" text-anchor="middle" font-size="11" fill="#6b7280">Includes (0,0)</text>
        <text x="170" y="165" text-anchor="middle" font-size="11" fill="#6b7280">Slope = k</text>
    </g>
    <g transform="translate(410, 80)">
        <rect x="0" y="0" width="340" height="180" fill="#fee2e2" stroke="#ef4444" stroke-width="2" rx="8"/>
        <text x="170" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#dc2626" text-decoration="underlined">✗ Non-Proportional</text>
        <text x="170" y="55" text-anchor="middle" font-size="12" fill="#6b7280">Not directly proportional</text>
        <line x1="60" y1="75" x2="280" y2="75" stroke="#374151" stroke-width="1"/>
        <text x="170" y="105" text-anchor="middle" font-size="12" fill="#dc2626">y = kx + b</text>
        <text x="170" y="125" text-anchor="middle" font-size="11" fill="#6b7280">Ratios are NOT constant</text>
        <text x="170" y="145" text-anchor="middle" font-size="11" fill="#6b7280">Does NOT include (0,0)</text>
        <text x="170" y="165" text-anchor="middle" font-size="11" fill="#6b7280">b ≠ 0</text>
    </g>
</svg>`,
  },
  {
    slug: "y-equals-kx-explained",
    title: "y = kx Explained",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#f9fafb"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#e5e7eb" stroke-width="1" rx="8"/>
    <g transform="translate(50, 100)">
        <rect x="0" y="0" width="600" height="150" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" rx="6"/>
        <text x="300" y="35" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937">y = kx Explained</text>
        <text x="300" y="60" text-anchor="middle" font-size="12" fill="#6b7280">"y is directly proportional to x"</text>
        <text x="300" y="80" text-anchor="middle" font-size="12" fill="#6b7280">as x increases, y increases exactly "k" times</text>
        <text x="300" y="100" text-anchor="middle" font-size="11" fill="#6b7280">Both x and y start at the origin (0,0)</text>
    </g>
    <g transform="translate(350, 100)">
        <rect x="0" y="0" width="200" height="150" fill="#f3f4f6" stroke="#374151" stroke-width="1" rx="6"/>
        <line x1="40" y1="30" x2="40" y2="130" stroke="#374151" stroke-width="1.5"/>
        <line x1="40" y1="130" x2="100" y2="130" stroke="#374151" stroke-width="1.5"/>
        <line x1="40" y1="130" x2="80" y2="40" stroke="#3b82f6" stroke-width="3"/>
        <circle cx="40" cy="130" r="5" fill="#1f2937"/>
        <circle cx="80" cy="40" r="5" fill="#1f2937"/>
        <text x="50" y="140" text-anchor="middle" font-size="18" fill="#3b82f6" font-weight="bold">k = 2</text>
    </g>
</svg>`,
  },
  {
    slug: "common-mistakes-in-proportional-relationships",
    title: "Common Mistakes",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#fef2f2"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#fecaca" stroke-width="1" rx="8"/>
    <g transform="translate(50, 80)">
        <rect x="0" y="0" width="420" height="200" fill="#fef2f2" stroke="#dc2626" stroke-width="2" rx="6"/>
        <text x="210" y="35" text-anchor="middle" font-size="14" font-weight="bold" fill="#dc2626">Common Mistake</text>
        <text x="210" y="60" text-anchor="middle" font-size="12" fill="#6b7280">❌ Confusing proportional with linear</text>
        <line x1="40" y1="75" x2="380" y2="75" stroke="#dc2626" stroke-width="1"/>
        <text x="210" y="115" text-anchor="middle" font-size="12" fill="#6b7280">Linear: y = kx + b</text>
        <text x="210" y="140" text-anchor="middle" font-size="11" fill="#6b7280">May NOT pass through origin if b ≠ 0</text>
        <text x="210" y="165" text-anchor="middle" font-size="11" fill="#6b7280">b is the y-intercept</text>
        <text x="210" y="185" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="bold">If b ≠ 0: NOT proportional!</text>
    </g>
    <g transform="translate(500, 80)">
        <rect x="0" y="0" width="260" height="200" fill="#dcfce7" stroke="#22c55e" stroke-width="2" rx="6"/>
        <text x="130" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">• Proportional: y = kx</text>
        <text x="130" y="65" text-anchor="middle" font-size="11" fill="#6b7280">✓ Passes through origin</text>
        <text x="130" y="85" text-anchor="middle" font-size="11" fill="#6b7280">✓ y₁/x₁ = y₂/x₂ (constant k)</text>
        <text x="130" y="105" text-anchor="middle" font-size="11" fill="#6b7280">✓ b = 0 by definition</text>
        <text x="130" y="130" text-anchor="middle" font-size="11" fill="#6b7280">✓ Slope = k</text>
    </g>
</svg>`,
  },
  {
    slug: "unit-rate-real-life-examples",
    title: "Unit Rate Real Life Examples",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#f9fafb"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#e5e7eb" stroke-width="1" rx="8"/>
    <g transform="translate(50, 90)">
        <rect x="0" y="0" width="340" height="200" fill="#fff7ed" stroke="#f97316" stroke-width="2" rx="6"/>
        <text x="170" y="40" text-anchor="middle" font-size="14" font-weight="bold" fill="#9a3412">Real Life Example: Miles/Gallon</text>
        <text x="170" y="70" text-anchor="middle" font-size="12" fill="#6b7280">Car travels 120 miles on 6 gallons</text>
        <line x1="60" y1="85" x2="280" y2="85" stroke="#374151" stroke-width="1"/>
        <text x="170" y="115" text-anchor="middle" font-size="14" fill="#f97316" font-weight="bold">120 ÷ 6 = 20</text>
        <text x="170" y="140" text-anchor="middle" font-size="12" fill="#f97316" font-weight="bold">20 miles/gallon</text>
        <text x="170" y="165" text-anchor="middle" font-size="11" fill="#6b7280">Or: 0.05 gallon/mile</text>
        <text x="170" y="185" text-anchor="middle" font-size="12" fill="#6b7280">"How far per 1 gallon?"</text>
    </g>
    <g transform="translate(410, 90)">
        <rect x="0" y="0" width="340" height="200" fill="#e0e7ff" stroke="#3b82f6" stroke-width="2" rx="6"/>
        <text x="170" y="40" text-anchor="middle" font-size="12" font-weight="bold" fill="#1f2937">Fast Food Unit Rates</text>
        <text x="170" y="70" text-anchor="middle" font-size="11" fill="#6b7280">Big Mac: 548 calories per sandwich</text>
        <text x="170" y="90" text-anchor="middle" font-size="11" fill="#6b7280">Price: $5.99 for 1 burger</text>
        <text x="170" y="110" text-anchor="middle" font-size="11" fill="#6b7280">Speed: 120 mph (car)</text>
        <line x1="60" y1="125" x2="280" y2="125" stroke="#374151" stroke-width="1"/>
        <text x="170" y="150" text-anchor="middle" font-size="11" fill="#6b7280">All represent "per 1 unit"</text>
        <text x="170" y="180" text-anchor="middle" font-size="14" fill="#3b82f6" font-weight="bold">$6.00/burger</text>
    </g>
</svg>`,
  },
  {
    slug: "proportional-relationships-worksheets",
    title: "Worksheets",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#f0fdf4"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#bbf7d0" stroke-width="1" rx="8"/>
    <text x="400" y="50" text-anchor="middle" font-size="16" font-weight="bold" fill="#166534">Worksheets Overview</text>
    <g transform="translate(100, 100)">
        <rect x="0" y="0" width="180" height="120" fill="#fff" stroke="#bbf7d0" stroke-width="2" rx="4"/>
        <text x="90" y="50" text-anchor="middle" font-size="14" font-weight="bold" fill="#166534">Proportional Pack</text>
        <text x="90" y="80" text-anchor="middle" font-size="11" fill="#15803d">7 worksheets</text>
    </g>
    <g transform="translate(290, 100)">
        <rect x="0" y="0" width="180" height="120" fill="#fff" stroke="#bbf7d0" stroke-width="2" rx="4"/>
        <text x="90" y="50" text-anchor="middle" font-size="14" font-weight="bold" fill="#166534">Unit Rate Pack</text>
        <text x="90" y="80" text-anchor="middle" font-size="11" fill="#15803d">6 worksheets</text>
    </g>
    <g transform="translate(480, 100)">
        <rect x="0" y="0" width="180" height="120" fill="#fff" stroke="#bbf7d0" stroke-width="2" rx="4"/>
        <text x="90" y="50" text-anchor="middle" font-size="14" font-weight="bold" fill="#166534">Constant of k</text>
        <text x="90" y="80" text-anchor="middle" font-size="11" fill="#15803d">6 worksheets</text>
    </g>
    <g transform="translate(100, 230)">
        <rect x="0" y="0" width="180" height="90" fill="#fff" stroke="#bbf7d0" stroke-width="2" rx="4"/>
        <text x="90" y="40" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">Worksheets Total</text>
        <text x="90" y="70" text-anchor="middle" font-size="18" fill="#15803d">19 pages</text>
    </g>
    <g transform="translate(300, 230)">
        <rect x="0" y="0" width="180" height="90" fill="#fff" stroke="#bbf7d0" stroke-width="2" rx="4"/>
        <text x="90" y="40" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">Answer Keys</text>
        <text x="90" y="70" text-anchor="middle" font-size="18" fill="#15803d">All included</text>
    </g>
    <g transform="translate(500, 230)">
        <rect x="0" y="0" width="180" height="90" fill="#fff" stroke="#bbf7d0" stroke-width="2" rx="4"/>
        <text x="90" y="40" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">Printable</text>
        <text x="90" y="70" text-anchor="middle" font-size="18" fill="#15803d">Yes</text>
    </g>
</svg>`,
  },
  {
    slug: "comparing-proportional-relationships",
    title: "Comparing Proportional Relationships",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#f9fafb"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#e5e7eb" stroke-width="1" rx="8"/>
    <g transform="translate(50, 90)">
        <rect x="0" y="0" width="380" height="180" fill="#dcfce7" stroke="#22c55e" stroke-width="2" rx="6"/>
        <text x="190" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">Relationship 1: y = 2x</text>
        <text x="190" y="65" text-anchor="middle" font-size="11" fill="#6b7280">k₁ = 2</text>
        <line x1="60" y1="80" x2="320" y2="80" stroke="#22c55e" stroke-width="2"/>
        <text x="190" y="95" text-anchor="middle" font-size="12" fill="#22c55e">Points (1,2), (2,4), ...</text>
        <text x="190" y="130" text-anchor="middle" font-size="11" fill="#6b7280">y₁/x₁ = y₂/x₂ = 2</text>
        <text x="190" y="150" text-anchor="middle" font-size="11" fill="#166534">Steeper slope than Relationship 2</text>
    </g>
    <g transform="translate(460, 90)">
        <rect x="0" y="0" width="280" height="180" fill="#e0e7ff" stroke="#3b82f6" stroke-width="2" rx="6"/>
        <text x="140" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#1f2937">Relationship 2: y = 0.5x</text>
        <text x="140" y="65" text-anchor="middle" font-size="11" fill="#6b7280">k₂ = 0.5</text>
        <line x1="40" y1="80" x2="200" y2="80" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="140" y="95" text-anchor="middle" font-size="11" fill="#3b82f6">Points (1,0.5), (2,1), ...</text>
        <text x="140" y="125" text-anchor="middle" font-size="11" fill="#6b7280">y₁/x₁ = y₂/x₂ = 0.5</text>
        <text x="140" y="145" text-anchor="middle" font-size="11" fill="#1f2937">Flatter slope than Relationship 1</text>
    </g>
</svg>`,
  },
  {
    slug: "scale-factor-and-proportions",
    title: "Scale Factor and Proportions",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#f9fafb"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#e5e7eb" stroke-width="1" rx="8"/>
    <g transform="translate(50, 100)">
        <rect x="0" y="0" width="520" height="160" fill="#dcfce7" stroke="#059669" stroke-width="2" rx="6"/>
        <text x="260" y="40" text-anchor="middle" font-size="14" font-weight="bold" fill="#166534">Scale Factor = 2</text>
        <text x="260" y="70" text-anchor="middle" font-size="12" fill="#6b7280">All dimensions double</text>
        <line x1="100" y1="85" x2="420" y2="85" stroke="#374151" stroke-width="1"/>
        <g transform="translate(130, 100)">
            <rect x="0" y="0" width="60" height="40" fill="#d1fae5" stroke="#059669" stroke-width="1"/>
            <text x="30" y="26" text-anchor="middle" font-size="10" fill="#065f46">Original (1x)</text>
        </g>
        <text x="220" y="126" text-anchor="middle" font-size="10" fill="#6b7280">→ Scale Factor →</text>
        <g transform="translate(300, 100)">
            <rect x="0" y="0" width="60" height="40" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
            <text x="30" y="26" text-anchor="middle" font-size="10" fill="#065f46">New (2x)</text>
        </g>
        <text x="260" y="155" text-anchor="middle" font-size="12" fill="#059669" font-weight="bold">Width × 2</text>
    </g>
    <g transform="translate(600, 100)">
        <rect x="0" y="0" width="140" height="160" fill="#f3f4f6" stroke="#374151" stroke-width="1" rx="6"/>
        <text x="70" y="30" text-anchor="middle" font-size="10" font-weight="bold" fill="#6b7280">In Proportions:</text>
        <text x="70" y="50" text-anchor="middle" font-size="9" fill="#6b7280">a/b = x/y (constant)</text>
        <text x="70" y="80" text-anchor="middle" font-size="9" fill="#6b7280">Speed = 2×</text>
        <text x="70" y="110" text-anchor="middle" font-size="9" fill="#6b7280">Time = original / 2</text>
        <text x="70" y="140" text-anchor="middle" font-size="9" fill="#6b7280">Distance = original × 2</text>
    </g>
</svg>`,
  },
  {
    slug: "slope-and-proportional-relationships",
    title: "Slope and Proportional Relationships",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#f9fafb"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#e5e7eb" stroke-width="1" rx="8"/>
    <g transform="translate(50, 100)">
        <rect x="0" y="0" width="600" height="190" fill="#fce7f3" stroke="#db2777" stroke-width="2" rx="6"/>
        <text x="300" y="35" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937">Slope in y = kx</text>
        <text x="300" y="60" text-anchor="middle" font-size="12" fill="#6b7280">For y = kx:</text>
        <line x1="80" y1="75" x2="520" y2="75" stroke="#374151" stroke-width="1"/>
        <text x="300" y="105" text-anchor="middle" font-size="12" fill="#6b7280">Slope = rise / run =</text>
        <text x="300" y="130" text-anchor="middle" font-size="24" fill="#db2777" font-weight="bold">k</text>
        <text x="330" y="135" font-size="12" fill="#db2777">= k</text>
    </g>
    <g transform="translate(500, 110)">
        <line x1="0" y1="10" x2="0" y2="120" stroke="#374151" stroke-width="1.5"/>
        <line x1="0" y1="120" x2="100" y2="120" stroke="#374151" stroke-width="1.5"/>
        <line x1="0" y1="120" x2="80" y2="40" stroke="#db2777" stroke-width="3"/>
        <circle cx="0" cy="120" r="4" fill="#1f2937"/>
        <circle cx="80" cy="40" r="4" fill="#1f2937"/>
        <text x="50" y="140" text-anchor="middle" font-size="12" fill="#db2777" font-weight="bold">k = 2</text>
    </g>
</svg>`,
  },
  {
    slug: "teaching-proportional-relationships",
    title: "Teaching Guide",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#fffbeb"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#fcd34d" stroke-width="1" rx="8"/>
    <text x="400" y="50" text-anchor="middle" font-size="16" font-weight="bold" fill="#92400e">Teaching How to Check Proportionality</text>
    <g transform="translate(80, 80)">
        <rect x="0" y="0" width="160" height="110" fill="#fef3c7" stroke="#f59e0b" stroke-width="1" rx="4"/>
        <text x="80" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#9a3412">Step 1: Graph → Table</text>
        <text x="80" y="50" text-anchor="middle" font-size="9" fill="#6b7280">Plot 5+ grid points</text>
        <text x="80" y="65" text-anchor="middle" font-size="9" fill="#6b7280">From graph data</text>
        <text x="80" y="85" text-anchor="middle" font-size="9" fill="#6b7280">Calculate y/x ratios</text>
    </g>
    <g transform="translate(270, 80)">
        <rect x="0" y="0" width="160" height="110" fill="#fef3c7" stroke="#f59e0b" stroke-width="1" rx="4"/>
        <text x="80" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#9a3412">Step 2: Check Ratios</text>
        <text x="80" y="50" text-anchor="middle" font-size="9" fill="#6b7280">y₁/x₁ ≈ y₂/x₂ ≈ ...</text>
        <text x="80" y="65" text-anchor="middle" font-size="9" fill="#6b7280">Same for all points</text>
        <text x="80" y="85" text-anchor="middle" font-size="9" fill="#6b7280">Constant ratio = k</text>
    </g>
    <g transform="translate(460, 80)">
        <rect x="0" y="0" width="160" height="110" fill="#fef3c7" stroke="#f59e0b" stroke-width="1" rx="4"/>
        <text x="80" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#9a3412">Step 3: Context → Equation</text>
        <text x="80" y="50" text-anchor="middle" font-size="9" fill="#6b7280">Find unit rate</text>
        <text x="80" y="65" text-anchor="middle" font-size="9" fill="#6b7280">Rate = k</text>
        <text x="80" y="85" text-anchor="middle" font-size="9" fill="#6b7280">Write y = kx</text>
    </g>
    <g transform="translate(80, 210)">
        <rect x="0" y="0" width="540" height="110" fill="#fff" stroke="#f59e0b" stroke-width="2" rx="4"/>
        <text x="270" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#9a3412">Red Flag Indicators</text>
        <text x="270" y="60" text-anchor="middle" font-size="10" fill="#6b7280">❌ Line doesn't pass through (0,0) → NOT proportional</text>
        <text x="270" y="80" text-anchor="middle" font-size="10" fill="#6b7280">❌ Y-intercept (b) ≠ 0 → NOT proportional</text>
        <text x="270" y="100" text-anchor="middle" font-size="10" fill="#6b7280">❌ Ratios change point to point → NOT proportional</text>
    </g>
</svg>`,
  },
  {
    slug: "proportional-relationships-test-prep",
    title: "Test Prep",
    svg: `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#f0fdf4"/>
    <rect x="20" y="20" width="760" height="360" fill="white" stroke="#bbf7d0" stroke-width="1" rx="8"/>
    <g transform="translate(50, 90)">
        <rect x="0" y="0" width="340" height="200" fill="#dcfce7" stroke="#22c55e" stroke-width="2" rx="6"/>
        <text x="170" y="35" text-anchor="middle" font-size="14" font-weight="bold" fill="#166534" text-decoration="underlined">Core Formulas</text>
        <text x="170" y="70" text-anchor="middle" font-size="14" fill="#166534" font-family="monospace">y = kx</text>
        <text x="170" y="100" text-anchor="middle" font-size="12" fill="#6b7280">The equation for proportional relationships</text>
        <line x1="60" y1="115" x2="280" y2="115" stroke="#374151" stroke-width="1"/>
        <text x="170" y="140" text-anchor="middle" font-size="14" fill="#166534" font-family="monospace">k = y ÷ x</text>
        <text x="170" y="165" text-anchor="middle" font-size="11" fill="#6b7280">Find k using any point (x,y)</text>
    </g>
    <g transform="translate(410, 90)">
        <rect x="0" y="0" width="340" height="200" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" rx="6"/>
        <text x="170" y="35" text-anchor="middle" font-size="14" font-weight="bold" fill="#1f2937" text-decoration="underlined">Checklist</text>
        <text x="170" y="65" text-anchor="middle" font-size="11" fill="#6b7280">1. Does graph pass through (0,0)?</text>
        <text x="170" y="85" text-anchor="middle" font-size="11" fill="#6b7280">2. Check y₁/x₁ = y₂/x₂ = k (constant)</text>
        <text x="170" y="105" text-anchor="middle" font-size="11" fill="#6b7280">3. Identify if b = 0</text>
        <line x1="60" y1="120" x2="280" y2="120" stroke="#374151" stroke-width="1"/>
        <text x="170" y="150" text-anchor="middle" font-size="11" fill="#6b7280">✓ Yes = Proportional (y = kx)</text>
        <text x="170" y="175" text-anchor="middle" font-size="11" fill="#dc2626">✗ No = Non-proportional</text>
    </g>
</svg>`,
  },
]

const OUTPUT_DIR = path.join(process.cwd(), "public", "images", "blog")

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

async function main() {
  ensureDir(OUTPUT_DIR)

  for (const article of ARTICLES) {
    try {
      const filePath = path.join(OUTPUT_DIR, `${article.slug}.svg`)
      fs.writeFileSync(filePath, article.svg)
      console.log(`✓ Created: ${article.slug}.svg`)
    } catch (error) {
      console.error(`✗ Failed for ${article.slug}:`, error)
    }
  }

  console.log(`\n✅ Generated ${ARTICLES.length} blog images in /public/images/blog/`)
}

main()