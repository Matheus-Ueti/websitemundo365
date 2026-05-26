import Image from "next/image"
import { ChevronRight } from "lucide-react"
import type { CertBadge, Competency } from "@/types"
import { certBadges, competencies } from "@/data/certifications"

function CompetencyCard({ label, achieved, icon: Icon }: Competency) {
  return (
    <article
      className={[
        "group relative flex flex-col justify-between",
        "p-4 sm:p-5 h-[130px] sm:h-[150px] rounded-2xl",
        "cursor-default select-none overflow-hidden",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1.5 hover:scale-[1.02]",
        achieved
          ? "bg-gradient-to-br from-orange-500 via-orange-500 to-amber-400 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40"
          : "bg-white border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:border-gray-200",
      ].join(" ")}
    >
      {/* Shimmer overlay on hover */}
      {achieved && (
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/8 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" />
      )}

      {/* Icon */}
      <div
        className={[
          "w-9 h-9 rounded-xl flex items-center justify-center",
          achieved ? "bg-white/20" : "bg-gray-50 border border-gray-100",
        ].join(" ")}
      >
        <Icon className={`w-4 h-4 ${achieved ? "text-white" : "text-gray-400"}`} />
      </div>

      {/* Label + Arrow */}
      <div className="flex items-end justify-between gap-1">
        <span className={`text-[11px] font-semibold leading-snug ${achieved ? "text-white/95" : "text-gray-500"}`}>
          {label}
        </span>
        <div
          className={[
            "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0",
            "transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            achieved ? "bg-white/25" : "bg-gray-100 group-hover:bg-gray-200",
          ].join(" ")}
        >
          <ChevronRight className={`w-3 h-3 ${achieved ? "text-white" : "text-gray-400"}`} />
        </div>
      </div>
    </article>
  )
}

// ─── Cert Badge ───────────────────────────────────────────────────────────────

