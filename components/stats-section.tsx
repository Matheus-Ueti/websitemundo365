import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import type { Stat } from '@/types'

export async function StatsSection() {
  const t = await getTranslations('stats')
  const stats = t.raw('items') as Stat[]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            {t('eyebrow')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 text-balance">
            {t('title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-8">
            {stats.slice(0, 2).map((stat) => (
              <div key={stat.label} className="text-center lg:text-right">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                <p className="text-slate-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center order-first lg:order-none">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <div className="w-36 h-36 sm:w-48 sm:h-48 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl p-5">
                    <Image
                      src="/mundo365-logo.png"
                      alt="Mundo365"
                      width={120}
                      height={40}
                      className="w-auto h-auto brightness-0 invert max-w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {stats.slice(2, 4).map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                <p className="text-slate-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
