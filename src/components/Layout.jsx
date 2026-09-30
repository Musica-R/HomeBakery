import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import useScrollTop from "../hooks/useScrollTop";

export default function Layout() {
  useScrollTop();
  return (
    <>
      <TopBar />
      <Navbar />
      <main><Outlet /></main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
