import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function SubmitContract() {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  const handleContractSubmit = e => {
    e.preventDefault();

    Swal.fire({
      title: "Erfolgreich Eingereicht!",
      text: "Das Vertragsdokument wurde erfolgreich übermittelt. Überprüfen Sie Ihre E-Mail, um die Informationen zu erhalten.",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/');
      }
    });

    const formData = new FormData();
    formData.append('email', email);
    formData.append('file', file);

    axiosPublic.put("/api/submit-contract", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <main>
      <Helmet>
        <title>Submit Contract - Eravend</title>
      </Helmet>

      <section className="my-12">
        <div className="container">
          <form onSubmit={handleContractSubmit}>
            <h2 className="text-3xl font-medium text-primary text-center mb-6">Vertragspapier Einreichen</h2>

            <div className="w-full max-w-[600px] mx-auto">
              <label className="block font-medium mb-2" htmlFor="email">E-Mail</label>
              <input className="input w-full border border-gray-300 mb-4" type="email" name="email" id="email" placeholder="Geben sie ihre E-Mail Adresse ein" value={email} onChange={handleEmailChange} required />
            </div>

            <div className="w-full max-w-[600px] mx-auto">
              <label className="block font-medium mb-2" htmlFor="paper">Vertragspapier</label>
              <input className="w-full border border-gray-300 p-1 rounded-lg mb-6" type="file" name="paper" id="paper" onChange={handleFileChange} required />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">Einreichen</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}