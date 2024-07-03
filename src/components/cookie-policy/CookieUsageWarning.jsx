import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

export default function CookieUsageWarning() {
  const [showCookie, setShowCookie] = useState(getCookie("allow-cookie") ? false: true);

  const handleAcceptCookie = () => {
    const date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = "allow-cookie=true;" + expires + ";path=/";
    setShowCookie(false);
  }
  const handleRejectCookie = () => {
    document.cookie = "allow-cookie=false;";
    setShowCookie(false);
  }

  return (
    <div className={`fixed left-0 right-0 md:left-6 z-50 w-full md:max-w-[500px] md:rounded-lg bg-white px-6 pt-12 pb-6 [box-shadow:0_0_20px_10px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center gap-6 transition-[bottom] duration-1000 ${showCookie ? "bottom-0 md:bottom-6" : "-bottom-[250px]"}`}>
      <FaXmark className="absolute right-4 top-4 text-xl cursor-pointer select-none text-gray-600" onClick={() => setShowCookie(false)} />
      <p className="text-center">Bitte lesen und akzeptieren Sie unsere <Link to="/cookie-policy" className="text-primary font-medium">Cookie-Richtlinien</Link></p>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <button type="button" className="btn btn-primary" onClick={handleAcceptCookie}>Akzeptieren</button>
        <button type="button" className="btn btn-primary btn-outline" onClick={handleRejectCookie}>Ablehnen</button>
      </div>
    </div>
  );
}