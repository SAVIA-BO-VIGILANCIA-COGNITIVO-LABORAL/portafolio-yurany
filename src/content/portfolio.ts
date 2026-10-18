// Todo el contenido del portafolio vive aquí para editarlo sin tocar los componentes.
// Fuentes: hoja de vida de Yurany Monsalve Herrera, savia-bo.com y su página de Beacons.

export const contact = {
  email: 'contacto@savia-bo.com',
  whatsappCo: {
    label: 'Colombia',
    number: '+57 315 892 1112',
    href: 'https://wa.me/573158921112?text=Hola%20Yurany%2C%20quisiera%20informaci%C3%B3n%20sobre%20tus%20servicios.',
  },
  whatsappPt: {
    label: 'Portugal / Europa',
    number: '+351 967 630 282',
    href: 'https://wa.me/351967630282?text=Hola%20Yurany%2C%20quisiera%20informaci%C3%B3n%20sobre%20tus%20servicios.',
  },
  hours: 'Lunes a viernes · 8:00 a 18:00 (hora de Colombia / Portugal)',
  saviaUrl: 'https://www.savia-bo.com/',
  beaconsUrl: 'https://beacons.ai/yuras.devidasodeviajes',
  socials: [
    {
      label: 'LinkedIn personal',
      href: 'https://www.linkedin.com/in/yurany-monsalve-herrera-378345420',
    },
    { label: 'LinkedIn SAVIA BO', href: 'https://www.linkedin.com/company/savia-bo/' },
    { label: 'Instagram', href: 'https://www.instagram.com/saviabo_vcl/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@saviabo_vcl' },
    { label: 'Beacons', href: 'https://beacons.ai/yuras.devidasodeviajes' },
  ],
}

export type Service = {
  id: string
  title: string
  summary: string
  forWho: string
  includes: string[]
  price: string
  priceNote?: string
  link?: { label: string; href: string }
}

export const services: Service[] = [
  {
    id: 'savia-ivcl',
    title: 'Vigilancia cognitiva con SAVIA BO',
    summary:
      'Medición anónima del Índice de Vulnerabilidad Cognitiva-Laboral (IVCL) de su equipo en 12 dimensiones, con tablero, informe PDF y semáforo de riesgo.',
    forWho: 'Empresas de 1 a más de 200 personas',
    includes: [
      'Encuesta anónima de 15 minutos, sin instalación',
      'Tablero de resultados e informe PDF',
      'Plan de acción preventivo',
    ],
    price: '2 meses gratis',
    priceNote: 'Hasta 20 personas, sin tarjeta. Luego desde 150 €/año.',
    link: { label: 'Ver planes en savia-bo.com', href: 'https://www.savia-bo.com/' },
  },
  {
    id: 'diagnostico-express',
    title: 'Diagnóstico Express',
    summary:
      'Una fotografía puntual del estado cognitivo-laboral de su equipo, ideal para empezar o para un momento crítico de la organización.',
    forWho: 'Equipos de 1 a 200 personas',
    includes: [
      'Aplicación única del IVCL',
      'Informe con hallazgos priorizados',
      'Recomendaciones accionables',
    ],
    price: 'Desde 50 €',
    priceNote: 'Pago único · 54 USD · 215.000 COP (1–20 personas).',
    link: { label: 'Más información', href: 'https://www.savia-bo.com/' },
  },
  {
    id: 'ergonomia-cognitiva',
    title: 'Talleres de ergonomía cognitiva y pausas activas',
    summary:
      'Sesiones prácticas para reducir la fatiga mental y la distracción en el trabajo, con pausas cognitivas y hábitos aplicables desde el primer día.',
    forWho: 'Equipos operativos, administrativos y líderes',
    includes: [
      'Charla o taller presencial / virtual',
      'Pausas cognitivas guiadas',
      'Guía de apoyo para el equipo',
    ],
    price: 'Bajo cotización',
    priceNote: 'Según número de personas, modalidad y país.',
  },
  {
    id: 'riesgo-psicosocial',
    title: 'Acompañamiento en riesgo psicosocial y bienestar',
    summary:
      'Apoyo para identificar factores de riesgo psicosocial y diseñar acciones preventivas, tomando como referencia la ISO 45003:2021 y la normativa de cada país.',
    forWho: 'Áreas de talento humano y SST',
    includes: [
      'Revisión de factores de riesgo laborales',
      'Diseño de instrumentos y encuestas',
      'Plan de intervención y seguimiento',
    ],
    price: 'Bajo cotización',
    priceNote: 'Complementa, no sustituye, los instrumentos oficiales.',
  },
  {
    id: 'cultura-seguridad',
    title: 'Cultura de seguridad en obra y trabajo en alturas',
    summary:
      'Prevención desde la experiencia en campo: charlas pre-operacionales, identificación de riesgos y atención al factor humano detrás de cada accidente.',
    forWho: 'Construcción, logística, manufactura, agro',
    includes: [
      'Charlas pre-operacionales',
      'Identificación de riesgos e inspecciones',
      'Análisis del factor cognitivo en caídas',
    ],
    price: 'Bajo cotización',
    priceNote: 'Modalidad presencial o virtual.',
  },
  {
    id: 'bienestar-migrante',
    title: 'Bienestar del trabajador migrante',
    summary:
      'Orientación a organizaciones que integran personas migrantes, con una mirada que nace de haber vivido ese camino en primera persona.',
    forWho: 'Empresas con equipos internacionales',
    includes: [
      'Sensibilización para líderes',
      'Identificación de vulnerabilidad migratoria',
      'Acciones de integración y cuidado',
    ],
    price: 'Bajo cotización',
    priceNote: 'Disponible en español y portugués.',
  },
]

