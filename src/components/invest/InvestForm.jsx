import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function InvestForm() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const amount = searchParams.get('amount');
  const rate = (amount / 1000).toFixed(2);

  const handleSubmit = e => {
    e.preventDefault();

    const finalAmount = e.target.amount.value;
    const name = e.target.name.value;
    const surname = e.target.surname.value;
    const email = e.target.email.value;
    const company = e.target.company.value;
    const address = e.target.address.value;
    const postalCode = e.target.postalCode.value;
    const city = e.target.city.value;
    const nid = e.target.nid.value;
    const idDate = e.target.idDate.value;
    const idAuthority = e.target.idAuthority.value;

    if (!name && !company) {
      Swal.fire({
        title: "Fehlende Informationen",
        text: "Sie sollten zumindest Ihren Namen bzw. Firmennamen angeben!",
        icon: "error"
      });
      return;
    }

    let link = `/contract?amount=${finalAmount}&rate=${rate}&email=${email}&address=${address}&postal=${postalCode}&city=${city}&nid=${nid}&date=${idDate}&authority=${idAuthority}`;
    if (name) link += "&name=" + name;
    if (surname) link += "&surname=" + surname;
    if (company) link += "&company=" + company;

    navigate(link);
  }

  return (
    <section className={`mt-16 bg-gray-100 py-12 [&_input]:bg-white ${amount ? 'block' : 'hidden'}`}>
      <div className="container">
        <h4 className="text-3xl font-medium text-center text-primary mb-8">Anlageform</h4>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-x-6 gap-y-4 mb-4 [&>*]:flex-1">
            <div>
              <label className="block font-medium mb-2" htmlFor="amount">Betrag (€)</label>
              <input className="input w-full border border-gray-300" type="number" min="6000" name="amount" id="amount" placeholder="Geben Sie den Betrag ein" defaultValue={amount} onChange={e => setSearchParams({amount: e.target.value})} required />
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="company">Unternehmen</label>
              <input className="input w-full border border-gray-300" type="text" name="company" id="company" placeholder="Geben Sie Ihren Firmennamen ein" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-x-6 gap-y-4 mb-4 [&>*]:flex-1">
            <div>
              <label className="block font-medium mb-2" htmlFor="name">Name</label>
              <input className="input w-full border border-gray-300" type="text" name="name" id="name" placeholder="Gib deinen Namen ein" />
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="surname">Nachname</label>
              <input className="input w-full border border-gray-300" type="text" name="surname" id="surname" placeholder="Geben Sie Ihren Nachnamen ein" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-x-6 gap-y-4 mb-4 [&>*]:flex-1">
            <div>
              <label className="block font-medium mb-2" htmlFor="email">E-Mail</label>
              <input className="input w-full border border-gray-300" type="email" name="email" id="email" placeholder="Geben sie ihre E-Mail Adresse ein" required />
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="address">Adresse</label>
              <input className="input w-full border border-gray-300" type="text" name="address" id="address" placeholder="Geben Sie Ihre Adresse ein" required />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-x-6 gap-y-4 mb-4 [&>*]:flex-1">
            <div>
              <label className="block font-medium mb-2" htmlFor="postalCode">Postleitzahl</label>
              <input className="input w-full border border-gray-300" type="text" name="postalCode" id="postalCode" placeholder="Geben Sie die Postleitzahl Ihres Gebiets ein" required />
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="city">Stadt</label>
              <input className="input w-full border border-gray-300" type="text" name="city" id="city" placeholder="Geben Sie Ihre Stadt ein" required />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-x-6 gap-y-4 mb-4 [&>*]:flex-1">
            <div>
              <label className="block font-medium mb-2" htmlFor="nid">Nationale ID-Nummer</label>
              <input className="input w-full border border-gray-300" type="text" name="nid" id="nid" placeholder="Geben Sie Ihre Personalausweisnummer ein" required />
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="idDate">Ausstellungsdatum</label>
              <input className="input w-full border border-gray-300" type="date" name="idDate" id="idDate" required />
            </div>
          </div>

          <label className="block font-medium mb-2" htmlFor="idAuthority">Ausstellende Behörde</label>
          <input className="input w-full border border-gray-300 mb-6" type="text" name="idAuthority" id="idAuthority" placeholder="Geben Sie Ihren Nachnamen ein" required />

          <div className="flex justify-start items-center gap-2 mb-6">
            <input type="checkbox" name="policy" id="policy" required />
            <label htmlFor="policy" className="cursor-pointer select-none">Ich stimme der <Link to="/imprint" className="font-medium text-primary underline">Datenschutzrichtlinie</Link> von Eravend zu</label>
          </div>

          <button type="submit" className="btn btn-primary">Fortfahren</button>
        </form>
      </div>
    </section>
  );
}