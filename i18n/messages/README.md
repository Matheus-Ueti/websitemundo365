# Textos do site

Todos os textos visíveis da landing page ficam aqui (`pt.json`, `en.json`, `es.json`).

## Arquivos

| Arquivo   | Idioma    | URL no site |
| --------- | --------- | ----------- |
| `pt.json` | Português | `/`         |
| `en.json` | English   | `/en`       |
| `es.json` | Español   | `/es`       |

## Como alterar um texto

1. Encontre a chave em `pt.json` (ex.: `"hero"` → `"titleBefore"`).
2. Altere o valor em **os três arquivos** com a mesma chave.
3. Salve e recarregue o `npm run dev`.

## Regras importantes

- **Não apague chaves** em um idioma sem apagar nos outros (a estrutura deve ser igual).
- **Não mude** os `id` em `solutions.items` nem os `id` numéricos em `testimonials.items`.
- Listas longas (soluções, depoimentos, estatísticas) estão em `*.items` — copie o bloco inteiro ao adicionar um item novo.
- Telefone e e-mail fixos: `lib/site.ts` (não mudam por idioma; WhatsApp usa chave `whatsapp.whatsappMessage` nos JSON).

## Dúvida rápida: “onde está o menu?”

Chaves em `nav`: `home`, `about`, `solutions`, `newsletter`, `contact`.

Configuração de idiomas (rotas, middleware, seletor PT/EN/ES): pasta pai [`../`](../README.md).
