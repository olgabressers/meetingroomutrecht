import { Reveal } from "@/components/ui/reveal"
import { ContactLink } from "@/components/contact-link"
import { dict, type Locale } from "@/lib/dictionary"

export function Pricing({ locale }: { locale: Locale }) {
  const t = dict[locale].pricing

  return (
    <section id="tarieven" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-muted-foreground">{t.eyebrow}</p>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="rounded-[2rem] border border-border p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{t.mainLabel}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <p className="font-serif text-6xl font-light text-foreground">€460</p>
                  <p className="text-sm text-muted-foreground">{t.excl}</p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.mainPer}</p>
                <ul className="mt-8 space-y-3 text-sm text-foreground/80">
                  {t.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[3px] h-1 w-1 flex-shrink-0 rounded-full bg-foreground/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:border-l lg:border-border lg:pl-20">
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{t.addonLabel}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <p className="font-serif text-4xl font-light text-foreground">€19</p>
                  <p className="text-sm text-muted-foreground">{t.excl}</p>
                  <p className="text-sm text-muted-foreground">{t.addonPer}</p>
                </div>
                <p className="mt-3 font-medium text-foreground">{t.addonName}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.addonBody}</p>
              </div>

            </div>

            <div className="mt-10 border-t border-border pt-8">
              <ContactLink className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90">
                {t.cta}
              </ContactLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
