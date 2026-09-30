import { GiCakeSlice, GiChocolateBar } from "react-icons/gi";
import { HOMEMADE_CAKES, CHOCOLATE_CAKES } from "../data/priceList";

const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;

function PriceCard({ icon: Icon, eyebrow, title, items }) {
  return (
    <div className="price-card">
      <div className="price-head">
        <span className="price-icon"><Icon size={22} /></span>
        <div>
          <small>{eyebrow}</small>
          <h3>{title}</h3>
        </div>
      </div>

      <ul className="price-rows">
        <li className="price-row price-cols">
          <span>Cake</span>
          <span>½ kg</span>
          <span>1 kg</span>
        </li>
        {items.map((it) => (
          <li className="price-row" key={it.name}>
            <span className="price-name">{it.name}</span>
            <span className="price-val">{fmt(it.half)}</span>
            <span className="price-val">{fmt(it.full)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PriceList() {
  return (
    <section className="section pricelist" id="price-list">
      <h2 className="section-title">PRICE LIST</h2>
      <div className="price-grid">
        <PriceCard
          icon={GiCakeSlice}
          eyebrow="FRESHLY BAKED"
          title="Homemade Cakes"
          items={HOMEMADE_CAKES}
        />
        <PriceCard
          icon={GiChocolateBar}
          eyebrow="FOR CHOCOLATE LOVERS"
          title="Chocolate Cake Varieties"
          items={CHOCOLATE_CAKES}
        />
      </div>
    </section>
  );
}