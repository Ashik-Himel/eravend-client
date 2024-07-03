import { Helmet } from "react-helmet-async";

export default function CookiePolicy() {
  return (
    <main className="my-12">
      <Helmet>
        <title>Cookie Policy - EraVend</title>
      </Helmet>

      <section>
        <div className="container">
          <h2 className="text-primary text-4xl sm:text-5xl font-medium text-center mb-8">Cookie-Richtlinie</h2>

          <h3 className="text-2xl font-semibold mb-1">Einführung</h3>
          <p className="text-gray-600 mb-6">Willkommen bei EraVend. Diese Cookie-Richtlinie erklärt, wie wir Cookies und ähnliche Technologien auf unserer Website verwenden.</p>

          <h3 className="text-2xl font-semibold mb-1">Was sind Cookies?</h3>
          <p className="text-gray-600 mb-6">Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät abgelegt werden, wenn Sie eine Website besuchen. Sie helfen der Website, Ihr Gerät zu erkennen und Informationen über Ihre Präferenzen oder vergangene Aktionen zu speichern.</p>

          <h3 className="text-2xl font-semibold mb-1">Wie wir Cookies verwenden</h3>
          <p className="text-gray-600 mb-2">Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern, einschließlich:</p>
          <ul className="list-disc list-outside pl-8 mb-6 [&>li]:mb-2">
            <li><span className="font-medium">Notwendige Cookies:</span> Diese Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich. Ohne diese Cookies würden einige Teile unserer Website nicht funktionieren.</li>
            <li><span className="font-medium">Leistungs-Cookies:</span> Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und melden.</li>
            <li><span className="font-medium">Funktions-Cookies:</span> Diese Cookies ermöglichen es unserer Website, sich an Entscheidungen zu erinnern, die Sie in der Vergangenheit getroffen haben, wie Ihren Benutzernamen und Ihre Sprachpräferenzen.</li>
            <li><span className="font-medium">Werbe-Cookies:</span> Diese Cookies werden verwendet, um Ihnen Werbung anzuzeigen, die für Sie und Ihre Interessen relevant ist. Sie helfen auch, die Anzahl der Anzeigen zu begrenzen, die Sie sehen, und die Effektivität von Werbekampagnen zu messen.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-1">Cookies von Drittanbietern</h3>
          <p className="text-gray-600 mb-6">Wir können auch Cookies von Drittanbietern wie Google Analytics verwenden, um Informationen über Ihre Nutzungsgewohnheiten zu sammeln und unsere Dienstleistungen zu verbessern.</p>

          <h3 className="text-2xl font-semibold mb-1">Verwaltung von Cookies</h3>
          <p className="text-gray-600 mb-6">Sie können Cookies auf verschiedene Weise verwalten und kontrollieren. Bitte beachten Sie, dass das Entfernen oder Blockieren von Cookies Ihre Benutzererfahrung beeinträchtigen kann und einige Teile unserer Website möglicherweise nicht mehr vollständig zugänglich sind.</p>

          <h3 className="text-2xl font-semibold mb-1">Änderungen dieser Cookie-Richtlinie</h3>
          <p className="text-gray-600 mb-6">Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Wir empfehlen Ihnen, diese Seite regelmäßig zu überprüfen, um sich darüber zu informieren, wie wir Cookies verwenden.</p>

          <h3 className="text-2xl font-semibold mb-1">Kontaktieren Sie uns</h3>
          <p className="text-gray-600 mb-8">Wenn Sie Fragen zu unserer Verwendung von Cookies haben, kontaktieren Sie uns bitte unter:</p>

          <p className="text-xl font-semibold">EraVend GmbH & Co. KG</p>
          <address className="not-italic"><span className="font-medium">Adresse:</span> Guldenstrasse 9, 86343 Königsbrunn, Germany</address>
          <p><span className="font-medium">E-Mail:</span> <a className="text-primary underline" href="mailto:investment@eravend.com" target="_blank" rel="noopener noreferrer">investment@eravend.com</a></p>
          <p><span className="font-medium">Telefon:</span> <a className="text-primary underline" href="tel:+4982120969113" target="_blank" rel="noopener noreferrer">+49 821 20969113</a></p>
        </div>
      </section>
    </main>
  );
}