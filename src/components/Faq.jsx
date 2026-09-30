import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FAQS } from "../data/faqs";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="faq">
      <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="faq-list">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div className={`faq-item ${isOpen ? "open" : ""}`} key={f.q}>
              <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                <span>{f.q}</span>{isOpen ? <FiMinus /> : <FiPlus />}
              </button>
              {isOpen && <p className="faq-a">{f.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
