import React from 'react'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import CaseStudies from '../components/CaseStudies.jsx'
import MapStats from '../components/MapStats.jsx'
import Team from '../components/Team.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Insights from '../components/Insights.jsx'
import FAQ from '../components/FAQ.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div>
      <Hero />
      <main className="mx-auto max-w-7xl px-2 md:px-4">
        <div className="space-y-6">
          <Services />
          <CaseStudies />
          <MapStats />
          <Team />
          <Testimonials />
          <Insights />
          <FAQ />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  )
}
