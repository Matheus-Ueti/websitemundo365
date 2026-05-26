import {
  BarChart3,
  Cloud,
  Database,
  MessageSquare,
  Monitor,
  Server,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react"
import type { CertBadge, Competency } from "@/types"

export const competencies: Competency[] = [
  { label: "Windows and Devices", achieved: true, icon: Monitor },
  { label: "Small and Midmarket Cloud Solutions", achieved: true, icon: Cloud },
  { label: "Cloud Productivity", achieved: true, icon: Zap },
  { label: "Datacenter", achieved: true, icon: Server },
  { label: "Security", achieved: true, icon: Shield },
  { label: "Cloud Platform", achieved: false, icon: Cloud },
  { label: "Data Analytics", achieved: false, icon: BarChart3 },
  { label: "Enterprise Mobility Management", achieved: false, icon: Smartphone },
  { label: "Communications", achieved: false, icon: MessageSquare },
  { label: "Data Platform", achieved: false, icon: Database },
]

export const certBadges: CertBadge[] = [
  { acronym: "MCT", title: "Microsoft Certified Trainer", image: "/badge-mct.png" },
  { acronym: "MCSE", title: "Microsoft Certified Solutions Expert", image: "/badge-mcse.png" },
  { acronym: "MCSA", title: "Microsoft Certified Solutions Associate", image: "/badge-mcsa.png" },
  { acronym: "ASA", title: "Azure Solutions Architect Expert", image: "/badge-asa.png" },
  { acronym: "MVP", title: "Most Valuable Professional", image: "/badge-mvp.png" },
]
