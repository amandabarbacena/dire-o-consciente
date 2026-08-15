// Configuração central da página.
// Para trocar o número do WhatsApp, altere apenas WHATSAPP_NUMBER (formato internacional, só dígitos).
export const WHATSAPP_NUMBER = "5561983398920";

export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de saber mais sobre a Sessão de Direção Terapêutica.";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
