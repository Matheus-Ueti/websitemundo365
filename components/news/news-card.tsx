import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import type { NewsCardProps } from '@/types'

export function NewsCard({ article, variant = 'compact' }: NewsCardProps) {
  const isFeatured = variant === 'featured'

  const content = (
    <>
      {article.image ? (
        <Image
          src={article.image}
          alt={article.imageAlt ?? article.title}
          fill
          sizes={isFeatured ? '(max-width: 1024px) 100vw, 60vw' : '(max-width: 1024px) 100vw, 40vw'}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <span className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
      )}

      <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      <span className="relative flex h-full flex-col justify-end p-4 sm:p-5">
        <span className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
          {article.category}
          <span className="h-1 w-1 rounded-full bg-cyan-300/60" aria-hidden />
          <span className="text-white/60">{article.date}</span>
        </span>

        <span
          className={`font-bold leading-tight text-white ${isFeatured ? 'text-xl sm:text-2xl' : 'text-sm sm:text-base'}`}
        >
          {article.title}
        </span>

        <span
          className={`mt-1.5 text-white/70 leading-snug line-clamp-2 ${isFeatured ? 'text-sm' : 'text-xs'}`}
        >
          {article.excerpt}
        </span>
      </span>
    </>
  )

  const className = `group relative block h-full min-h-[180px] overflow-hidden rounded-2xl bg-neutral-900 ${
    isFeatured ? 'min-h-[320px] sm:min-h-[420px]' : ''
  }`

  if (!article.href) {
    return <article className={className}>{content}</article>
  }

  return (
    <Link href={article.href} className={className}>
      {content}
    </Link>
  )
}
