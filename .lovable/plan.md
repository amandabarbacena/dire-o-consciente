# Personalizar mensagem pré-preenchida do WhatsApp

## O que vamos fazer
Substituir a mensagem genérica de abertura do WhatsApp por uma saudação acolhedora e duas perguntas de triagem que ajudem a Amanda a qualificar a lead antes da SDT.

## Onde está a configuração
A mensagem está em `src/config/site.ts`, na constante `WHATSAPP_MESSAGE`. Ela é codificada automaticamente na URL `wa.me` usada por todos os botões da landing page.

## Mensagem atual
```text
Olá! Vim pelo site e gostaria de saber mais sobre a Sessão de Direção Terapêutica.
```

## Mensagem proposta
```text
Olá, Amanda! Vim pelo site da Sessão de Direção Terapêutica.

Gostaria de agendar minha sessão. Para me ajudar a chegar mais preparada, seguem algumas informações:

1. Qual situação da sua rotina hoje mais te consome mentalmente?
2. Você está buscando a SDT como um direcionamento único ou também quer conhecer o processo terapêutico contínuo?

Fico no aguardo dos próximos passos.
```

## Por que essa estrutura
- **Saudação direta**: cria calor humano e identifica a profissional.
- **Origem clara**: confirma que veio do site.
- **Pergunta de dor**: qualifica a queixa principal sem parecer formulário frio.
- **Pergunta de intenção**: separa quem quer só a SDT de quem pode querer acompanhamento contínuo, evitando objeção depois.
- **Tom de fechamento**: mantém a postura da lead no lugar de quem está escolhendo, não suplicando vaga.

## Passos
1. Substituir `WHATSAPP_MESSAGE` em `src/config/site.ts` pelo texto aprovado.
2. Testar se a URL `wa.me` gerada continua válida (caracteres especiais, quebras de linha, etc.).
3. Verificar se a mensagem não fica truncada em dispositivos móveis ao abrir o WhatsApp.

## Decisão pendente
Aprovar a mensagem proposta ou ajustar o tom/perguntas antes de aplicar.
