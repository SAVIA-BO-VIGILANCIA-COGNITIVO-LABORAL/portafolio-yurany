import { useState, type FormEvent } from 'react'
import { Clock, Mail, MessageCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { contact, services } from '@/content/portfolio'

type State = 'idle' | 'pending' | 'success' | 'error'

export function Contact({
  service,
  onServiceChange,
}: {
  service: string
  onServiceChange: (id: string) => void
}) {
  const [state, setState] = useState<State>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const form = event.currentTarget
    const body = new URLSearchParams()
    new FormData(form).forEach((value, key) => body.append(key, String(value)))
    setState('pending')
    try {
      const response = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Submission failed')
      const isUnprocessedRegistration = /\bdata-netlify\s*=/i.test(await response.text())
      if (isUnprocessedRegistration) throw new Error('Form handling is unavailable')
      form.reset()
      onServiceChange('')
      setState('success')
    } catch {
      setState('error')
    }
  }

  const channels = [
    { icon: Mail, label: 'Correo', value: contact.email, href: `mailto:${contact.email}` },
    {
      icon: MessageCircle,
      label: `WhatsApp ${contact.whatsappCo.label}`,
      value: contact.whatsappCo.number,
      href: contact.whatsappCo.href,
    },
    {
      icon: MessageCircle,
      label: `WhatsApp ${contact.whatsappPt.label}`,
      value: contact.whatsappPt.number,
      href: contact.whatsappPt.href,
    },
  ]

  return (
    <section id="contacto" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-content gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">Contratar</p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-light text-primary sm:text-5xl">
            ¿Listo para proteger <em className="italic">a su equipo?</em>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Cuénteme sobre su organización y le respondo en menos de 48 horas con una
            propuesta clara, sin compromiso.
          </p>

          <ul className="mt-10 space-y-3">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-leaf/50"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <c.icon className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">{c.label}</span>
                    <span className="block font-medium text-foreground">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4" aria-hidden /> {contact.hours}
          </p>
        </div>

        <form
          name="contact"
          method="POST"
          action="/contact-form.html"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={submit}
          onChange={() => {
            if (state !== 'pending') setState('idle')
          }}
          className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-forest/5 sm:p-10"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              No llenar
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <fieldset disabled={state === 'pending'} className="grid gap-5 sm:grid-cols-2">
            <legend className="sr-only">Datos de contacto</legend>
            <div className="grid gap-2">
              <Label htmlFor="c-name">Nombre completo</Label>
              <Input id="c-name" name="name" autoComplete="name" required maxLength={100} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="c-email">Correo electrónico</Label>
              <Input id="c-email" name="email" type="email" autoComplete="email" required maxLength={254} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="c-org">Empresa u organización</Label>
              <Input id="c-org" name="organization" autoComplete="organization" maxLength={120} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="c-country">País</Label>
              <Input id="c-country" name="country" autoComplete="country-name" maxLength={60} />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="c-service">Servicio de interés</Label>
              <select
                id="c-service"
                name="service"
                value={service}
                onChange={(e) => onServiceChange(e.target.value)}
                className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <option value="">Aún no lo sé, quiero orientación</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="c-message">Mensaje</Label>
              <Textarea
                id="c-message"
                name="message"
                required
                maxLength={2000}
                rows={5}
                placeholder="Tamaño del equipo, sector y lo que le gustaría lograr."
              />
            </div>
            <label className="flex items-start gap-3 text-sm text-muted-foreground sm:col-span-2">
              <input
                type="checkbox"
                name="consent"
                value="acepto"
                required
                className="mt-1 size-4 accent-[var(--primary)]"
              />
              Acepto que mis datos se usen únicamente para responder a esta solicitud, conforme a
              la Ley 1581 de 2012 y el RGPD.
            </label>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="h-12 w-full rounded-full text-base sm:w-auto sm:px-10">
                {state === 'pending' ? 'Enviando…' : 'Enviar solicitud'}
              </Button>
            </div>
          </fieldset>
          <div className="mt-5" aria-live="polite">
            {state === 'error' && (
              <p role="alert" className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                No pudimos confirmar el envío. Sus datos siguen aquí; intente de nuevo o escríbame
                por WhatsApp o correo.
              </p>
            )}
            {state === 'success' && (
              <p role="status" className="rounded-lg bg-secondary p-3 text-sm text-secondary-foreground">
                ¡Gracias! Recibí su mensaje y le responderé pronto.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
