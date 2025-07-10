## Plano de Ação: Ajuste de Tema para Variáveis Globais

Este documento detalha as modificações necessárias nos arquivos `.tsx` para garantir que o tema (claro/escuro) seja aplicado corretamente usando as variáveis CSS do Tailwind. O objetivo é substituir cores hardcoded por classes Tailwind que utilizam as variáveis CSS definidas em `app/globals.css`.

---

### `app/page.tsx`

**Status:** ✅ Atualizado

**Modificações Propostas:**

| Tipo de Alteração | `old_string` | `new_string` |
| :---------------- | :----------- | :----------- |
| Cor de Fundo      | `bg-[#00010D]` | `bg-background` |

---

### `components/layout/footer.tsx`

**Status:** ✅ Atualizado

**Modificações Propostas:**

| Tipo de Alteração | `old_string` | `new_string` |
| :---------------- | :----------- | :----------- |
| Cor de Fundo      | `bg-[#0D0D0D]` | `bg-card` |
| Borda             | `border-[#595956]/20` | `border-border/20` |
| Cor de Texto      | `text-[#F2F2F0]` | `text-foreground` |
| Cor de Texto      | `text-[#8C8C88]` | `text-muted-foreground` |
| Cor de Texto      | `hover:text-[#F2F2F0]` | `hover:text-foreground` |

---

### `components/layout/header.tsx`

**Status:** ✅ Atualizado

**Modificações Propostas:**

| Tipo de Alteração | `old_string` | `new_string` |
| :---------------- | :----------- | :----------- |
| Cor de Fundo      | `bg-[#00010D]/90` | `bg-background/90` |
| Cor de Texto      | `text-[#F2F2F0]` | `text-foreground` |
| Cor de Texto      | `text-[#8C8C88]` | `text-muted-foreground` |
| Cor de Fundo      | `bg-[#595956]` | `bg-primary` |
| Cor de Fundo      | `bg-[#0D0D0D]` | `bg-card` |
| Cor de Fundo      | `bg-[#595956]/20` | `bg-accent/20` |
| Cor de Fundo      | `hover:bg-[#595956]/10` | `hover:bg-accent/10` |

---

### `components/sections/contact.tsx`

**Status:** ❌ Pendente

**Modificações Propostas:**

| Tipo de Alteração | `old_string` | `new_string` |
| :---------------- | :----------- | :----------- |
| Cor de Fundo      | `bg-[#00010D]` | `bg-background` |
| Cor de Texto      | `text-[#F2F2F0]` | `text-foreground` |
| Cor de Texto      | `text-[#8C8C88]` | `text-muted-foreground` |
| Cor de Fundo      | `bg-[#0D0D0D]` | `bg-card` |
| Borda             | `border-[#595956]/20` | `border-border/20` |
| Sombra            | `shadow-[#595956]/10` | `shadow-foreground/10` |
| Borda             | `border-[#595956]/40` | `border-border/40` |
| Cor de Fundo      | `hover:bg-[#595956]/20` | `hover:bg-accent/20` |

---

### `components/sections/hero.tsx`

**Status:** ❌ Pendente

**Modificações Propostas:**

| Tipo de Alteração | `old_string` | `new_string` |
| :---------------- | :----------- | :----------- |
| Cor de Texto      | `text-[#F2F2F0]` | `text-foreground` |
| Cor de Texto      | `text-[#8C8C88]` | `text-muted-foreground` |
| Cor de Fundo      | `bg-[#595956]` | `bg-primary` |
| Cor de Fundo      | `hover:bg-[#595956]/80` | `hover:bg-primary/80` |
| Borda             | `border-[#595956]` | `border-primary` |
| Cor de Fundo      | `hover:bg-[#595956]/20` | `hover:bg-accent/20` |
| Cor de Fundo      | `backgroundColor: "#595956"` | `backgroundColor: "hsl(var(--primary))"` |
| Cor de Fundo      | `bg-gradient-to-b from-[#00010D] via-[#00010D]/95 to-[#00010D]` | `bg-gradient-to-b from-background via-background/95 to-background` |

---

### `components/sections/process.tsx`

**Status:** ❌ Pendente

**Modificações Propostas:**

| Tipo de Alteração | `old_string` | `new_string` |
| :---------------- | :----------- | :----------- |
| Cor de Fundo      | `bg-[#0D0D0D]` | `bg-card` |
| Cor de Texto      | `text-[#F2F2F0]` | `text-foreground` |
| Cor de Texto      | `text-[#8C8C88]` | `text-muted-foreground` |
| Cor de Fundo      | `bg-[#00010D]` | `bg-background` |
| Borda             | `border-[#595956]/20` | `border-border/20` |
| Cor de Fundo      | `hover:bg-[#00010D]/80` | `hover:bg-background/80` |
| Cor de Fundo      | `bg-[#595956]` | `bg-primary` |

---

### `components/sections/projects.tsx`

**Status:** ❌ Pendente

**Modificações Propostas:**

| Tipo de Alteração | `old_string` | `new_string` |
| :---------------- | :----------- | :----------- |
| Cor de Fundo      | `bg-[#0D0D0D]` | `bg-card` |
| Cor de Texto      | `text-[#F2F2F0]` | `text-foreground` |
| Cor de Texto      | `text-[#8C8C88]` | `text-muted-foreground` |
| Cor de Fundo      | `bg-[#00010D]` | `bg-background` |
| Borda             | `border-[#595956]/20` | `border-border/20` |
| Sombra            | `shadow-[0_0_20px_rgba(255,255,255,0.1)]` | `shadow-[0_0_20px_rgba(var(--foreground),0.1)]` |
| Cor de Fundo      | `bg-[#ff0000]/10` | `bg-destructive/10` |
| Cor de Texto      | `text-[#ff0000]` | `text-destructive` |
| Borda             | `border-[#ff0000]/40` | `border-destructive/40` |
| Cor de Fundo      | `hover:bg-[#ff0000]/20` | `hover:bg-destructive/20` |
| Cor de Ícone      | `text-[#00ffff]` | `text-accent` |

