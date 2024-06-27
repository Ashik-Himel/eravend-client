import { signOut } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { auth } from "../../config/firebase.config";
import toast from "react-hot-toast";
import useContextProvider from "../../hooks/useContextProvider";

export default function DashboardHome() {
  const {setUser, setUserRole} = useContextProvider();

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
    <main>
      <Helmet>
        <title>Dashboard - Eravend</title>
      </Helmet>

      <section className="my-12">
        <div className="container">
          <h2 className="text-center text-2xl font-medium text-primary">This is investor&apos;s dashboard. This page is under development.</h2>
          <div className="text-center mt-6">
            <button type="submit" className="btn btn-primary" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </section>
    </main>
  );
}