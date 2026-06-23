import { NextResponse } from "next/server"
import { sendWorksheetEmail, subscribeToNewsletter } from "@/lib/zeptomail"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, worksheetTitle } = body

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    const subscribeResult = await subscribeToNewsletter(email, email.split("@")[0])

    if (worksheetTitle) {
      const sendResult = await sendWorksheetEmail({
        email,
        name: email.split("@")[0],
        worksheetTitle,
        worksheetUrl: `https://proportionalrelationship.com/worksheets/${worksheetTitle.toLowerCase().replace(/\s+/g, "-")}`,
      })

      if (!sendResult.success) {
        console.warn("Worksheet email failed:", sendResult.error)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Newsletter subscribe error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
