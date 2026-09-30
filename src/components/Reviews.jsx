import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { REVIEWS } from "../data/reviews";

export default function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <h2 className="section-title">LOVED BY OUR CUSTOMERS</h2>
      <div className="review-grid">
        {REVIEWS.map((r) => (
          <figure className="review" key={r.name}>
            <FaQuoteLeft className="quote" />
            <blockquote>{r.text}</blockquote>
            <figcaption>
              <span className="avatar">{r.name[0]}</span>
              <div>
                <b>{r.name}</b>
                <small>{r.item}</small>
              </div>
              <span className="stars">{[1, 2, 3, 4, 5].map((n) => <FaStar key={n} />)}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
