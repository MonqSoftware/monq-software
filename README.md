# Site da Monq Software

Este repositório contém o código-fonte do site oficial da Monq Software, uma plataforma moderna e responsiva projetada para apresentar nossa expertise em engenharia de software, nosso processo de desenvolvimento ágil, nossa equipe talentosa e nossos projetos de sucesso.

## Sumário

- [Funcionalidades](#funcionalidades)
- [Módulos](#módulos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Funcionalidades

- **Design Responsivo:** Otimizado para visualização perfeita em vários dispositivos (desktop, tablet, celular).
- **Navegação Suave:** Cabeçalho fixo com rolagem suave para diferentes seções da página.
- **Seção Hero Dinâmica:** Introdução envolvente com partículas de fundo animadas.
- **Filosofia MONQ:** Destaca nossos valores centrais: Modularidade, Orquestração, Networking e Qualidade.
- **Vitrine da Equipe:** Perfis detalhados de nossos membros da equipe de especialistas, incluindo suas funções, descrições e principais habilidades.
- **Portfólio de Projetos:** Uma coleção curada de nossas soluções de software bem-sucedidas, detalhando suas descrições, tecnologias e impacto.
- **Serviços Abrangentes:** Visão clara de nossos serviços de engenharia de produtos, arquitetura de soluções e consultoria tecnológica.
- **Explicação do Processo Ágil:** Detalhamento passo a passo de nossa metodologia de desenvolvimento ágil.
- **Contato Fácil:** Opções de contato direto via e-mail e WhatsApp.
- **Botão Voltar ao Topo:** Navegação conveniente de volta ao topo da página.
- **Componentes de UI Modernos:** Utiliza um rico conjunto de componentes de UI reutilizáveis e acessíveis.
- **Otimizado para Desempenho:** Inclui Vercel Analytics e Speed Insights para monitoramento e melhoria de desempenho.

## Módulos

O site é estruturado em vários módulos e seções principais:

- **`app/`**: Contém as principais páginas do Next.js e o layout raiz.
  - `layout.tsx`: Define o layout global, metadados e integra Vercel Analytics e Speed Insights.
  - `page.tsx`: A página inicial principal, orquestrando todos os componentes de seção.

- **`components/`**: Componentes React reutilizáveis, categorizados:
  - **`layout/`**:
    - `header.tsx`: A barra de navegação fixa com logotipo, itens de menu e funcionalidade de menu móvel.
    - `footer.tsx`: O rodapé do site com informações da empresa, links de serviço e detalhes de contato.
  - **`sections/`**:
    - `contact.tsx`: A seção de contato com chamada para ação e métodos de contato.
    - `hero.tsx`: A principal seção introdutória com título, descrição e elementos animados.
    - `process.tsx`: Detalha as etapas do processo de desenvolvimento ágil.
    - `projects.tsx`: Exibe o portfólio de projetos anteriores.
    - `services.tsx`: Lista os principais serviços oferecidos pela Monq Software.
    - `stats.tsx`: Apresenta a filosofia MONQ e as principais habilidades da empresa.
    - `team.tsx`: Apresenta os membros da equipe e sua expertise.
  - **`ui/`**: Uma biblioteca abrangente de componentes de UI construídos com Shadcn/ui, incluindo (mas não se limitando a): `accordion`, `alert-dialog`, `button`, `card`, `carousel`, `dialog`, `dropdown-menu`, `form`, `input`, `label`, `select`, `sheet`, `sidebar`, `table`, `tabs`, `textarea`, `toast`, `tooltip`, etc.

- **`hooks/`**: Hooks React personalizados para funcionalidades específicas:
  - `use-mobile.tsx`: Detecta se o usuário está em um dispositivo móvel para ajustes responsivos.
  - `use-toast.ts`: Gerencia as notificações de toast.

- **`lib/`**: Funções utilitárias:
  - `utils.ts`: Auxiliar para combinar classes Tailwind CSS (`cn`).

- **`public/`**: Ativos estáticos como imagens (logotipos, fotos da equipe, placeholders) e o favicon.

- **`utils/`**: Arquivos de utilidade adicionais:
  - `animations.ts`: Define variantes do Framer Motion para animações consistentes em todo o site.
  - `constants.ts`: Armazena dados estáticos para serviços, habilidades, estatísticas e etapas do processo, centralizando o conteúdo.

## Tecnologias Utilizadas

- [**Next.js**](https://nextjs.org/) (Framework React)
- [**React**](https://react.dev/) (Biblioteca JavaScript para UI)
- [**TypeScript**](https://www.typescriptlang.org/) (Superset de JavaScript)
- [**Tailwind CSS**](https://tailwindcss.com/) (Framework CSS utility-first)
- [**Framer Motion**](https://www.framer.com/motion/) (Biblioteca de animação)
- [**Lucide React**](https://lucide.dev/) (Biblioteca de ícones)
- [**Shadcn/ui**](https://ui.shadcn.com/) (Componentes de UI reutilizáveis)
- [**Vercel Analytics**](https://vercel.com/analytics) & [**Vercel Speed Insights**](https://vercel.com/speed-insights) (Monitoramento de desempenho)
- **Yarn** (Gerenciador de Pacotes)

## Estrutura do Projeto

```
monq-software/
├── .gitignore
├── components.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── yarn.lock
├── .git/...
├── .next/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── theme-provider.tsx
│   ├── layout/
│   │   ├── footer.tsx
│   │   └── header.tsx
│   ├── sections/
│   │   ├── contact.tsx
│   │   ├── hero.tsx
│   │   ├── process.tsx
│   │   ├── projects.tsx
│   │   ├── services.tsx
│   │   ├── stats.tsx
│   │   └── team.tsx
│   └── ui/...
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── node_modules/...
├── public/
│   ├── favicon.ico
│   ├── monq-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder.svg
│   ├── assets/
│   │   ├── image-desc.jpg
│   │   └── place-holder.png
│   └── team/
│       ├── atila-almeida.jpg
│       ├── gabriel-pontes.jpg
│       ├── lucas-lima.jpg
│       └── mauricio-menezes.jpg
├── styles/
│   └── globals.css
└── utils/
    ├── animations.ts
    └── constants.ts
```

## Instalação

Para configurar o projeto localmente, siga estas etapas:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/your-username/monq-software.git
    cd monq-software
    ```

2.  **Instale as dependências:**
    Este projeto usa `yarn`.
    ```bash
    yarn install
    ```

## Uso

Para iniciar o servidor de desenvolvimento:

```bash
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Para construir o projeto para produção:

```bash
yarn build
```

Para iniciar o servidor de produção:

```bash
yarn start
```

## Contribuição

Aceitamos contribuições! Por favor, siga estas etapas:

1.  Faça um fork do repositório.
2.  Crie uma nova branch (`git checkout -b feature/sua-nova-funcionalidade`).
3.  Faça suas alterações.
4.  Commit suas alterações (`git commit -m 'feat: Adiciona nova funcionalidade'`).
5.  Envie para a branch (`git push origin feature/sua-nova-funcionalidade`).
6.  Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes. (Nota: Um arquivo `LICENSE` não está incluído na lista de arquivos fornecida, mas é uma boa prática mencioná-lo.)