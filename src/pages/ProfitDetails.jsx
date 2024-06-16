import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import Details from "../components/profit-details/Details";
// import Chart from "../components/profit-details/Chart";
import AnnualGrowth from "../components/profit-details/AnnualGrowth";
import InvestNow from "../components/profit-details/InvestNow";

export default function ProfitDetails() {
  const [searchParams] = useSearchParams();
  const amount = parseFloat(searchParams.get('amount'));
  const frequency = searchParams.get('frequency');
  const frequencies = {
    monthly: 'Monatlich',
    quarterly: 'Quartalweise',
    yearly: 'Jährlich'
  }
  const rate = parseFloat(((100 / 60000) * amount).toFixed(2));
  const monthlyPayable = parseFloat(((8985.6 / 100) * (rate - 3.28)).toFixed(2));
  const roi = parseFloat((amount / monthlyPayable).toFixed(2));

  return (
    <main>
      <Helmet>
        <title>Profit Details - Eravend</title>
      </Helmet>

      <h2 className="text-3xl md:text-5xl font-medium mb-8 text-center mt-12">Gewinndetails</h2>
      <Details amount={amount} frequencies={frequencies} frequency={frequency} rate={rate} roi={roi} monthlyPayable={monthlyPayable} />
      {/* <Chart monthlyPayable={monthlyPayable} /> */}
      <AnnualGrowth amount={amount} monthlyPayable={monthlyPayable} />
      <InvestNow />
    </main>
  );
}