import type React from "react"
import Link from "next/link"
import Image from "next/image"
import type { Locale } from "@/lib/dictionary"

export function LegalPage({ locale, title, children }: {
  locale: Locale
  title: string
  children: React.ReactNode
}) {
  const homeHref = locale === 'nl' ? '/' : '/en'
  const backLabel = locale === 'nl' ? '← Terug naar home' : '← Back to home'

  return (
    <>
      <header className="border-b border-border bg-background/85 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
          <Link href={homeHref} style={{ display: 'block', position: 'relative', width: 80, height: 86, borderRadius: '0.75rem', overflow: 'hidden', backgroundColor: 'var(--primary)' }}>
            <Image
              src="/logo.png"
              alt="Villa 37 — Meetingroom te huur"
              fill
              sizes="80px"
              className="object-contain"
              style={{ filter: "invert(1)", mixBlendMode: "screen" }}
            />
          </Link>
          <Link href={homeHref} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {backLabel}
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-12 lg:px-10">
        <h1 className="font-serif text-4xl font-light text-foreground lg:text-5xl">{title}</h1>
        <div className="prose prose-sm mt-10 max-w-none text-muted-foreground [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-light [&_h2]:text-foreground [&_p]:leading-relaxed [&_ul]:mt-2 [&_ul]:space-y-1 [&_li]:leading-relaxed [&_a]:underline [&_a]:underline-offset-2 [&_a]:text-foreground/70 [&_a:hover]:text-foreground">
          {children}
        </div>
      </main>
      <footer className="border-t border-border bg-background">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground lg:px-10">
          © {new Date().getFullYear()} Villa 37. {locale === 'nl' ? 'Alle rechten voorbehouden.' : 'All rights reserved.'}
        </p>
      </footer>
    </>
  )
}