export const saviaSteps = [
  { title: 'Registre su empresa', text: 'En minutos y sin instalar nada.' },
  { title: 'Comparta el enlace', text: 'Encuesta anónima para cada trabajador.' },
  { title: 'Lea los resultados', text: 'Tablero visual e informe en PDF.' },
  { title: 'Actúe a tiempo', text: 'Defina un plan de acción preventivo.' },
]

export const saviaDimensions = [
  { name: 'Recuperación biológica', weight: 14 },
  { name: 'Fatiga cognitiva', weight: 13 },
  { name: 'Carga mental', weight: 11 },
  { name: 'Seguridad psicológica', weight: 10 },
  { name: 'Recuperación emocional', weight: 8 },
  { name: 'Burnout', weight: 8 },
  { name: 'Presión silenciosa', weight: 7 },
  { name: 'Vulnerabilidad migratoria', weight: 7 },
  { name: 'Carga invisible', weight: 7 },
  { name: 'Distracción cognitiva', weight: 6 },
  { name: 'Distracción financiera', weight: 5 },
  { name: 'Duelo', weight: 4 },
]

export const saviaPlans = [
  { name: 'Inicial', team: '1–20 personas', price: '0 € · 2 meses', after: 'luego 150 €/año' },
  { name: 'Empresarial', team: '21–50 personas', price: '339 €/año', after: '365 USD · 1.450.000 COP + imp.' },
  { name: 'Corporativo', team: '51–200 personas', price: '689 €/año', after: '740 USD · 2.950.000 COP + imp.' },
  { name: 'Enterprise', team: '+200 personas', price: 'A medida', after: 'Cotización personalizada' },
]

export type Job = {
  role: string
  org: string
  place: string
  period: string
  text: string
}

export const experienceGroups: { title: string; jobs: Job[] }[] = [
  {
    title: 'Psicología y seguridad en el trabajo',
    jobs: [
      {
        role: 'Practicante de Psicología',
        org: 'Fiscalía General de la Nación',
        place: 'Colombia',
        period: 'Abr – Nov 2019',
        text: 'Apoyo a la evaluación de riesgo psicosocial. Creé, apliqué y analicé una encuesta sobre las causas de accidentes por caídas de origen laboral desde la ergonomía cognitiva, y dirigí pausas cognitivas.',
      },
      {
        role: 'Técnica de Seguridad',
        org: 'Construcción y reformas',
        place: 'Colombia',
        period: 'Nov 2017 – Feb 2018',
        text: 'Charlas pre-operacionales, verificación de elementos de protección, permisos de trabajo, inspección de herramientas y equipos, y seguimiento del estado de salud de los trabajadores.',
      },
      {
        role: 'Técnica de Seguridad',
        org: 'Ema Ingeniería',
        place: 'Colombia',
        period: 'Ago – Sep 2017',
        text: 'Identificación de riesgos, permisos de trabajo, charlas pre-operacionales y verificación de elementos de protección.',
      },
    ],
  },
  {
    title: 'Experiencia como trabajadora migrante en Portugal',
    jobs: [
      {
        role: 'Apoyo cuidadora',
        org: 'Cuidado de personas mayores',
        place: 'Portugal',
        period: 'May 2026 – actualidad',
        text: 'Acompañamiento y cuidado de personas mayores, actividades para mantener activa la memoria y atención a su bienestar diario.',
      },
      {
        role: 'Trabajadora agrícola y atención en tienda',
        org: 'Hidroplay.eu',
        place: 'Portugal',
        period: 'Feb 2024 – Abr 2026',
        text: 'Recolección y control de calidad e inocuidad de productos agrícolas, atención al cliente en tienda, manejo de caja y orden de espacios.',
      },
      {
        role: 'Trabajadora agrícola',
        org: 'Vale da Rosa',
        place: 'Portugal',
        period: 'Jul 2023 – Ene 2024',
        text: 'Selección y control de calidad de uva, manipulación de cajas y labores de campo.',
      },
    ],
  },
  {
    title: 'Servicio al cliente y operaciones',
    jobs: [
      {
        role: 'Auxiliar Operativa',
        org: 'Cine Colombia',
        place: 'Colombia',
        period: 'Jun 2016 – Ago 2017',
        text: 'Atención al cliente, manejo de caja y control de inventarios y fechas de vencimiento.',
      },
      {
        role: 'Asesora',
        org: 'Emergía',
        place: 'Colombia',
        period: 'Ago 2011 – Ene 2016',
        text: 'Más de cuatro años en atención al cliente, reclamaciones, explicación de facturas, venta cruzada y back office.',
      },
      {
        role: 'Asesora',
        org: 'La Aurora Funerales y Capillas',
        place: 'Colombia',
        period: 'Jul 2010 – Abr 2011',
        text: 'Auditoría de llamadas, verificación de datos y gestión documental con los titulares del servicio.',
      },
    ],
  },
]

