import { Link } from "react-router-dom";
import { FaTiktok, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <section className="bg-bg-color py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="w-full md:w-3/5">
              <h4 className="text-2xl font-medium mb-2">EraVend GmbH & Co. KG</h4>
              <address className="not-italic !leading-[1.5] mb-4">Guldenstrasse 9, 86343 Königsbrunn, Germany</address>
              <span className="block"><span className="font-medium">Phone:</span> <a className="underline" href="tel:+4982120969113" target="_blank" rel="noopener noreferrer">+49 821 20969113</a></span>
              <span className="block mb-6"><span className="font-medium">Email:</span> <a className="underline" href="mailto:info@eravend.com" target="_blank" rel="noopener noreferrer">info@eravend.com</a></span>
              <div className="flex gap-2">
                <a className="bg-primary text-white w-10 h-10 rounded-full flex justify-center items-center text-xl" href="https://www.tiktok.com/@derpizzamat" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                <a className="bg-primary text-white w-10 h-10 rounded-full flex justify-center items-center text-xl" href="https://www.instagram.com/derpizzamat" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a className="bg-primary text-white w-10 h-10 rounded-full flex justify-center items-center text-xl" href="https://youtube.com/@derpizzamat" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                <a className="bg-primary text-white w-10 h-10 rounded-full flex justify-center items-center text-xl" href="https://www.facebook.com/share/gJYr8axtw9n9ZWJ6" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              </div>
            </div>
            <div className="w-full md:w-2/5">
              <div className="flex flex-col items-start w-[130px] md:mx-auto">
                <h4 className="text-2xl font-medium mb-2">Direktlinks</h4>
                <Link to='/' className="text-primary font-medium">Heim</Link>
                <Link to="/invest" className="text-primary font-medium">Investieren</Link>
                <Link to="/imprint" className="text-primary font-medium">Impressum</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-start md:text-center sm:text-left">
            <p className="text-white !leading-[1.5]">Copyright &copy; 2018 - Alle Rechte vorbehalten von nvestiereindeinenpizzaautomaten.de</p>
            <div className="flex gap-3">
              <a className="bg-white text-primary w-10 h-10 rounded-full flex justify-center items-center text-xl" href="https://www.tiktok.com/@derpizzamat" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
              <a className="bg-white text-primary w-10 h-10 rounded-full flex justify-center items-center text-xl" href="https://www.instagram.com/derpizzamat" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a className="bg-white text-primary w-10 h-10 rounded-full flex justify-center items-center text-xl" href="https://youtube.com/@derpizzamat" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a className="bg-white text-primary w-10 h-10 rounded-full flex justify-center items-center text-xl" href="https://www.facebook.com/share/gJYr8axtw9n9ZWJ6" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}