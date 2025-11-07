import React from 'react'

export default function MapStats() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="card p-6 bg-linear-to-br from-emerald-600/10 to-white relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold">We work with clients around the world</h3>
            <p className="mt-2 text-sm text-zinc-600">Remote-first collaboration across timezones with transparent reporting.</p>
            <a href="#contact" className="mt-4 inline-flex btn-primary">Book a call</a>
          </div>
          <dl className="grid grid-cols-3 gap-4 md:col-span-2">
            <div className="card p-4 text-center">
              <dt className="text-sm text-zinc-600">Clients</dt>
              <dd className="text-2xl font-extrabold">120+</dd>
            </div>
            <div className="card p-4 text-center">
              <dt className="text-sm text-zinc-600">Avg. ROI</dt>
              <dd className="text-2xl font-extrabold">4.3x</dd>
            </div>
            <div className="card p-4 text-center">
              <dt className="text-sm text-zinc-600">Countries</dt>
              <dd className="text-2xl font-extrabold">18</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
