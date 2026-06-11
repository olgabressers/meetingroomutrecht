import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy — Villa 37 Utrecht",
}

export default function PrivacyPage() {
  return (
    <LegalPage locale="en" title="Privacy Policy">
      <p>Version: June 2025 · Villa 37, Emmikkerboslaan 37, 3454 NV Utrecht, Netherlands</p>

      <h2>Cookies</h2>
      <p>
        This website does not use cookies and does not place any trackers. No data is stored in
        your browser.
      </p>

      <h2>What data we process</h2>
      <p>
        Via the contact form on this website you may submit the following data: name, email address,
        phone number, type of event, preferred date and a message. This data is used solely to
        respond to your enquiry.
      </p>

      <h2>How we process your data</h2>
      <p>
        Form submissions are processed via{' '}
        <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">Formspree</a>.
        Formspree is GDPR-compliant and has a Data Processing Agreement available at{' '}
        <a href="https://formspree.io/legal/dpa" target="_blank" rel="noopener noreferrer">
          formspree.io/legal/dpa
        </a>
        . Your data is not sold or shared with third parties for marketing purposes.
      </p>

      <h2>Retention period</h2>
      <p>
        Your data will be retained for as long as necessary to handle your enquiry and for no longer
        than two years thereafter.
      </p>

      <h2>Your rights</h2>
      <p>Under the GDPR you have the following rights:</p>
      <ul>
        <li>Right of access to your personal data.</li>
        <li>Right to correction of inaccurate data.</li>
        <li>Right to erasure of your data.</li>
        <li>Right to restriction of processing.</li>
        <li>Right to data portability.</li>
        <li>Right to object to processing.</li>
      </ul>
      <p>
        To exercise your rights please contact us at{' '}
        <a href="mailto:contact@meetingroomutrecht.nl">contact@meetingroomutrecht.nl</a>.
      </p>

      <h2>Filing a complaint</h2>
      <p>
        If you have a complaint about the processing of your personal data, you may file a complaint
        with the{' '}
        <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">
          Dutch Data Protection Authority (Autoriteit Persoonsgegevens)
        </a>
        .
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this privacy policy? Please contact us at{' '}
        <a href="mailto:contact@meetingroomutrecht.nl">contact@meetingroomutrecht.nl</a>.
      </p>
    </LegalPage>
  )
}
