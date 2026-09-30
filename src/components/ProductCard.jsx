import { FaWhatsapp } from "react-icons/fa";
import SafeImg from "./SafeImg";
import useWhatsApp from "../hooks/useWhatsApp";

export default function ProductCard({ product }) {
  const { enquire } = useWhatsApp();
  return (
    <article className="pcard">
      <div className="pimg"><SafeImg src={product.image} alt={product.name} /></div>
      <div className="pbody">
        <h3 className="pname">{product.name}</h3>
        <p className="pprice">{product.price}</p>
        <button className="btn btn-primary btn-sm btn-block" onClick={() => enquire(product)}>
          <FaWhatsapp /> ENQUIRE
        </button>
      </div>
    </article>
  );
}
