export const openWhatsApp = (number?: string) => {
  //  if (typeof window === 'undefined') return;

  const defaultMessage = "Hello, I need support regarding your service.";
  const finalMessage = defaultMessage;

  const encodedMessage = encodeURIComponent(finalMessage);
  const url = `https://wa.me/${number}?text=${encodedMessage}`;

  window.open(url, "_blank");
};