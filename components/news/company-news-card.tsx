import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import type { CompanyNewsArticle } from '@/types'

type CompanyNewsCardProps = {
  article: CompanyNewsArticle
  /** `featured` ocupa a coluna alta do grid e usa tipografia maior. */
  variant?: 'featured' | 'compact'
  priority?: boolean
}

export function CompanyNewsCard({
  article,
  variant = 'compact',
  priority = false,
}: CompanyNewsCardProps) {
  const isFeatured = variant === 'featured'

  return (
    <Link
      href={`/noticias/${article.slug}`}
      className={`group relative block h-full min-h-[180px] overflow-hidden rounded-2xl bg-neutral-900 ${
        isFeatured ? 'min-h-[320px] sm:min-h-[420px]' : ''
      }`}
    >
      <Image
        src={article.cover}
        alt={article.title}
        fill
        sizes={isFeatured ? '(max-width: 1024px) 100vw, 60vw' : '(max-width: 1024px) 100vw, 40vw'}
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

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
          {article.dek}
        </span>
      </span>
    </Link>
  )
}
