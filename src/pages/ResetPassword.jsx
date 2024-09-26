import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";

export default function ResetPassword() {
  const {token} = useParams();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [showPass, setShowPass] = useState(false);

  const handleResetPassword = e => {
    e.preventDefault();
    
    const pass1 = e.target['new-password'].value;
    const pass2 = e.target['re-type-password'].value;
    
    if (pass1 !== pass2) {
      Swal.fire({
        title: "Fehler",
        text: "Passwörter stimmen nicht überein!",
        icon: "error"
      })
      return;
    }

    axiosPublic.post(`/api/reset-password/${token}`, {password: pass1})
      .then(() => {
        Swal.fire({
          title: "Erfolg",
          text: "Passwort wurde erfolgreich geändert!",
          icon: "success"
        })
        navigate('/login');
      })
      .catch(error => {
        console.log(error);
        if (error.response.status === 404 || error.response.status === 400) {
          Swal.fire({
            title: "Fehler",
            text: "Der angegebene Token ist ungültig oder abgelaufen!",
            icon: "error"
          })
          return;
        }
        Swal.fire({
          title: "Fehler",
          text: "Es ist ein unbekannter Fehler aufgetreten!",
          icon: "error"
        })
      })
  };

  return (
    <main>
      <Helmet>
        <title>Reset Password - EraVend</title>
      </Helmet>

      <section className="my-12">
        <div className="container">
          <form className="w-full max-w-[600px] mx-auto border border-primary rounded-lg px-6 py-8 bg-bg-color" onSubmit={handleResetPassword}>
            <h2 className="text-3xl font-medium text-primary text-center mb-6">Passwort zurücksetzen</h2>

            <label className="block font-medium mb-2" htmlFor="new-password">Neues Passwort</label>
            <input className="input w-full border border-gray-300 mb-4" type={showPass ? "text" : "password"} name="new-password" id="new-password" placeholder="Geben Sie das neue Passwort ein" required />

            <label className="block font-medium mb-2" htmlFor="re-type-password">Passwort wiederholen</label>
            <div className="relative mb-4">
              <input className="input w-full border border-gray-300" type={showPass ? "text" : "password"} name="re-type-password" id="re-type-password" placeholder="Geben Sie das Passwort erneut ein" required />
              <div className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl cursor-pointer select-none" onClick={() => setShowPass(!showPass)}>
                {
                  showPass ? <FaEyeSlash /> : <FaEye />
                }
              </div>
            </div>

            <div className="text-center mt-6">
              <button type="submit" className="btn btn-primary">Zurücksetzen</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}