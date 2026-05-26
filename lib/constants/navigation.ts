import type { FooterLinks, NavItem } from "@/types"
import { SECTION_IDS, sectionHref } from "@/lib/constants/sections"

export const mainNavItems: NavItem[] = [
  { label: "Início", href: sectionHref(SECTION_IDS.home) },
  { label: "Sobre nós", href: sectionHref(SECTION_IDS.about) },
  { label: "Soluções", href: sectionHref(SECTION_IDS.solutions) },
  { label: "Notícias", href: sectionHref(SECTION_IDS.news) },
  { label: "Contato", href: sectionHref(SECTION_IDS.contact) },
]

export const footerLinks: FooterLinks = {
  services: [
    { label: "Backup gerenciado", href: sectionHref(SECTION_IDS.solutions) },
    { label: "Business Intelligence", href: sectionHref(SECTION_IDS.solutions) },
    { label: "Planejamento e migração", href: sectionHref(SECTION_IDS.solutions) },
    { label: "Adoção e treinamento", href: sectionHref(SECTION_IDS.solutions) },
    { label: "Área de trabalho virtual", href: sectionHref(SECTION_IDS.solutions) },
  ],
  links: mainNavItems,
}
