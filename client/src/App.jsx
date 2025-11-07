import React from 'react'
import { useState } from 'react'

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-backdrop-filter:bg-white/60 bg-white/70 border-b border-zinc-200/70">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="flex items-center gap-2 font-extrabold text-lg">
            <span className="inline-grid place-items-center h-8 w-8 rounded-lg bg-emerald-600 text-white">M</span>
            Mugotech
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
            <a className="hover:text-zinc-900" href="#services">Services</a>
            <a className="hover:text-zinc-900" href="#work">Work</a>
            <a className="hover:text-zinc-900" href="#about">About</a>
            <a className="hover:text-zinc-900" href="#blog">Blog</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-primary hidden md:inline-flex">Get a free proposal</a>
            <button className="md:hidden rounded-lg p-2 hover:bg-zinc-100" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-zinc-200/70">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm">
            <a className="py-1" href="#services" onClick={() => setOpen(false)}>Services</a>
            <a className="py-1" href="#work" onClick={() => setOpen(false)}>Work</a>
            <a className="py-1" href="#about" onClick={() => setOpen(false)}>About</a>
            <a className="py-1" href="#blog" onClick={() => setOpen(false)}>Blog</a>
            <a className="btn-primary mt-1" href="#contact" onClick={() => setOpen(false)}>Get a free proposal</a>
          </nav>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:py-12">
      <div className="relative overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950 text-zinc-50">
        {/* in-card nav */}
        <div className="px-4 md:px-8 pt-4 md:pt-6">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 text-sm font-semibold">
              <span className="inline-grid place-items-center h-7 w-7 rounded-full bg-emerald-600">D</span>
              <span className="hidden sm:inline">digicraft</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
              <a className="text-emerald-400" href="#">Home</a>
              <a className="hover:text-white" href="#about">About</a>
              <a className="hover:text-white" href="#services">Services</a>
              <a className="hover:text-white" href="#work">Cases</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#contact" className="btn-primary hidden md:inline-flex">Get Started</a>
              <button className="md:hidden rounded-lg p-2 hover:bg-white/5" aria-label="Menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
            </div>
          </div>
        </div>

        {/* decorative bg */}
        <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(80%_60%_at_0%_0%,rgba(16,185,129,.18),transparent_60%),radial-gradient(60%_50%_at_100%_0%,rgba(16,185,129,.10),transparent_65%)]" />

        {/* content */}
        <div className="relative px-4 md:px-8 pb-6 md:pb-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* text */}
            <div className="py-4 md:py-8">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Elevate Your Business Through Online Marketing
              </h1>
              <p className="mt-4 text-zinc-300 max-w-xl">
                Unlock the full potential of your business with Elevate Your Business through Online Marketing. In this transformative journey, we guide you through the dynamic landscape of digital strategies.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a className="btn-primary" href="#contact">Get Started</a>
                <a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-white/5 hover:bg-white/10 text-zinc-50" href="#">
                  <span className="inline-grid place-items-center h-6 w-6 rounded-full bg-white/10"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
                  Watch Demo
                </a>
              </div>
            </div>

            {/* mosaic */}
            <div className="relative grid grid-cols-2 gap-4">
              {/* doodle near mosaic */}
              <div className="absolute -top-6 left-1 flex items-center gap-2 text-xs text-zinc-300">
                <svg width="80" height="36" viewBox="0 0 80 36" fill="none" stroke="currentColor" className="opacity-70"><path d="M2 28 C26 6, 54 6, 78 24" strokeWidth="1.5"/></svg>
                <span className="italic">Let’s start your journey here!</span>
              </div>
              <img className="rounded-2xl border border-zinc-800 aspect-4/3 object-cover" src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop" alt="mosaic 1" />
              <img className="rounded-2xl border border-zinc-800 aspect-4/3 object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="mosaic 2" />
              <img className="rounded-2xl border border-zinc-800 aspect-4/3 object-cover" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop" alt="mosaic 3" />
              <img className="rounded-2xl border border-zinc-800 aspect-4/3 object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="mosaic 4" />
            </div>
          </div>
        </div>
      </div>

      {/* logos row */}
      <div className="px-1 md:px-2">
        <div className="mx-auto max-w-5xl flex items-center justify-center gap-10 md:gap-16 py-6 text-zinc-500">
          <span className="opacity-70">informa</span>
          <span className="opacity-70">Microsoft</span>
          <span className="opacity-70">logitech</span>
        </div>
      </div>
    </section>
  )
}

