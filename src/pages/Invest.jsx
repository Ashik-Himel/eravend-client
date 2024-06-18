import { Helmet } from "react-helmet-async";
import InvestModal from "../components/invest/InvestModal";
import Chart from "../components/profit-details/Chart";
import { useSearchParams } from "react-router-dom";
import Details from "../components/profit-details/Details";
import InvestForm from "../components/invest/InvestForm";

export default function Invest() {
  const [searchParams] = useSearchParams();
  const amount = searchParams.get('amount');
  const rate = parseFloat(((100 / 60000) * amount).toFixed(2));
  const monthlyPayable = parseFloat(((8985.6 / 100) * (rate - 3.28)).toFixed(2));
  const roi = parseFloat((amount / monthlyPayable).toFixed(2));

  return (
    <main>
      <Helmet>
        <title>Invest - Eravend</title>
      </Helmet>

      <InvestModal />
      <Details amount={amount} rate={rate} monthlyPayable={monthlyPayable} roi={roi} />
      <Chart monthlyPayable={monthlyPayable} />
      <InvestForm />
    </main>
  );
}