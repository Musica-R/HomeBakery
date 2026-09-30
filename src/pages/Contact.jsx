import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { BRAND } from "../data/brand";
import useWhatsApp from "../hooks/useWhatsApp";

export default function Contact() {
  const { send } = useWhatsApp();
  const [f, setF] = useState({ name: "", type: "Cake", message: "" });
  const change = (e) => setF({ ...f, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    send(`Hi ${BRAND.name}, I'm ${f.name}. I'd like to enquire about: ${f.type}.\n${f.message}`);
  };
  return (
    <>
      <div className="page-hero"><small>GET IN TOUCH</small><h1>Contact Us</h1></div>
      <section className="section contact">
        <div className="contact-info">
          <h2 className="sec-title">Business Details</h2>
          <p><FiMapPin /> <span>{BRAND.address}</span></p>
          <p><FiPhone /> <span>{BRAND.phoneDisplay}</span></p>
          <p><FiMail /> <span>{BRAND.email}</span></p>
          <p><FiClock /> <span>{BRAND.hours}</span></p>
        </div>
        <form className="form" onSubmit={submit}>
          <h2 className="sec-title">Send an Enquiry</h2>
          <input name="name" required placeholder="Your name" value={f.name} onChange={change} />
          <select name="type" value={f.type} onChange={change}>
            <option>Cake</option><option>Custom Cake</option><option>Homemade Chocolates</option><option>Gift Hamper</option>
          </select>
          <textarea name="message" required rows="4" placeholder="Flavour, weight, date, delivery location..." value={f.message} onChange={change} />
          <button className="btn btn-primary"><FaWhatsapp /> SEND ON WHATSAPP</button>
        </form>
      </section>
    </>
  );
}
