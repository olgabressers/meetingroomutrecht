import { ContactLink } from "@/components/contact-link"
import { dict, type Locale } from "@/lib/dictionary"

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = dict[locale]

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="font-serif text-2xl font-medium text-foreground">Villa 37</p>
          <p className="mt-2 text-sm text-muted-foreground">{t.footer.tagline}</p>
        </div>

        <nav aria-label={locale === 'nl' ? 'Voetnavigatie' : 'Footer navigation'} className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <a href="#locatie" className="hover:text-foreground">{t.nav.location}</a>
          <a href="#gelegenheden" className="hover:text-foreground">{t.nav.occasions}</a>
          <a href="#galerij" className="hover:text-foreground">{t.nav.photos}</a>
          <a href="#tarieven" className="hover:text-foreground">{t.nav.pricing}</a>
          <ContactLink className="hover:text-foreground">{t.nav.contact}</ContactLink>
        </nav>

        <ContactLink className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-7 py-3 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90">
          {t.footer.book}
        </ContactLink>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground lg:px-10">
          © {new Date().getFullYear()} Villa 37.{' '}
          {locale === 'nl' ? 'Alle rechten voorbehouden.' : 'All rights reserved.'}
        </p>
      </div>
    </footer>
  )
}
