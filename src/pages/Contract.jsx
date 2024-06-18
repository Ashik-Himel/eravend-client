import { Helmet } from "react-helmet-async";
import Information from "../components/contract/Information";

export default function Contract() {
  return (
    <main>
      <Helmet>
        <title>Contract - Eravend</title>
      </Helmet>

      <Information />
    </main>
  );
}