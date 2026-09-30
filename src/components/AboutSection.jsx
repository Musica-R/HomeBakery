import { Link } from "react-router-dom";
import { IMG } from "../data/images";
import { BRAND } from "../data/brand";
import SafeImg from "./SafeImg";

export default function AboutSection() {
  return (
    <section className="section about-home" id="about">
      <div className="about-img"><SafeImg src={IMG.about} alt="Our kitchen" /></div>
      <div className="about-text">
        <small className="eyebrow-sm">ABOUT US</small>
        <h2 className="sec-title">Baked at home, made with heart</h2>
        <p>{BRAND.name} began in a home kitchen with one oven and a love for baking. Today we make fresh celebration cakes and small-batch homemade chocolates for birthdays, weddings, gifts and everyday sweet cravings.</p>
        <p>Every order is prepared fresh with quality ingredients and no shortcuts, then packed with care.</p>
        <Link to="/about" className="btn btn-outline">READ OUR STORY</Link>
      </div>
    </section>
  );
}
