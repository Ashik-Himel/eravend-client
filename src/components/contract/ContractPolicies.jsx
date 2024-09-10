import { format } from "date-fns";
import { useSearchParams } from "react-router-dom";

export default function ContractPolicies() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const amount = searchParams.get("amount");
  const numberOfMachines = Math.ceil(amount / 12000);
  const rate = searchParams.get("rate");
  const name = searchParams.get("name");
  const surname = searchParams.get("surname");
  const email = searchParams.get("email");
  const company = searchParams.get("company");
  const address = `${searchParams.get("address")}, ${searchParams.get(
    "postal"
  )}, ${searchParams.get("city")}`;
  const nid = searchParams.get("nid");
  const idDate = searchParams.get("date");
  const idAuthority = searchParams.get("authority");

  return (
    <div>
      <p className="text-gray-500 mb-6">
        <span className="font-medium">Vertrags-ID:</span>{" "}
        {id || "[Vertrags-ID]"}
      </p>
      <div className="text-center">
        <h3 className="text-xl font-semibold">Gewinnbeteiligungsvertrag</h3>
        <span>zwischen</span>
      </div>

      <div className="mt-6">
        <p className="font-semibold">EraVend GmbH & Co. KG</p>
        <p>Guldenstraße 9</p>
        <p>86343 Königsbrunn</p>
        <p>HRA 21570</p>
      </div>

      <span className="block my-4">und</span>

      <div>
        {name && (
          <p>
            <span className="font-medium">Name des Investors:</span> {name}{" "}
            {surname ? surname : null}
          </p>
        )}
        {company && (
          <p>
            <span className="font-medium">Unternehmen:</span> {company}
          </p>
        )}
        <p>
          <span className="font-medium">E-Mail:</span> {email}
        </p>
        <p>
          <span className="font-medium">Adresse:</span> {address}
        </p>
        <p>
          <span className="font-medium">Ausweisnummer:</span> {nid}
        </p>
        <p>
          <span className="font-medium">Ausstellungsdatum:</span>{" "}
          {format(idDate, "dd MMM, yyyy")}
        </p>
        <p>
          <span className="font-medium">Ausstellende Behörde:</span>{" "}
          {idAuthority}
        </p>
        <p>(im Folgenden &ldquo;Investor&rdquo; genannt)</p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">Präambel</p>
        <p>
          Der Projektträger plant, Automaten aufzustellen und bietet die
          Möglichkeit zur Beteiligung an diesen Automaten an. Das Kapital wird
          für den Bau der Automaten sowie für den Kauf von Pizzen und
          Verpackungsmaterialien verwendet.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">§ 1 Gegenstand des Vertrags</p>
        <p>
          Der Investor beteiligt sich finanziell an einem oder mehreren
          Automaten (im Folgenden &ldquo;Projekt&rdquo;).
        </p>
        <p>
          Die Gewinnbeteiligung bezieht sich ausschließlich auf den
          mitinvestierten Automaten und nicht auf das Unternehmen selbst.
        </p>
        <p>
          <span className="font-medium">Anzahl der Automaten:</span>{" "}
          {numberOfMachines}
        </p>
        <p>
          <span className="font-medium">Investitionsbetrag:</span> {amount} EUR
          ({(amount / numberOfMachines).toFixed(2)} EUR pro Maschine)
        </p>
        <p>
          <span className="font-medium">
            Prozentsatz der Gewinnbeteiligung:
          </span>{" "}
          {rate}%
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">§ 2 Risiken und Haftung</p>
        <p>
          Das Investment ist mit einem Risiko verbunden, bei dem der Investor
          sein Kapital vollständig verlieren kann.
        </p>
        <p>
          Der Projektträger haftet nicht für Verluste des eingesetzten Kapitals.
        </p>
        <p>
          Es werden keine Zinsen ausgezahlt, lediglich die prozentuale
          Gewinnbeteiligung.
        </p>
        <p>
          Bei Verlusten kann von den Investoren ein Beitrag verlangt werden, um
          die Verluste zu decken und weitere Einkäufe zu tätigen. Falls
          ausreichend Kapital durch die Rücklagen gebildet wurde, werden die
          Verluste aus diesen Rücklagen gedeckt.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">§ 3 Standortwahl und Information</p>
        <p>
          Der Projektträger hat die freie Wahl des Standorts der Automaten und
          darf diesen jederzeit ändern.
        </p>
        <p>
          Der Investor wird nach der Investition und nach dem Bau des Automaten
          über den Standort informiert. Die Standortwahl erfolgt per
          Zufallsgenerator.
        </p>
        <p>
          An manchen Standorten wird die Einsicht nur online möglich sein, da
          diese unter anderem auch in Kantinen platziert werden, was es für
          Außenstehende schwieriger gestaltet.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">§ 4 Gewinnberechnung und -verteilung</p>
        <p>
          Der Gewinn wird nach Abzug der Mehrwertsteuer und der folgenden Kosten
          berechnet:
        </p>
        <p>
          Mitarbeiter, KFZ, KFZ-Steuer, KFZ-Versicherung, Treibstoff, Pizzen,
          Verpackungsmaterialien, Strom für den Automaten, Miete für die
          Aufstellfläche, Verkaufsgebühren, Lagerflächenmiete und -strom,
          Versicherungen sowie weitere und unvorhersehbare Kosten
        </p>
        <p>
          Von der Gewinnbeteiligung des Investors wird eine Verwaltungs- und
          Befüllungsgebühr in Höhe von 3,28% abgezogen.
        </p>
        <p>Bei der Auszahlung fallen Gebühren in Höhe von 6,88% an.</p>
        <p>
          Zusätzlich werden 2% Rücklagen gebildet. Diese Rücklagen werden erst
          nach 5 Jahren ausbezahlt, sofern sie nicht für andere Kosten verwendet
          werden mussten.
        </p>
        <p>
          In den ersten 6 Monaten wird keine Gewinnbeteiligung ausbezahlt, um
          Rücklagen zu bilden. Nach Ablauf der 6 Monate kann die Auszahlung
          monatlich, quartalsweise oder jährlich erfolgen.
        </p>
        <p>
          Die Gewinnbeteiligung erstreckt sich über einen Zeitraum von 5 Jahren.
          Während dieser Zeit wird das investierte Kapital als Gewinnbeteiligung
          zurückgezahlt. Weitere Auszahlungen erfolgen nur auf Basis der
          investierten Gewinnbeteiligung. Es besteht jedoch das Risiko, dass das
          investierte Kapital nicht zurückgezahlt wird, da die Investition auf
          eigenes Risiko erfolgt. Dabei haftet die Eravend GmbH & Co. KG nicht
          für das vom Investor investierte Kapital.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">§ 5 Rechte des Investors</p>
        <p>Die Umsätze können transparent über eine WebAPP verfolgt werden.</p>
        <p>
          Der Investor hat das Recht auf Einsicht in die Betriebswirtschaftliche
          Auswertung (BWA). Bei postalischem Versand der BWA fallen Kosten in
          Höhe von 30,- EUR netto an.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">
          § 6 Verkaufsrecht der Gewinnbeteiligungen
        </p>
        <p>
          Die gekauften Gewinnbeteiligungen an dem Automaten dürfen vom Investor
          verkauft werden. Der Projektträger hat ein Vorkaufsrecht auf die
          Gewinnbeteiligungen, ist jedoch nicht verpflichtet, dieses auszuüben.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">
          § 7 Produktionsbeginn und Aufstellungszeitraum
        </p>
        <p>
          Der Betrag ist nach 7 Tagen fällig, nachdem das Investment vom
          Projektträger bestätigt wurde
        </p>
        <p>
          Die Produktion beginnt, sobald das gesamte Kapital gesammelt wurde.
        </p>
        <p>
          Nachdem alle Investoren gefunden worden sind und das Kapital gesammelt
          worden ist, wird mit der Produktion des Pizzamaten begonnen. Dies ist
          ein unverbindlicher Zeitrahmen von 6 Monaten.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">§ 8 Widerrufsrecht</p>
        <ol className="list-[lower-alpha] pl-6">
          <li>
            Ein Widerrufsrecht besteht nicht, da dieser Vertrag sich
            ausschließlich an Gewerbetreibende richtet.
          </li>
          <li>
            Im Falle eines Widerrufs muss der Investor an die EraVend GmbH & Co
            KG eine Strafe in Höhe von 15% des investierten oder versprochenen
            Betrages leisten.
          </li>
        </ol>
      </div>

      <div className="mt-6">
        <p className="font-semibold">§ 9 Datenschutzerklärung</p>
        <p>
          Der Projektträger verpflichtet sich, die personenbezogenen Daten des
          Investors gemäß den geltenden Datenschutzbestimmungen zu verarbeiten
          und zu schützen.
        </p>
        <p>
          Die Daten werden ausschließlich zur Durchführung und Verwaltung des
          Beteiligungsverhältnisses verwendet.
        </p>
        <p>
          Der Investor hat das Recht, jederzeit Auskunft über die gespeicherten
          personenbezogenen Daten zu erhalten und deren Berichtigung, Löschung
          oder Sperrung zu verlangen.
        </p>
        <p>
          Weitere Informationen zum Datenschutz sind in der Datenschutzerklärung
          der EraVend GmbH & Co. KG enthalten, die dem Investor zur Verfügung
          gestellt wird.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">§ 10 Streitbeilegung</p>
        <p>
          Sollte es zu Streitigkeiten aus diesem Vertrag kommen, verpflichten
          sich die Vertragsparteien, zunächst eine Mediation durchzuführen,
          bevor der Rechtsweg beschritten wird.
        </p>
        <p>
          Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist Augsburg
        </p>
        <p>Es gilt deutsches Recht.</p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">§ 11 Laufzeit der Gewinnbeteiligung</p>
        <p>
          Die Laufzeit der Gewinnbeteiligung erstreckt sich auf die gesamte
          Nutzungsdauer des jeweiligen Automaten. Die Gewinnbeteiligung endet,
          sobald der Automat außer Betrieb genommen und dauerhaft entfernt wird.
          Die Eravend GmbH & Co. KG und ihre Sachverständigen, Ingenieure und
          Qualitätsmanager entscheiden, wann eine Maschine nicht mehr
          reparierbar ist bzw. eine Reparatur sich nicht mehr lohnt. Diese
          Entscheidung ist bindend.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">§ 12 Schlussbestimmungen</p>
        <p>
          EraVend GmbH & Co. KG haftet nicht für Risiken und Verluste. Jeder
          Investor muss sich der Risiken bewusst sein.
        </p>
        <p>
          Änderungen und Ergänzungen dieses Vertrags bedürfen der Schriftform
        </p>
        <p>
          Sollten einzelne Bestimmungen dieses Vertrags unwirksam sein oder
          werden, so bleibt die Wirksamkeit der übrigen Bestimmungen hiervon
          unberührt. Unwirksame Bestimmungen werden durch solche ersetzt, die
          dem wirtschaftlichen Zweck der unwirksamen Bestimmungen möglichst
          nahekommen
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">§ 13 Vertraulichkeit</p>
        <p>
          Die Vertragsparteien verpflichten sich, alle im Zusammenhang mit
          diesem Vertrag und dessen Durchführung erlangten vertraulichen
          Informationen streng vertraulich zu behandeln und Dritten nicht
          zugänglich zu machen.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">§ 14 Identitätsprüfung des Investors</p>
        <p>
          Der Investor muss eine Kopie des Personalausweises oder eines
          vergleichbaren Dokuments vorlegen, um seine Identität und
          Gewerbetätigkeit nachzuweisen. Bei juristischen Personen ist ein
          Handelsregisterauszug beizufügen.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">§ 15 Widerrufsrecht</p>
        <ul className="list-disc pl-6">
          <li>
            Das Widerrufsrecht gilt 14 Tage, nachdem der Investor den Vertrag
            unterschrieben hat. In dieser Frist kann der Investor ohne Angabe
            von Gründen vom Vertrag zurücktreten.
          </li>
          <li>
            EraVend ist berechtigt, innerhalb von 14 Tagen nach
            Vertragsunterzeichnung den Vertrag mit dem Investor zu kündigen.
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <p className="font-semibold">§ 16 Teilnahmeberechtigung</p>
        <ul className="list-disc pl-6">
          <li>
            Sowohl private als auch gewerbliche Investoren sind nicht
            ausgeschlossen und dürfen investieren.
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <div className="border-2 border-dashed border-primary bg-bg-color p-6 inline-block rounded-lg">
          <p className="font-semibold">Bankverbindung und Verwendungszweck:</p>
          <p>
            <span className="font-medium">Bank:</span>{" "}
            Sparkasse-Schwaben-Bodensee
          </p>
          <p>
            <span className="font-medium">IBAN:</span> DE27 7315 0000 1002 8549
            49
          </p>
          <p>
            <span className="font-medium">Verwendungszweck:</span>{" "}
            {id || "[Vertrags-ID]"}
          </p>
        </div>
        <p className="mt-6 font-semibold">
          Mit der Unterschrift wird bestätigt, die Widerrufserklärung zur
          Kenntnis genommen zu haben, dass keine finanziellen Schwierigkeiten
          durch die Investition eintreten und den Allgemeinen
          Geschäftsbedingungen der EraVend GmbH & Co. KG zugestimmt wird.
        </p>
        <p className="font-semibold mt-6">
          Der Investor muss keine Befüllarbeiten oder Service an den Automaten
          durchführen. Die gesamte Verwaltung, Befüllung und der Service werden
          von der EraVend GmbH & Co. KG übernommen.
        </p>
        <p className="mt-6">
          <span className="font-medium">Wichtiger Hinweis:</span> Wir haften
          nicht für die steuerlichen Aspekte des Investors. Diese muss er
          eigenständig erledigen. Das maßgebliche Datum für den Beginn der
          Fristen für den Bau ist das Datum, an dem die Eravend GmbH & Co. KG
          unterschrieben hat, nicht das Datum der Unterschrift des Kunden. Die
          Zahlung muss innerhalb von 7 Tagen nach der Unterschrift des Investors
          geleistet werden.
        </p>
      </div>

      <p className="mt-6">Augsburg, den {format(new Date(), "dd.MM.yyyy")}</p>

      <div className="mt-20 flex flex-wrap justify-between items-center gap-8">
        <span className="block w-max">EraVend GmbH & Co. KG</span>
        <span className="block w-max">Investor</span>
      </div>
    </div>
  );
}
