import { Briefcase, GraduationCap, Award } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { courses, education, experienceGroups, skills } from '@/content/portfolio'

export function Trajectory() {
  return (
    <section id="trayectoria" className="py-24 sm:py-32">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">
              Hoja de vida
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight font-light text-primary sm:text-5xl">
              Una trayectoria <em className="italic">de campo, aula y vida.</em>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Profesional en salud ocupacional y psicología, con competencias para investigar,
              diseñar, gestionar y evaluar planes y proyectos, y para crear instrumentos que
              identifican factores de riesgo asociados al trabajo.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80"
                >
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Hoja de vida completa y referencias disponibles bajo solicitud.
            </p>
          </div>

          <Tabs defaultValue="experiencia" className="gap-8">
            <TabsList className="h-auto w-full flex-wrap justify-start gap-1 rounded-full bg-secondary p-1 sm:w-fit">
              <TabsTrigger value="experiencia" className="rounded-full px-4 py-2">
                <Briefcase aria-hidden /> Experiencia
              </TabsTrigger>
              <TabsTrigger value="formacion" className="rounded-full px-4 py-2">
                <GraduationCap aria-hidden /> Formación
              </TabsTrigger>
              <TabsTrigger value="cursos" className="rounded-full px-4 py-2">
                <Award aria-hidden /> Cursos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="experiencia" className="space-y-12">
              {experienceGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-display text-xl text-primary italic">{group.title}</h3>
                  <ol className="mt-5 border-l border-border">
                    {group.jobs.map((job) => (
                      <li key={job.org + job.period} className="relative pb-8 pl-7 last:pb-0">
                        <span
                          aria-hidden
                          className="absolute top-1.5 -left-[5px] size-[9px] rounded-full border-2 border-background bg-leaf"
                        />
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <p className="font-semibold text-foreground">
                            {job.role} <span className="font-normal text-muted-foreground">· {job.org}</span>
                          </p>
                          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                            {job.period} · {job.place}
                          </p>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{job.text}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="formacion">
              <ul className="grid gap-4 sm:grid-cols-3">
                {education.map((e) => (
                  <li key={e.title} className="rounded-2xl border border-border bg-card p-6">
                    <p className="font-display text-4xl font-light text-leaf">{e.year}</p>
                    <p className="mt-4 font-display text-xl leading-snug text-primary">{e.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{e.org}</p>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="cursos">
              <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
                {courses.map((c) => (
                  <li key={c.title} className="flex items-center justify-between gap-4 p-5">
                    <div>
                      <p className="font-medium text-foreground">{c.title}</p>
                      <p className="text-sm text-muted-foreground">{c.org}</p>
                    </div>
                    <span className="font-display text-lg text-leaf">{c.year}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
