import type React from "react"

export type Competency = {
  label: string
  achieved: boolean
}

export type CertBadge = {
  acronym: string
  title: string
}

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
  icon: React.ComponentType<{ className?: string }>
  label: string
  href: string
}
