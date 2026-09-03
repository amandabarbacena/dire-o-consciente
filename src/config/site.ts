// Configuração central da página.
// Para trocar o número do WhatsApp, altere apenas WHATSAPP_NUMBER (formato internacional, só dígitos).
export const WHATSAPP_NUMBER = "5561983398920";

export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Sessão de Direção Terapêutica e gostaria de saber mais sobre como funciona.";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
