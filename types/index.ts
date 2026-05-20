// ─── Certifications Section ──────────────────────────────────────────────────

export type Competency = {
  label: string
  achieved: boolean
}

export type CertBadge = {
  acronym: string
  title: string
}

// ─── Solutions Section ────────────────────────────────────────────────────────

export type FloatingCardType = "security" | "notification" | "dashboard"

export type FloatingPosition = "top-right" | "middle-right" | "bottom-left"

export type Solution = {
  id: string
  tabTitle: string
  title: string
  description: string
  subDescription: string
  buttonText: string
  image: string
}

// ─── Testimonials Section ─────────────────────────────────────────────────────

export type Testimonial = {
  id: number
  quote: string
  author: string
  role: string
  company: string
  initials: string
  color: string
}

// ─── Stats Section ────────────────────────────────────────────────────────────

export type Stat = {
  value: number
  label: string
  suffix: string
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export type NavItem = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
}
