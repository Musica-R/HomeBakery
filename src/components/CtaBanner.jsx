import { FaWhatsapp } from "react-icons/fa";
import useWhatsApp from "../hooks/useWhatsApp";
export default function CtaBanner() {
  const { generalLink } = useWhatsApp();
  return (
    <section className="cta">
      <div>
        <h3>Planning a celebration?</h3>
        <p>Tell us your idea on WhatsApp and we will make it special.</p>
      </div>
      <a className="btn btn-white" href={generalLink} target="_blank" rel="noreferrer"><FaWhatsapp /> CHAT ON WHATSAPP</a>
    </section>
  );
}
