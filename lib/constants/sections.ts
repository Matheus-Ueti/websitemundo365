import { SECTION_IDS, type SectionId } from '@/types'

export { SECTION_IDS, type SectionId }

export function sectionHref(id: SectionId): string {
  return `#${id}`
}

/** Âncora absoluta: navega para a home antes de rolar, então funciona também a
 *  partir de páginas separadas como /noticias. */
export function homeSectionHref(id: SectionId): string {
  return `/#${id}`
}
