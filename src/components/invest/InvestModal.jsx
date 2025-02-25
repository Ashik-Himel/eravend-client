import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function InvestModal() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const amount = searchParams.get('amount');

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/invest?amount=${e.target.amount.value}`);
  }

  return (
    <section className={`my-12 ${amount ? 'hidden' : 'block'}`}>
      <div className="container">
        <form className="border border-gray-300 px-6 py-8 rounded-lg w-full max-w-[600px] mx-auto" onSubmit={handleSubmit}>
            <h4 className="text-2xl sm:text-3xl font-medium text-center mb-6 text-primary">Investitionsbetrag</h4>
            <label className="block font-medium mb-2" htmlFor="amount">Betrag (€)</label>
            <input className="input w-full border border-gray-300 mb-4" type="number" min="6000" name="amount" id="amount" placeholder="Geben Sie den Betrag ein" required />
            <div className="flex justify-center items-center gap-2 sm:gap-4">
              <button type="submit" className="btn btn-sm btn-primary">Fortfahren</button>
              <Link to={-1} className="btn btn-sm btn-primary btn-error">Geh zurück</Link>
            </div>
          </form>
      </div>
    </section>
  );
}