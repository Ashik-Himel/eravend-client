import { Helmet } from "react-helmet-async";
import ContractPaper from "../components/contract/ContractPaper";

export default function Contract() {
  return (
    <main className="bg-gray-300">
      <Helmet>
        <title>Contract - Eravend</title>
      </Helmet>

      <ContractPaper />
    </main>
  );
}