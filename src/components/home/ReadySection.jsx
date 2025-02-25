import { Link, useNavigate } from "react-router-dom";
import useContextProvider from "../../hooks/useContextProvider";

export default function ReadySection() {
  const navigate = useNavigate();
  const { readySectionRef } = useContextProvider();

  const handleSubmit = e => {
    e.preventDefault();
    const amount = e.target.amount.value;
    const frequency = e.target.frequency.value;
    navigate(`/profit-details?amount=${amount}&frequency=${frequency}`);
  }

  return (
    <section className="mt-16 bg-gray-100 py-12 md:py-20" ref={readySectionRef}>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 [&>*]:flex-1">
          <div data-aos="fade-right">
            <h2 className="text-3xl xl:text-5xl font-medium mb-2 !leading-[1.3]">Bereit zu investieren?</h2>
            <p className="mb-6">Berechnen Sie Ihren eigenen Gewinn und sehen Sie das Wachstum mit eigenen Augen</p>
            <Link to="/invest" className="btn btn-primary">Jetzt Investieren</Link>
          </div>
          <div className="w-full md:w-auto">
            <form className="bg-bg-color px-6 py-10 rounded-lg" onSubmit={handleSubmit} data-aos="fade-left">
              <h3 className="text-3xl font-medium text-center mb-6">Gewinn Berechnen</h3>
              <label htmlFor="amount" className="block font-medium mb-2">Investitionsbetrag (€)</label>
              <input className="input w-full border border-gray-300 mb-4" type="number" min="6000" name="amount" id="amount" placeholder="Investitionsbetrag" required />
              <label htmlFor="frequency" className="block font-medium mb-2">Ausschüttungsfrequenz</label>
              <select className="input w-full border border-gray-300 mb-6" name="frequency" id="frequency" required>
                <option value="monthly">Monatlich</option>
                <option value="quarterly">Quartalweise</option>
                <option value="yearly">Jährlich</option>
              </select>
              <button type="submit" className="btn btn-primary">Berechnen</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}