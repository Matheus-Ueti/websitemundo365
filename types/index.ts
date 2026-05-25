import type React from "react"

// ─── Shared primitives ───────────────────────────────────────────────────────

export type LucideIcon = React.ComponentType<{ className?: string }>

// ─── Certifications ────────────────────────────────────────────────────────────

export type Competency = {
  label: string
  achieved: boolean
  icon: LucideIcon
}

export type CertBadge = {
  acronym: string
  title: string
  image: string
}

// ─── Solutions ─────────────────────────────────────────────────────────────────

export type FloatingCardType = "security" | "notification" | "dashboard"

export type FloatingPosition = "top-right" | "middle-right" | "bottom-left"

export type FloatingCardProps = {
  type: FloatingCardType
  position: FloatingPosition
}

export type Solution = {
  id: string
  tabTitle: string
  title: string
  description: string
  subDescription: string
  buttonText: string
  image: string
}

// ─── Testimonials ──────────────────────────────────────────────────────────────

export type Testimonial = {
  id: number
  quote: string
  author: string
  role: string
  company: string
  initials: string
  color: string
}

// ─── Stats ─────────────────────────────────────────────────────────────────────

export type Stat = {
  value: number
  label: string
  suffix: string
}

export type AnimatedCounterProps = Pick<Stat, "value" | "suffix">

// ─── Navigation & footer ───────────────────────────────────────────────────────

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

// ─── Partners ──────────────────────────────────────────────────────────────────

export type Partner = {
  name: string
  src?: string
  inlineLogo?: React.ReactNode
}

export type MicrosoftLogoProps = {
  size?: number
}

// ─── About ─────────────────────────────────────────────────────────────────────

export type TimelineItem = {
  year: string
  title: string
  description: string
  icon: LucideIcon
  accent: string
}

export type TimelineItemCardProps = TimelineItem & {
  isLast: boolean
}

export type PartnerBadgeProps = {
  label: string
}
