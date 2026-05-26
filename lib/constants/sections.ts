/** IDs de âncora usados no menu e no footer — manter em um só lugar. */
export const SECTION_IDS = {
  main: "conteudo",
  home: "inicio",
  about: "sobre",
  solutions: "solucoes",
  news: "noticias",
  contact: "contato",
} as const

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS]

export function sectionHref(id: SectionId): string {
  return `#${id}`
}
