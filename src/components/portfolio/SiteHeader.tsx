import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#savia-bo', label: 'SAVIA BO' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#libro-y-guias', label: 'Libro y guías' },
  { href: '#contacto', label: 'Contacto' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-colors duration-300 motion-reduce:transition-none',
        scrolled
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="group flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold text-primary">
            Yurany Monsalve
          </span>
          <span className="hidden text-xs tracking-[0.2em] text-muted-foreground uppercase sm:inline">
            × SAVIA BO
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#contacto">Contratar</a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Abrir menú"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetHeader>
              <SheetTitle className="font-display text-2xl text-primary">
                Yurany Monsalve
              </SheetTitle>
              <SheetDescription>
                Psicología, salud ocupacional y SAVIA BO
              </SheetDescription>
            </SheetHeader>
            <nav aria-label="Menú móvil" className="flex flex-col gap-1 px-4">
              {links.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-md px-2 py-3 font-display text-xl text-foreground hover:bg-muted"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
