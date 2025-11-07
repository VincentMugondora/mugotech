import React from 'react'

export default function CaseStudies() {
  const items = [
    { title: 'Ecommerce scale up', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&auto=format&fit=crop&w=1200' },
    { title: 'B2B lead engine', img: 'https://images.unsplash.com/photo-1529336953121-c6d1848c56e7?q=80&auto=format&fit=crop&w=1200' },
    { title: 'Fintech growth', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&auto=format&fit=crop&w=1200' },
  ]
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Recent Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((c, i) => (
          <article key={i} className="card overflow-hidden">
            <img src={c.img} alt="" className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">Problem → Solution → Result framework with measurable KPIs.</p>
              <a className="mt-3 inline-flex text-sm text-emerald-700 hover:underline" href="#">Read case</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
