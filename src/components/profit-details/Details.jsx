import PropTypes from "prop-types";

export default function Details({amount, frequencies, frequency, rate, roi, monthlyPayable}) {
  return (
    <section>
      <div className="container">
        <div className="bg-bg-color p-6 rounded-lg text-xl leading-[1.8]">
          <h3 className="text-3xl font-medium mb-4">Investment Ergebnisse</h3>
          <span className="block"><span className="font-medium">Investment Betrag:</span> {amount} €</span>
          <span className="block"><span className="font-medium">Ausschüttungsfrequenz:</span> {frequencies[frequency]}</span>
          <span className="block"><span className="font-medium">ROI:</span> {roi} Monate</span>
          <span className="block"><span className="font-medium">Gewinnbeteiligung:</span> {rate} %</span>
          <span className="block"><span className="font-medium">Verdienst:</span> {monthlyPayable} €</span>
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