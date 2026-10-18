import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { Contact } from '@/components/portfolio/Contact'
import { Guides } from '@/components/portfolio/Guides'
import { Hero, SectorStrip } from '@/components/portfolio/Hero'
import { Savia } from '@/components/portfolio/Savia'
import { Services } from '@/components/portfolio/Services'
import { SiteFooter } from '@/components/portfolio/SiteFooter'
import { SiteHeader } from '@/components/portfolio/SiteHeader'
import { Story } from '@/components/portfolio/Story'
import { Trajectory } from '@/components/portfolio/Trajectory'
import { services } from '@/content/portfolio'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [service, setService] = useState('')

  function requestService(id: string) {
    setService(services.find((s) => s.id === id)?.title ?? '')
    document.getElementById('contacto')?.scrollIntoView()
  }

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SectorStrip />
        <Story />
        <Services onRequest={requestService} />
        <Savia />
        <Trajectory />
        <Guides />
        <Contact service={service} onServiceChange={setService} />
      </main>
      <SiteFooter />
    </>
  )
}
