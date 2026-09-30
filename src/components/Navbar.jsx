import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { BRAND } from "../data/brand";
import { NAV_LINKS } from "../data/navLinks";
import useWhatsApp from "../hooks/useWhatsApp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { generalLink } = useWhatsApp();
  const close = () => setOpen(false);
  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={close}>
        <img src={logo} alt="" />
        <span><b>{BRAND.name}</b><small>{BRAND.tagline}</small></span>
      </Link>

      <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main">
        {NAV_LINKS.map((l) =>
          l.to.includes("#") ? (
            <Link key={l.label} to={l.to} onClick={close}>{l.label}</Link>
          ) : (
            <NavLink key={l.label} to={l.to} end onClick={close}>{l.label}</NavLink>
          )
        )}
        <a className="btn btn-primary btn-sm nav-cta-mobile" href={generalLink} target="_blank" rel="noreferrer">
          <FaWhatsapp /> ORDER ON WHATSAPP
        </a>
      </nav>

      <div className="nav-right">
        <a className="btn btn-primary btn-sm nav-cta" href={generalLink} target="_blank" rel="noreferrer">
          <FaWhatsapp /> ORDER ON WHATSAPP
        </a>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
