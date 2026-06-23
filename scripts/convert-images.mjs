import fs from "fs"
import path from "path"
import sharp from "sharp"

const INPUT_DIR = path.join(process.cwd(), "public", "images", "blog")
const OUTPUT_DIR = INPUT_DIR
const LOGO_INPUT = path.join(process.cwd(), "public", "images", "logo.svg")

async function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

async function svgToWebp(inputPath: string, outputPath: string) {
  const image = sharp(inputPath)
  const metadata = await image.metadata()

  const webpOptions: { width?: number; height?: number } = {}

  // Maintain aspect ratio but enforce max 1200px width
  if (metadata.width && metadata.width > 1200) {
    const ratio = 1200 / metadata.width
    webpOptions.width = 1200
    webpOptions.height = Math.round(metadata.height * ratio)
  } else {
    webpOptions.width = metadata.width
    webpOptions.height = metadata.height
  }

  const webp = image.webp(webpOptions)
  await webp.toFile(outputPath)
}

async function convertAllBlogImages() {
  ensureDir(OUTPUT_DIR)

  const files = fs.readdirSync(INPUT_DIR)
  const svgFiles = files.filter((file) => file.endsWith(".svg"))

  console.log(`Converting ${svgFiles.length} blog images to WebP...`)

  for (const svgFile of svgFiles) {
    const svgPath = path.join(INPUT_DIR, svgFile)
    const webpPath = svgPath.replace(".svg", ".webp")

    if (fs.existsSync(webpPath)) {
      console.log(`⚠️  Skipped (already exists): ${svgFile}`)
      continue
    }

    try {
      await svgToWebp(svgPath, webpPath)
      console.log(`✓ Converted: ${svgFile} → ${svgFile.replace(".svg", ".webp")}`)
    } catch (error) {
      console.error(`✗ Failed to convert ${svgFile}:`, error)
    }
  }
}

async function generateFavicon() {
  if (!fs.existsSync(LOGO_INPUT)) {
    console.log("⚠️  Logo SVG not found, skipping favicon")
    return
  }

  const faviconDir = path.join(process.cwd(), "public")
  ensureDir(faviconDir)

  // Generate 32x32 and 16x16 favicons
  await sharp(LOGO_INPUT)
    .resize(32, 32)
    .toFile(path.join(faviconDir, "favicon.ico"))

  await sharp(LOGO_INPUT)
    .resize(16, 16)
    .toFile(path.join(faviconDir, "favicon-16x16.png"))

  await sharp(LOGO_INPUT)
    .resize(32, 32)
    .toFile(path.join(faviconDir, "favicon-32x32.png"))

  console.log("✓ Generated favicon.ico (32x32), favicon-16x16.png, favicon-32x32.png")
}

async function main() {
  console.log("🎨 Converting blog images and generating favicon\n")

  await convertAllBlogImages()
  await generateFavicon()

  console.log("\n✅ Done!")
}

main().catch(console.error)