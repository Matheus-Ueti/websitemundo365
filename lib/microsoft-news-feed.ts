import { XMLParser } from 'fast-xml-parser'
import type { Locale, NewsArticle } from '@/types'

const FEED_URL = 'https://news.microsoft.com/pt-br/feed/'

/** Revalida a cada hora — o próprio feed anuncia `sy:updateFrequency` de 1h. */
const REVALIDATE_SECONDS = 3600

const MAX_ITEMS = 6

const DATE_LOCALE: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-ES',
}

/**
 * O feed é WordPress: título e categorias não vêm em CDATA, então entidades
 * HTML (aspas curvas, "&") chegam cruas no texto. Cobre só as que aparecem
 * de fato nesse feed — não é um decoder de entidades genérico.
 */
const HTML_ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#039;': "'",
  '&#8217;': '’',
  '&#8216;': '‘',
  '&#8220;': '“',
  '&#8221;': '”',
  '&#8211;': '–',
  '&#8212;': '—',
  '&#038;': '&',
  '&nbsp;': ' ',
}

function decodeEntities(text: string): string {
  return text.replace(/&#?\w+;/g, (entity) => HTML_ENTITIES[entity] ?? entity)
}

function stripHtml(html: string): string {
  return decodeEntities(html.replace(/<[^>]*>/g, ' '))
    .replace(/\[…\]/g, '…')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * O feed do Security Blog sempre fecha `description` com "The post ... appeared
 * first on ...". O News Center Brasil não usa esse padrão — o split simplesmente
 * não casa e a string inteira segue para `stripHtml`, sem efeito colateral.
 */
function extractExcerpt(description: string): string {
  const withoutBoilerplate = description.split(/<p>\s*The post/i)[0] ?? description
  return stripHtml(withoutBoilerplate)
}

/** O feed não expõe `<enclosure>`/`media:thumbnail` — a imagem de destaque é a primeira do corpo do post. */
function extractFirstImage(contentEncoded: string | undefined): string | undefined {
  if (!contentEncoded) return undefined
  return contentEncoded.match(/<img[^>]+src="([^"]+)"/)?.[1]
}

function firstCategory(category: string | string[] | undefined): string | undefined {
  if (!category) return undefined
  const value = Array.isArray(category) ? category[0] : category
  return value ? decodeEntities(value) : undefined
}

type RssItem = {
  title: string
  link: string
  pubDate: string
  category?: string | string[]
  description: string
  'content:encoded'?: string
}

/**
 * Notícias do Microsoft News Center Brasil — sempre em português, independente
 * do idioma do site. `locale` só ajusta o formato da data para o visitante.
 */
export async function getMicrosoftNewsFeed(
  locale: Locale,
  fallbackCategory: string,
): Promise<NewsArticle[]> {
  try {
    const response = await fetch(FEED_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: { Accept: 'application/rss+xml, application/xml, text/xml' },
    })

    if (!response.ok) {
      throw new Error(`Microsoft News Center Brasil feed respondeu ${response.status}`)
    }

    const xml = await response.text()
    const parser = new XMLParser({ ignoreAttributes: true })
    const parsed = parser.parse(xml) as { rss?: { channel?: { item?: RssItem | RssItem[] } } }

    const rawItems = parsed.rss?.channel?.item
    const items = Array.isArray(rawItems) ? rawItems : rawItems ? [rawItems] : []
    const dateFormatter = new Intl.DateTimeFormat(DATE_LOCALE[locale], {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })

    const articles = items
      .map((item) => ({
        id: item.link,
        category: firstCategory(item.category) ?? fallbackCategory,
        date: dateFormatter.format(new Date(item.pubDate)),
        title: decodeEntities(item.title),
        excerpt: extractExcerpt(item.description),
        image: extractFirstImage(item['content:encoded']),
        href: item.link,
      }))
      // Boa parte dos posts desse feed não tem nenhuma imagem no corpo do
      // texto (são notas só de texto) — filtra antes de limitar a quantidade,
      // senão a maioria dos cards exibidos ficaria sem foto.
      .filter((article) => article.image !== undefined)

    return articles.slice(0, MAX_ITEMS)
  } catch (error) {
    console.error('[microsoft-news-feed] Falha ao buscar/parsear o feed:', error)
    return []
  }
}
