import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { Occasions } from "@/components/occasions"
import { Gallery } from "@/components/gallery"
import { Pricing } from "@/components/pricing"
import { ContactCta } from "@/components/contact-cta"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main className="bg-background">
      <SiteHeader locale="nl" />
      <Hero locale="nl" />
      <Intro locale="nl" />
      <Occasions locale="nl" />
      <Gallery locale="nl" />
      <Pricing locale="nl" />
      <ContactCta locale="nl" />
      <SiteFooter locale="nl" />
      <WhatsAppButton locale="nl" />
    </main>
  )
}
