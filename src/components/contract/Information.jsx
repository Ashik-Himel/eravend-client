import { format } from "date-fns";
import { useSearchParams } from "react-router-dom";

export default function Information() {
  const [searchParams] = useSearchParams();
  const amount = searchParams.get('amount');
  const name = searchParams.get('name');
  const surname = searchParams.get('surname');
  const company = searchParams.get('company');
  const email = searchParams.get('email');
  const address = searchParams.get('address');
  const b2b = searchParams.get('b2b');

  return (
    <section className="my-12">
      <div className="container">
        <div className="bg-bg-color p-6 rounded-lg">
          <h3 className="text-3xl font-medium text-primary mb-4">Informationen für Anleger</h3>
          <p><span className="font-medium">Name:</span> {name}</p>
          {
            surname && <p><span className="font-medium">Nachname:</span> {surname}</p>
          }
          <p><span className="font-medium">E-Mail:</span> {email}</p>
          {
            company && <p><span className="font-medium">Unternehmen:</span> {company}</p>
          }
          <p><span className="font-medium">Adresse:</span> {address}</p>
          <p><span className="font-medium">B2B-Kunde:</span> {b2b ? 'Yes' : 'No'}</p>
          <p><span className="font-medium">Anlagebetrag:</span> {amount} €</p>
          <p><span className="font-medium">Ausstellungsdatum:</span> {format(new Date(), "dd MMMM, yyyy")}</p>
        </div>
      </div>
    </section>
  );
}