import { Link } from "react-router-dom";
import { IMG } from "../data/images";
import SafeImg from "./SafeImg";

export default function CategoryTiles() {
  return (
    <section className="section">
      <h2 className="section-title">WHAT WE MAKE</h2>
      <div className="tiles">
        <Link to="/cakes" className="tile">
          <SafeImg src={IMG.cakeTile} alt="Cakes" />
          <div className="tile-label"><small>FRESHLY BAKED</small><h3>Cakes</h3><span>View all cakes →</span></div>
        </Link>
        <Link to="/chocolates" className="tile">
          <SafeImg src={IMG.chocoTile} alt="Homemade chocolates" />
          <div className="tile-label"><small>SMALL BATCH</small><h3>Homemade Chocolates</h3><span>View all chocolates →</span></div>
        </Link>
      </div>
    </section>
  );
}
