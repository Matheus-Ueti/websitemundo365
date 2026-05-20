import { 
  Monitor, 
  Server, 
  ShieldCheck, 
  Users, 
  Cloud, 
  Database,
  MessageSquare,
  FileSpreadsheet,
  Presentation,
  Mail,
  CheckCircle
} from "lucide-react"

const certifications = [
  { icon: Monitor, label: "Windows e Office" },
  { icon: Server, label: "Infraestrutura" },
  { icon: Cloud, label: "Nuvem Azure" },
  { icon: ShieldCheck, label: "Segurança" },
  { icon: Users, label: "SharePoint" },
  { icon: Database, label: "SQL Server" },
  { icon: MessageSquare, label: "Teams" },
  { icon: FileSpreadsheet, label: "Excel Avançado" },
  { icon: Presentation, label: "Power Platform" },
  { icon: Mail, label: "Exchange" },
]

const badges = [
  "MCT",
  "MOS",
  "MCSE",
  "Solutions Expert",
  "MVP",
]

export function CertificationsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Certificações e Qualificações
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
            Reconhecimento que garante qualidade
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Confiança nos serviços da Mundo365 através de certificações oficiais Microsoft.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                <cert.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{cert.label}</span>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">{badge}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-bold">Microsoft</span>
              <span className="text-muted-foreground text-sm">Most Valuable Professional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
