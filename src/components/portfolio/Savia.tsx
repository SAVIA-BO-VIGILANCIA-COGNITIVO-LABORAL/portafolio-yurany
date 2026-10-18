import { ArrowUpRight, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { contact, saviaDimensions, saviaPlans, saviaSteps } from '@/content/portfolio'

const maxWeight = Math.max(...saviaDimensions.map((d) => d.weight))

export function Savia() {
  return (
    <section
      id="savia-bo"
      className="relative overflow-hidden bg-forest-deep py-24 text-primary-foreground sm:py-32"
    >
      <img
        src="/.netlify/images?url=/img/leaf-texture.png&w=1600&fm=webp&q=70"
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute inset-0 size-full object-cover object-right opacity-60"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/90 to-forest-deep/30"
      />

      <div className="relative mx-auto max-w-content px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr]">
          <div className="w-44 shrink-0 rounded-2xl bg-primary-foreground p-2 shadow-2xl sm:w-56">
            <img
              src="/img/savia-logo.jpg"
              alt="Logo de SAVIA BO"
              width={1254}
              height={1254}
              loading="lazy"
              className="block aspect-square w-full"
            />
          </div>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Mi emprendimiento
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight font-light sm:text-6xl">
              SAVIA BO
            </h2>
            <p className="mt-2 font-display text-xl text-primary-foreground/80 italic">
              Vigilancia cognitiva y bienestar organizacional
            </p>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/75">
              Proteger a los equipos de trabajo con información preventiva, accesible y
              accionable. Porque prevenir un accidente laboral cuesta menos que atenderlo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-gold px-7 text-base text-accent-foreground hover:bg-gold/90"
              >
                <a href={contact.saviaUrl} target="_blank" rel="noreferrer">
                  Visitar savia-bo.com <ArrowUpRight />
                </a>
              </Button>
              <span className="inline-flex items-center gap-2 text-sm text-primary-foreground/70">
                <ShieldCheck className="size-4 text-gold" aria-hidden />
                Anónimo y confidencial · 15 minutos · sin instalación
              </span>
            </div>
          </div>
        </div>

        <ol className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {saviaSteps.map((step, i) => (
            <li key={step.title} className="bg-forest-deep/80 p-6 backdrop-blur-sm">
              <span className="font-display text-3xl text-gold">{i + 1}</span>
              <h3 className="mt-3 font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-primary-foreground/65">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-14 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-3xl font-light">
              El índice IVCL: <em className="italic">12 dimensiones</em>
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/65">
              Peso de cada dimensión en el Índice de Vulnerabilidad Cognitiva-Laboral.
            </p>
            <ul className="mt-8 space-y-3">
              {saviaDimensions.map((d) => (
                <li key={d.name} className="grid grid-cols-[10.5rem_1fr_2.5rem] items-center gap-3 text-sm">
                  <span className="text-primary-foreground/85">{d.name}</span>
                  <span className="h-2 overflow-hidden rounded-full bg-primary-foreground/10">
                    <span
                      className="block h-full rounded-full bg-gold"
                      style={{ width: `${(d.weight / maxWeight) * 100}%` }}
                    />
                  </span>
                  <span className="text-right tabular-nums text-primary-foreground/70">
                    {d.weight}%
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-3xl font-light">
              Planes <em className="italic">anuales</em>
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/65">
              Facturación anual con un ahorro aproximado del 10 %. Pagos procesados con Stripe.
            </p>
            <ul className="mt-8 divide-y divide-primary-foreground/10 rounded-2xl border border-primary-foreground/15 bg-forest-deep/60 backdrop-blur-sm">
              {saviaPlans.map((plan) => (
                <li key={plan.name} className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="font-display text-xl">{plan.name}</p>
                    <p className="text-xs text-primary-foreground/60">{plan.team}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gold">{plan.price}</p>
                    <p className="text-xs text-primary-foreground/60">{plan.after}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-primary-foreground/55">
              Información para la toma de decisiones organizacionales · No constituye
              diagnóstico clínico. Precios según savia-bo.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
