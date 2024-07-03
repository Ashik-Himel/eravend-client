import { Helmet } from "react-helmet-async";

export default function Imprint() {
  return (
    <main>
      <Helmet>
        <title>Imprint - Eravend</title>
      </Helmet>

      <section className="mt-8 text-gray-600">
        <div className="container">
          <h2 className="text-primary text-4xl sm:text-5xl font-medium text-center mb-8">Impressum</h2>
          <div>
            <h3 className="text-2xl sm:text-3xl font-medium text-black mb-4">EraVend GmbH & Co. KG</h3>

            <p className="font-medium text-black">Adresse:</p>
            <address className="mb-4 not-italic">Guldenstraße 9, 86343 Königsbrunn, Deutschland</address>

            <p><span className="font-medium text-black">Telefon:</span> <a className="underline" href="tel:+4982120969113" target="_blank" rel="noopener noreferrer">+49 821 20969113</a></p>
            <p className="mb-4"><span className="font-medium text-black">E-Mail:</span> <a className="underline" href="mailto:investment@eravend.com" target="_blank" rel="noopener noreferrer">investment@eravend.com</a></p>

            <p className="font-medium text-black">Handelsregistereintrag:</p>
            <p>Amtsgericht Augsburg</p>
            <p className="mb-4">Handelsregisternummer: HRA 21570</p>

            <p className="font-medium text-black">Geschäftsführung:</p>
            <p className="mb-4">EraVend Verwaltungs GmbH</p>

            <p className="font-medium text-black">Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
            <p className="mb-4">DE</p>

            <p className="font-medium text-black">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
            <p className="mb-4">[Name des Verantwortlichen]</p>

            <p className="font-medium text-black">Haftungsausschluss:</p>
            <p className="mb-4">Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

            <p className="font-medium text-black">Streitschlichtung:</p>
            <p className="mb-4">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: [Link zur OS-Plattform]. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

            <p className="font-medium text-black">Urheberrecht:</p>
            <p className="mb-12">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
          </div>
        </div>
      </section>
    </main>
  );
}