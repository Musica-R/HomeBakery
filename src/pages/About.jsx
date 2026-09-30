import { GiCakeSlice, GiChocolateBar } from "react-icons/gi";
import { LuWheat, LuHeart } from "react-icons/lu";
import { IMG } from "../data/images";
import { BRAND } from "../data/brand";
import SafeImg from "../components/SafeImg";
import CtaBanner from "../components/CtaBanner";

const VALUES = [
  [GiCakeSlice, "Fresh Cakes", "Baked to order for birthdays, weddings and every celebration."],
  [GiChocolateBar, "Homemade Chocolates", "Small-batch chocolates made with quality cocoa."],
  [LuWheat, "Quality Ingredients", "Real butter, fresh cream and natural flavours."],
  [LuHeart, "Made with Love", "Every order is prepared and packed with care."],
];

export default function About() {
  return (
    <>
      <div className="page-hero"><small>ABOUT US</small><h1>Our Story</h1></div>
      <section className="section about-home">
        <div className="about-img"><SafeImg src={IMG.about} alt="Our kitchen" /></div>
        <div className="about-text">
          <h2 className="sec-title">{BRAND.name}</h2>
          <p>{BRAND.name} started in a home kitchen with one oven and a lot of love. Today we bake fresh cakes and craft homemade chocolates for birthdays, weddings, gifts and everyday sweet moments.</p>
          <p>We keep our menu focused on what we do best, so every cake and every chocolate gets the time and attention it deserves.</p>
        </div>
      </section>
      <section className="section">
        <div className="values">
          {VALUES.map(([Icon, t, d]) => (
            <div className="value" key={t}><Icon size={30} /><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
