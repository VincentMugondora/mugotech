import React from 'react'

export default function Services() {
  const items = [
    { title: 'SEO & Content', desc: 'Technical SEO, content strategy and on-page optimization.' },
    { title: 'Paid Media', desc: 'Google, Meta and LinkedIn ads optimized for ROAS.' },
    { title: 'Web Design', desc: 'Modern, fast websites that convert.' },
    { title: 'Analytics', desc: 'GA4, dashboards and experimentation.' },
  ]
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
        <a className="text-sm text-emerald-700 hover:underline" href="#contact">Get a quote</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((s, i) => (
          <div key={i} className="card p-5">
            <div className="h-10 w-10 rounded-lg bg-emerald-600/10 text-emerald-700 grid place-items-center font-bold">{i + 1}</div>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-zinc-600">{s.desc}</p>
            <a href="#contact" className="mt-4 inline-flex text-sm text-emerald-700 hover:underline">Learn more</a>
          </div>
        ))}
      </div>
    </section>
  )
}
