import { FiClock } from "react-icons/fi";
import { GiCakeSlice, GiChocolateBar } from "react-icons/gi";
export default function TopBar() {
  return (
    <div className="topbar">
      <span><GiCakeSlice /> FRESHLY BAKED CAKES</span>
      <span className="hide-sm"><GiChocolateBar /> HOMEMADE CHOCOLATES</span>
      <span className="hide-xs"><FiClock /> OPEN DAILY 9 AM - 8 PM</span>
    </div>
  );
}
