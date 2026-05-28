/**
 * Linha do tempo da seção “Sobre nós”.
 * Textos vêm de i18n/messages/*.json → about.timeline.items
 * Ícones ficam aqui (não dá para colocar ícone dentro do JSON).
 */
import { Cloud, Handshake, Rocket, Sparkles, TrendingUp } from "lucide-react"
import type { Locale, TimelineItem, TimelineItemCopy } from "@/types"

import pt from "./messages/pt.json"
import en from "./messages/en.json"
import es from "./messages/es.json"

const icons = [Rocket, Handshake, Cloud, TrendingUp, Sparkles] as const

const catalogs = { pt, en, es } as const

export function getTimeline(locale: Locale): TimelineItem[] {
  return catalogs[locale].about.timeline.items.map(
    (item: TimelineItemCopy, index: number) => ({
      ...item,
      icon: icons[index],
    })
  )
}
