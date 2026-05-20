import { Award, Sparkles } from "lucide-react"

export function PartnerBanner() {
  return (
    <section className="py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Microsoft Partner */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <p className="text-primary-foreground/80 text-sm">Somos a maior Revendedora</p>
              <p className="text-primary-foreground font-bold text-lg">Gold Microsoft Brasil</p>
            </div>
          </div>

          {/* Center - Divider (desktop only) */}
          <div className="hidden md:block w-px h-16 bg-white/20" />

          {/* Right - Copilot */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <p className="text-primary-foreground/80 text-sm">Powered by</p>
              <p className="text-primary-foreground font-bold text-lg">Inteligência Artificial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
