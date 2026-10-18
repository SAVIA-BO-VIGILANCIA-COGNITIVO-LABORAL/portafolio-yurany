import { ArrowUpRight, Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { services } from '@/content/portfolio'

export function Services({ onRequest }: { onRequest: (serviceId: string) => void }) {
  return (
    <section id="servicios" className="bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">
              Portafolio de servicios
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight font-light text-primary sm:text-5xl">
              Prevención con nombre propio,{' '}
              <em className="italic">para equipos de cualquier tamaño.</em>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Precios publicados con transparencia. Los servicios a medida se cotizan sin
            compromiso según su equipo y país.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <li
              key={service.id}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-leaf/50 hover:shadow-xl hover:shadow-forest/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl font-light text-leaf/40 transition-colors group-hover:text-leaf">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {service.forWho}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl leading-snug text-primary">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-leaf" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-7">
                <div className="border-t border-border pt-5">
                  <p className="font-display text-2xl text-foreground">{service.price}</p>
                  {service.priceNote && (
                    <p className="mt-1 text-xs text-muted-foreground">{service.priceNote}</p>
                  )}
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Button
                    className="rounded-full"
                    onClick={() => onRequest(service.id)}
                  >
                    Solicitar
                  </Button>
                  {service.link && (
                    <a
                      href={service.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {service.link.label}
                      <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          Los servicios ofrecen información para la toma de decisiones organizacionales y no
          constituyen diagnóstico clínico. Complementan, sin sustituir, los instrumentos
          oficiales de gestión del riesgo psicosocial de cada país.
        </p>
      </div>
    </section>
  )
}
