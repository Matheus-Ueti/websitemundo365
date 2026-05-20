# Mundo365 — Landing Page

Site institucional da **Mundo365**, maior revendedora oficial Microsoft do Brasil, parceira Gold e Solutions Partner nas categorias Modern Work, Infrastructure (Azure) e Inteligência Artificial.

## Stack

| Tecnologia | Versão |
|---|---|
| Next.js | 16.2.6 |
| React | 19 |
| TypeScript | 5.7.3 |
| Tailwind CSS | 4.x |
| Vercel Analytics | 1.6.x |

## Pré-requisitos

- Node.js 20+
- npm 10+

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Estrutura

```
app/              # Rotas e layout (Next.js App Router)
components/       # Seções da landing page
  header.tsx
  hero-section.tsx
  stats-section.tsx
  solutions-section.tsx
  partner-banner.tsx
  certifications-section.tsx
  testimonials-section.tsx
  partners-section.tsx
  newsletter-section.tsx
  footer.tsx
public/           # Assets estáticos (logos, imagens)
types/            # Tipagens TypeScript centralizadas
```

## Deploy

O projeto é otimizado para deploy na [Vercel](https://vercel.com). Cada push na branch `main` aciona o deploy automático.