function Services() {
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
            <div className="h-10 w-10 rounded-lg bg-emerald-600/10 text-emerald-700 grid place-items-center font-bold">{i+1}</div>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-zinc-600">{s.desc}</p>
            <a href="#contact" className="mt-4 inline-flex text-sm text-emerald-700 hover:underline">Learn more</a>
          </div>
        ))}
      </div>
    </section>
  )
}

function CaseStudies() {
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

function MapStats() {
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

function Team() {
  const people = [
    { name: 'Alex', role: 'Strategy', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&auto=format&fit=crop&w=400' },
    { name: 'Priya', role: 'Performance', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&auto=format&fit=crop&w=400' },
    { name: 'Lucas', role: 'Design', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&auto=format&fit=crop&w=400' },
    { name: 'Maya', role: 'Analytics', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&auto=format&fit=crop&w=400' },
  ]
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Meet the team</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {people.map((p, i) => (
          <div key={i} className="card overflow-hidden text-center">
            <img className="w-full h-48 object-cover" src={p.img} alt="" />
            <div className="p-4">
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-zinc-600">{p.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
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

function Insights() {
  const posts = [
    { title: 'SEO in 2026: What Changed', img: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&auto=format&fit=crop&w=1200' },
    { title: 'Creative that Converts', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&auto=format&fit=crop&w=1200' },
    { title: 'GA4: Measuring What Matters', img: 'https://images.unsplash.com/photo-1460925895917-4f9f1a2f?ixid=Mnwy&auto=format&fit=crop&w=1200' },
  ]
  return (
    <section id="blog" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Insights & Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((p, i) => (
          <article key={i} className="card overflow-hidden">
            <img src={p.img} alt="" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <a className="mt-2 inline-flex text-sm text-emerald-700 hover:underline" href="#">Read article</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
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

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-10">
      <div className="dark-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Ready to grow? Let\'s talk.</h3>
          <p className="text-zinc-400 mt-1">Get a free proposal with opportunities and quick wins.</p>
        </div>
        <a className="btn-primary" href="mailto:hello@mugotech.com">hello@mugotech.com</a>
      </div>
    </section>
  )
}

function Sidebar() {
  return (
    <aside className="hidden xl:block sticky top-20 h-fit space-y-4">
      <div className="card p-5">
        <div className="text-xs text-zinc-500">Average response</div>
        <div className="text-3xl font-extrabold"><span className="text-emerald-700">2</span> hrs</div>
        <p className="mt-2 text-sm text-zinc-600">Chat with our team and get a proposal fast.</p>
        <a href="#contact" className="mt-4 btn-primary w-full">Start a conversation</a>
      </div>
      <div className="dark-card p-5">
        <div className="text-sm">“Clarity, speed and results. Highly recommend.”</div>
        <div className="mt-3 text-xs text-zinc-400">COO, Retail</div>
      </div>
      <div className="card overflow-hidden">
        <img className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&auto=format&fit=crop&w=1200" alt="sidebar" />
        <div className="p-4">
          <div className="text-sm font-medium">Design + Dev + Marketing</div>
          <div className="text-xs text-zinc-600 mt-1">One integrated team.</div>
        </div>
      </div>
      <div className="dark-card p-6">
        <div className="text-lg font-semibold">Free Marketing Playbook</div>
        <p className="text-sm text-zinc-400 mt-1">20 pages of proven growth tactics.</p>
        <a className="btn-primary mt-4 w-full" href="#">Download</a>
      </div>
      <div className="card overflow-hidden">
        <img className="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&auto=format&fit=crop&w=1200" alt="mini post" />
        <div className="p-4">
          <div className="text-sm font-medium">How we scaled a DTC brand 3.2x</div>
          <a className="mt-2 inline-flex text-xs text-emerald-700 hover:underline" href="#">Read case</a>
        </div>
      </div>
      <div className="card p-5 flex items-center gap-3">
        <img className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&auto=format&fit=crop&w=200" alt="person" />
        <div className="min-w-0">
          <div className="text-sm font-medium truncate">Talk to Victor — Growth Lead</div>
          <a className="text-xs text-emerald-700 hover:underline" href="#contact">Book a call</a>
        </div>
      </div>
    </aside>
  )
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pt-2 pb-10">
      <div className="border-t border-zinc-200/70 pt-6 text-sm text-zinc-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Mugotech</div>
        <div className="flex items-center gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookie</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div>
      <main className="mx-auto max-w-7xl px-2 md:px-4">
        <div className="space-y-6">
          <Hero />
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
