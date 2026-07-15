import type { NewsHeadingProps } from '@/types'

export function NewsHeading({ title, subtitle, className }: NewsHeadingProps) {
  return (
    <div className={className}>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 [font-family:var(--font-space-grotesk)]">
        <span className="relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </span>
      </h2>
      {subtitle && <p className="mt-6 text-base text-gray-500">{subtitle}</p>}
    </div>
  )
}
