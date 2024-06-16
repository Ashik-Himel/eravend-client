import PropTypes from "prop-types";
import CanvasJSReact from '@canvasjs/react-charts';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Chart({monthlyPayable}) {
  const options = {
    data: [
    {
      type: "column",
      dataPoints: [
        { label: '1 Jahre', y: monthlyPayable * 12 * 1 },
        { label: '2 Jahre', y: monthlyPayable * 12 * 2 },
        { label: '3 Jahre', y: monthlyPayable * 12 * 3 },
        { label: '4 Jahre', y: monthlyPayable * 12 * 4 },
        { label: '5 Jahre', y: monthlyPayable * 12 * 5 },
        { label: '6 Jahre', y: monthlyPayable * 12 * 6 },
        { label: '7 Jahre', y: monthlyPayable * 12 * 7 },
        { label: '8 Jahre', y: monthlyPayable * 12 * 8 },
        { label: '9 Jahre', y: monthlyPayable * 12 * 9 },
        { label: '10 Jahre', y: monthlyPayable * 12 * 10 }
      ]
    }
  ]}

  return (
    <section className="mt-16">
      <div className="container">
        <h3 className="text-3xl font-medium mb-6 break-words">Nettogewinndiagramm:</h3>
        <CanvasJSChart options={options} />
      </div>
    </section>
  );
}

Chart.propTypes = {
  monthlyPayable: PropTypes.number
}