---

### `components/sections/services.tsx`

**Status:** ❌ Pendente

**Modificações Propostas:**

| Tipo de Alteração | `old_string` | `new_string` |
| :---------------- | :----------- | :----------- |
| Cor de Fundo      | `bg-[#00010D]` | `bg-background` |
| Cor de Texto      | `text-[#F2F2F0]` | `text-foreground` |
| Cor de Texto      | `text-[#8C8C88]` | `text-muted-foreground` |
| Cor de Fundo      | `bg-[#0D0D0D]` | `bg-card` |
| Borda             | `border-[#595956]/20` | `border-border/20` |
| Cor de Fundo      | `hover:bg-[#0D0D0D]/80` | `hover:bg-card/80` |
| Cor de Fundo      | `bg-[#595956]/20` | `bg-accent/20` |
| Cor de Fundo      | `group-hover:bg-[#595956]/40` | `group-hover:bg-accent/40` |

---

### `components/sections/stats.tsx`

**Status:** ❌ Pendente

**Modificações Propostas:**

| Tipo de Alteração | `old_string` | `new_string` |
| :---------------- | :----------- | :----------- |
| Cor de Fundo      | `bg-[#0D0D0D]` | `bg-card` |
| Cor de Fundo      | `bg-[#00010D]` | `bg-background` |
| Cor de Texto      | `text-[#F2F2F0]` | `text-foreground` |
| Cor de Texto      | `text-[#595956]` | `text-primary` |
| Cor de Texto      | `text-[#8C8C88]` | `text-muted-foreground` |
| Borda             | `border-[#595956]/20` | `border-border/20` |

---

### `components/sections/team.tsx`

**Status:** ❌ Pendente

**Modificações Propostas:**

| Tipo de Alteração | `old_string` | `new_string` |
| :---------------- | :----------- | :----------- |
| Cor de Fundo      | `bg-[#00010D]` | `bg-background` |
| Cor de Texto      | `text-[#F2F2F0]` | `text-foreground` |
| Cor de Texto      | `text-[#8C8C88]` | `text-muted-foreground` |
| Cor de Fundo      | `bg-[#0D0D0D]` | `bg-card` |
| Borda             | `border-[#595956]/20` | `border-border/20` |
| Cor de Fundo      | `bg-gradient-to-t from-[#00010D]` | `bg-gradient-to-t from-background` |
| Cor de Fundo      | `bg-[#595956]/20` | `bg-accent/20` |
| Cor de Borda      | `from-[#ff0000] to-[#00ffff]` | `from-destructive to-accent` |

---

### `components/ui/back-to-top.tsx`

**Status:** ❌ Pendente

**Modificações Propostas:**

| Tipo de Alteração | `old_string` | `new_string` |
| :---------------- | :----------- | :----------- |
| Cor de Fundo      | `bg-[#595956]` | `bg-primary` |
| Cor de Texto      | `text-[#F2F2F0]` | `text-primary-foreground` |
| Cor de Fundo      | `hover:bg-[#595956]/80` | `hover:bg-primary/80` |

---

### `components/ui/sidebar.tsx`

**Status:** ❌ Pendente

**Modificações Propostas:**

| Tipo de Alteração | `old_string` | `new_string` |
| :---------------- | :----------- | :----------- |
| Cor de Fundo      | `bg-sidebar` | `bg-background` |
| Cor de Texto      | `text-sidebar-foreground` | `text-foreground` |
| Cor de Borda      | `border-sidebar-border` | `border-border` |
| Cor de Fundo      | `hover:bg-sidebar-accent` | `hover:bg-accent` |
| Cor de Texto      | `hover:text-sidebar-accent-foreground` | `hover:text-accent-foreground` |
| Cor de Fundo      | `active:bg-sidebar-accent` | `active:bg-accent` |
| Cor de Texto      | `active:text-sidebar-accent-foreground` | `active:text-accent-foreground` |
| Cor de Fundo      | `data-[active=true]:bg-sidebar-accent` | `data-[active=true]:bg-accent` |
| Cor de Texto      | `data-[active=true]:text-sidebar-accent-foreground` | `data-[active=true]:text-accent-foreground` |
| Cor de Anel       | `ring-sidebar-ring` | `ring-ring` |
| Cor de Fundo      | `bg-sidebar-accent` | `bg-accent` |
| Cor de Texto      | `text-sidebar-accent-foreground` | `text-accent-foreground` |
| Cor de Borda      | `bg-sidebar-border` | `bg-border` |

---

### `components/ui/toast.tsx`

**Status:** ❌ Pendente

**Modificações Propostas:**

| Tipo de Alteração | `old_string` | `new_string` |
| :---------------- | :----------- | :----------- |
| Cor de Texto      | `text-red-300` | `text-destructive/70` |
| Cor de Texto      | `hover:text-red-50` | `hover:text-destructive-foreground/80` |
| Cor de Anel       | `focus:ring-red-400` | `focus:ring-destructive` |
| Cor de Anel       | `focus:ring-offset-red-600` | `focus:ring-offset-destructive` |