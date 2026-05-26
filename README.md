# Mundo365 — Landing Page

Site institucional da **Mundo365**, maior revendedora oficial Microsoft do Sul do Brasil. Parceira Gold e Solutions Partner nas categorias Modern Work, Infrastructure (Azure) e Inteligência Artificial — com mais de 11 anos de mercado e vencedora do **Top Growth Awards 2026** da TD SYNNEX & Microsoft.

---

## Visão geral

Landing page institucional moderna, desenvolvida com foco em:

- Performance e SEO (Static Generation via Next.js App Router)
- Clean Code, TypeScript estrito e arquitetura escalável
- Design premium inspirado em Microsoft Fluent Design e SaaS de alto padrão
- Segurança com headers HTTP configurados (`CSP`, `HSTS`, `X-Frame-Options`)

---

## Stack

| Tecnologia | Versão |
|---|---|
| [Next.js](https://nextjs.org/) | 16.2.6 |
| [React](https://react.dev/) | 19 |
| [TypeScript](https://www.typescriptlang.org/) | 5.7.3 |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x |
| [Lucide React](https://lucide.dev/) | 0.564.x |
| [Vercel Analytics](https://vercel.com/analytics) | 1.6.x |

---

## Pré-requisitos

- Node.js **20+**
- npm **10+**

---

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Problema: "Another next dev server is already running" ou Internal Server Error

Isso **não é bug no código** — acontece quando há **mais de um** `npm run dev` rodando no mesmo projeto, ou quando a pasta `.next` foi apagada com o servidor ainda ativo.

**Solução (Windows):**

```bash
npm run dev:clean
npm run dev
```

Use **apenas uma** aba/terminal com `npm run dev`. Feche os outros com Ctrl+C antes de iniciar de novo.

## Build de produção

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

---

## Estrutura do projeto

```
Mundo365L/
├── app/
│   ├── layout.tsx          # Layout raiz — fontes, metadata, Analytics
│   └── page.tsx            # Página principal — composição das seções
├── components/
│   ├── header.tsx              # Navbar com menu mobile
│   ├── hero-section.tsx        # Hero com ilustração SVG animada e logo Azure
│   ├── solutions-section.tsx   # Tabs de soluções com imagem e floating cards
│   ├── stats-section.tsx       # Contadores animados com IntersectionObserver
│   ├── partner-banner.tsx      # Banner Microsoft Solutions Partner
│   ├── certifications-section.tsx  # Certificações com foto do prêmio e grid de competências
│   ├── testimonials-section.tsx    # Depoimentos com sidebar de clientes
│   ├── partners-section.tsx    # Logos dos parceiros (Acronis, Adobe, Fortinet, etc.)
│   ├── newsletter-section.tsx  # Formulário de newsletter
│   └── footer.tsx              # Rodapé com links, contato e redes sociais
├── public/
│   ├── mundo365-logo.png       # Logo principal
│   ├── azure-logo.svg          # Logo Microsoft Azure
│   ├── award-winner.png        # Foto Top Growth Awards 2026
│   ├── logo-acronis.png
│   ├── logo-adobe.png
│   ├── logo-fortinet.png
│   ├── logo-kaspersky.png
│   ├── logo-microsoft.svg
│   └── logo-veeam.png
├── styles/
│   └── globals.css             # Tailwind + tokens CSS (design system)
├── types/
│   └── index.ts                # Tipagens TypeScript centralizadas
└── next.config.mjs             # Security headers + remotePatterns
```

---

## Seções da Landing Page

| Seção | Descrição |
|---|---|
| **Header** | Navegação com menu responsivo e seletor de idioma |
| **Hero** | Chamada principal com ilustração de dashboard e logo Azure |
| **Soluções** | Modern Workplace, Cyber Security, Cloud, Power Platform, Serviços |
| **Estatísticas** | 5.000+ clientes, 150+ projetos, 100 prêmios (counter animado) |
| **Partner Banner** | Microsoft Solutions Partner — Modern Work e Infrastructure |
| **Certificações** | Foto Top Growth Awards 2026 + grid de competências Microsoft |
| **Depoimentos** | Sidebar com clientes reais (Campseg, Hospital São Lucas, JDB) |
| **Parceiros** | Logos de Acronis, Adobe, Fortinet, Kaspersky, Microsoft, Veeam |
| **Newsletter** | Formulário de captura de e-mail |
| **Footer** | Contato, links, Instagram, LinkedIn e logo Azure Partner |

---

## Segurança

Headers HTTP configurados em `next.config.mjs`:

- `Content-Security-Policy` — diferenciado por ambiente (dev/prod)
- `Strict-Transport-Security` — HSTS com preload
- `X-Frame-Options` — proteção contra clickjacking
- `X-Content-Type-Options` — bloqueio de MIME sniffing
- `Referrer-Policy` — controle de referência
- `Permissions-Policy` — desativa câmera, microfone e geolocalização

---

## Deploy

Otimizado para deploy na [Vercel](https://vercel.com). Cada push na branch `main` aciona deploy automático.

```bash
# Deploy de preview
npx vercel

# Deploy de produção
npx vercel --prod
```

---

## Redes sociais

- Instagram: [@mundo365br](https://www.instagram.com/mundo365br/)
- LinkedIn: [empresamundo365](https://www.linkedin.com/company/empresamundo365/)
- Site: [mundo365.com.br](http://www.mundo365.com.br/)
