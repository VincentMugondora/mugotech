import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-10">
      <div className="dark-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Ready to grow? Let{'\''}s talk.</h3>
          <p className="text-zinc-400 mt-1">Get a free proposal with opportunities and quick wins.</p>
        </div>
        <a className="btn-primary" href="mailto:hello@mugotech.com">hello@mugotech.com</a>
      </div>
    </section>
  )
}
