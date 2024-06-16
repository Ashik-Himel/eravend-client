import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollTo(0, 0);
  }, [pathname])

  return (
    <div className="flex flex-col [&>*:nth-child(2)]:flex-1 h-full min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}