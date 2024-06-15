import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col [&>*:nth-child(2)]:flex-1 h-full min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}