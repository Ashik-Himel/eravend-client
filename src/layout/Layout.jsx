import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from "react-hot-toast";
import { logEvent } from "firebase/analytics";
import { analytics } from "../config/firebase.config";
import CookieUsageWarning from "../components/cookie-policy/CookieUsageWarning";

AOS.init({
  duration: 1000,
  offset: 200
});

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [pathname])

  useEffect(() => {
    logEvent(analytics, "page_view");
  }, [])

  return (
    <div className="flex flex-col [&>*:nth-child(2)]:flex-1 h-full min-h-screen overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
      <CookieUsageWarning />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}