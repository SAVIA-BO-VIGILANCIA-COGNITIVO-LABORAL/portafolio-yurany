import { contact } from '@/content/portfolio'

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-primary-foreground">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <p className="font-display text-3xl font-light">Yurany Monsalve Herrera</p>
            <p className="mt-2 text-sm text-primary-foreground/65">
              Psicóloga y profesional en Salud Ocupacional. Fundadora de SAVIA BO.
            </p>
          </div>
          <nav aria-label="Redes" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {contact.socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-primary-foreground/75 transition-colors hover:text-gold"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/55 md:flex-row">
          <p>© {new Date().getFullYear()} Yurany Monsalve Herrera · SAVIA BO. Todos los derechos reservados.</p>
          <p>
            Información para la toma de decisiones organizacionales. No constituye diagnóstico
            clínico.
          </p>
        </div>
      </div>
    </footer>
  )
}
