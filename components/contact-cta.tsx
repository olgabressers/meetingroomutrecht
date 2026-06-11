"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"
import { dict, type Locale } from "@/lib/dictionary"

export function ContactCta({ locale }: { locale: Locale }) {
  const t = dict[locale].contact
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [shaking, setShaking] = useState(false)

  useEffect(() => {
    const handler = () => {
      setShaking(false)
      requestAnimationFrame(() => setShaking(true))
    }
    window.addEventListener("shake-submit-btn", handler)
    return () => window.removeEventListener("shake-submit-btn", handler)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)
    try {
      const res = await fetch('https://formspree.io/f/mzdqaznj', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <Image
        src="/venue/photo-5.jpg"
        alt=""
        aria-hidden="true"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-foreground/80" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32">
        <Reveal className="text-background">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-background/70">{t.eyebrow}</p>
          <h2 className="text-balance font-serif text-4xl font-light leading-tight lg:text-5xl">
            {t.h2}
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-background/80">{t.body}</p>

          <dl className="mt-10 space-y-4 text-sm text-background/85">
            <div className="flex gap-3">
              <dt className="w-24 text-background/60">{t.addressLabel}</dt>
              <dd>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Emmikkerboslaan+37,+3454+NV+Utrecht"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-background/30 underline-offset-2 transition-colors hover:decoration-background"
                >
                  Emmikkerboslaan 37, 3454 NV Utrecht, Nederland
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 text-background/60">{t.phoneLabel}</dt>
              <dd>
                <a
                  href="tel:+31647779797"
                  className="underline decoration-background/30 underline-offset-2 transition-colors hover:decoration-background"
                >
                  06 477 9797
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 text-background/60">{t.emailLabel}</dt>
              <dd>contact@meetingroomutrecht.nl</dd>
            </div>
          </dl>
        </Reveal>

        <div id="contact-card" className="scroll-mt-40">
          <Reveal delay={200} className="rounded-[2rem] bg-background p-8 lg:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <h3 className="font-serif text-3xl font-light text-foreground">{t.thanks}</h3>
                <p className="mt-3 max-w-xs text-pretty leading-relaxed text-muted-foreground">
                  {t.thanksBody}
                </p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={t.form.name} name="name" placeholder={t.form.namePlaceholder} required />
                  <Field label={t.form.phone} name="phone" type="tel" placeholder={t.form.phonePlaceholder} />
                </div>
                <Field label={t.form.email} name="email" type="email" placeholder={t.form.emailPlaceholder} required />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="type" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {t.form.type}
                    </label>
                    <select
                      id="type"
                      name="type"
                      className="border-b border-border bg-transparent py-2 text-sm text-foreground outline-none focus:border-foreground"
                    >
                      {t.form.typeOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <Field label={t.form.date} name="date" type="date" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder={t.form.messagePlaceholder}
                    className="resize-none border-b border-border bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-foreground"
                  />
                </div>
                <label className="flex items-start gap-3 text-xs text-muted-foreground">
                  <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 accent-primary" />
                  <span>
                    {locale === 'nl' ? (
                      <>Ik ga akkoord met de{' '}
                        <a href="/voorwaarden" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">algemene voorwaarden</a>
                        {' '}en het{' '}
                        <a href="/privacybeleid" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">privacybeleid</a>.
                      </>
                    ) : (
                      <>I agree to the{' '}
                        <a href="/en/terms" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">terms &amp; conditions</a>
                        {' '}and{' '}
                        <a href="/en/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">privacy policy</a>.
                      </>
                    )}
                  </span>
                </label>
                {error && (
                  <p className="text-sm text-red-500">
                    {locale === 'nl' ? 'Er is iets misgegaan. Probeer het opnieuw.' : 'Something went wrong. Please try again.'}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className={`mt-2 rounded-full bg-primary px-8 py-4 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 ${shaking ? "animate-shake" : ""}`}
                  onAnimationEnd={() => setShaking(false)}
                >
                  {submitting
                    ? (locale === 'nl' ? 'Versturen…' : 'Sending…')
                    : t.form.submit}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="border-b border-border bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-foreground"
      />
    </div>
  )
}
