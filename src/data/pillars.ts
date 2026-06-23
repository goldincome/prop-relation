import type { PillarDefinition } from "@/types/tools"

export const pillars: PillarDefinition[] = [
  {
    slug: "proportional-relationships",
    title: "Proportional Relationships: Complete Student and Teacher Guide",
    description: "Learn proportional relationships with graphs, tables, equations, examples, calculators, and classroom resources. Everything you need for 7th-grade math mastery.",
    metaTitle: "Proportional Relationships: Complete Student and Teacher Guide",
    metaDescription: "Learn proportional relationships with graphs, tables, equations, examples, calculators, and classroom resources.",
    keywords: ["proportional relationships", "proportional relationship guide", "7th grade proportional relationships"],
    sections: [
      {
        heading: "Introduction to Proportional Relationships",
        content: "A proportional relationship exists between two quantities when they always change at the same rate. When one doubles, the other doubles. When one triples, the other triples. The defining characteristic is a constant ratio between the two quantities, which we call the constant of proportionality.\n\nThe mathematical foundation of every proportional relationship is the equation y = kx, where k is the constant of proportionality. This simple equation is the most powerful tool you will use because it connects tables, graphs, equations, and word problems into a single framework.\n\nProportional relationships first appear in 6th grade with ratio reasoning, become the central focus of 7th grade, and serve as the foundation for linear functions, slope, and direct variation in 8th grade and beyond. Understanding them deeply now prevents confusion later.",
        subsections: [
          {
            heading: "What Makes a Relationship Proportional?",
            content: "Three conditions must be met for a relationship to be proportional:\n\n1. The ratio y/x must be the same for every pair of values.\n2. The graph must be a straight line.\n3. The line must pass through the origin (0,0).\n\nAll three conditions come from the same equation: y = kx. If an equation can be written in this form, it passes all three tests automatically. If there is any added constant like y = kx + b, it fails.\n\nMany students mistakenly think that a straight line is enough. In fact, the line must go through the origin. A line like y = 3x + 2 is straight but not proportional because when x = 0, y = 2 instead of 0."
          },
          {
            heading: "The Constant of Proportionality (k)",
            content: "The constant of proportionality k is the fixed number that connects the two quantities. It tells you how much y changes when x changes by 1.\n\nIn real-world terms, k is a rate: miles per hour, dollars per pound, students per teacher. Every time you say per you are describing a constant of proportionality.\n\nTo find k from a table: divide y by x for any row where x does not equal 0.\nTo find k from a graph: pick any point on the line (where x does not equal 0) and divide y by x.\nTo find k from an equation: k is the coefficient of x in y = kx.\nTo find k from a word problem: identify the rate as the amount of y per one unit of x."
          }
        ]
      },
      {
        heading: "Identifying Proportional Relationships in Tables",
        content: "A table is often the first place students encounter proportional relationships. The method is straightforward: divide y by x for every row. If every division gives the same result, the relationship is proportional.\n\nHere is a proportional table: x=1,y=3; x=2,y=6; x=3,y=9; x=4,y=12. Dividing each y by x gives 3 every time. The constant of proportionality is 3, and the equation is y = 3x.\n\nHere is a non-proportional table: x=1,y=4; x=2,y=7; x=3,y=10; x=4,y=13. Dividing gives 4, 3.5, 3.33, and 3.25. The ratios are different. This table represents y = 3x + 1, which is linear but not proportional.\n\nThe most common mistake when checking tables is dividing x by y instead of y by x, which produces a different number and can make a proportional relationship look non-proportional. Always divide y by x.",
        subsections: [
          {
            heading: "What About the Zero Row?",
            content: "Many tables include the row x=0, y=0 to represent the origin. This row cannot be used to find k because 0/0 is undefined. However, its presence is a positive sign: if x=0 and y is not 0, the relationship cannot be proportional, and you can stop checking immediately.\n\nSome tables omit x=0 entirely. The ratio method still works as long as you have at least two non-zero rows. Always check at least two rows to confirm k is consistent, because a single row could be coincidental."
          }
        ]
      },
      {
        heading: "Identifying Proportional Relationships in Graphs",
        content: "Graphs provide a visual test for proportionality. Two checks are needed: is the line straight, and does it pass through the origin?\n\nA straight line indicates a constant rate of change. The line goes up or down by the same amount for each step to the right. But straight alone is not enough. The line must also pass through (0,0). If the line starts at (0,2) or (0,-1), it is not proportional, even though it looks nearly identical to a proportional line with the same slope.\n\nThe point test works when you only have a graph: pick two points on the line where x does not equal 0, and divide y by x for each. If both divisions give the same number, the line is proportional. This test confirms both conditions simultaneously, because if the line did not pass through the origin, the ratios would differ.",
        subsections: [
          {
            heading: "Visual Comparison: Proportional vs Non-Proportional",
            content: "Imagine two lines on a coordinate plane. One goes through (0,0) and (4,8). The other goes through (0,2) and (4,10). Both have slope 2. Both are straight. But the first is proportional (k=2) and the second is not, because of that 2-unit shift upward.\n\nThe first line represents y = 2x. The second represents y = 2x + 2. Visually, they are parallel, separated by 2 units. Only the one through the origin is proportional. This is why the origin check matters and why students must learn to look for it on every graph question."
          },
          {
            heading: "Non-Linear Graphs",
            content: "A curved line that passes through the origin is also not proportional. For example, y = x squared passes through (0,0) but is curved. The ratio test reveals the problem: the point (1,1) gives a ratio of 1, while (2,4) gives a ratio of 2. The ratios are not equal, so the relationship is not proportional. A curve cannot represent a proportional relationship because the rate of change is not constant."
          }
        ]
      },
      {
        heading: "Identifying Proportional Relationships in Equations",
        content: "The equation test is the fastest and most definitive. An equation represents a proportional relationship if and only if it can be written in the form y = kx, with no constant term added or subtracted.\n\ny = 4x — proportional, k = 4.\ny = 2/3x — proportional, k = 2/3.\ny = -5x — proportional, k = -5.\ny = x — proportional, k = 1.\ny = 3x + 1 — not proportional because of the +1.\ny = 7 — not proportional because y does not depend on x.\n\nSome students think y = x is not an equation. It is, and k = 1. Others think k must be positive. It does not; y = -4x is proportional, with negative k meaning y decreases as x increases."
      },
      {
        heading: "Real-World Examples of Proportional Relationships",
        content: "Proportional relationships are everywhere. Understanding them in real contexts makes the math class concepts concrete.\n\nDistance and time at constant speed: If you drive 60 miles per hour, the relationship is d = 60t. Double the time, double the distance. The constant 60 is both the unit rate and k.\n\nCost and quantity at unit price: If apples cost $0.50 each, the relationship is c = 0.50a. Buying 10 apples costs $5.00. The constant 0.50 is k.\n\nPay and hours worked: If you earn $15 per hour, the relationship is p = 15h. Working 8 hours earns $120. The constant 15 is k.\n\nRecipe scaling: If a recipe calls for 3 cups of flour for every 2 batches, the relationship is f = 1.5b. Scaling to 4 batches requires 6 cups.\n\nNot every real-world relationship is proportional. A pizza delivery fee of $10 plus $2 per topping is not proportional because of the base fee. When x=0 (no toppings), the cost is $10, not $0."
      },
      {
        heading: "Comparing Proportional Relationships",
        content: "A common test question asks which of two proportional relationships has a larger constant of proportionality. The method is simple: find k for each and compare.\n\nGiven a table and a graph, find k for the table by dividing y by x. Find k for the graph by picking a point and dividing y by x. The larger k corresponds to the steeper line and the faster rate.\n\nComparing two equations is the easiest: y = 8x has k = 8, y = 3x has k = 3. The first is steeper and has a larger constant.\n\nIn real-world terms, comparing k means comparing rates. A car with k = 70 mph is faster than a car with k = 50 mph. A job paying k = $20/hour pays more than one paying k = $15/hour."
      },
      {
        heading: "Common Mistakes to Avoid",
        content: "Mistake 1: Thinking any straight line is proportional. The line must pass through the origin.\n\nMistake 2: Dividing x by y instead of y by x. This gives the reciprocal of k and causes errors.\n\nMistake 3: Forgetting that k can be a fraction or decimal. k = 0.25 is valid.\n\nMistake 4: Guessing instead of computing ratios. Always divide to confirm.\n\nMistake 5: Thinking proportional relationships only apply to math class. They describe real rates, prices, speeds, and efficiencies."
      },
      {
        heading: "Teaching Proportional Relationships",
        content: "Teachers should introduce proportional relationships through real-world contexts like shopping and speed before moving to abstract tables and graphs. The concrete-to-abstract progression helps students internalize the meaning of k before they memorize the formula.\n\nStart with simple unit rate problems: which bag of chips is a better deal? This establishes the concept of comparing by finding a per-one-unit value. Then show how the same math appears in tables by having students organize prices by quantity.\n\nNext, introduce graphs by plotting the table values and drawing the line through the origin. Students should see that the line always passes through (0,0) because zero items cost zero dollars.\n\nFinally, introduce the equation y = kx as the unified representation that connects all the others. By this point, the equation should feel like a natural summary rather than a new concept."
      }
    ],
    faq: [
      { question: "What is a proportional relationship in math?", answer: "A relationship where two quantities change at the same rate, always maintaining a constant ratio. Written as y = kx." },
      { question: "How do you know if a relationship is proportional?", answer: "Check that y/x is always the same (table), the graph is a straight line through the origin, and the equation is y = kx." },
      { question: "What is the constant of proportionality?", answer: "The fixed number k in y = kx. It tells you how much y changes per 1 unit of x." },
      { question: "Can a proportional relationship have a negative constant?", answer: "Yes. Negative k means y decreases as x increases. The line goes downward through the origin." },
      { question: "Is every linear relationship proportional?", answer: "No. Only linear relationships that pass through the origin are proportional." },
      { question: "What grade level teaches proportional relationships?", answer: "6th grade introduces ratios, 7th grade covers proportional relationships in depth, and 8th grade extends to slope and linear functions." },
      { question: "What is the difference between proportional and nonproportional?", answer: "Proportional: y = kx (through origin). Nonproportional: y = kx + b (shifted)." },
    ],
    relatedTools: ["/calculators/proportional-relationship-calculator", "/checkers/is-this-graph-proportional", "/checkers/proportional-table-checker", "/checkers/proportional-equation-checker"],
    relatedArticles: ["/blog/what-is-a-proportional-relationship", "/blog/constant-of-proportionality-explained", "/blog/common-mistakes-in-proportional-relationships", "/blog/proportional-vs-nonproportional-relationships"],
  },
  {
    slug: "unit-rate",
    title: "Unit Rate: Complete Guide with Examples and Calculator",
    description: "Learn unit rate with step-by-step examples, comparison problems, real-world applications, and interactive calculator tools.",
    metaTitle: "Unit Rate: Complete Guide with Examples and Calculator",
    metaDescription: "Learn unit rate with step-by-step examples, comparison problems, real-world applications, and interactive calculator tools.",
    keywords: ["unit rate", "unit price", "rate per unit"],
    sections: [
      {
        heading: "What Is a Unit Rate?",
        content: "A unit rate is a rate where the second quantity is 1. It tells you how much of one thing there is per one unit of another thing. Unit rates appear everywhere: miles per hour, dollars per pound, words per minute, price per ounce.\n\nThe difference between a rate and a unit rate is simple. A rate compares any two quantities with different units: 300 miles per 6 hours. A unit rate simplifies this to a per-one-unit comparison: 50 miles per 1 hour.\n\nUnit rates are the foundation of proportional reasoning because the unit rate is the constant of proportionality k in y = kx. When you understand unit rates, you understand proportional relationships."
      },
      {
        heading: "How to Find a Unit Rate",
        content: "Finding a unit rate requires one operation: division.\n\nUnit rate = first quantity divided by second quantity\n\nIf a car travels 240 miles in 4 hours: 240 divided by 4 = 60 miles per hour.\nIf a 12-pack of soda costs $6: 6 divided by 12 = $0.50 per can.\nIf you read 90 pages in 3 days: 90 divided by 3 = 30 pages per day.\n\nThe key is identifying which number goes first. The unit rate always expresses how much of the first quantity there is per one unit of the second quantity. Miles divided by hours gives miles per hour. Cost divided by quantity gives cost per unit."
      },
      {
        heading: "Unit Rate vs Ratio",
        content: "A ratio compares two numbers using division, like 3:4 or 5/8. Ratios can compare any two numbers, regardless of units. A rate is a specific type of ratio where the two quantities have different units: miles to hours, dollars to pounds, students to teachers.\n\nA unit rate is a rate where the second quantity is exactly 1. Every unit rate is a rate, but not every rate is a unit rate. Every rate can be converted to a unit rate by dividing.\n\nThe confusion between ratio and unit rate causes many errors. When comparing prices at the grocery store, you need unit rates (price per ounce), not simple ratios."
      },
      {
        heading: "Real-World Applications of Unit Rates",
        content: "Shopping: The most common use of unit rates is finding the best deal. When a 16-ounce jar costs $2.40 and a 24-ounce jar costs $3.60, both have a unit price of $0.15 per ounce.\n\nSpeed: Driving 150 miles in 3 hours gives a unit rate of 50 miles per hour. Comparing speeds requires converting to miles per hour, which is a unit rate.\n\nCooking: A recipe that uses 2 cups of flour for 12 cookies uses 1/6 cup per cookie. Scaling the recipe up requires multiplying the unit rate by the desired number of cookies.\n\nFuel efficiency: A car that travels 300 miles on 10 gallons of gas gets 30 miles per gallon.\n\nPay: Earning $540 for 40 hours of work is $13.50 per hour. Unit rate is the standard way to compare job offers."
      },
      {
        heading: "Unit Rate in Math Class",
        content: "Unit rate problems appear in 6th-grade ratios and proportions units and continue through 7th-grade proportional relationships. The most common problem types are:\n\nFinding the unit rate: given total and quantity, find per-one-unit value.\nComparing unit rates: which is the better deal, faster speed, or more efficient rate?\nApplying unit rates: given the unit rate, find the total for any quantity.\nUsing unit rates to find the constant of proportionality: k is the unit rate.\nConverting rates: changing from one unit to another.\n\nThe unit rate is also the slope of the line when the relationship is proportional. This connection is central to 8th-grade algebra."
      }
    ],
    faq: [
      { question: "What is a unit rate?", answer: "A rate where the second quantity is 1, like 50 miles per hour or $0.50 per ounce." },
      { question: "How do you calculate unit rate?", answer: "Divide the first quantity by the second quantity." },
      { question: "Is unit rate the same as constant of proportionality?", answer: "Yes. In a proportional relationship, the unit rate equals k." },
      { question: "What is the difference between rate and unit rate?", answer: "A rate can have any number as the second quantity. A unit rate always has 1." },
      { question: "Why do we use unit rates?", answer: "To compare different-sized quantities fairly, like finding the best deal at the store." },
    ],
    relatedTools: ["/calculators/unit-rate-calculator", "/calculators/ratio-simplifier", "/calculators/equivalent-ratios-calculator"],
    relatedArticles: ["/blog/unit-rate-vs-ratio", "/blog/unit-rate-real-life-examples", "/blog/what-is-a-proportional-relationship"],
  },
  {
    slug: "graphs-and-tables",
    title: "Proportional Relationships in Graphs and Tables",
    description: "Understand how graphs and tables show proportional relationships, how to test them, and how to find the constant of proportionality from each representation.",
    metaTitle: "Proportional Relationships in Graphs and Tables",
    metaDescription: "Understand how graphs and tables show proportional relationships and how to test them fast.",
    keywords: ["proportional relationships graphs", "proportional relationships tables", "graph proportional", "table proportional"],
    sections: [
      {
        heading: "Proportional Relationships in Tables",
        content: "Tables are the most structured way to examine proportional relationships. Each row gives an x-y pair, and the question is whether y is always k times x.\n\nThe test is constant: divide y by x for every row. If the quotient is always the same number, the relationship is proportional and that number is k.\n\nFor example, consider this table: (1, 2.5), (2, 5), (4, 10), (6, 15). Dividing each y by x gives 2.5 every time. The equation is y = 2.5x. This table is proportional.\n\nConsider a different table: (1, 5), (2, 8), (3, 11), (4, 14). The ratios are 5, 4, 3.67, and 3.5. Different each time. This table is not proportional, and the equation would be y = 3x + 2.\n\nThe more rows you check, the more confident you can be. Two rows is the minimum, but three or more rules out coincidence."
      },
      {
        heading: "Proportional Relationships in Graphs",
        content: "Graphs provide an immediate visual check for proportionality. Two conditions must hold: the graph must be a straight line, and the line must pass through the origin (0,0).\n\nA straight line indicates the relationship has a constant rate of change. Each step to the right produces the same change upward or downward. This is the graphical meaning of k: the slope.\n\nThe origin condition is often called the zero-zero rule. In a proportional relationship, when x = 0, y must equal 0. If there is any vertical shift, the relationship is not proportional even though it is linear.\n\nTo check a graph numerically, pick any two points on the line where x is not zero. Divide y by x for each. If both results match, the graph is proportional and that result is k."
      },
      {
        heading: "Connecting Tables and Graphs",
        content: "A table and its corresponding graph should tell the same story. If a table shows a constant ratio y/x, the plotted points will form a straight line through the origin. If the ratios change, the points will not line up perfectly or will form a line that misses the origin.\n\nThe connection works in both directions. Given a proportional graph, you can create a table by reading coordinates of points on the line and verifying they have the same y/x ratio. Given a proportional table, you can plot the points and confirm they form a straight line through the origin.\n\nThis bidirectional relationship is tested frequently. A typical question gives a table and an empty coordinate plane and asks students to plot the points and determine if the relationship is proportional."
      },
      {
        heading: "The Origin Rule in Detail",
        content: "The origin rule is the single most tested concept in proportional relationships. Many proportional relationship problems are designed specifically to test whether students remember that the line must go through (0,0).\n\nWhy does the origin rule exist? Because the equation y = kx forces y to be 0 when x is 0. Substituting x = 0 gives y = k(0) = 0. If the equation has any constant term, like y = kx + b, then when x = 0, y = b, not 0.\n\nIn real-world terms: if you work 0 hours, you earn $0. If you drive 0 miles, you use 0 gallons of gas. If you buy 0 apples, you pay $0. A proportional relationship is one where having none of x gives none of y.\n\nCommon trap questions include graphs that are almost proportional but shifted by a small amount, like y = 2x + 0.5. The line looks nearly identical to y = 2x but fails the origin test."
      }
    ],
    faq: [
      { question: "How do I check a table for proportionality?", answer: "Divide y by x for each row. If the quotient is always the same, it is proportional." },
      { question: "How do I check a graph for proportionality?", answer: "Check that it is a straight line passing through (0,0)." },
      { question: "What does a proportional graph look like?", answer: "A straight line through the origin, going up or down at a constant angle." },
      { question: "Can a table be proportional if it does not start at 0?", answer: "No. If x=0 has y does not equal 0, the relationship is not proportional." },
      { question: "What is the origin rule?", answer: "In a proportional relationship, when x = 0, y must equal 0." },
    ],
    relatedTools: ["/checkers/is-this-graph-proportional", "/checkers/proportional-table-checker", "/calculators/proportional-relationship-calculator"],
    relatedArticles: ["/blog/how-to-tell-if-a-table-is-proportional", "/blog/how-to-tell-if-a-graph-is-proportional", "/blog/proportional-vs-nonproportional-relationships"],
  },
  {
    slug: "constant-of-proportionality",
    title: "Constant of Proportionality Explained Simply",
    description: "Find and interpret the constant of proportionality from graphs, tables, equations, and word problems. Complete guide with examples, practice, and calculator.",
    metaTitle: "Constant of Proportionality Explained Simply",
    metaDescription: "Find and interpret the constant of proportionality from graphs, tables, equations, and word problems.",
    keywords: ["constant of proportionality", "find k", "proportionality constant", "k in y=kx"],
    sections: [
      {
        heading: "What Is the Constant of Proportionality?",
        content: "The constant of proportionality, denoted k, is the fixed number that relates two variables in a proportional relationship. It appears in the equation y = kx and has a simple meaning: for every 1 unit increase in x, y increases by k units.\n\nThe constant k is also called the unit rate, the scale factor, and the slope when the line passes through the origin. All of these terms describe the same number but in different contexts.\n\nEvery proportional relationship has exactly one k. If you find two different values for k in the same relationship, either you made an error or the relationship is not proportional."
      },
      {
        heading: "How to Find k from Different Representations",
        content: "There are four common ways to find the constant of proportionality, and every 7th-grade student needs to master all four.\n\nFrom a table: Pick any row where x is not zero. Divide y by x. Verify with a second row. Example: row (3, 12) gives k = 12 / 3 = 4.\n\nFrom a graph: Pick any point on the line where x is not zero. Divide the y-coordinate by the x-coordinate. Example: point (5, 20) gives k = 20 / 5 = 4.\n\nFrom an equation: If the equation is y = kx, read k directly as the coefficient of x. Example: y = 7x means k = 7.\n\nFrom a word problem: Identify the unit rate. Example: A car travels at 65 miles per hour means k = 65.\n\nEach method should give the same k for the same relationship. If they disagree, check your work."
      },
      {
        heading: "What k Means in Context",
        content: "The constant of proportionality is never just a number. It has units that tell you what it represents. Understanding the units is the key to interpreting k correctly.\n\nIf a car travels at 60 miles per hour, k = 60 and the unit is miles per hour. The equation is d = 60t.\n\nIf apples cost $0.50 each, k = 0.50 and the unit is dollars per apple. The equation is c = 0.50a.\n\nIf a recipe uses 3 cups of flour per batch, k = 3 and the unit is cups per batch.\n\nThe units of k are always the units of y divided by the units of x. Checking units is a good way to verify you have found k correctly."
      },
      {
        heading: "Graphical Meaning of k",
        content: "On a coordinate plane, k is the slope or steepness of the line. A larger k means a steeper line. A smaller k means a shallower line. A negative k means the line slopes downward.\n\nk = 1 means the line goes up at a 45-degree angle. For every 1 unit right, 1 unit up.\nk = 2 means the line is twice as steep. For every 1 unit right, 2 units up.\nk = 0.5 means the line is half as steep. For every 1 unit right, 0.5 units up.\nk = -3 means the line goes down steeply. For every 1 unit right, 3 units down.\n\nThis visual meaning is tested when comparing two proportional relationships on the same graph. The line with the larger k is steeper and represents a faster rate."
      },
      {
        heading: "Finding k When the Relationship Is Not Obvious",
        content: "Some problems hide k in more complex language. A recipe says for every 3 cups of flour, add 2 cups of sugar. The ratio is 3:2, so k = 2/3 cups of sugar per cup of flour. The equation is s = (2/3)f.\n\nSome problems give a situation where the x and y variables are not labeled. The key is identifying which variable depends on which. The dependent variable y is the one that changes in response to the independent variable x.\n\nIn the cost depends on the number of items, cost is y and items is x. In distance depends on time, distance is y and time is x. Once the variables are sorted, k = y / x."
      }
    ],
    faq: [
      { question: "What is the constant of proportionality?", answer: "The fixed number k in y = kx that relates y to x. It tells you the rate of change." },
      { question: "How do you find the constant of proportionality?", answer: "Divide y by x for any pair of values from a table, graph, or word problem." },
      { question: "Is the constant of proportionality the same as slope?", answer: "Yes, when the line passes through the origin. Both equal k." },
      { question: "Can the constant of proportionality be a fraction?", answer: "Yes. k can be any real number, whole number, fraction, or decimal." },
      { question: "What does k represent in real life?", answer: "A rate: miles per hour, dollars per pound, students per teacher." },
    ],
    relatedTools: ["/calculators/constant-of-proportionality-calculator", "/calculators/proportional-relationship-calculator", "/calculators/unit-rate-calculator"],
    relatedArticles: ["/blog/constant-of-proportionality-explained", "/blog/y-equals-kx-explained", "/blog/scale-factor-and-proportions"],
  },
]

export function getPillars(): PillarDefinition[] {
  return pillars
}

export function getPillar(slug: string): PillarDefinition | undefined {
  return pillars.find((p) => p.slug === slug)
}

export function getPillarSlugs(): string[] {
  return pillars.map((p) => p.slug)
}
