const ZEPTOMAIL_URL = "https://api.zeptomail.com/v1.1/email/template"

interface SendWorksheetParams {
  email: string
  name: string
  worksheetTitle: string
  worksheetUrl: string
}

export async function sendWorksheetEmail({
  email,
  name,
  worksheetTitle,
  worksheetUrl,
}: SendWorksheetParams): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.ZEPTOMAIL_API_KEY

  if (!apiKey) {
    console.warn("ZEPTOMAIL_API_KEY not set — skipping email send")
    return { success: false, error: "API key not configured" }
  }

  try {
    const response = await fetch(ZEPTOMAIL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Zoho-enczapikey ${apiKey}`,
      },
      body: JSON.stringify({
        mail_template_key: "worksheet_delivery",
        from: {
          address: "hello@proportionalrelationship.com",
          name: "Proportional Relationship",
        },
        to: [
          {
            email_address: {
              address: email,
              name: name,
            },
          },
        ],
        merge_info: {
          name,
          worksheet_title: worksheetTitle,
          worksheet_url: worksheetUrl,
        },
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("ZeptoMail error:", errorData)
      return { success: false, error: errorData }
    }

    return { success: true }
  } catch (error) {
    console.error("ZeptoMail send failed:", error)
    return { success: false, error: String(error) }
  }
}

export async function subscribeToNewsletter(
  email: string,
  name: string
): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.ZEPTOMAIL_API_KEY

  if (!apiKey) {
    console.warn("ZEPTOMAIL_API_KEY not set — skipping subscribe")
    return { success: false, error: "API key not configured" }
  }

  try {
    const response = await fetch(
      "https://api.zeptomail.com/v1.1/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Zoho-enczapikey ${apiKey}`,
        },
        body: JSON.stringify({
          contact: {
            email: email,
            name: name || "",
          },
          list: {
            list_key: "newsletter",
          },
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.text()
      return { success: false, error: errorData }
    }

    return { success: true }
  } catch (error) {
    console.error("ZeptoMail subscribe failed:", error)
    return { success: false, error: String(error) }
  }
}
