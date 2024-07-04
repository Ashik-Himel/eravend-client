import { useNavigate, useSearchParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import Swal from "sweetalert2";
import ContractPolicies from "./ContractPolicies";

export default function ContractPaper() {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [btnLoading, setBtnLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const amount = searchParams.get('amount');
  const numberOfMachines = Math.ceil(amount / 12000);
  const name = searchParams.get('name');
  const surname = searchParams.get('surname');
  const email = searchParams.get('email');
  const company = searchParams.get('company');
  const address = `${searchParams.get('address')}, ${searchParams.get('postal')}, ${searchParams.get('city')}`;
  const nid = searchParams.get('nid');
  const idDate = searchParams.get('date');
  const idAuthority = searchParams.get('authority');

  const generatePDF = () => {
    setBtnLoading(true);
    axiosPublic.post("/api/contract-id", {email})
      .then(res => {
        let url = window.location.href;
        url = url.replace('contract', 'contract-pdf');
        url += `&id=${res.data?.insertedId}`;

        const info = {};
        info.id = res.data?.insertedId;
        if (name) info.name = name;
        if (surname) info.surname = surname;
        info.email = email;
        if (company) info.company = company;
        info.address = address;
        info.amount = amount;
        info.numberOfMachines = numberOfMachines;
        info.nid = nid;
        info.idDate = idDate;
        info.idAuthority = idAuthority;
        info.url = url;

        axiosPublic.post('/api/contract', info)
          .then(res => {
            if (res.data?.url) {
              window.open(res.data.url);
              setBtnLoading(false);
              navigate("/submit-contract");
            } else {
              Swal.fire({
                title: "Fehler",
                text: "Download des Vertragspapiers fehlgeschlagen!",
                icon: "error"
              })
              setBtnLoading(false);
            }
          })
          .catch(error => {
            Swal.fire({
              title: "Fehler",
              text: "Ein Fehler ist aufgetreten!",
              icon: "error"
            })
            console.log(error);
            setBtnLoading(false);
          });
      })
  }
  
  return (
    <section className="mt-16 mb-12">
      <div className="container">
        <div className="bg-white shadow-md rounded p-6">
          <ContractPolicies />
          <div className="mt-10 text-center">
            <button type="button" className="btn btn-primary" onClick={generatePDF} disabled={btnLoading}>
              {
                btnLoading ? <span className="loading loading-spinner loading-sm"></span> : "Herunterladen"
              }
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}