import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { SECTION_IDS } from '@/lib/constants/sections'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FlagIcon } from '@/components/news/flag-icon'
import { NewsGallery } from '@/components/news/news-gallery'
import { CompanyNewsCard } from '@/components/news/company-news-card'
import { companyNewsSource, getArticleBySlug, getRelatedArticles } from '@/data/news'
import type { Locale } from '@/types'

type NewsArticlePageProps = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return companyNewsSource.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const article = getArticleBySlug(slug, locale as Locale)

  if (!article) return {}

  return {
    title: article.title,
    description: article.dek,
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.dek,
      images: [{ url: article.cover }],
    },
  }
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const article = getArticleBySlug(slug, locale as Locale)
  if (!article) notFound()

  const t = await getTranslations('news')
  const related = getRelatedArticles(slug, locale as Locale)

  return (
    <main id={SECTION_IDS.main} className="relative min-h-screen bg-white">
      <Header />

      {/* Faixa roxa atrás do header, que é absolute e depende de um fundo escuro. */}
      <div className="h-20 bg-gradient-to-r from-[#6b21a8] via-[#7c3aed] to-[#8b5cf6]" />

      <article className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 lg:px-8">
        <Link
          href="/noticias"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 transition-colors hover:text-cyan-700"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          {t('article.back')}
        </Link>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-cyan-600">
            <FlagIcon code={article.country} alt="" className="h-6 w-6 shadow-none" />
            <span>{article.category}</span>
            <span className="h-1 w-1 rounded-full bg-cyan-400" aria-hidden />
            <span className="text-gray-400">{article.date}</span>
            <span className="h-1 w-1 rounded-full bg-gray-300" aria-hidden />
            <span className="text-gray-400 normal-case tracking-normal">{article.place}</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl [font-family:var(--font-space-grotesk)]">
            {article.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">{article.dek}</p>
        </header>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-200">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-gray-700">
          {article.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <p className="mt-8 border-l-4 border-cyan-400 bg-gray-50 py-4 pl-5 pr-4 text-base font-medium leading-relaxed text-gray-800">
          {article.closing}
        </p>

        {article.gallery.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-xl font-bold tracking-tight text-gray-900 [font-family:var(--font-space-grotesk)]">
              {t('article.gallery')}
            </h2>
            <NewsGallery
              images={article.gallery}
              title={article.title}
              labels={{
                close: t('article.close'),
                prev: t('article.prev'),
                next: t('article.next'),
              }}
            />
          </section>
        )}
      </article>

      {related.length > 0 && (
        <section className="mt-20 bg-gray-50 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 [font-family:var(--font-space-grotesk)]">
              {t('article.related')}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <div key={item.slug} className="min-h-[220px]">
                  <CompanyNewsCard article={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
