import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacybeleid — Villa 37 Utrecht",
}

export default function PrivacybeleidPage() {
  return (
    <LegalPage locale="nl" title="Privacybeleid">
      <p>Versie: juni 2025 · Villa 37, Emmikkerboslaan 37, 3454 NV Utrecht</p>

      <h2>Cookies</h2>
      <p>
        Deze website gebruikt geen cookies en plaatst geen trackers. Er worden geen gegevens
        opgeslagen in uw browser.
      </p>

      <h2>Welke gegevens wij verwerken</h2>
      <p>
        Via het contactformulier op deze website kunt u de volgende gegevens achterlaten: naam,
        e-mailadres, telefoonnummer, type evenement, gewenste datum en een bericht. Deze gegevens
        worden uitsluitend gebruikt om uw aanvraag te beantwoorden.
      </p>

      <h2>Hoe wij uw gegevens verwerken</h2>
      <p>
        Formulierinzendingen worden verwerkt via{' '}
        <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">Formspree</a>.
        Formspree is gecertificeerd conform de AVG/GDPR en heeft een verwerkersovereenkomst
        beschikbaar op{' '}
        <a href="https://formspree.io/legal/dpa" target="_blank" rel="noopener noreferrer">
          formspree.io/legal/dpa
        </a>
        . Uw gegevens worden niet verkocht of gedeeld met derden voor marketingdoeleinden.
      </p>

      <h2>Bewaartermijn</h2>
      <p>
        Uw gegevens worden bewaard zolang dit nodig is voor de afhandeling van uw aanvraag en niet
        langer dan twee jaar nadien.
      </p>

      <h2>Uw rechten</h2>
      <p>Op grond van de AVG heeft u de volgende rechten:</p>
      <ul>
        <li>Recht op inzage in uw persoonsgegevens.</li>
        <li>Recht op correctie van onjuiste gegevens.</li>
        <li>Recht op verwijdering van uw gegevens.</li>
        <li>Recht op beperking van de verwerking.</li>
        <li>Recht op overdraagbaarheid van uw gegevens.</li>
        <li>Recht om bezwaar te maken tegen de verwerking.</li>
      </ul>
      <p>
        Om een beroep te doen op uw rechten kunt u contact opnemen via{' '}
        <a href="mailto:contact@meetingroomutrecht.nl">contact@meetingroomutrecht.nl</a>.
      </p>

      <h2>Klacht indienen</h2>
      <p>
        Heeft u een klacht over de verwerking van uw persoonsgegevens? U kunt een klacht indienen
        bij de{' '}
        <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">
          Autoriteit Persoonsgegevens
        </a>
        .
      </p>

      <h2>Contact</h2>
      <p>
        Vragen over dit privacybeleid? Neem contact op via{' '}
        <a href="mailto:contact@meetingroomutrecht.nl">contact@meetingroomutrecht.nl</a>.
      </p>
    </LegalPage>
  )
}
