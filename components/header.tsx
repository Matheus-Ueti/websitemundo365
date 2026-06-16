'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Instagram, Linkedin, Menu, X } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { LanguageSwitcher } from '@/i18n/components/language-switcher'
import { SECTION_IDS, sectionHref } from '@/lib/constants/sections'

const MOBILE_MENU_ID = 'mobile-nav-menu'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')

  const mainNavItems = [
    { label: t('home'), href: sectionHref(SECTION_IDS.home) },
    { label: t('about'), href: sectionHref(SECTION_IDS.about) },
    { label: t('solutions'), href: sectionHref(SECTION_IDS.solutions) },
    { label: t('newsletter'), href: sectionHref(SECTION_IDS.news) },
    { label: t('contact'), href: sectionHref(SECTION_IDS.contact) },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" aria-label={tCommon('homeAria')}>
            <Image
              src="/mundo365-logo.png"
              alt="Mundo365"
              width={160}
              height={50}
              className="brightness-0 invert"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center" aria-label={tCommon('navMain')}>
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1.5 border border-white/20">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:bg-white/10 transition-colors text-sm font-medium px-4 py-1.5 rounded-full"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-1">
              <Link
                href="https://www.linkedin.com/company/empresamundo365/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/90 hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </Link>
              <Link
                href="https://www.instagram.com/mundo365br/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/90 hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </Link>
            </div>

            <LanguageSwitcher />
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            aria-label={isMenuOpen ? tCommon('closeMenu') : tCommon('openMenu')}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id={MOBILE_MENU_ID}
            className="md:hidden py-4 border-t border-white/20 bg-purple-900/90 backdrop-blur-md rounded-b-2xl"
          >
            <nav className="flex flex-col gap-2" aria-label={tCommon('navMain')}>
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:bg-white/10 transition-colors text-sm font-medium py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex justify-center px-4">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
