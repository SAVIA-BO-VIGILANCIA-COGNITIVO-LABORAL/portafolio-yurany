import { values } from '@/content/portfolio'

export function Story() {
  return (
    <section id="sobre-mi" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-content gap-16 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">
            Mi historia
          </p>
          <blockquote className="mt-6 font-display text-3xl leading-snug font-light text-primary sm:text-4xl">
            <span aria-hidden className="mr-1 text-gold">“</span>
            Después migré, y entendí que faltaba la otra mitad. SAVIA BO nace de unir esas
            dos cosas.
            <span aria-hidden className="text-gold">”</span>
          </blockquote>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Me formé como <strong className="text-foreground">profesional en Salud Ocupacional</strong>{' '}
            en la Universidad del Quindío y como{' '}
            <strong className="text-foreground">psicóloga</strong> en la Universidad Católica Luis
            Amigó. Trabajé en obra como técnica de seguridad, y en mi práctica en la Fiscalía
            General de la Nación investigué las causas de las caídas en el trabajo desde la
            ergonomía cognitiva.
          </p>
          <p>
            Al migrar a Portugal trabajé en el campo, en una tienda y en el cuidado de personas
            mayores. Ahí viví desde dentro lo que antes medía desde fuera: el cansancio que no se
            reporta, el duelo, la presión económica y la soledad de empezar de nuevo.
          </p>
          <p>
            De esa unión nació <strong className="text-foreground">SAVIA BO</strong>: una
            herramienta para que cualquier empresa, sin importar su tamaño o país, pueda
            prevenir con información y no reaccionar cuando ya es tarde.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-content px-4 sm:px-6">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <div key={v.title} className="bg-card p-7">
            <span className="font-display text-sm text-gold">0{i + 1}</span>
            <h3 className="mt-3 font-display text-2xl text-primary">{v.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}