function CertBadgeChip({ title, image }: CertBadge) {
  return (
    <div className="flex items-center justify-center bg-white border border-gray-100 rounded-2xl p-3 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-200 cursor-default">
      <Image
        src={image}
        alt={title}
        width={72}
        height={72}
        className="object-contain w-16 h-16"
      />
    </div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function CertificationsSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* ── Wave lines de fundo ── */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        aria-hidden="true"
      >
        <g mask="url(#SvgjsMask1039)" fill="none">
          <path d="M -774.3308334688962,132 C -678.33,174.8 -486.33,325.4 -294.33083346889623,346 C -102.33,366.6 -6.33,246.4 185.66916653110377,235 C 377.67,223.6 473.67,287.2 665.6691665311038,289 C 857.67,290.8 990.8,243.6 1145.6691665311037,244 C 1300.54,244.4 1381.13,281.6 1440,291" stroke="rgba(210, 5, 230, 0.28)" strokeWidth="2"/>
          <path d="M -473.7848105619281,166 C -377.78,217 -185.78,424.8 6.215189438071871,421 C 198.22,417.2 294.22,143.8 486.2151894380719,147 C 678.22,150.2 774.22,423.2 966.2151894380719,437 C 1158.22,450.8 1351.46,235 1446.2151894380718,216 C 1540.97,197 1441.24,316.8 1440,342" stroke="rgba(210, 5, 230, 0.22)" strokeWidth="2"/>
          <path d="M -796.9791642743924,290 C -700.98,280.6 -508.98,244.4 -316.9791642743924,243 C -124.98,241.6 -28.98,301.2 163.02083572560758,283 C 355.02,264.8 451.02,129.2 643.0208357256076,152 C 835.02,174.8 963.63,394.6 1123.0208357256076,397 C 1282.42,399.4 1376.6,210.6 1440,164" stroke="rgba(210, 5, 230, 0.18)" strokeWidth="2"/>
          <path d="M -775.3204485032085,214 C -679.32,228.8 -487.32,298.2 -295.32044850320847,288 C -103.32,277.8 -7.32,139.8 184.67955149679153,163 C 376.68,186.2 472.68,388.2 664.6795514967915,404 C 856.68,419.8 989.62,260.6 1144.6795514967916,242 C 1299.74,223.4 1380.94,297.2 1440,311" stroke="rgba(210, 5, 230, 0.20)" strokeWidth="2"/>
        </g>
        <defs>
          <mask id="SvgjsMask1039">
            <rect width="1440" height="560" fill="#ffffff"/>
          </mask>
        </defs>
      </svg>

      {/* ── Ambient glows globais ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glow laranja topo direita */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-100/50 blur-[120px]" />
        {/* Glow violeta centro esquerda */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[400px] h-[500px] rounded-full bg-violet-100/60 blur-[100px]" />
        {/* Glow suave fundo */}
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[300px] rounded-full bg-purple-50/80 blur-[80px]" />
      </div>

      {/* ── Ambient glows globais ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glow laranja topo direita */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-100/50 blur-[120px]" />
        {/* Glow violeta centro esquerda */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[400px] h-[500px] rounded-full bg-violet-100/60 blur-[100px]" />
        {/* Glow suave fundo */}
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[300px] rounded-full bg-purple-50/80 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
            <span className="w-6 h-px bg-orange-400 rounded-full" />
            Certificações e Qualificações
            <span className="w-6 h-px bg-orange-400 rounded-full" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
            Reconhecimento que garante qualidade
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
            Confiança nos serviços da Mundo365 através de certificações e premiações oficiais Microsoft.
          </p>
        </div>

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">

          {/* ── LADO ESQUERDO — Imagem com composição premium ── */}
          <div className="relative isolate">

            {/* Blobs orgânicos atrás da imagem — z-0 fica ATRÁS do card (z-10) */}
            <div
              className="pointer-events-none absolute -left-10 top-4 w-[280px] h-[380px] bg-gradient-to-br from-violet-500 to-purple-600 opacity-80 z-0"
              style={{ borderRadius: "62% 38% 46% 54% / 44% 58% 42% 56%" }}
            />
            <div
              className="pointer-events-none absolute -left-4 bottom-8 w-[200px] h-[200px] bg-gradient-to-br from-violet-400 to-fuchsia-500 opacity-55 z-0"
              style={{ borderRadius: "38% 62% 54% 46% / 58% 36% 64% 42%" }}
            />
            <div
              className="pointer-events-none absolute -top-6 left-1/3 w-[160px] h-[160px] bg-violet-300/40 blur-xl z-0"
              style={{ borderRadius: "50% 60% 40% 70% / 60% 40% 70% 30%" }}
            />

            {/* Glow laranja sutil */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-[180px] h-[180px] rounded-full bg-orange-400/20 blur-3xl z-0" />

            {/* Padrão de pontos decorativos */}
            <div
              className="pointer-events-none absolute -right-2 top-8 w-28 h-40 opacity-[0.15] z-0"
              style={{
                backgroundImage: "radial-gradient(circle, #7c3aed 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
              }}
            />

            {/* Linha curva decorativa */}
            <svg
              className="pointer-events-none absolute -bottom-4 -left-8 w-48 opacity-25 z-0"
              viewBox="0 0 200 80"
              fill="none"
            >
              <path d="M10 70 Q60 10 120 40 Q160 60 190 20" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M0 80 Q50 20 110 50 Q150 70 180 30" stroke="#a78bfa" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6"/>
            </svg>


            {/* ── Card da imagem ── */}
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-violet-300/20 z-10">

              {/* Logos no topo */}
              <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-2.5 px-5 py-4 bg-gradient-to-b from-black/50 via-black/20 to-transparent">
                <span className="text-white/90 text-[10px] font-semibold tracking-wider">TD SYNNEX</span>
                <span className="w-px h-3 bg-white/30" />
                <svg viewBox="0 0 23 23" className="w-4 h-4 flex-shrink-0">
                  <path fill="#f35325" d="M1 1h10v10H1z"/>
                  <path fill="#81bc06" d="M12 1h10v10H12z"/>
                  <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                  <path fill="#ffba08" d="M12 12h10v10H12z"/>
                </svg>
                <span className="text-white/90 text-[10px] font-semibold tracking-wider">Microsoft</span>
                <span className="w-px h-3 bg-white/30" />
                <span className="text-white/90 text-[10px] font-semibold tracking-wider">MUNDO365</span>
              </div>

              <Image
                src="/award-winner.png"
                alt="Mundo365 — Ganhador Top Growth Awards 2026 TD SYNNEX & Microsoft"
                width={560}
                height={640}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Fade bottom para branco */}
              <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
            </div>

          </div>

          {/* ── LADO DIREITO — Grid de competências ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {competencies.map((item) => (
              <CompetencyCard key={item.label} {...item} />
            ))}
          </div>
        </div>

        {/* ── Cert Badges ── */}
        <div className="mt-16 pt-10 border-t border-gray-100/80">
          <p className="text-center text-[11px] text-gray-400 uppercase tracking-[0.18em] font-medium mb-6">
            Certificações da equipe
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {certBadges.map((badge) => (
              <CertBadgeChip key={badge.acronym} {...badge} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
