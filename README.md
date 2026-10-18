# Yurany Monsalve Herrera · Portafolio de servicios

Portafolio profesional de **Yurany Monsalve Herrera**, psicóloga y profesional en Salud Ocupacional, fundadora de **SAVIA BO** — Vigilancia Cognitiva y Bienestar Organizacional.

La página reúne en un solo enlace para compartir:

- **Servicios** con precios transparentes (SAVIA BO, Diagnóstico Express) y servicios a medida bajo cotización: talleres de ergonomía cognitiva y pausas activas, acompañamiento en riesgo psicosocial, cultura de seguridad en obra y trabajo en alturas, y bienestar del trabajador migrante.
- **SAVIA BO**: misión, cómo funciona, las 12 dimensiones del índice IVCL y los planes.
- **Trayectoria**: experiencia, formación y cursos tomados de la hoja de vida (sin datos personales sensibles).
- **Libro y guías**: enlaces a Beacons y a las guías de SAVIA BO.
- **Contacto**: formulario (Netlify Forms), correo y WhatsApp Colombia / Portugal.

## Tecnologías

TanStack Start (React 19) · Tailwind CSS 4 · componentes shadcn/ui · Netlify Forms · Netlify Image CDN · despliegue en Netlify.

## Ejecutar en local

```bash
pnpm install
netlify dev        # recomendado: emula Netlify Forms y el Image CDN
# o
pnpm dev           # servidor Vite en http://localhost:3000
```

## Editar el contenido

Todos los textos, precios y datos están en `src/content/portfolio.ts`. Las imágenes de marca están en `public/img/` y se muestran sin modificaciones.

Los mensajes del formulario llegan al panel de Netlify, en **Forms**, donde se pueden activar notificaciones por correo.
