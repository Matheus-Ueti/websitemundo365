// ─── Types ───────────────────────────────────────────────────────────────────

type Competency = {
  label: string
  achieved: boolean
}

type CertBadge = {
  acronym: string
  title: string
}

// ─── Data ────────────────────────────────────────────────────────────────────

const competencies: Competency[] = [
  { label: "Windows and Devices",                 achieved: true  },
  { label: "Small and Midmarket Cloud Solutions", achieved: true  },
  { label: "Cloud Productivity",                  achieved: true  },
  { label: "Datacenter",                          achieved: true  },
  { label: "Security",                            achieved: true  },
  { label: "Cloud Platform",                      achieved: false },
  { label: "Data Analytics",                      achieved: false },
  { label: "Enterprise Mobility Management",      achieved: false },
  { label: "Communications",                      achieved: false },
  { label: "Data Platform",                       achieved: false },
]

const certBadges: CertBadge[] = [
  { acronym: "MCT",  title: "Microsoft Certified Trainer"              },
  { acronym: "MCSE", title: "Microsoft Certified Solutions Expert"     },
  { acronym: "MCSA", title: "Microsoft Certified Solutions Associate"  },
  { acronym: "ASA",  title: "Azure Solutions Architect Expert"         },
  { acronym: "MVP",  title: "Most Valuable Professional"               },
]

// ─── Trophy SVG ──────────────────────────────────────────────────────────────

function Trophy() {
  return (
    <div className="relative flex items-end justify-center w-56 h-64 sm:w-72 sm:h-80">
      {/* Ambient glow — animates opacity only */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-40 h-16 rounded-full blur-2xl bg-blue-500/40"
        style={{ animation: "glow-pulse 3.5s ease-in-out infinite" }}
      />

      {/* Trophy — animates translateY only */}
      <svg
        viewBox="0 0 200 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-44 h-auto sm:w-56"
        style={{ animation: "trophy-float 3.5s ease-in-out infinite" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="trophy-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="trophy-base" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>

        {/* Left handle */}
        <path
          d="M63 42 Q26 42 26 78 Q26 112 63 115"
          stroke="url(#trophy-body)" strokeWidth="10"
          strokeLinecap="round" fill="none"
        />
        {/* Right handle */}
        <path
          d="M137 42 Q174 42 174 78 Q174 112 137 115"
          stroke="url(#trophy-body)" strokeWidth="10"
          strokeLinecap="round" fill="none"
        />

        {/* Cup body */}
        <path d="M58 16 H142 L126 118 Q100 138 74 118 Z" fill="url(#trophy-body)" />

        {/* Inner highlight */}
        <path
          d="M82 26 Q92 20 100 20 Q92 58 84 96 Q78 58 82 26 Z"
          fill="white" opacity="0.18"
        />

        {/* Star */}
        <path
          d="M100 52 L103.5 62 L114 62 L106 68 L109 78 L100 72 L91 78 L94 68 L86 62 L96.5 62 Z"
          fill="white" opacity="0.95"
        />

        {/* Stem */}
        <rect x="89" y="118" width="22" height="44" rx="5" fill="url(#trophy-base)" />

        {/* Base plate */}
        <rect x="52" y="162" width="96" height="20" rx="8" fill="url(#trophy-base)" />
      </svg>
    </div>
  )
}

// ─── Competency Card ─────────────────────────────────────────────────────────

function CompetencyCard({ label, achieved }: Competency) {
  return (
    <article className={`
      flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center
      border transition-transform duration-200 hover:-translate-y-0.5
      ${achieved
        ? "bg-gradient-to-br from-orange-500 to-amber-600 border-orange-400/40 shadow-md shadow-orange-900/20"
        : "bg-white border-gray-100 shadow-sm"
      }
    `}>
      {/* Medal icon */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${achieved ? "bg-white/20" : "bg-gray-100"}`}>
        <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 ${achieved ? "text-yellow-200" : "text-gray-300"}`}>
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M12 9l1.5 3 3 .4-2.2 2.1.5 3L12 16l-2.8 1.5.5-3L7.5 12.4l3-.4z" fill="currentColor" />
        </svg>
      </div>

      <span className={`text-xs font-semibold leading-tight ${achieved ? "text-white" : "text-gray-400"}`}>
        {label}
      </span>
    </article>
  )
}

// ─── Cert Badge Chip ─────────────────────────────────────────────────────────

function CertBadgeChip({ acronym, title }: CertBadge) {
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-sm">
        <span className="text-white font-bold text-xs">{acronym}</span>
      </div>
      <span className="text-gray-600 text-sm font-medium">{title}</span>
    </div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function CertificationsSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <header className="text-center">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-widest">
            Certificações e Qualificações
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-3">
            Reconhecimento que garante qualidade
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Confiança nos serviços da Mundo365 através de certificações oficiais Microsoft.
          </p>
        </header>

        {/* Trophy + Competencies */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Trophy */}
          <div className="flex justify-center">
            <Trophy />
          </div>

          {/* Right — Competency grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {competencies.map((item) => (
              <CompetencyCard key={item.label} {...item} />
            ))}
          </div>
        </div>

        {/* Bottom — Cert badges */}
        <div className="flex flex-wrap justify-center gap-3 pt-4 border-t border-gray-100">
          {certBadges.map((badge) => (
            <CertBadgeChip key={badge.acronym} {...badge} />
          ))}
        </div>

      </div>
    </section>
  )
}
