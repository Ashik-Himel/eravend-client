import { FaEye, FaEyeSlash  } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useContextProvider from "../hooks/useContextProvider";
import toast from "react-hot-toast";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {setUser, setUserRole} = useContextProvider();
  const [showPass, setShowPass] = useState(false);

  const handleForgetPassword = () => {
    Swal.fire({
      title: "E-Mail",
      input: "email",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Stornieren",
      confirmButtonText: "Fortfahren"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.post('/api/forgot-password', {email: result.value})
         .then(() => {
            Swal.fire({
              title: "E-Mail gesendet",
              text: "Überprüfe deinen Posteingang",
              icon: "success"
            });
         })
         .catch(error => {
           if (error.response.status === 400) {
            Swal.fire({
              title: "Fehler",
              text: "Benutzer mit dieser E-Mail nicht gefunden",
              icon: "error"
            });
           } else {
            console.log(error);
            toast.error(error.code);
           }
         })
      }
    });
  }

  const handleLogin = e => {
    e.preventDefault();

    const email =  e.target.email.value;
    const password = e.target.password.value;
    axiosPublic.post('/api/login', {email, password}, {withCredentials: true})
      .then(res => {
        setUser(res.data.user);
        setUserRole(res.data.user.role);
        if (res.data.user.role === 'admin') {
          navigate('/admin');
        } else if (res.data.user.role === 'investor') {
          navigate('/dashboard');
        }
      })
      .catch(error => {
        if (error.response?.status === 401 || error.response?.status === 404) {
          Swal.fire({
            title: "Fehler",
            text: "Ungültige E-Mail oder ungültiges Passwort",
            icon: "error"
          })
        } else {
          console.log("API Error: ", error);
          toast.error(error.code);
        }
      })
  }

  return (
    <main>
      <Helmet>
        <title>Login - Eravend</title>
      </Helmet>

      <section className="my-12">
        <div className="container">
          <form className="w-full max-w-[600px] mx-auto border border-primary rounded-lg px-6 py-8 bg-bg-color" onSubmit={handleLogin}>
            <h2 className="text-3xl font-medium text-primary text-center mb-6">Melde dich in deinem Konto an</h2>

            <label className="block font-medium mb-2" htmlFor="email">E-Mail</label>
            <input className="input w-full border border-gray-300 mb-4" type="email" name="email" id="email" placeholder="Geben sie ihre E-Mail Adresse ein" required />

            <label className="block font-medium mb-2" htmlFor="password">Passwort</label>
            <div className="relative mb-4">
              <input className="input w-full border border-gray-300" type={showPass ? "text" : "password"} name="password" id="password" placeholder="Geben Sie Ihr Passwort ein" required />
              <div className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl cursor-pointer select-none" onClick={() => setShowPass(!showPass)}>
                {
                  showPass ? <FaEyeSlash /> : <FaEye />
                }
              </div>
            </div>

            <div className="mb-6">
              <button type="button" className="text-primary font-medium" onClick={handleForgetPassword}>Passwort vergessen?</button>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">Anmeldung</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}