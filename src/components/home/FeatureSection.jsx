import highROI from "../../assets/icons/high-roi.png";
import experience from "../../assets/icons/experience.png";
import support from "../../assets/icons/support.png";

export default function FeatureSection() {
  return (
    <section className="mt-16">
      <div className="container">
        <span className="block text-center uppercase font-medium">Was Uns Unterscheidet</span>
        <h2 className="text-3xl md:text-5xl font-medium text-center mb-8 !leading-[1.4]">Warum Eravend wählen?</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6">
          <div className="border border-black rounded-md p-4 md:col-span-2 lg:col-span-1" data-aos="fade-up">
            <img src={highROI} alt="High Roi Bild" className="w-[80px] mb-2 2xl:mb-4" />
            <h3 className="text-2xl 2xl:text-3xl font-semibold mb-4 2xl:mb-6">Hoher ROI</h3>
            <p className="text-justify">Die Investition in die Verkaufsautomaten von Eravend bietet ein lukratives Umsatzbeteiligungsmodell. Unsere nachgewiesene Erfolgsbilanz und strategische Platzierung sorgen für eine hohe Rendite Ihrer Investition.</p>
          </div>
          <div className="border border-black rounded-md p-4 md:col-span-2 lg:col-span-1" data-aos="fade-up">
            <img src={experience} alt="Unübertroffene Erfahrung Bild" className="w-[80px] mb-2 2xl:mb-4" />
            <h3 className="text-2xl 2xl:text-3xl font-semibold mb-4 2xl:mb-6">Unübertroffene Erfahrung</h3>
            <p className="text-justify">Unsere langjährige Erfahrung stellt sicher, dass Sie mit einem Unternehmen zusammenarbeiten, das den Markt versteht und sich für Ihren Erfolg einsetzt.</p>
          </div>
          <div className="border border-black rounded-md p-4 md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto" data-aos="fade-up">
            <img src={support} alt="Umfassender Support Bild" className="w-[80px] mb-2 2xl:mb-4" />
            <h3 className="text-2xl 2xl:text-3xl font-semibold mb-4 2xl:mb-6">Umfassender Support</h3>
            <p className="text-justify">Von der Installation bis zur Wartung bietet Eravend End-to-End-Support. Unsere engagierte Investitionsabteilung unterstützt Sie bei jedem Schritt und sorgt dafür, dass Ihre Verkaufsautomaten reibungslos und profitabel funktionieren.</p>
          </div>
        </div>
      </div>
    </section>
  );
}