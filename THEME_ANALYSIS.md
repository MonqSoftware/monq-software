
# Análise do Problema de Troca de Tema

## 1. Diagnóstico

O sistema de troca de tema (claro/escuro) está implementado corretamente em termos de lógica. O `next-themes` está configurado para adicionar a classe `.dark` ou `.light` ao elemento `<html>`, e o componente `ThemeToggle` funciona como esperado para alternar entre os temas.

O problema central é que **os estilos do site não estão utilizando as variáveis de tema do Tailwind CSS**. Em vez disso, as cores estão "hardcoded" com valores hexadecimais diretamente nas classes do Tailwind (ex: `bg-[#0D0D0D]`, `text-[#F2F2F0]`).

O Tailwind, por padrão, não sabe como inverter ou alterar esses valores fixos quando o modo escuro é ativado. Para que a troca de tema funcione, devemos usar as classes de cores semânticas definidas na configuração do Tailwind, como `bg-background`, `text-foreground`, `bg-primary`, etc.

## 2. Evidências

- **`tailwind.config.ts`**: A configuração `darkMode: ["class"]` está correta. As cores semânticas (`background`, `foreground`, `card`, `primary`, etc.) estão definidas usando variáveis CSS (`hsl(var(--...))`). Isso é o padrão do `shadcn/ui` e está correto.
- **`app/globals.css`**: (Análise inferida) Este arquivo deve conter as definições das variáveis CSS para os temas claro e escuro (ex: `--background`, `--foreground`). Se não contiver, esse é um ponto a ser corrigido.
- **Componentes (`*.tsx`)**: A maioria dos componentes, como `header.tsx`, `footer.tsx`, e as seções, usam classes com cores "hardcoded".
  - **Exemplo em `header.tsx`**: `className="bg-[#00010D]/90 backdrop-blur-md shadow-lg"`
  - **Correção sugerida**: `className="bg-background/90 backdrop-blur-md shadow-lg dark:bg-background/90"`

## 3. Plano de Ação

Para corrigir o problema e habilitar a troca de temas, precisamos seguir os seguintes passos:

### Passo 1: Verificar e Definir as Variáveis de Cor Globais

Precisamos garantir que o arquivo `app/globals.css` contenha as variáveis de cor para os temas claro e escuro. O `shadcn/ui` geralmente gera isso automaticamente. Se não estiver lá, precisaremos adicioná-lo.

**Ação:**
1.  Ler o arquivo `app/globals.css`.
2.  Verificar se as variáveis de cor para `:root` (tema claro) e `.dark` (tema escuro) estão definidas.
3.  Se não estiverem, adicionar as definições de cor padrão do `shadcn/ui`.

### Passo 2: Refatorar Componentes para Usar Cores Semânticas

Esta é a parte principal do trabalho. Precisamos percorrer todos os componentes e substituir as cores "hardcoded" pelas classes de tema do Tailwind.

**Estratégia de Substituição:**

| Cor "Hardcoded" (Aproximada) | Classe Tailwind Sugerida                               | Descrição                               |
| ---------------------------- | ------------------------------------------------------ | ----------------------------------------- |
| `bg-[#00010D]`, `bg-[#0D0D0D]` | `bg-background`                                        | Cor de fundo principal.                   |
| `bg-[#0D0D0D]` (em cards)    | `bg-card`                                              | Cor de fundo para elementos de card.      |
| `text-[#F2F2F0]`             | `text-foreground`                                      | Cor de texto principal.                   |
| `text-[#8C8C88]`             | `text-muted-foreground`                                | Cor de texto secundário/silenciado.       |
| `border-[#595956]/20`        | `border-border`                                        | Cor da borda.                             |
| `bg-[#595956]/20`            | `bg-accent` ou `bg-secondary`                          | Cor de destaque para fundos.              |
| Cores de botões e badges     | `bg-primary`, `text-primary-foreground`, `destructive` | Cores para elementos interativos e de UI. |

**Ação:**
1.  Listar todos os arquivos `.tsx` (exceto a pasta `components/ui` por enquanto).
2.  Para cada arquivo, usar a ferramenta `replace` para substituir sistematicamente as cores "hardcoded" pelas classes semânticas.
3.  Começar pelos componentes de layout (`header.tsx`, `footer.tsx`) e depois passar para as seções.

### Passo 3: Testar e Refinar

Após a refatoração, precisamos testar a aplicação para garantir que a troca de tema funcione visualmente e que não haja regressões.

**Ação:**
1.  Executar o servidor de desenvolvimento (`yarn dev`).
2.  Verificar visualmente a aparência dos temas claro e escuro.
3.  Ajustar classes conforme necessário se alguma cor não parecer correta.

Este plano nos guiará para uma implementação robusta e funcional da troca de temas.
