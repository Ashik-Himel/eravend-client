import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useContextProvider from "../../hooks/useContextProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { format } from "date-fns";

export default function DashboardHome() {
  const axiosPublic = useAxiosPublic();
  const {user, setUser, setUserRole} = useContextProvider();
  const statusPlaceholder = {
    pending: "Nicht Bezahlt",
    submitted: "Wird Bearbeitet",
    verified: "Genehmigt"
  }

  const {data: contracts} = useQuery({
    queryKey: ["contract", user?.email],
    queryFn: async() => {
      const res = await axiosPublic(`/api/user-contracts?email=${user?.email}`);
      return res.data;
    }
  })

  const handleLogout = () => {
    axiosPublic('/api/logout', {withCredentials: true})
      .then(() => {
        setUser(null);
        setUserRole(null);
      })
      .catch(error => {
        toast.error(error.code);
        console.log(error);
      })
  }

  return (
    <main className="mt-8 mb-12">
      <Helmet>
        <title>Dashboard - Eravend</title>
      </Helmet>

      <section>
        <div className="container">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <p className="font-medium">Hello, {user?.email}!</p>
            <button type="submit" className="btn btn-primary" onClick={handleLogout}>Ausloggen</button>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="container">
          <h2 className="text-3xl font-medium text-primary mb-6">Meine Verträge</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
              contracts?.length && contracts?.map((contract, ind) => <div key={contract?._id} className={`rounded-lg p-6 flex justify-between items-end ${contract?.status === "verified" ? "bg-green-100" : contract?.status === "submitted" ? "bg-yellow-100" : "bg-red-100"}`}>
                <div>
                  <h4 className="text-2xl font-medium text-primary mb-2">Vertrag {ind + 1}</h4>
                  <p><span className="font-medium">Beträge:</span> {contract?.amount}</p>
                  {
                    contract?.status === "verified" ? <p><span className="font-medium">Bestätigtes Datum:</span><br />{contract?.verifiedDate && format(contract?.verifiedDate, "dd MMM, yyyy")}</p> : <p><span className="font-medium">Vertragsdatum:</span><br />{contract?.date && format(contract?.date, "dd MMM, yyyy")}</p>
                  }
                  <p><span className="font-medium">Status:</span> {statusPlaceholder[contract?.status]}</p>
                </div>
                <div>
                  <Link to={`/dashboard/contract/${contract?._id}`} className="bg-primary text-white border-2 border-primary w-10 h-10 rounded-full flex justify-center items-center">
                    <FaArrowRight />
                  </Link>
                </div>
              </div>)
            }
          </div>
        </div>
      </section>
    </main>
  );
}