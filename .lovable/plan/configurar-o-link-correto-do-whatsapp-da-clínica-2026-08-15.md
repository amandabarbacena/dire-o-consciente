# Configurar o link correto do WhatsApp da clínica

## O que vamos fazer
Atualizar o número de WhatsApp para o da clínica da Amanda Barbacena, garantindo que todos os botões e CTAs da landing page direcionem para o destino certo.

## Onde está a configuração hoje
O link do WhatsApp é gerado centralmente em `src/config/site.ts`:

```text
src/config/site.ts
- WHATSAPP_NUMBER: número atualmente genérico ("5561999999999")
- WHATSAPP_MESSAGE: mensagem pré-preenchida do link wa.me
- whatsappUrl: URL final usada por todos os CTAs da página
```

Todos os botões da landing page (`src/routes/index.tsx`) importam esse `whatsappUrl`, então basta alterar um único arquivo para atualizar o link em toda a página.

## Passos
1. Substituir `WHATSAPP_NUMBER` em `src/config/site.ts` pelo número da clínica no formato internacional com apenas dígitos (ex: `5511999999999`).
2. Revisar `WHATSAPP_MESSAGE` para confirmar que a mensagem pré-preenchida que o cliente enviará está adequada.
3. Verificar se todos os CTAs da página usam `whatsappUrl` importado de `src/config/site.ts` e corrigir qualquer link hardcoded, se existir.
4. Validar o link gerado: `https://wa.me/<NUMERO>?text=<MENSAGEM>`.

## O que preciso de você
O número de WhatsApp da clínica que deve receber os agendamentos.
