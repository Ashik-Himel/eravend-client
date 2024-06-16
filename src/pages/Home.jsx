import { Helmet } from "react-helmet-async";
import FeatureSection from "../components/home/FeatureSection";
import JoinSection from "../components/home/JoinSection";
import ReadySection from "../components/home/ReadySection";

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Eravend</title>
      </Helmet>

      <FeatureSection />
      <JoinSection />
      <ReadySection />
    </main>
  );
}