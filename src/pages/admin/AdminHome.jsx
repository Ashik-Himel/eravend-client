import { signOut } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { auth } from "../../config/firebase.config";
import toast from "react-hot-toast";
import useContextProvider from "../../hooks/useContextProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
  const {setUser, setUserRole} = useContextProvider();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const statusPlaceholder = {
    pending: "Ausstehend",
    submitted: "Gesendet",
    verified: "Verifiziert"
  }

  const {data: contracts} = useQuery({
    queryKey: ["contracts"],
    queryFn: async() => {
      const res = await axiosPublic('/api/contracts');
      return res.data;
    }
  })

  const viewContract = (id) => {
    navigate(`/admin/contracts/${id}`);
  }

  const handleLogout = () => {
    signOut(auth)
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
        <title>Admin Dashboard - Eravend</title>
      </Helmet>

      <section>
        <div className="container">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex justify-center items-center gap-4">
              <span className="font-medium">Filter:</span>
              <select name="filter" id="filter" className="input border border-gray-300 h-[42px]">
                <option value="all">Alle</option>
                <option value="pending">Ausstehend</option>
                <option value="submitted">Gesendet</option>
                <option value="verified">Verifiziert</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleLogout}>Ausloggen</button>
          </div>

          <div className="overflow-x-auto">
            <table className="mt-6 border border-gray-300 min-w-full w-max [&_th]:border [&_th]:border-gray-300 [&_td]:border [&_td]:border-gray-300">
              <thead>
                <tr className="bg-primary text-white [&_th]:font-medium [&_th]:px-4 [&_th]:py-1">
                  <th>Vertrags-ID</th>
                  <th>Name / Unternehmen</th>
                  <th>E-Mail</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  contracts?.map(contract => <tr className={`text-center [&_td]:px-4 [&_td]:py-1 cursor-pointer ${contract?.status === 'verified' ? "bg-green-100" : contract?.status === "submitted" ? "bg-yellow-100" : "bg-red-100"}`} onClick={() => viewContract(contract?._id)} key={contract?._id}>
                    <td>{contract?._id}</td>
                    <td>{contract?.name ? (contract.name + (contract?.surname ? " " + contract.surname : "")) : contract?.company}</td>
                    <td>{contract.email}</td>
                    <td>{statusPlaceholder[contract.status]}</td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
          
        </div>
      </section>
    </main>
  );
}