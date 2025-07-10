# Plano de Rebranding: Monq Software para TSALECH Engenharia

Este plano detalha as etapas necessárias para renomear a empresa de "Monq Software" para "TSALECH Engenharia" em todo o codebase, incluindo a atualização de referências textuais e gráficas para manter a coesão e responsividade.

## Novo Nome e Conceito

**TSALECH Engenharia**

- **T** — Tecnologia: O sucesso é construído com Tecnologia.
- **S** — Sustentabilidade: Uma empresa próspera pensa no futuro, buscando soluções que respeitam o meio ambiente e a sociedade.
- **A** — Aprendizado contínuo: Inovar e adaptar-se exige investir constantemente no desenvolvimento de pessoas e processos.
- **L** — Liderança inspiradora: Líderes que motivam, orientam e dão o exemplo são fundamentais para o crescimento saudável da empresa.
- **E** — Excelência: Buscar sempre a máxima qualidade em produtos, serviços e atendimento é essencial para prosperar.
- **C** — Criatividade: A capacidade de inovar, propor ideias e soluções originais mantém a empresa competitiva e relevante.
- **H** — Honestidade: Integridade e ética constroem confiança com clientes, parceiros e colaboradores, sustentando o sucesso a longo prazo.

## Ações Detalhadas

### 1. Substituição de Texto "Monq Software" por "TSALECH Engenharia"

| Arquivo | `old_string` | `new_string` | Observações | Status |
| :------ | :----------- | :----------- | :---------- | :----- |
| `app/layout.tsx` | `title: 'Monq Software',` | `title: 'TSALECH Engenharia',` | Título da página. | ✅ Concluído |
| `components/layout/footer.tsx` | `<span className="text-[#F2F2F0] font-medium">MONQ Software</span>` | `<span className="text-foreground font-medium">TSALECH Engenharia</span>` | Nome da empresa no rodapé. (Nota: `text-[#F2F2F0]` será `text-foreground` após a etapa de tema). | ✅ Concluído |
| `components/layout/footer.tsx` | `<p className="text-[#8C8C88] mb-4 md:mb-0">© 2025 MONQ Software. Todos os direitos reservados.</p>` | `<p className="text-muted-foreground mb-4 md:mb-0">© 2025 TSALECH Engenharia. Todos os direitos reservados.</p>` | Direitos autorais no rodapé. (Nota: `text-[#8C8C88]` será `text-muted-foreground` após a etapa de tema). | ✅ Concluído |
| `components/layout/header.tsx` | `<span className="text-[#F2F2F0] font-medium">MONQ Software</span>` | `<span className="text-foreground font-medium">TSALECH Engenharia</span>` | Nome da empresa no cabeçalho. (Nota: `text-[#F2F2F0]` será `text-foreground` após a etapa de tema). | ✅ Concluído |

### 2. Atualização de Referências Gráficas do Logotipo

O logotipo `monq-logo.png` será removido e substituído pelo nome da empresa ou por um placeholder textual, conforme a necessidade de cada componente.

| Arquivo | `old_string` | `new_string` | Observações | Status |
| :------ | :----------- | :----------- | :---------- | :----- |
| `components/layout/footer.tsx` | `<img src="/monq-logo.png" alt="MONQ Logo" className="w-8 h-8 rounded-full" />` | `<!-- Antigo logo MONQ -->` | Remover a imagem do logo. | ✅ Concluído |
| `components/layout/header.tsx` | `<img src="/monq-logo.png" alt="MONQ Logo" className="w-8 h-8 rounded-full" />` | `<!-- Antigo logo MONQ -->` | Remover a imagem do logo. | ✅ Concluído |
| `components/sections/hero.tsx` | `src="/monq-logo.png"` | `<!-- Antigo logo MONQ -->` | Remover a imagem do logo. | ✅ Concluído |

### 3. Outras Referências Gráficas e Textuais

| Arquivo | `old_string` | `new_string` | Observações | Status |
| :------ | :----------- | :----------- | :---------- | :----- |
| `components/sections/team.tsx` | `alt='Equipe MONQ Software'` | `alt='Equipe TSALECH Engenharia'` | Texto alternativo da imagem da equipe. | ✅ Concluído |

## Próximos Passos

1.  Executar as substituições de texto conforme a seção 1.
2.  Executar as atualizações de referências gráficas conforme a seção 2.
3.  Executar as outras referências conforme a seção 3.
4.  Realizar uma revisão completa do projeto para garantir que todas as referências à marca antiga foram removidas e que a nova marca está consistente.
5.  Testar a aplicação para garantir que todas as funcionalidades estão intactas e que a interface está visualmente coesa.