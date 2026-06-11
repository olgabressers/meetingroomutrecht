import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { Occasions } from "@/components/occasions"
import { Gallery } from "@/components/gallery"
import { Pricing } from "@/components/pricing"
import { ContactCta } from "@/components/contact-cta"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function EnPage() {
  return (
    <main className="bg-background">
      <SiteHeader locale="en" />
      <Hero locale="en" />
      <Intro locale="en" />
      <Occasions locale="en" />
      <Gallery locale="en" />
      <Pricing locale="en" />
      <ContactCta locale="en" />
      <SiteFooter locale="en" />
      <WhatsAppButton locale="en" />
    </main>
  )
}
