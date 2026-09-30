import { FaWhatsapp } from "react-icons/fa";
import useWhatsApp from "../hooks/useWhatsApp";
export default function WhatsAppFloat() {
  const { generalLink } = useWhatsApp();
  return (
    <a className="wa-float" href={generalLink} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <FaWhatsapp />
    </a>
  );
}
