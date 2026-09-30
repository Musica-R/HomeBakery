import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import logo from "../assets/logo.svg";
import { BRAND } from "../data/brand";
import useWhatsApp from "../hooks/useWhatsApp";

export default function Footer() {
  const { generalLink } = useWhatsApp();
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="f-brand">
          <div className="brand"><img src={logo} alt="" /><span><b>{BRAND.name}</b><small>{BRAND.tagline}</small></span></div>
          <p>Fresh cakes and homemade chocolates, made with love, passion and the finest ingredients.</p>
          <div className="social">
            <a href="#!" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#!" aria-label="Instagram"><FaInstagram /></a>
            <a href={generalLink} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>
        <div className="f-col">
          <h5>QUICK LINKS</h5>
          <Link to="/">Home</Link>
          <Link to="/cakes">Cakes</Link>
          <Link to="/chocolates">Homemade Chocolates</Link>
          <Link to="/about">About Us</Link>
          <Link to="/#reviews">Reviews</Link>
          <Link to="/#faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="f-col f-contact">
          <h5>VISIT & CONTACT</h5>
          <p><FiMapPin /> {BRAND.address}</p>
          <p><FiPhone /> {BRAND.phoneDisplay}</p>
          <p><FiMail /> {BRAND.email}</p>
          <p><FiClock /> {BRAND.hours}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {BRAND.name}. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
