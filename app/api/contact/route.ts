import { google } from 'googleapis'
import { NextResponse } from 'next/server'

function buildEmailRaw(from: string, to: string, nome: string, telefone: string, email: string, mensagem: string): string {
  const subject = `Novo contato pelo site — ${nome}`

  const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8" /></head>
<body style="font-family: Arial, sans-serif; background: #f4f6f9; padding: 32px;">
  <div style="max-width: 560px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
    <div style="background: linear-gradient(135deg, #06b6d4, #2563eb); padding: 24px 32px;">
      <h1 style="color: #fff; margin: 0; font-size: 20px;">Novo contato — Mundo365</h1>
    </div>
    <div style="padding: 32px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 110px;">Nome</td>
          <td style="padding: 10px 0; color: #111827; font-weight: 600;">${nome}</td>
        </tr>
        <tr style="border-top: 1px solid #f3f4f6;">
          <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Telefone</td>
          <td style="padding: 10px 0; color: #111827; font-weight: 600;">${telefone}</td>
        </tr>
        <tr style="border-top: 1px solid #f3f4f6;">
          <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">E-mail</td>
          <td style="padding: 10px 0; color: #111827; font-weight: 600;">${email}</td>
        </tr>
        <tr style="border-top: 1px solid #f3f4f6;">
          <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Mensagem</td>
          <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${mensagem}</td>
        </tr>
      </table>
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
    `Reply-To: ${email}`,
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
    const { nome, telefone, email, mensagem } = await req.json()

    if (!nome?.trim() || !telefone?.trim() || !email?.trim() || !mensagem?.trim()) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 })
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
      nome.trim(),
      telefone.trim(),
      email.trim(),
      mensagem.trim(),
    )

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw },
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact/route] Gmail API error:', err)
    return NextResponse.json({ error: 'Erro ao enviar mensagem. Tente novamente.' }, { status: 500 })
  }
}
