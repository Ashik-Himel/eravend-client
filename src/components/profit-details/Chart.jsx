import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useLocation, useSearchParams } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({monthlyPayable}) {
  const {pathname} = useLocation();
  const [searchParams] = useSearchParams();
  const urlAmount = searchParams.get('amount');

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  };
  const data = {
    labels: ['1 Jahre', '2 Jahre', '3 Jahre', '4 Jahre', '5 Jahre', '6 Jahre', '7 Jahre', '8 Jahre', '9 Jahre', '10 Jahre'],
    datasets: [
      {
        data: [monthlyPayable * 12 * 1, monthlyPayable * 12 * 2, monthlyPayable * 12 * 3, monthlyPayable * 12 * 4, monthlyPayable * 12 * 5, monthlyPayable * 12 * 6, monthlyPayable * 12 * 7, monthlyPayable * 12 * 8, monthlyPayable * 12 * 9, monthlyPayable * 12 * 10],
        backgroundColor: ['#16a085', '#8e44ad', '#2980b9', '#27ae60', '#e67e22', '#1abc9c', '#e74c3c', '#f1c40f', '#fc427b', '#009432'],
      },
    ],
  };

  return (
    <section className={`mt-16 ${urlAmount || pathname.startsWith('/dashboard') ? 'block' : 'hidden'}`}>
      <div className="container">
        <h3 className="text-3xl font-medium mb-6 break-words">Nettogewinndiagramm:</h3>
        <Bar options={options} data={data} />
      </div>
    </section>
  );
}

Chart.propTypes = {
  monthlyPayable: PropTypes.number
}