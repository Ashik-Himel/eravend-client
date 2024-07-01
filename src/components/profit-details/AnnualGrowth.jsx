import PropTypes from "prop-types";

export default function AnnualGrowth({amount, monthlyPayable}) {
  const years = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className="mt-16">
        <div className="container">
          <h3 className="text-3xl font-medium mb-4">Jährliches Wachstum:</h3>
          <table className="border border-black [&_tr:nth-child(even)]:bg-bg-color [&_th]:border-r [&_th]:border-black [&_td]:border-r [&_td]:border-black w-full text-left [&_th]:px-6 [&_th]:py-1.5 [&_td]:px-6 [&_td]:py-1.5">
            <thead className="bg-primary text-white [&_th]:font-medium">
              <tr>
                <th>Jahre</th>
                <th>Jährliches Wachstum in Prozent</th>
              </tr>
            </thead>
            <tbody>
              {
                years.map(year => <CalculateGrowth key={year} amount={amount} monthlyPayable={monthlyPayable} year={year} />)
              }
            </tbody>
          </table>
        </div>
      </section>
  );
}

function CalculateGrowth({amount, monthlyPayable, year}) {
  const growth = (((monthlyPayable * 12 * year) / amount) * 100).toFixed(2);

  return (
    <tr>
      <td>{year}</td>
      <td>{growth} %</td>
    </tr>
  );
}

AnnualGrowth.propTypes = {
  amount: PropTypes.number,
  monthlyPayable: PropTypes.number
}
CalculateGrowth.propTypes = {
  amount: PropTypes.number,
  monthlyPayable: PropTypes.number,
  year: PropTypes.number
}