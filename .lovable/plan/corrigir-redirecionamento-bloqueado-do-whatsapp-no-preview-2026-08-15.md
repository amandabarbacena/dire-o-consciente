# Corrigir redirecionamento bloqueado do WhatsApp no preview

## O problema

O usuário clicou em um botão da landing page e, em vez de abrir o WhatsApp, o navegador mostrou uma página de erro:

`api.whatsapp.com recusou estabelecer ligação. ERR_BLOCKED_BY_RESPONSE`

## Diagnóstico confirmado

- A configuração do link está correta em `src/config/site.ts`:

```text
- WHATSAPP_NUMBER: 5561983398920
- URL final: https://wa.me/5561983398920?text=...
```

- O componente CTA em `src/routes/index.tsx` já usa `target="_blank"` e `rel="noopener noreferrer"`.
- O usuário confirmou que clicou **dentro do preview do Lovable** e que o erro apareceu **em uma nova aba**.

Isso indica que o bloqueio é causado pelo ambiente de preview do Lovable (que roda em iframe com políticas de sandbox). O `wa.me` redireciona para `api.whatsapp.com`, e os headers de segurança do WhatsApp não permitem que essa navegação seja iniciada a partir desse contexto. Em um site publicado em domínio próprio, o mesmo link funciona normalmente.

## O que vamos fazer

Tornar o redirecionamento do WhatsApp mais robusto no preview, mantendo a página limpa (sem exibir o número) e a experiência de conversão intacta no ambiente publicado.

1. **Revisar o componente CTA** em `src/routes/index.tsx` e adicionar um `onClick` que abra o link via `window.open(whatsappUrl, "_blank", "noopener,noreferrer")`. Isso reduz a chance de o navegador tratar a navegação como parte do iframe de preview.
2. **Manter o `<a href>`** como fallback semântico e acessível, sem exibir o número do WhatsApp na interface.
3. **Garantir que todos os CTAs da página** usem o componente centralizado (`CTA`), verificando se há algum link hardcoded.
4. **Validar no preview** se o novo comportamento resolve o bloqueio ou se é necessário testar a URL alternativa `https://api.whatsapp.com/send?phone=...`.

## Resultado esperado

- O botão continua abrindo o WhatsApp quando possível.
- O número do WhatsApp não aparece visualmente na página.
- A landing page publicada permanece convertendo normalmente via `wa.me`.

## Decisão

Aprovar a correção para que eu possa aplicar a mudança no componente CTA.
