import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { SECTION_IDS, sectionHref } from '@/lib/constants/sections'
import { socialLinks } from '@/lib/constants/social'
import { siteConfig } from '@/lib/site'

export async function Footer() {
  const t = await getTranslations('footer')
  const tNav = await getTranslations('nav')
  const tContact = await getTranslations('contact')
  const tCommon = await getTranslations('common')
  const { contact } = siteConfig

  const mainNavItems = [
    { label: tNav('home'), href: sectionHref(SECTION_IDS.home) },
    { label: tNav('about'), href: sectionHref(SECTION_IDS.about) },
    { label: tNav('solutions'), href: sectionHref(SECTION_IDS.solutions) },
    { label: tNav('newsletter'), href: sectionHref(SECTION_IDS.news) },
    { label: tNav('contact'), href: sectionHref(SECTION_IDS.contact) },
  ]

  const serviceLinks = [
    { label: t('services.cybersecurity'), href: sectionHref(SECTION_IDS.solutions) },
    { label: t('services.cloud'), href: sectionHref(SECTION_IDS.solutions) },
    { label: t('services.ai'), href: sectionHref(SECTION_IDS.solutions) },
    { label: t('services.modernWorkplace'), href: sectionHref(SECTION_IDS.solutions) },
    { label: t('services.governance'), href: sectionHref(SECTION_IDS.solutions) },
  ]

  return (
    <footer id={SECTION_IDS.contact} className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t('contactTitle')}</h4>
            <div className="space-y-4">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" aria-hidden />
                <span>{contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" aria-hidden />
                <span>{contact.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden />
                <span>{tContact('location')}</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t('servicesTitle')}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t('linksTitle')}</h4>
            <ul className="space-y-3">
              {mainNavItems.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Link href="/" className="flex items-center mb-4" aria-label={tCommon('homeAria')}>
              <Image
                src="/mundo365-logo.png"
                alt="Mundo365"
                width={140}
                height={44}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">{t('tagline')}</p>

            <div className="mt-6 flex items-center gap-3 bg-slate-800 rounded-lg px-4 py-3 w-fit">
              <Image src="/azure-logo.svg" alt="" width={28} height={28} aria-hidden />
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider leading-none mb-0.5">
                  {tCommon('partner')}
                </p>
                <p className="text-white text-sm font-semibold leading-none">
                  {tCommon('microsoftAzure')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. {t('rights')}
            </p>
            <div className="flex gap-6">
              <Link
                href={sectionHref(SECTION_IDS.contact)}
                className="hover:text-slate-300 transition-colors"
              >
                {t('privacy')}
              </Link>
              <Link
                href={sectionHref(SECTION_IDS.contact)}
                className="hover:text-slate-300 transition-colors"
              >
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
