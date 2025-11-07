import React from 'react'

export default function Testimonials() {
  const quotes = [
    { q: 'They doubled our qualified pipeline in 90 days.', a: 'VP Marketing, SaaS' },
    { q: 'Best agency experience we\'ve had — transparent and effective.', a: 'Founder, DTC' },
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid md:grid-cols-3 gap-4">
        {quotes.map((t, i) => (
          <figure key={i} className="dark-card p-6">
            <blockquote className="text-lg font-medium">“{t.q}”</blockquote>
            <figcaption className="mt-4 text-sm text-zinc-400">{t.a}</figcaption>
          </figure>
        ))}
        <div className="card p-6 flex items-center justify-center text-center">
          <div>
            <div className="text-4xl font-extrabold">4.9/5</div>
            <div className="text-sm text-zinc-600">Average client rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
