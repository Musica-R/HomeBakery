import ProductSection from "../components/ProductSection";
import CtaBanner from "../components/CtaBanner";
import { CHOCOLATES } from "../data/products";
export default function Chocolates() {
  return (
    <>
      <div className="page-hero"><small>SMALL BATCH</small><h1>Homemade Chocolates</h1><p>Made fresh in our kitchen. Tap Enquire to order on WhatsApp.</p></div>
      <ProductSection id="all-chocolates" eyebrow="ALL VARIETIES" title="Chocolate Varieties & Prices" items={CHOCOLATES} />
      <CtaBanner />
    </>
  );
}
