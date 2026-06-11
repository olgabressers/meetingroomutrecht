import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">404</p>
      <h1 className="mt-4 font-serif text-5xl font-light text-foreground lg:text-6xl">
        Pagina niet gevonden
      </h1>
      <p className="mt-6 max-w-sm text-pretty leading-relaxed text-muted-foreground">
        De pagina die u zoekt bestaat niet of is verplaatst.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex rounded-full bg-primary px-8 py-3.5 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
      >
        Terug naar home
      </Link>
    </div>
  )
}
