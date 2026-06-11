import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"
import { dict, type Locale } from "@/lib/dictionary"

const images = [
  "/venue/photo-12.jpg",
  "/venue/photo-6.jpg",
  "/venue/photo-19.jpg",
  "/venue/photo-9.jpg",
  "/venue/photo-3.jpg",
]

export function Occasions({ locale }: { locale: Locale }) {
  const t = dict[locale].occasions

  return (
    <section id="gelegenheden" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-accent-foreground/70">{t.eyebrow}</p>
          <h2 className="text-balance font-serif text-4xl font-light leading-tight text-foreground lg:text-5xl">
            {t.h2}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <article className="group">
                <div className="relative h-80 overflow-hidden rounded-[2rem]">
                  <Image
                    src={images[i]}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) calc(100vw - 3rem), calc(33vw - 4rem)"
                  />
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-light text-foreground">{item.title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
