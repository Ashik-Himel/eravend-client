import PropTypes from "prop-types";
import { useLocation, useSearchParams } from "react-router-dom";

export default function Details({amount, frequencies, frequency, rate, roi, monthlyPayable}) {
  const {pathname} = useLocation();
  const [searchParams] = useSearchParams();
  const urlAmount = searchParams.get('amount');

  return (
    <section className={`${pathname.startsWith('/invest') ? 'mt-12' : ''} ${ urlAmount ? 'block' : 'hidden'}`}>
      <div className="container">
        <div className="bg-bg-color p-6 rounded-lg text-xl leading-[1.8]">
          <h3 className="text-3xl font-medium mb-4">Investment Ergebnisse</h3>
          <span className="block"><span className="font-medium">Investment Betrag:</span> {amount} €</span>
          {
            !pathname.startsWith('/invest') && <span className="block"><span className="font-medium">Ausschüttungsfrequenz:</span> {frequencies[frequency]}</span>
          }
          <span className="block"><span className="font-medium">ROI:</span> {roi} Monate</span>
          <span className="block"><span className="font-medium">Gewinnbeteiligung:</span> {(rate * ((frequency === "monthly") ? 1 : (frequency === "quarterly") ? 3 : 12)).toFixed(2)} % (pro {(frequency === "monthly") ? "Monat" : (frequency === "quarterly") ? "Quartal" : "Jahr"})</span>
          <span className="block"><span className="font-medium">Verdienst:</span> {(monthlyPayable * ((frequency === "monthly") ? 1 : (frequency === "quarterly") ? 3 : 12)).toFixed(2)} € (pro {(frequency === "monthly") ? "Monat" : (frequency === "quarterly") ? "Quartal" : "Jahr"})</span>
        </div>
      </div>
    </section>
  );
}

Details.propTypes = {
  amount: PropTypes.number,
  frequencies: PropTypes.object,
  frequency: PropTypes.string,
  rate: PropTypes.number,
  roi: PropTypes.number,
  monthlyPayable: PropTypes.number
}