export const education = [
  { title: 'Psicología', org: 'Universidad Católica Luis Amigó', year: '2019' },
  { title: 'Profesional en Salud Ocupacional', org: 'Universidad del Quindío', year: '2017' },
  { title: 'Técnico en Sistemas', org: 'Unitécnica', year: '2010' },
]

export const courses = [
  { title: 'Curso básico de portugués · 150 h', org: 'Escola Dona Inês de Castro', year: '2025' },
  { title: 'Programación neurolingüística · 40 h', org: 'Cajasan', year: '2020' },
  { title: 'Reentrenamiento trabajo seguro en alturas · 20 h', org: 'SENA', year: '2017' },
  { title: 'Avanzado trabajo seguro en alturas · 40 h', org: 'SENA', year: '2015' },
  { title: 'Tecnologías de la información para la unidad administrativa', org: 'SENA', year: '2013' },
  { title: 'Administración del talento humano · 40 h', org: 'SENA', year: '2011' },
  { title: 'Servicio al cliente y ventas · 30 h', org: 'SENA', year: '2010' },
]

export const skills = [
  'Seguridad y salud en el trabajo',
  'Riesgo psicosocial',
  'Ergonomía cognitiva',
  'Diseño de instrumentos de medición',
  'Gestión y evaluación de proyectos',
  'Atención al cliente',
  'Trabajo en equipo',
  'Español · Portugués',
]

export const guides = [
  {
    title: 'Mi libro',
    text: 'Disponible en mi página de Beacons, junto con el resto de mis publicaciones.',
    href: 'https://beacons.ai/yuras.devidasodeviajes',
    cta: 'Ver en Beacons',
  },
  {
    title: 'Guía de Ergonomía Cognitiva',
    text: 'Prácticas simples para cuidar la atención y reducir la fatiga mental en el trabajo.',
    href: 'https://www.savia-bo.com/',
    cta: 'Ver en SAVIA BO',
  },
  {
    title: 'Guía de Pausas Activas',
    text: 'Rutinas breves para recuperar energía física y mental durante la jornada.',
    href: 'https://www.savia-bo.com/',
    cta: 'Ver en SAVIA BO',
  },
  {
    title: 'Libro de Mándalas',
    text: 'Un espacio creativo para soltar tensión y volver a la calma.',
    href: 'https://www.savia-bo.com/',
    cta: 'Ver en SAVIA BO',
  },
]

export const values = [
  {
    title: 'Honestidad',
    text: 'Le digo con claridad qué puedo hacer, qué no y cuánto cuesta. Sin promesas que no pueda cumplir.',
  },
  {
    title: 'Confidencialidad',
    text: 'Las encuestas son anónimas. Los datos se tratan según la Ley 1581 de 2012 y el RGPD europeo.',
  },
  {
    title: 'Rigor técnico',
    text: 'Trabajo con referencias reconocidas como la ISO 45003:2021 y la Resolución 2646 de 2008.',
  },
  {
    title: 'Respeto',
    text: 'Cada persona es más que un número. Escucho antes de recomendar.',
  },
]
