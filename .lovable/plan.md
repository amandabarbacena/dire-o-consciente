# Corrigir redirecionamento bloqueado do WhatsApp

## O problema

O usuário clicou em um botão da landing page e, em vez de abrir o WhatsApp, o navegador mostrou uma página de erro:

`api.whatsapp.com recusou estabelecer ligação. ERR_BLOCKED_BY_RESPONSE`

## Diagnóstico preliminar

A configuração do link está correta em `src/config/site.ts`:

```text
- WHATSAPP_NUMBER: 5561983398920
- URL final: https://wa.me/5561983398920?text=...
```

O componente CTA em `src/routes/index.tsx` já usa `target="_blank"` e `rel="noopener noreferrer"`, o que é a prática recomendada.

Esse erro (`ERR_BLOCKED_BY_RESPONSE`) geralmente acontece quando a URL de destino (neste caso, `api.whatsapp.com`, para onde o `wa.me` redireciona) é carregada dentro de um contexto que os headers de segurança dela não permitem — comum em previews que rodam dentro de iframes. Publicado em um domínio próprio, o link normalmente funciona normalmente.

## O que vamos fazer

Tornar o redirecionamento do WhatsApp mais resistente a ambientes de preview e iframe, sem alterar o destino final.

1. **Revisar o componente CTA** em `src/routes/index.tsx` e garantir que a abertura seja tratada como navegação de top-level, não como carregamento dentro do frame.
2. **Adicionar um manipulador de clique** que use `window.open(whatsappUrl, "_blank")` explicitamente, reduzindo a chance de o navegador interpretar o link como carregamento dentro de iframe/preview.
3. **Manter o `<a href>` original** como fallback semântico e para acessibilidade, mas delegar a navegação para o manipulador.
4. **Verificar se todos os CTAs da página** usam o componente centralizado e corrigir qualquer instância com link hardcoded.
5. **Validar no preview** se o erro desaparece e o WhatsApp abre corretamente.

## O que preciso de você

- Você clicou no link dentro do preview do Lovable ou em uma versão publicada/domínio próprio?
- O erro apareceu no mesmo navegador da preview ou abriu uma nova aba com essa mensagem?

Com essas informações confirmamos se o problema é exclusivo do ambiente de preview ou se precisamos de uma estratégia de link diferente.
