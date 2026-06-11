import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms & Conditions — Villa 37 Utrecht",
}

export default function TermsPage() {
  return (
    <LegalPage locale="en" title="Terms & Conditions">
      <p>Version: June 2025 · Villa 37, Emmikkerboslaan 37, 3454 NV Utrecht, Netherlands</p>

      <h2>1. Applicability</h2>
      <p>
        These terms and conditions apply to all reservations and rental agreements for Villa 37,
        located at Emmikkerboslaan 37 in Utrecht. By placing a reservation the renter agrees to
        these terms.
      </p>

      <h2>2. Reservation and payment</h2>
      <p>
        A reservation is confirmed upon receipt of written confirmation by email. Payment is due
        within 7 days of receiving the invoice, unless otherwise agreed.
      </p>

      <h2>3. Pricing and VAT</h2>
      <p>
        Villa 37 is a private individual landlord and is not subject to VAT. The stated prices are
        final prices. No VAT will be charged.
      </p>

      <h2>4. Cancellation</h2>
      <ul>
        <li>Cancellation up to 14 days before the booking date: full refund.</li>
        <li>Cancellation between 7 and 14 days before the booking date: 50% refund.</li>
        <li>Cancellation within 7 days of the booking date: no refund.</li>
      </ul>

      <h2>5. Use of the venue</h2>
      <p>
        The renter is responsible for proper use of the venue and agrees to treat the space and
        furnishings with care. Damage caused by the renter or their guests will be charged.
      </p>
      <p>
        The venue is available solely for the agreed purpose and duration. Smoking is not permitted
        inside the building. Pets are not permitted unless expressly agreed otherwise.
      </p>

      <h2>6. Liability</h2>
      <p>
        Villa 37 accepts no liability for theft, loss or damage to the property of the renter or
        their guests. Participation in activities on the premises is at the renter&apos;s own risk.
      </p>

      <h2>7. Force majeure</h2>
      <p>
        In the event of force majeure (such as fire, flooding, serious illness or other
        circumstances beyond the control of Villa 37) we reserve the right to cancel a booking. In
        that case the renter will receive a full refund.
      </p>

      <h2>8. Governing law</h2>
      <p>
        These terms are governed by Dutch law. Disputes shall be submitted to the competent court
        in Utrecht, the Netherlands.
      </p>

      <h2>9. Contact</h2>
      <p>
        For questions about these terms please contact us at{' '}
        <a href="mailto:contact@meetingroomutrecht.nl">contact@meetingroomutrecht.nl</a>.
      </p>
    </LegalPage>
  )
}
