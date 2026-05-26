export const siteConfig = {
  name: "Mundo365",
  title: "Mundo365 | Soluções Microsoft para sua Empresa",
  description:
    "Maior Revendedora Gold Microsoft do Sul do Brasil. Backup gerenciado, Business Intelligence, migração para Azure e soluções Microsoft de ponta.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mundo365.com.br",
  locale: "pt_BR",
  contact: {
    phone: "+554532567890",
    phoneDisplay: "+55 (45) 3256-7890",
    email: "contato@mundo365.com.br",
    location: "Cascavel - PR, Brasil",
  },
} as const
