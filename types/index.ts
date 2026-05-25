import type React from "react"

export type LucideIcon = React.ComponentType<{ className?: string }>

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

export type Testimonial = {
  id: number
  quote: string
  author: string
  role: string
  company: string
  initials: string
  color: string
}

export type Stat = {
  value: number
  label: string
  suffix: string
}

export type NavItem = {
  label: string
  href: string
}

export type SocialLink = {
  icon: LucideIcon
  label: string
  href: string
}

export type Partner = {
  name: string
  src?: string
  inlineLogo?: React.ReactNode
}

export type TimelineItem = {
  year: string
  title: string
  description: string
  icon: LucideIcon
  accent: string
}
