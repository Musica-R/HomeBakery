import ProductSection from "../components/ProductSection";
import CtaBanner from "../components/CtaBanner";
import { CAKES } from "../data/products";
export default function Cakes() {
  return (
    <>
      <div className="page-hero"><small>FRESHLY BAKED</small><h1>Our Cakes</h1><p>Choose a flavour and tap Enquire to order on WhatsApp.</p></div>
      <ProductSection id="all-cakes" eyebrow="ALL VARIETIES" title="Cake Varieties & Prices" items={CAKES} />
      <CtaBanner />
    </>
  );
}
