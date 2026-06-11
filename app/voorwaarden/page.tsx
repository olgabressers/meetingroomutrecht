import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Algemene Voorwaarden — Villa 37 Utrecht",
}

export default function VoorwaardenPage() {
  return (
    <LegalPage locale="nl" title="Algemene Voorwaarden">
      <p>Versie: juni 2025 · Villa 37, Emmikkerboslaan 37, 3454 NV Utrecht</p>

      <h2>1. Toepasselijkheid</h2>
      <p>
        Deze algemene voorwaarden zijn van toepassing op alle reserveringen en huurovereenkomsten
        voor de locatie Villa 37, gevestigd aan Emmikkerboslaan 37 te Utrecht. Door een reservering
        te plaatsen gaat de huurder akkoord met deze voorwaarden.
      </p>

      <h2>2. Reservering en betaling</h2>
      <p>
        Een reservering is definitief na schriftelijke bevestiging per e-mail. Betaling dient te
        geschieden binnen 7 dagen na ontvangst van de factuur, tenzij anders overeengekomen.
      </p>

      <h2>3. Tarieven en BTW</h2>
      <p>
        Villa 37 is een particuliere verhuurder en is niet BTW-plichtig. De vermelde tarieven zijn
        eindprijzen. Er wordt geen BTW in rekening gebracht.
      </p>

      <h2>4. Annulering</h2>
      <ul>
        <li>Annulering tot 14 dagen voor de boekingsdatum: volledige restitutie.</li>
        <li>Annulering tussen 7 en 14 dagen voor de boekingsdatum: 50% restitutie.</li>
        <li>Annulering binnen 7 dagen voor de boekingsdatum: geen restitutie.</li>
      </ul>

      <h2>5. Gebruik van de locatie</h2>
      <p>
        De huurder is verantwoordelijk voor een correct gebruik van de locatie en gaat ermee akkoord
        de ruimte en inrichting met zorg te behandelen. Schade veroorzaakt door de huurder of diens
        gasten zal worden verhaald.
      </p>
      <p>
        De locatie is uitsluitend beschikbaar voor het overeengekomen gebruik en de opgegeven
        tijdsduur. Roken is niet toegestaan in het pand. Huisdieren zijn niet toegestaan tenzij
        uitdrukkelijk anders overeengekomen.
      </p>

      <h2>6. Aansprakelijkheid en verzekering</h2>
      <p>
        De huurder is aansprakelijk voor alle schade aan de locatie, de inventaris of eigendommen
        van Villa 37, veroorzaakt door de huurder, diens gasten of door derden die door de huurder
        zijn uitgenodigd. De huurder dient eventuele schade direct te melden en zal de kosten van
        herstel of vervanging volledig vergoeden.
      </p>
      <p>
        De huurder wordt geadviseerd te beschikken over een geldige
        bedrijfsaansprakelijkheidsverzekering of evenementenverzekering die schade aan derden en
        aan de locatie dekt. Villa 37 is niet verantwoordelijk voor het ontbreken van een
        dergelijke verzekering.
      </p>
      <p>
        Villa 37 aanvaardt geen aansprakelijkheid voor diefstal, verlies of schade aan eigendommen
        van de huurder of diens gasten, noch voor letselschade van de huurder of diens gasten,
        tenzij deze schade het rechtstreekse gevolg is van opzet of grove schuld van Villa 37.
        Deelname aan activiteiten op de locatie geschiedt op eigen risico van de huurder.
      </p>

      <h2>7. Overmacht</h2>
      <p>
        In geval van overmacht (zoals brand, overstroming, ernstige ziekte of andere omstandigheden
        buiten de macht van Villa 37) behouden wij ons het recht voor om een boeking te annuleren.
        In dat geval ontvangt de huurder volledige restitutie.
      </p>

      <h2>8. Toepasselijk recht</h2>
      <p>
        Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de
        bevoegde rechtbank in Utrecht.
      </p>

      <h2>9. Contact</h2>
      <p>
        Bij vragen over deze voorwaarden kunt u contact opnemen via{' '}
        <a href="mailto:contact@meetingroomutrecht.nl">contact@meetingroomutrecht.nl</a>.
      </p>
    </LegalPage>
  )
}
