import type { CertBadge, Competency } from "@/types"

export const competencies: Competency[] = [
  { label: "Windows and Devices", achieved: true },
  { label: "Small and Midmarket Cloud Solutions", achieved: true },
  { label: "Cloud Productivity", achieved: true },
  { label: "Datacenter", achieved: true },
  { label: "Security", achieved: true },
  { label: "Cloud Platform", achieved: false },
  { label: "Data Analytics", achieved: false },
  { label: "Enterprise Mobility Management", achieved: false },
  { label: "Communications", achieved: false },
  { label: "Data Platform", achieved: false },
]

export const certBadges: CertBadge[] = [
  { acronym: "MCT", title: "Microsoft Certified Trainer", image: "/badge-mct.png" },
  { acronym: "MCSE", title: "Microsoft Certified Solutions Expert", image: "/badge-mcse.png" },
  { acronym: "MCSA", title: "Microsoft Certified Solutions Associate", image: "/badge-mcsa.png" },
  { acronym: "ASA", title: "Azure Solutions Architect Expert", image: "/badge-asa.png" },
  { acronym: "MVP", title: "Most Valuable Professional", image: "/badge-mvp.png" },
]
