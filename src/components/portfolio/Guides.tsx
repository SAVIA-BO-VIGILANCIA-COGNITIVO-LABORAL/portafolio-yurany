import { ArrowUpRight, BookOpen } from 'lucide-react'

import { contact, guides } from '@/content/portfolio'

export function Guides() {
  const [book, ...rest] = guides
  return (
    <section id="libro-y-guias" className="bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">
            Publicaciones
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-light text-primary sm:text-5xl">
            Mi libro y <em className="italic">las guías que he creado.</em>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <a
            href={book.href}
            target="_blank"
            rel="noreferrer"
            className="group relative flex min-h-80 flex-col justify-between overflow-hidden rounded-3xl bg-forest p-8 text-primary-foreground sm:p-10"
          >
            <div
              aria-hidden
              className="absolute -right-24 -bottom-24 size-80 rounded-full border-[3rem] border-gold/20 transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none"
            />
            <BookOpen className="size-10 text-gold" aria-hidden />
            <div className="relative">
              <p className="text-xs tracking-[0.2em] text-primary-foreground/60 uppercase">
                @yuras.devidasodeviajes
              </p>
              <h3 className="mt-3 font-display text-4xl font-light">{book.title}</h3>
              <p className="mt-3 max-w-md text-primary-foreground/75">{book.text}</p>
              <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-accent-foreground">
                {book.cta} <ArrowUpRight className="size-4" aria-hidden />
              </span>
            </div>
          </a>

          <ul className="grid gap-4">
            {rest.map((g) => (
              <li key={g.title}>
                <a
                  href={g.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-leaf/50"
                >
                  <div>
                    <h3 className="font-display text-xl text-primary">{g.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{g.text}</p>
                  </div>
                  <ArrowUpRight
                    className="size-5 shrink-0 text-leaf transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-label={g.cta}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Encuentra todos mis enlaces en{' '}
          <a href={contact.beaconsUrl} target="_blank" rel="noreferrer" className="font-medium text-primary underline underline-offset-4">
            beacons.ai/yuras.devidasodeviajes
          </a>
          .
        </p>
      </div>
    </section>
  )
}
