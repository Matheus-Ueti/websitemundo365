export const siteConfig = {
  name: 'Mundo365',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.mundo365.com.br',
  contact: {
    phone: '+554530996897',
    phoneDisplay: '+55 (45) 3099-6897',
    email: 'contato@mundo365.com.br',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre as soluções Microsoft da Mundo365.',
  },
} as const

/** Número só com dígitos para links wa.me */
export function getWhatsAppUrl(message?: string) {
  const digits = siteConfig.contact.phone.replace(/\D/g, '')
  const text = message ?? siteConfig.contact.whatsappMessage
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`
}
