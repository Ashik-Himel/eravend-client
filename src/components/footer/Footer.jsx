import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#e2f0f6] py-6 mt-16">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p>Copyright &copy; 2018 - Alle Rechte vorbehalten von nvestiereindeinenpizzaautomaten.de</p>
          <Link to='/imprint' className="font-semibold text-primary">Impressum</Link>
        </div>
      </div>
    </footer>
  );
}