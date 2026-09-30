import { LuWheat, LuChefHat, LuGift, LuSmile } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
const F = [
  [LuChefHat, "HOMEMADE", "Fresh from our kitchen"],
  [LuWheat, "PREMIUM INGREDIENTS", "Finest & natural"],
  [LuGift, "CUSTOM ORDERS", "Designed for you"],
  [FaWhatsapp, "EASY ENQUIRY", "Order on WhatsApp"],
  [LuSmile, "CUSTOMER LOVE", "4.9 ★★★★★"],
];
export default function FeatureStrip() {
  return (
    <section className="features">
      {F.map(([Icon, t, s]) => (
        <div className="feature" key={t}><Icon size={26} /><div><b>{t}</b><small>{s}</small></div></div>
      ))}
    </section>
  );
}
