import React, { useState } from 'react'

export default function FAQ() {
  const data = [
    { q: 'How quickly can we start?', a: 'Typically within 1–2 weeks after discovery and scope alignment.' },
    { q: 'What industries do you specialize in?', a: 'We work across SaaS, E‑commerce, Fintech and B2B services.' },
    { q: 'What does pricing look like?', a: 'Flexible retainers and project-based pricing depending on scope.' },
  ]
  const [open, setOpen] = useState(0)
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently asked questions</h2>
      <ul className="space-y-3">
        {data.map((f, i) => (
          <li key={i} className="card overflow-hidden">
            <button className="w-full text-left p-5 font-medium flex items-center justify-between" onClick={() => setOpen(open === i ? -1 : i)}>
              {f.q}
              <span className="ml-4 text-zinc-500">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <div className="px-5 pb-5 text-sm text-zinc-600">{f.a}</div>}
          </li>
        ))}
      </ul>
    </section>
  )
}
