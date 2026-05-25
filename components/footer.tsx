import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react"
import type { NavItem, SocialLink } from "@/types"

const footerLinks: { services: NavItem[]; links: NavItem[] } = {
  services: [
    { label: "Backup gerenciado", href: "#" },
    { label: "Business Intelligence", href: "#" },
    { label: "Planejamento e migração", href: "#" },
    { label: "Adoção e treinamento", href: "#" },
    { label: "Área de trabalho virtual", href: "#" },
  ],
  links: [
    { label: "Início", href: "#" },
    { label: "Sobre nós", href: "#sobre" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Notícias", href: "#noticias" },
    { label: "Contato", href: "#contato" },
  ],
}

const socialLinks: SocialLink[] = [
  { icon: Instagram, href: "https://www.instagram.com/mundo365br/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/empresamundo365/", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer id="contato" className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Fale conosco</h4>
            <div className="space-y-4">
              <a href="tel:+554532567890" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span>+55 (45) 3256-7890</span>
              </a>
              <a href="mailto:contato@mundo365.com.br" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span>contato@mundo365.com.br</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Cascavel - PR, Brasil</span>
              </div>
            </div>
            
            {/* Social Links */}
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

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Links Úteis</h4>
            <ul className="space-y-3">
              {footerLinks.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/mundo365-logo.png"
                alt="Mundo365"
                width={140}
                height={44}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Há mais de 11 anos transformando empresas com soluções Microsoft de ponta. 
              Sua parceira de confiança em tecnologia.
            </p>

            <div className="mt-6 flex items-center gap-3 bg-slate-800 rounded-lg px-4 py-3 w-fit">
              <Image
                src="/azure-logo.svg"
                alt="Microsoft Azure"
                width={28}
                height={28}
              />
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider leading-none mb-0.5">Parceiro</p>
                <p className="text-white text-sm font-semibold leading-none">Microsoft Azure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Mundo365. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-slate-300 transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-slate-300 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
