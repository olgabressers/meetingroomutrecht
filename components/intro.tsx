import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"
import { StatCounter } from "@/components/ui/stat-counter"
import { ContactLink } from "@/components/contact-link"
import { dict, type Locale } from "@/lib/dictionary"

export function Intro({ locale }: { locale: Locale }) {
  const t = dict[locale].intro

  return (
    <section id="locatie" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-accent-foreground/70">{t.eyebrow}</p>
            <h2 className="text-balance font-serif text-4xl font-light leading-tight text-foreground lg:text-5xl">
              {t.h2}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{t.body1}</p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t.body2}</p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t.body3}</p>
          </Reveal>
          <Reveal delay={300}>
            <ContactLink className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-foreground underline-offset-8 hover:underline">
              {t.cta}
              <span aria-hidden="true">→</span>
            </ContactLink>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative h-[34rem] w-full overflow-hidden rounded-[2rem]">
          <Image
            src="/venue/photo-4.jpg"
            alt="Ruime, lichte woonkamer met eethoek, hoge ramen en visgraatparket"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) calc(100vw - 3rem), calc(50vw - 5rem)"
          />
        </Reveal>
      </div>

      <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-border bg-border lg:grid-cols-4">
        {t.stats.map((stat) => (
          <StatCounter key={stat.value} value={stat.value} label={stat.label} />
        ))}
      </dl>
    </section>
  )
}
