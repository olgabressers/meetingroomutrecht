"use client"

import { useEffect, useState } from "react"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { handleContactClick } from "@/components/contact-link"
import { dict, type Locale } from "@/lib/dictionary"

function LangToggle({ locale, scrolled }: { locale: Locale; scrolled: boolean }) {
  const options: { label: string; href: string; value: Locale }[] = [
    { label: 'NL', href: '/', value: 'nl' },
    { label: 'EN', href: '/en', value: 'en' },
  ]

  return (
    <div
      className={`flex items-center rounded-full p-0.5 text-xs font-medium tracking-wide transition-all duration-300 ${
        scrolled
          ? 'bg-secondary border border-border'
          : 'bg-white/10 border border-white/20 backdrop-blur-sm'
      }`}
    >
      {options.map((opt) => {
        const active = locale === opt.value
        return (
          <Link
            key={opt.value}
            href={opt.href}
            aria-current={active ? 'page' : undefined}
            className={`relative rounded-full px-3 py-1 transition-all duration-300 ${
              active
                ? scrolled
                  ? 'bg-foreground text-background shadow-sm'
                  : 'bg-white text-foreground shadow-sm'
                : scrolled
                  ? 'text-foreground/40 hover:text-foreground/70'
                  : 'text-white/45 hover:text-white/75'
            }`}
          >
            {opt.label}
          </Link>
        )
      })}
    </div>
  )
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = dict[locale].nav
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [logoBounce, setLogoBounce] = useState(false)

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.scrollY < 80) {
      e.preventDefault()
      setLogoBounce(false)
      requestAnimationFrame(() => setLogoBounce(true))
    }
  }

  const navItems = [
    { label: t.location, href: "#locatie" },
    { label: t.occasions, href: "#gelegenheden" },
    { label: t.photos, href: "#galerij" },
    { label: t.pricing, href: "#tarieven" },
    { label: t.contact, href: "#contact" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a
          href="#top"
          onClick={handleLogoClick}
          className={logoBounce ? "animate-logo-bounce" : ""}
          onAnimationEnd={() => setLogoBounce(false)}
          style={{
            display: "block",
            position: "relative",
            width: 105,
            height: 113,
            borderRadius: "1rem",
            overflow: "hidden",
            backgroundColor: scrolled ? "var(--primary)" : "transparent",
            transition: "background-color 500ms",
          }}
        >
          <Image
            src="/logo.png"
            alt="Villa 37 — Meetingroom te huur"
            fill
            priority
            sizes="105px"
            className={`object-contain transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"}`}
          />
          <Image
            src="/logo.png"
            alt="Villa 37 — Meetingroom te huur"
            fill
            sizes="105px"
            className={`object-contain transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
            style={{ filter: "invert(1)", mixBlendMode: "screen" }}
          />
        </a>

        {/* Desktop nav */}
        <nav aria-label={locale === 'nl' ? 'Hoofdnavigatie' : 'Main navigation'} className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href === "#contact" ? "#contact-card" : item.href}
              onClick={item.href === "#contact" ? handleContactClick : undefined}
              className={`text-sm tracking-wide transition-colors duration-500 ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/85 hover:text-white"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: toggle + CTA (desktop) / toggle + hamburger (mobile) */}
        <div className="flex items-center gap-3">
          <LangToggle locale={locale} scrolled={scrolled} />

          <a
            href="#contact-card"
            onClick={handleContactClick}
            className={`hidden rounded-full px-6 py-2.5 text-sm tracking-wide transition-all duration-500 hover:opacity-90 md:inline-block ${
              scrolled
                ? "bg-primary text-primary-foreground"
                : "bg-white/15 text-white border border-white/30 backdrop-blur-sm"
            }`}
          >
            {t.book}
          </a>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label={locale === 'nl' ? 'Menu openen' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5 md:hidden"
          >
            <span className={`block w-6 border-t transition-all duration-500 ${scrolled ? "border-foreground" : "border-white"} ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-6 border-t transition-all duration-500 ${scrolled ? "border-foreground" : "border-white"} ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 border-t transition-all duration-500 ${scrolled ? "border-foreground" : "border-white"} ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href === "#contact" ? "#contact-card" : item.href}
                onClick={(e) => { setOpen(false); if (item.href === "#contact") handleContactClick(e) }}
                className="border-b border-border/60 py-3 text-sm tracking-wide text-foreground/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact-card"
              onClick={(e) => { setOpen(false); handleContactClick(e) }}
              className="mt-4 rounded-full bg-primary px-6 py-3 text-center text-sm tracking-wide text-primary-foreground"
            >
              {t.book}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
