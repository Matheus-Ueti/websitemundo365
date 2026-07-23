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

// ─── Hero (carrossel de banners) ───────────────────────────────────────────────

export const HERO_BANNER_IDS = ['awards', 'copilot', 'trophy'] as const
export type HeroBannerId = (typeof HERO_BANNER_IDS)[number]

export type HeroBanner = {
  id: HeroBannerId
  alt: string
}

export type HeroBannerCarouselProps = {
  banners: HeroBanner[]
  /** Rótulo acessível do grupo de indicadores (bolinhas). */
  carouselLabel: string
  slideLabel: string
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
  className?: string
}

/** Selo oficial "Microsoft Solutions Partner" no banner de parceria. */
export type SolutionsPartnerBadgeProps = {
  /** Segunda linha do lockup: "Solutions Partner" ou "Partner". */
  tier: string
  /** Terceira linha (área de especialização); ausente no selo base. */
  designation?: string
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

/** Texto que existe nos três idiomas do site. */
export type LocalizedText = Record<Locale, string>
/** Lista de parágrafos que existe nos três idiomas do site. */
export type LocalizedList = Record<Locale, string[]>

/**
 * Notícia própria da Mundo365 (conteúdo do marketing) como está armazenada:
 * campos de texto traduzidos por idioma. Resolvida para o idioma atual via
 * `localizeArticle` antes de chegar aos componentes.
 */
export type CompanyNewsArticleSource = {
  slug: string
  country: CountryCode
  /** Data curta já formatada por idioma, ex.: "Jun 2026". */
  date: LocalizedText
  /** Cidade/país do acontecimento, ex.: "Cascavel · Brasil". */
  place: LocalizedText
  category: LocalizedText
  title: LocalizedText
  /** Linha de apoio (subtítulo/lead). */
  dek: LocalizedText
  /** Parágrafos do corpo, em ordem. */
  body: LocalizedList
  /** Parágrafo de fechamento. */
  closing: LocalizedText
  cover: string
  gallery: string[]
}

/**
 * Notícia já resolvida para um idioma — o que os componentes consomem. `cover`
 * é a capa; `gallery` são as demais fotos, que giram dentro dos cards e formam a
 * galeria da página de detalhe.
 */
export type CompanyNewsArticle = {
  slug: string
  country: CountryCode
  category: string
  date: string
  place: string
  title: string
  dek: string
  body: string[]
  closing: string
  cover: string
  gallery: string[]
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
