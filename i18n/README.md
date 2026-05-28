# Internacionalização (i18n)

Tudo relacionado a idiomas do site fica nesta pasta.

## Estrutura

```
i18n/
├── README.md              # Este arquivo
├── routing.ts             # Locales, prefixo de URL (pt / en / es)
├── request.ts             # Carrega messages por locale (next-intl)
├── navigation.ts            # Link e usePathname com locale
├── middleware.ts            # Redirecionamento de idioma
├── timeline.ts              # Timeline “Sobre nós” (texto JSON + ícones)
├── messages/                # ← TEXTOS (pt.json, en.json, es.json)
│   └── README.md
└── components/
    └── language-switcher.tsx  # Botões PT / EN / ES
```

## O que fica fora (obrigatório do Next.js)

| Caminho | Motivo |
|---------|--------|
| `middleware.ts` (raiz) | Next exige `config` na raiz; importa handler de `i18n/middleware.ts` |
| `app/[locale]/` | App Router — URLs `/`, `/en`, `/es` |
| `types/index.ts` | `LOCALES`, `Locale` (hub de tipos do projeto) |

## Edição rápida

| Tarefa | Onde |
|--------|------|
| Mudar texto da página | [`messages/`](messages/) |
| Adicionar idioma | `routing.ts`, `request.ts`, novo `messages/xx.json`, `types` → `LOCALES` |
| Menu de idiomas | `components/language-switcher.tsx` |

Plugin: `next.config.mjs` → `createNextIntlPlugin("./i18n/request.ts")`.
