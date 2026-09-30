import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import ProductCard from "./ProductCard";

export default function ProductSection({ id, eyebrow, title, items, limit, viewAllTo }) {
  const list = limit ? items.slice(0, limit) : items;
  return (
    <section className="section" id={id}>
      <div className="sec-head">
        <div>
          <small className="eyebrow-sm">{eyebrow}</small>
          <h2 className="sec-title">{title}</h2>
        </div>
        {viewAllTo && <Link to={viewAllTo} className="view-all">VIEW ALL <FiArrowRight /></Link>}
      </div>
      <div className="grid">
        {list.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
