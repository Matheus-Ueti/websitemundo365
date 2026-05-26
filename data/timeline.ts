import { Cloud, Handshake, Rocket, Sparkles, TrendingUp } from "lucide-react"
import type { TimelineItem } from "@/types"

export const timeline: TimelineItem[] = [
  {
    year: "2014",
    title: "Início da jornada",
    description: "A Mundo365 nasce com o propósito de transformar negócios com tecnologia.",
    icon: Rocket,
    accent: "from-orange-400 to-amber-400",
  },
  {
    year: "2016",
    title: "Parceria Microsoft",
    description: "Nos tornamos parceiros Microsoft e ampliamos nosso portfólio de soluções.",
    icon: Handshake,
    accent: "from-blue-500 to-sky-400",
  },
  {
    year: "2019",
    title: "Especialização em Cloud",
    description: "Aprofundamos nossa atuação em Azure e soluções de infraestrutura.",
    icon: Cloud,
    accent: "from-cyan-500 to-blue-400",
  },
  {
    year: "2022",
    title: "Expansão e inovação",
    description: "Crescemos, inovamos e expandimos nossa atuação em todo o Brasil.",
    icon: TrendingUp,
    accent: "from-violet-500 to-purple-400",
  },
  {
    year: "2024+",
    title: "O futuro nos move",
    description: "Seguimos evoluindo com IA, automação e soluções que geram impacto real.",
    icon: Sparkles,
    accent: "from-fuchsia-500 to-pink-400",
  },
]
