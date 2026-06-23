import sharp from "sharp"
import fs from "fs"
import path from "path"

const BLOG_DIR = path.join(process.cwd(), "public", "images", "blog")

async function main() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".svg"))

  console.log(`Converting ${files.length} SVGs to WebP...`)

  for (const file of files) {
    const inputPath = path.join(BLOG_DIR, file)
    const outputPath = inputPath.replace(".svg", ".webp")

    if (fs.existsSync(outputPath)) {
      console.log(`  Skipped ${file} (already exists)`)
      continue
    }

    const svgBuffer = fs.readFileSync(inputPath)
    const webpBuffer = await sharp(svgBuffer)
      .resize(1200)
      .webp({ quality: 90 })
      .toBuffer()
    fs.writeFileSync(outputPath, webpBuffer)
    console.log(`  ✓ ${file} → ${file.replace(".svg", ".webp")}`)
  }

  console.log("\nDone!")
}

main().catch(console.error)