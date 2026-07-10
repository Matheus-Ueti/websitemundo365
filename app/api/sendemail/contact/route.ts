import { NextResponse } from 'next/server'

const FIELD_LIMITS = { nome: 100, telefone: 30, email: 254, mensagem: 2000 }

// Removes CR/LF to prevent header injection
function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n\0]/g, '')
}

// Escapes HTML entities to prevent XSS in email body
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

function buildEmailHtml(nome: string, telefone: string, email: string, mensagem: string): string {
  return `
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
          <td style="padding: 10px 0; color: #111827; font-weight: 600;">${escapeHtml(nome)}</td>
        </tr>
        <tr style="border-top: 1px solid #f3f4f6;">
          <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Telefone</td>
          <td style="padding: 10px 0; color: #111827; font-weight: 600;">${escapeHtml(telefone)}</td>
        </tr>
        <tr style="border-top: 1px solid #f3f4f6;">
          <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">E-mail</td>
          <td style="padding: 10px 0; color: #111827; font-weight: 600;">${escapeHtml(email)}</td>
        </tr>
        <tr style="border-top: 1px solid #f3f4f6;">
          <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Mensagem</td>
          <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${escapeHtml(mensagem)}</td>
        </tr>
      </table>
    </div>
    <div style="padding: 16px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb;">
      <p style="margin: 0; color: #9ca3af; font-size: 12px;">Enviado pelo formulário do site mundo365.com.br</p>
    </div>
  </div>
</body>
</html>`
}

// Obtains an app-only access token via the OAuth2 client credentials flow
async function getAccessToken(): Promise<string> {
  const tenantId = process.env.GRAPH_TENANT_ID!
  const params = new URLSearchParams({
    client_id: process.env.GRAPH_CLIENT_ID!,
    client_secret: process.env.GRAPH_CLIENT_SECRET!,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials',
  })

  const res = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  })

  if (!res.ok) {
    const detail = await res.text()
    throw new Error(`Falha ao obter token da Microsoft (${res.status}): ${detail}`)
  }

  const data = await res.json()
  return data.access_token as string
}

export async function POST(req: Request) {
  try {
    const { nome, telefone, email, mensagem } = await req.json()

    if (!nome?.trim() || !telefone?.trim() || !email?.trim() || !mensagem?.trim()) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 })
    }

    if (nome.trim().length > FIELD_LIMITS.nome) {
      return NextResponse.json({ error: 'Nome muito longo.' }, { status: 400 })
    }
    if (telefone.trim().length > FIELD_LIMITS.telefone) {
      return NextResponse.json({ error: 'Telefone muito longo.' }, { status: 400 })
    }
    if (email.trim().length > FIELD_LIMITS.email) {
      return NextResponse.json({ error: 'E-mail muito longo.' }, { status: 400 })
    }
    if (mensagem.trim().length > FIELD_LIMITS.mensagem) {
      return NextResponse.json({ error: 'Mensagem muito longa (máx. 2000 caracteres).' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'E-mail inválido.' }, { status: 400 })
    }

    const accessToken = await getAccessToken()

    const from = process.env.GRAPH_FROM!
    const to = process.env.GRAPH_TO!

    const message = {
      message: {
        subject: `Novo contato pelo site — ${sanitizeHeader(nome.trim())}`,
        body: {
          contentType: 'HTML',
          content: buildEmailHtml(nome.trim(), telefone.trim(), email.trim(), mensagem.trim()),
        },
        toRecipients: [{ emailAddress: { address: to } }],
        replyTo: [{ emailAddress: { address: sanitizeHeader(email.trim()) } }],
      },
      saveToSentItems: true,
    }

    const res = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(from)}/sendMail`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })

    // Graph sendMail returns 202 Accepted on success (empty body)
    if (!res.ok) {
      const detail = await res.text()
      throw new Error(`Graph sendMail falhou (${res.status}): ${detail}`)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact/route] Microsoft Graph API error:', err)
    return NextResponse.json({ error: 'Erro ao enviar mensagem. Tente novamente.' }, { status: 500 })
  }
}
