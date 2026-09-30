import { BRAND } from "../data/brand";

export const buildWaLink = (message) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;

export default function useWhatsApp() {
  const enquire = (item) => {
    const msg = `Hi ${BRAND.name}, I would like to enquire about ${item.name} (${item.price}).`;
    window.open(buildWaLink(msg), "_blank", "noopener,noreferrer");
  };
  const send = (message) => window.open(buildWaLink(message), "_blank", "noopener,noreferrer");
  return { enquire, send, generalLink: buildWaLink(`Hi ${BRAND.name}, I would like to make an enquiry.`) };
}
