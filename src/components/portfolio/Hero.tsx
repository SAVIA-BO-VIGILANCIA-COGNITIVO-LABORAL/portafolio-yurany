import { ArrowDownRight, MessageCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { contact } from '@/content/portfolio'

const roles = ['Psicóloga', 'Profesional en Salud Ocupacional', 'Fundadora de SAVIA BO']

export function Hero() {
  return (
    <section
      id="inicio"
      className="grain relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-leaf/15 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-content items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 motion-reduce:animate-none">
          <ul className="mb-8 flex flex-wrap gap-x-3 gap-y-2 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            {roles.map((role, i) => (
              <li key={role} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="size-1 rounded-full bg-gold" />}
                {role}
              </li>
            ))}
          </ul>

          <h1 className="font-display text-5xl leading-[1.02] font-light text-primary sm:text-6xl lg:text-[5.25rem]">
            Cuidar la mente de quien trabaja es prevenir{' '}
            <em className="font-normal text-leaf italic">de raíz.</em>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Soy <strong className="font-semibold text-foreground">Yurany Monsalve Herrera</strong>.
            Uno la psicología, la seguridad en el trabajo y mi propia experiencia como
            trabajadora migrante para ayudar a las organizaciones a ver lo que no se ve:
            la fatiga, la carga mental y la presión silenciosa que anteceden a un accidente.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
              <a href="#servicios">
                Ver servicios <ArrowDownRight />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-primary/30 bg-transparent px-7 text-base text-primary hover:bg-primary/5"
            >
              <a href={contact.whatsappCo.href} target="_blank" rel="noreferrer">
                <MessageCircle /> Escribir por WhatsApp
              </a>
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ['12', 'dimensiones de riesgo medidas'],
              ['4', 'idiomas: ES · EN · FR · PT'],
              ['2', 'países: Colombia y Portugal'],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-4xl text-primary">{n}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[22rem] animate-in fade-in zoom-in-95 duration-1000 motion-reduce:animate-none">
          <div
            aria-hidden
            className="absolute inset-0 translate-x-5 translate-y-5 rounded-t-[11rem] rounded-b-2xl border border-gold"
          />
          <div className="relative overflow-hidden rounded-t-[11rem] rounded-b-2xl bg-forest shadow-2xl shadow-forest/25">
            <img
              src="/img/savia-founder.png"
              alt="Yurany Monsalve Herrera, fundadora de SAVIA BO"
              width={277}
              height={371}
              className="block aspect-[277/371] w-full"
              fetchPriority="high"
            />
          </div>
          <a
            href="#savia-bo"
            className="absolute -bottom-8 -left-6 flex items-center gap-3 rounded-2xl border border-border bg-card p-3 pr-5 shadow-xl transition-transform hover:-translate-y-0.5 sm:-left-12"
          >
            <span className="block size-14 shrink-0 overflow-hidden rounded-lg bg-muted">
              <img
                src="/img/savia-logo.jpg"
                alt=""
                width={56}
                height={56}
                className="size-full"
              />
            </span>
            <span>
              <span className="block font-display text-lg leading-tight text-primary">
                SAVIA BO
              </span>
              <span className="block text-xs text-muted-foreground">
                Bienestar organizacional
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function SectorStrip() {
  const sectors = [
    'Construcción',
    'Logística',
    'Manufactura',
    'Seguridad',
    'Salud',
    'Minería',
    'Agricultura',
    'Servicios',
  ]
  const row = [...sectors, ...sectors]
  return (
    <div className="overflow-hidden border-y border-forest bg-forest py-5 text-primary-foreground">
      <p className="sr-only">Sectores: {sectors.join(', ')}</p>
      <div aria-hidden className="marquee flex w-max gap-10">
        {row.map((s, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-light italic">
            {s}
            <span className="size-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  )
}
