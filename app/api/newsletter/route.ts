import { google } from 'googleapis'
import { NextResponse } from 'next/server'

function buildEmailRaw(from: string, to: string, subscriberEmail: string): string {
  const subject = `Nova inscrição na newsletter — ${subscriberEmail}`

  const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8" /></head>
<body style="font-family: Arial, sans-serif; background: #f4f6f9; padding: 32px;">
  <div style="max-width: 560px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
    <div style="background: linear-gradient(135deg, #6b21a8, #7c3aed, #06b6d4); padding: 24px 32px;">
      <h1 style="color: #fff; margin: 0; font-size: 20px;">Nova inscrição — Newsletter Mundo365</h1>
    </div>
    <div style="padding: 32px;">
      <p style="color: #374151; font-size: 15px; margin: 0 0 16px;">Um novo visitante se inscreveu na newsletter do site:</p>
      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px 20px;">
        <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">${subscriberEmail}</p>
      </div>
    </div>
    <div style="padding: 16px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb;">
      <p style="margin: 0; color: #9ca3af; font-size: 12px;">Enviado pelo formulário do site mundo365.com.br</p>
    </div>
  </div>
</body>
</html>`

  const messageParts = [
    `From: Mundo365 Site <${from}>`,
    `To: ${to}`,
    `Subject: =?UTF-8?B?${Buffer.from(subject).toString('base64')}?=`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    '',
    html,
  ]

  return Buffer.from(messageParts.join('\r\n'))
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email?.trim()) {
      return NextResponse.json({ error: 'E-mail é obrigatório.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'E-mail inválido.' }, { status: 400 })
    }

    const oauth2Client = new google.auth.OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground',
    )

    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    })

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client })

    const raw = buildEmailRaw(
      process.env.GMAIL_FROM!,
      process.env.GMAIL_TO!,
      email.trim(),
    )

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw },
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[newsletter/route] Gmail API error:', err)
    return NextResponse.json({ error: 'Erro ao inscrever. Tente novamente.' }, { status: 500 })
  }
}
