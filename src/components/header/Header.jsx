import { FaArrowLeft, FaPlay } from "react-icons/fa";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import machine from "../../assets/machine.png";
import useContextProvider from "../../hooks/useContextProvider";
import { useState } from "react";

export default function Header() {
  const { pathname } = useLocation();
  const { readySectionRef, user, userRole, userLoaded } = useContextProvider();
  const [drawerShow, setDrawerShow] = useState(false);
  const [videoShow, setVideoShow] = useState(false);

  const handleButtonClick = () => {
    window.scrollTo({
      top: readySectionRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  if (pathname.startsWith('/contract')) {
    return (
      <Link to={-1} className="fixed left-6 top-4 bg-white border-2 border-primary w-10 h-10 rounded-full flex justify-center items-center">
        <FaArrowLeft />
      </Link>
    );
  }

  return (
    <header className={pathname === "/" ? "[background-image:linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url(/hero-bg.jpg)] bg-no-repeat bg-cover bg-center" : "bg-bg-color"}>
      <div className="container">
        <nav className="py-6 md:py-4 flex justify-between items-center gap-4">
          <Link to='/'>
            <img src={logo} alt="Logo" className="w-full max-w-[150px] lg:max-w-[250px]" />
          </Link>

          <div className={`flex justify-center items-center gap-x-4 lg:gap-x-6 gap-y-6 font-medium bg-white md:bg-transparent fixed top-0 left-0 right-0 overflow-hidden md:static flex-col md:flex-row transition-[bottom] duration-300 z-50 ${drawerShow ? "bottom-0" : "bottom-full"}`}>
            <NavLink to='/submit-contract' className={({isActive}) => isActive ? "text-primary text-xl md:text-[18px]" : "text-xl md:text-[18px]"} onClick={() => setDrawerShow(false)}>Vertrag Einreichen</NavLink>
            {
              userLoaded ? user ? userRole === "admin" ? <NavLink to='/admin' className={({isActive}) => isActive ? "text-primary text-xl md:text-[18px]" : "text-xl md:text-[18px]"} onClick={() => setDrawerShow(false)}>Armaturenbrett</NavLink> : <NavLink to='/dashboard' className={({isActive}) => isActive ? "text-primary text-xl md:text-[18px]" : "text-xl md:text-[18px]"} onClick={() => setDrawerShow(false)}>Armaturenbrett</NavLink> : <NavLink to='/login' className={({isActive}) => isActive ? "text-primary text-xl md:text-[18px]" : "text-xl md:text-[18px]"} onClick={() => setDrawerShow(false)}>Anmeldung</NavLink> : null
            }
            <NavLink to='/invest' className="btn btn-primary max-h-[42px]" onClick={() => setDrawerShow(false)}>Investieren</NavLink>
            <FaXmark className="md:hidden text-3xl absolute top-6 right-6 cursor-pointer select-none" onClick={() => setDrawerShow(false)} />
          </div>
          <FaBars className="md:hidden text-3xl cursor-pointer select-none" onClick={() => setDrawerShow(true)} />
        </nav>

        <section className={`py-8 md:py-12 2xl:py-20 flex flex-col md:flex-row justify-between items-center gap-8 ${pathname === "/" ? "flex" : "hidden"}`}>
          <div className="w-full md:w-4/6" data-aos="fade-up">
            <h1 className="text-3xl xl:text-5xl 2xl:text-6xl font-medium mb-4 !leading-[1.4] xl:!leading-[1.2]">Willkommen bei Eravend Ihrer intelligenten Vending-Lösung</h1>
            <p className="xl:text-xl mb-8">Sind Sie bereit, sich der Revolution im automatisierten Einzelhandel anzuschließen? Bei Eravend stellen wir nicht nur intelligente Verkaufsautomaten her-Wir schaffen Möglichkeiten für Investoren und Geschäftsinhaber, in der schnell wachsenden Vending-Branche erfolgreich zu sein.</p>
            <button type="button" className="btn btn-primary" onClick={handleButtonClick}>Checke Jetzt Aus</button>
          </div>
          <div className="w-full md:w-2/6 relative">
            <img src={machine} alt="Machine Bild" className="w-full max-w-[350px] xl:max-w-[500px] mx-auto md:ml-auto md:mr-0" />
            <div className="bg-primary w-24 h-24 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-white flex justify-center items-center cursor-pointer select-none" onClick={() => setVideoShow(true)}>
              <FaPlay />
            </div>
          </div>
        </section>

        <section className={`fixed inset-0 bg-[rgba(0,0,0,0.8)] z-50 ${videoShow ? "block" : "hidden"}`}>
          <div className="container flex justify-center items-center h-full">
            <div className="text-5xl text-white absolute top-6 right-6 cursor-pointer select-none" onClick={()=> setVideoShow(false)}>
              <FaXmark />
            </div>
            <iframe className="w-full max-w-[700px] mx-auto aspect-video" src="https://www.youtube.com/embed/h99kmY2mUJo?si=H8VS-aUJA4mpxmDZ" allowfullscreen></iframe>
          </div>
        </section>
      </div>
    </header>
  );
}