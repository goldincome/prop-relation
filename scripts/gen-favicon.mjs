import sharp from "sharp"
import fs from "fs"
import path from "path"

const ICON_SVG = path.join(process.cwd(), "src", "app", "icon.svg")

async function generateFavicon() {
  console.log("Generating favicon...")

  const { data, info } = await sharp(ICON_SVG)
    .resize(32, 32)
    .raw()
    .toBuffer({ resolveWithObject: true })

  const w = info.width
  const h = info.height

  const xorSize = w * h * 4
  const andRowSize = Math.floor((w + 31) / 32) * 4
  const andMaskSize = andRowSize * h
  const headerSize = 40
  const bmpSize = headerSize + xorSize + andMaskSize

  const bmp = Buffer.alloc(bmpSize)

  // BITMAPINFOHEADER
  bmp.writeUInt32LE(headerSize, 0)
  bmp.writeInt32LE(w, 4)
  bmp.writeInt32LE(h * 2, 8)      // double height = XOR + AND mask
  bmp.writeUInt16LE(1, 12)
  bmp.writeUInt16LE(32, 14)
  bmp.writeUInt32LE(0, 16)
  bmp.writeUInt32LE(xorSize, 20)
  bmp.writeUInt32LE(2835, 24)
  bmp.writeUInt32LE(2835, 28)
  bmp.writeUInt32LE(0, 32)
  bmp.writeUInt32LE(0, 36)

  // XOR bitmap: BGRA, bottom-up
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const srcIdx = (y * w + x) * 4
      const dstIdx = headerSize + ((h - 1 - y) * w + x) * 4
      bmp[dstIdx] = data[srcIdx + 2]      // B
      bmp[dstIdx + 1] = data[srcIdx + 1]  // G
      bmp[dstIdx + 2] = data[srcIdx]      // R
      bmp[dstIdx + 3] = data[srcIdx + 3]  // A
    }
  }

  // AND mask at offset headerSize + xorSize, already zeroed from Buffer.alloc

  // ICO header
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(1, 4)

  // ICO entry
  const entry = Buffer.alloc(16)
  entry.writeUInt8(w === 256 ? 0 : w, 0)
  entry.writeUInt8(h === 256 ? 0 : h, 1)
  entry.writeUInt8(0, 2)
  entry.writeUInt8(0, 3)
  entry.writeUInt16LE(1, 4)
  entry.writeUInt16LE(32, 6)
  entry.writeUInt32LE(bmpSize, 8)
  entry.writeUInt32LE(22, 12)

  const ico = Buffer.concat([header, entry, bmp])
  fs.writeFileSync(path.join(process.cwd(), "public", "favicon.ico"), ico)

  // Apple touch icon (180x180)
  const appleIcon = await sharp(ICON_SVG).resize(180, 180).png().toBuffer()
  fs.writeFileSync(path.join(process.cwd(), "public", "apple-icon.png"), appleIcon)

  // PWA icons
  const icon192 = await sharp(ICON_SVG).resize(192, 192).png().toBuffer()
  fs.writeFileSync(path.join(process.cwd(), "public", "icon192.png"), icon192)

  console.log("✓ favicon.ico (32x32)")
  console.log("✓ apple-icon.png (180x180)")
  console.log("✓ icon192.png (192x192)")
}

generateFavicon().catch(console.error)