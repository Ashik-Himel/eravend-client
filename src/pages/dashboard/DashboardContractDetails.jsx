import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { FaArrowLeft } from "react-icons/fa";
import Chart from "../../components/profit-details/Chart";

export default function DashboardContractDetails() {
  const axiosPublic = useAxiosPublic();
  const {id} = useParams();
  const rate = parseFloat((contract?.amount / 1000).toFixed(2));
  const monthlyPayable = parseFloat(contract?.amount * ((rate - 3.28) / 100)).toFixed(2);
  const statusPlaceholder = {
    pending: "Nicht Bezahlt",
    submitted: "Wird Bearbeitet",
    verified: "Genehmigt"
  }

  const {data: contract, isLoading} = useQuery({
    queryKey: ['contracts', id],
    queryFn: async() => {
      const res = await axiosPublic(`/api/contract?id=${id}`)
      return res.data;
    }
  })

  const handleDownload = () => {
    if (contract?.status === "pending") {
      window.open(contract?.contract);
    }
    else {
      window.open(contract?.[contract?.status]);
    }
  }

  if (isLoading) return (
    <main className="mt-10 text-center">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </main>
  );

  return (
    <main className="mt-4 mb-12">
      <Helmet>
        <title>Contract Details - Eravend</title>
      </Helmet>

      <section>
        <div className="container">
          <Link to={-1} className="bg-white border-2 border-primary w-10 h-10 rounded-full flex justify-center items-center mb-4">
            <FaArrowLeft />
          </Link>
          <div className="bg-bg-color p-6 rounded-lg text-xl leading-[1.8]">
            <h2 className="text-3xl font-medium text-primary mb-4">Einzelheiten</h2>
            <p><span className="font-medium">Vertrags-ID:</span> {contract?._id}</p>
            {
              contract?.status === "verified" ? <p><span className="font-medium">Bestätigtes Datum:</span> {contract?.verifiedDate && format(contract?.verifiedDate, "dd MMM, yyyy")}</p> : <p><span className="font-medium">Vertragsdatum:</span> {contract?.date && format(contract?.date, "dd MMM, yyyy")}</p>
            }
            {
              contract?.name && <p><span className="font-medium">Name:</span> {contract.name + (contract?.surname ? " " + contract.surname : "")}</p>
            }
            {
              contract?.company && <p><span className="font-medium">Unternehmen:</span> {contract.company}</p>
            }
            <p><span className="font-medium">E-Mail:</span> {contract?.email}</p>
            <p><span className="font-medium">Adresse:</span> {contract?.address}</p>
            <p><span className="font-medium">Nationale ID-Nummer:</span> {contract?.nid}</p>
            <p><span className="font-medium">Ausstellungsdatum:</span> {contract?.idDate && format(contract?.idDate, "dd MMM, yyyy")}</p>
            <p><span className="font-medium">Ausstellende Behörde:</span> {contract?.idAuthority}</p>
            <p><span className="font-medium">Betrag:</span> {contract?.amount}</p>
            <p><span className="font-medium">Anzahl der Maschinen:</span> {contract?.numberOfMachines}</p>
            <p><span className="font-medium">Status:</span> {statusPlaceholder[contract?.status]}</p>
            <button type="button" className="btn btn-primary mt-4" onClick={handleDownload}>Herunterladen</button>
          </div>
        </div>
      </section>

      <Chart monthlyPayable={monthlyPayable} />
    </main>
  );
}