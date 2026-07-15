import type React from 'react'

// ─── i18n ──────────────────────────────────────────────────────────────────────

export const LOCALES = ['pt', 'en', 'es'] as const
export type Locale = (typeof LOCALES)[number]

export const LOCALE_LABELS: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
}

// ─── Navegação (âncoras da página) ─────────────────────────────────────────────

export const SECTION_IDS = {
  main: 'conteudo',
  home: 'inicio',
  about: 'sobre',
  solutions: 'solucoes',
  marketplace: 'marketplace',
  contact: 'contato',
} as const

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS]

// ─── Navegação (páginas) ───────────────────────────────────────────────────────

export const ROUTES = {
  home: '/',
  news: '/noticias',
} as const

export type Route = (typeof ROUTES)[keyof typeof ROUTES]

// ─── Primitivos compartilhados ─────────────────────────────────────────────────

export type LucideIcon = React.ComponentType<{ className?: string }>

// ─── Certificações ─────────────────────────────────────────────────────────────

export type Competency = {
  label: string
  achieved: boolean
}

export type CertBadge = {
  acronym: string
  title: string
  image: string
}

export type CompetencyCardProps = Competency & {
  className?: string
  medalIndex?: number
}

export type AwardVisualProps = {
  alt: string
}

// ─── Soluções ──────────────────────────────────────────────────────────────────

export type FloatingPosition = 'top-right' | 'middle-right' | 'bottom-left'

export type FloatingCardType = 'security' | 'notification' | 'dashboard'

export type FloatingCardProps = {
  type: FloatingCardType
  position: FloatingPosition
}

export type FloatingLabels = {
  safe: string
  now: string
  protected: string
  portal: string
}

export type FloatingCardWithLabelsProps = FloatingCardProps & {
  labels: FloatingLabels
}

export type Solution = {
  id: string
  tabTitle: string
  title: string
  /** Frase de impacto exibida acima do texto principal na aba */
  headline: string
  description: string
  subDescription: string
  buttonText: string
  image: string
}

export type HeroSlide = {
  headline: string
  subline?: string
}

// ─── Depoimentos ───────────────────────────────────────────────────────────────

export type Testimonial = {
  id: number
  quote: string
  author: string
  company: string
  initials: string
  color: string
  logo?: string
  logoBg?: string
}

// ─── Estatísticas ──────────────────────────────────────────────────────────────

export type Stat = {
  value: number
  label: string
  prefix?: string
  suffix: string
}

export type AnimatedCounterProps = Pick<Stat, 'value' | 'prefix' | 'suffix'>

// ─── Menu e rodapé ─────────────────────────────────────────────────────────────

export type NavItem = {
  label: string
  href: string
}

export type SocialLink = {
  icon: LucideIcon
  label: string
  href: string
}

export type FooterLinks = {
  services: NavItem[]
  links: NavItem[]
}

// ─── Parceiros ─────────────────────────────────────────────────────────────────

export type Partner = {
  name: string
  src: string
}

export type MicrosoftLogoProps = {
  size?: number
}

// ─── Sobre nós / timeline ────────────────────────────────────────────────────────

/** Texto da timeline em i18n/messages/*.json (sem ícone Lucide). */
export type TimelineItemCopy = {
  year: string
  title: string
  description: string
  accent: string
}

export type TimelineItem = TimelineItemCopy & {
  icon: LucideIcon
}

export type TimelineItemCardProps = TimelineItem & {
  isLast: boolean
}

export type PartnerBadgeProps = {
  label: string
}

// ─── Contato (colunas laterais) ────────────────────────────────────────────────

export type ContactPillar = {
  title: string
}

// ─── Marketplace ───────────────────────────────────────────────────────────────

export type MarketplaceFeature = {
  title: string
  description: string
}

export type MarketplaceTrustItem = {
  label: string
}

/** @deprecated replaced by MarketplaceFeature flat list */
export type MarketplaceFeatureItem = MarketplaceFeature

/** @deprecated replaced by MarketplaceFeature flat list */
export type MarketplaceFeatureGroup = {
  label: string
  items: MarketplaceFeatureItem[]
}

// ─── Notícias ──────────────────────────────────────────────────────────────────

export type NewsArticle = {
  id: string
  category: string
  date: string
  title: string
  excerpt: string
  /** Ausente enquanto a arte não existe: o card renderiza um placeholder. */
  image?: string
  imageAlt?: string
  href?: string
}

export const COUNTRY_CODES = ['br', 'us', 'es', 'pe', 'mx'] as const
export type CountryCode = (typeof COUNTRY_CODES)[number]

/** Uma viagem de premiação: o que aconteceu no país. */
export type CountryMovement = {
  id: CountryCode
  name: string
  eyebrow: string
  title: string
  description: string
  entries: NewsArticle[]
}

export type FlagIconProps = {
  code: CountryCode
  alt: string
  className?: string
}

export type NewsHeadingProps = {
  title: string
  subtitle?: string
  className?: string
}

export type NewsCardProps = {
  article: NewsArticle
  /** `featured` ocupa a coluna alta do grid e usa tipografia maior. */
  variant?: 'featured' | 'compact'
}

// ─── Hooks ─────────────────────────────────────────────────────────────────────

export type IntersectionVisibleOptions = {
  threshold?: number
  triggerOnce?: boolean
}

// ─── App Router (layouts/páginas) ────────────────────────────────────────────

export type LocaleParams = {
  locale: string
}

export type LocalePageProps = {
  params: Promise<LocaleParams>
}

export type LocaleLayoutProps = {
  children: React.ReactNode
  params: Promise<LocaleParams>
}
