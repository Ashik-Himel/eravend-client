import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import machine from "../../assets/machine.png";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className={pathname === "/" ? "[background-image:linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url(/hero-bg.png)] bg-no-repeat bg-cover bg-center" : "bg-[#e2f0f6]"}>
      <div className="container">
        <nav className="py-4 flex justify-between items-center gap-4">
          <Link to='/'>
            <img src={logo} alt="Logo" className="w-full max-w-[250px]" />
          </Link>
          <Link to='/invest' className="btn btn-primary">Investieren</Link>
        </nav>

        <section className={`py-8 md:py-12 2xl:py-20 flex flex-col md:flex-row justify-center items-center gap-8 ${pathname === "/" ? "flex" : "hidden"}`}>
          <div>
            <h1 className="text-3xl xl:text-5xl 2xl:text-6xl font-medium !leading-[1.2] mb-4">Willkommen bei Eravend Ihrer intelligenten Vending-Lösung</h1>
            <p className="xl:text-xl leading-normal mb-8">Sind Sie bereit, sich der Revolution im automatisierten Einzelhandel anzuschließen? Bei Eravend stellen wir nicht nur intelligente Verkaufsautomaten her; Wir schaffen Möglichkeiten für Investoren und Geschäftsinhaber, in der schnell wachsenden Vending-Branche erfolgreich zu sein.</p>
            <button type="button" className="btn btn-primary">Checke Jetzt Aus</button>
          </div>
          <div>
            <img src={machine} alt="Machine Bild" className="max-w-full md:max-w-[300px] xl:max-w-[500px] mx-auto" />
          </div>
        </section>
      </div>
    </header>
  );
}