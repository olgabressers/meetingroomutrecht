"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ContactLink } from "@/components/contact-link"
import { dict, type Locale } from "@/lib/dictionary"

export function Hero({ locale }: { locale: Locale }) {
  const t = dict[locale].hero
  const imgWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imgWrapRef.current) return
      imgWrapRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden">
      <div ref={imgWrapRef} className="absolute inset-0 scale-[1.25]" style={{ willChange: "transform" }}>
        <Image
          src="/venue/photo-9.jpg"
          alt="Lichte, ruime woonkamer met visgraatparket, hoge ramen en uitzicht op de tuin"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-foreground/35" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-44 lg:px-10 lg:pb-32">
        <p
          className="mb-6 text-xs uppercase tracking-[0.45em] text-background/80 animate-fade-up"
          style={{ animationDelay: "150ms", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
        >
          {t.eyebrow}
        </p>
        <h1
          className="max-w-4xl text-balance font-serif text-5xl font-light leading-[1.05] text-background sm:text-6xl lg:text-7xl animate-fade-up"
          style={{ animationDelay: "350ms", textShadow: "0 2px 20px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.4)" }}
        >
          {t.h1}
        </h1>
        <p
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-background lg:text-lg animate-fade-up"
          style={{ animationDelay: "550ms", textShadow: "0 1px 8px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.4)" }}
        >
          {t.body}
        </p>

        <div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up"
          style={{ animationDelay: "750ms" }}
        >
          <ContactLink className="inline-flex items-center justify-center rounded-full bg-background px-8 py-4 text-sm tracking-wide text-foreground transition-opacity hover:opacity-90">
            {t.book}
          </ContactLink>
          <a
            href="#galerij"
            className="inline-flex items-center justify-center rounded-full border border-background/50 px-8 py-4 text-sm tracking-wide text-background transition-colors hover:bg-background/10"
          >
            {t.photos}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden flex-col items-center gap-2 animate-fade-up md:flex" style={{ animationDelay: "1100ms" }}>
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-background/50">Scroll</span>
        <div className="h-10 w-px overflow-hidden">
          <div className="h-full w-full bg-background/50 animate-scroll-line" />
        </div>
      </div>
    </section>
  )
}
