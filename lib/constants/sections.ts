import { SECTION_IDS, type SectionId } from "@/types"

export { SECTION_IDS, type SectionId }

export function sectionHref(id: SectionId): string {
  return `#${id}`
}
