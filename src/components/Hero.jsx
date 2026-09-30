import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { GiCakeSlice } from "react-icons/gi";
import { IMG } from "../data/images";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="eyebrow">FRESHLY BAKED, EVERYDAY <FiHeart /></p>
        <h1>Made with Love,<br /><span>Baked for You.</span></h1>
        <p className="hero-sub">Celebration cakes and homemade chocolates, crafted in small batches with the finest ingredients.</p>
        <div className="hero-btns">
          <Link to="/cakes" className="btn btn-primary">VIEW CAKES</Link>
          <Link to="/chocolates" className="btn btn-outline">HOMEMADE CHOCOLATES</Link>
        </div>
      </div>
      <div className="hero-img" style={{ backgroundImage: `url(${IMG.hero})` }}>
        <div className="seal"><GiCakeSlice size={20} /><b>BAKED<br />FRESH</b><small>DAILY</small></div>
      </div>
    </section>
  );
}
