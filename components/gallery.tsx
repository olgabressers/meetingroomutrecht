import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"
import { ContactLink } from "@/components/contact-link"
import { dict, type Locale } from "@/lib/dictionary"

const spans = ["lg:col-span-2 lg:row-span-2", "", "", "lg:col-span-2"]

export function Gallery({ locale }: { locale: Locale }) {
  const t = dict[locale].gallery

  return (
    <section id="galerij" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-accent-foreground/70">{t.eyebrow}</p>
          <h2 className="text-balance font-serif text-4xl font-light leading-tight text-foreground lg:text-5xl">
            {t.h2}
          </h2>
        </div>
        <ContactLink className="shrink-0 rounded-full border border-border px-6 py-3 text-sm tracking-wide text-foreground transition-colors hover:bg-secondary">
          {t.cta}
        </ContactLink>
      </Reveal>

      <div className="grid auto-rows-[16rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.images.map((img, i) => (
          <Reveal key={img.src} delay={i * 80} className={`group relative overflow-hidden rounded-[2rem] ${spans[i]}`}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) calc(50vw - 2rem), calc(33vw - 2rem)"
            />
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
