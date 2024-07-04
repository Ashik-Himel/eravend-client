import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";

export default function ContractDetails() {
  const axiosPublic = useAxiosPublic();
  const {id} = useParams();
  const [file, setFile] = useState(null);
  const statusPlaceholder = {
    pending: "Ausstehend",
    submitted: "Gesendet",
    verified: "Verifiziert"
  }
  
  const {data: contract, refetch} = useQuery({
    queryKey: ["contracts", id],
    queryFn: async() => {
      const res = await axiosPublic(`/api/contract?id=${id}`);
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleContractVerify = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('id', contract?._id);
    formData.append('email', contract?.email);
    formData.append('file', file);

    axiosPublic.post("/api/verify-contract", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true
    })
    .then(() => {
      Swal.fire({
        title: "Verifiziert!",
        text: "Die Verifizierung dieses Vertragsdokuments war erfolgreich.",
        icon: "success",
      })
      refetch();
    })
    .catch(error => {
      console.log(error);
    })
  }

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
          <div className="bg-bg-color p-6 rounded-lg">
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

      <section className={`mt-16 ${contract?.status === "submitted" ? "block" : "hidden"}`}>
        <div className="container">
        <form onSubmit={handleContractVerify}>
          <h2 className="text-3xl font-medium text-primary text-center mb-6">Vertragsunterlagen Prüfen</h2>

          <div className="w-full max-w-[600px] mx-auto">
            <label className="block font-medium mb-2" htmlFor="paper">Vertragspapier</label>
            <input className="w-full border border-gray-300 p-1 rounded-lg mb-6" type="file" name="paper" id="paper" onChange={handleFileChange} required />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">Verifizieren</button>
          </div>
        </form>
        </div>
      </section>
    </main>
  );
}