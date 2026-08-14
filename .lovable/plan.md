# Nova copy de vendas para a SDT

A estrutura atual explica o que é a SDT, mas fala pouco da dor viva da persona e quase nada do desejo. A página vira uma página de vendas de verdade: dor concreta → por que nada do que ela já tentou resolveu → o que a SDT entrega → como funciona → quem conduz → objeções → CTA.

Sem preço na página (valor só no WhatsApp) e sem depoimentos, números ou promessas de resultado, respeitando as normas do CFP.

## Nova estrutura de seções

1. **Hero — a dor em uma frase**
   Headline nova, focada em exaustão mental que não desliga:
   "Você dá conta de tudo. O problema é que tudo continua dependendo de você."
   Subheadline: encontro único, online, ~60 min, com uma direção prática por escrito em até 48 horas para a hora em que o padrão aparece.
   CTA + microcopy (online · ~60 min · documento em até 48h).

2. **A cena da exaustão (dor)**
   Descrição concreta do dia: antecipar, monitorar, corrigir, refazer. A cabeça que continua trabalhando depois que o dia acabou. Fechamento: "não é falta de capacidade — é o custo de ser a central de controle de tudo."

3. **Talvez você se reconheça aqui**
   Lista curta e específica (delegar e conferir, "deixa que eu faço", não descansar com pendência aberta, perceber o erro antes de todos, já entender o padrão e mesmo assim repetir).

4. **Por que entender não bastou**
   Nomeia o que ela já tentou: ler, ouvir, conversar, até terapia. Falta a tradução para a hora exata em que o impulso aparece. Aqui entra a disassociação com terapia tradicional, agora como argumento de venda e não como aviso.

5. **O que muda depois (desejo)**
   Duas colunas em contraste, sem prometer cura:
   Hoje: mente em alerta · tudo depende dela · impulso de resolver · microgestão · descanso administrado.
   O caminho: distinguir o que realmente depende dela · tolerar que o outro faça diferente · escolher quando intervir em vez de agir no automático · usar a competência sem ser obrigada a sustentar tudo.
   Nota honesta: a SDT entrega o primeiro passo concreto desse caminho — ver onde o ciclo se forma e como começar a interrompê-lo.

6. **O que é a SDT (a oferta)**
   Bloco de oferta explícito: encontro clínico único de ~60 min + mapeamento individual do padrão + direção prática registrada por escrito em até 48h, sua para consultar quando o padrão aparecer. Deixa claro que é completa em si mesma, sem triagem e sem exigência de continuidade.

7. **O que você leva do encontro**
   Itens do que ela sai sabendo: o gatilho do ciclo, o que sustenta o padrão, o que observar, o que interromper, por onde começar nos próximos dias.

8. **Como funciona** — 3 passos (WhatsApp → encontro → documento). Mantido, com textos mais curtos.

9. **Para quem é / para quem não é**
   Filtro que qualifica a lead e derruba objeção antes do WhatsApp.

10. **Quem conduz** — Amanda, com o repertório corporativo + clínico ligado à dor da persona (mulheres que gerenciam tudo).

11. **FAQ** — reescrito para as objeções reais: "isso é terapia?", "e se eu já faço terapia?", "resolve em uma sessão?", "e se eu quiser continuar?", "como funciona o agendamento?", "o documento é personalizado mesmo?", "vou ter que contar minha vida toda?".

12. **Fechamento + CTA** e footer com aviso ético e CRP (mantidos).

## Detalhes técnicos

- Alteração restrita a `src/routes/index.tsx` (copy, arrays de conteúdo e estrutura das seções) e ao `head()` da rota com title/description alinhados à nova promessa.
- Design system, paleta sálvia/creme, tipografia e as três imagens atuais são mantidos; as novas seções reutilizam os estilos já existentes (`eyebrow`, blocos `bg-sand`/`bg-ink`, componente `CTA`).
- IDs de CTA preservados para tracking: `cta-whatsapp-hero`, `cta-whatsapp-middle`, `cta-whatsapp-final`, `cta-whatsapp-sticky`. Um CTA extra depois da seção de oferta usa um novo id `cta-whatsapp-oferta`.
- Nenhum preço, depoimento, estatística ou promessa de resultado na página.
