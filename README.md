# Alura challenge

# Projeto Next.js com Mantine, TypeScript e TanStack Query

Este projeto é uma aplicação frontend moderna construída com **Next.js (App Router)**, **Mantine UI**, **TypeScript** e **TanStack Query**, garantindo performance, escalabilidade e uma excelente experiência de desenvolvimento.  
Também utiliza **Biome** para linting/formatação e **Axios** para chamadas HTTP.

---

## Tecnologias

- [Next.js](https://nextjs.org/) — Framework React full-stack com suporte a SSR/SSG
- [Mantine](https://mantine.dev/) — Biblioteca de componentes React moderna
- [TypeScript](https://www.typescriptlang.org/) — Tipagem estática para JavaScript
- [TanStack Query](https://tanstack.com/query/latest) — Gerenciamento de estado de dados do servidor
- [Axios](https://axios-http.com/) — Cliente HTTP baseado em Promises
- [Biome](https://biomejs.dev/) — Linter, formatter e ferramentas de qualidade de código

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Yarn](https://yarnpkg.com/)  

---

## Como rodar o projeto

```bash
# Instalar dependências
yarn install

# Rodar em modo desenvolvimento
yarn dev

# Rodar o linter e formatter
yarn biome check
yarn biome format

# Build de produção
yarn build

# Rodar build
yarn start
```

---

# Dificuldades
- Configurar o **QueryProvider** e o **Axios** para funcionarem em conjunto com o Next.js App Router, com isso estava tomando erro de **CORS** constantemente,

impossibilitando muitas vezes os testes de requisições e visualização do visual da tela.
- Utilizei o **Biome** para a formatação do código, para configurar tive uma dificuldade para ao salvar ele formatar o código automáticamente foi necessário incluir os comandos abaixo no settings.json do VsCode:

```json
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
    "source.organizeImports.biome": "explicit",
    "source.fixAll.biome": "explicit"
},
"[javascript]": {
    "editor.defaultFormatter": "biomejs.biome"
},
"[typescript]": {
    "editor.defaultFormatter": "biomejs.biome"
},
"[json]": {
    "editor.defaultFormatter": "biomejs.biome"
},
"[typescriptreact]": {
    "editor.defaultFormatter": "biomejs.biome"
},
"biome.suggestInstallingGlobally": false,
"chat.agent.enabled": false,
"editor.defaultFormatter": "biomejs.biome"
```
