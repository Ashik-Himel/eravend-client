import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function InvestForm() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const amount = searchParams.get('amount');

  const handleSubmit = e => {
    e.preventDefault();

    let link = `/contract?amount=${e.target.amount.value}&name=${e.target.name.value}&email=${e.target.email.value}&address=${e.target.address.value}`;
    if (e.target.surname.value) {
      link += "&surname=" + e.target.surname.value;
    }
    if (e.target.company.value) {
      link += "&company=" + e.target.company.value;
    }
    if (e.target.b2b.checked) {
      link += "&b2b=true"
    }

    navigate(link);
  }

  return (
    <section className={`mt-16 mb-12 ${amount ? 'block' : 'hidden'}`}>
      <div className="container">
        <form className="w-full max-w-[700px] mx-auto bg-bg-color px-6 py-10 rounded-lg" onSubmit={handleSubmit}>
          <h4 className="text-3xl font-medium text-center text-primary mb-6">Anlageform</h4>
          <label className="block font-medium mb-2" htmlFor="amount">Menge</label>
          <input className="input w-full border border-gray-300 mb-4" type="number" min="6000" name="amount" id="amount" placeholder="Geben Sie den Betrag ein" defaultValue={amount} onChange={e => setSearchParams({amount: e.target.value})} required />

          <label className="block font-medium mb-2" htmlFor="name">Name</label>
          <input className="input w-full border border-gray-300 mb-4" type="text" name="name" id="name" placeholder="Gib deinen Namen ein" required />

          <label className="block font-medium mb-2" htmlFor="surname">Nachname</label>
          <input className="input w-full border border-gray-300 mb-4" type="text" name="surname" id="surname" placeholder="Geben Sie Ihren Nachnamen ein" />

          <label className="block font-medium mb-2" htmlFor="email">E-Mail</label>
          <input className="input w-full border border-gray-300 mb-4" type="email" name="email" id="email" placeholder="Geben sie ihre E-Mail Adresse ein" required />

          <label className="block font-medium mb-2" htmlFor="address">Adresse</label>
          <input className="input w-full border border-gray-300 mb-4" type="text" name="address" id="address" placeholder="Geben Sie Ihre Adresse ein" required />

          <label className="block font-medium mb-2" htmlFor="company">Unternehmen (Optional)</label>
          <input className="input w-full border border-gray-300 mb-4" type="text" name="company" id="company" placeholder="Geben Sie Ihren Firmennamen ein" />

          <div className="flex justify-start items-center gap-2">
            <input type="checkbox" name="b2b" id="b2b" />
            <label htmlFor="b2b" className="cursor-pointer select-none">Ich bin ein B2B-Kunde</label>
          </div>

          <div className="flex justify-start items-center gap-2 mb-4">
            <input type="checkbox" name="policy" id="policy" required />
            <label htmlFor="policy" className="cursor-pointer select-none">Ich stimme der <Link to="/privacy-policy" className="font-medium text-primary underline">Datenschutzrichtlinie</Link> von Eravend zu</label>
          </div>

          <button type="submit" className="btn btn-primary">Fortfahren</button>
        </form>
      </div>
    </section>
  );
}