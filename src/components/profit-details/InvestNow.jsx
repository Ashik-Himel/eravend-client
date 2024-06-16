import { Link } from "react-router-dom";

export default function InvestNow() {
  return (
    <section className="mt-16 py-16 bg-gray-100">
      <div className="container text-center">
        <h2 className="text-3xl xl:text-5xl font-medium mb-2 !leading-[1.3]">Bereit Zu Investieren?</h2>
        <p className="w-full max-w-[600px] mx-auto mb-6">Wenn Sie bereit sind zu investieren, füllen Sie das Formular auf der Investitionsseite aus.</p>
        <Link to='/invest' className="btn btn-primary">Investieren</Link>
      </div>
    </section>
  );
}