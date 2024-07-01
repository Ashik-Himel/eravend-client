import { Helmet } from "react-helmet-async";
import InvestModal from "../components/invest/InvestModal";
import Chart from "../components/profit-details/Chart";
import { useSearchParams } from "react-router-dom";
import Details from "../components/profit-details/Details";
import InvestForm from "../components/invest/InvestForm";

export default function Invest() {
  const [searchParams] = useSearchParams();
  const amount = searchParams.get('amount');
  const rate = parseFloat((amount / 1000).toFixed(2));
  const monthlyPayable = parseFloat(amount * ((rate - 3.28) / 100)).toFixed(2);
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