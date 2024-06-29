import { format } from "date-fns";
import { useSearchParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ContractPaper() {
  const axiosPublic = useAxiosPublic();
  const [btnLoading, setBtnLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const amount = searchParams.get('amount');
  const numberOfMachines = searchParams.get('machines');
  const rate = searchParams.get('rate');
  const name = searchParams.get('name');
  const surname = searchParams.get('surname');
  const email = searchParams.get('email');
  const company = searchParams.get('company');
  const address = searchParams.get('address');
  const nid = searchParams.get('nid');
  const idDate = searchParams.get('date');
  const idAuthority = searchParams.get('authority');
  // const b2b = searchParams.get('b2b');

  const generatePDF = () => {
    setBtnLoading(true);
    axiosPublic(`/api/contract-id?email=${email}`)
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
              const link = document.createElement('a');
              link.href = res.data.url;
              link.setAttribute("target", "_blank");
              link.setAttribute('download', `contract-paper${res.data.url.substring(res.data.url.lastIndexOf("."))}`);
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              setBtnLoading(false);
            } else {
              Swal.fire({
                title: "Fehler",
                text: "Download des Vertragspapiers fehlgeschlagen!",
                icon: "error"
              })
              console.log("Error Occurred!");
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
          <p><span className="font-semibold">Gewinnbeteiligungsvertrag</span> zwischen EraVend GmbH & Co. KG Guldenstraße 9 86343 Königsbrunn HRA 21570</p>
          <p>und</p>
          <div>
            {
              name && <p><span className="font-medium">Name des Investors:</span> {name} {surname ? surname : null}</p>
            }
            {
              company && <p><span className="font-medium">Unternehmen:</span> {company}</p>
            }
            <p><span className="font-medium">E-Mail:</span> {email}</p>
            <p><span className="font-medium">Adresse:</span> {address}</p>
            <p><span className="font-medium">Ausweisnummer:</span> {nid}</p>
            <p><span className="font-medium">Ausstellungsdatum:</span> {format(idDate, "dd MMM, yyyy")}</p>
            <p><span className="font-medium">Ausstellende Behörde:</span> {idAuthority}</p>
            <p>(im Folgenden &ldquo;Investor&rdquo; genannt)</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">Präambel</p>
            <p>Der Projektträger plant, Automaten aufzustellen und bietet die Möglichkeit zur Beteiligung an diesen Automaten an. Diese Investition steht ausschließlich gewerblichen Investoren offen. Das Kapital wird für den Bau der Automaten sowie für den Kauf von Pizzen und Verpackungsmaterialien verwendet.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">§ 1 Gegenstand des Vertrags</p>
            <p>Der Investor beteiligt sich finanziell an einem oder mehreren Automaten (im Folgenden &ldquo;Projekt&rdquo;).</p>
            <p>Die Gewinnbeteiligung bezieht sich ausschließlich auf den mitinvestierten Automaten und nicht auf das Unternehmen selbst.</p>
            <p><span className="font-medium">Anzahl der Automaten:</span> {numberOfMachines}</p>
            <p><span className="font-medium">Investitionsbetrag:</span> {amount} EUR (maximal 12.000 EUR pro Automat)</p>
            <p><span className="font-medium">Prozentsatz der Gewinnbeteiligung:</span> {rate}%</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">§ 2 Risiken und Haftung</p>
            <p>Das Investment ist mit einem Risiko verbunden, bei dem der Investor sein Kapital vollständig verlieren kann.</p>
            <p>Der Projektträger haftet nicht für Verluste des eingesetzten Kapitals.</p>
            <p>Es werden keine Zinsen ausgezahlt, lediglich die prozentuale Gewinnbeteiligung.</p>
            <p>Bei Verlusten kann von den Investoren ein Beitrag verlangt werden, um die Verluste zu decken und weitere Einkäufe zu tätigen. Falls ausreichend Kapital durch die Rücklagen gebildet wurde, werden die Verluste aus diesen Rücklagen gedeckt.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">§ 3 Standortwahl und Information</p>
            <p>Der Projektträger hat die freie Wahl des Standorts der Automaten und darf diesen jederzeit ändern.</p>
            <p>Der Investor wird nach der Investition und nach dem Bau des Automaten über den Standort informiert. Die Standortwahl erfolgt per Zufallsgenerator.</p>
            <p>An manchen Standorten wird die Einsicht nur online möglich sein, da diese unter anderem auch in Kantinen platziert werden, was es für Außenstehende schwieriger gestaltet.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">§ 4 Gewinnberechnung und -verteilung</p>
            <p>Der Gewinn wird nach Abzug der Mehrwertsteuer und der folgenden Kosten berechnet:</p>
            <p>Mitarbeiter, KFZ, KFZ-Steuer, KFZ-Versicherung, Treibstoff, Pizzen, Verpackungsmaterialien, Strom für den Automaten, Miete für die Aufstellfläche, Verkaufsgebühren, Lagerflächenmiete und -strom, Versicherungen sowie weitere und unvorhersehbare Kosten</p>
            <p>Von der Gewinnbeteiligung des Investors wird eine Verwaltungs- und Befüllungsgebühr in Höhe von 3,28% abgezogen.</p>
            <p>Bei der Auszahlung fallen Gebühren in Höhe von 6,88% an.</p>
            <p>Zusätzlich werden 2% Rücklagen gebildet. Diese Rücklagen werden erst nach 5 Jahren ausbezahlt, sofern sie nicht für andere Kosten verwendet werden mussten.</p>
            <p>In den ersten 6 Monaten wird keine Gewinnbeteiligung ausbezahlt, um Rücklagen zu bilden. Nach Ablauf der 6 Monate kann die Auszahlung monatlich, quartalsweise oder jährlich erfolgen.</p>
            <p>Die Gewinnbeteiligung läuft über einen Zeitraum von 5 Jahren. Während dieser Zeit wird das investierte Kapital als Gewinnbeteiligung zurückbezahlt. Weitere Auszahlungen erfolgen nur für die investierte Gewinnbeteiligung.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">§ 5 Rechte des Investors</p>
            <p>Die Umsätze können transparent über eine WebAPP verfolgt werden.</p>
            <p>Der Investor hat das Recht auf Einsicht in die Betriebswirtschaftliche Auswertung (BWA). Bei postalischem Versand der BWA fallen Kosten in Höhe von 30,- EUR netto an.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">§ 6 Verkaufsrecht der Gewinnbeteiligungen</p>
            <p>Die gekauften Gewinnbeteiligungen an dem Automaten dürfen vom Investor verkauft werden. Der Projektträger hat ein Vorkaufsrecht auf die Gewinnbeteiligungen, ist jedoch nicht verpflichtet, dieses auszuüben.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">§ 7 Produktionsbeginn und Aufstellungszeitraum</p>
            <p>Der Betrag ist nach 7 Tagen fällig, nachdem das Investment vom Projektträger bestätigt wurde</p>
            <p>Die Produktion beginnt nach Ablauf der Widerrufsfrist von 14 Tagen.</p>
            <p>Nachdem das Widerrufsrecht abgelaufen ist und alle Investitionen getätigt wurden, werden die Automaten innerhalb von 4 Monaten aufgestellt. Dies ist ein unverbindlicher Wert.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">§ 8 Widerrufserklärung</p>
            <p>Der Investor hat das Recht, diesen Vertrag innerhalb von 14 Tagen ohne Angabe von Gründen zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses. Um das Widerrufsrecht auszuüben, muss der Investor den Projektträger mittels einer eindeutigen Erklärung per Post an die folgende Adresse Guldenstr. 9, 86343 Königsbrunn über den Entschluss, diesen Vertrag zu widerrufen, informieren. Zur Wahrung der Widerrufsfrist reicht es aus, dass der Investor die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendet.</p>
            <p>Bei einer Widerrufserklärung werden vom investierten Betrag 5% als Schadensersatz für den Aufwand einbehalten.</p>
            <p>Der Projektträger behält sich vor, innerhalb der 14 Tage Investoren sofort zu kündigen.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">§ 9 Datenschutzerklärung</p>
            <p>Der Projektträger verpflichtet sich, die personenbezogenen Daten des Investors gemäß den geltenden Datenschutzbestimmungen zu verarbeiten und zu schützen.</p>
            <p>Die Daten werden ausschließlich zur Durchführung und Verwaltung des Beteiligungsverhältnisses verwendet.</p>
            <p>Der Investor hat das Recht, jederzeit Auskunft über die gespeicherten personenbezogenen Daten zu erhalten und deren Berichtigung, Löschung oder Sperrung zu verlangen.</p>
            <p>Weitere Informationen zum Datenschutz sind in der Datenschutzerklärung der EraVend GmbH & Co. KG enthalten, die dem Investor zur Verfügung gestellt wird.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">§ 10 Streitbeilegung</p>
            <p>Sollte es zu Streitigkeiten aus diesem Vertrag kommen, verpflichten sich die Vertragsparteien, zunächst eine Mediation durchzuführen, bevor der Rechtsweg beschritten wird.</p>
            <p>Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist Augsburg</p>
            <p>Es gilt deutsches Recht.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">§ 11 Laufzeit der Gewinnbeteiligung</p>
            <p>Die Laufzeit der Gewinnbeteiligung erstreckt sich auf die gesamte Nutzungsdauer des jeweiligen Automaten. Die Gewinnbeteiligung endet, sobald der Automat außer Betrieb genommen und dauerhaft entfernt wird.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">§ 12 Schlussbestimmungen</p>
            <p>EraVend GmbH & Co. KG haftet nicht für Risiken und Verluste. Jeder Investor muss sich der Risiken bewusst sein.</p>
            <p>Änderungen und Ergänzungen dieses Vertrags bedürfen der Schriftform</p>
            <p>Sollten einzelne Bestimmungen dieses Vertrags unwirksam sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. Unwirksame Bestimmungen werden durch solche ersetzt, die dem wirtschaftlichen Zweck der unwirksamen Bestimmungen möglichst nahekommen</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">§ 13 Vertraulichkeit</p>
            <p>Die Vertragsparteien verpflichten sich, alle im Zusammenhang mit diesem Vertrag und dessen Durchführung erlangten vertraulichen Informationen streng vertraulich zu behandeln und Dritten nicht zugänglich zu machen.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">§ 14 Identitätsprüfung des Investors</p>
            <p>Der Investor muss eine Kopie des Personalausweises oder eines vergleichbaren Dokuments vorlegen, um seine Identität und Gewerbetätigkeit nachzuweisen. Bei juristischen Personen ist ein Handelsregisterauszug beizufügen.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">§ 15 Zusicherungen des Investors</p>
            <p>Der Investor sichert zu, dass er gewerblich tätig ist und alle notwendigen Genehmigungen und Zulassungen besitzt.</p>
          </div>

          <div className="mt-4">
            <div className="border-2 border-dashed border-primary bg-bg-color p-6 inline-block rounded-lg">
              <p className="font-semibold">Bankverbindung und Verwendungszweck:</p>
              <p><span className="font-medium">Bank:</span> Sparkasse-Schwaben-Bodensee</p>
              <p><span className="font-medium">IBAN:</span> DE27 7315 0000 1002 8549 49</p>
              <p><span className="font-medium">Verwendungszweck:</span> [Vertrags-ID]</p>
            </div>
            <p className="mt-4">Mit der Unterschrift wird bestätigt, die Widerrufserklärung zur Kenntnis genommen zu haben, dass keine finanziellen Schwierigkeiten durch die Investition eintreten und den Allgemeinen Geschäftsbedingungen der EraVend GmbH & Co. KG zugestimmt wird.</p>
            <p>Der Investor muss keine Befüllarbeiten oder Service an den Automaten durchführen. Die gesamte Verwaltung, Befüllung und der Service werden von der EraVend GmbH & Co. KG übernommen.</p>
            <p className="mt-4"><span className="font-medium">Wichtiger Hinweis:</span> Dieses Investitionsangebot richtet sich ausschließlich an gewerbliche Investoren. Private Anleger sind von der Investition ausgeschlossen.</p>
            <p>{idAuthority}, {format(idDate, "dd MMM, yyyy")}</p>
          </div>

          <div className="mt-10 flex flex-wrap justify-start items-center gap-2">
            <span className="font-semibold">Unterschrift des {name ? name + (surname ? " " + surname : null) : company}:</span>
            <span>____________________</span>
          </div>

          <div className="mt-20 flex flex-wrap justify-start items-center gap-2">
            <span className="font-semibold">Unterschrift des Eravend GmbH & Co. KG:</span>
            <span>____________________</span>
          </div>

          <div className="mt-8 text-center">
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