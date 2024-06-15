import { Helmet } from "react-helmet-async";
import FeatureSection from "../components/home/FeatureSection";

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Eravend</title>
      </Helmet>

      <FeatureSection />
    </main>
  );
}