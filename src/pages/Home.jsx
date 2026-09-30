import Hero from "../components/Hero";
import FeatureStrip from "../components/FeatureStrip";
import CategoryTiles from "../components/CategoryTiles";
import PriceList from "../components/PriceList";
import ProductSection from "../components/ProductSection";
import AboutSection from "../components/AboutSection";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import CtaBanner from "../components/CtaBanner";
import { CAKES, CHOCOLATES } from "../data/products";

const HOME_LIMIT = 4; // how many items to show per category on the home page

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <CategoryTiles />
      <PriceList />
      <ProductSection id="cakes" eyebrow="FRESHLY BAKED" title="Our Cake Varieties" items={CAKES} limit={HOME_LIMIT} viewAllTo="/cakes" />
      <ProductSection id="chocolates" eyebrow="SMALL BATCH" title="Homemade Chocolates" items={CHOCOLATES} limit={HOME_LIMIT} viewAllTo="/chocolates" />
      <AboutSection />
      <Reviews />
      <Faq />
      <CtaBanner />
    </>
  );
}
